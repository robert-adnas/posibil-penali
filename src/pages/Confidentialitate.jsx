import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { useSEO } from '../hooks/useSEO';

const CONTACT_EMAIL = 'politicienicoruptiro@gmail.com';

export function Confidentialitate() {
  useSEO({
    title: 'Politică de Confidențialitate | Politicieni Corupți',
    description: 'Politica de confidențialitate a proiectului: nu colectăm date personale, nu folosim cookie-uri. Analiză de trafic anonimă prin GoatCounter.',
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

      <Section title="Cookie-uri și stocare locală">
        <p>
          <strong>Acest site nu folosește cookie-uri</strong> de niciun fel — nici funcționale,
          nici de sesiune, nici de tracking, nici de marketing. Nu există banner de consimțământ
          pentru cookie-uri deoarece nu există cookie-uri de gestionat.
        </p>
        <p>
          Site-ul folosește <strong>localStorage</strong> (stocare locală în browser) exclusiv
          pentru preferințe funcționale (tema vizuală aleasă de utilizator). Nu sunt stocate
          date personale, iar aceste preferințe rămân doar pe dispozitivul dvs.
        </p>
      </Section>

      <Section title="Servicii de analiză (analytics)">
        <p>
          Folosim <strong>GoatCounter</strong> — un serviciu de analiză a traficului orientat spre
          confidențialitate. GoatCounter <strong>nu folosește cookie-uri</strong>, nu urmărește
          vizitatorii între sesiuni sau site-uri și nu colectează date personale identificabile
          (fără adrese IP complete, fără fingerprinting de dispozitiv).
        </p>
        <p>
          Datele colectate sunt exclusiv agregate și anonime: număr de vizite per pagină, țară
          de origine (la nivel de țară, nu mai precis), tipul browserului și sistemul de operare
          — suficient pentru a înțelege cum este folosit site-ul, fără a compromite
          confidențialitatea vizitatorilor.
        </p>
        <p>
          GoatCounter este un proiect open-source. Detalii complete despre politica lor de
          confidențialitate:{' '}
          <a
            href="https://www.goatcounter.com/help/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-inline-link"
          >
            goatcounter.com/help/privacy
          </a>.
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
          acestui site.
        </p>
        <p>
          Găzduirea pe GitHub Pages poate implica transferul de date tehnice (adrese IP) către
          servere situate în SUA. Acest transfer se realizează în baza Acordului de prelucrare
          a datelor al Microsoft/GitHub și a Clauzelor Contractuale Standard ale UE (SCC),
          conform prevederilor Capitolului V din GDPR. Pentru detalii:{' '}
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

      <Section title="Operatorul de date">
        <p>
          Operatorul de date cu caracter personal, în sensul Art. 4 pct. 7 din GDPR, este
          autorul acestui proiect — persoană fizică, contactabilă la{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="legal-inline-link">{CONTACT_EMAIL}</a>.
        </p>
        <p>
          Proiectul nu are desemnat un responsabil cu protecția datelor (DPO), dat fiind
          caracterul individual și necomercial al activității.
        </p>
      </Section>

      <Section title="Durata de păstrare a datelor">
        <p>
          Datele despre politicieni sunt păstrate atât timp cât rămân de interes public și
          sunt documentate prin surse verificabile. Informațiile pot fi actualizate, corectate
          sau eliminate în urma unei solicitări justificate sau atunci când nu mai sunt
          susținute de surse credibile.
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
