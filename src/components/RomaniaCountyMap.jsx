import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCounty, getCountySlug } from '../utils/geography';
import {
  ROMANIA_COUNTY_MARKERS,
  ROMANIA_COUNTY_PATHS,
  ROMANIA_MAP_HEIGHT,
  ROMANIA_MAP_WIDTH,
} from '../utils/romaniaCountyMap';

function formatCaseCount(count) {
  return `${count} ${count === 1 ? 'caz' : 'cazuri'}`;
}

function normalizeCountyKey(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .toUpperCase();
}

const COUNTY_LABEL_LOOKUP = new Map(
  Object.keys(ROMANIA_COUNTY_PATHS).map((slug) => [
    normalizeCountyKey(slug),
    slug,
  ])
);

function getCountyLevel(count, maxCount) {
  if (!count || maxCount <= 0) return 0;

  const ratio = count / maxCount;
  if (ratio >= 0.82) return 5;
  if (ratio >= 0.58) return 4;
  if (ratio >= 0.36) return 3;
  if (ratio >= 0.18) return 2;
  return 1;
}

function applyCountyShapeAttributes(shape, county, activeCountySlug, topFilteredCount) {
  if (!county) {
    shape.setAttribute('data-county-state', 'empty');
    shape.setAttribute('aria-hidden', 'true');
    return;
  }

  const state = county.filteredCount > 0 ? 'active' : 'archived';
  shape.setAttribute('data-county-state', state);
  shape.setAttribute(
    'data-county-level',
    state === 'active' ? String(getCountyLevel(county.filteredCount, topFilteredCount)) : '0'
  );
  shape.setAttribute('data-county-active', county.slug === activeCountySlug ? 'true' : 'false');
  shape.setAttribute('tabindex', '0');
  shape.setAttribute('role', 'link');
  shape.setAttribute(
    'aria-label',
    `${county.county}: ${formatCaseCount(county.filteredCount)} in filtrele curente, ${formatCaseCount(county.totalCount)} in arhiva.`
  );
}

function appendCountyMarker(doc, svg, slug, marker, county, activeCountySlug, topFilteredCount) {
  if (!county) return;

  const namespace = 'http://www.w3.org/2000/svg';
  const group = doc.createElementNS(namespace, 'g');
  group.setAttribute('data-county-marker-slug', slug);

  const circle = doc.createElementNS(namespace, 'circle');
  circle.setAttribute('class', 'county-map-region');
  circle.setAttribute('data-county-slug', slug);
  circle.setAttribute('cx', String(marker.cx));
  circle.setAttribute('cy', String(marker.cy));
  circle.setAttribute('r', String(marker.r));
  applyCountyShapeAttributes(circle, county, activeCountySlug, topFilteredCount);
  group.appendChild(circle);

  const label = doc.createElementNS(namespace, 'text');
  label.setAttribute('class', 'county-map-label');
  label.setAttribute('data-county-label-slug', slug);
  label.setAttribute('data-county-active', slug === activeCountySlug ? 'true' : 'false');
  label.setAttribute('data-county-has-results', county.filteredCount > 0 ? 'true' : 'false');
  label.setAttribute('x', String(marker.labelX));
  label.setAttribute('y', String(marker.labelY));
  label.setAttribute('text-anchor', 'middle');
  label.textContent = marker.label;
  group.appendChild(label);

  if (county.filteredCount > 0) {
    const count = doc.createElementNS(namespace, 'text');
    count.setAttribute('class', 'county-map-count-text');
    count.setAttribute('x', String(marker.cx));
    count.setAttribute('y', String(marker.cy + 4));
    count.setAttribute('text-anchor', 'middle');
    count.setAttribute('pointer-events', 'none');
    count.textContent = String(county.filteredCount);
    group.appendChild(count);
  }

  svg.appendChild(group);
}

function buildCountMap(items) {
  const counts = new Map();

  items.forEach((politician) => {
    const county = getCounty(politician);
    const slug = getCountySlug(politician);
    if (!county || !slug) return;

    const existing = counts.get(slug) || {
      slug,
      county,
      total: 0,
      convicted: 0,
    };

    existing.total += 1;
    if (politician.status === 'convicted') existing.convicted += 1;
    counts.set(slug, existing);
  });

  return counts;
}

function buildInteractiveMapMarkup(svgSource, counties, activeCountySlug, topFilteredCount) {
  if (!svgSource || typeof window === 'undefined') return '';

  const parser = new window.DOMParser();
  const doc = parser.parseFromString(svgSource, 'image/svg+xml');
  const svg = doc.querySelector('svg');
  if (!svg) return '';

  svg.setAttribute('class', 'county-map-svg');
  svg.setAttribute('viewBox', `0 0 ${ROMANIA_MAP_WIDTH} ${ROMANIA_MAP_HEIGHT}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.setAttribute('focusable', 'false');
  svg.removeAttribute('width');
  svg.removeAttribute('height');

  const countyBySlug = new Map(counties.map((county) => [county.slug, county]));
  const knownPathIds = new Set(Object.values(ROMANIA_COUNTY_PATHS));

  svg.querySelectorAll('text').forEach((text) => {
    const labelText = [...text.querySelectorAll('tspan')]
      .map((tspan) => tspan.textContent || '')
      .join(' ');
    const slug = COUNTY_LABEL_LOOKUP.get(normalizeCountyKey(labelText || text.textContent || ''));
    const county = slug ? countyBySlug.get(slug) : null;

    text.removeAttribute('style');
    text.setAttribute('class', 'county-map-label');

    if (slug) {
      text.setAttribute('data-county-label-slug', slug);
      text.setAttribute('data-county-active', slug === activeCountySlug ? 'true' : 'false');
      text.setAttribute('data-county-has-results', county?.filteredCount > 0 ? 'true' : 'false');
    }

    if (county?.filteredCount > 0) {
      const lastTspan = text.querySelector('tspan:last-of-type');
      const countTspan = doc.createElementNS('http://www.w3.org/2000/svg', 'tspan');
      countTspan.setAttribute('class', 'county-map-count-text');
      countTspan.setAttribute('x', lastTspan?.getAttribute('x') || text.getAttribute('x') || '0');
      countTspan.setAttribute('dy', '14');
      countTspan.textContent = String(county.filteredCount);
      text.appendChild(countTspan);
    }
  });

  Object.entries(ROMANIA_COUNTY_PATHS).forEach(([slug, pathId]) => {
    const path = doc.getElementById(pathId);
    if (!path) return;

    const county = countyBySlug.get(slug);
    path.removeAttribute('style');
    path.setAttribute('class', 'county-map-region');
    path.setAttribute('data-county-slug', slug);
    applyCountyShapeAttributes(path, county, activeCountySlug, topFilteredCount);
  });

  Object.entries(ROMANIA_COUNTY_MARKERS).forEach(([slug, marker]) => {
    appendCountyMarker(doc, svg, slug, marker, countyBySlug.get(slug), activeCountySlug, topFilteredCount);
  });

  svg.querySelectorAll('path').forEach((path) => {
    if (!knownPathIds.has(path.id)) {
      path.setAttribute('aria-hidden', 'true');
    }
  });

  return new window.XMLSerializer().serializeToString(svg);
}

export function RomaniaCountyMap({ data, allData }) {
  const navigate = useNavigate();
  const [svgSource, setSvgSource] = useState('');
  const [activeCountySlug, setActiveCountySlug] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/romania-counties.svg')
      .then((response) => response.text())
      .then((svgText) => {
        if (!cancelled) setSvgSource(svgText);
      })
      .catch(() => {
        if (!cancelled) setSvgSource('');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const totalCountMap = useMemo(() => buildCountMap(allData), [allData]);
  const filteredCountMap = useMemo(() => buildCountMap(data), [data]);

  const counties = useMemo(() => {
    return [...totalCountMap.values()]
      .map((total) => {
        const filtered = filteredCountMap.get(total.slug) || {
          slug: total.slug,
          county: total.county,
          total: 0,
          convicted: 0,
        };

        return {
          slug: total.slug,
          county: total.county,
          href: `/judet/${total.slug}`,
          pathId: ROMANIA_COUNTY_PATHS[total.slug] || null,
          marker: ROMANIA_COUNTY_MARKERS[total.slug] || null,
          totalCount: total.total,
          filteredCount: filtered.total,
          filteredConvicted: filtered.convicted,
        };
      })
      .sort((left, right) => left.county.localeCompare(right.county, 'ro'));
  }, [filteredCountMap, totalCountMap]);

  const mapCounties = useMemo(
    () => counties.filter((county) => county.pathId || county.marker),
    [counties]
  );

  const topFilteredCount = useMemo(() => {
    return mapCounties.reduce((max, county) => Math.max(max, county.filteredCount), 0);
  }, [mapCounties]);

  const activeCounty =
    counties.find((county) => county.slug === activeCountySlug)
    || counties.find((county) => county.filteredCount > 0)
    || counties[0]
    || null;

  const interactiveSvgMarkup = useMemo(() => {
    return buildInteractiveMapMarkup(
      svgSource,
      mapCounties,
      activeCounty?.pathId || activeCounty?.marker ? activeCounty.slug : null,
      topFilteredCount
    );
  }, [activeCounty, mapCounties, svgSource, topFilteredCount]);

  const ranking = useMemo(() => {
    const sorted = [...counties].sort((left, right) => {
      if (right.filteredCount !== left.filteredCount) return right.filteredCount - left.filteredCount;
      if (right.totalCount !== left.totalCount) return right.totalCount - left.totalCount;
      return left.county.localeCompare(right.county, 'ro');
    });

    const highlighted = sorted.filter((county) => county.filteredCount > 0);
    return (highlighted.length > 0 ? highlighted : sorted).slice(0, 6);
  }, [counties]);

  const activeCounties = mapCounties.filter((county) => county.filteredCount > 0).length;

  function getCountySlugFromEvent(target) {
    return target.closest?.('[data-county-slug]')?.getAttribute('data-county-slug') || null;
  }

  function handleStageMouseOver(event) {
    const slug = getCountySlugFromEvent(event.target);
    if (slug) setActiveCountySlug(slug);
  }

  function handleStageFocus(event) {
    const slug = getCountySlugFromEvent(event.target);
    if (slug) setActiveCountySlug(slug);
  }

  function handleStageClick(event) {
    const slug = getCountySlugFromEvent(event.target);
    if (!slug) return;

    event.preventDefault();
    navigate(`/judet/${slug}`);
  }

  function handleStageKeyDown(event) {
    const slug = getCountySlugFromEvent(event.target);
    if (!slug) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigate(`/judet/${slug}`);
    }
  }

  return (
    <div className="county-map-shell">
      <div className="county-map-mobile-note">
        Pe mobil poti glisa harta pe orizontala si poti atinge un judet sau Bucuresti pentru pagina lui.
      </div>

      <div className="county-map-scroll">
        <div
          className="county-map-stage"
          role="group"
          aria-label={`Harta Romaniei cu ${activeCounties} zone geografice active in filtrele curente.`}
          onMouseOver={handleStageMouseOver}
          onMouseLeave={() => setActiveCountySlug(null)}
          onFocusCapture={handleStageFocus}
          onClick={handleStageClick}
          onKeyDown={handleStageKeyDown}
        >
          <div className="county-map-stage-wash" aria-hidden="true" />

          {interactiveSvgMarkup ? (
            <div
              className="county-map-svg-shell"
              dangerouslySetInnerHTML={{ __html: interactiveSvgMarkup }}
            />
          ) : (
            <div className="county-map-loading">Se incarca harta...</div>
          )}

          {interactiveSvgMarkup && activeCounties === 0 && (
            <div className="county-map-empty">
              Niciun judet nu are rezultate pentru filtrele selectate.
            </div>
          )}
        </div>
      </div>

      <div className="county-map-legend" aria-hidden="true">
        <span className="county-map-legend-label">Mai puțini</span>
        <div className="county-map-legend-swatches">
          {[1, 2, 3, 4, 5].map((level) => (
            <span key={level} className="county-map-legend-swatch" data-level={String(level)} />
          ))}
        </div>
        <span className="county-map-legend-label">Mai mulți</span>
      </div>

      <div className="county-map-bottom">
        {activeCounty && (
          <div
            key={activeCounty.slug}
            className="county-map-focus"
            data-active={activeCounty.filteredCount > 0 ? 'true' : 'false'}
          >
            <div>
              <span className="county-map-kicker">
                {activeCounty.filteredCount > 0 ? 'Activ în filtre' : 'În arhivă'}
              </span>
              <h3 className="county-map-focus-title">{activeCounty.county}</h3>
              <p className="county-map-focus-copy">
                {activeCounty.filteredCount > 0
                  ? `${formatCaseCount(activeCounty.filteredCount)} apar în rezultatele curente.`
                  : 'Nu apare în filtrele curente, dar există în arhiva completă.'}
              </p>
            </div>

            <div className="county-map-focus-bottom">
              <div className="county-map-focus-stats">
                <span>{formatCaseCount(activeCounty.totalCount)} în arhivă</span>
                <span>{formatCaseCount(activeCounty.filteredConvicted)} condamnați</span>
              </div>
              <Link to={activeCounty.href} className="county-map-focus-link">
                Pagina zonei {'->'}
              </Link>
            </div>
          </div>
        )}
      </div>

      {ranking.length > 0 && (
        <div className="county-map-toplist">
          {ranking.map((county) => (
            <Link
              key={county.slug}
              to={county.href}
              className={`county-map-chip${county.filteredCount > 0 ? '' : ' county-map-chip--muted'}`}
              onMouseEnter={() => setActiveCountySlug(county.slug)}
              onFocus={() => setActiveCountySlug(county.slug)}
            >
              <span>{county.county}</span>
              <span className="county-map-chip-count">
                {county.filteredCount > 0 ? county.filteredCount : county.totalCount}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
