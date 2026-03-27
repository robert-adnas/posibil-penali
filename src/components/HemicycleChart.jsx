import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { getPartyColor, getPartyToken } from '../utils/partyColors';
import { POSITION_LABELS, STATUS_LABELS, formatYears } from '../utils/constants';

export function HemicycleChart({ data, onSelect }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [canHover, setCanHover] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  const partySummary = useMemo(() => {
    const summary = new Map();

    data.forEach((politician) => {
      summary.set(politician.party, (summary.get(politician.party) || 0) + 1);
    });

    return [...summary.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([party, total]) => ({ party, total }));
  }, [data]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      const isMobile = width < 500;
      const height = isMobile
        ? Math.max(240, Math.min(width * 0.6, 320))
        : Math.max(250, Math.min(width * 0.45, 420));

      setDimensions((prev) => {
        if (prev.width === width && prev.height === height) return prev;
        return { width, height };
      });
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateHoverMode = () => setCanHover(mediaQuery.matches);

    updateHoverMode();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateHoverMode);
      return () => mediaQuery.removeEventListener('change', updateHoverMode);
    }

    mediaQuery.addListener(updateHoverMode);
    return () => mediaQuery.removeListener(updateHoverMode);
  }, []);

  const showTooltip = useCallback((event, datum) => {
    const tooltip = tooltipRef.current;
    const container = containerRef.current;
    if (!tooltip || !container) return;

    tooltip.dataset.partyToken = getPartyToken(datum.party);
    tooltip.style.display = 'block';
    const isDefinitive = datum.status === 'convicted';
    tooltip.innerHTML = `
      <div class="tooltip-name">${datum.name}</div>
      <div class="tooltip-meta">${datum.party} &middot; ${POSITION_LABELS[datum.position_type] || datum.position_type}</div>
      <div class="tooltip-crime">${datum.crime}</div>
      ${datum.sentence_years ? `<div class="tooltip-sentence">${formatYears(datum.sentence_years)}</div>` : ''}
      <div class="tooltip-status">${STATUS_LABELS[datum.status] || datum.status}</div>
      ${!isDefinitive ? '<div class="tooltip-innocence">Prezumția de nevinovăție se aplică</div>' : ''}
    `;

    const rect = container.getBoundingClientRect();
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
    if (!svgRef.current || !data.length || dimensions.width === 0) return;

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
      .sort((a, b) => {
        if (a[0] === 'Independent') return 1;
        if (b[0] === 'Independent') return -1;
        return b[1].length - a[1].length;
      })
      .map(([party]) => party);

    const arcPadding = 0.02;
    const totalArc = Math.PI;
    let currentAngle = Math.PI;
    const partyArcs = {};

    partyOrder.forEach((party) => {
      const count = byParty.get(party)?.length || 0;
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
      const partyMembers = byParty.get(datum.party) || [];
      const index = partyMembers.indexOf(datum);
      const t = partyMembers.length > 1 ? index / (partyMembers.length - 1) : 0.5;
      const angle = arc.start + t * (arc.end - arc.start);
      const orbitT = partyMembers.length > 1 ? index / partyMembers.length : 0.5;
      const orbit = isMobile
        ? maxRadius * (0.25 + orbitT * 0.65)
        : maxRadius * (0.4 + orbitT * 0.5);

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

          if (distance > 0 && distance + datum.r > maxRadius) {
            const scale = (maxRadius - datum.r) / distance;
            datum.x = centerX + dx * scale;
            datum.y = centerY + dy * scale;
          }

          if (datum.y > centerY - datum.r) datum.y = centerY - datum.r;
        });
      })
      .stop();

    for (let tick = 0; tick < 200; tick += 1) simulation.tick();

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
      const vbW = maxX - minX + pad * 2;
      const vbH = maxY - minY + pad * 2;

      svg
        .attr('viewBox', `${vbX} ${vbY} ${vbW} ${vbH}`)
        .attr('width', width)
        .attr('height', (vbH / vbW) * width);
    }

    const bubbleGroups = group.selectAll('.bubble-node')
      .data(nodes)
      .join('g')
      .attr('class', 'bubble-node')
      .attr('transform', (datum) => `translate(${datum.x},${datum.y})`)
      .attr('tabindex', 0)
      .attr('role', 'button')
      .attr('aria-label', (datum) => {
        const statusLabel = STATUS_LABELS[datum.status] || datum.status;
        const sentenceLabel = datum.sentence_years ? `, ${formatYears(datum.sentence_years)}` : '';
        return `${datum.name}, ${datum.party}, ${statusLabel}${sentenceLabel}`;
      });

    bubbleGroups.append('circle')
      .attr('class', 'bubble-hit')
      .attr('r', (datum) => Math.max(datum.r + (isMobile ? 10 : 4), datum.r))
      .attr('fill', 'rgba(0, 0, 0, 0)');

    const statusStyles = {
      convicted:      { fillOpacity: 0.85, strokeWidth: 1.5,  strokeOpacity: 0.7, usePartyStroke: true,  dasharray: null },
      first_instance: { fillOpacity: 0.55, strokeWidth: 1.25, strokeOpacity: 0.6, usePartyStroke: true,  dasharray: null },
      indicted:       { fillOpacity: 0.35, strokeWidth: 1,    strokeOpacity: 0.5, usePartyStroke: false, dasharray: null },
      investigated:   { fillOpacity: 0.2,  strokeWidth: 1,    strokeOpacity: 0.5, usePartyStroke: false, dasharray: '3,2' },
      prescribed:     { fillOpacity: 0.15, strokeWidth: 0.75, strokeOpacity: 0.35,usePartyStroke: false, dasharray: '2,2' },
      acquitted:      { fillOpacity: 0.12, strokeWidth: 1.25, strokeOpacity: 0.5, usePartyStroke: false, dasharray: null },
    };

    bubbleGroups.append('circle')
      .attr('class', 'bubble')
      .attr('r', 0)
      .attr('fill', (datum) => {
        const s = statusStyles[datum.status] || statusStyles.investigated;
        return s.fillOpacity > 0.3 ? getPartyColor(datum.party) : getPartyColor(datum.party);
      })
      .attr('fill-opacity', (datum) => (statusStyles[datum.status] || statusStyles.investigated).fillOpacity)
      .attr('stroke', (datum) => {
        const s = statusStyles[datum.status] || statusStyles.investigated;
        return s.usePartyStroke ? getPartyColor(datum.party) : 'var(--color-rule)';
      })
      .attr('stroke-width', (datum) => (statusStyles[datum.status] || statusStyles.investigated).strokeWidth)
      .attr('stroke-opacity', (datum) => (statusStyles[datum.status] || statusStyles.investigated).strokeOpacity)
      .attr('stroke-dasharray', (datum) => (statusStyles[datum.status] || statusStyles.investigated).dasharray);

    const setBubbleActive = (node, datum) => {
      d3.select(node)
        .select('.bubble')
        .attr('fill-opacity', 1)
        .attr('stroke-width', 2.5)
        .attr('stroke-opacity', 1)
        .attr('stroke', getPartyColor(datum.party));
    };

    const resetBubble = (node, datum) => {
      const s = statusStyles[datum.status] || statusStyles.investigated;
      d3.select(node)
        .select('.bubble')
        .attr('fill-opacity', s.fillOpacity)
        .attr('stroke-width', s.strokeWidth)
        .attr('stroke-opacity', s.strokeOpacity)
        .attr('stroke', s.usePartyStroke ? getPartyColor(datum.party) : 'var(--color-rule)')
        .attr('stroke-dasharray', s.dasharray);
    };

    bubbleGroups
      .on('pointerenter', canHover ? function handlePointerEnter(event, datum) {
        setBubbleActive(this, datum);
        showTooltip(event, datum);
      } : null)
      .on('pointermove', canHover ? function handlePointerMove(event, datum) {
        showTooltip(event, datum);
      } : null)
      .on('pointerleave', function handlePointerLeave(_, datum) {
        resetBubble(this, datum);
        hideTooltip();
      })
      .on('focus', function handleFocus(_, datum) {
        const bubbleRect = this.querySelector('.bubble')?.getBoundingClientRect();
        setBubbleActive(this, datum);

        if (bubbleRect) {
          showTooltip({
            clientX: bubbleRect.left + bubbleRect.width / 2,
            clientY: bubbleRect.top + bubbleRect.height / 2,
          }, datum);
        }
      })
      .on('blur', function handleBlur(_, datum) {
        resetBubble(this, datum);
        hideTooltip();
      })
      .on('keydown', function handleKeydown(event, datum) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        hideTooltip();
        onSelect(datum);
      })
      .on('click', function handleClick(_, datum) {
        hideTooltip();
        onSelect(datum);
      });

    bubbleGroups.select('.bubble').transition()
      .duration(400)
      .delay((datum, index) => index * 5)
      .attr('r', (datum) => datum.r);

    if (!isMobile) {
      partyOrder.forEach((party) => {
        const arc = partyArcs[party];
        const midAngle = (arc.start + arc.end) / 2;
        const labelRadius = maxRadius + 14;
        const lx = centerX + labelRadius * Math.cos(midAngle);
        const ly = centerY - labelRadius * Math.sin(midAngle);

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
  }, [canHover, data, dimensions, hideTooltip, onSelect, showTooltip]);

  return (
    <div ref={containerRef} className="hemicycle-shell">
      {data.length === 0 ? (
        <div className="hemicycle-empty">Niciun rezultat pentru filtrele selectate.</div>
      ) : (
        <>
          <svg ref={svgRef} className="hemicycle-svg" role="img" aria-label={`Vizualizare hemiciclu cu ${data.length} politicieni grupați pe partide. Mărimea reprezintă durata pedepsei, culoarea partidul, opacitatea stadiul juridic.`} />
          <div ref={tooltipRef} className="tooltip" />

          {dimensions.width < 500 && partySummary.length > 0 && (
            <div className="hemicycle-party-list">
              {partySummary.map((party) => (
                <span
                  key={party.party}
                  className="hemicycle-party-item"
                  data-party-token={getPartyToken(party.party)}
                >
                  <span className="hemicycle-party-dot" />
                  <span>{party.party}</span>
                  <span className="hemicycle-party-count">{party.total}</span>
                </span>
              ))}
            </div>
          )}

          <div className="hemicycle-legend">
            <span>Mărime = durata pedepsei</span>
            <span className="hemicycle-legend-divider">·</span>
            <span>Culoare = partid</span>
            <span className="hemicycle-legend-divider">·</span>
            <span>Opacitate = stadiul juridic</span>
            <span className="hemicycle-legend-divider">·</span>
            <span>{dimensions.width < 500 ? 'Tap pentru detalii' : 'Click pentru detalii'}</span>
          </div>
        </>
      )}
    </div>
  );
}
