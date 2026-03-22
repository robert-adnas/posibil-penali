import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { useSEO } from '../hooks/useSEO';

const CONTACT_EMAIL = 'politicienicoruptiro@gmail.com';

export function Confidentialitate() {
  useSEO({
    title: 'Politică de Confidențialitate | Politicieni Corupți',
    description: 'Politica de confidențialitate a proiectului: nu colectăm date, nu folosim cookie-uri, nu urmărim vizitatorii.',
  });
  return (
    <PageLayout title="Politică de Confidențialitate" kicker="GDPR & date personale">
      <p className="page-intro-note">
        Ultima actualizare: martie 2026
      </p>

      <Section title="Date colectate despre vizitatori">
        <p>
          <strong>Acest site nu colectează date personale ale vizitatorilor.</strong> Nu există
          formulare de înregistrare, conturi de utilizator, sisteme de autentificare sau profilare.
          Nu stocăm adrese IP, date despre dispozitiv sau comportament de navigare pe propriile
          servere.
        </p>
      </Section>

      <Section title="Cookie-uri">
        <p>
          <strong>Acest site nu folosește cookie-uri</strong> de niciun fel — nici funcționale,
          nici de sesiune, nici de tracking, nici de marketing. Nu există banner de consimțământ
          pentru cookie-uri deoarece nu există cookie-uri de gestionat.
        </p>
      </Section>

      <Section title="Servicii de analiză (analytics)">
        <p>
          Nu folosim niciun serviciu de analiză a traficului sau comportamentului utilizatorilor
          (precum Google Analytics, Matomo, Plausible, Hotjar sau similare). Nu sunt încărcate
          scripturi de tracking terțe.
        </p>
      </Section>

      <Section title="Găzduire — GitHub Pages">
        <p>
          Site-ul este găzduit pe <strong>GitHub Pages</strong>, un serviciu al GitHub, Inc.
          (filială Microsoft, SUA). Accesarea oricărui site găzduit pe GitHub Pages poate genera,
          la nivelul infrastructurii GitHub, loguri tehnice care pot include adrese IP ale
          vizitatorilor, în conformitate cu politica de confidențialitate a GitHub.
        </p>
        <p>
          Aceste loguri sunt gestionate exclusiv de GitHub și nu sunt accesibile autorului
          acestui site. Pentru detalii:{' '}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-inline-link"
          >
            GitHub Privacy Statement
          </a>.
        </p>
      </Section>

      <Section title="Date despre politicieni (baza de date)">
        <p>
          Baza de date conține informații despre persoane publice — politicieni care au deținut
          funcții elective sau numite în România. Aceste date:
        </p>
        <ul>
          <li>Se referă exclusiv la exercitarea funcțiilor publice, nu la viața privată</li>
          <li>Provin din surse publice (dosare judecătorești, comunicate oficiale, presă)</li>
          <li>Sunt prelucrate în temeiul interesului public și al dreptului la liberă exprimare (Art. 85 GDPR, Legea 190/2018)</li>
        </ul>
        <p>
          Consultați <Link to="/aviz-legal" className="legal-inline-link">Avizul legal</Link> pentru
          detalii complete despre baza juridică a prelucrării.
        </p>
      </Section>

      <Section title="Drepturile dvs. (GDPR)">
        <p>
          Dacă datele dvs. personale apar în această bază de date, aveți, în temeiul GDPR,
          următoarele drepturi:
        </p>
        <ul>
          <li><strong>Dreptul de acces (Art. 15)</strong> — să solicitați o confirmare că datele dvs. sunt prelucrate și o copie a acestora</li>
          <li><strong>Dreptul la rectificare (Art. 16)</strong> — să solicitați corectarea datelor inexacte</li>
          <li><strong>Dreptul la ștergere (Art. 17)</strong> — să solicitați eliminarea datelor, sub rezerva bazei legale de prelucrare</li>
          <li><strong>Dreptul la opoziție (Art. 21)</strong> — să vă opuneți prelucrării, invocând situația particulară</li>
          <li><strong>Dreptul la restricționarea prelucrării (Art. 18)</strong> — să solicitați limitarea prelucrării pe durata analizei unei contestații</li>
        </ul>
        <p>
          Exercitați aceste drepturi prin{' '}
          <Link to="/contact" className="legal-inline-link">pagina de Contact</Link>. Cererile
          vor primi răspuns în termen de <strong>30 de zile calendaristice</strong>.
        </p>
        <p>
          Dacă considerați că drepturile dvs. nu au fost respectate, aveți dreptul să depuneți
          o plângere la <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu
          Caracter Personal (ANSPDCP)</strong>{' '}
          <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="legal-inline-link">
            (dataprotection.ro)
          </a>.
        </p>
      </Section>

      <Section title="Contact pentru probleme de confidențialitate">
        <p>
          Pentru orice solicitare legată de date cu caracter personal, scrieți la:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="legal-inline-link">{CONTACT_EMAIL}</a>
        </p>
      </Section>

      <div className="method-footer-links">
        <Link to="/aviz-legal" className="method-footer-link">Aviz legal →</Link>
        <Link to="/contact" className="method-footer-link">Exercitați un drept GDPR →</Link>
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
