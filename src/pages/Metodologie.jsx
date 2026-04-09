import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { useSEO } from '../hooks/useSEO';

const STATUS_DEFS = [
  {
    key: 'convicted',
    label: 'Condamnat definitiv',
    legal: 'Hotărâre judecătorească definitivă și irevocabilă, după epuizarea tuturor căilor de atac ordinare. Vinovăția penală a fost stabilită de instanță.',
  },
  {
    key: 'first_instance',
    label: 'Condamnat în primă instanță',
    legal: 'Există o sentință de condamnare, dar aceasta nu este definitivă și poate fi schimbată în apel. Vinovăția nu este stabilită definitiv.',
  },
  {
    key: 'indicted',
    label: 'Trimis în judecată',
    legal: 'Procurorul a emis rechizitoriu și a sesizat instanța. Procesul penal urmează să se desfășoare. Vinovăția nu a fost stabilită de nicio instanță.',
  },
  {
    key: 'investigated',
    label: 'Cercetat penal',
    legal: 'Persoana se află sub urmărire penală (urmărire penală în curs), dar nu a fost trimisă încă în judecată. Prezumția de nevinovăție se aplică deplin.',
  },
  {
    key: 'prescribed',
    label: 'Prescris',
    legal: 'Termenul de prescripție a răspunderii penale a expirat. Fapta nu mai poate fi judecată, indiferent de vinovăție. Nu echivalează cu achitarea.',
  },
  {
    key: 'closed',
    label: 'Clasat',
    legal: 'Parchetul a dispus clasarea sau cauza a fost închisă fără trimitere în judecată. Nu există o condamnare și nici o soluție de achitare pronunțată de instanță.',
  },
  {
    key: 'acquitted',
    label: 'Achitat',
    legal: 'Instanța a pronunțat achitarea — fie prin lipsă de probe, fie prin neîntrunirea elementelor constitutive ale infracțiunii. Nu există vinovăție stabilită.',
  },
];

export function Metodologie() {
  useSEO({
    title: 'Metodologie | Politicieni Corupți',
    description: 'Cum funcționează baza de date, criteriile de includere, sursele utilizate și definițiile statusurilor juridice.',
  });
  return (
    <PageLayout title="Metodologie" kicker="Transparență & surse">
      <Section title="Ce este această bază de date">
        <p>
          Acest proiect este un instrument independent de transparență publică, realizat în scop
          civic și jurnalistic necomercial. Scopul său este de a centraliza și vizualiza informații
          documentate despre politicieni români incluși în cauze penale sau de integritate de interes
          public, facilitând accesul cetățenilor la date relevante.
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
          <li>Este sau a fost implicată într-o cauză penală sau de integritate documentată public</li>
          <li>Informațiile provin din cel puțin o sursă oficială verificabilă (instanță, DNA, ANI, Ministerul Public), completată unde este util cu presă de referință</li>
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
          <li><strong>Surse oficiale:</strong> portal.just.ro (decizii judecătorești), dna.ro, mpublic.ro, ANI / integritate.eu, DIICOT.ro, Parlamentul României, Parlamentul European</li>
          <li><strong>Presă de referință:</strong> G4Media, HotNews, Digi24, AGERPRES, ProTV Știri, Newsweek România</li>
          <li><strong>Platforme de monitorizare:</strong> România Curată, B365</li>
        </ul>
        <p>
          Fiecare persoană inclusă are cel puțin o sursă oficială. Acolo unde contextul o cere,
          am adăugat și presă de referință pentru clarificarea hotărârilor, a rezultatului final
          sau a evoluției procedurale.
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
          nu se actualizează în timp real. Pentru fiecare persoană inclusă este afișată și data ultimei verificări
          editoriale — întotdeauna verificați sursele originale pentru informații la zi.
        </p>
      </Section>

      <Section title="Prejudiciu total" id="prejudiciu">
        <p>
          Suma afișată pe pagina principală ca „Prejudiciu total" este calculată automat
          prin extragerea doar a valorilor monetare legate explicit de un prejudiciu sau de o pagubă
          documentată. Sunt incluse și formulările care descriu direct plăți, alocări sau încasări
          nelegale de fonduri publice ori europene, atunci când textul indică limpede o pierdere
          economică.
        </p>
        <p>Regulile de calcul:</p>
        <ul>
          <li>Se citește mai întâi câmpul <strong>„Faptă"</strong>; dacă acolo nu există o valoare eligibilă, se caută în <strong>„Detalii"</strong></li>
          <li>Sunt incluse doar sumele descrise explicit ca <strong>prejudiciu</strong>, <strong>pagubă</strong> sau ca <strong>plăți / alocări / încasări nelegale</strong></li>
          <li>Nu sunt incluse sumele care descriu doar <strong>mită</strong>, <strong>șpagă</strong>, cadouri, valoarea unor bunuri sau alte beneficii care nu sunt legate clar în text de un prejudiciu</li>
          <li>Dacă aceeași formulare conține și o sumă de mită, și o sumă de prejudiciu, este contabilizată doar valoarea de prejudiciu</li>
          <li>Sumele exprimate în <strong>euro (€)</strong> sunt preluate ca atare</li>
          <li>Sumele exprimate în <strong>lei (RON)</strong> sunt convertite în euro la cursul orientativ de 1 € ≈ 5 lei (curs simplificat, utilizat doar în scop estimativ)</li>
          <li>Totalul este afișat în lei, la același curs orientativ de conversie</li>
        </ul>
        <p className="method-note">
          <strong>Atenție:</strong> Această sumă este orientativă. Nu toate dosarele conțin valori
          cuantificabile, iar cifrele provin din actele de acuzare sau din hotărârile instanțelor —
          nu din evaluări independente. Chiar și după această filtrare, formula rămâne una
          automată și conservatoare: totalul include doar sumele pe care textul le leagă suficient
          de clar de un prejudiciu documentat.
        </p>
      </Section>

      <Section title="Cum se citește o intrare">
        <p>Fiecare intrare despre un politician conține:</p>
        <ul>
          <li><strong>Nume și partid</strong> — la momentul comiterii faptei sau al condamnării</li>
          <li><strong>Funcția deținută</strong> — funcția publică relevantă în contextul dosarului</li>
          <li><strong>Faptă</strong> — descriere sumară a acuzațiilor sau a faptelor reținute de instanță</li>
          <li><strong>Status juridic</strong> — stadiul procesual curent (vezi categorii mai sus)</li>
          <li><strong>Ultima verificare</strong> — data la care statusul și sursele au fost revizuite editorial</li>
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

function Section({ title, id, children }) {
  return (
    <section className="page-section" id={id}>
      <h2 className="page-section-title">{title}</h2>
      <div className="page-section-body">{children}</div>
    </section>
  );
}
