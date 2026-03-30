import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const BASE_URL = 'https://politicieni-corupti.ro';

const STATUS_ENTRIES = [
  {
    key: 'convicted',
    label: 'Condamnat definitiv',
    summary: 'Ce înseamnă condamnat definitiv în România?',
    explanation: `O persoană este „condamnată definitiv" atunci când instanța de judecată a pronunțat o hotărâre penală care a rămas definitivă și irevocabilă — adică toate căile de atac ordinare (apel) au fost epuizate sau termenul pentru exercitarea lor a trecut fără a fi folosit.

Din punct de vedere juridic, aceasta este singura situație în care vinovăția penală este stabilită cu putere de lucru judecat. Persoana nu mai poate contesta condamnarea pe cale ordinară.

Condamnarea definitivă implică de regulă executarea pedepsei (închisoare, amendă, muncă în folosul comunității) și poate atrage interdicții civile, pierderea unor drepturi sau funcții publice.`,
  },
  {
    key: 'first_instance',
    label: 'Condamnat în primă instanță',
    summary: 'Ce înseamnă condamnat în primă instanță?',
    explanation: `„Condamnat în primă instanță" înseamnă că tribunalul sau curtea de apel (ca primă instanță în dosare de corupție) a pronunțat o sentință de condamnare, dar hotărârea NU este definitivă.

Persoana sau procurorul poate exercita calea de atac a apelului. Instanța de apel poate menține condamnarea, o poate reduce, o poate agrava sau poate achita persoana în totalitate.

Prezumția de nevinovăție se aplică în continuare, chiar dacă există o sentință de primă instanță.`,
  },
  {
    key: 'indicted',
    label: 'Trimis în judecată',
    summary: 'Ce înseamnă trimis în judecată (inculpat)?',
    explanation: `„Trimis în judecată" (sau „inculpat") înseamnă că Parchetul — cel mai adesea DNA (Direcția Națională Anticorupție) sau DIICOT — a finalizat urmărirea penală și a emis un rechizitoriu prin care sesizează instanța de judecată.

Procesul penal urmează să înceapă sau este deja în desfășurare. Nicio instanță nu s-a pronunțat încă asupra vinovăției.

Prezumția de nevinovăție se aplică deplin. A fi trimis în judecată nu echivalează cu a fi vinovat.`,
  },
  {
    key: 'investigated',
    label: 'Cercetat penal',
    summary: 'Ce înseamnă cercetat penal sau urmărit penal?',
    explanation: `„Cercetat penal" înseamnă că o persoană se află sub urmărire penală — procurorii strâng probe și efectuează acte de cercetare, dar nu a fost emisă nicio trimitere în judecată.

Această fază poate dura luni sau ani și se poate încheia cu: trimitere în judecată, clasare (dacă nu există probe suficiente) sau soluție de netrimitere în judecată.

Prezumția de nevinovăție se aplică integral. Simpla calitate de suspect sau învinuit nu implică vinovăție.`,
  },
  {
    key: 'prescribed',
    label: 'Prescris',
    summary: 'Ce înseamnă prescripție penală în România?',
    explanation: `Prescripția penală înseamnă că termenul legal în care statul putea urmări și judeca fapta a expirat. Drept urmare, răspunderea penală se stinge — procesul nu mai poate continua sau, dacă era în curs, se închide.

Prescripția NU echivalează cu o achitare și nu înseamnă că fapta nu a existat. Înseamnă doar că mecanismul procedural nu mai poate funcționa.

În dosarele de corupție din România, prescripția a fost un subiect controversat după modificările aduse Codului Penal în 2017–2018.`,
  },
  {
    key: 'closed',
    label: 'Clasat',
    summary: 'Ce înseamnă clasarea sau închiderea cauzei fără trimitere în judecată?',
    explanation: `„Clasat” înseamnă că procurorul a dispus clasarea cauzei sau că dosarul s-a închis fără a ajunge la judecată. Motivele pot varia: fapta nu este prevăzută de legea penală, nu există probe suficiente, lipsește o condiție procedurală ori intervine un impediment legal.

Această soluție NU este o condamnare și NU echivalează automat cu o achitare pronunțată de instanță. Este însă o soluție terminală la nivelul urmăririi penale sau al sesizării instanței.

În arhivă, folosim acest status pentru cazurile în care există o soluție oficială de clasare sau o închidere procedurală clară, fără trimitere în judecată.`,
  },
  {
    key: 'acquitted',
    label: 'Achitat',
    summary: 'Ce înseamnă achitat în dreptul penal român?',
    explanation: `Achitarea înseamnă că instanța a stabilit că fapta nu există, că nu a fost săvârșită de inculpat sau că nu constituie infracțiune. Este soluția favorabilă inculpatului.

O achitare definitivă restabilește pe deplin prezumția de nevinovăție și șterge orice urmă a procesului penal din punct de vedere juridic.

Persoanele achitate definitiv sunt incluse în această arhivă exclusiv pentru documentarea istorică a procesului, cu indicarea clară a soluției finale.`,
  },
];

export function GlosarPage() {
  useSEO({
    title: 'Glosar juridic — Ce înseamnă condamnat definitiv, trimis în judecată, cercetat | Politicieni Corupți',
    description:
      'Explică termenii juridici folosiți în dosarele penale ale politicienilor români: condamnat definitiv, condamnat în primă instanță, trimis în judecată, cercetat penal, prescris, clasat, achitat.',
    url: `${BASE_URL}/glosar`,
  });

  return (
    <div className="app-shell">
      <header className="app-section app-header">
        <div className="app-inner">
          <div className="app-kicker-row">
            <Link to="/" className="app-kicker" style={{ textDecoration: 'none' }}>
              ← Politicieni Corupți
            </Link>
            <span className="app-kicker-separator">—</span>
            <span className="app-kicker-meta">Glosar juridic</span>
          </div>

          <h1 className="app-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            Ce înseamnă termenii juridici din dosarele penale?
          </h1>
          <p className="app-subtitle" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
            Explicații clare pentru fiecare status folosit în arhivă
          </p>
          <div className="app-rule" />
        </div>
      </header>

      <main className="app-section app-main">
        <div className="app-inner">
          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {STATUS_ENTRIES.map((entry) => (
              <article key={entry.key} id={entry.key} style={{ scrollMarginTop: '2rem' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                    marginBottom: '0.35rem',
                    color: 'var(--color-text)',
                  }}
                >
                  {entry.summary}
                </h2>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    marginBottom: '1rem',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  <span
                    className="pol-list-dot"
                    data-status={entry.key}
                    style={{ width: 8, height: 8 }}
                  />
                  {entry.label}
                </div>
                {entry.explanation.split('\n\n').map((para, i) => (
                  <p
                    key={i}
                    className="detail-panel-copy detail-panel-copy--details"
                    style={{ marginBottom: '0.75rem', lineHeight: 1.7 }}
                  >
                    {para}
                  </p>
                ))}
              </article>
            ))}

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
              <p className="detail-panel-footer-note">
                Acest glosar are scop informativ și nu constituie consultanță juridică. Pentru detalii
                complete, consultați{' '}
                <a
                  href="https://legislatie.just.ro/Public/DetaliiDocument/109855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-intro-link"
                >
                  Codul de Procedură Penală
                </a>
                .{' '}
                <Link to="/metodologie" className="app-intro-link">
                  Metodologia arhivei →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="app-section app-footer">
        <div className="app-inner">
          <div className="app-footer-rule" />
          <nav className="app-footer-nav">
            <Link to="/" className="app-footer-nav-link">Arhivă</Link>
            <Link to="/metodologie" className="app-footer-nav-link">Metodologie</Link>
            <Link to="/aviz-legal" className="app-footer-nav-link">Aviz legal</Link>
            <Link to="/contact" className="app-footer-nav-link">Contact & Corecții</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
