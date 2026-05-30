import { BUY_ME_A_COFFEE_URL, SUPPORT_LINK_LABEL } from '../utils/support';

export function FooterSupportLink() {
  return (
    <div className="app-footer-support">
      <span className="app-footer-data-label">Sprijin</span>
      <a
        href={BUY_ME_A_COFFEE_URL}
        className="app-footer-support-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Susține proiectul pe Buy Me a Coffee"
      >
        <span className="app-footer-support-dot" aria-hidden="true" />
        <span>{SUPPORT_LINK_LABEL}</span>
      </a>
    </div>
  );
}
