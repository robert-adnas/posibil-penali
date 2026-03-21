import { useRef, useEffect, useState, useCallback } from 'react';
import * as d3 from 'd3';
import { getPartyColor, getPartyToken } from '../utils/partyColors';
import { POSITION_LABELS, STATUS_LABELS, formatYears } from '../utils/constants';

export function HemicycleChart({ data, onSelect }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 450 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      const isMobile = width < 500;
      const height = isMobile
        ? Math.max(240, Math.min(width * 0.6, 320))
        : Math.max(250, Math.min(width * 0.45, 420));
      setDimensions({ width, height });
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const showTooltip = useCallback((event, datum) => {
    const tooltip = tooltipRef.current;
    if (!tooltip) return;

    tooltip.dataset.partyToken = getPartyToken(datum.party);
    tooltip.style.display = 'block';
    tooltip.innerHTML = `
      <div class="tooltip-name">${datum.name}</div>
      <div class="tooltip-meta">${datum.party} · ${POSITION_LABELS[datum.position_type] || datum.position_type}</div>
      <div class="tooltip-crime">${datum.crime}</div>
      ${datum.sentence_years ? `<div class="tooltip-sentence">${formatYears(datum.sentence_years)}</div>` : ''}
      <div class="tooltip-status">${STATUS_LABELS[datum.status] || datum.status}</div>
    `;

    const rect = containerRef.current.getBoundingClientRect();
    let left = event.clientX - rect.left + 12;
    let top = event.clientY - rect.top - 10;
    const tooltipWidth = tooltip.offsetWidth;

    if (left + tooltipWidth > dimensions.width) left -= tooltipWidth + 24;
    if (top < 0) top = 10;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }, [dimensions.width]);

  const hideTooltip = useCallback(() => {
    const tooltip = tooltipRef.current;
    if (!tooltip) return;

    tooltip.style.display = 'none';
    delete tooltip.dataset.partyToken;
  }, []);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    const { width, height } = dimensions;
    const isMobile = width < 500;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const labelSpace = isMobile ? 10 : Math.max(90, width * 0.13);
    const margin = isMobile
      ? { top: 8, right: 10, bottom: 5, left: 10 }
      : { top: 10, right: labelSpace, bottom: 5, left: 30 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    const centerX = chartWidth / 2;
    const centerY = chartHeight;

    const group = svg
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', null)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const maxRadius = Math.min(centerX, centerY) * (isMobile ? 0.97 : 0.92);

    if (!isMobile) {
      [0.3, 0.55, 0.8, 1].forEach((ratio) => {
        const radius = maxRadius * ratio;
        const arc = d3.arc()
          .innerRadius(radius - 0.5)
          .outerRadius(radius)
          .startAngle(-Math.PI / 2)
          .endAngle(Math.PI / 2);

        group.append('path')
          .attr('d', arc)
          .attr('transform', `translate(${centerX},${centerY})`)
          .attr('fill', 'var(--color-rule-light)');
      });
    }

    const byParty = d3.group(data, (datum) => datum.party);
    const partyOrder = [...byParty.entries()]
      .sort((a, b) => b[1].length - a[1].length)
      .map(([party]) => party);

    const arcPadding = 0.02;
    const totalArc = Math.PI;
    let currentAngle = Math.PI;

    const partyArcs = {};
    partyOrder.forEach((party) => {
      const count = byParty.get(party).length;
      const arcLength = (count / data.length) * (totalArc - partyOrder.length * arcPadding);

      partyArcs[party] = {
        start: currentAngle,
        end: currentAngle - arcLength,
      };

      currentAngle -= arcLength + arcPadding;
    });

    const maxSentence = d3.max(data, (datum) => datum.sentence_years || 1) || 10;
    const minBubbleRadius = isMobile ? Math.max(5, chartWidth / 80) : Math.max(4, chartWidth / 120);
    const maxBubbleRadius = isMobile ? Math.max(14, chartWidth / 25) : Math.max(12, chartWidth / 40);
    const radiusScale = d3.scaleSqrt()
      .domain([0, maxSentence])
      .range([minBubbleRadius, maxBubbleRadius]);

    const nodes = data.map((datum) => {
      const arc = partyArcs[datum.party];
      const radius = radiusScale(datum.sentence_years || 0.5);
      const partyMembers = byParty.get(datum.party);
      const index = partyMembers.indexOf(datum);
      const t = partyMembers.length > 1 ? index / (partyMembers.length - 1) : 0.5;
      const angle = arc.start + t * (arc.end - arc.start);
      const orbit = isMobile
        ? maxRadius * (0.25 + Math.random() * 0.65)
        : maxRadius * (0.4 + Math.random() * 0.5);

      return {
        ...datum,
        r: radius,
        x: centerX + orbit * Math.cos(angle),
        y: centerY - orbit * Math.sin(angle),
      };
    });

    const simulation = d3.forceSimulation(nodes)
      .force('collision', d3.forceCollide((datum) => datum.r + (isMobile ? 1 : 1.5)).strength(0.85))
      .force('x', d3.forceX((datum) => {
        const arc = partyArcs[datum.party];
        const midAngle = (arc.start + arc.end) / 2;
        return centerX + maxRadius * 0.6 * Math.cos(midAngle);
      }).strength(0.15))
      .force('y', d3.forceY((datum) => {
        const arc = partyArcs[datum.party];
        const midAngle = (arc.start + arc.end) / 2;
        return centerY - maxRadius * 0.6 * Math.sin(midAngle);
      }).strength(0.15))
      .force('boundary', () => {
        nodes.forEach((datum) => {
          const dx = datum.x - centerX;
          const dy = datum.y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance + datum.r > maxRadius) {
            const scale = (maxRadius - datum.r) / distance;
            datum.x = centerX + dx * scale;
            datum.y = centerY + dy * scale;
          }

          if (datum.y > centerY - datum.r) datum.y = centerY - datum.r;
        });
      })
      .stop();

    for (let tick = 0; tick < 200; tick += 1) simulation.tick();

    // On mobile, crop SVG to actual bubble bounds to eliminate dead space
    if (isMobile) {
      let minY = Infinity;
      let maxY = -Infinity;
      let minX = Infinity;
      let maxX = -Infinity;
      nodes.forEach((datum) => {
        minY = Math.min(minY, datum.y - datum.r);
        maxY = Math.max(maxY, datum.y + datum.r);
        minX = Math.min(minX, datum.x - datum.r);
        maxX = Math.max(maxX, datum.x + datum.r);
      });
      const pad = 6;
      const vbX = margin.left + minX - pad;
      const vbY = margin.top + minY - pad;
      const vbW = (maxX - minX) + pad * 2;
      const vbH = (maxY - minY) + pad * 2;
      svg.attr('viewBox', `${vbX} ${vbY} ${vbW} ${vbH}`)
        .attr('width', width)
        .attr('height', (vbH / vbW) * width);
    }

    const bubbles = group.selectAll('.bubble')
      .data(nodes)
      .join('circle')
      .attr('class', 'bubble')
      .attr('cx', (datum) => datum.x)
      .attr('cy', (datum) => datum.y)
      .attr('r', 0)
      .attr('fill', (datum) => getPartyColor(datum.party))
      .attr('fill-opacity', (datum) => (datum.status === 'convicted' ? 0.8 : 0.45))
      .attr('stroke', (datum) => (
        datum.status === 'convicted'
          ? getPartyColor(datum.party)
          : 'var(--color-rule)'
      ))
      .attr('stroke-width', (datum) => (datum.status === 'convicted' ? 1.5 : 0.75))
      .attr('stroke-opacity', (datum) => (datum.status === 'convicted' ? 0.7 : 0.4))
      .on('mouseover', function handleMouseOver(event, datum) {
        d3.select(this)
          .attr('fill-opacity', 1)
          .attr('stroke-width', 2.5)
          .attr('stroke-opacity', 1)
          .attr('stroke', getPartyColor(datum.party));
        showTooltip(event, datum);
      })
      .on('mousemove', function handleMouseMove(event, datum) {
        showTooltip(event, datum);
      })
      .on('mouseout', function handleMouseOut(event, datum) {
        d3.select(this)
          .attr('fill-opacity', datum.status === 'convicted' ? 0.8 : 0.45)
          .attr('stroke-width', datum.status === 'convicted' ? 1.5 : 0.75)
          .attr('stroke-opacity', datum.status === 'convicted' ? 0.7 : 0.4)
          .attr('stroke', datum.status === 'convicted' ? getPartyColor(datum.party) : 'var(--color-rule)');
        hideTooltip();
      })
      .on('click', function handleClick(event, datum) {
        hideTooltip();
        onSelect(datum);
      });

    bubbles.transition()
      .duration(600)
      .delay((datum, index) => index * 15)
      .attr('r', (datum) => datum.r);

    if (!isMobile) {
      partyOrder.forEach((party) => {
        const arc = partyArcs[party];
        const midAngle = (arc.start + arc.end) / 2;
        const labelRadius = maxRadius + 14;
        const lx = centerX + labelRadius * Math.cos(midAngle);
        const ly = centerY - labelRadius * Math.sin(midAngle);

        // Anchor labels based on position: left side = end, right side = start, top = middle
        const angleDeg = (midAngle * 180) / Math.PI;
        let anchor = 'middle';
        if (angleDeg < 60) anchor = 'start';
        else if (angleDeg > 120) anchor = 'end';

        group.append('text')
          .attr('x', lx)
          .attr('y', ly)
          .attr('text-anchor', anchor)
          .attr('dominant-baseline', 'middle')
          .attr('fill', getPartyColor(party))
          .attr('font-size', Math.max(9, Math.min(12, chartWidth / 80)))
          .attr('font-weight', '600')
          .attr('font-family', 'var(--font-body)')
          .attr('opacity', 0.85)
          .text(party);
      });
    }
  }, [data, dimensions, hideTooltip, onSelect, showTooltip]);

  return (
    <div ref={containerRef} className="hemicycle-shell">
      {data.length === 0 ? (
        <div className="hemicycle-empty">Niciun rezultat pentru filtrele selectate.</div>
      ) : (
        <>
          <svg ref={svgRef} className="hemicycle-svg" />
          <div ref={tooltipRef} className="tooltip" />

          <div className="hemicycle-legend">
            <span>Mărime = durata pedepsei</span>
            <span className="hemicycle-legend-divider">·</span>
            <span>Culoare = partid</span>
            <span className="hemicycle-legend-divider">·</span>
            <span>{dimensions.width < 500 ? 'Tap pentru detalii' : 'Click pentru detalii'}</span>
          </div>
        </>
      )}
    </div>
  );
}
