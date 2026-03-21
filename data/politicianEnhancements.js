export const metadataOverrides = {
  description:
    'Proiect independent, non-profit și open source despre politicieni români condamnați, trimiși în judecată sau cercetați pentru corupție și probleme de integritate.',
  last_updated: '2026-03-22',
  notes:
    'Statusuri: convicted (condamnare definitivă), first_instance (condamnat în primă instanță), indicted (trimis în judecată), investigated (cercetat), prescribed (proces închis prin prescripție), acquitted (achitat). Fiecare fișă păstrează cel puțin o sursă individuală; unde a fost posibil, am adăugat și surse oficiale ale statului român sau profiluri parlamentare. Lista rămâne deschisă și nu este exhaustivă.',
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
  'Allen Coliban': {
    replace_sources: true,
    status: 'investigated',
    crime: 'Abuz în serviciu',
    sentence: null,
    sentence_years: null,
    conviction_year: null,
    details:
      'În aprilie 2023, Tribunalul Brașov a confirmat la cererea DNA redeschiderea urmăririi penale într-un dosar care îi vizează pe Allen Coliban și city managerul Adriana Miron, în legătură cu delegarea atribuțiilor primarului.',
    verified_at: '2026-03-21',
    sources: [
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/tribunalul-brasov-a-confirmat-redeschiderea-urmaririi-penale-intr-un-dosar-al-dna-in-care-e-implicat-primarul-coliban-2312595',
      },
      {
        label: 'HotNews',
        kind: 'press',
        url: 'https://hotnews.ro/perchezitii-dna-la-primaria-brasov-privind-atribuirea-unor-contracte-surse-66072',
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
  'Adriean Videanu': {
    replace_sources: true,
    sentence: 'Achitat definitiv (2024)',
    details:
      'Achitat definitiv de ÎCCJ în mai 2024 în dosarul Romgaz-Interagro, după ce primise soluție de achitare și la instanța de fond în decembrie 2022.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/adriean-videanu-si-ioan-niculae-achitati-definitiv-in-dosarul-delapidarii-romgaz-2808213',
      },
      {
        label: 'News.ro',
        kind: 'press',
        url: 'https://www.news.ro/justitie/adriean-videanu-si-ioan-niculae-achitati-definitiv-in-dosarul-romgaz-1922403029442024051721610262',
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
  'Dan Dungaciu': {
    replace_sources: true,
    position: 'Prim-vicepreședinte AUR; fost director ISPRI',
    position_type: 'other',
    details:
      'Trimis în judecată în 2024 pentru abuz în serviciu într-un dosar legat de activitatea sa la ISPRI. În 2025 dosarul se afla încă în faza de cameră preliminară, iar în ianuarie 2026 presa a relatat riscul intervenirii prescripției.',
    verified_at: '2026-03-22',
    sources: [
      {
        label: 'G4Media',
        kind: 'press',
        url: 'https://www.g4media.ro/exclusiv-judecatorul-din-dosarul-lui-dan-dungaciu-a-publicat-motivarea-la-doua-saptamani-dupa-ce-g4media-ro-a-dezvaluit-tergiversarea-redactarii-timp-de-un-an-si-doua-luni-raspunderea-penala-a-lui-d.html',
      },
      {
        label: 'Justnews',
        kind: 'press',
        url: 'https://justnews.ro/s-a-suspendat-procesul-in-care-un-institut-al-academiei-romane-contesta-raportul-curtii-de-conturi-care-a-dus-la-dosarul-dna-deschis-fostului-director-dan-dungaciu/',
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
];
