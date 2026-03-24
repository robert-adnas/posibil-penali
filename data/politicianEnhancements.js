export const metadataOverrides = {
  description:
        'Proiect independent, non-profit și open source despre politicieni români condamnați, trimiși în judecată sau cercetați pentru corupție și probleme de integritate.',
  last_updated: '2026-03-24',
  notes:
    'Statusuri: convicted (condamnare definitivă), first_instance (condamnat în primă instanță), indicted (trimis în judecată), investigated (cercetat), prescribed (proces închis prin prescripție), acquitted (achitat). Fiecare persoană inclusă are cel puțin o sursă oficială verificabilă; unde contextul o cere, am adăugat și presă de referință pentru clarificarea evoluției procedurale. Lista rămâne deschisă și nu este exhaustivă.',
};

export const politicianOverrides = {
  'Daniel Tudorache': {
    replace_sources: true,
    details:
      'Condamnat definitiv în dosarul diamantelor pentru complicitate la trafic de influență. În apel, ÎCCJ i-a redus pedeapsa de la 3 ani și 6 luni cu executare la 3 ani cu suspendare, iar în ianuarie 2026 i-a respins și recursul în casație.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13033',
      },
      {
        label: 'G4Media',
        kind: 'press',
        url: 'https://www.g4media.ro/breaking-fostul-primar-psd-daniel-tudorache-scapa-de-inchisoare-el-a-fost-condamnat-definitiv-la-3-ani-cu-suspendare-in-dosarul-diamantelor-in-prima-instanta-fusese-condamnat-la-pe.html',
      },
      {
        label: 'HotNews',
        kind: 'press',
        url: 'https://hotnews.ro/daniel-tudorache-scapa-de-inchisoare-fostul-primar-psd-al-sectorului-1-a-primit-o-pedeapsa-cu-suspendare-in-dosarul-diamantelor-1885192',
      },
      {
        label: 'G4Media',
        kind: 'press',
        url: 'https://www.g4media.ro/completul-de-5-judecatori-al-instantei-supreme-a-respins-un-recurs-in-casatie-al-fostului-primar-psd-daniel-tudorache-in-dosarul-diamantelor-fostul-edil-fusese-condamnat-definiti.html',
      },
    ],
  },
  'Marian-Daniel Vanghelie': {
    replace_sources: true,
    conviction_year: 2021,
    details:
      'În martie 2025, Curtea de Apel București a închis definitiv dosarul în care primise în primă instanță 11 ani și 8 luni: pentru luare de mită instanța a constatat prescripția, iar pentru abuz în serviciu și spălare de bani a dispus achitarea.',
    verified_at: '2026-03-21',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7374',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/marian-vanghelie-a-scapat-definitiv-de-condamnarea-pentru-mita-de-30-milioane-euro-faptele-s-au-prescris-3163901',
      },
      {
        label: 'AGERPRES',
        kind: 'press',
        url: 'https://agerpres.ro/justitie/2025/03/19/dupa-zece-ani-de-procese-marian-vanghelie-scapa-de-condamnarea-de-11-ani-in-dosarul-mitei-de-30-mili--1432399',
      },
    ],
  },
  'Cătălin Voicu': {
    replace_sources: true,
    verified_at: '2026-03-21',
    sources: [
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=8463a58f-adee-49a8-9764-19b0b96603e1',
      },
      {
        label: 'HotNews',
        kind: 'press',
        url: 'https://hotnews.ro/video-traian-basescu-a-retras-ordinul-virtutea-militara-in-grad-de-cavaler-acordat-in-2002-lui-catalin-voicu-601192',
      },
    ],
  },
  'Costel Alexe': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11283',
      },
    ],
  },
  'Niculae BÄƒdÄƒlÄƒu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11663',
      },
    ],
  },
  'Niculae B\u0103d\u0103l\u0103u': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11663',
      },
    ],
  },
  'Vlad Voiculescu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12301',
      },
    ],
  },
  'Dumitru Buzatu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12311',
      },
    ],
  },
  'Clotilde Armand': {
    replace_sources: true,
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'ANI',
        kind: 'official',
        url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3407&PID=20&currentPage=4',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/clotilde-armand-a-fost-trimisa-in-judecata-2772741',
      },
    ],
  },
  'Borboly Csaba': {
    replace_sources: true,
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4299',
      },
      {
        label: 'Wikipedia',
        kind: 'profile',
        url: 'https://ro.wikipedia.org/wiki/Borboly_Csaba',
      },
    ],
  },
  'Ovidiu Marius Isail\u0103': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=4795',
      },
    ],
  },
  'Titus Corl\u0103\u021bean': {
    replace_sources: true,
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7387',
      },
      {
        label: 'Wikipedia',
        kind: 'profile',
        url: 'https://ro.wikipedia.org/wiki/Titus_Corl%C4%83%C8%9Bean',
      },
    ],
  },
  'Viorel Ilie': {
    replace_sources: true,
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8613',
      },
      {
        label: 'Wikipedia',
        kind: 'profile',
        url: 'https://ro.wikipedia.org/wiki/Viorel_Ilie',
      },
    ],
  },
  'Marian Ghiveciu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=2866&jffi=comunicat&jftfdi=',
      },
    ],
  },
  'Victor Mocanu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9545',
      },
    ],
  },
  'Gheorghe Coman': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4873',
      },
    ],
  },
  'Adrian N\u0103stase': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4564',
      },
    ],
  },
  'Liviu Dragnea': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7368',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9470',
      },
    ],
  },
  'Elena Udrea': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8867',
      },
    ],
  },
  'Dan Voiculescu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5173',
      },
    ],
  },
  'Decebal Traian Reme\u0219': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=944',
      },
    ],
  },
  'Victor Babiuc': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4095',
      },
    ],
  },
  'Relu Fenechiu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4618',
      },
    ],
  },
  'Miron Mitrea': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4407',
      },
    ],
  },
  'Monica Iacob-Ridzi': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6003',
      },
    ],
  },
  'Darius V\u00e2lcov': {
    sentence: '6 ani închisoare',
    sentence_years: 6,
    conviction_year: 2023,
    details:
      'Condamnat definitiv de ÎCCJ în mai 2023 la 6 ani de închisoare pentru trafic de influență și spălare de bani în dosarul tablourilor. Anterior a fost primar al Slatinei și ministru de finanțe.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12126',
      },
    ],
  },
  'Nicu\u0219or Constantinescu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9583',
      },
    ],
  },
  'Gheorghe \u0218tefan': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6843',
      },
    ],
  },
  'Aristotel C\u0103ncescu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11086',
      },
    ],
  },
  'Horea Uioreanu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8670',
      },
    ],
  },
  'Florin \u021aurcanu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7327',
      },
    ],
  },
  'Adrian Duicu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=5139&jffi=comunicat&jftfdi=',
      },
    ],
  },
  'C\u0103t\u0103lin Chereche\u0219': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9104',
      },
    ],
  },
  'Radu Maz\u0103re': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9349',
      },
    ],
  },
  'Gheorghe Nichita': {
    conviction_year: 2020,
    details:
      'Condamnat definitiv de Curtea de Apel București în august 2020 la 5 ani de închisoare pentru luare de mită în legătură cu un contract derulat de Primăria Iași.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9937',
      },
    ],
  },
  'Constantin Nicolescu': {
    conviction_year: 2019,
    details:
      'Condamnat definitiv de ÎCCJ în martie 2019 la 7 ani și 8 luni de închisoare pentru luare de mită și folosirea de documente false pentru obținerea de fonduri europene.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9407',
      },
    ],
  },
  'Neculai Ontanu': {
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2021,
    details:
      'Condamnat definitiv de ÎCCJ în aprilie 2021 la 3 ani cu suspendare pentru luare de mită în dosarul retrocedărilor de terenuri din Sectorul 2.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10392',
      },
    ],
  },
  'Corneliu Dobri\u021boiu': {
    sentence: '1 an închisoare cu suspendare',
    conviction_year: 2016,
    details:
      'Condamnat definitiv în mai 2016 la 1 an cu suspendare pentru participație improprie la abuz în serviciu și fals intelectual, în dosarul locuințelor de serviciu din MApN.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7471',
      },
    ],
  },
  'Gabriel Sandu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9417',
      },
    ],
  },
  'Tudor Chiuariu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=2082',
      },
    ],
  },
  'Zsolt Nagy': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=2082',
      },
    ],
  },
  'Constantin Niță': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=7481',
      },
    ],
  },
  'Șerban Mihăilescu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=1591',
      },
    ],
  },
  'Dan Șova': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7056',
      },
    ],
  },
  'Sebastian Vl\u0103descu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12117',
      },
    ],
  },
  'Minel Prina': {
    conviction_year: 2023,
    details:
      'Condamnat definitiv de ÎCCJ în mai 2023 la 4 ani și 6 luni închisoare pentru complicitate la trafic de influență și complicitate la spălare de bani în dosarul tablourilor.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12126',
      },
    ],
  },
  'Sorin Apostu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5152',
      },
    ],
  },
  'Gabriel Berca': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8631',
      },
    ],
  },
  'Viorel Hrebenciuc': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10582',
      },
    ],
  },
  'Mircea Dr\u0103ghici': {
    sentence: '6 ani închisoare cu executare',
    sentence_years: 6,
    conviction_year: 2022,
    details:
      'Condamnat definitiv în octombrie 2022 la 6 ani de închisoare pentru utilizarea subvențiilor partidului în alte scopuri decât cele legale și delapidare, după ce a folosit bani din subvenția PSD pentru un imobil personal.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11615',
      },
    ],
  },
  'Adrian Severin': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7818',
      },
    ],
  },
  'Alexandru Maz\u0103re': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11289',
      },
    ],
  },
  'Cristian David': {
    replace_sources: true,
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9544',
      },
      {
        label: 'Newsweek România',
        kind: 'press',
        url: 'https://newsweek.ro/justitie/cristian-david-achitat-definitiv-in-dosarul-in-care-era-acuzat-de-spaga',
      },
    ],
  },
  'Vlad Cosma': {
    replace_sources: true,
    status: 'prescribed',
    crime: 'Trafic de influență',
    sentence: '5 ani închisoare (proces închis prin prescripție)',
    sentence_years: 5,
    conviction_year: 2016,
    details:
      'În ianuarie 2024, Curtea de Apel Ploiești a menținut definitiv încetarea procesului penal în dosarul de corupție instrumentat de DNA Ploiești, după ce anterior primise 5 ani de închisoare.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4798',
      },
      {
        label: 'Radio România',
        kind: 'press',
        url: 'https://www.radioromania.ro/Actualitate/mircea-cosma-si-fiul-sau-scapa-de-inchisoare-id9119.html',
      },
    ],
  },
  'C\u0103t\u0103lin Marian R\u0103dulescu': {
    replace_sources: true,
    crime: 'Dare de mită; operațiuni financiare incompatibile cu funcția; complicitate la abuz în serviciu; fals în declarații',
    details:
      'Condamnat definitiv de ÎCCJ în decembrie 2016 la 1 an și 6 luni cu suspendare pentru dare de mită și operațiuni financiare incompatibile cu funcția. Separat, DNA l-a trimis în judecată în decembrie 2021 în dosarul privind obținerea ilegală a certificatului de revoluționar.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7950',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10729',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/fostul-deputat-catalin-radulescu-trimis-in-judecata-pentru-ca-ar-fi-obtinut-ilegal-titlul-de-luptator-cu-rol-determinant-la-revolutie-1776327',
      },
    ],
  },
  'Florin Popescu': {
    replace_sources: true,
    status: 'convicted',
    sentence: '1 an închisoare cu executare',
    sentence_years: 1,
    conviction_year: 2016,
    details:
      'Condamnat definitiv de ÎCCJ în noiembrie 2016 pentru conflict de interese și fals în declarații, într-un dosar pornit după o sesizare ANI privind contracte semnate de Consiliul Județean Dâmbovița cu firme legate de familia sa.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/fostul-deputat-florin-popescu-condamnat-definitiv-la-un-an-de-inchisoare-613950',
      },
      {
        label: 'ANI',
        kind: 'official',
        url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=739&PID=20&currentPage=195',
      },
    ],
  },
  'Mircea Cosma': {
    replace_sources: true,
    conviction_year: 2016,
    details:
      'În ianuarie 2024, Curtea de Apel Ploiești a menținut definitiv încetarea procesului penal pentru luare de mită și abuz în serviciu, după ce inițial primise 8 ani de închisoare în același dosar de corupție.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4798',
      },
      {
        label: 'Radio România',
        kind: 'press',
        url: 'https://www.radioromania.ro/Actualitate/mircea-cosma-si-fiul-sau-scapa-de-inchisoare-id9119.html',
      },
    ],
  },
  'Bogdan Olteanu': {
    replace_sources: true,
    details:
      'Condamnat definitiv la 5 ani în 2020 pentru trafic de influență. În martie 2023, Curtea de Apel București a confirmat definitiv încetarea procesului penal și anularea condamnării ca urmare a prescrierii faptelor.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7770',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/bogdan-olteanu-a-scapat-de-procesul-penal-dupa-prescrierea-faptelor-decizia-este-definitiva-2301061',
      },
    ],
  },
  'Cristian Popescu Piedone': {
    replace_sources: true,
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6809',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/piedone-iesit-din-inchisoare-nu-cer-despagubiri-statului-duc-mandatul-pana-la-capat-piedone-n-o-muritu-doar-putin-s-o-odihnitu-2394969',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/cristian-popescu-piedone-trebuie-sa-primeasca-despagubiri-de-peste-100-000-de-euro-de-la-statul-roman-decizia-nu-este-definitiva-3242727',
      },
    ],
  },
  'George Copos': {
    details:
      'Condamnat definitiv \u00een martie 2014 \u00een dosarul transferurilor de fotbali\u0219ti, pentru evaziune fiscal\u0103. DNA a comunicat condamnarea la 3 ani \u0219i 8 luni de \u00eenchisoare prin decizia Cur\u021bii de Apel Bucure\u0219ti.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4705',
      },
    ],
  },
  'Sorin Frunzăverde': {
    replace_sources: true,
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7439',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6505',
      },
    ],
  },
  'Varujan Vosganian': {
    replace_sources: true,
    details:
      'În dosarul Romgaz-Interagro, Senatul a respins de două ori cererea procurorilor de încuviințare a începerii urmăririi penale împotriva lui. Presa a continuat să îl indice ca vizat de ancheta DIICOT în contextul dosarului Romgaz.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/PAGINI/Stenograme/Stenograme2015/15.02.12.pdf',
      },
      {
        label: 'Radio România',
        kind: 'press',
        url: 'https://www.romania-actualitati.ro/stiri/romania/varujan-vosganian-ramane-cu-imunitatea-parlamentara-id67331.html',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/adriean-videanu-si-ioan-niculae-achitati-definitiv-in-dosarul-delapidarii-romgaz-2808213',
      },
    ],
  },
  'Ioan Avram Mure\u0219an': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3268',
      },
    ],
  },
  'Sorin Panti\u0219': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5173',
      },
    ],
  },
  'Stelian Fuia': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=7574',
      },
    ],
  },
  'Nicolae Iotcu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8386',
      },
    ],
  },
  'Tudor Pendiuc': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=12127',
      },
    ],
  },
  'Antonie Solomon': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4312',
      },
    ],
  },
  'Mircia Chelaru': {
    party: 'AUR',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4280',
      },
    ],
  },
  'Cristian Rizea': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9392',
      },
    ],
  },
  'Ion Stan': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=3919',
      },
    ],
  },
  'Lucian Florin Pu\u0219ca\u0219u': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=4454',
      },
    ],
  },
  'Cristian Adomni\u021beai': {
    replace_sources: true,
    name: 'Cristian Adomni\u021bei',
    status: 'acquitted',
    crime: 'Favorizarea f\u0103ptuitorului; fals intelectual',
    sentence: 'Achitat definitiv (2024)',
    sentence_years: null,
    conviction_year: null,
    details:
      'Trimis \u00een judecat\u0103 de DNA \u00een dosarul materialelor de promovare ale Consiliului Jude\u021bean Ia\u0219i. Prin decizia penal\u0103 nr. 145 din 8 februarie 2024, Curtea de Apel Gala\u021bi a dispus achitarea sa definitiv\u0103, \u00een timp ce pentru ceilal\u021bi inculpa\u021bi instan\u021ba a constatat intervenirea prescrip\u021biei.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6506',
      },
    ],
  },
  'Gheorghe Bunea Stancu': {
    replace_sources: true,
    status: 'acquitted',
    crime: 'Abuz \u00een serviciu; conflict de interese',
    sentence: 'Achitat definitiv (2022)',
    sentence_years: null,
    conviction_year: null,
    details:
      'Trimis \u00een judecat\u0103 de DNA \u00een dosarul finan\u021b\u0103rii cluburilor sportive. Prin decizia penal\u0103 nr. 942 din 22 septembrie 2022, Curtea de Apel Gala\u021bi a dispus achitarea sa definitiv\u0103.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5323',
      },
    ],
  },
  'Iulian B\u0103descu': {
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8578',
      },
    ],
  },
  'Gigi Becali': {
    replace_sources: true,
    crime: 'Dare de mit\u0103; fals \u00een \u00eenscrisuri sub semn\u0103tur\u0103 privat\u0103 (dosarul Valiza)',
    details:
      'Condamnat definitiv de \u00ceCCJ \u00een iunie 2013 \u00een dosarul Valiza, dup\u0103 ce DNA a sus\u021binut c\u0103 a promis sume de bani juc\u0103torilor Universit\u0103\u021bii Cluj pentru un rezultat favorabil Stelei. Aceast\u0103 fi\u0219\u0103 re\u021bine condamnarea definitiv\u0103 comunicat\u0103 oficial de DNA \u00een cauza Valiza.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4110',
      },
    ],
  },
  'Diana Iovanovici-\u0218o\u0219oac\u0103': {
    replace_sources: true,
    details:
      'În septembrie 2025 a fost citată la Parchetul General ca suspect într-un dosar care vizează 11 infracțiuni. În octombrie 2025, Parchetul General a anunțat punerea în mișcare a urmăririi penale și demersurile pentru ridicarea imunității sale de europarlamentar.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'Parlamentul European',
        kind: 'official',
        url: 'https://www.europarl.europa.eu/doceo/document/PV-10-2025-10-09_EN.html',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/diana-sosoaca-trebuie-sa-se-prezinte-marti-la-parchetul-general-ea-este-vizata-ca-suspect-intr-un-dosar-pentru-11-infractiuni-3424767',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/politica/acuzatiile-oficiale-aduse-de-procurori-dianei-sosoaca-parchetul-cere-ridicarea-imunitatii-europarlamentarei-sos-romania-3444453',
      },
    ],
  },
};

export const politicianAdditions = [
  {
    name: 'Sorin Oprescu',
    party: 'Independent',
    position: 'Primar general al Bucureștiului (2008-2015); fost senator PSD',
    position_type: 'mayor',
    crime: 'Luare de mită; constituire grup infracțional organizat; abuz în serviciu',
    sentence: '9 ani și 8 luni închisoare',
    sentence_years: 9.67,
    conviction_year: 2022,
    status: 'convicted',
    details:
      'Condamnat definitiv în mai 2022 în dosarul de corupție de la Primăria Capitalei. În octombrie 2025, Curtea de Apel București i-a redus pedeapsa de la 10 ani și 8 luni la 9 ani și 8 luni.',
    verified_at: '2026-03-21',
    sources: [
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=A5445568-3F1A-486D-987C-560C22A08762',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/video/curtea-de-apel-bucuresti-i-a-scazut-un-an-din-pedeapsa-lui-sorin-oprescu-3448915',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/judecatorii-au-respins-cererea-lui-sorin-oprescu-de-anulare-a-condamnarii-de-10-ani-inchisoare-2222851',
      },
    ],
  },
  {
    name: 'Vasile Duță',
    party: 'PSD',
    position: 'Senator de Bihor (2000-2004)',
    position_type: 'senator',
    crime: 'Trafic de influență',
    sentence: '5 ani închisoare cu executare',
    sentence_years: 5,
    conviction_year: 2010,
    status: 'convicted',
    details:
      'Fost senator condamnat definitiv de ÎCCJ pentru mai multe fapte de trafic de influență. Dosarul a vizat intervenții promise pe lângă autorități în schimbul unor sume de bani și foloase materiale.',
    verified_at: '2026-03-21',
    sources: [
      {
        label: 'Camera Deputaților',
        kind: 'official',
        url: 'http://www.cdep.ro/pls/parlam/structura.mp?idm=48&cam=1&leg=2000',
      },
      {
        label: 'România Curată',
        kind: 'press',
        url: 'https://www.romaniacurata.ro/sentinta-definitiva-5-ani-de-inchisoare-vasile-duta-trafic-de-influenta/',
      },
      {
        label: 'România Liberă',
        kind: 'press',
        url: 'https://romanialibera.ro/special/fostul-senator-vasile-duta-condamnat-definitiv-la-cinci-ani-de-inchisoare-185572/',
      },
    ],
  },
  {
    name: 'Gergely Olosz',
    party: 'UDMR',
    position: 'Senator; fost președinte ANRE',
    position_type: 'senator',
    crime: 'Trafic de influență',
    sentence: '3 ani închisoare cu executare',
    sentence_years: 3,
    conviction_year: 2018,
    status: 'convicted',
    details:
      'Condamnat definitiv de ÎCCJ în decembrie 2018 pentru trafic de influență, după ce procurorii au susținut că și-a folosit influența în favoarea unor firme interesate de contracte din energie.',
    verified_at: '2026-03-21',
    sources: [
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=c2769f04-595a-4b7c-b1a4-5cc2a4e9ce93',
      },
      {
        label: 'Mediafax',
        kind: 'press',
        url: 'https://www.mediafax.ro/politic/fostul-senator-udmr-olosz-gergely-a-fost-condamnat-definitiv-la-3-ani-de-inchisoare-cu-executare-decizia-este-definitiva-17793375',
      },
    ],
  },
  {
    name: 'Sorin Apostu',
    party: 'PDL',
    position: 'Primar al municipiului Cluj-Napoca (2009-2012)',
    position_type: 'mayor',
    crime: 'Luare de mită; trafic de influență; complicitate la spălare de bani; fals',
    sentence: '4 ani și 6 luni închisoare',
    sentence_years: 4.5,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'Condamnat definitiv pentru fapte de corupție legate de contracte de salubrizare și de asigurare ale unor instituții subordonate Primăriei Cluj-Napoca.',
    verified_at: '2026-03-21',
    sources: [
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/sorin-apostu-fost-primar-al-clujului-condamnat-la-patru-ani-si-sase-luni-de-inchisoare-s-a-predat-la-politie-265929',
      },
      {
        label: 'Wikipedia',
        kind: 'profile',
        url: 'https://en.wikipedia.org/wiki/Sorin_Apostu',
      },
    ],
  },
  {
    name: 'Dumitru Buzatu',
    party: 'PSD',
    position: 'Președinte Consiliul Județean Vaslui; fost deputat',
    position_type: 'county_council_president',
    crime: 'Luare de mită',
    sentence: 'Trimis în judecată',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'Trimis în judecată în dosarul în care DNA susține că a fost prins în flagrant când primea 1,25 milioane lei pentru a favoriza un contract al Consiliului Județean Vaslui.',
    verified_at: '2026-03-21',
    sources: [
      {
        label: 'G4Media',
        kind: 'press',
        url: 'https://www.g4media.ro/dumitru-buzatu-a-fost-trimis-in-judecata-in-dosarul-mitei-de-1-milion-de-lei.html',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/trimis-in-judecata-pentru-luare-de-mita-dumitru-buzatu-a-facut-un-denunt-la-dna-2754415',
      },
    ],
  },
  {
    name: 'Romeo Stavarache',
    party: 'PNL',
    position: 'Primar al municipiului Bac\u0103u (2004-2016)',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103',
    sentence: '4 ani \u00eenchisoare cu executare',
    sentence_years: 4,
    conviction_year: 2017,
    status: 'convicted',
    details:
      'Condamnat definitiv de \u00ceCCJ \u00een noiembrie 2017 pentru c\u0103 a primit sume de bani \u0219i bunuri de la oameni de afaceri \u00een schimbul favoriz\u0103rii unor contracte publice derulate prin Prim\u0103ria Bac\u0103u.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8599',
      },
    ],
  },
  {
    name: 'Mircia Gut\u0103u',
    party: 'PDL',
    position: 'Primar al municipiului R\u00e2mnicu V\u00e2lcea',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu contra intereselor publice, \u00een form\u0103 continuat\u0103',
    sentence: '3 ani \u0219i 6 luni \u00eenchisoare cu executare',
    sentence_years: 3.5,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'Condamnat definitiv \u00een iunie 2014 \u00een dosarul privind acordarea nelegal\u0103 a unor sporuri salariale \u00een Prim\u0103ria R\u00e2mnicu V\u00e2lcea. Aceasta este condamnarea definitiv\u0103 r\u0103mas\u0103 \u00een vigoare \u00een dosarele DNA care l-au vizat.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5031',
      },
    ],
  },
  {
    name: 'Emilian Fr\u00e2ncu',
    party: 'PNL',
    position: 'Primar al municipiului R\u00e2mnicu V\u00e2lcea (2012-2014); fost deputat',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103',
    sentence: '4 ani \u00eenchisoare cu executare',
    sentence_years: 4,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'Condamnat definitiv de \u00ceCCJ \u00een martie 2014 dup\u0103 ce DNA a sus\u021binut c\u0103 a pretins \u0219i primit 20.000 euro pentru a interveni \u00een favoarea unui om de afaceri \u00een leg\u0103tur\u0103 cu avizarea unui contract public.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4755',
      },
    ],
  },
  {
    name: 'Marian Zlotea',
    party: 'PDL',
    position: 'Europarlamentar (2007-2009); pre\u0219edinte ANSVSA',
    position_type: 'member_european_parliament',
    crime: 'Trafic de influen\u021b\u0103; luare de mit\u0103; constituire de grup infrac\u021bional organizat; instigare la luare de mit\u0103',
    sentence: '8 ani \u0219i 6 luni \u00eenchisoare cu executare',
    sentence_years: 8.5,
    conviction_year: 2021,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Bucure\u0219ti \u00een ianuarie 2021 \u00een dosarul privind fapte de corup\u021bie comise \u00een perioada \u00een care conducea ANSVSA, inclusiv folosirea influen\u021bei pentru str\u00e2ngerea de bani \u0219i alte foloase pentru partid.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10233',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/evenimente/ani-fostul-presedinte-ansvsa-marian-zlotea-nu-poate-justifica-85-000-de-euro-31507',
      },
    ],
  },
  {
    name: 'B\u0103ran Auric\u0103',
    party: 'PDL',
    position: 'Primar al comunei Tormac (jude\u021bul Timi\u0219)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu; folosire de documente false pentru fonduri europene; fals intelectual',
    sentence: '9 ani \u0219i 9 luni \u00eenchisoare',
    sentence_years: 9.75,
    conviction_year: 2020,
    status: 'convicted',
    details:
      'Condamnat definitiv \u00een noiembrie 2020 \u00eentr-un dosar DNA privind atribuirea nelegal\u0103 a unor lucr\u0103ri finan\u021bate din fonduri europene \u0219i falsificarea documenta\u021biei folosite pentru decontare. Anterior primise \u0219i o condamnare definitiv\u0103 separat\u0103 \u00een alt dosar de fraud\u0103 cu fonduri UE.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10133',
      },
    ],
  },
  {
    name: 'Mihail Boldea',
    party: 'PDL',
    position: 'Deputat de Gala\u021bi (2008-2012)',
    position_type: 'deputy',
    crime: 'Sp\u0103lare de bani',
    sentence: 'Achitat definitiv (2021)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a comunicat mai \u00eent\u00e2i condamnarea sa definitiv\u0103 cu suspendare din iulie 2020, dar a actualizat ulterior fi\u0219a cauzei: \u00een octombrie 2021, \u00ceCCJ a admis recursurile \u00een casa\u021bie \u0219i a dispus achitarea sa definitiv\u0103 pentru sp\u0103lare de bani.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9914',
      },
    ],
  },
  {
    name: 'Dan P\u0103sat',
    party: 'PDL',
    position: 'Deputat de Giurgiu (2008-2012)',
    position_type: 'deputy',
    crime: '\u0218antaj; opera\u021biuni financiare incompatibile cu func\u021bia',
    sentence: '3 ani \u00eenchisoare cu executare',
    sentence_years: 3,
    conviction_year: 2013,
    status: 'convicted',
    details:
      'Condamnat definitiv de \u00ceCCJ \u00een decembrie 2013 dup\u0103 ce DNA a re\u021binut c\u0103 \u0219i-a folosit influen\u021ba de deputat pentru a constr\u00e2nge reprezentan\u021bii unor firme \u0219i pentru a ob\u021bine beneficii pentru societatea pe care o controla de facto.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4516',
      },
    ],
  },
  {
    name: 'Sorin Andi Pandele',
    party: 'PDL',
    position: 'Deputat de Arge\u0219 (2008-2012)',
    position_type: 'deputy',
    crime: 'Luare de mit\u0103; abuz \u00een serviciu; fals material \u00een \u00eenscrisuri oficiale',
    sentence: '5 ani \u00eenchisoare cu executare',
    sentence_years: 5,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'Condamnat definitiv de \u00ceCCJ \u00een ianuarie 2014 pentru fapte de corup\u021bie comise anterior mandatului parlamentar, c\u00e2nd conducea Oficiul de Cadastru \u0219i Publicitate Imobiliar\u0103 Arge\u0219.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4596',
      },
    ],
  },
  {
    name: 'Dorin Laz\u0103r Maior',
    party: 'PSD',
    position: 'Deputat de Bra\u0219ov (2000-2004)',
    position_type: 'deputy',
    crime: 'Complicitate la cump\u0103rare de influen\u021b\u0103',
    sentence: '5 ani \u0219i 91 de zile \u00eenchisoare',
    sentence_years: 5.25,
    conviction_year: 2023,
    status: 'convicted',
    details:
      'Prin hot\u0103r\u00e2rea definitiv\u0103 din iulie 2023, Curtea de Apel T\u00e2rgu Mure\u0219 a stabilit pentru noua fapt\u0103 o pedeaps\u0103 de 2 ani \u00eenchisoare, la care s-a ad\u0103ugat restul neexecutat dintr-o condamnare anterioar\u0103, rezult\u00e2nd pedeapsa final\u0103 de 5 ani \u0219i 91 de zile.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12210',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/extradarea-lui-dorin-lazar-maior-a-fost-amanata-fostul-lider-al-revolutionarilor-din-brasov-a-fost-internat-intr-un-spital-din-italia-2526417',
      },
    ],
  },
  {
    name: 'Cristian Marius Minc\u0103',
    party: 'PNL',
    position: 'Primar al comunei Cosme\u0219ti (jude\u021bul Teleorman)',
    position_type: 'mayor',
    crime: 'Fraud\u0103 cu fonduri europene; fals intelectual',
    sentence: '2 ani, 10 luni \u0219i 20 de zile \u00eenchisoare cu suspendare',
    sentence_years: 2.89,
    conviction_year: 2020,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Bucure\u0219ti \u00een noiembrie 2020 pentru documente false \u0219i opera\u021biuni frauduloase folosite la ob\u021binerea de fonduri europene.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=10155',
      },
    ],
  },
  {
    name: 'Iulian Miliare',
    party: 'PNL',
    position: 'Primar al comunei Berezeni (jude\u021bul Vaslui)',
    position_type: 'mayor',
    crime: 'Folosire sau prezentare cu rea-credin\u021b\u0103 de documente false pentru ob\u021binerea de fonduri europene',
    sentence: '3 ani \u00eenchisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2019,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Ia\u0219i \u00een iunie 2019 \u00eentr-un dosar DNA privind ob\u021binerea nelegal\u0103 de subven\u021bii APIA prin intermediul unei asocia\u021bii locale de cresc\u0103tori de animale.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9525',
      },
    ],
  },
  {
    name: 'Gheorghe Percea',
    party: 'PNL',
    position: 'Primar al comunei Ciclova Rom\u00e2n\u0103 (jude\u021bul Cara\u0219-Severin)',
    position_type: 'mayor',
    crime: 'Fraud\u0103 cu fonduri europene',
    sentence: '5 ani \u00eenchisoare',
    sentence_years: 5,
    conviction_year: 2020,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Timi\u0219oara \u00een martie 2020 pentru folosirea de documente false \u0219i sprijinirea ob\u021binerii nelegale de fonduri europene \u00een contextul unor proiecte agricole.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11583',
      },
    ],
  },
  {
    name: 'Gheorghe Vi\u0219ovan',
    party: 'PSD',
    position: 'Primar al comunei Rozavlea (jude\u021bul Maramure\u0219)',
    position_type: 'mayor',
    crime: 'Fraud\u0103 cu fonduri europene; schimbarea nelegal\u0103 a destina\u021biei fondurilor europene',
    sentence: '3 ani \u00eenchisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2016,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Cluj \u00een aprilie 2016 pentru nereguli grave \u00eentr-un proiect finan\u021bat din fonduri SAPARD, \u00een perioada \u00een care conducea Prim\u0103ria Rozavlea.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7407',
      },
    ],
  },
  {
    name: 'Nati Meir',
    party: 'PRM',
    position: 'Deputat de Tulcea (2004-2008)',
    position_type: 'deputy',
    crime: 'Trafic de influen\u021b\u0103',
    sentence: '4 ani \u00eenchisoare',
    sentence_years: 4,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'Condamnat definitiv de \u00ceCCJ \u00een februarie 2014 pentru dou\u0103 infrac\u021biuni concurente de trafic de influen\u021b\u0103, dintre care una \u00een form\u0103 continuat\u0103. DNA a precizat c\u0103 hot\u0103r\u00e2rea a avut \u00een vedere recunoa\u0219terea vinov\u0103\u021biei.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4709',
      },
      {
        label: 'Wikipedia',
        kind: 'profile',
        url: 'https://fr.wikipedia.org/wiki/Nati_Meir',
      },
    ],
  },
  {
    name: 'Ovidiu Neme\u0219',
    party: 'PNL',
    position: 'Primar al municipiului Sighetu Marma\u021biei',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: '2 ani \u00eenchisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2020,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Cluj \u00een noiembrie 2020 pentru dou\u0103 infrac\u021biuni de abuz \u00een serviciu. Separat, \u00eentr-o alt\u0103 cauz\u0103 mediatizat\u0103 de DNA, instan\u021ba de apel a schimbat \u00eencadrarea juridic\u0103 \u00een neglijen\u021b\u0103 \u00een serviciu \u0219i a dispus \u00eenchiderea procesului prin prescrip\u021bie \u00een iunie 2022.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10117',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11282',
      },
    ],
  },
  {
    name: 'Dan \u0218tefan Motreanu',
    party: 'PNL',
    position: 'Deputat; fost ministru al agriculturii; actual europarlamentar',
    position_type: 'deputy',
    crime: 'Sp\u0103lare de bani',
    sentence: 'Achitat definitiv (2019)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis \u00een judecat\u0103 \u00een dosarul privind finan\u021barea campaniei electorale din 2008, iar \u00ceCCJ a dispus \u00een iunie 2019 achitarea sa definitiv\u0103 pentru sp\u0103lare de bani, re\u021bin\u00e2nd c\u0103 fapta nu exist\u0103.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6697',
      },
      {
        label: 'Parlamentul European',
        kind: 'official',
        url: 'https://www.europarl.europa.eu/meps/en/197647/DAN-STEFAN_MOTREANU/cv',
      },
    ],
  },
  {
    name: 'George-Adrian Scutaru',
    party: 'PNL',
    position: 'Deputat de Buz\u0103u; ulterior consilier preziden\u021bial',
    position_type: 'deputy',
    crime: 'Sp\u0103lare de bani',
    sentence: 'Achitat definitiv (2019)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'Trimis \u00een judecat\u0103 de DNA \u00een acela\u0219i dosar privind finan\u021barea campaniei din 2008. Prin decizia definitiv\u0103 din iunie 2019, \u00ceCCJ a dispus achitarea sa pentru sp\u0103lare de bani, constat\u00e2nd c\u0103 fapta nu exist\u0103.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6697',
      },
    ],
  },
  {
    name: 'Mircea Banias',
    party: 'PC',
    position: 'Senator de Constan\u021ba (2008-2016); ulterior deputat',
    position_type: 'senator',
    crime: 'Grup infrac\u021bional organizat; trafic de influen\u021b\u0103; instigare la abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2019)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis \u00een judecat\u0103 \u00een dosarul de corup\u021bie din Portul Constan\u021ba, iar \u00ceCCJ a dispus \u00een iulie 2019 achitarea sa definitiv\u0103, re\u021bin\u00e2nd c\u0103 faptele nu exist\u0103, nu sunt prev\u0103zute de legea penal\u0103 sau nu exist\u0103 probe c\u0103 a s\u0103v\u00e2r\u0219it infrac\u021biunea.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3112',
      },
      {
        label: 'Senatul Rom\u00e2niei',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=f3a2983b-794a-4a91-b915-abdf5c9c84db',
      },
    ],
  },
  {
    name: 'Daniel Gheorghe Rusu',
    party: 'AUR',
    position: 'Deputat de Alba (ales pe listele AUR); fost primar al comunei \u0218pring',
    position_type: 'deputy',
    crime: 'Compromiterea intereselor justi\u021biei; abuz \u00een serviciu; participa\u021bie improprie la fals intelectual',
    sentence: 'Amend\u0103 penal\u0103 40.000 lei',
    sentence_years: 0,
    conviction_year: 2022,
    status: 'convicted',
    details:
      'A fost condamnat definitiv de \u00ceCCJ \u00een noiembrie 2022 la amend\u0103 penal\u0103 pentru compromiterea intereselor justi\u021biei, dup\u0103 publicarea pe Facebook a unor informa\u021bii dintr-o anchet\u0103 penal\u0103. Separat, DNA Alba Iulia l-a trimis \u00een judecat\u0103 \u00een ianuarie 2024 pentru fapte comise ca primar al comunei \u0218pring, iar \u00een 28 ianuarie 2026 \u00ceCCJ a dispus achitarea sa definitiv\u0103 \u00een acel dosar.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12329',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/un-deputat-a-fost-amendat-penal-cu-40-000-lei-pentru-postari-pe-retelele-de-socializare-2158827',
      },
      {
        label: 'Alba24',
        kind: 'press',
        url: 'https://alba24.ro/fost-deputat-aur-de-alba-si-primar-achitat-la-iccj-pentru-abuz-in-servciu-si-fals-intelectual-pentru-ce-fapte-a-fost-judecat-1117630.html',
      },
    ],
  },
  {
    name: 'Marin Anton',
    party: 'AUR',
    position: 'Candidat AUR la \u0219efia CJ Giurgiu (2024); fost deputat \u0219i secretar de stat',
    position_type: 'deputy',
    crime: 'Luare de mit\u0103',
    sentence: '5 ani \u00eenchisoare (proces \u00eenchis prin prescrip\u021bie)',
    sentence_years: 5,
    conviction_year: 2021,
    status: 'prescribed',
    details:
      'DNA l-a trimis \u00een judecat\u0103 \u00een ianuarie 2018 pentru mita de 5,3 milioane euro pretins\u0103 \u00een 2009 \u00een dosarul moderniz\u0103rii Aeroportului Otopeni. Tribunalul Bucure\u0219ti l-a condamnat \u00een prim\u0103 instan\u021b\u0103 la 5 ani de \u00eenchisoare \u00een septembrie 2021, iar Curtea de Apel Bucure\u0219ti a \u00eenchis cauza definitiv \u00een februarie 2024 ca urmare a intervenirii prescrip\u021biei.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8617',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/amphtml/stiri/actualitate/justitie/un-fost-deputat-pnl-scapa-de-o-condamnare-de-5-ani-intr-un-dosar-cu-mita-de-cinci-milioane-euro-2684983',
      },
      {
        label: 'Puterea',
        kind: 'press',
        url: 'https://www.puterea.ro/candidatul-aur-pentru-sefia-consiliului-judetean-giurgiu-marin-anton-fost-condamnat-pentru-mita-de-53-milioane-euro/',
      },
    ],
  },
  {
    name: 'Ion N\u0103ft\u0103nil\u0103',
    party: 'PDL',
    position: 'Primar al comunei Albe\u0219tii de Muscel (jude\u021bul Arge\u0219)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu; folosire de documente false pentru fonduri europene; conflict de interese',
    sentence: '4 ani \u00eenchisoare',
    sentence_years: 4,
    conviction_year: 2024,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Pite\u0219ti prin decizia penal\u0103 nr. 310 din 4 aprilie 2024 pentru abuz \u00een serviciu \u00een leg\u0103tur\u0103 cu un proiect de alimentare cu ap\u0103 al comunei. DNA a ar\u0103tat c\u0103 fusese condamnat definitiv \u0219i anterior, \u00een noiembrie 2014, \u00eentr-un dosar privind fonduri europene \u0219i conflict de interese.',
    verified_at: '2026-03-24',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12615',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5665',
      },
      {
        label: 'Wikidata',
        kind: 'profile',
        url: 'https://www.wikidata.org/wiki/Q23309146',
      },
    ],
  },
  {
    name: 'Viorel Mitea Ro\u0219ca',
    party: 'PNL',
    position: 'Primar al comunei Brebu (jude\u021bul Cara\u0219-Severin)',
    position_type: 'mayor',
    crime: 'Trafic de influen\u021b\u0103',
    sentence: '1 an \u0219i 6 luni \u00eenchisoare (am\u00e2narea aplic\u0103rii pedepsei)',
    sentence_years: 1.5,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'Condamnat definitiv \u00een dosarul privind fraudarea fondurilor pentru paji\u0219ti comunale, dup\u0103 ce DNA a sus\u021binut c\u0103 a participat la mecanismul prin care lucr\u0103ri publice erau decontate fictiv, iar sumele nefolosite erau \u00eemp\u0103r\u021bite \u00eentre participan\u021bi.',
    verified_at: '2026-03-24',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5604',
      },
      {
        label: 'Wikidata',
        kind: 'profile',
        url: 'https://www.wikidata.org/wiki/Q26239076',
      },
    ],
  },
];
