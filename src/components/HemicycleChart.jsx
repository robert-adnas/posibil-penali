import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { getPartyColor, getPartyToken } from '../utils/partyColors';
import { POSITION_LABELS, STATUS_LABELS, formatYears } from '../utils/constants';

const LONG_TAIL_THRESHOLD = 5;
const ALTE_KEY = 'Alte partide';
const ALTE_COLOR = '#7a8a9a';
const MOBILE_BREAKPOINT = 500;

export function HemicycleChart({ data, onSelect }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [selectedParty, setSelectedParty] = useState(null);
  const [canHover, setCanHover] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  const { partyTotals, longTailSet, displayPartyOrder } = useMemo(() => {
    const totals = new Map();
    data.forEach((politician) => {
      totals.set(politician.party, (totals.get(politician.party) || 0) + 1);
    });

    const sortedNonIndependent = [...totals.entries()]
      .filter(([name]) => name !== 'Independent')
      .sort((a, b) => b[1] - a[1]);

    const longTail = new Set();
    sortedNonIndependent.forEach(([name, count]) => {
      if (count < LONG_TAIL_THRESHOLD) longTail.add(name);
    });

    if (longTail.size < 2) longTail.clear();

    const order = sortedNonIndependent
      .filter(([name]) => !longTail.has(name))
      .map(([name]) => name);

    if (longTail.size > 0) order.push(ALTE_KEY);
    if (totals.has('Independent')) order.push('Independent');

    return { partyTotals: totals, longTailSet: longTail, displayPartyOrder: order };
  }, [data]);

  const partySummary = useMemo(() =>
    [...partyTotals.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([party, total]) => ({ party, total })),
  [partyTotals]);

  const displayData = useMemo(() => {
    if (selectedParty === null) return data;
    if (selectedParty === ALTE_KEY) {
      return data.filter((politician) => longTailSet.has(politician.party));
    }
    return data.filter((politician) => politician.party === selectedParty);
  }, [data, selectedParty, longTailSet]);

  useEffect(() => {
    if (selectedParty === null) return;
    if (selectedParty === ALTE_KEY) {
      const stillHas = [...longTailSet].some((name) => partyTotals.has(name));
      if (!stillHas) setSelectedParty(null);
      return;
    }
    if (!partyTotals.has(selectedParty)) setSelectedParty(null);
  }, [partyTotals, longTailSet, selectedParty]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      const isMobile = width < MOBILE_BREAKPOINT;
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

  const positionTooltip = useCallback((event) => {
    const tooltip = tooltipRef.current;
    const container = containerRef.current;
    if (!tooltip || !container) return;

    const rect = container.getBoundingClientRect();
    let left = event.clientX - rect.left + 12;
    let top = event.clientY - rect.top - 10;
    const tooltipWidth = tooltip.offsetWidth;

    if (left + tooltipWidth > dimensions.width) left -= tooltipWidth + 24;
    if (top < 0) top = 10;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }, [dimensions.width]);

  const showTooltip = useCallback((event, datum) => {
    const tooltip = tooltipRef.current;
    if (!tooltip) return;

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

    positionTooltip(event);
  }, [positionTooltip]);

  const showPartyTooltip = useCallback((event, partyName, count) => {
    const tooltip = tooltipRef.current;
    if (!tooltip) return;

    const token = partyName === ALTE_KEY ? 'other' : getPartyToken(partyName);
    tooltip.dataset.partyToken = token;
    tooltip.style.display = 'block';
    tooltip.innerHTML = `
      <div class="tooltip-name">${partyName}</div>
      <div class="tooltip-meta">${count} ${count === 1 ? 'caz' : 'cazuri'}</div>
      <div class="tooltip-status">Apasă pentru a explora</div>
    `;

    positionTooltip(event);
  }, [positionTooltip]);

  const hideTooltip = useCallback(() => {
    const tooltip = tooltipRef.current;
    if (!tooltip) return;

    tooltip.style.display = 'none';
    delete tooltip.dataset.partyToken;
  }, []);

  const isMobile = dimensions.width > 0 && dimensions.width < MOBILE_BREAKPOINT;
  const inMobileOverview = isMobile && selectedParty === null;
  const inOverview = selectedParty === null;

  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0) return;

    const { width, height } = dimensions;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    if (inMobileOverview) {
      if (displayPartyOrder.length === 0) return;
      renderMobilePartyOverview();
    } else {
      if (displayData.length === 0) return;
      renderHemicycle();
    }

    function renderMobilePartyOverview() {
      const margin = { top: 8, right: 10, bottom: 10, left: 10 };
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

      const partyNodes = displayPartyOrder.map((party) => {
        const count = party === ALTE_KEY
          ? [...longTailSet].reduce((acc, name) => acc + (partyTotals.get(name) || 0), 0)
          : partyTotals.get(party) || 0;
        return { party, count };
      });

      const totalCount = partyNodes.reduce((sum, node) => sum + node.count, 0) || 1;
      const maxRadius = Math.min(centerX, centerY) * 0.95;
      const minR = 18;
      const maxR = Math.min(58, chartHeight * 0.42);
      const rScale = d3.scaleSqrt()
        .domain([1, d3.max(partyNodes, (node) => node.count) || 1])
        .range([minR, maxR]);

      const arcPadding = 0.03;
      const totalArc = Math.PI;
      let currentAngle = Math.PI;

      const placed = partyNodes.map((node) => {
        const arcLength = (node.count / totalCount) * (totalArc - partyNodes.length * arcPadding);
        const midAngle = currentAngle - arcLength / 2;
        currentAngle -= arcLength + arcPadding;
        const r = rScale(node.count);
        const orbit = maxRadius * 0.55;
        return {
          ...node,
          r,
          x: centerX + orbit * Math.cos(midAngle),
          y: centerY - orbit * Math.sin(midAngle),
        };
      });

      const sim = d3.forceSimulation(placed)
        .force('collision', d3.forceCollide((node) => node.r + 5).strength(0.92))
        .force('boundary', () => {
          placed.forEach((node) => {
            const dx = node.x - centerX;
            const dy = node.y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > 0 && dist + node.r > maxRadius) {
              const scale = (maxRadius - node.r) / dist;
              node.x = centerX + dx * scale;
              node.y = centerY + dy * scale;
            }
            if (node.y > centerY - node.r) node.y = centerY - node.r;
          });
        })
        .stop();
      for (let tick = 0; tick < 220; tick += 1) sim.tick();

      let minX = Infinity;
      let maxX = -Infinity;
      let minY = Infinity;
      let maxY = -Infinity;
      placed.forEach((node) => {
        minX = Math.min(minX, node.x - node.r);
        maxX = Math.max(maxX, node.x + node.r);
        minY = Math.min(minY, node.y - node.r);
        maxY = Math.max(maxY, node.y + node.r + 14);
      });
      const pad = 8;
      const vbX = margin.left + minX - pad;
      const vbY = margin.top + minY - pad;
      const vbW = maxX - minX + pad * 2;
      const vbH = maxY - minY + pad * 2;

      svg
        .attr('viewBox', `${vbX} ${vbY} ${vbW} ${vbH}`)
        .attr('width', width)
        .attr('height', (vbH / vbW) * width);

      const partyGroups = group.selectAll('.party-bubble-node')
        .data(placed)
        .join('g')
        .attr('class', 'party-bubble-node')
        .attr('transform', (node) => `translate(${node.x},${node.y})`)
        .attr('tabindex', 0)
        .attr('role', 'button')
        .attr('aria-label', (node) => `${node.party}: ${node.count} cazuri. Apasă pentru a explora.`)
        .style('cursor', 'pointer');

      partyGroups.append('circle')
        .attr('class', 'party-bubble-hit')
        .attr('r', (node) => node.r + 8)
        .attr('fill', 'rgba(0, 0, 0, 0)');

      partyGroups.append('circle')
        .attr('class', 'party-bubble')
        .attr('r', 0)
        .attr('fill', (node) => node.party === ALTE_KEY ? ALTE_COLOR : getPartyColor(node.party))
        .attr('fill-opacity', 0.85)
        .attr('stroke', (node) => node.party === ALTE_KEY ? ALTE_COLOR : getPartyColor(node.party))
        .attr('stroke-width', 1.5)
        .attr('stroke-opacity', 0.9);

      partyGroups.append('text')
        .attr('class', 'party-bubble-count')
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'central')
        .attr('fill', '#ffffff')
        .attr('font-size', (node) => Math.max(11, Math.min(node.r * 0.55, 20)))
        .attr('font-weight', '700')
        .attr('font-family', 'var(--font-body)')
        .attr('pointer-events', 'none')
        .text((node) => node.count);

      partyGroups.append('text')
        .attr('class', 'party-bubble-label')
        .attr('text-anchor', 'middle')
        .attr('y', (node) => node.r + 11)
        .attr('fill', (node) => node.party === ALTE_KEY ? ALTE_COLOR : getPartyColor(node.party))
        .attr('font-size', 9)
        .attr('font-weight', '600')
        .attr('font-family', 'var(--font-body)')
        .attr('pointer-events', 'none')
        .text((node) => node.party.length > 14 ? `${node.party.slice(0, 13)}…` : node.party);

      const setPartyActive = (node) => {
        d3.select(node).select('.party-bubble').attr('stroke-width', 3).attr('fill-opacity', 1);
      };
      const resetParty = (node) => {
        d3.select(node).select('.party-bubble').attr('stroke-width', 1.5).attr('fill-opacity', 0.85);
      };

      partyGroups
        .on('pointerenter', canHover ? function handlePartyEnter(event, node) {
          setPartyActive(this);
          showPartyTooltip(event, node.party, node.count);
        } : null)
        .on('pointermove', canHover ? function handlePartyMove(event, node) {
          showPartyTooltip(event, node.party, node.count);
        } : null)
        .on('pointerleave', function handlePartyLeave() {
          resetParty(this);
          hideTooltip();
        })
        .on('focus', function handlePartyFocus() {
          setPartyActive(this);
        })
        .on('blur', function handlePartyBlur() {
          resetParty(this);
          hideTooltip();
        })
        .on('keydown', function handlePartyKey(event, node) {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          event.preventDefault();
          hideTooltip();
          setSelectedParty(node.party);
        })
        .on('click', function handlePartyClick(_, node) {
          hideTooltip();
          setSelectedParty(node.party);
        });

      partyGroups.select('.party-bubble').transition()
        .duration(420)
        .delay((_node, index) => index * 25)
        .attr('r', (node) => node.r);
    }

    function renderHemicycle() {
      const isMobileNow = width < MOBILE_BREAKPOINT;
      const labelSpace = isMobileNow ? 10 : Math.max(90, width * 0.13);
      const margin = isMobileNow
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

      const maxRadius = Math.min(centerX, centerY) * (isMobileNow ? 0.97 : 0.92);

      if (!isMobileNow) {
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

      const aggregateLongTail = inOverview && longTailSet.size > 0;
      const effectiveParty = (datum) =>
        (aggregateLongTail && longTailSet.has(datum.party)) ? ALTE_KEY : datum.party;

      const byParty = d3.group(displayData, effectiveParty);

      let partyOrderForLayout;
      if (inOverview) {
        partyOrderForLayout = displayPartyOrder.filter((party) => byParty.has(party));
      } else {
        partyOrderForLayout = [...byParty.entries()]
          .sort((a, b) => {
            if (a[0] === 'Independent') return 1;
            if (b[0] === 'Independent') return -1;
            return b[1].length - a[1].length;
          })
          .map(([party]) => party);
      }

      const arcPadding = 0.02;
      const totalArc = Math.PI;
      let currentAngle = Math.PI;
      const partyArcs = {};

      partyOrderForLayout.forEach((party) => {
        const count = byParty.get(party)?.length || 0;
        const arcLength = (count / displayData.length) * (totalArc - partyOrderForLayout.length * arcPadding);

        partyArcs[party] = {
          start: currentAngle,
          end: currentAngle - arcLength,
        };

        currentAngle -= arcLength + arcPadding;
      });

      const maxSentence = d3.max(displayData, (datum) => datum.sentence_years || 1) || 10;
      const isDesktopOverview = !isMobileNow && inOverview;
      const minBubbleRadius = isMobileNow
        ? Math.max(5, chartWidth / 80)
        : isDesktopOverview
          ? Math.max(3, chartWidth / 170)
          : Math.max(4, chartWidth / 120);
      const maxBubbleRadius = isMobileNow
        ? Math.max(14, chartWidth / 25)
        : isDesktopOverview
          ? Math.max(8, chartWidth / 60)
          : Math.max(12, chartWidth / 40);
      const radiusScale = d3.scaleSqrt()
        .domain([0, maxSentence])
        .range([minBubbleRadius, maxBubbleRadius]);

      const nodes = displayData.map((datum) => {
        const eParty = effectiveParty(datum);
        const arc = partyArcs[eParty];
        const radius = radiusScale(datum.sentence_years || 0.5);
        const partyMembers = byParty.get(eParty) || [];
        const index = partyMembers.indexOf(datum);
        const t = partyMembers.length > 1 ? index / (partyMembers.length - 1) : 0.5;
        const angle = arc.start + t * (arc.end - arc.start);
        const orbitT = partyMembers.length > 1 ? index / partyMembers.length : 0.5;
        const orbit = isMobileNow
          ? maxRadius * (0.25 + orbitT * 0.65)
          : maxRadius * (0.4 + orbitT * 0.5);

        return {
          ...datum,
          _eParty: eParty,
          r: radius,
          x: centerX + orbit * Math.cos(angle),
          y: centerY - orbit * Math.sin(angle),
        };
      });

      const simulation = d3.forceSimulation(nodes)
        .force('collision', d3.forceCollide((datum) => datum.r + (isMobileNow ? 1 : 1.5)).strength(0.85))
        .force('x', d3.forceX((datum) => {
          const arc = partyArcs[datum._eParty];
          const midAngle = (arc.start + arc.end) / 2;
          return centerX + maxRadius * 0.6 * Math.cos(midAngle);
        }).strength(0.15))
        .force('y', d3.forceY((datum) => {
          const arc = partyArcs[datum._eParty];
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

      if (isMobileNow) {
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
        .attr('r', (datum) => Math.max(datum.r + (isMobileNow ? 18 : 4), datum.r))
        .attr('fill', 'rgba(0, 0, 0, 0)');

      const statusStyles = {
        convicted:      { fillOpacity: 0.85, strokeWidth: 1.5,  strokeOpacity: 0.7, usePartyStroke: true,  dasharray: null },
        first_instance: { fillOpacity: 0.55, strokeWidth: 1.25, strokeOpacity: 0.6, usePartyStroke: true,  dasharray: null },
        indicted:       { fillOpacity: 0.35, strokeWidth: 1,    strokeOpacity: 0.5, usePartyStroke: false, dasharray: null },
        investigated:   { fillOpacity: 0.2,  strokeWidth: 1,    strokeOpacity: 0.5, usePartyStroke: false, dasharray: '3,2' },
        prescribed:     { fillOpacity: 0.15, strokeWidth: 0.75, strokeOpacity: 0.35,usePartyStroke: false, dasharray: '2,2' },
        closed:         { fillOpacity: 0.12, strokeWidth: 1,    strokeOpacity: 0.4, usePartyStroke: false, dasharray: '1,2' },
        acquitted:      { fillOpacity: 0.12, strokeWidth: 1.25, strokeOpacity: 0.5, usePartyStroke: false, dasharray: null },
      };

      bubbleGroups.append('circle')
        .attr('class', 'bubble')
        .attr('r', 0)
        .attr('fill', (datum) => getPartyColor(datum.party))
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
        .delay((_datum, index) => index * 5)
        .attr('r', (datum) => datum.r);

      if (!isMobileNow) {
        partyOrderForLayout.forEach((party) => {
          const arc = partyArcs[party];
          const midAngle = (arc.start + arc.end) / 2;
          const labelRadius = maxRadius + 14;
          const lx = centerX + labelRadius * Math.cos(midAngle);
          const ly = centerY - labelRadius * Math.sin(midAngle);

          const angleDeg = (midAngle * 180) / Math.PI;
          let anchor = 'middle';
          if (angleDeg < 60) anchor = 'start';
          else if (angleDeg > 120) anchor = 'end';

          const labelColor = party === ALTE_KEY ? ALTE_COLOR : getPartyColor(party);
          const interactive = inOverview;

          const labelGroup = group.append('g')
            .attr('class', 'hemicycle-party-label')
            .attr('tabindex', interactive ? 0 : -1)
            .attr('role', interactive ? 'button' : null)
            .attr('aria-label', interactive ? `Vezi politicienii din ${party}` : null)
            .style('cursor', interactive ? 'pointer' : 'default');

          const labelText = labelGroup.append('text')
            .attr('x', lx)
            .attr('y', ly)
            .attr('text-anchor', anchor)
            .attr('dominant-baseline', 'middle')
            .attr('fill', labelColor)
            .attr('font-size', Math.max(9, Math.min(12, chartWidth / 80)))
            .attr('font-weight', '600')
            .attr('font-family', 'var(--font-body)')
            .attr('opacity', 0.85)
            .text(party);

          if (interactive) {
            labelGroup
              .on('click', () => {
                hideTooltip();
                setSelectedParty(party);
              })
              .on('keydown', (event) => {
                if (event.key !== 'Enter' && event.key !== ' ') return;
                event.preventDefault();
                hideTooltip();
                setSelectedParty(party);
              })
              .on('pointerenter', () => {
                labelText.attr('opacity', 1).attr('text-decoration', 'underline');
              })
              .on('pointerleave', () => {
                labelText.attr('opacity', 0.85).attr('text-decoration', null);
              })
              .on('focus', () => {
                labelText.attr('opacity', 1).attr('text-decoration', 'underline');
              })
              .on('blur', () => {
                labelText.attr('opacity', 0.85).attr('text-decoration', null);
              });
          }
        });
      }
    }
  }, [
    canHover,
    displayData,
    displayPartyOrder,
    dimensions,
    hideTooltip,
    inMobileOverview,
    inOverview,
    longTailSet,
    onSelect,
    partyTotals,
    showPartyTooltip,
    showTooltip,
  ]);

  const drillCount = displayData.length;
  const drillToken = selectedParty === ALTE_KEY ? 'other' : (selectedParty ? getPartyToken(selectedParty) : 'other');
  const isEmpty = inMobileOverview ? displayPartyOrder.length === 0 : displayData.length === 0;

  const overviewLegend = (
    <>
      <span>Mărime = durata pedepsei</span>
      <span className="hemicycle-legend-divider">·</span>
      <span>Culoare = partid</span>
      <span className="hemicycle-legend-divider">·</span>
      <span>Opacitate = stadiul juridic</span>
      <span className="hemicycle-legend-divider">·</span>
      <span>Click pe partid pentru a explora</span>
    </>
  );

  const mobileOverviewLegend = (
    <>
      <span>Mărime = număr de cazuri</span>
      <span className="hemicycle-legend-divider">·</span>
      <span>Tap pe partid pentru a explora</span>
    </>
  );

  const drillLegend = (
    <>
      <span>Mărime = durata pedepsei</span>
      <span className="hemicycle-legend-divider">·</span>
      <span>Opacitate = stadiul juridic</span>
      <span className="hemicycle-legend-divider">·</span>
      <span>{isMobile ? 'Tap pentru detalii' : 'Click pentru detalii'}</span>
    </>
  );

  return (
    <div ref={containerRef} className="hemicycle-shell">
      {selectedParty !== null && (
        <div className="hemicycle-drill-header">
          <button
            type="button"
            className="hemicycle-back-btn"
            onClick={() => setSelectedParty(null)}
            aria-label="Înapoi la toate partidele"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
              <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Toate partidele</span>
          </button>
          <span className="hemicycle-drill-label" data-party-token={drillToken}>
            <span className="hemicycle-drill-dot" />
            <span className="hemicycle-drill-name">{selectedParty}</span>
            <span className="hemicycle-drill-count">{drillCount} {drillCount === 1 ? 'caz' : 'cazuri'}</span>
          </span>
        </div>
      )}

      {isEmpty ? (
        <div className="hemicycle-empty">Niciun rezultat pentru filtrele selectate.</div>
      ) : (
        <>
          <svg
            ref={svgRef}
            className="hemicycle-svg"
            role="img"
            aria-label={
              selectedParty !== null
                ? `Hemiciclu cu ${drillCount} politicieni din ${selectedParty}.`
                : inMobileOverview
                  ? `Vizualizare partide cu ${displayPartyOrder.length} grupuri. Apasă pentru detalii.`
                  : `Vizualizare hemiciclu cu ${displayData.length} politicieni grupați pe partide.`
            }
          />
          <div ref={tooltipRef} className="tooltip" />

          {isMobile && partySummary.length > 0 && selectedParty === null && (
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
            {selectedParty !== null
              ? drillLegend
              : inMobileOverview
                ? mobileOverviewLegend
                : overviewLegend}
          </div>
        </>
      )}
    </div>
  );
}
