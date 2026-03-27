import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { useSEO } from '../hooks/useSEO';

export function AvizLegal() {
  useSEO({
    title: 'Aviz Legal | Politicieni Corupți',
    description: 'Cadrul juridic al bazei de date: prezumția de nevinovăție, temeiul legal GDPR și limitele de răspundere.',
  });
  return (
    <PageLayout title="Aviz Legal" kicker="Cadru juridic">
      <Section title="Scop și natură juridică">
        <p>
          Această bază de date este un instrument independent de transparență civică și informare
          publică, realizat și menținut de un particular, cu caracter editorial și documentar, în
          scop necomercial. Nu este afiliată niciunei organizații, partid, instituții publice,
          redacții sau entități comerciale.
        </p>
        <p>
          Proiectul urmărește să facă accesibile, într-un format vizual și ușor de navigat,
          informații care sunt deja publice — disponibile în dosare judecătorești, comunicate
          oficiale și publicații de presă verificate.
        </p>
      </Section>

      <Section title="Prezumția de nevinovăție">
        <div className="legal-highlight">
          <p>
            Conform <strong>articolului 23 alineatul (11) din Constituția României</strong> și
            <strong> articolului 48 din Carta Drepturilor Fundamentale a Uniunii Europene</strong>,
            orice persoană este prezumată nevinovată până la pronunțarea unei hotărâri
            judecătorești definitive de condamnare.
          </p>
        </div>
        <p>
          Includerea unei persoane în această bază de date cu statusul „cercetat penal”,
          „trimis în judecată” sau „condamnat în primă instanță” <strong>nu constituie o
          afirmare a vinovăției penale definitive</strong> și nu trebuie interpretată ca atare.
          Statusul juridic al fiecărei persoane este indicat explicit și reflectă stadiul
          procesual la data ultimei actualizări.
        </p>
        <p>
          Titlul și prezentarea proiectului au caracter descriptiv și orientativ. Vinovăția nu este
          atribuită prin titulatură, ci este reflectată exclusiv prin statusul juridic explicit
          afișat pentru fiecare persoană inclusă, împreună cu sursele și data ultimei verificări.
        </p>
      </Section>

      <Section title="Baza legală pentru prelucrarea datelor (GDPR)">
        <p>
          Prelucrarea datelor cu caracter personal din această bază de date se realizează în
          baza următoarelor temeiuri juridice:
        </p>
        <ul>
          <li>
            <strong>Articolul 85 din Regulamentul (UE) 2016/679 (GDPR)</strong> — prelucrare
            în scopuri jurnalistice, de expresie academică, artistică sau literară, în
            exercitarea dreptului la liberă exprimare și informare.
          </li>
          <li>
            <strong>Legea nr. 190/2018</strong> privind măsuri de punere în aplicare a GDPR în
            România, care permite prelucrarea datelor privind fapte penale pentru scopuri
            jurnalistice și de interes public, în special când vizează persoane care exercită
            funcții publice.
          </li>
          <li>
            <strong>Articolul 6 alineatul (1) litera (f) din GDPR — interes legitim</strong> — transparența
            actului de guvernare și a exercitării funcțiilor publice este recunoscută ca interes
            public legitim în jurisprudența CEDO și a Curții de Justiție a UE.
          </li>
        </ul>
        <p>
          Datele prelucrate se referă exclusiv la acțiuni ale persoanelor vizate în calitate de
          funcționari sau aleși publici — nu la viața lor privată.
        </p>
      </Section>

      <Section title="Limitarea răspunderii">
        <p>
          Informațiile prezentate în această bază de date provin din surse publice și pot conține
          erori, omisiuni sau date depășite. <strong>Această bază de date nu înlocuiește sursele
          oficiale</strong> (instanțe judecătorești, Direcția Națională Anticorupție, autorități
          de stat).
        </p>
        <p>
          Autorul nu garantează exactitatea, completitudinea sau actualitatea informațiilor
          prezentate și nu își asumă răspunderea pentru:
        </p>
        <ul>
          <li>Decizii luate pe baza datelor din această bază de date</li>
          <li>Erori provenite din sursele primare utilizate</li>
          <li>Modificări de status juridic intervenite după data ultimei actualizări</li>
        </ul>
      </Section>

      <Section title="Exactitate și angajamentul față de corecturi">
        <p>
          Autorul se angajează să mențină informațiile cât mai exacte și actualizate posibil. Orice
          eroare factuală semnalată va fi analizată și corectată în cel mai scurt timp. Corecțiile
          semnificative (de exemplu, schimbări de status juridic) vor fi consemnate în procesul
          de actualizare.
        </p>
        <p>
          Persoanele vizate și orice terț care identifică o eroare factuală pot solicita corectarea
          sau, în cazuri justificate, eliminarea datelor, prin{' '}
          <Link to="/contact" className="legal-inline-link">pagina de Contact</Link>.
        </p>
      </Section>

      <Section title="Drept de răspuns">
        <p>
          Persoanele menționate în baza de date care consideră că informațiile le afectează
          reputația în mod nejustificat sunt invitate să transmită un punct de vedere factual
          documentat. Punctele de vedere transmise vor fi analizate și, dacă sunt susținute de
          dovezi, integrate sau folosite pentru a corecta datele existente.
        </p>
      </Section>

      <div className="method-footer-links">
        <Link to="/contact" className="method-footer-link">Solicitați o corecție →</Link>
        <Link to="/confidentialitate" className="method-footer-link">Politică de confidențialitate →</Link>
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
