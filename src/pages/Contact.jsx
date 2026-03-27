import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { useSEO } from '../hooks/useSEO';

const CONTACT_EMAIL = 'politicienicoruptiro@gmail.com';

const REQUEST_TYPES = [
  { value: 'correction', label: 'Solicitare de corecție' },
  { value: 'removal', label: 'Solicitare de eliminare (GDPR)' },
  { value: 'general', label: 'Contact general' },
];

export function Contact() {
  useSEO({
    title: 'Contact & Corecții | Politicieni Corupți',
    description: 'Trimite o solicitare de corecție, eliminare a datelor (GDPR) sau contactează echipa proiectului.',
  });
  const [type, setType] = useState('correction');
  const [politician, setPolitician] = useState('');
  const [description, setDescription] = useState('');
  const [source, setSource] = useState('');
  const [name, setName] = useState('');

  const subject = encodeURIComponent(
    type === 'correction'
      ? `Solicitare corecție: ${politician || 'politician'}`
      : type === 'removal'
      ? `Solicitare eliminare GDPR: ${politician || 'politician'}`
      : 'Contact general – Politicieni Corupți'
  );

  const body = encodeURIComponent(
    [
      `Tip cerere: ${REQUEST_TYPES.find((r) => r.value === type)?.label}`,
      politician ? `Politician vizat: ${politician}` : '',
      name ? `Numele dvs.: ${name}` : '',
      '',
      'Descriere:',
      description,
      '',
      source ? `Surse / documente suport:\n${source}` : '',
    ]
      .filter((line) => line !== undefined)
      .join('\n')
  );

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  return (
    <PageLayout title="Contact & Corecții" kicker="Transparență & dialog">
      <Section title="Solicitare de corecție">
        <p>
          Dacă identificați o eroare factuală — sentință incorectă, status juridic inexact, dată
          greșită, nume scris greșit sau orice altă inexactitate — vă rugăm să ne contactați.
          Furnizați informația corectă și sursa care o susține, pentru a putea verifica și corecta
          rapid.
        </p>
        <p>
          Autorul se angajează să analizeze fiecare solicitare și să răspundă în termen de maximum
          <strong> 30 de zile calendaristice</strong>.
        </p>
      </Section>

      <Section title="Solicitare de eliminare (drept GDPR)">
        <p>
          Persoanele ale căror date apar în această bază de date pot solicita eliminarea lor,
          invocând <strong>dreptul la ștergere (Art. 17 GDPR)</strong>. Cererile vor fi analizate
          în raport cu:
        </p>
        <ul>
          <li>Baza legală a prelucrării (interes public, Art. 85 GDPR)</li>
          <li>Natura și actualitatea informațiilor</li>
          <li>Caracterul public al funcției deținute</li>
        </ul>
        <p>
          Simpla nemulțumire față de includere nu constituie temei suficient pentru eliminare,
          dacă informațiile sunt exacte și de interes public. Cererile justificate vor fi
          onorate.
        </p>
      </Section>

      <Section title="Formular de contact">
        <p>
          Completați câmpurile de mai jos — formularul va deschide clientul dvs. de email cu datele
          pre-completate. Puteți de asemenea să scrieți direct la{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="legal-inline-link">{CONTACT_EMAIL}</a>.
        </p>

        <div className="contact-form">
          <div className="contact-form-field">
            <label className="contact-form-label">Tipul cererii</label>
            <div className="contact-form-radio-group">
              {REQUEST_TYPES.map((r) => (
                <label key={r.value} className="contact-form-radio">
                  <input
                    type="radio"
                    name="type"
                    value={r.value}
                    checked={type === r.value}
                    onChange={() => setType(r.value)}
                  />
                  <span>{r.label}</span>
                </label>
              ))}
            </div>
          </div>

          {type !== 'general' && (
            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="politician">
                Politicianul vizat
              </label>
              <input
                id="politician"
                type="text"
                className="contact-form-input"
                placeholder="ex: Ion Popescu"
                value={politician}
                onChange={(e) => setPolitician(e.target.value)}
              />
            </div>
          )}

          <div className="contact-form-field">
            <label className="contact-form-label" htmlFor="name">
              Numele dvs. <span className="contact-form-optional">(opțional)</span>
            </label>
            <input
              id="name"
              type="text"
              className="contact-form-input"
              placeholder="Prenume Nume"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="contact-form-field">
            <label className="contact-form-label" htmlFor="description">
              Descriere
              {type === 'correction' && ' — ce este incorect și care este informația corectă'}
              {type === 'removal' && ' — motivul solicitării de eliminare'}
            </label>
            <textarea
              id="description"
              className="contact-form-textarea"
              placeholder={
                type === 'correction'
                  ? 'ex: Sentința afișată este de 3 ani, dar condamnarea definitivă a fost de 4 ani...'
                  : type === 'removal'
                  ? 'ex: Dosar clasat, achitare pronunțată în data de...'
                  : 'Mesajul dvs...'
              }
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {type !== 'general' && (
            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="source">
                Surse / documente suport <span className="contact-form-optional">(recomandat)</span>
              </label>
              <textarea
                id="source"
                className="contact-form-textarea"
                placeholder="Link-uri către decizii judecătorești, articole de presă sau documente oficiale..."
                rows={3}
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </div>
          )}

          <a
            href={mailtoHref}
            className="contact-form-submit"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="1" y="3" width="12" height="9" rx="1" />
              <path d="M1 4l6 4.5L13 4" />
            </svg>
            Deschide în clientul de email
          </a>

          <p className="contact-form-note">
            Datele nu sunt trimise direct prin acest site. Formularul pre-completează un
            email în aplicația dvs. de email.
          </p>
        </div>
      </Section>

      <div className="method-footer-links">
        <Link to="/aviz-legal" className="method-footer-link">Aviz legal →</Link>
        <Link to="/confidentialitate" className="method-footer-link">Drepturile dvs. GDPR →</Link>
      </div>
    </PageLayout>
  );
}

function Section({ title, children }) {
  return (
    <section className="page-section">
      <h2 className="page-section-title">{title}</h2>
      <div className="page-section-body">{children}</div>
    </section>
  );
}
