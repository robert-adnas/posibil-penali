const dna = (id, label) => ({ label: `DNA – ${label}`, url: `https://www.dna.ro/comunicat.xhtml?id=${id}` });
const event = (date, label, note, source) => ({ date, label, note, source });

const olteanu = dna(10056, 'decizia din 2020 și actualizarea privind prescripția');
const resmerita = dna(7328, 'actualizarea cu decizia definitivă');
const iusein = dna(10471, 'actualizarea cu decizia definitivă');
const platon = dna(11337, 'decizia din 2022 și actualizarea privind recursul în casație');
const silaghi = dna(4511, 'comunicatul privind clasarea');
const funeriu = dna(8667, 'comunicatul în dosarul licențelor Microsoft');
const chiliman = dna(6432, 'comunicatul și actualizarea privind clasarea');
const raduly = dna(13891, 'comunicatul privind trimiterea în judecată');
const dragomirescu = dna(13788, 'comunicatul privind acțiunea penală și controlul judiciar');
const moraru = dna(14057, 'comunicatul privind acțiunea penală și măsurile preventive');
const ciucu = dna(13821, 'comunicatul privind acțiunea penală');
const smeuAgreement = {
  label: 'Parchetul European – sesizarea instanței cu acordul',
  url: 'https://www.eppo.europa.eu/media/news/romania-mayor-tigveni-pleads-guilty-subsidy-fraud-committed-his-term-2023-06-13_en',
};
const smeuSentence = {
  label: 'Ziua de Constanța – sentința nedefinitivă a Tribunalului București',
  url: 'https://www.ziuaconstanta.ro/stiri/justitie/primarul-constantin-smeu-pnl-condamnare-dupa-acordul-de-recunoastere-a-vinovatiei-cu-parchetul-european-833689.html',
};
const koczaSentence = {
  label: 'Status Dosar – reproducerea minutei Tribunalului Cluj',
  url: 'https://www.statusdosar.ro/instante/tribunalul-cluj/dosare/sectia-penala/penal/4641/117/2026',
};
const micuNotice = {
  label: 'ANI – comunicatul din 12 iulie 2016',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=2248&PID=20&currentPage=77',
};
const micuDecision = {
  label: 'Municipiul Roman – documentația care consemnează decizia Înaltei Curți',
  url: 'https://primariaroman.ro/wp-content/uploads/2020/06/012-prescriere-incompatibiliate-primar-SUPL-6.pdf#page=10',
};
const temeaNotice = {
  label: 'ANI – comunicatul din 7 august 2020',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3004&PID=20&currentPage=25',
};
const temeaDecision = {
  label: 'Precedentia – copia hotărârii Înaltei Curți privind revizuirea',
  url: 'https://precedentia.md/search/case/1525209/iccj-sectia-de-contencios-administrativ-si-fiscal-decizia/',
};
const chiforPreliminary = {
  label: 'Foaia Transilvană – încheierea privind camera preliminară',
  url: 'https://foaiatransilvana.ro/lovitura-in-dosarul-primarului-acuzat-de-procurori-ca-ar-fi-sustras-motorina-din-primarie/',
};
const stoica = {
  label: 'ANI – comunicatul cu decizia definitivă a Înaltei Curți',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=1361&PID=20&currentPage=178',
};
const trofim = {
  label: 'Prefectura Tulcea – raportul din 2022, pagina 46',
  url: 'https://tl.prefectura.mai.gov.ro/wp-content/uploads/sites/20/2023/03/Raport-de-activitate-1-ianuarie-31-decembrie-2022.pdf#page=46',
};
const prodan = {
  label: 'Consiliul Local Corni – hotărârea 21/2022, articolul 1',
  url: 'https://emol.ro/corni-gl/registru-hcl/60520/',
};

// Each row records public evidence for the named profile at its reviewed snapshot.
export const additionalProfileEvidence = {
  'Andrei Chiliman': {
    verifiedAt: '2026-10-02',
    reviewedAt: '2026-10-02',
    status: 'closed',
    statusSource: chiliman,
    chronologies: [{
      title: 'Dosarul privind contracte ale Primăriei Sectorului 1',
      events: [
        event('2015-06-18', 'DNA a anunțat punerea în mișcare a acțiunii penale',
          'Comunicatul consemnează acuzațiile formulate de procurori în această cauză.', chiliman),
        event('2020-12-16', 'Clasare',
          'Procurorii anticorupție au dispus clasarea cauzei.', chiliman),
      ],
    }],
  },
  'Aurora Trofim': {
    verifiedAt: '2026-11-21',
    reviewedAt: '2026-11-21',
    status: 'integrity',
    statusSource: trofim,
    chronologies: [{
      title: 'Raportul ANI privind incompatibilitatea',
      events: [
        event('2019-02-01', 'Raportul de evaluare al ANI',
          'Raportul a vizat o stare de incompatibilitate în perioada exercitării funcției de viceprimar al comunei Crișan.', trofim),
        event('2022-08-12', 'ANI a comunicat caracterul definitiv al raportului',
          'Prefectura consemnează că raportul a rămas definitiv prin nerecurarea sentinței din 13 septembrie 2021.', trofim),
      ],
    }],
  },
  'Benone Moraru': {
    verifiedAt: '2026-10-29',
    reviewedAt: '2026-10-29',
    status: 'investigated',
    statusSource: moraru,
    chronologies: [{
      title: 'Dosarul privind contractul de alimentare cu apă din Slănic-Moldova',
      events: [
        event('2026-10-28', 'DNA a comunicat punerea în mișcare a acțiunii penale',
          'Comunicatul prezintă acuzația de luare de mită și reținerea începând din 27 octombrie.', moraru),
        event('2026-10-28', 'Arest preventiv dispus',
          'Judecătorul de drepturi și libertăți de la Tribunalul București a admis măsura preventivă pentru 30 de zile.', moraru),
      ],
    }],
  },
  'Bogdan Olteanu': {
    verifiedAt: '2026-08-03',
    reviewedAt: '2026-08-03',
    status: 'prescribed',
    statusSource: olteanu,
    chronologies: [{
      title: 'Dosarul de trafic de influență',
      events: [
        event('2020-10-29', 'Condamnare definitivă în apel',
          'Curtea de Apel București a stabilit o pedeapsă de 5 ani de închisoare. Soluția penală a fost revizuită ulterior.', olteanu),
        event('2023-03-31', 'Încetarea definitivă a procesului prin prescripție',
          'Curtea de Apel București a admis revizuirea și a încetat procesul penal. Confiscarea specială a fost menținută.', olteanu),
      ],
    }],
  },
  'Bogdan-Eduard Dragomirescu': {
    verifiedAt: '2026-08-10',
    reviewedAt: '2026-08-10',
    status: 'investigated',
    statusSource: dragomirescu,
    chronologies: [{
      title: 'Dosarul privind controlul ANPC la un club din Mamaia',
      events: [
        event('2026-06-11', 'DNA a comunicat punerea în mișcare a acțiunii penale',
          'Procurorii au anunțat acuzațiile și măsura controlului judiciar, aplicată începând cu 10 iunie.', dragomirescu),
      ],
    }],
  },
  'Ciprian Ciucu': {
    verifiedAt: '2026-08-25',
    reviewedAt: '2026-08-25',
    status: 'investigated',
    statusSource: ciucu,
    chronologies: [{
      title: 'Dosarul privind servicii de publicitate și consultanță electorală',
      events: [
        event('2026-06-18', 'Punerea în mișcare a acțiunii penale',
          'Comunicatul DNA îl identifică între persoanele față de care procurorii au pus în mișcare acțiunea penală.', ciucu),
      ],
    }],
  },
  'Constantin Smeu': {
    verifiedAt: '2026-10-27',
    reviewedAt: '2026-10-27',
    status: 'first_instance',
    statusSource: smeuSentence,
    chronologies: [{
      title: 'Dosarul privind subvențiile agricole din Tigveni',
      events: [
        event('2023-06-09', 'Instanța a fost sesizată cu acordul de recunoaștere',
          'Parchetul European a depus la tribunal acordul încheiat cu primarul comunei Tigveni.', smeuAgreement),
        event('2023-10-31', 'Sentință nedefinitivă relatată în presă',
          'Tribunalul București a admis acordul și a stabilit o pedeapsă de 2 ani și 2 luni de închisoare cu suspendare, potrivit relatării.', smeuSentence),
      ],
    }],
  },
  'Cornel Resmeriță': {
    verifiedAt: '2026-11-13',
    reviewedAt: '2026-11-13',
    status: 'prescribed',
    statusSource: resmerita,
    chronologies: [{
      title: 'Dosarul lucrărilor de alimentare cu energie la Straja',
      events: [
        event('2022-07-28', 'Încetarea definitivă a procesului prin prescripție',
          'Curtea de Apel Alba a dispus încetarea procesului penal față de Cornel Resmeriță prin decizia nr. 621.', resmerita),
      ],
    }],
  },
  'Cornel-Vasile Chifor': {
    verifiedAt: '2026-11-24',
    reviewedAt: '2026-11-24',
    chronologies: [{
      title: 'Dosarul privind folosirea resurselor Primăriei Cornești',
      events: [
        event('2026-06-26', 'Reluarea procedurii de cameră preliminară',
          'Potrivit relatării, Tribunalul Cluj a desființat încheierile anterioare ale judecătorului de cameră preliminară.', chiforPreliminary),
      ],
    }],
  },
  'Daniel Funeriu': {
    verifiedAt: '2026-10-02',
    reviewedAt: '2026-10-02',
    status: 'closed',
    statusSource: funeriu,
    chronologies: [{
      title: 'Dosarul licențelor Microsoft',
      events: [
        event('2018-02-01', 'DNA a comunicat clasarea',
          'Procurorii au clasat cauza față de Daniel Funeriu. Nota analizată avea rol de raportare și informare.', funeriu),
      ],
    }],
  },
  'Iusein Visel': {
    verifiedAt: '2026-11-12',
    reviewedAt: '2026-11-12',
    status: 'prescribed',
    statusSource: iusein,
    chronologies: [{
      title: 'Dosarul privind subvențiile APIA din Dobromir',
      events: [
        event('2026-06-25', 'Încetarea definitivă a procesului prin prescripție',
          'Curtea de Apel Constanța a dispus încetarea procesului penal prin decizia nr. 696.', iusein),
      ],
    }],
  },
  'Kócza István': {
    verifiedAt: '2026-10-26',
    reviewedAt: '2026-10-26',
    status: 'first_instance',
    statusSource: koczaSentence,
    chronologies: [{
      title: 'Dosarul nr. 4641/117/2026 al Tribunalului Cluj',
      events: [
        event('2026-09-01', 'Acord de recunoaștere a vinovăției',
          'Tribunalul a consemnat încheierea acordului între Parchetul European și inculpat.', koczaSentence),
        event('2026-10-20', 'Condamnare în primă instanță',
          'Tribunalul Cluj a admis acordul și a stabilit 3 ani de închisoare cu suspendare sub supraveghere. Minuta indica dreptul de apel.', koczaSentence),
      ],
    }],
  },
  'Lucian-Ovidiu Micu': {
    verifiedAt: '2026-11-18',
    reviewedAt: '2026-11-18',
    status: 'integrity',
    statusSource: micuDecision,
    chronologies: [{
      title: 'Raportul ANI privind incompatibilitatea',
      events: [
        event('2016-07-12', 'ANI a comunicat constatarea incompatibilității',
          'Constatarea privea cumulul dintre funcția de viceprimar și cea remunerată de membru în consiliul de administrație al spitalului municipal.', micuNotice),
        event('2020-04-02', 'Raportul ANI a rămas definitiv',
          'Documentația municipiului Roman consemnează respingerea definitivă a contestației în dosarul nr. 533/32/2016.', micuDecision),
      ],
    }],
  },
  'Luminița-Adriana Temea': {
    verifiedAt: '2026-11-16',
    reviewedAt: '2026-11-16',
    status: 'integrity',
    statusSource: temeaNotice,
    chronologies: [{
      title: 'Raportul ANI privind incompatibilitatea',
      events: [
        event('2020-08-07', 'ANI a comunicat constatarea incompatibilității',
          'Constatarea privea cumulul funcției de viceprimar cu calitatea de membru în consiliile de administrație ale școlilor Horgești și Răcătău.', temeaNotice),
        event('2023-02-08', 'Înalta Curte a admis recursul ANI',
          'Instanța a casat sentința inițială și a respins contestația împotriva raportului ANI.', temeaDecision),
        event('2024-03-21', 'Revizuire respinsă definitiv',
          'Înalta Curte a respins cererea de revizuire a deciziei din 2023.', temeaDecision),
      ],
    }],
  },
  'Ovidiu Ioan Silaghi': {
    verifiedAt: '2026-08-26',
    reviewedAt: '2026-08-26',
    status: 'closed',
    statusSource: silaghi,
    chronologies: [{
      title: 'Dosarul privind presupuse intervenții la CNADNR',
      events: [
        event('2018-01-31', 'Clasare',
          'DNA a dispus clasarea pe motiv că fapta nu există, după administrarea probelor.', silaghi),
      ],
    }],
  },
  'Ráduly István': {
    verifiedAt: '2026-10-21',
    reviewedAt: '2026-10-21',
    status: 'indicted',
    statusSource: raduly,
    chronologies: [{
      title: 'Dosarul privind lucrările la sediul Prefecturii Covasna',
      events: [
        event('2026-08-03', 'DNA a comunicat trimiterea în judecată',
          'Procurorii l-au trimis în judecată pentru acuzația de abuz în serviciu.', raduly),
      ],
    }],
  },
  'Stelu Platon': {
    verifiedAt: '2026-10-07',
    reviewedAt: '2026-10-07',
    status: 'prescribed',
    statusSource: platon,
    chronologies: [{
      title: 'Dosarul privind subvențiile APIA din Toplița',
      events: [
        event('2022-06-07', 'Condamnare definitivă',
          'Instanța a stabilit o pedeapsă de 3 ani de închisoare cu suspendare. Soluția penală a fost schimbată după recursul în casație.', platon),
        event('2026-01-22', 'Încetarea definitivă a procesului prin prescripție',
          'Înalta Curte a admis recursul în casație prin decizia nr. 47/RC și a încetat procesul penal.', platon),
      ],
    }],
  },
  'Ștefan-Bucur Stoica': {
    verifiedAt: '2026-11-15',
    reviewedAt: '2026-11-15',
    status: 'integrity',
    statusSource: stoica,
    chronologies: [{
      title: 'Raportul ANI privind incompatibilitatea',
      events: [
        event('2011-12-28', 'Constatarea incompatibilității',
          'ANI a constatat cumulul dintre mandatul de consilier județean și funcția de director al Direcției Regionale de Drumuri și Poduri Craiova.', stoica),
        event('2013-10-15', 'Soluție definitivă privind raportul ANI',
          'Înalta Curte a menținut constatarea de incompatibilitate prin decizia nr. 6734.', stoica),
      ],
    }],
  },
  'Vasile Prodan': {
    verifiedAt: '2026-11-21',
    reviewedAt: '2026-11-21',
    status: 'integrity',
    statusSource: prodan,
    chronologies: [{
      title: 'Raportul ANI privind incompatibilitatea',
      events: [
        event('2017-03-29', 'Raportul de evaluare al ANI',
          'Raportul a vizat încălcarea regimului incompatibilităților în exercitarea funcției de primar.', prodan),
        event('2022-01-25', 'Raportul ANI a rămas definitiv',
          'Hotărârea Consiliului Local Corni consemnează soluția definitivă a Înaltei Curți în dosarul nr. 335/44/2017.', prodan),
      ],
    }],
  },
};
