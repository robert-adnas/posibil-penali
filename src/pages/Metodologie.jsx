import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';

const STATUS_DEFS = [
  {
    key: 'convicted',
    label: 'Condamnat definitiv',
    legal: 'Hotărâre judecătorească definitivă și irevocabilă, după epuizarea tuturor căilor de atac ordinare. Vinovăția penală a fost stabilită de instanță.',
  },
  {
    key: 'first_instance',
    label: 'Condamnat în primă instanță',
    legal: 'Condamnat de tribunal, dar sentința nu este definitivă. Inculpatul poate declara apel. Prezumția de nevinovăție se aplică parțial — sentința poate fi modificată sau anulată în căile de atac.',
  },
  {
    key: 'indicted',
    label: 'Trimis în judecată',
    legal: 'Procurorul a emis rechizitoriu și a sesizat instanța. Procesul penal urmează să se desfășoare. Vinovăția nu a fost stabilită de nicio instanță.',
  },
  {
    key: 'investigated',
    label: 'Cercetat penal',
    legal: 'Persoana se află sub urmărire penală (urmărire penală în curs), dar nu a fost trimisă în judecată. Prezumția de nevinovăție se aplică deplin.',
  },
  {
    key: 'prescribed',
    label: 'Prescris',
    legal: 'Termenul de prescripție a răspunderii penale a expirat. Fapta nu mai poate fi judecată, indiferent de vinovăție. Nu echivalează cu achitarea.',
  },
  {
    key: 'acquitted',
    label: 'Achitat',
    legal: 'Instanța a pronunțat achitarea — fie prin lipsă de probe, fie prin neîntrunirea elementelor constitutive ale infracțiunii. Nu există vinovăție stabilită.',
  },
];

export function Metodologie() {
  return (
    <PageLayout title="Metodologie" kicker="Transparență & surse">
      <Section title="Ce este această bază de date">
        <p>
          Acest proiect este un instrument independent de transparență publică, realizat în scop
          civic și jurnalistic necomercial. Scopul său este de a centraliza și vizualiza informații
          despre politicieni români implicați în dosare penale, facilitând accesul cetățenilor la
          date de interes public.
        </p>
        <p>
          Proiectul nu este afiliat niciunei organizații politice, ONG, instituții publice sau
          redacții. Este realizat și întreținut de un particular, pe baza informațiilor disponibile
          public.
        </p>
      </Section>

      <Section title="Criterii de includere">
        <p>O persoană este inclusă în baza de date dacă îndeplinește simultan:</p>
        <ul>
          <li>A deținut o funcție publică electivă sau numită în România (parlamentar, ministru, primar, consilier județean, europarlamentar, secretar de stat etc.)</li>
          <li>Este sau a fost implicată într-un dosar penal documentat public</li>
          <li>Informațiile provin din cel puțin o sursă credibilă și verificabilă (dosar instanță, comunicat DNA/DIICOT, publicație de referință)</li>
        </ul>
        <p>
          Lista nu este exhaustivă — prioritatea a fost acuratețea în detrimentul completitudinii.
          Intrările cu informații contradictorii sau insuficient documentate au fost excluse.
        </p>
      </Section>

      <Section title="Categorii de status juridic">
        <p>
          Fiecare intrare poartă unul dintre următoarele statusuri, care reflectă stadiul procesului
          penal la momentul ultimei actualizări:
        </p>
        <div className="method-status-list">
          {STATUS_DEFS.map((s) => (
            <div key={s.key} className="method-status-item" data-status={s.key}>
              <div className="method-status-header">
                <span className="method-status-dot" />
                <span className="method-status-label">{s.label}</span>
              </div>
              <p className="method-status-desc">{s.legal}</p>
            </div>
          ))}
        </div>
        <p className="method-note">
          <strong>Notă importantă:</strong> Prezumția de nevinovăție (Art. 23 din Constituția
          României, Art. 48 din Carta Drepturilor Fundamentale a UE) se aplică tuturor persoanelor
          fără condamnare definitivă. Includerea în această bază de date nu stabilește vinovăția
          penală.
        </p>
      </Section>

      <Section title="Surse utilizate">
        <p>Informațiile sunt colectate exclusiv din surse publice:</p>
        <ul>
          <li><strong>Surse oficiale:</strong> Portal.just.ro (decizii judecătorești), PNA.ro (comunicate DNA), DIICOT.ro</li>
          <li><strong>Presă de referință:</strong> G4Media, HotNews, Digi24, AGERPRES, ProTV Știri, Newsweek România</li>
          <li><strong>Platforme de monitorizare:</strong> România Curată, B365</li>
          <li><strong>Enciclopedii:</strong> Wikipedia (ca sursă de completare, verificată cu surse primare)</li>
        </ul>
        <p>
          Fiecare fișă include link-urile surselor folosite. Acolo unde a fost posibil,
          informațiile au fost verificate cu minimum două surse independente.
        </p>
      </Section>

      <Section title="Proces de actualizare">
        <p>
          Baza de date este actualizată manual, periodic. Actualizările vizează în principal
          schimbările de status juridic (ex: pronunțarea unei sentințe definitive, achitare,
          prescripție) și corectarea erorilor semnalate.
        </p>
        <p>
          Data ultimei actualizări este afișată în subsolul paginii principale. Această bază de date
          nu se actualizează în timp real — întotdeauna verificați sursele originale pentru
          informații la zi.
        </p>
      </Section>

      <Section title="Cum se citește o fișă">
        <p>Fiecare fișă de politician conține:</p>
        <ul>
          <li><strong>Nume și partid</strong> — la momentul comiterii faptei sau al condamnării</li>
          <li><strong>Funcția deținută</strong> — funcția publică relevantă în contextul dosarului</li>
          <li><strong>Faptă</strong> — descriere sumară a acuzațiilor sau a faptelor reținute de instanță</li>
          <li><strong>Status juridic</strong> — stadiul procesual curent (vezi categorii mai sus)</li>
          <li><strong>Pedeapsă</strong> — dacă există sentință definitivă sau în primă instanță</li>
          <li><strong>Surse</strong> — link-uri directe către sursele documentare folosite</li>
        </ul>
        <p>
          Informațiile sunt prezentate rezumativ. Pentru detalii complete, accesați întotdeauna
          sursele originale indicate.
        </p>
      </Section>

      <div className="method-footer-links">
        <Link to="/aviz-legal" className="method-footer-link">Aviz legal și GDPR →</Link>
        <Link to="/contact" className="method-footer-link">Semnalați o eroare →</Link>
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
