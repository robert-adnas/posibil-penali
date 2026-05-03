export const metadataOverrides = {
  description:
        'Proiect independent, non-profit și open source despre politicieni români condamnați, trimiși în judecată sau cercetați pentru corupție și probleme de integritate.',
  last_updated: '2026-05-03',
  notes:
    'Statusuri: convicted (condamnare definitivă), first_instance (condamnat în primă instanță), indicted (trimis în judecată), investigated (cercetat), prescribed (proces închis prin prescripție), closed (cauză clasată sau închisă fără trimitere în judecată), acquitted (achitat). Fiecare persoană inclusă are cel puțin o sursă oficială verificabilă; unde contextul o cere, am adăugat și presă de referință pentru clarificarea evoluției procedurale. Lista rămâne deschisă și nu este exhaustivă.',
};

const ARGES_CONSULTANCY_ACQUITTAL_DETAILS =
  'DNA Pitești l-a vizat inițial în martie 2014 și apoi l-a trimis în judecată în noiembrie 2015 în dosarul contractelor de consultanță din județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.';

const ARGES_CONSULTANCY_ACQUITTAL_DETAILS_2015 =
  'DNA Pitești l-a vizat inițial în noiembrie 2015 în dosarul contractelor de consultanță din județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.';

const VASILE_NICA_AUDIT_DETAILS =
  'DNA a consemnat condamnarea sa definitivă la 7 decembrie 2015 într-un dosar distinct instrumentat de Serviciul Teritorial Pitești. Într-o cauză separată privind contractele de consultanță din județul Argeș, DNA a actualizat ulterior soluția definitivă de achitare pronunțată la 24 aprilie 2023; pentru consistența bazei, intrarea rămâne clasificată drept convicted deoarece există o condamnare definitivă distinctă în intervalul 2010-2026.';

export const politicianOverrides = {
  'Daniel Tudorache': {
    replace_sources: true,
    case_name: 'Dosarul diamantelor',
    execution_type: 'Cu suspendare',
    institutions: [
      { name: 'DNA', role: 'Trimitere în judecată și comunicare oficială' },
      { name: 'ÎCCJ', role: 'Apel și recurs în casație' },
    ],
    timeline: [
      {
        date: '2025',
        label: 'Condamnare definitivă în apel',
        note:
          'În apel, ÎCCJ i-a redus pedeapsa de la 3 ani și 6 luni cu executare la 3 ani cu suspendare.',
      },
      {
        date: 'ianuarie 2026',
        label: 'Recurs în casație respins',
        note:
          'ÎCCJ a respins recursul în casație și a menținut soluția definitivă din dosarul diamantelor.',
      },
    ],
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
    case_name: 'Dosarul mitei de 30 milioane de euro',
    institutions: [
      { name: 'DNA', role: 'Trimitere în judecată și comunicare oficială' },
      { name: 'Curtea de Apel București', role: 'Soluția definitivă din 2025' },
    ],
    timeline: [
      {
        date: '2021',
        label: 'Condamnare în primă instanță',
        note:
          'A primit 11 ani și 8 luni în dosarul de luare de mită, înainte de soluția definitivă de prescripție.',
      },
      {
        date: 'martie 2025',
        label: 'Soluție definitivă',
        note:
          'Pentru luare de mită instanța a constatat prescripția, iar pentru abuz în serviciu și spălare de bani a dispus achitarea.',
      },
    ],
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
    geography: {
      county: 'București',
      basis: 'constituency',
      note: 'Senator ales în Circumscripția electorală nr. 42 București.',
    },
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
    replace_sources: true,
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11283',
      },
    ],
  },
  'Niculae B\u0103d\u0103l\u0103u': {
    replace_sources: true,
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11663',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11628',
      },
    ],
  },

  'Vlad Voiculescu': {
    replace_sources: true,
    case_name: 'Dosarul achizi\u021biei de vaccinuri anti-COVID',
    prejudiciu_text:
      'DNA a indicat \u00een comunicatul din 23 noiembrie 2023 un prejudiciu total de 1.005.498.687 euro, plus TVA, pentru \u00eentregul dosar; \u00een comunicatul privind Vlad Voiculescu nu este individualizat\u0103 public o sum\u0103 exact\u0103 imputat\u0103 doar lui.',
    institutions: [
      { name: 'DNA', role: 'Urm\u0103rire penal\u0103 \u0219i comunicare oficial\u0103' },
    ],
    timeline: [
      {
        date: '21 septembrie 2021',
        label: 'Dosar in rem',
        note:
          'DNA a confirmat deschiderea dosarului penal privind modalitatea de achizi\u021bie a vaccinurilor anti-COVID, f\u0103r\u0103 a indica atunci vreun suspect.',
      },
      {
        date: '23 noiembrie 2023',
        label: 'Cerere de urm\u0103rire penal\u0103',
        note:
          'DNA a cerut aprob\u0103rile constitu\u021bionale pentru urm\u0103rirea penal\u0103 a trei fo\u0219ti demnitari \u0219i a indicat pentru \u00eentregul dosar un prejudiciu total de 1.005.498.687 euro, plus TVA.',
      },
      {
        date: '8 decembrie 2023',
        label: 'Urm\u0103rire penal\u0103',
        note:
          'DNA a anun\u021bat continuarea urm\u0103ririi penale fa\u021b\u0103 de Vlad Voiculescu pentru dou\u0103 fapte de abuz \u00een serviciu \u0219i complicitate la abuz \u00een serviciu.',
      },
      {
        date: '10 aprilie 2026',
        label: 'Verificare',
        note:
          'Nu am identificat, p\u00e2n\u0103 la 10 aprilie 2026, un comunicat oficial ulterior privind trimiterea \u00een judecat\u0103, clasarea sau o solu\u021bie de instan\u021b\u0103 publicat\u0103 pentru Vlad Voiculescu \u00een acest dosar.',
      },
    ],
    verified_at: '2026-04-10',
    geography: {
      county: 'București',
      basis: 'political_base',
      note: 'Președinte al filialei USR București.',
    },
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10541',
        description: 'Deschiderea dosarului in rem privind achizi\u021bia vaccinurilor anti-COVID',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12292',
        description: 'Comunicatul care indic\u0103 prejudiciul total al \u00eentregului dosar: 1.005.498.687 euro plus TVA',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12301',
        description: 'Comunicatul privind continuarea urm\u0103ririi penale fa\u021b\u0103 de Vlad Voiculescu',
      },
    ],
  },

  'Dumitru Buzatu': {
    replace_sources: true,
    verified_at: '2026-03-30',
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
    institutions: [
      { name: 'ANI', role: 'Constatare și comunicat oficial' },
      { name: 'DNA', role: 'Trimitere în judecată pentru conflict de interese' },
    ],
    verified_at: '2026-03-30',
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
    prejudiciu_eur: 976771.192,
    prejudiciu_text:
      'Comunicatul DNA din 7 iunie 2013 indică un prejudiciu de 4.883.855,96 lei, prezentat și ca echivalent de 1.138.428 euro.',
    verified_at: '2026-04-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4299',
      },
    ],
  },

  'Ovidiu Marius Isail\u0103': {
    replace_sources: true,
    sentence: '5 ani și 4 luni închisoare',
    sentence_years: 5.33,
    conviction_year: 2016,
    status: 'convicted',
    institutions: [
      { name: 'DNA', role: 'Trimitere în judecată' },
      { name: 'ÎCCJ', role: 'Condamnare definitivă' },
    ],
    timeline: [
      {
        date: 'iulie 2014',
        label: 'Trimitere în judecată',
        note:
          'DNA l-a trimis în judecată pentru trafic de influență și instigare la fals în înscrisuri sub semnătură privată.',
      },
      {
        date: '10 noiembrie 2016',
        label: 'Condamnare definitivă',
        note:
          'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 5 ani și 4 luni închisoare.',
      },
    ],
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 10 noiembrie 2016 la 5 ani și 4 luni închisoare pentru trafic de influență și instigare la fals în înscrisuri sub semnătură privată, după ce DNA îl trimisese în judecată în iulie 2014.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7817',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=4795',
      },
    ],
  },

  'Titus Corl\u0103\u021bean': {
    replace_sources: true,
    case_name: 'Dosarul votului din diaspora',
    sentence: 'Cauză clasată (2018)',
    status: 'closed',
    institutions: [
      { name: 'DNA', role: 'Cerere de încuviințare și soluție de clasare' },
      { name: 'Senatul României', role: 'A respins cererea de urmărire penală' },
    ],
    timeline: [
      {
        date: '2016',
        label: 'Cerere de încuviințare a urmăririi penale',
        note:
          'DNA a cerut Senatului încuviințarea urmăririi penale în dosarul votului din diaspora, însă solicitarea a fost respinsă.',
      },
      {
        date: '20 noiembrie 2018',
        label: 'Clasare',
        note:
          'DNA a consemnat clasarea cauzei, inclusiv pentru lipsa condiției legale necesare după votul Senatului.',
      },
    ],
    details:
      'DNA a cerut în 2016 încuviințarea urmăririi penale în dosarul votului din diaspora, însă Senatul a respins solicitarea. Prin actualizarea oficială din 20 noiembrie 2018, DNA a consemnat clasarea cauzei, inclusiv pentru lipsa condiției legale necesare punerii în mișcare a acțiunii penale după votul Senatului.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7387',
      },
    ],
  },

  'Viorel Ilie': {
    replace_sources: true,
    details:
      'În dosarul concursurilor pretins trucate de la Ministerul pentru Relația cu Parlamentul, DNA a trimis în judecată funcționari din minister în ianuarie 2018, dar Senatul hotărâse deja în octombrie 2017 să nu ceară urmărirea penală a ministrului Viorel Ilie. Nu am identificat o actualizare oficială ulterioară care să indice trimiterea lui în judecată sau o soluție finală diferită.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8613',
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
    prejudiciu_eur: 21722.4,
    prejudiciu_text:
      'În dosarul DGASPC Teleorman, DNA a consemnat despăgubiri civile totale de 108.612 lei; din această sumă, 34.339 lei fuseseră deja achitați de o altă inculpată la momentul hotărârii definitive.',
    verified_at: '2026-04-10',
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
    prejudiciu_eur: 1623360,
    prejudiciu_text:
      'În dosarul Gala Bute, DNA a consemnat obligația de plată a sumei de 8.116.800 lei cu titlu de despăgubiri civile către Autoritatea Națională pentru Turism.',
    verified_at: '2026-04-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8867',
      },
    ],
  },
  'Dan Voiculescu': {
    prejudiciu_eur: 60482615,
    prejudiciu_text:
      'În dosarul ICA, DNA a indicat un prejudiciu total de 60.482.615 euro.',
    verified_at: '2026-04-10',
    geography: {
      county: 'București',
      basis: 'constituency',
      note: 'Senator ales în București; se folosește circumscripția parlamentară.',
    },
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5173',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5424',
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
    prejudiciu_eur: 547386.656,
    prejudiciu_text:
      'DNA a consemnat în dosarul „2 Mai” despăgubiri civile de 2.736.933,28 lei către Ministerul Tineretului și Sportului.',
    verified_at: '2026-04-10',
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
    prejudiciu_eur: 6410305.17,
    prejudiciu_text:
      'Comunicatul DNA din 14 noiembrie 2014 indică, în dosarul perdelelor forestiere, un prejudiciu de 30.782.039 lei în dauna Consiliului Județean Constanța și 1.269.486,85 lei în dauna statului.',
    verified_at: '2026-04-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9583',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=5508',
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
    replace_sources: true,
    crime:
      'Permiterea accesului unor persoane neautorizate la informații nedestinate publicității, în scopul obținerii de foloase necuvenite',
    sentence: '1 an și 6 luni închisoare cu suspendare',
    sentence_years: 1.5,
    conviction_year: 2020,
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 19 februarie 2020 în dosarul trimis în judecată de DNA în 2014, achitându-l însă pentru alte capete din rechizitoriu și menținând condamnarea pentru accesul neautorizat la informații nedestinate publicității.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9746',
      },
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
    prejudiciu_eur: 114000000,
    prejudiciu_text:
      'DNA indică în dosarul retrocedărilor ilegale un prejudiciu de 114 milioane euro.',
    verified_at: '2026-04-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9349',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3893',
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
    prejudiciu_eur: 1141049.95,
    prejudiciu_text:
      'În componenta PHARE a dosarului, DNA a indicat public 880.249,95 euro și încă 260.800 euro încasați pe nedrept, fără să rezulte din comunicatele publice un total consolidat unic pentru toate componentele cauzei.',
    details:
      'Condamnat definitiv de ÎCCJ în martie 2019 la 7 ani și 8 luni de închisoare pentru luare de mită și folosirea de documente false pentru obținerea de fonduri europene.',
    verified_at: '2026-04-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9407',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6000',
      },
    ],
  },
  'Dorin Florea': {
    prejudiciu_eur: 1410600,
    prejudiciu_text:
      'Comunicatul DNA din 2 iunie 2016 indică un prejudiciu total de 7.053.000 lei în dosarul ASA 2013.',
    verified_at: '2026-04-10',
  },
  'Dragoș Chitic': {
    prejudiciu_eur: 217834,
    prejudiciu_text:
      'Comunicatul DNA din 20 martie 2018 indică un prejudiciu de 1.089.170 lei în dauna municipiului Piatra Neamț.',
    verified_at: '2026-04-10',
  },
  'Mircea Minea': {
    prejudiciu_eur: 8999990.6,
    prejudiciu_text:
      'Comunicatul DNA din 10 mai 2023 indică un prejudiciu total de 44.999.953 lei în dosarul privind finanțarea clubului Concordia Chiajna și închirierea bazelor sportive.',
    verified_at: '2026-04-10',
  },
  'Mihai Barbu': {
    prejudiciu_eur: 0,
    prejudiciu_text:
      'Comunicatul DNA din 6 noiembrie 2025 descrie un dosar legat de obținerea unor despăgubiri de aproximativ 3.000.000 euro, nu un prejudiciu public individualizat oficial în sarcina lui Mihai Barbu.',
    details:
      'DNA Iași a dispus la 6 noiembrie 2025 punerea în mișcare a acțiunii penale și controlul judiciar față de Mihai Barbu, susținând că și-ar fi folosit influența politică pentru facilitarea unor intervenții legate de un dosar de despăgubiri de aproximativ 3.000.000 euro. Această sumă este descrisă în comunicatul DNA ca valoarea despăgubirilor urmărite, nu ca un prejudiciu public individualizat oficial în sarcina lui. La 17 februarie 2026, Tribunalul Vaslui a respins definitiv plângerea formulată împotriva ordonanței DNA din 22 decembrie 2025 de prelungire a controlului judiciar. Nu am identificat, până la 10 aprilie 2026, o trimitere în judecată sau o soluție finală oficială în cauză.',
    verified_at: '2026-04-10',
  },
  'Vasile Olaru': {
    replace_sources: true,
    prejudiciu_eur: 187197.2,
    prejudiciu_text:
      'Comunicatul DNA din 22 mai 2014 indică o pagubă de 935.986 lei, prezentată și ca echivalent de 263.154 euro.',
    verified_at: '2026-04-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4900',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8200',
      },
    ],
  },
  'Ioan Jors': {
    prejudiciu_eur: 11187.578,
    prejudiciu_text:
      'Comunicatul DNA din 5 decembrie 2012 indică o sumă încasată nelegal de 55.937,89 lei, prezentată și ca echivalent de aproximativ 13.201 euro.',
    verified_at: '2026-04-10',
  },
  'Vasile Vieru': {
    prejudiciu_eur: 100821.12,
    prejudiciu_text:
      'Comunicatul DNA din 14 ianuarie 2013 indică o plată nelegală de 504.105,60 lei, prezentată și ca echivalent de aproximativ 149.068,69 euro.',
    verified_at: '2026-04-10',
  },
  'Mirela-Florența Matichescu': {
    prejudiciu_eur: 167151.452,
    prejudiciu_text:
      'Comunicatul DNA din 6 mai 2025 indică un prejudiciu de 835.757,26 lei.',
    verified_at: '2026-04-10',
  },
  'Bocșe Raul Florin': {
    prejudiciu_eur: 287102.6,
    prejudiciu_text:
      'Comunicatul DNA din 9 octombrie 2024 indică un prejudiciu de 1.435.513 lei în dauna comunei Câmpani.',
    verified_at: '2026-04-10',
  },
  'Vasile Iliuță': {
    replace_sources: true,
    prejudiciu_eur: 116416.6,
    prejudiciu_text:
      'Comunicatul DNA din 19 iunie 2024 indică un prejudiciu de 582.083 lei în dosarul contractelor de pază.',
    verified_at: '2026-04-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12606',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10238',
      },
    ],
  },
  'Petre Zamfir': {
    prejudiciu_eur: 262747.456,
    prejudiciu_text:
      'Comunicatul DNA din 30 martie 2021 indică obligația de plată a sumei de 1.313.737,28 lei către AFIR cu titlu de despăgubiri civile.',
    verified_at: '2026-04-10',
  },
  'Vasile Andreaș': {
    prejudiciu_eur: 275620.8,
    prejudiciu_text:
      'Comunicatul DNA din 31 mai 2022 indică un total de 1.378.104 lei reprezentând impozite și accesorii locale scutite nelegal.',
    verified_at: '2026-04-10',
  },
  'Fabian Laurențiu Costel Drocan': {
    prejudiciu_eur: 22256.474,
    prejudiciu_text:
      'Comunicatul DNA din 17 octombrie 2019 indică obligația de plată a sumei de 111.282,37 lei către APIA Mehedinți, reprezentând prejudiciul cauzat prin încasarea necuvenită a sprijinului acordat.',
    verified_at: '2026-04-10',
  },
  'Gheorghe Vișovan': {
    prejudiciu_eur: 726089.2,
    prejudiciu_text:
      'Comunicatul DNA din 28 februarie 2017 indică un prejudiciu de 3.630.446 lei în dosarul proiectului european de la Moisei.',
    verified_at: '2026-04-10',
  },
  'Ștefan Ionescu': {
    prejudiciu_eur: 132108.23,
    prejudiciu_text:
      'Comunicatul DNA din 22 septembrie 2022 indică despăgubiri civile de 660.541,15 lei către APIA Ialomița.',
    verified_at: '2026-04-10',
  },
  'Ion Năftănilă': {
    prejudiciu_eur: 92547.58,
    prejudiciu_text:
      'Comunicatul DNA din 27 iunie 2024 indică un prejudiciu de 462.737,90 lei, sumă deja achitată integral de partea responsabilă civilmente înainte de hotărârea definitivă.',
    verified_at: '2026-04-10',
  },
  'Băran Aurică': {
    prejudiciu_eur: 267826.478,
    prejudiciu_text:
      'Comunicatul DNA din 9 iulie 2020 indică obligația de plată a sumei de 1.339.132,39 lei către APIA Timiș.',
    verified_at: '2026-04-10',
  },
  'Adrian Nicolae Domocoș': {
    prejudiciu_eur: 52058,
    prejudiciu_text:
      'Comunicatul DNA din 10 octombrie 2018 indică o sumă totală de 260.290 lei reprezentând prejudiciul reținut în dosarul de la Beiuș, chiar dacă aceasta fusese recuperată integral înainte de soluția definitivă.',
    verified_at: '2026-04-10',
  },
  'Ovidiu Nemeș': {
    prejudiciu_eur: 3953.4,
    prejudiciu_text:
      'Comunicatul DNA din 5 mai 2020 indică despăgubiri civile de 19.767 lei către municipiul Sighetu Marmației.',
    verified_at: '2026-04-10',
  },
  'Sorin Balași': {
    prejudiciu_eur: 123833.624,
    prejudiciu_text:
      'Comunicatul DNA din 5 mai 2021 indică obligația de plată a sumei de 619.168,12 lei către APIA Brașov.',
    verified_at: '2026-04-10',
  },
  'Vasile Aleca': {
    prejudiciu_eur: 365366.748,
    prejudiciu_text:
      'Comunicatul DNA din 20 iunie 2017 indică obligația de plată a sumei de 1.826.833,74 lei către APIA București, reprezentând sprijin financiar încasat nelegal în anul 2010.',
    verified_at: '2026-04-10',
  },
  'Marian Oprișan': {
    prejudiciu_eur: 2175000,
    prejudiciu_text:
      'Comunicatul DNA din 6 iunie 2005 indica un prejudiciu estimat la aproximativ 1,5 milioane euro în dauna ministerului, 600.000 euro în dauna Consiliului Județean Vrancea și 75.000 euro în dauna bugetului Guvernului.',
    verified_at: '2026-04-10',
  },
  'Robert Sorin Negoiță': {
    prejudiciu_text:
      'Comunicatul DNA din 10 august 2022 indică pentru întregul dosar al contractului de salubrizare Rosal un prejudiciu total de 578.446.818 lei în dauna Sectorului 3; suma este prezentată public ca prejudiciu al dosarului, nu ca individualizare exclusivă pentru Robert Sorin Negoiță.',
    verified_at: '2026-04-10',
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
    geography: {
      county: 'București',
      basis: 'constituency',
      note: 'Senator ales în București; se folosește circumscripția parlamentară.',
    },
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
    geography: {
      county: 'București',
      basis: 'political_base',
      note: 'Figură națională cu activitate politică și profesională publică legată de București.',
    },
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
  'Adrian Severin': {
    verified_at: '2026-03-22',
    geography: {
      county: 'București',
      basis: 'hometown',
      note: 'Nu există o circumscripție mai clară în datele curente; se folosește originea publică din București ca ultimă rezervă.',
    },
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
    verified_at: '2026-03-30',
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
    geography: {
      county: 'București',
      basis: 'constituency',
      note: 'Deputat ales în București; se folosește circumscripția parlamentară.',
    },
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
  'Mircea Drăghici': {
    replace_sources: true,
    position: 'Deputat de Argeș; trezorier PSD la data faptelor',
    crime: 'Utilizarea subvențiilor în alte scopuri decât cele pentru care au fost acordate; delapidare',
    sentence: '6 ani închisoare',
    sentence_years: 6,
    conviction_year: 2022,
    details:
      'După condamnarea definitivă la 5 ani din 1 iulie 2021 în dosarul achiziției unui imobil și al înstrăinării unui autoturism din patrimoniul partidului, Tribunalul București a admis la 5 septembrie 2022 un nou acord de recunoaștere a vinovăției, definitiv la 12 octombrie 2022, și a stabilit pedeapsa rezultantă de 6 ani închisoare. Într-un alt dosar privind contracte de consultanță pentru primării din Argeș, DNA a consemnat ulterior achitarea sa definitivă în 2024.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11615',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11301',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10502',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
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
    geography: {
      county: 'Argeș',
      basis: 'constituency',
      note: 'Senator ales în Circumscripția electorală nr. 3 Argeș; circumscripția parlamentară are prioritate față de locul de origine.',
    },
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
      'În dosarul Romgaz-Interagro, Senatul a respins cererea de începere a urmăririi penale formulate în februarie 2015, după ce o cerere similară mai fusese respinsă și în 2013. Nu am identificat o trimitere în judecată sau o soluție oficială ulterioară care să modifice acest stadiu procedural.',
    verified_at: '2026-03-30',
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
    geography: {
      county: 'Caraș-Severin',
      basis: 'hometown',
      note: 'Figură națională fără circumscripție mai clară în datele curente; se folosește originea publică din Reșița.',
    },
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
    replace_sources: true,
    party: 'PDL',
    position: 'Președinte al Consiliului Județean Arad; fost senator',
    crime: 'Trafic de influență',
    sentence: '4 ani închisoare',
    sentence_years: 4,
    conviction_year: 2017,
    details:
      'Curtea de Apel Timișoara l-a condamnat definitiv la 26 iunie 2017 pentru trafic de influență, după ce DNA a susținut că pretinsese și primise 35.000 lei și 10.000 euro în legătură cu contracte ale Consiliului Județean Arad. Într-un dosar distinct, trimis în judecată în 2017, a fost ulterior achitat definitiv în 2020.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8297',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8386',
      },
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=0B7FD917-249E-42EA-AB58-DF2030FBAA84',
      },
    ],
  },
  'Aristotel Căncescu': {
    replace_sources: true,
    position: 'Președinte al Consiliului Județean Brașov; fost senator',
    details:
      'Curtea de Apel Brașov l-a condamnat definitiv la 1 februarie 2022 pentru luare de mită, trafic de influență și abuz în serviciu în dosarul contractelor atribuite de Consiliul Județean Brașov. Un alt comunicat DNA din 2017 arată că acesta fusese trimis în judecată și în cauze conexe privind același mod de exercitare a funcției.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11086',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5703',
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
    prejudiciu_eur: 584963.52,
    prejudiciu_text:
      'Comunicatul DNA din 10 octombrie 2013 indică în dosarul finanțării cluburilor sportive o pagubă de 2.924.817,60 lei.',
    details:
      'Trimis \u00een judecat\u0103 de DNA \u00een dosarul finan\u021b\u0103rii cluburilor sportive. Prin decizia penal\u0103 nr. 942 din 22 septembrie 2022, Curtea de Apel Gala\u021bi a dispus achitarea sa definitiv\u0103.',
    verified_at: '2026-04-10',
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
    geography: {
      county: 'București',
      basis: 'constituency',
      note: 'Deputat ales într-un colegiu din București; se folosește circumscripția parlamentară.',
    },
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
      'În septembrie 2025 a fost citată la Parchetul General ca suspect într-un dosar care vizează 11 infracțiuni. În octombrie 2025, Parchetul General a anunțat punerea în mișcare a urmăririi penale și demersurile pentru ridicarea imunității sale de europarlamentar, iar agenda oficială a comisiei JURI din 23-24 martie 2026 arată că cererea de ridicare a imunității era încă în procedură, cu audiere și schimb de opinii programate.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'Parlamentul European',
        kind: 'official',
        url: 'https://www.europarl.europa.eu/doceo/document/JURI-OJ-2026-03-23-1_EN.pdf',
      },
      {
        label: 'Gazeta de Sud',
        kind: 'press',
        url: 'https://www.gds.ro/Actualitate/2025-10-06/diana-sosoaca-inculpata-oficial-pentru-11-infractiuni/',
      },
    ],
  },
  'Vasile Nică': {
    party: 'PSD',
    details: VASILE_NICA_AUDIT_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-valea_danului-arges.html',
      },
    ],
  },
  'Gheorghe Cernătescu': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Bitpress',
        kind: 'press',
        url: 'https://bitpress.ro/politica/aliantele-politice-din-primariile-argesene/',
      },
    ],
  },
  'Gheorghe Pătrașcu': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Jurnalul de Argeș',
        kind: 'press',
        url: 'https://jurnaluldearges.ro/presiune-dna-pe-armata-primarilor-psd-2230/',
      },
    ],
  },
  'Nicolae Radu': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Bitpress',
        kind: 'press',
        url: 'https://bitpress.ro/politica/aliantele-politice-din-primariile-argesene/',
      },
    ],
  },
  'Simion Emil': {
    party: 'PDL',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Bitpress',
        kind: 'press',
        url: 'https://bitpress.ro/politica/aliantele-politice-din-primariile-argesene/',
      },
    ],
  },
  'Popa Ion': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Enciclopedia României',
        kind: 'profile',
        url: 'https://enciclopediaromaniei.ro/wiki/Comuna_St%C3%A2lpeni',
      },
    ],
  },
  'Ștefan Ion': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Enciclopedia României',
        kind: 'profile',
        url: 'https://www.enciclopediaromaniei.ro/wiki/Comuna_Budeasa',
      },
    ],
  },
  'Ivan Vasile Bebe': {
    party: 'PNL',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-babana-arges.html',
      },
    ],
  },
  'Berevoianu Corneliu': {
    party: 'PDL',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-nucsoara-arges.html',
      },
    ],
  },
  'Bălășoiu Aurel': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-rociu-arges.html',
      },
    ],
  },
  'Ene Florea': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-mosoaia-arges.html',
      },
    ],
  },
  'Bădulescu Ion': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Enciclopedia României',
        kind: 'profile',
        url: 'https://www.enciclopediaromaniei.ro/wiki/Comuna_Mor%C4%83re%C5%9Fti',
      },
    ],
  },
  'Dincuță Daniel': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-corbeni-arges.html',
      },
    ],
  },
  'Langer Nicolae': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-salatrucu-arges.html',
      },
    ],
  },
  'Țucă Gheorghe': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Gândul',
        kind: 'press',
        url: 'https://www.gandul.ro/actualitate/dupa-o-acuzatie-de-delapidare-edilul-din-cocuarges-revine-cu-una-noua-gheorghe-tuca-filmat-in-timp-ce-era-debransat-de-furnizorul-de-energie-20312029',
      },
    ],
  },
  'Ungurenuș Mihai': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS_2015,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-corbi-arges.html',
      },
    ],
  },
  'Soós Zoltán': {
    party: 'UDMR',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Zi de Zi',
        kind: 'press',
        url: 'https://www.zi-de-zi.ro/2021/07/04/este-sau-nu-soos-zoltan-membru-udmr-raspunsul-primarului/',
      },
      {
        label: 'PS News',
        kind: 'press',
        url: 'https://psnews.ro/targu-mures-alegerile-locale-sub-influenta-udmr-ce-sanse-au-psd-si-pnl/',
      },
    ],
  },
  'Gálfi Árpád': {
    party: 'Partidul pentru Odorheiu Secuiesc',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Informația Harghitei',
        kind: 'press',
        url: 'https://informatiahr.ro/partidul-pentru-odorheiu-secuiesc/',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/alegeri-locale-2024-rezultate-oficiale-partiale-korodi-attila-castiga-un-nou-mandat-la-primaria-miercurea-ciuc-2822325',
      },
    ],
  },
  'Secăreanu Dumitru': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Ziarul Profit',
        kind: 'press',
        url: 'https://www.ziarulprofit.ro/soc-la-dambovicioara-independentul-avram-marian-vicentiu-a-castigat-primaria-secareanu-pleaca/',
      },
    ],
  },
  'Cristescu Alexandru-Adrian': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-malureni-arges.html',
      },
    ],
  },
  'Pepenel Nicolae-Cornel': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS,
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-bughea_de_sus-arges.html',
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
        url: 'https://www.cdep.ro/pls/parlam/structura.mp?idm=48&cam=1&leg=2000',
      },
      {
        label: 'România Curată',
        kind: 'press',
        url: 'https://www.romaniacurata.ro/sentinta-definitiva-5-ani-de-inchisoare-vasile-duta-trafic-de-influenta/',
      },
    ],
  },
  {
    name: 'Gergely Olosz',
    party: 'UDMR',
    position: 'Senator; fost președinte ANRE',
    position_type: 'senator',
    geography: {
      county: 'Covasna',
      basis: 'constituency',
      note: 'Senator ales în Circumscripția electorală nr. 15 Covasna.',
    },
    crime: 'Trafic de influență',
    sentence: '3 ani închisoare cu executare',
    sentence_years: 3,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'DNA a consemnat condamnarea definitivă pronunțată de ÎCCJ la 20 decembrie 2018, într-un dosar privind trafic de influență legat de contracte pentru firme private.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9241',
      },
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
    geography: {
      county: 'București',
      basis: 'case_location',
      note: 'Cauza DNA și funcția publică vizau structuri naționale și Direcția Sanitar-Veterinară București.',
    },
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
  {
    name: 'Adrian Nicolae Domoco\u0219',
    party: 'PNL',
    position: 'Primar al municipiului Beiu\u0219 (jude\u021bul Bihor)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu; fals intelectual; opera\u021biuni financiare incompatibile cu func\u021bia; de\u021binere ilegal\u0103 de arm\u0103 \u0219i muni\u021bie',
    sentence: '5 ani \u0219i 8 luni \u00eenchisoare',
    sentence_years: 5.67,
    conviction_year: 2018,
    status: 'convicted',
    details:
      'Condamnat definitiv de \u00ceCCJ \u00een 14 decembrie 2018 pentru o serie de fapte de corup\u021bie \u0219i infrac\u021biuni conexe comise ca primar al municipiului Beiu\u0219. Separat, \u00eentr-un alt dosar DNA privind rela\u021bia cu Unicarm, Curtea de Apel Oradea a dispus achitarea sa definitiv\u0103 \u00een august 2020.',
    verified_at: '2026-03-24',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9259',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6040',
      },
    ],
  },
  {
    name: 'D\u0103nu\u021b Rentea',
    party: 'PSD',
    position: 'Primar al comunei S\u0103celu (jude\u021bul Gorj)',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103; primire de foloase necuvenite; folosire de documente false pentru fonduri europene; abuz \u00een serviciu',
    sentence: '5 ani \u00eenchisoare',
    sentence_years: 5,
    conviction_year: 2015,
    status: 'convicted',
    details:
      'Condamnat definitiv de \u00ceCCJ \u00een 10 februarie 2015 \u00een dosarul privind proiectul SAPARD pentru alimentarea cu ap\u0103 a comunei S\u0103celu. DNA a re\u021binut c\u0103 a prezentat documente false \u0219i a favorizat plata unor lucr\u0103ri neexecutate ori executate neconform.',
    verified_at: '2026-03-24',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6001',
      },
      {
        label: 'Gazeta de Sud',
        kind: 'press',
        url: 'https://www.gds.ro/Local/2007-08-24/Ponta-avocatul-lui-Danut-Rentea/',
      },
    ],
  },
  {
    name: 'Vasile Olaru',
    party: 'PNL',
    position: 'Primar al comunei Girov (jude\u021bul Neam\u021b)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu; fals intelectual',
    sentence: '2 ani \u00eenchisoare',
    sentence_years: 2,
    conviction_year: 2017,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Bac\u0103u \u00een 13 aprilie 2017 pentru plata nelegal\u0103 a aproape 936.000 lei c\u0103tre un executant, \u00een condi\u021biile \u00een care bunurile facturate nu fuseser\u0103 livrate comunei Girov.',
    verified_at: '2026-03-24',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8200',
      },
      {
        label: 'Rom\u00e2nia Liber\u0103',
        kind: 'press',
        url: 'https://romanialibera.ro/sport/modelul-pinalti-face-prozeliti-primar-pnl-sef-la-pdl-147119/',
      },
    ],
  },
  {
    name: 'Vasile Andrea\u0219',
    party: 'PSD',
    position: 'Primar al comunei S\u00e2mb\u0103ta de Sus (jude\u021bul Bra\u0219ov)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu; conflict de interese',
    sentence: '3 ani \u00eenchisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2022,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Bra\u0219ov \u00een 18 mai 2022 pentru scutirea nelegal\u0103 de la plata unor impozite locale a unor firme controlate de familie, \u00een perioada \u00een care conducea Prim\u0103ria S\u00e2mb\u0103ta de Sus.',
    verified_at: '2026-03-24',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11303',
      },
      {
        label: 'BizBra\u0219ov',
        kind: 'press',
        url: 'https://www.bizbrasov.ro/2018/06/09/primarul-psd-din-sambata-de-sus-si-scutit-familia-de-la-plata-unor-impozite-locale-de-aproape-14-milioane-de-lei/',
      },
    ],
  },
  {
    name: 'Costel Tuli\u021bu',
    party: 'PDL',
    position: 'Primar al ora\u0219ului Bechet (jude\u021bul Dolj)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu; conflict de interese',
    sentence: '3 ani \u00eenchisoare',
    sentence_years: 3,
    conviction_year: 2016,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Craiova \u00een 27 octombrie 2016 pentru pl\u0103\u021bi nelegale din fonduri publice \u0219i pentru \u00eencheierea unor contracte care au produs foloase materiale unei rude apropiate, \u00een timp ce era primar al ora\u0219ului Bechet.',
    verified_at: '2026-03-24',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=7830',
      },
    ],
  },
  {
    name: 'Dumitru Dr\u0103ghici',
    party: 'PNL',
    position: 'Primar al comunei S\u0103l\u0103trucel (jude\u021bul V\u00e2lcea)',
    position_type: 'mayor',
    crime: 'Complicitate la folosirea de documente false pentru fonduri europene; conflict de interese; fals intelectual; uz de fals',
    sentence: '3 ani \u00eenchisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2018,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Pite\u0219ti \u00een 25 mai 2018 \u00eentr-un dosar DNA privind subven\u021bii APIA ob\u021binute nelegal prin intermediul unei asocia\u021bii locale de cresc\u0103tori de animale. La momentul scoaterii din func\u021bie pentru un alt conflict de interese, presa local\u0103 \u00eel identifica drept ales PNL.',
    verified_at: '2026-03-24',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8848',
      },
      {
        label: 'Arena V\u00e2lcean\u0103',
        kind: 'press',
        url: 'https://arenavalceana.ro/dumitru-draghici-a-fost-eliberat-din-functia-de-primar-al-comunei-salatrucel/',
      },
    ],
  },
  {
    name: 'Ion Mo\u0219oarc\u0103',
    party: 'PSD',
    position: 'Primar al comunei Gr\u0103dinari (jude\u021bul Cara\u0219-Severin)',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103; fals \u00een \u00eenscrisuri sub semn\u0103tur\u0103 privat\u0103',
    sentence: '1 an \u00eenchisoare cu executare',
    sentence_years: 1,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'Dup\u0103 trimiterea \u00een judecat\u0103 de DNA \u00een dosarul fraud\u0103rii fondurilor APIA pentru paji\u0219ti comunale, Curtea de Apel Timi\u0219oara a pronun\u021bat \u00een noiembrie 2014 condamnarea definitiv\u0103 la 1 an de \u00eenchisoare, cu confiscarea sumei de 15.000 lei.',
    verified_at: '2026-03-24',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4562',
      },
      {
        label: 'Radio România Reșița',
        kind: 'press',
        url: 'https://www.radioresita.ro/actualitate/primarul-comunei-gradinari-condamnat-la-un-an-de-inchisoare-cu-executare',
      },
    ],
  },
  {
    name: 'Ioan Jors',
    party: 'PDL',
    position: 'Primar al comunei Bahnea (jude\u021bul Mure\u0219)',
    position_type: 'mayor',
    crime: 'Conflict de interese; folosire sau prezentare de documente false ori inexacte pentru ob\u021binerea de fonduri europene',
    sentence: '2 ani \u00eenchisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'Condamnat definitiv de \u00ceCCJ \u00een 4 iunie 2014, dup\u0103 ce DNA a re\u021binut c\u0103 a solicitat subven\u021bii APIA pe baza unui contract de arend\u0103 semnat de el at\u00e2t ca persoan\u0103 fizic\u0103, c\u00e2t \u0219i ca reprezentant al Prim\u0103riei Bahnea, \u00eencas\u00e2nd nelegal peste 55.000 lei.',
    verified_at: '2026-03-26',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4996',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3716',
      },
    ],
  },
  {
    name: 'Sandu Costel',
    party: 'PNL',
    position: 'Primar al comunei Plugari (jude\u021bul Ia\u0219i)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu; fals \u00een \u00eenscrisuri sub semn\u0103tur\u0103 privat\u0103; complicitate la folosirea de documente false pentru fonduri europene',
    sentence: '2 ani \u00eenchisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2013,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Ia\u0219i \u00een 22 martie 2013 \u00eentr-un dosar DNA privind concesionarea nelegal\u0103 a peste 700 de hectare de paji\u0219te c\u0103tre o structur\u0103 controlat\u0103 de apropia\u021bi ai familiei, urmat\u0103 de ob\u021binerea ilegal\u0103 de subven\u021bii APIA.',
    verified_at: '2026-03-26',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3988',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=1700',
      },
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-plugari-iasi.html',
      },
    ],
  },
  {
    name: 'Neculai Lupu',
    party: 'PRM',
    position: 'Primar al comunei Frunti\u0219eni (jude\u021bul Vaslui)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu; conflict de interese',
    sentence: '3 ani \u00eenchisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'Condamnat definitiv de \u00ceCCJ \u00een 16 iulie 2014, dup\u0103 ce DNA a sus\u021binut c\u0103, \u00een calitate de primar \u0219i membru al unei asocia\u021bii locale, a redus abuziv chiria pentru p\u0103\u0219unea comunal\u0103 \u0219i a facilitat ob\u021binerea ilegal\u0103 de subven\u021bii europene.',
    verified_at: '2026-03-26',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5155',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3769',
      },
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-fruntiseni-vaslui.html',
      },
    ],
  },
  {
    name: 'Viorel Chiri\u021b\u0103',
    party: 'PSD',
    position: 'Primar al comunei I.C. Br\u0103tianu (jude\u021bul Tulcea)',
    position_type: 'mayor',
    crime: 'Conflict de interese',
    sentence: '3 luni \u00eenchisoare cu suspendare',
    sentence_years: 0.25,
    conviction_year: 2015,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Constan\u021ba \u00een 2 decembrie 2015, dup\u0103 ce DNA a re\u021binut c\u0103 a \u00eenchiriat direct fiicei sale 37,5 hectare de teren ale prim\u0103riei, contract folosit apoi pentru accesarea unei finan\u021b\u0103ri europene destinate tinerilor fermieri.',
    verified_at: '2026-03-26',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7019',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=4637',
      },
    ],
  },
  {
    name: '\u0218tefan Ionescu',
    party: 'PSD',
    position: 'Primar al comunei Valea Ciorii (jude\u021bul Ialomi\u021ba)',
    position_type: 'mayor',
    crime: 'Complicitate la folosirea sau prezentarea de documente false ori inexacte pentru ob\u021binerea de fonduri europene',
    sentence: '2 ani \u00eenchisoare cu suspendare sub supraveghere',
    sentence_years: 2,
    conviction_year: 2022,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Bucure\u0219ti \u00een 20 septembrie 2022, dup\u0103 ce DNA a ar\u0103tat c\u0103 a sprijinit o asocia\u021bie local\u0103 s\u0103 ob\u021bin\u0103 subven\u021bii APIA pentru o suprafa\u021b\u0103 mai mare dec\u00e2t cea de\u021binut\u0103 \u00een acte, inclusiv prin furnizarea unei hot\u0103r\u00e2ri de consiliu local falsificate.',
    verified_at: '2026-03-26',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11566',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9923',
      },
      {
        label: 'Ziare.com',
        kind: 'profile',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_ialomita/primarie/valea-ciorii/',
      },
    ],
  },
  {
    name: 'Vasile Aleca',
    party: 'PDL',
    position: 'Primar al comunei Borca (jude\u021bul Neam\u021b)',
    position_type: 'mayor',
    crime: 'Complicitate la folosirea sau prezentarea de documente false pentru ob\u021binerea de fonduri europene',
    sentence: '2 ani \u00eenchisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2018,
    status: 'convicted',
    details:
      'Condamnat definitiv \u00een 2018 \u00een dosarul DNA privind subven\u021biile APIA pentru paji\u0219tile comunei Borca, dup\u0103 ce a semnat un document care atesta nereal exploatarea de c\u0103tre prim\u0103rie a unei suprafe\u021be de 1.462,97 hectare.',
    verified_at: '2026-03-26',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8505',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=7026',
      },
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-borca-neamt.html',
      },
    ],
  },
  {
    name: 'Antonie Bunei',
    party: 'PSD',
    position: 'Primar al comunei Z\u0103voi (jude\u021bul Cara\u0219-Severin)',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103; trafic de influen\u021b\u0103',
    sentence: '6 ani \u00eenchisoare',
    sentence_years: 6,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'Condamnat definitiv de \u00ceCCJ \u00een 22 aprilie 2014, \u00een dosarul DNA Timi\u0219oara privind luare de mit\u0103 \u0219i trafic de influen\u021b\u0103 comise \u00een perioada mandatului s\u0103u de primar al comunei Z\u0103voi.',
    verified_at: '2026-03-26',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4867',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=1690',
      },
    ],
  },
  {
    name: 'Ioana Bu\u0219e',
    party: 'PSD',
    position: 'Primar al comunei Stoina (jude\u021bul Gorj)',
    position_type: 'mayor',
    crime: 'Complicitate la folosirea sau prezentarea de documente false pentru fonduri europene; fals intelectual',
    sentence: '1 an \u0219i 6 luni \u00eenchisoare cu suspendare',
    sentence_years: 1.5,
    conviction_year: 2018,
    status: 'convicted',
    details:
      'Condamnat\u0103 definitiv de Curtea de Apel Craiova \u00een 11 mai 2018, dup\u0103 ce DNA a re\u021binut c\u0103 a emis adeverin\u021be false privind suprafe\u021bele agricole arendate de o societate care a ob\u021binut nelegal subven\u021bii APIA.',
    verified_at: '2026-03-26',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8841',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6666',
      },
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-stoina-gorj.html',
      },
    ],
  },
  {
    name: 'Ioan R\u0103dulescu',
    party: 'PDL',
    position: 'Primar al comunei Cop\u0103ceni (jude\u021bul Ilfov)',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103; trafic de influen\u021b\u0103',
    sentence: '2 ani \u0219i 6 luni \u00eenchisoare',
    sentence_years: 2.5,
    conviction_year: 2018,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Bucure\u0219ti \u00een 5 iunie 2018 pentru luare de mit\u0103, dup\u0103 ce DNA a sus\u021binut c\u0103 a pretins \u0219i primit 150.000 euro pentru interven\u021bii legate de comisia local\u0103 de fond funciar din Cop\u0103ceni.',
    verified_at: '2026-03-26',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8877',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6816',
      },
    ],
  },
  {
    name: 'Ioan Borduz',
    party: 'PDL',
    position: 'Primar al comunei F\u00e2rliug (jude\u021bul Cara\u0219-Severin)',
    position_type: 'mayor',
    crime: 'Schimbarea destina\u021biei fondurilor europene; deturnare de fonduri; complicitate la fals \u00een \u00eenscrisuri sub semn\u0103tur\u0103 privat\u0103',
    sentence: '3 ani \u00eenchisoare cu suspendare \u0219i amend\u0103 penal\u0103 de 20.000 lei',
    sentence_years: 3,
    conviction_year: 2015,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Timi\u0219oara \u00een 24 martie 2015, dup\u0103 ce DNA a ar\u0103tat c\u0103 a schimbat nelegal destina\u021bia unor fonduri PHARE \u0219i a validat pl\u0103\u021bi pe baza unor documente nereale \u00eentr-un proiect administrat de Prim\u0103ria F\u00e2rliug.',
    verified_at: '2026-03-26',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6183',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=2836',
      },
    ],
  },
  {
    name: 'Mihai Chirica',
    party: 'PNL',
    position: 'Primar al municipiului Ia\u0219i',
    position_type: 'mayor',
    crime: 'Complicitate la fals intelectual; complicitate la abuz \u00een serviciu; fals intelectual',
    sentence: 'Trimis \u00een judecat\u0103',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'Trimis \u00een judecat\u0103 de DNA \u00een 14 iulie 2022 \u00een dosarul privind edificarea \u0219i intabularea unui bloc construit cu \u00eenc\u0103lcarea autoriza\u021biei \u00een zona T\u0103t\u0103ra\u0219i (\u201eFlux\u201d), dup\u0103 ce procurorii au sus\u021binut c\u0103 a sprijinit emiterea unor documente care nu reflectau situa\u021bia real\u0103 a construc\u021biei. Verificarea din martie 2026 indic\u0103 faptul c\u0103 dosarul era \u00eenc\u0103 pe rol, f\u0103r\u0103 solu\u021bie definitiv\u0103.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11357',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10943',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10892',
      },
      {
        label: 'Prim\u0103ria Ia\u0219i',
        kind: 'official',
        url: 'https://www.primaria-iasi.ro/dm_iasi/portal.nsf/pagini/mihai%2Bchirica-0000196E?Open=',
      },
      {
        label: 'PressHub',
        kind: 'press',
        url: 'https://www.presshub.ro/dosarul-flux-chirica-harabagiu-avocatii-au-cerut-schimbarea-incadrarii-juridice-un-pas-mare-spre-prescriere-401176/',
      },
    ],
  },
  {
    name: 'Nicu Silviu Odobasianu',
    party: 'PSD',
    position: 'Primar al municipiului Beiu\u0219 (2000-2008)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu; \u00een\u0219el\u0103ciune; uz de fals',
    sentence: '4 ani \u00eenchisoare',
    sentence_years: 4,
    conviction_year: 2016,
    status: 'convicted',
    details:
      'Condamnat definitiv de \u00ceCCJ \u00een 3 iunie 2016 \u00een dosarul \u201eTop Construct\u201d, dup\u0103 ce DNA a sus\u021binut c\u0103 a favorizat decontarea unor lucr\u0103ri \u0219i pl\u0103\u021bi nelegale din proiecte publice derulate de Prim\u0103ria Beiu\u0219.',
    verified_at: '2026-03-26',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7518',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4271',
      },
      {
        label: 'BihorJust',
        kind: 'press',
        url: 'https://www.bihorjust.ro/a-murit-silviu-odobasianu-fostul-primar-al-beiusului/',
      },
    ],
  },
  {
    name: 'Dorin Florea',
    party: 'PDL',
    position: 'Primar al municipiului T\u00e2rgu Mure\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis \u00een judecat\u0103 pentru alocarea nelegal\u0103 a 7,5 milioane lei din bugetul local c\u0103tre clubul ASA 2013, iar Curtea de Apel Cluj a dispus \u00een 14 februarie 2023 achitarea sa definitiv\u0103, re\u021bin\u00e2nd c\u0103 faptele nu sunt prev\u0103zute de legea penal\u0103.',
    verified_at: '2026-03-26',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6969',
      },
      {
        label: 'Antena 3',
        kind: 'press',
        url: 'https://www.antena3.ro/politica/dorin-florea-ales-primar-la-targu-mures-pentru-a-patra-oara-consecutiv-170989.html',
      },
    ],
  },
  {
    name: 'Maria Precup',
    party: 'PSD',
    position: 'Primar al municipiului Reghin (2012-2020)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Trimis\u0103 \u00een judecat\u0103',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'Trimis\u0103 \u00een judecat\u0103 de DNA \u00een 27 februarie 2023 \u00eentr-un dosar privind achizi\u021bia la suprapre\u021b a unor dezinfectan\u021bi \u00een perioada pandemiei. Separat, \u00eentr-o cauz\u0103 DNA mai veche, Curtea de Apel T\u00e2rgu Mure\u0219 a dispus \u00een ianuarie 2023 \u00eencetarea procesului pentru abuz \u00een serviciu ca urmare a prescrip\u021biei \u0219i achitarea sa pentru acuza\u021bia de luare de mit\u0103. Nu am identificat o solu\u021bie definitiv\u0103 ulterioar\u0103 p\u00e2n\u0103 la 30 martie 2026.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11903',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7088',
      },
    ],
  },
  {
    name: 'Petre Gheorghe',
    party: 'PNL',
    position: 'Primar al comunei 1 Decembrie (jude\u021bul Ilfov)',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103',
    sentence: 'Cercetat sub control judiciar',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA l-a plasat sub control judiciar \u00een noiembrie 2019, sus\u021bin\u00e2nd c\u0103 ar fi pretins \u0219i primit bani \u0219i pavaje de la administratorul unei firme aflate \u00een rela\u021bii contractuale cu Prim\u0103ria 1 Decembrie. \u00centr-un comunicat ulterior din 16 ianuarie 2020, DNA a precizat c\u0103 urm\u0103rirea penal\u0103 fa\u021b\u0103 de el continua. Nu am identificat o trimitere \u00een judecat\u0103 sau o solu\u021bie final\u0103 oficial\u0103 ulterioar\u0103 p\u00e2n\u0103 la 30 martie 2026.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9632',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9694',
      },
    ],
  },
  {
    name: 'Radu Cristian',
    party: 'PNL',
    position: 'Primar al municipiului Mangalia',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103; sp\u0103lare a banilor; instigare la folosirea cu rea-credin\u021b\u0103 a bunurilor sau creditului societ\u0103\u021bii',
    sentence: 'Trimis \u00een judecat\u0103',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'Trimis \u00een judecat\u0103 de DNA la 18 decembrie 2025 \u00een dosarul privind presupuse mite de aproximativ 645.000 euro \u0219i sp\u0103lare de bani \u00een leg\u0103tur\u0103 cu emiterea unor documente urbanistice \u0219i alte demersuri administrative.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13432',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=12995',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12105',
      },
    ],
  },
  {
    name: 'Drago\u0219 Chitic',
    party: 'PNL',
    position: 'Primar al municipiului Piatra-Neam\u021b (2016-2020)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis \u00een judecat\u0103 \u00een 2018 \u00een dosarul schimbului de terenuri prin care municipiul Piatra-Neam\u021b ar fi fost prejudiciat cu peste 1 milion de lei. Prin actualizarea oficial\u0103 din 22 iunie 2023, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 deoarece faptele nu sunt prev\u0103zute de legea penal\u0103.',
    verified_at: '2026-03-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8663',
      },
      {
        label: 'Mediafax',
        kind: 'press',
        url: 'https://www.mediafax.ro/politic/liderul-pnl-piatra-neamt-dragos-chitic-a-demisionat-din-functie-17998740',
      },
    ],
  },
  {
    name: 'Mircea Minea',
    party: 'PNL',
    position: 'Primar al comunei Chiajna (jude\u021bul Ilfov)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Trimis \u00een judecat\u0103',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'Trimis \u00een judecat\u0103 de DNA \u00een 10 mai 2023 pentru finan\u021barea ilegal\u0103 a clubului Concordia Chiajna \u0219i pentru \u00eenchirierea unor baze sportive la tarife considerate derizorii, cu un prejudiciu total indicat de procurori de aproape 45 milioane lei. Relat\u0103rile din 12 februarie 2026 indicau c\u0103 dosarul era \u00eenc\u0103 blocat \u00een camera preliminar\u0103 la Tribunalul Ilfov; p\u00e2n\u0103 la 30 martie 2026 nu am identificat o solu\u021bie definitiv\u0103 oficial\u0103 ulterioar\u0103.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12061',
      },
      {
        label: 'PressHub',
        kind: 'press',
        url: 'https://buletin.de/bucuresti/dosarul-penal-al-primarului-din-chiajna-apropiat-de-familia-savonea-blocat-de-doi-ani-in-camera-preliminara-presshub/',
      },
    ],
  },
  {
    name: 'Cristian Maricel C\u00eerjaliu',
    party: 'PSD',
    position: 'Primar al comunei Agigea (jude\u021bul Constan\u021ba)',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Trimis \u00een judecat\u0103',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'Trimis \u00een judecat\u0103 de DNA \u00een 12 iunie 2020 pentru exproprierea \u0219i intabularea unui teren care a ajuns ulterior, \u00een parte, la o firm\u0103 controlat\u0103 de rude \u0219i apropia\u021bi. Dup\u0103 ce achitarea pe fond din martie 2024 a fost desfiin\u021bat\u0103 \u00een apel la 16 ianuarie 2025, cauza a reintrat \u00een rejudecare; verificarea din martie 2026 arat\u0103 c\u0103 pronun\u021barea fusese din nou am\u00e2nat\u0103, noul termen fiind stabilit pentru 7 aprilie 2026.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9829',
      },
      {
        label: 'Ziarul Amprenta',
        kind: 'press',
        url: 'https://ziarulamprenta.ro/stirile-zilei/dosarul-lui-cristian-cirjaliu-primarul-din-agigea-se-va-rejudeca/371680/',
      },
      {
        label: 'Ziarul Amprenta',
        kind: 'press',
        url: 'https://ziarulamprenta.ro/justitie/cristian-maricel-cirjaliu-primarul-din-agigea-o-noua-amanare-de-pronuntare-in-dosarul-dna-ce-a-decis-ieri-tribunalul-constanta/530391/',
      },
    ],
  },
  {
    name: 'Vasile Vieru',
    party: 'PSD',
    position: 'Fost primar al comunei Puie\u0219ti (jude\u021bul Vaslui)',
    position_type: 'mayor',
    crime: 'Folosire sau prezentare de documente false pentru fonduri europene; ob\u021binere ilegal\u0103 de fonduri; fals intelectual',
    sentence: '2 ani, 10 luni \u0219i 10 zile \u00eenchisoare cu suspendare',
    sentence_years: 2.86,
    conviction_year: 2016,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Ia\u0219i la 29 februarie 2016 pentru fraudarea unui proiect SAPARD de modernizare a unui drum comunal. DNA a ar\u0103tat c\u0103, \u00een calitate de primar, a semnat recep\u021bia unor lucr\u0103ri neexecutate, determin\u00e2nd plata nelegal\u0103 a peste 500.000 lei.',
    verified_at: '2026-03-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7250',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4115',
      },
      {
        label: 'Vremea Nou\u0103',
        kind: 'press',
        url: 'https://www.vremeanoua.ro/republica-puiesti-edilii-comunei-ori-condamnati-ori-in-curs-de-condamnare/',
      },
    ],
  },
  {
    name: 'Ion Florin Mo\u021b',
    party: 'PC',
    position: 'Primar al comunei Z\u0103rand (jude\u021bul Arad)',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103; sp\u0103lare a banilor',
    sentence: '2 ani \u00eenchisoare cu suspendare sub supraveghere',
    sentence_years: 2,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'Condamnat definitiv de Curtea de Apel Oradea la 30 ianuarie 2014, dup\u0103 ce DNA a re\u021binut c\u0103 a acceptat 40.000 euro mit\u0103 pentru avizarea unor documente de fond funciar \u0219i a disimulat o parte din bani printr-un contract de \u00eemprumut.',
    verified_at: '2026-03-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4660',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4213&jffi=comunicat&jftfdi=',
      },
      {
        label: 'Evenimentul Zilei',
        kind: 'press',
        url: 'https://evz.ro/scandalul-otv-ion-mot-un-primar-cu-1300-de-oi-898858.html',
      },
    ],
  },
  {
    name: 'Fabian Lauren\u021biu Costel Drocan',
    party: 'PNL',
    position: 'Primar al comunei Devesel (jude\u021bul Mehedin\u021bi)',
    position_type: 'mayor',
    crime: 'Folosire sau prezentare cu rea-credin\u021b\u0103 de documente false pentru fonduri europene',
    sentence: '3 ani \u00eenchisoare cu suspendare (proces \u00eenchis ulterior prin prescrip\u021bie)',
    sentence_years: 3,
    conviction_year: 2019,
    status: 'prescribed',
    details:
      'Condamnat definitiv \u00een 17 octombrie 2019 la 3 ani de \u00eenchisoare cu suspendare pentru ob\u021binerea nelegal\u0103 a unei subven\u021bii APIA. Prin actualizarea oficial\u0103 DNA din 13 martie 2023, Curtea de Apel Craiova a admis contesta\u021bia \u00een anulare \u0219i a \u00eenchis procesul penal ca urmare a intervenirii prescrip\u021biei, men\u021bin\u00e2nd celelalte dispozi\u021bii necontrare.',
    verified_at: '2026-03-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9649',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9911',
      },
      {
        label: 'Jurnalul Olteniei',
        kind: 'press',
        url: 'https://www.jurnalulolteniei.ro/2019/10/22/249957/',
      },
    ],
  },
  {
    name: 'Pav\u0103l Ioan',
    party: 'PSD',
    position: 'Primar al comunei Dumbr\u0103veni (jude\u021bul Suceava)',
    position_type: 'mayor',
    crime: 'Dare de mit\u0103; abuz \u00een serviciu cu consecin\u021be deosebit de grave; fals intelectual',
    sentence: '1 an \u0219i 4 luni \u00eenchisoare cu suspendare',
    sentence_years: 1.33,
    conviction_year: 2017,
    status: 'convicted',
    details:
      'Condamnat definitiv \u00een 7 septembrie 2017, prin acord de recunoa\u0219tere a vinov\u0103\u021biei admis de Curtea de Apel Bac\u0103u, pentru dare de mit\u0103 c\u0103tre poli\u021bi\u0219ti rutieri. Separat, DNA Suceava l-a trimis \u00een judecat\u0103 la 23 februarie 2026 pentru abuz \u00een serviciu \u0219i fals intelectual \u00een leg\u0103tur\u0103 cu trei contracte fictive de repara\u021bii drumuri.',
    verified_at: '2026-03-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8444',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13588',
      },
      {
        label: 'Crai nou',
        kind: 'press',
        url: 'https://www.crainou.ro/2024/10/29/ioan-paval-investit-pentru-al-cincilea-mandat-in-functia-de-primar-al-comunei-dumbraveni/',
      },
    ],
  },
  {
    name: 'So\u00f3s Zolt\u00e1n',
    party: 'Independent',
    position: 'Primar al municipiului T\u00e2rgu Mure\u0219',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103',
    sentence: 'Cercetat penal; sub control judiciar',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA T\u00e2rgu Mure\u0219 a dispus la 10 decembrie 2024 punerea \u00een mi\u0219care a ac\u021biunii penale \u0219i re\u021binerea sa pentru luare de mit\u0103, sus\u021bin\u00e2nd c\u0103 ar fi primit indirect opere de art\u0103 \u0219i bani \u00een leg\u0103tur\u0103 cu contracte ale prim\u0103riei. \u00cen cursul anului 2025 cauza a continuat cu men\u021binerea succesiv\u0103 a controlului judiciar, iar p\u00e2n\u0103 la 30 martie 2026 nu am identificat o trimitere \u00een judecat\u0103 sau o solu\u021bie final\u0103 oficial\u0103.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12757',
      },
      {
        label: 'G4Media',
        kind: 'press',
        url: 'https://www.g4media.ro/primarul-din-targu-mures-soos-zoltan-ramane-sub-control-judiciar-dosarul-instrumentat-de-dna-are-ca-obiect-luarea-de-mita.html',
      },
    ],
  },
  {
    name: 'Vergil Chi\u021bac',
    party: 'PNL',
    position: 'Primar al municipiului Constan\u021ba',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Cercetat penal',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA Constan\u021ba a anun\u021bat la 13 iulie 2023 efectuarea urm\u0103ririi penale fa\u021b\u0103 de primarul municipiului Constan\u021ba \u00een dosarul privind finan\u021barea integral\u0103, f\u0103r\u0103 procedur\u0103 de selec\u021bie public\u0103, a unui eveniment sportiv interna\u021bional. P\u00e2n\u0103 la 30 martie 2026 nu am identificat o trimitere \u00een judecat\u0103 sau o solu\u021bie final\u0103 oficial\u0103 ulterioar\u0103.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12166',
      },
    ],
  },
  {
    name: 'Cosmin Andrei',
    party: 'PSD',
    position: 'Primar al municipiului Boto\u0219ani',
    position_type: 'mayor',
    crime: 'Folosirea de informa\u021bii care nu sunt destinate publicit\u0103\u021bii pentru ob\u021binerea de foloase necuvenite',
    sentence: '1 an \u00eenchisoare (am\u00e2narea aplic\u0103rii pedepsei)',
    sentence_years: 1,
    conviction_year: 2025,
    status: 'first_instance',
    details:
      'DNA Suceava a pus \u00een mi\u0219care ac\u021biunea penal\u0103 la 2 februarie 2024, sus\u021bin\u00e2nd c\u0103 ar fi divulgat subiectele unui concurs organizat de prim\u0103rie. Tribunalul Boto\u0219ani l-a condamnat \u00een prim\u0103 instan\u021b\u0103 la 29 aprilie 2025 la 1 an de \u00eenchisoare cu am\u00e2narea aplic\u0103rii pedepsei. La 22 ianuarie 2026, Curtea de Apel Suceava am\u00e2na din nou pronun\u021barea \u00een apel pentru 20 februarie 2026; nu am identificat o solu\u021bie definitiv\u0103 public\u0103 ulterioar\u0103 p\u00e2n\u0103 la 30 martie 2026.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12362',
      },
      {
        label: 'Monitorul de Boto\u0219ani',
        kind: 'press',
        url: 'https://www.monitorulbt.ro/prima-pagina/2026/01/22/amanari-pe-banda-rulanta-in-dosarul-primarului-cosmin-andrei-pentru-a-cincea-oara-la-rand-instanta-amana-pronuntarea/',
      },
      {
        label: 'Monitorul de Boto\u0219ani',
        kind: 'press',
        url: 'https://www.monitorulbt.ro/prima-pagina/2025/05/01/cum-il-albesc-judecatorii-pe-primarul-cosmin-andrei-fapta-e-grava-dar-omul-e-iubit-de-comunitate/',
      },
    ],
  },
  {
    name: 'Iulian Iacomi',
    party: 'PSD',
    position: 'Primar al ora\u0219ului Lehliu-Gar\u0103',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103',
    sentence: 'Trimis \u00een judecat\u0103',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'Dup\u0103 punerea \u00een mi\u0219care a ac\u021biunii penale \u0219i instituirea controlului judiciar la 2 august 2024, DNA l-a trimis \u00een judecat\u0103 la 9 decembrie 2024 pentru luare de mit\u0103 \u00een form\u0103 continuat\u0103, sus\u021bin\u00e2nd c\u0103 ar fi primit peste 1,15 milioane lei \u0219i 74.000 euro \u00een leg\u0103tur\u0103 cu acte de urbanism. Nu am identificat, p\u00e2n\u0103 la 30 martie 2026, un comunicat oficial ulterior care s\u0103 ateste o solu\u021bie definitiv\u0103 sau o schimbare public confirmat\u0103 a stadiului procesual.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12750',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12648',
      },
    ],
  },
  {
    name: 'Vlad Oprea',
    party: 'PNL',
    position: 'Primar al ora\u0219ului Sinaia',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103; trafic de influen\u021b\u0103; abuz \u00een serviciu; fals \u00een declara\u021biile de avere; opera\u021biuni financiare incompatibile cu func\u021bia',
    sentence: 'Cercetat penal; sub control judiciar pe cau\u021biune',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA a dispus la 27 ianuarie 2025 punerea \u00een mi\u0219care a ac\u021biunii penale \u0219i control judiciar pe cau\u021biune fa\u021b\u0103 de primarul ora\u0219ului Sinaia. La 13 mai 2025, DNA a cerut \u00eenlocuirea m\u0103surii cu arestul preventiv, sus\u021bin\u00e2nd c\u0103 acesta ar fi continuat s\u0103 exercite atribu\u021bii de primar cu \u00eenc\u0103lcarea obliga\u021biilor impuse. Nu am identificat, p\u00e2n\u0103 la 30 martie 2026, o trimitere \u00een judecat\u0103 sau o solu\u021bie final\u0103 oficial\u0103 \u00een aceast\u0103 cauz\u0103.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12774',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12900',
      },
    ],
  },
  {
    name: 'Dan Oloieru',
    party: 'PNL',
    position: 'Fost primar al ora\u0219ului Fl\u0103m\u00e2nzi (jude\u021bul Boto\u0219ani)',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103',
    sentence: 'Acord de recunoa\u0219tere nevalidat definitiv',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA Suceava a dispus la 8 aprilie 2025 punerea \u00een mi\u0219care a ac\u021biunii penale \u0219i re\u021binerea sa pentru luare de mit\u0103 \u00een dosarul privind urgentarea pl\u0103\u021bilor pentru lucr\u0103ri publice. Relat\u0103ri din 13 martie 2026 indic\u0103 faptul c\u0103 a \u00eencheiat un acord de recunoa\u0219tere a vinov\u0103\u021biei \u0219i a acceptat o pedeaps\u0103 de 3 ani de \u00eenchisoare cu suspendare, \u00eens\u0103 validarea judec\u0103toreasc\u0103 \u0219i solu\u021bia definitiv\u0103 nu erau \u00eenc\u0103 public confirmate p\u00e2n\u0103 la 30 martie 2026.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12875',
      },
      {
        label: 'Monitorul de Boto\u0219ani',
        kind: 'press',
        url: 'https://www.monitorulbt.ro/prima-pagina/2026/03/13/dan-oloeriu-a-recunoscut-ca-a-luat-spaga-ce-pedeapsa-i-au-dat-magistratii/',
      },
    ],
  },
  {
    name: 'Dumitru-Verginel Giread\u0103',
    party: 'PSD',
    position: 'Fost primar al comunei Mihai Eminescu (jude\u021bul Boto\u0219ani)',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103',
    sentence: '3 ani \u00eenchisoare cu suspendare (condamnare cu acord de recunoa\u0219tere)',
    sentence_years: 3,
    conviction_year: 2026,
    status: 'first_instance',
    details:
      'DNA Suceava a dispus la 8 aprilie 2025 punerea \u00een mi\u0219care a ac\u021biunii penale \u0219i re\u021binerea sa pentru luare de mit\u0103 \u00een leg\u0103tur\u0103 cu lucr\u0103ri publice. La 11 noiembrie 2025, DNA a anun\u021bat sesizarea instan\u021bei, \u00een baza acordului de recunoa\u0219tere a vinov\u0103\u021biei \u00eencheiat cu el. La 27 ianuarie 2026, Tribunalul Boto\u0219ani a admis acordul \u0219i l-a condamnat \u00een prim\u0103 instan\u021b\u0103 la 3 ani de \u00eenchisoare cu suspendare, cu termen de supraveghere de 4 ani, hot\u0103r\u00e2rea fiind nedefinitiv\u0103.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13246',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12875',
      },
      {
        label: '\u0218tiri Boto\u0219ani',
        kind: 'press',
        url: 'https://stiri.botosani.ro/stiri/justitie/decizie-in-dosarul-de-luare-de-mita-condamnare-cu-suspendare-verginel-gireada-obligat-sa-munceasca-fara-plata-la-primaria-botosani-sau-bucecea.html',
      },
    ],
  },
  {
    name: 'Ionel Neagu',
    party: 'PSD',
    position: 'Primar al comunei Troianul (jude\u021bul Teleorman)',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103',
    sentence: 'Cercetat penal; sub control judiciar',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA a dispus la 8 august 2025 punerea \u00een mi\u0219care a ac\u021biunii penale \u0219i controlul judiciar fa\u021b\u0103 de primarul comunei Troianul, re\u021bin\u00e2nd \u0219ase infrac\u021biuni de luare de mit\u0103. Procurorii sus\u021bin c\u0103 ar fi pretins \u0219i primit \u00een total 145.000 lei pentru atribuirea preferen\u021bial\u0103 a unor contracte \u0219i achizi\u021bii. Nu am identificat, p\u00e2n\u0103 la 30 martie 2026, o trimitere \u00een judecat\u0103 sau o solu\u021bie final\u0103 oficial\u0103 \u00een aceast\u0103 cauz\u0103.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12988',
      },
    ],
  },
  {
    name: 'Barti Tihamér',
    party: 'UDMR',
    position: 'Vicepreședinte al Consiliului Județean Harghita',
    position_type: 'county_council_president',
    crime:
      'Folosirea influenței sau autorității într-un partid pentru obținerea de foloase necuvenite; instigare la folosirea de informații nedestinate publicității',
    sentence: 'Trimis în judecată sub control judiciar',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Târgu Mureș a dispus la 12 februarie 2025 punerea în mișcare a acțiunii penale, iar la 12 septembrie 2025 l-a trimis în judecată sub control judiciar, susținând că ar fi folosit influența politică pentru promovarea temporară a unui șef ANAF Harghita de la care ar fi obținut informații fiscale nepublice despre mai multe societăți comerciale. Nu am identificat, până la 30 martie 2026, un comunicat oficial ulterior care să indice o soluție definitivă sau o schimbare public confirmată a stadiului procesual.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13005',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12792',
      },
    ],
  },
  {
    name: 'Todorică-Constantin Șerban',
    party: 'PNL',
    position: 'Vicepreședinte al Consiliului Județean Brașov',
    position_type: 'county_council_president',
    crime: 'Abuz în serviciu; constituirea unui grup infracțional organizat',
    sentence: 'Trimis în judecată sub control judiciar',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Brașov a pus în mișcare acțiunea penală la 31 octombrie 2025 și l-a trimis în judecată la 23 decembrie 2025, susținând că ar fi viciat procedurile de numire și menținere a conducerii Companiei Apa Brașov SA pentru a controla resursele societății. Nu am identificat, până la 30 martie 2026, un comunicat oficial ulterior care să indice o soluție definitivă sau o schimbare public confirmată a stadiului procesual.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13435',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13217',
      },
    ],
  },
  {
    name: 'Eugen Nechita',
    party: 'PSD',
    position: 'Primar al comunei Drăgușeni (județul Botoșani)',
    position_type: 'mayor',
    crime: 'Luare de mită',
    sentence: 'Trimis în judecată în stare de arest preventiv',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'După punerea în mișcare a acțiunii penale și plasarea sub control judiciar la 26 iunie 2025, DNA Suceava l-a trimis în judecată la 10 februarie 2026, în stare de arest preventiv, acuzând că ar fi pretins 200.000 lei și ar fi primit 90.000 lei în legătură cu aprobarea plăților și derularea unor contracte publice. Nu am identificat, până la 30 martie 2026, un comunicat oficial ulterior care să indice o soluție definitivă sau o schimbare public confirmată a stadiului procesual.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13550',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12933',
      },
    ],
  },
  {
    name: 'Ilie Ivanache',
    party: 'PNL',
    position: 'Fost primar al comunei Ungureni (județul Botoșani)',
    position_type: 'mayor',
    crime:
      'Luare de mită; folosirea de informații ce nu sunt destinate publicității ori permiterea accesului unor persoane neautorizate la aceste informații',
    sentence: 'Trimis în judecată sub control judiciar',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Suceava a dispus la 8 aprilie 2025 punerea în mișcare a acțiunii penale și control judiciar pe cauțiune, iar la 8 ianuarie 2026 l-a trimis în judecată, susținând că ar fi primit bani și ar fi furnizat informații confidențiale pentru favorizarea unei firme la licitații și plăți aferente unor lucrări publice. Nu am identificat, până la 30 martie 2026, un comunicat oficial ulterior care să indice o soluție definitivă sau o schimbare public confirmată a stadiului procesual.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13456',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12875',
      },
    ],
  },
  {
    name: 'Ioan Filip',
    party: 'PSD',
    position: 'Primar al comunei Zănești (județul Neamț)',
    position_type: 'mayor',
    crime: 'Luare de mită; abuz în serviciu',
    sentence: 'Cercetat penal; arestat preventiv, ulterior sub control judiciar',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA Bacău a dispus la 12 noiembrie 2025 punerea în mișcare a acțiunii penale și reținerea sa pentru luare de mită și abuz în serviciu în legătură cu mai multe contracte publice derulate în perioada 2023-2025. La 12 februarie 2026, Curtea de Apel Bacău a dispus eliberarea sa din arest preventiv și plasarea sub control judiciar, cu interdicția de a-și exercita funcția. Nu am identificat, până la 30 martie 2026, o trimitere în judecată sau o soluție finală oficială în cauză.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13255',
      },
      {
        label: 'AGERPRES',
        kind: 'press',
        url: 'https://agerpres.ro/justitie/2026/02/12/neamt-primarul-comunei-zanesti-eliberat-din-arestul-preventiv-dar-cu-interdictie-de-a-exercita-funct--1527453',
      },
    ],
  },
  {
    name: 'Robert Sorin Negoiță',
    party: 'București 2020',
    position: 'Primar al Sectorului 3 București',
    position_type: 'mayor',
    crime: 'Abuz în serviciu; complicitate la fals intelectual',
    sentence: 'Trimis în judecată într-un dosar și cercetat penal într-un altul; sub control judiciar pe cauțiune',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA a anunțat la 10 august 2022 trimiterea în judecată a lui Robert Sorin Negoiță în dosarul privind emiterea nelegală a unor documente de urbanism și lucrări publice la Sectorul 3, după comunicatul de urmărire penală din 21 februarie 2022. Separat, la 6 februarie 2026, DNA a dispus punerea în mișcare a acțiunii penale și control judiciar pe cauțiune într-un nou dosar privind lucrări rutiere și de construire realizate fără documentațiile și avizele legale. Nu am identificat până la 30 martie 2026 o soluție definitivă oficială în aceste cauze.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11396',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11008',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13536',
      },
    ],
  },
  {
    name: 'Claudiu Daniel Chelariu',
    party: 'PSD',
    position: 'Primar al comunei Mihălășeni (județul Botoșani)',
    position_type: 'mayor',
    crime: 'Luare de mită; dare de mită',
    sentence: 'Trimis în judecată într-un dosar și cercetat penal într-un altul',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA l-a trimis în judecată la 25 iunie 2025 într-un dosar de dare de mită legat de controale de mediu, iar la 22 septembrie 2025 a dispus punerea în mișcare a acțiunii penale și control judiciar într-un al doilea dosar, în care susține că ar fi pretins și primit 500.000 lei pentru plăți dintr-un contract de modernizare de drumuri. La 17 ianuarie 2026, Tribunalul Botoșani a menținut controlul judiciar în cel de-al doilea dosar. Nu am identificat, până la 30 martie 2026, o soluție definitivă oficială ulterioară.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12932',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13020',
      },
      {
        label: 'Știri de la Botoșani',
        kind: 'press',
        url: 'https://stiridelabotosani.ro/categorie/administratie/tribunalul-botosani-mentine-restrictiile-pentru-primarul-din-mihalaseni-acuzat-de-luare-de-mita',
      },
    ],
  },
  {
    name: 'Neculai Șchiopu',
    party: 'PSD',
    position: 'Viceprimar al comunei Coșula (ulterior primar ales în 2025)',
    position_type: 'local_official',
    crime: 'Luare de mită',
    sentence: 'Cercetat penal; sub control judiciar',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA Suceava a dispus la 8 aprilie 2025 punerea în mișcare a acțiunii penale și control judiciar față de viceprimarul comunei Coșula, susținând că ar fi pretins materiale de construcții de peste 30.000 lei pentru un apropiat. În mai 2025 presa locală a consemnat că, deși era cercetat, a câștigat alegerile pentru funcția de primar. Nu am identificat, până la 30 martie 2026, o trimitere în judecată sau o soluție finală oficială în această cauză.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12875',
      },
      {
        label: 'Monitorul de Botoșani',
        kind: 'press',
        url: 'https://www.monitorulbt.ro/local/2025/05/06/spaga-cu-pavele-la-cosula-favoruri-promise-in-schimbul-materialelor-pentru-un-consilier-local/',
      },
    ],
  },
  {
    name: 'Ionuț Voicu',
    party: 'PNL',
    position: 'Fost secretar general adjunct al filialei PNL Botoșani',
    position_type: 'other',
    geography: { county: 'Botoșani', basis: 'political_base' },
    crime: 'Trafic de influență',
    sentence: 'Cercetat penal; sub control judiciar pe cauțiune',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA Suceava a dispus la 8 aprilie 2025 punerea în mișcare a acțiunii penale și control judiciar pe cauțiune, iar la 4 februarie 2026 Tribunalul Botoșani a respins definitiv contestația formulată împotriva prelungirii măsurii dispuse de DNA de la 30 ianuarie 2026. Procurorii susțin că ar fi pretins bani pentru a interveni în favoarea unei firme la licitații și pentru deblocarea unor plăți aferente lucrărilor publice. Nu am identificat, până la 30 martie 2026, o trimitere în judecată sau o soluție finală oficială în cauză.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12875',
      },
      {
        label: 'Radio Iași',
        kind: 'press',
        url: 'https://www.radioiasi.ro/stiri/regional/dna-suceava-mentine-controlul-judiciar-in-cazul-fostului-secretar-general-al-pnl-botosani-ionut-voicu/',
      },
    ],
  },
  {
    name: 'Iulian Dumitrescu',
    party: 'PNL',
    position: 'Fost președinte al Consiliului Județean Prahova; fost senator',
    position_type: 'county_council_president',
    crime:
      'Trafic de influență; luare de mită; dare de mită; operațiuni financiare incompatibile cu funcția; fals în declarații de avere',
    sentence: 'Trimis în judecată',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'După punerea în mișcare a acțiunii penale și controlul judiciar dispuse la 1 februarie 2024, DNA a extins acuzațiile la 30 iulie 2024 și l-a trimis în judecată la 9 decembrie 2024 în dosarul privind pretinse mite, trafic de influență și folosirea unor operațiuni financiare incompatibile cu funcția de președinte al Consiliului Județean Prahova.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12750',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12647',
      },
    ],
  },
  {
    name: 'Aur Sandu',
    party: 'PSD',
    position: 'Primar al comunei Boghești, județul Vrancea (la data faptelor)',
    position_type: 'mayor',
    crime:
      'Complicitate la folosirea sau prezentarea cu rea-credință de documente ori declarații false pentru obținerea de fonduri europene',
    sentence: 'Trimis în judecată',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Galați a anunțat la 10 aprilie 2025 trimiterea în judecată a lui Aur Sandu pentru rolul atribuit în folosirea unor contracte și adeverințe false la APIA, în perioada 2016-2019, pentru obținerea pe nedrept a unor subvenții în valoare totală de 158.675 lei. Nu am identificat, până la 30 martie 2026, un comunicat oficial ulterior care să indice o soluție definitivă sau o schimbare public confirmată a stadiului procesual.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12877',
      },
    ],
  },
  {
    name: 'Mirela-Florența Matichescu',
    party: 'PSD',
    position: 'Deputat de Constanța; fost administrator public al județului Constanța',
    position_type: 'deputy',
    crime: 'Abuz în serviciu; instigare la abuz în serviciu',
    sentence: 'Trimisă în judecată',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Constanța a anunțat la 6 mai 2025 trimiterea în judecată a deputatei Mirela-Florența Matichescu în dosarul privind acordarea pretins nelegală și discriminatorie, în anul 2018, a unei finanțări nerambursabile pentru o asociație sportivă de fotbal, cu un prejudiciu indicat de 835.757,26 lei.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12896',
      },
    ],
  },
  {
    name: 'Răzvan-Iulian Ciortea',
    party: 'PSD',
    position: 'Deputat de Cluj; fost subprefect al județului Cluj',
    position_type: 'deputy',
    crime: 'Instigare la abuz în serviciu; instigare la fals intelectual; fals în declarații',
    sentence: 'Trimis în judecată',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Cluj a anunțat la 12 noiembrie 2025 trimiterea în judecată a lui Răzvan-Iulian Ciortea, după ce ar fi declarat necorespunzător adevărului că altă persoană se afla la volanul autoturismului surprins cu 164 km/h pe autostradă. Dosarul a fost trimis spre judecare la Înalta Curte de Casație și Justiție, având în vedere calitatea sa de deputat. Nu am identificat, până la 30 martie 2026, un comunicat oficial ulterior care să indice o soluție definitivă sau o schimbare public confirmată a stadiului procesual.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13251',
      },
    ],
  },
  {
    name: 'Mihai Barbu',
    party: 'PNL',
    position: 'Fost președinte interimar al filialei PNL Vaslui; fost președinte al Autorității pentru Reformă Feroviară',
    position_type: 'other',
    geography: { county: 'Vaslui', basis: 'political_base' },
    crime: 'Folosirea influenței ori autorității în scopul obținerii de foloase necuvenite',
    sentence: 'Cercetat penal; control judiciar menținut definitiv la 17 februarie 2026',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA Iași a dispus la 6 noiembrie 2025 punerea în mișcare a acțiunii penale și controlul judiciar față de Mihai Barbu, susținând că și-ar fi folosit influența politică pentru facilitarea unor intervenții legate de un dosar de despăgubiri de aproximativ 3.000.000 euro. La 17 februarie 2026, Tribunalul Vaslui a respins definitiv plângerea formulată împotriva ordonanței DNA din 22 decembrie 2025 de prelungire a controlului judiciar. Nu am identificat, până la 30 martie 2026, o trimitere în judecată sau o soluție finală oficială în cauză.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13238',
      },
      {
        label: 'AGERPRES',
        kind: 'press',
        url: 'https://agerpres.ro/justitie/2026/02/17/vaslui-fostul-presedinte-interimar-al-organizatiei-pnl-mihai-barbu-ramane-sub-control-judiciar--1528781',
      },
    ],
  },
  {
    name: 'Mihai Banu',
    party: 'PNL',
    position: 'Deputat de Bacău la data faptelor',
    position_type: 'deputy',
    crime: 'Trafic de influență',
    sentence: '3 ani închisoare',
    sentence_years: 3,
    conviction_year: 2020,
    status: 'convicted',
    details:
      'Curtea de Apel Bacău l-a condamnat definitiv la 6 iulie 2020 la 3 ani de închisoare pentru trafic de influență într-un al doilea dosar DNA legat de contracte de îndiguire și bani pretinși pentru partidul din care făcea parte. Anterior, la 14 decembrie 2017, fusese deja condamnat definitiv la 3 ani de închisoare în dosarul Berca. L-am păstrat la PNL întrucât mandatul parlamentar relevant a fost obținut pe listele PNL în 2008, chiar dacă în plan local a gravitat ulterior și în jurul PDL Bacău.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9924',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8631',
      },
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=3a777a84-f5ad-4743-ab60-e78ab6011c6f',
      },
    ],
  },
  {
    name: 'Ioan Munteanu',
    party: 'PSD',
    position: 'Deputat de Neamț; fost lider al grupului PSD din Camera Deputaților',
    position_type: 'deputy',
    crime: 'Trafic de influență; spălare de bani',
    sentence: '6 ani închisoare în primă instanță; proces încetat definitiv ca urmare a prescripției',
    sentence_years: 6,
    conviction_year: 2020,
    status: 'prescribed',
    details:
      'DNA l-a trimis în judecată sub control judiciar la 29 iunie 2017, acuzându-l că ar fi pretins 400.000 euro pentru intervenții pe lângă conducerea Hidroelectrica. Tribunalul București l-a condamnat în noiembrie 2020 la 6 ani de închisoare, însă la 10 mai 2023 Curtea de Apel București a dispus definitiv încetarea procesului penal ca urmare a intervenirii prescripției răspunderii penale și confiscarea sumelor considerate traficate.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8263',
      },
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=7D8E623A-CAC6-43FD-8691-644C66F5E7A7',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/un-fost-lider-al-deputatilor-psd-scapa-de-o-condamnare-de-sase-ani-de-inchisoare-2342779',
      },
    ],
  },
  {
    name: 'Constantin Adăscăliței',
    party: 'PSD',
    position: 'Deputat de Iași',
    position_type: 'deputy',
    crime: 'Operațiuni financiare incompatibile cu funcția; folosirea cu rea-credință a bunurilor sau creditului societății',
    sentence: 'Achitat definitiv',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Iași l-a trimis în judecată sub control judiciar la 7 iulie 2015, susținând că a continuat să administreze în fapt mai multe societăți și a folosit în mod contrar intereselor unei firme bunurile și creditul acesteia. La 7 octombrie 2019, Înalta Curte de Casație și Justiție a dispus definitiv achitarea, reținând că faptele nu sunt prevăzute de legea penală.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6523',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/politica/profesia-parlamentarilor-fara-legatura-cu-domeniul-de-legiferare-sunt-un-autodidact-cu-oarece-rezultate-sa-spun-asa-272977',
      },
    ],
  },
  {
    name: 'Mihai Alexandru Voicu',
    party: 'PNL',
    position: 'Deputat de Dolj',
    position_type: 'deputy',
    crime: 'Folosirea influenței sau autorității într-un partid pentru obținerea de foloase necuvenite',
    sentence: 'Achitat definitiv',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Craiova l-a trimis în judecată la 21 decembrie 2017, susținând că ar fi condiționat candidaturi eligibile și susținerea pentru funcții publice de plata unor contribuții pentru campania electorală din 2012. La 22 iunie 2020, Înalta Curte de Casație și Justiție a dispus definitiv achitarea, constatând că faptele nu sunt prevăzute de legea penală.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8575',
      },
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=a6fcb930-a12a-4d8a-bb7c-7a99b5b95856',
      },
    ],
  },
  {
    name: 'Valerian Vreme',
    party: 'PDL',
    position: 'Fost ministru al Comunicațiilor și Societății Informaționale; deputat de Bacău',
    position_type: 'minister',
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a cerut începerea urmăririi penale în dosarul Microsoft în septembrie 2014 și l-a trimis în judecată la 13 septembrie 2017 pentru abuz în serviciu în legătură cu contractul de licențe software pentru școli. La 24 septembrie 2019, Înalta Curte de Casație și Justiție a dispus definitiv achitarea, constatând că fapta nu este prevăzută de legea penală.',
    verified_at: '2026-04-02',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8368',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5309',
      },
      {
        label: 'DCNews',
        kind: 'press',
        url: 'https://www.dcnews.ro/fostul-ministru-valerian-vreme-a-demisionat-din-pdl_309165.html',
      },
    ],
  },
  {
    name: 'Mircea Roșca',
    party: 'PNL',
    position: 'Deputat de Prahova',
    position_type: 'deputy',
    crime: 'Trafic de influență',
    sentence: '3 ani închisoare cu suspendare în primă instanță; proces încetat definitiv ca urmare a prescripției',
    sentence_years: 3,
    conviction_year: 2018,
    status: 'prescribed',
    details:
      'DNA a cerut în 11 noiembrie 2014 încuviințarea arestării preventive a deputatului Mircea Roșca și l-a acuzat de două infracțiuni de trafic de influență. În februarie 2018 a fost condamnat în primă instanță la 3 ani de închisoare cu suspendare, însă la 22 aprilie 2024 Înalta Curte de Casație și Justiție a dispus definitiv încetarea procesului penal ca urmare a intervenirii prescripției.',
    verified_at: '2026-04-02',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5505',
      },
      {
        label: 'AGERPRES',
        kind: 'press',
        url: 'https://agerpres.ro/2024/04/22/deputatul-liberal-mircea-rosca-scapa-definitiv-de-acuzatiile-de-coruptie-dupa-ce-faptele-s-au-prescr--1284908',
      },
      {
        label: 'Observatorul Prahovean',
        kind: 'press',
        url: 'https://www.observatorulph.ro/national/90993-mircea-rosca-condamnat-la-trei-ani-de-inchisoare-cu-suspendare',
      },
    ],
  },
  {
    name: 'Cornel Mircea Sămărtinean',
    party: 'PMP',
    position: 'Deputat de Timiș; fost director al Aeroportului Internațional „Traian Vuia” Timișoara',
    position_type: 'deputy',
    crime: 'Abuz în serviciu; conflict de interese',
    sentence: 'Achitat definitiv',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Timișoara l-a trimis în judecată la 22 decembrie 2015 pentru modul în care au fost închiriate spațiile comerciale din aeroport în anul 2010. La 5 aprilie 2021, Înalta Curte de Casație și Justiție a dispus definitiv achitarea, reținând că faptele nu sunt prevăzute de legea penală.',
    verified_at: '2026-04-02',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6987',
      },
      {
        label: 'deBanat',
        kind: 'press',
        url: 'https://debanat.ro/2017/04/un-deputat-pmp-si-un-consilier-judetean-pnl-ajung-in-instanta-in-dosarul-aeroportul_189565.html',
      },
    ],
  },
  {
    name: 'Lucreția Cadar',
    party: 'PSD',
    position: 'Primar al comunei Deda, județul Mureș',
    position_type: 'mayor',
    crime: 'Folosirea sau prezentarea de documente ori declarații false pentru obținerea de fonduri europene; complicitate la aceeași infracțiune',
    sentence: 'Trimisă în judecată sub control judiciar',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'După comunicatul DNA din 11 septembrie 2024 privind punerea în mișcare a acțiunii penale și reținerea sa, procurorii DNA Târgu-Mureș au anunțat la 7 martie 2025 trimiterea în judecată sub control judiciar a primarei comunei Deda în dosarul privind folosirea unor documente și declarații nereale pentru accesarea de fonduri europene prin proiectul „De la marginalizare la integrare!”. Nu am identificat, până la 4 aprilie 2026, o soluție definitivă ulterioară.',
    verified_at: '2026-04-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12828',
      },
      {
        label: 'Primăria Deda',
        kind: 'official',
        url: 'https://primariadeda.ro/despre-institutie/conducere/primar/',
      },
      {
        label: 'Zi de Zi Mureș',
        kind: 'press',
        url: 'https://www.zi-de-zi.ro/2026/03/31/lucretia-cadar-realeasa-presedinte-al-psd-deda/',
      },
    ],
  },
  {
    name: 'Filimon Brian',
    party: 'PNL',
    position: 'Primar al comunei Măureni, județul Caraș-Severin',
    position_type: 'mayor',
    crime: 'Trafic de influență',
    sentence: 'Trimis în judecată',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Timișoara a anunțat la 8 martie 2024 trimiterea în judecată a lui Filimon Brian, aflat la data comunicatului în funcția de primar al comunei Măureni, pentru că ar fi pretins în anul 2019 un procent de 5% din valoarea unui contract de modernizare de drumuri, din care ar fi primit 100.000 lei. Nu am identificat, până la 4 aprilie 2026, un comunicat oficial ulterior care să indice o soluție definitivă sau o schimbare public confirmată a stadiului procesual.',
    verified_at: '2026-04-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12474',
      },
      {
        label: 'Primăria Măureni',
        kind: 'official',
        url: 'https://www.comunamaureni.ro/membru-primarie/brian-filimon/',
      },
    ],
  },
  {
    name: 'Bocșe Raul Florin',
    party: 'PNL',
    position: 'Fost primar al comunei Câmpani, județul Bihor',
    position_type: 'mayor',
    crime: 'Abuz în serviciu cu obținere de foloase necuvenite, în formă continuată',
    sentence: 'Trimis în judecată',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Oradea a anunțat la 9 octombrie 2024 trimiterea în judecată a lui Bocșe Raul Florin, la data faptelor primar al comunei Câmpani, pentru plăți nelegale efectuate în perioada 2016-2019, prin care ar fi fost virați peste 1,43 milioane lei în conturile proprii și ale altor angajați ai primăriei. Nu am identificat, până la 4 aprilie 2026, un comunicat oficial ulterior care să indice o soluție definitivă sau o schimbare public confirmată a stadiului procesual.',
    verified_at: '2026-04-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12699',
      },
      {
        label: 'G4Media',
        kind: 'press',
        url: 'https://www.g4media.ro/fostul-primar-al-comunei-bihorene-campani-judecat-pentru-abuz-in-serviciu-este-acuzat-ca-ar-fi-virat-ilegal-14-milioane-de-lei-in-conturile-proprii-si-ale-altor-angajati-din-primarie.html',
      },
      {
        label: 'Crișana',
        kind: 'press',
        url: 'https://crisana.ro/stiri/politica-4/mizez-pe-sprijinul-financiar-si-logistic-al-colegilor-din-consiliul-judetean-bihor-si-guvernul-rom-acirc-niei-100262.html',
      },
    ],
  },
  {
    name: 'Márk Endre Dezső',
    party: 'UDMR',
    position: 'Primar al municipiului Reghin, județul Mureș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu cu obținere de foloase necuvenite pentru altul',
    sentence: 'Trimis în judecată',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Târgu Mureș a anunțat la 9 septembrie 2025 trimiterea în judecată a lui Márk Endre Dezső, la data faptelor primar al municipiului Reghin, pentru că ar fi semnat și aprobat în mod nelegal un contract de asistență juridică de 6.000 lei și ar fi dispus ulterior plata acestuia din bugetul primăriei. Rechizitoriul a fost trimis Tribunalului Mureș. Nu am identificat, până la 8 aprilie 2026, o soluție definitivă ulterioară.',
    verified_at: '2026-04-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13001',
      },
      {
        label: 'Gândul',
        kind: 'press',
        url: 'https://www.gandul.ro/actualitate/primarul-municipiului-reghin-trimis-in-judecata-de-dna-pentru-abuz-in-serviciu-inspectorul-contabil-acuzat-de-complicitate-20629273',
      },
      {
        label: 'UDMR Mureș',
        kind: 'official',
        url: 'https://www.facebook.com/udmrmures/posts/24551783515199672/',
      },
    ],
  },
  {
    name: 'Gálfi Árpád',
    party: 'Independent',
    position: 'Fost primar al municipiului Odorheiu Secuiesc, județul Harghita',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Trimis în judecată',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Târgu Mureș a anunțat la 10 aprilie 2025 trimiterea în judecată a lui Gálfi Árpád, la data faptelor primar al municipiului Odorheiu Secuiesc, pentru cinci infracțiuni de abuz în serviciu legate de încheierea în anul 2019 a unor contracte de asistență juridică fără hotărâri ale consiliului local și fără respectarea controlului financiar preventiv. Dosarul a fost trimis spre judecare Tribunalului Harghita. Nu am identificat, până la 8 aprilie 2026, o soluție definitivă ulterioară.',
    verified_at: '2026-04-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12877',
      },
      {
        label: 'Contează',
        kind: 'press',
        url: 'https://conteaza.ro/2025/04/02/dna-l-a-trimis-in-judecata-pe-fostul-primar-din-odorheiu-secuiesc-galfi-arpad-pentru-abuz-in-serviciu/',
      },
      {
        label: 'Informația Harghitei',
        kind: 'press',
        url: 'https://informatiahr.ro/partidul-pentru-odorheiu-secuiesc/',
      },
    ],
  },
  {
    name: 'Alexandru-Răzvan Cuc',
    party: 'PSD',
    position: 'Fost ministru al Transporturilor',
    position_type: 'minister',
    crime: 'Complicitate la dare de mită',
    sentence: 'Trimis în judecată; arestat preventiv la declanșarea cauzei',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA a anunțat la 16 decembrie 2025 punerea în mișcare a acțiunii penale, reținerea și apoi arestarea preventivă a lui Alexandru-Răzvan Cuc în dosarul privind promisiunea unei mite reprezentând 6% dintr-un contract al Registrului Auto Român. Potrivit relatărilor din 5 februarie 2026, care citează comunicatul DNA și înregistrarea dosarului la Tribunalul București, acesta a fost trimis în judecată în aceeași cauză. Nu am identificat o pagină DNA separată, ușor regăsibilă, pentru comunicatul privind trimiterea în judecată, așa că statutul este ancorat pe actualizarea procedurală consemnată în presa care citează DNA și portalul instanțelor.',
    verified_at: '2026-04-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13415',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/razvan-cuc-fost-ministru-psd-al-transporturilor-trimis-in-judecata-de-dna-in-dosarul-mitei-de-la-rar-3618071',
      },
      {
        label: 'Economica.net',
        kind: 'press',
        url: 'https://www.economica.net/perchezitii-dna-la-fostul-ministru-al-transporturilor-razvan-cuc-si-la-un-om-de-afaceri-dosarul-investigheaza-dare-de-mita-si-complicitate-la-dare-de-mita_897273.html',
      },
    ],
  },
  {
    name: 'Marian Cristinel Bîgiu',
    party: 'PNL',
    position: 'Președinte al Consiliului Județean Buzău; fost senator',
    position_type: 'county_council_president',
    crime: 'Luare de mită; conflict de interese; tentativă de spălare a banilor',
    sentence: '5 ani și 2 luni închisoare',
    sentence_years: 5.17,
    conviction_year: 2016,
    status: 'convicted',
    details:
      'Curtea de Apel București l-a condamnat definitiv la 16 decembrie 2016 pentru luare de mită în formă continuată, conflict de interese și tentativă de spălare a banilor. L-am păstrat la PNL deoarece mandatul politic și cariera parlamentară care au precedat șefia CJ Buzău sunt cel mai clar legate de acest partid, deși înaintea arestării migrase la PSD.',
    verified_at: '2026-03-28',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=7951',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5634',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/cine-este-marian-bigiu-seful-consiliului-judetean-buzau-anchetat-de-dna-pentru-luare-de-mita-331388',
      },
    ],
  },
  {
    name: 'Diniță Ion',
    party: 'PC',
    position: 'Deputat de Brașov',
    position_type: 'deputy',
    crime: 'Complicitate la abuz în serviciu',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2022,
    status: 'convicted',
    details:
      'Curtea de Apel Brașov l-a condamnat definitiv la 1 februarie 2022 în dosarul Căncescu pentru complicitate la abuz în serviciu. Am păstrat partidul PC, conform surselor de presă și descrierii sale publice ca deputat conservator în faza de urmărire penală.',
    verified_at: '2026-03-28',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11086',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5703',
      },
      {
        label: 'DCNews',
        kind: 'press',
        url: 'https://www.dcnews.ro/dosar-cancescu-dna-cere-arestarea-preventiva-a-lui-ion-dini-a-deputat_456053.html',
      },
    ],
  },
  {
    name: 'Adrian Gurzău',
    party: 'PMP',
    position: 'Deputat de Cluj',
    position_type: 'deputy',
    crime: 'Trafic de influență',
    sentence: '2 ani și 8 luni închisoare cu suspendare',
    sentence_years: 2.67,
    conviction_year: 2017,
    status: 'convicted',
    details:
      'Tribunalul București a admis la 28 martie 2017 acordul de recunoaștere a vinovăției încheiat cu DNA, hotărârea rămânând definitivă prin neapelare la 25 aprilie 2017. Procurorii au susținut că, în perioada aprilie-noiembrie 2015, a pretins și primit foloase printr-un contract fictiv cu Carpatica Asig în schimbul influenței promise asupra unor decidenți din ASF.',
    verified_at: '2026-03-29',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8175',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8007',
      },
      {
        label: 'HotNews',
        kind: 'press',
        url: 'https://hotnews.ro/comisia-juridica-aviz-favorabil-cererii-dna-de-retinere-si-arestare-preventiva-a-deputatului-pmp-adrian-gurzau-finul-elenei-udrea-454671',
      },
    ],
  },
  {
    name: 'Florin Serghei Anghel',
    party: 'PDL',
    position: 'Președinte al Consiliului Județean Prahova la data faptelor',
    position_type: 'county_council_president',
    crime: 'Instigare la abuz în serviciu',
    sentence: 'Trimis în judecată',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA l-a trimis în judecată la 30 decembrie 2015 în dosarul vânzării activului „Cazarma 1375 Ciuperceasca”, acuzându-l că l-a împuternicit pe șeful Plopeni Industrial Parc să înstrăineze terenuri fără evaluare și licitație. În aprilie 2024, ÎCCJ a desființat soluția de încetare prin prescripție și a dispus rejudecarea cauzei. Nu am identificat, până la 30 martie 2026, o soluție definitivă ulterioară care să justifice schimbarea statutului.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6995',
      },
      {
        label: 'News.ro',
        kind: 'press',
        url: 'https://www.news.ro/justitie/inalta-curte-desfiinteaza-decizie-curtii-apel-ploiesti-fostul-deputat-psd-andreea-cosma-presedinte-consiliului-judetean-prahova-scapau-acuzatii-coruptie-urmare-prescrierii-dosarul-rejudecat-1922405704142024042221548246',
      },
    ],
  },
  {
    name: 'Marian Oprișan',
    party: 'PSD',
    position: 'Președinte al Consiliului Județean Vrancea',
    position_type: 'county_council_president',
    crime: 'Abuz în serviciu; utilizarea creditelor în alte scopuri; fals intelectual; uz de fals',
    sentence: 'Achitat definitiv (2015)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul „Căprioara”, iar Judecătoria Cluj-Napoca a dispus la 6 februarie 2015 achitarea sa pentru abuz în serviciu, utilizarea creditelor în alte scopuri și fals intelectual, respectiv încetarea procesului pentru uz de fals. Curtea de Apel Cluj a menținut soluția la 18 decembrie 2015, hotărârea devenind definitivă.',
    verified_at: '2026-03-29',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=468',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/regional/digi24-cluj-napoca/marian-oprisan-achitat-in-dosarul-de-coruptie-356598',
      },
    ],
  },
  {
    name: 'Cristian Adomniței',
    party: 'PNL',
    position: 'Președinte al Consiliului Județean Iași; fost deputat și ministru al Educației',
    position_type: 'county_council_president',
    crime: 'Favorizarea făptuitorului; fals intelectual',
    sentence: 'Achitat definitiv (2024)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în iulie 2015 în dosarul materialelor de promovare ale județului Iași, acuzându-l că ar fi acoperit prin acte false neexecutarea contractului. Prin actualizarea oficială din 19 martie 2024, DNA a consemnat că Curtea de Apel Galați a dispus achitarea sa definitivă la 8 februarie 2024, reținând că fapta nu este prevăzută de legea penală ori nu există probe că a săvârșit infracțiunea.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6506',
      },
    ],
  },
  {
    name: 'Andrei Volosevici',
    party: 'PDL',
    position: 'Primar al municipiului Ploiești; ulterior senator de Prahova',
    position_type: 'mayor',
    crime: 'Abuz în serviciu; trafic de influență',
    sentence: 'Achitat definitiv (2022)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în iunie 2016 în dosarul finanțării clubului FC Petrolul și al unor pretinse intervenții pentru contracte publice și panotaj electoral. Prin actualizarea oficială din 9 martie 2022, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 20 ianuarie 2022, pentru că faptele nu există ori nu sunt prevăzute de legea penală.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7543',
      },
      {
        label: 'Primăria Ploiești',
        kind: 'official',
        url: 'https://ploiesti.ro/descopera-ploiestiul-2/oameni-parteneriate/primarii-ploiestiului/',
      },
    ],
  },
  {
    name: 'Teodor Neamțu',
    party: 'PDL',
    position: 'Primar al municipiului Mediaș',
    position_type: 'mayor',
    crime: 'Complicitate la abuz în serviciu',
    sentence: 'Achitat definitiv (2018)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în septembrie 2014 pentru că ar fi înlesnit hotărârile prin care Consiliul Local Mediaș a devenit unic acționar al societății Gospodăria Comunală SA, cu producerea unui prejudiciu bugetului local. Prin actualizarea oficială din 4 iunie 2018, DNA a consemnat că Curtea de Apel Alba l-a achitat definitiv la 18 mai 2018, întrucât faptele nu sunt prevăzute de legea penală.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5265',
      },
      {
        label: 'Primăria Mediaș',
        kind: 'official',
        url: 'https://eportal.primariamedias.ro/portal/medias/portal.nsf/0/34AC10818498348AC2258057003F4256/%24FILE/BUGET_2011.pdf?Open=',
      },
    ],
  },
  {
    name: 'Vasile Iliuță',
    party: 'PSD',
    position: 'Președinte al Consiliului Județean Călărași',
    position_type: 'county_council_president',
    crime: 'Abuz în serviciu',
    sentence: 'Trimis în judecată',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA l-a trimis în judecată la 19 iunie 2024 în dosarul privind contractele de pază atribuite Consiliului Județean Călărași unei firme fără licență, acuzând un prejudiciu de 582.083 lei. Într-un alt dosar DNA, trimis în judecată în 2021 pentru abuz în serviciu, fals intelectual și șantaj, aceeași instituție a consemnat prin actualizarea oficială din 14 martie 2025 că fusese achitat definitiv; am păstrat totuși statutul de trimis în judecată deoarece dosarul din 2024 rămâne activ.',
    verified_at: '2026-03-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12606',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10238',
      },
      {
        label: 'Consiliul Județean Călărași',
        kind: 'official',
        url: 'https://www.calarasi.ro/conducerea-executiva/',
      },
    ],
  },
  {
    name: 'Sorin Bala\u0219i',
    party: 'PSD',
    position: 'Fost primar al comunei Crizbav, jude\u021bul Bra\u0219ov',
    position_type: 'mayor',
    crime:
      'Folosire sau prezentare de documente false pentru fonduri europene; participa\u021bie improprie la abuz \u00een serviciu',
    sentence:
      '2 ani \u0219i 6 luni \u00eenchisoare cu suspendare; ulterior trimis din nou \u00een judecat\u0103 \u00eentr-un dosar separat',
    sentence_years: 2.5,
    conviction_year: 2021,
    status: 'convicted',
    details:
      'Curtea de Apel Bra\u0219ov l-a condamnat definitiv la 5 mai 2021 la 2 ani \u0219i 6 luni de \u00eenchisoare cu suspendare pentru folosirea sau prezentarea cu rea-credin\u021b\u0103 de documente ori declara\u021bii false pentru ob\u021binerea pe nedrept de fonduri europene. Ulterior, DNA Bra\u0219ov a anun\u021bat la 6 octombrie 2025 trimiterea sa \u00een judecat\u0103 \u00eentr-un dosar separat privind participa\u021bie improprie la abuz \u00een serviciu legat\u0103 de contractul de \u00eenchiriere a paji\u0219tii comunale. Am p\u0103strat statutul general de convicted deoarece condamnarea definitiv\u0103 din 2021 este mai puternic\u0103 dec\u00e2t noul stadiu procesual.',
    verified_at: '2026-04-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10439',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13097',
      },
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_brasov/primarie/crizbav/1',
      },
    ],
  },
  {
    name: 'Sik\u00f3 Imre',
    party: 'UDMR',
    position: 'Fost primar al comunei Belin, jude\u021bul Covasna',
    position_type: 'mayor',
    crime: 'Folosire sau prezentare de documente false pentru fonduri europene',
    sentence:
      '2 ani \u00eenchisoare cu suspendare \u0219i amend\u0103 penal\u0103; proces \u00eencetat definitiv ca urmare a prescrip\u021biei',
    sentence_years: 2,
    conviction_year: 2022,
    status: 'prescribed',
    details:
      'DNA Bra\u0219ov l-a trimis \u00een judecat\u0103 la 2 noiembrie 2018 pentru ob\u021binerea pe nedrept, \u00een perioada 2010-2013, a unor fonduri APIA de peste 181.000 lei. Curtea de Apel Bra\u0219ov l-a condamnat definitiv la 13 ianuarie 2022 la 2 ani de \u00eenchisoare cu suspendare, amend\u0103 penal\u0103 \u0219i 60 de zile de munc\u0103 \u00een folosul comunit\u0103\u021bii, dar aceea\u0219i instan\u021b\u0103 a admis ulterior contesta\u021bia \u00een anulare, iar actualizarea DNA din 13 martie 2023 consemneaz\u0103 \u00eencetarea definitiv\u0103 a procesului penal ca urmare a prescrip\u021biei.',
    verified_at: '2026-04-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11048',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=9131',
      },
      {
        label: 'CovasnaMedia',
        kind: 'press',
        url: 'https://covasnamedia.ro/actualitate/primar-covasnean-trimis-in-judecata-de-dna',
      },
    ],
  },
  {
    name: 'Gavril Lupu',
    party: 'PSD',
    position: 'Fost primar al comunei Hangu, jude\u021bul Neam\u021b',
    position_type: 'mayor',
    crime: 'Folosire sau prezentare de documente false pentru fonduri europene',
    sentence: '1 an \u0219i 6 luni \u00eenchisoare cu suspendare',
    sentence_years: 1.5,
    conviction_year: 2022,
    status: 'convicted',
    details:
      'Curtea de Apel Bac\u0103u l-a condamnat definitiv la 19 aprilie 2022 la 1 an \u0219i 6 luni de \u00eenchisoare cu suspendare pentru folosirea sau prezentarea cu rea-credin\u021b\u0103 de documente ori declara\u021bii false, inexacte sau incomplete care au dus la ob\u021binerea pe nedrept de fonduri europene. DNA Bac\u0103u ar\u0103tase c\u0103, \u00een perioada 2009-2010, acesta a depus la APIA documente nereale pentru suprafe\u021be mai mari dec\u00e2t cele utilizate efectiv, cauz\u00e2nd ob\u021binerea nelegal\u0103 a peste un milion de lei pentru comuna Hangu.',
    verified_at: '2026-04-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11238',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=9131',
      },
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_neamt/primarie/hangu/7',
      },
    ],
  },
  {
    name: 'Grigore Marin',
    party: 'PSD',
    position: 'Fost primar al comunei Produlești, județul Dâmbovița',
    position_type: 'mayor',
    crime: 'Luare de mită; fals material în înscrisuri oficiale; uz de fals; abuz în serviciu',
    sentence: '4 ani și 1 lună închisoare',
    sentence_years: 4.08,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'Curtea de Apel Ploiești l-a condamnat definitiv la 17 octombrie 2014 la 4 ani și 1 lună de închisoare pentru luare de mită, fals material în înscrisuri oficiale, uz de fals și abuz în serviciu în formă continuată. DNA reținuse că, în calitate de primar al comunei Produlești, ar fi pretins și primit mită pentru deblocarea unor plăți și ar fi folosit documente false în legătură cu execuția unor lucrări publice.',
    verified_at: '2026-04-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5452',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3420',
      },
      {
        label: 'BURSA',
        kind: 'press',
        url: 'https://www.bursa.ro/primarul-unei-comune-din-dambovita-a-impuscat-un-tanar-in-urma-unui-scandal-81991314',
      },
    ],
  },
  {
    name: 'Petre Zamfir',
    party: 'PSD',
    position: 'Fost primar al comunei Crăcăoani, județul Neamț',
    position_type: 'mayor',
    crime: 'Folosire sau prezentare de documente false pentru fonduri europene; omisiunea furnizării de date pentru obținerea de fonduri europene',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2020,
    status: 'convicted',
    details:
      'După o achitare în primă instanță la Tribunalul Neamț, Curtea de Apel Bacău l-a condamnat definitiv la 16 noiembrie 2020 la 2 ani de închisoare cu suspendare pentru folosirea sau prezentarea cu rea-credință de documente ori declarații false și omisiunea de a furniza date pentru obținerea pe nedrept de fonduri europene. Hotărârea definitivă a inclus și obligarea la plata despăgubirilor civile către AFIR.',
    verified_at: '2026-04-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10127',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9216',
      },
      {
        label: 'TVMNeamț',
        kind: 'press',
        url: 'https://tvmneamt.ro/perchezitii-la-locuinta-familiei-fostului-primar-de-cracaoani-petre-zamfir/',
      },
    ],
  },
  {
    name: 'Costel Zamfir',
    party: 'Independent',
    position: 'Fost primar al comunei Bradu, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu; fals intelectual; uz de fals',
    sentence: '5 ani închisoare',
    sentence_years: 5,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'ÎCCJ l-a condamnat definitiv la 22 ianuarie 2014 la 5 ani de închisoare în dosarul retrocedărilor ilegale de terenuri de la Bradu. Ulterior, DNA Pitești l-a trimis din nou în judecată în ianuarie 2019 într-un dosar separat privind alte 161 de acte materiale de abuz în serviciu legate de fond funciar; am păstrat statutul general de convicted deoarece condamnarea definitivă din 2014 este mai puternică decât stadiul ulterior al noii cauze. L-am trecut la Independent deoarece nu am confirmat din surse suficient de solide afilierea sa politică exactă din perioada mandatului.',
    verified_at: '2026-04-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4596',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9216',
      },
      {
        label: 'Curierul Zilei',
        kind: 'press',
        url: 'https://curier.ro/2022/07/08/primarul-zamfir-9-ani-de-inchisoare/',
      },
    ],
  },
  {
    name: 'Costel Vieriu',
    party: 'PSD',
    position: 'Fost primar al comunei Grindu, județul Ialomița',
    position_type: 'mayor',
    crime: 'Trafic de influență în formă continuată',
    sentence: '3 ani închisoare cu suspendare în primă instanță',
    sentence_years: 3,
    conviction_year: 2019,
    status: 'first_instance',
    details:
      'DNA a anunțat la 14 ianuarie 2019 sesizarea Tribunalului Ialomița cu acordul de recunoaștere a vinovăției, care prevedea 3 ani de închisoare cu suspendare și interzicerea unor drepturi. Relatările din 7 februarie 2019 arată că Tribunalul Ialomița a admis acordul și a dispus și 120 de zile de muncă în folosul comunității. Nu am identificat, până la 9 aprilie 2026, o actualizare oficială ulterioară care să indice o soluție definitivă diferită, așa că păstrez statutul de first_instance.',
    verified_at: '2026-04-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9216',
      },
      {
        label: 'Money.ro',
        kind: 'press',
        url: 'https://www.money.ro/fostul-primar-condamnat-pentru-trafic-de-influenta-obligat-sa-dea-cu-matura-timp-de-120-de-zile/',
      },
      {
        label: 'Info Ialomița',
        kind: 'press',
        url: 'https://infoialomita.ro/flagrant-dna-primarul-psd-din-grindu-a-fost-prins-cand-lua-spaga/',
      },
    ],
  },
  {
    name: 'Rizea Florian',
    party: 'PSD',
    position: 'Fost primar al comunei Țițești, județul Argeș',
    position_type: 'mayor',
    crime:
      'Instigare la folosire sau prezentare de documente false pentru fonduri europene; abuz în serviciu într-un dosar separat',
    sentence:
      '3 ani închisoare cu suspendare; achitat definitiv într-un alt dosar',
    sentence_years: 3,
    conviction_year: 2018,
    status: 'convicted',
    details:
      'Curtea de Apel Pitești l-a condamnat definitiv la 18 octombrie 2018 la 3 ani de închisoare cu suspendare pentru instigare la folosirea sau prezentarea cu rea-credință de documente ori declarații false pentru obținerea pe nedrept de fonduri europene, în dosarul APIA privind izlazul comunal din Țițești. Într-o cauză separată, dosarul de consultanță al CJ Argeș, ÎCCJ a dispus la 24 aprilie 2023 achitarea sa definitivă pentru abuz în serviciu, actualizare consemnată de DNA la 5 februarie 2024. Am păstrat statutul general de convicted deoarece condamnarea definitivă din 2018 este mai puternică decât soluția favorabilă din dosarul distinct.',
    verified_at: '2026-04-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9126',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7628',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'Jurnalul de Argeș',
        kind: 'press',
        url: 'https://jurnaluldearges.ro/primarii-social-democrati-care-trag-spre-pdl-au-fost-pusi-la-zid-4414/',
      },
    ],
  },
  {
    name: 'Cioran Lucian',
    party: 'PSD',
    position: 'Fost primar al comunei Mozăceni, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pitești l-a trimis în judecată în noiembrie 2015 în dosarul privind contractele de consultanță atribuite de autorități locale argeșene firmei European Project Consulting. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, reținând că faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.',
    verified_at: '2026-04-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'Jurnalul de Argeș',
        kind: 'press',
        url: 'https://jurnaluldearges.ro/candidatul-psd-de-la-mozaceni-a-pierdut-la-50-de-voturi-29841/',
      },
    ],
  },
  {
    name: 'Tudose Elisaveta',
    party: 'PSD',
    position: 'Fost primar al comunei Coșești, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Achitată definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pitești a trimis-o în judecată în noiembrie 2015 în dosarul contractelor de consultanță derulate în județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.',
    verified_at: '2026-04-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'Jurnalul de Argeș',
        kind: 'press',
        url: 'https://jurnaluldearges.ro/si-totusi-cea-mai-longeviva-primarita-din-arges-nu-mai-candideaza-pentru-un-nou-mandat-24398/',
      },
    ],
  },
  {
    name: 'Marian Ibric',
    party: 'PSD',
    position: 'Primar al comunei Leordeni, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pitești l-a vizat inițial în martie 2014 și apoi l-a trimis în judecată în noiembrie 2015 în dosarul contractelor de consultanță derulate în județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.',
    verified_at: '2026-04-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'Consiliul Județean Argeș',
        kind: 'official',
        url: 'https://www.cjarges.ro/en/web/leordeni/primar-mandat-2020-2024',
      },
    ],
  },
  {
    name: 'Gheorghe Matei',
    party: 'PSD',
    position: 'Fost primar al comunei Mihăești, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pitești l-a vizat inițial în martie 2014 și apoi l-a trimis în judecată în noiembrie 2015 în dosarul contractelor de consultanță din județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.',
    verified_at: '2026-04-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'Ziarul din Muscel',
        kind: 'press',
        url: 'https://www.ziaruldinmuscel.ro/fostul-primar-gheorghe-matei-a-fost-reales-presedinte-la-psd-mihaesti/',
      },
    ],
  },
  {
    name: 'Dumitru Voicu',
    party: 'PSD',
    position: 'Primar al comunei Micești, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pitești l-a vizat inițial în martie 2014 și apoi l-a trimis în judecată în noiembrie 2015 în dosarul contractelor de consultanță din județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.',
    verified_at: '2026-04-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'Comuna Micești',
        kind: 'official',
        url: 'https://comunamicesti.ro/componenta/',
      },
    ],
  },
  {
    name: 'Marin Ion',
    party: 'PSD',
    position: 'Primar al comunei Stoenești, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pitești l-a vizat inițial în martie 2014 și apoi l-a trimis în judecată în noiembrie 2015 în dosarul contractelor de consultanță din județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.',
    verified_at: '2026-04-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'PSD Argeș',
        kind: 'official',
        url: 'https://psdarges.ro/primarul-marin-ion-ales-presedinte-al-psd-stoenesti/',
      },
    ],
  },
  {
    name: 'Vișan Ionel Dragoș',
    party: 'PSD',
    position: 'Primar al comunei Cotmeana, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pitești l-a vizat inițial în martie 2014 și apoi l-a trimis în judecată în noiembrie 2015 în dosarul contractelor de consultanță din județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.',
    verified_at: '2026-04-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'CJ Argeș',
        kind: 'official',
        url: 'https://www.cjarges.ro/en/web/cotmeana/primar',
      },
    ],
  },
  {
    name: 'Poștoacă Damian-Ion',
    party: 'PSD',
    position: 'Fost primar al comunei Mioarele, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pitești l-a vizat inițial în martie 2014 și apoi l-a trimis în judecată în noiembrie 2015 în dosarul contractelor de consultanță din județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.',
    verified_at: '2026-04-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'Criterii.ro',
        kind: 'press',
        url: 'https://criterii.ro/arges/alegeri-arges-2016-psd-cel-mai-bun-rezultat-din-ultimii-20-de-ani-vezi-toti-primarii/',
      },
    ],
  },
  {
    name: 'Constantin Iatagan',
    party: 'PSD',
    position: 'Primar al comunei Șuici, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pitești l-a vizat inițial în martie 2014 și apoi l-a trimis în judecată în noiembrie 2015 în dosarul contractelor de consultanță din județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.',
    verified_at: '2026-04-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'Primăria Șuici',
        kind: 'official',
        url: 'https://primariasuici.ro/primaria/conducerea/',
      },
    ],
  },
  {
    name: 'Niculaie Dochinoiu',
    party: 'PSD',
    position: 'Fost primar al comunei Vedea, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pitești l-a vizat inițial în martie 2014 și apoi l-a trimis în judecată în noiembrie 2015 în dosarul contractelor de consultanță din județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea. L-am păstrat la PSD pe baza profilului său oficial recent din perioada mandatului 2020-2024 și a rezultatelor locale din 2024.',
    verified_at: '2026-04-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'CJ Argeș',
        kind: 'official',
        url: 'https://www.cjarges.ro/en/web/vedea/primar-mandat-2020-2024',
      },
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_arges/primarie/vedea/21',
      },
    ],
  },
  {
    name: 'Sevastian Pupăză-Roșu',
    party: 'PSD',
    position: 'Primar al comunei Stolnici, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pitești l-a vizat inițial în martie 2014 și apoi l-a trimis în judecată în noiembrie 2015 în dosarul contractelor de consultanță din județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.',
    verified_at: '2026-04-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'CJ Argeș',
        kind: 'official',
        url: 'https://www.cjarges.ro/web/stolnici/prezentare',
      },
      {
        label: 'Observator de Argeș',
        kind: 'press',
        url: 'https://www.observatordearges.ro/organizatia-psd-din-stolnici-si-a-ales-conducerea.html',
      },
    ],
  },
  {
    name: 'Vasile Nic\u0103',
    party: 'Independent',
    position: 'Fost primar al comunei Valea Danului, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu; fals \u00een \u00eenscrisuri sub semn\u0103tur\u0103 privat\u0103',
    sentence: '2 ani \u0219i 10 luni \u00eenchisoare',
    sentence_years: 2.83,
    conviction_year: 2015,
    status: 'convicted',
    details:
      'DNA a consemnat condamnarea sa definitiv\u0103 la 7 decembrie 2015 \u00eentr-un dosar distinct instrumentat de Serviciul Teritorial Pite\u0219ti. \u00centr-o cauz\u0103 separat\u0103 privind contractele de consultan\u021b\u0103 din jude\u021bul Arge\u0219, DNA a actualizat ulterior solu\u021bia definitiv\u0103 de achitare pronun\u021bat\u0103 la 24 aprilie 2023; pentru consisten\u021ba bazei, intrarea r\u0103m\u00e2ne clasificat\u0103 drept convicted deoarece exist\u0103 o condamnare definitiv\u0103 distinct\u0103 \u00een intervalul 2010-2026. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7001',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4735',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
    ],
  },
  {
    name: 'Gheorghe Cern\u0103tescu',
    party: 'Independent',
    position: 'Fost primar al comunei Cuca, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a partidului, deoarece DNA indic\u0103 doar apartenen\u021ba la o forma\u021biune politic\u0103, f\u0103r\u0103 a o numi.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Gheorghe P\u0103tra\u0219cu',
    party: 'Independent',
    position: 'Fost primar al comunei Lunca Corbului, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a partidului, deoarece DNA indic\u0103 doar apartenen\u021ba la o forma\u021biune politic\u0103, f\u0103r\u0103 a o numi.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Nicolae Radu',
    party: 'Independent',
    position: 'Fost primar al comunei Negra\u0219i, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Simion Emil',
    party: 'Independent',
    position: 'Fost primar al comunei Br\u0103dule\u021b, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Popa Ion',
    party: 'Independent',
    position: 'Fost primar al comunei St\u00e2lpeni, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: '\u0218tefan Ion',
    party: 'Independent',
    position: 'Fost primar al comunei Budeasa, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Ivan Vasile Bebe',
    party: 'Independent',
    position: 'Fost primar al comunei B\u0103bana, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Berevoianu Corneliu',
    party: 'Independent',
    position: 'Fost primar al comunei Nuc\u0219oara, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'B\u0103l\u0103\u0219oiu Aurel',
    party: 'Independent',
    position: 'Fost primar al comunei Rociu, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Ene Florea',
    party: 'Independent',
    position: 'Fost primar al comunei Mo\u0219oaia, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'B\u0103dulescu Ion',
    party: 'Independent',
    position: 'Fost primar al comunei Mor\u0103re\u0219ti, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Dincu\u021b\u0103 Daniel',
    party: 'Independent',
    position: 'Fost primar al comunei Corbeni, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Langer Nicolae',
    party: 'PSD',
    position: 'Fost primar al comunei S\u0103l\u0103trucu, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. Pentru afilierea politic\u0103, l-am reclasificat la PSD pe baza paginii oficiale PSD Arge\u0219 care \u00eel listeaz\u0103 \u00eentre primarii partidului din jude\u021b.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'PSD Arge\u0219',
        kind: 'official',
        url: 'https://psdarges.ro/lista-primari/',
        description: 'Lista oficial\u0103 a primarilor PSD din jude\u021bul Arge\u0219',
      },
    ],
  },
  {
    name: '\u021auc\u0103 Gheorghe',
    party: 'PSD',
    position: 'Fost primar al comunei Cocu, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. Pentru afilierea politic\u0103, l-am reclasificat la PSD pe baza paginii oficiale PSD Arge\u0219 care \u00eel listeaz\u0103 \u00eentre primarii partidului din jude\u021b.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'PSD Arge\u0219',
        kind: 'official',
        url: 'https://psdarges.ro/lista-primari/',
        description: 'Lista oficial\u0103 a primarilor PSD din jude\u021bul Arge\u0219',
      },
    ],
  },
  {
    name: 'Ungurenu\u0219 Mihai',
    party: 'Independent',
    position: 'Fost primar al comunei Corbi, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Sec\u0103reanu Dumitru',
    party: 'PSD',
    position: 'Fost primar al comunei D\u00e2mbovicioara, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. Pentru afilierea politic\u0103, l-am reclasificat la PSD pe baza surselor oficiale PSD Arge\u0219, inclusiv articolul din aprilie 2024 care \u00eel men\u021bioneaz\u0103 ca primar al comunei D\u00e2mbovicioara \u0219i pre\u0219edinte al organiza\u021biei locale PSD.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'PSD Arge\u0219',
        kind: 'official',
        url: 'https://psdarges.ro/ieri-seara-s-au-desfasurat-adunarile-generale-de-alegeri-ale-organizatiilor-locale-psd-din-comunele-dragoslavele-si-dambovicioara/',
        description: 'Articolul oficial PSD Arge\u0219 care \u00eel men\u021bioneaz\u0103 pe Dumitru Sec\u0103reanu ca primar al D\u00e2mbovicioarei \u0219i pre\u0219edinte al PSD D\u00e2mbovicioara',
      },
    ],
  },
  {
    name: 'Cristescu Alexandru-Adrian',
    party: 'Independent',
    position: 'Fost primar al comunei M\u0103lureni, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Pepenel Nicolae-Cornel',
    party: 'Independent',
    position: 'Fost primar al comunei Bughea de Sus, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Tarb\u0103 Sever',
    party: 'Independent',
    position: 'Fost viceprimar al comunei Dragoslavele, jude\u021bul Arge\u0219',
    position_type: 'local_official',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-16',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Tarb\u0103 Mihai Gheorghe',
    party: 'Independent',
    position: 'Fost primar al comunei Dragoslavele, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a trimis \u00een judecat\u0103 \u00een noiembrie 2015 dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219, iar \u00een actualizarea oficial\u0103 din 5 februarie 2024 a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a apartenen\u021bei de partid.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'CJ Arge\u0219',
        kind: 'official',
        url: 'https://www.cjarges.ro/web/dragoslavele/primar-mandat-2012-2016',
      },
    ],
  },
  {
    name: 'Luca Ion',
    party: 'Independent',
    position: 'Fost viceprimar al comunei Stoene\u0219ti, jude\u021bul Arge\u0219',
    position_type: 'local_official',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a trimis \u00een judecat\u0103 \u00een noiembrie 2015 dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219, iar \u00een actualizarea oficial\u0103 din 5 februarie 2024 a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat ca Independent p\u00e2n\u0103 la confirmarea din surse mai puternice a partidului, iar pagina oficial\u0103 recent\u0103 \u00eel indic\u0103 \u00een administra\u021bia local\u0103 drept consilier local.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'CJ Arge\u0219',
        kind: 'official',
        url: 'https://www.cjarges.ro/en/web/stoenesti/luca-ion',
      },
    ],
  },
  {
    name: 'Andrei Nicolae',
    party: 'PSD',
    position: 'Viceprimar al comunei M\u0103lureni, jude\u021bul Arge\u0219',
    position_type: 'local_official',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a consemnat \u00een actualizarea oficial\u0103 din 5 februarie 2024 c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. L-am p\u0103strat la PSD pe baza profilului s\u0103u oficial recent de viceprimar al comunei M\u0103lureni.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'CJ Arge\u0219',
        kind: 'official',
        url: 'https://www.cjarges.ro/web/malureni/viceprimar',
      },
    ],
  },
  {
    name: 'Cioflan Iulian',
    party: 'Independent',
    position: 'Fost director executiv al Agen\u021biei de Implementare a Proiectelor Arge\u0219',
    position_type: 'local_official',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014, iar apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Ciobanu Marcel',
    party: 'Independent',
    position: 'Fost primar al comunei Uda, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Proces \u00eencetat ca urmare a decesului (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'closed',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus \u00eencetarea procesului penal fa\u021b\u0103 de el, ca urmare a decesului inculpatului.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: '\u0218erban Niculae',
    party: 'Independent',
    position: 'Fost primar al comunei M\u0103r\u0103cineni, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Proces \u00eencetat ca urmare a decesului (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'closed',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus \u00eencetarea procesului penal fa\u021b\u0103 de el, ca urmare a decesului inculpatului.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Sm\u0103du Nicolae',
    party: 'Independent',
    position: 'Fost primar al comunei Domne\u0219ti, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Proces \u00eencetat ca urmare a decesului (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'closed',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus \u00eencetarea procesului penal fa\u021b\u0103 de el, ca urmare a decesului inculpatului.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6888',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
    ],
  },
  {
    name: 'Ion Georgescu',
    party: 'PSD',
    position: 'Primar al ora\u0219ului Mioveni, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Trafic de influen\u021b\u0103',
    sentence: 'Trimis \u00een judecat\u0103 pentru trafic de influen\u021b\u0103',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Pite\u0219ti a anun\u021bat la 5 octombrie 2023 punerea \u00een mi\u0219care a ac\u021biunii penale \u0219i re\u021binerea sa, iar \u00een buletinul oficial din 18 decembrie 2023 a consemnat trimiterea \u00een judecat\u0103 \u00een stare de arest preventiv pentru trafic de influen\u021b\u0103. P\u00e2n\u0103 la 19 aprilie 2026 nu am identificat o solu\u021bie definitiv\u0103 oficial\u0103 ulterioar\u0103, astfel c\u0103 \u00eel p\u0103strez la statusul indicted.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12247',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12313',
      },
      {
        label: 'CJ Arge\u0219',
        kind: 'official',
        url: 'https://www.cjarges.ro/en/web/mioveni/primar',
      },
    ],
  },
  {
    name: 'Bo\u021b\u00e2rc\u0103 Gheorghi\u021b\u0103',
    party: 'PSD',
    position: 'Primar al ora\u0219ului Topoloveni, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Cercetat de DNA \u00een dosarul consultan\u021bei din Arge\u0219',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA Pite\u0219ti l-a inclus \u00een martie 2014 printre primarii cerceta\u021bi \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. P\u00e2n\u0103 la 19 aprilie 2026 nu am identificat un comunicat DNA ulterior care s\u0103 anun\u021be trimiterea sa \u00een judecat\u0103 sau o solu\u021bie definitiv\u0103 \u00een acea cauz\u0103, astfel c\u0103 \u00eel p\u0103strez la statusul investigated.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'CJ Arge\u0219',
        kind: 'official',
        url: 'https://www.cjarges.ro/web/topoloveni/primar',
      },
    ],
  },
  {
    name: 'Stoican Gheorghe',
    party: 'PSD',
    position: 'Primar al comunei Arefu, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Cercetat de DNA \u00een dosarul consultan\u021bei din Arge\u0219',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA Pite\u0219ti l-a inclus \u00een martie 2014 printre primarii cerceta\u021bi \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. P\u00e2n\u0103 la 19 aprilie 2026 nu am identificat un comunicat DNA ulterior care s\u0103 anun\u021be trimiterea sa \u00een judecat\u0103 sau o solu\u021bie definitiv\u0103 \u00een acea cauz\u0103, astfel c\u0103 \u00eel p\u0103strez la statusul investigated. Pentru afilierea politic\u0103, l-am reclasificat la PSD pe baza paginii oficiale PSD Arge\u0219 care \u00eel listeaz\u0103 \u00eentre primarii partidului din jude\u021b.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'Prim\u0103ria Arefu',
        kind: 'official',
        url: 'https://primaria-arefu.ro/primaria/conducerea/',
      },
      {
        label: 'PSD Arge\u0219',
        kind: 'official',
        url: 'https://psdarges.ro/lista-primari/',
        description: 'Lista oficial\u0103 a primarilor PSD din jude\u021bul Arge\u0219',
      },
    ],
  },
  {
    name: 'Diaconu Nicolae',
    party: 'Independent',
    position: 'Fost primar al municipiului Curtea de Arge\u0219, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Cercetat de DNA \u00een dosarul consultan\u021bei din Arge\u0219',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA Pite\u0219ti l-a inclus \u00een martie 2014 printre primarii cerceta\u021bi \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. P\u00e2n\u0103 la 19 aprilie 2026 nu am identificat un comunicat DNA ulterior care s\u0103 anun\u021be trimiterea sa \u00een judecat\u0103 sau o solu\u021bie definitiv\u0103 \u00een acea cauz\u0103, astfel c\u0103 \u00eel p\u0103strez la statusul investigated.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'CJ Arge\u0219',
        kind: 'official',
        url: 'https://www.cjarges.ro/documents/10865/357788/PV_25.02.2016.pdf/d40269c1-c55c-4de5-8f85-9681df969088',
      },
    ],
  },
  {
    name: 'Dumitrescu Mihail',
    party: 'Independent',
    position: 'Fost primar al comunei Meri\u0219ani, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Cercetat de DNA \u00een dosarul consultan\u021bei din Arge\u0219',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA Pite\u0219ti l-a inclus \u00een martie 2014 printre primarii cerceta\u021bi \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. P\u00e2n\u0103 la 19 aprilie 2026 nu am identificat un comunicat DNA ulterior care s\u0103 anun\u021be trimiterea sa \u00een judecat\u0103 sau o solu\u021bie definitiv\u0103 \u00een acea cauz\u0103, astfel c\u0103 \u00eel p\u0103strez la statusul investigated. Pagina oficial\u0103 recent\u0103 \u00eel indic\u0103 \u00een administra\u021bia local\u0103 drept consilier local.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'CJ Arge\u0219',
        kind: 'official',
        url: 'https://www.cjarges.ro/en/web/merisani/dumitrescu-mihail',
      },
    ],
  },
  {
    name: 'Lupu Sorin',
    party: 'PSD',
    position: 'Primar al comunei Priboieni, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Cercetat de DNA \u00een dosarul consultan\u021bei din Arge\u0219',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA Pite\u0219ti l-a inclus \u00een martie 2014 printre primarii cerceta\u021bi \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. P\u00e2n\u0103 la 19 aprilie 2026 nu am identificat un comunicat DNA ulterior care s\u0103 anun\u021be trimiterea sa \u00een judecat\u0103 sau o solu\u021bie definitiv\u0103 \u00een acea cauz\u0103, astfel c\u0103 \u00eel p\u0103strez la statusul investigated. Pentru afilierea politic\u0103, l-am reclasificat la PSD pe baza paginii oficiale PSD Arge\u0219 care \u00eel listeaz\u0103 \u00eentre primarii partidului din jude\u021b.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'CJ Arge\u0219',
        kind: 'official',
        url: 'https://www.cjarges.ro/web/priboieni/primar',
      },
      {
        label: 'PSD Arge\u0219',
        kind: 'official',
        url: 'https://psdarges.ro/lista-primari/',
        description: 'Lista oficial\u0103 a primarilor PSD din jude\u021bul Arge\u0219',
      },
    ],
  },
  {
    name: 'P\u0103dureanu Ion',
    party: 'PSD',
    position: 'Fost primar al comunei Godeni, jude\u021bul Arge\u0219',
    position_type: 'mayor',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Cercetat de DNA \u00een dosarul consultan\u021bei din Arge\u0219',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA Pite\u0219ti l-a inclus \u00een martie 2014 printre primarii cerceta\u021bi \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. P\u00e2n\u0103 la 19 aprilie 2026 nu am identificat un comunicat DNA ulterior care s\u0103 anun\u021be trimiterea sa \u00een judecat\u0103 sau o solu\u021bie definitiv\u0103 \u00een acea cauz\u0103, astfel c\u0103 \u00eel p\u0103strez la statusul investigated. L-am p\u0103strat la PSD pe baza paginii oficiale pentru mandatul 2016-2020.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4701',
      },
      {
        label: 'CJ Arge\u0219',
        kind: 'official',
        url: 'https://www.cjarges.ro/web/godeni/primar-mandat-2016-2020',
      },
    ],
  },
  {
    name: 'Popa Iulian',
    party: 'Independent',
    position: 'Fost primar al comunei Sec\u0103ria, jude\u021bul Prahova',
    position_type: 'mayor',
    crime: 'Instigare la folosirea sau prezentarea de documente ori declara\u021bii false pentru ob\u021binerea pe nedrept de fonduri europene',
    sentence: '4 ani \u00eenchisoare cu suspendare sub supraveghere',
    sentence_years: 4,
    conviction_year: 2013,
    status: 'convicted',
    details:
      'DNA Ploie\u0219ti a consemnat prin hot\u0103r\u00e2rea definitiv\u0103 din 4 decembrie 2013 condamnarea sa la 4 ani de \u00eenchisoare cu suspendarea execut\u0103rii sub supraveghere pentru fapte legate de ob\u021binerea pe nedrept de fonduri europene.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4521',
      },
    ],
  },
  {
    name: 'Manole Vasile',
    party: 'Independent',
    position: 'Fost primar al comunei Fr\u0103sinet, jude\u021bul C\u0103l\u0103ra\u0219i',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103',
    sentence: '5 ani \u00eenchisoare',
    sentence_years: 5,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'DNA a consemnat prin hot\u0103r\u00e2rea definitiv\u0103 din 24 ianuarie 2014 condamnarea sa la 5 ani de \u00eenchisoare pentru luare de mit\u0103.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4631',
      },
    ],
  },
  {
    name: 'Furtun\u0103 Gheorghe',
    party: 'Independent',
    position: 'Fost primar al comunei Deleni, jude\u021bul Ia\u0219i',
    position_type: 'mayor',
    crime: 'Folosirea sau prezentarea de documente ori declara\u021bii false pentru ob\u021binerea pe nedrept de fonduri europene',
    sentence: '6 luni \u00eenchisoare cu suspendare',
    sentence_years: 0.5,
    conviction_year: 2013,
    status: 'convicted',
    details:
      'DNA Ia\u0219i a consemnat prin hot\u0103r\u00e2rea definitiv\u0103 din 24 ianuarie 2013 condamnarea sa la 6 luni de \u00eenchisoare cu suspendare condi\u021bionat\u0103 pentru ob\u021binerea pe nedrept de fonduri europene.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3851',
      },
    ],
  },
  {
    name: 'Niculae Florin',
    party: 'Independent',
    position: 'Fost primar al comunei Vidra, jude\u021bul Ilfov',
    position_type: 'mayor',
    crime: 'Luare de mit\u0103',
    sentence: '4 ani \u00eenchisoare',
    sentence_years: 4,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'DNA a consemnat prin hot\u0103r\u00e2rea definitiv\u0103 din 29 august 2014 condamnarea sa la 4 ani de \u00eenchisoare pentru luare de mit\u0103 \u00een form\u0103 continuat\u0103, cu confiscarea sumelor de 250.000 lei \u0219i 100.000 euro.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5219',
      },
    ],
  },
  {
    name: 'Georgescu Liviu',
    party: 'Independent',
    position: 'Fost primar al comunei Corn\u0103\u021belu, jude\u021bul D\u00e2mbovi\u021ba',
    position_type: 'mayor',
    crime: 'Instigare la folosirea sau prezentarea de documente ori declara\u021bii false pentru ob\u021binerea pe nedrept de fonduri europene',
    sentence: '1 an \u00eenchisoare cu suspendare',
    sentence_years: 1,
    conviction_year: 2013,
    status: 'convicted',
    details:
      'DNA a consemnat prin hot\u0103r\u00e2rea definitiv\u0103 din 27 martie 2013 condamnarea sa la 1 an de \u00eenchisoare cu suspendare condi\u021bionat\u0103 pentru instigare la ob\u021binerea pe nedrept de fonduri europene.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3998',
      },
    ],
  },
  {
    name: 'Nicolae Ilie',
    party: 'Independent',
    position: 'Fost primar al comunei Cochirleanca, jude\u021bul Buz\u0103u',
    position_type: 'mayor',
    crime: 'Complicitate la ob\u021binerea pe nedrept de fonduri europene; abuz \u00een serviciu; conflict de interese; inducere \u00een eroare a organelor judiciare',
    sentence: 'Trimis \u00een judecat\u0103 de DNA',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Ploie\u0219ti a anun\u021bat la 18 august 2016 trimiterea sa \u00een judecat\u0103 \u00een stare de libertate pentru mai multe infrac\u021biuni legate de fonduri europene \u0219i exercitarea func\u021biei. P\u00e2n\u0103 la 19 aprilie 2026 nu am identificat un comunicat DNA ulterior cu o solu\u021bie definitiv\u0103 \u00een aceast\u0103 cauz\u0103.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6507',
      },
    ],
  },
  {
    name: 'Hane\u0219 Gheorghe',
    party: 'Independent',
    position: 'Fost primar al comunei Gogo\u0219u, jude\u021bul Mehedin\u021bi',
    position_type: 'mayor',
    crime: 'Complicitate la folosirea sau prezentarea de documente ori declara\u021bii false pentru ob\u021binerea pe nedrept de fonduri europene',
    sentence: 'Trimis \u00een judecat\u0103 de DNA',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Craiova a anun\u021bat la 30 iulie 2021 trimiterea sa \u00een judecat\u0103 \u00een stare de libertate pentru complicitate la ob\u021binerea pe nedrept de fonduri europene. P\u00e2n\u0103 la 19 aprilie 2026 nu am identificat un comunicat DNA ulterior cu o solu\u021bie definitiv\u0103 \u00een aceast\u0103 cauz\u0103.',
    verified_at: '2026-04-19',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10528',
      },
    ],
  },
  {
    name: 'Marius Florinel Nicolaescu',
    party: 'PSD',
    position: 'Vicepre\u0219edinte al Consiliului Jude\u021bean Arge\u0219',
    position_type: 'local_official',
    crime:
      'Folosirea de informa\u021bii nedestinate publicit\u0103\u021bii pentru ob\u021binerea de foloase necuvenite; complicitate la abuz \u00een serviciu',
    sentence: 'Trimis \u00een judecat\u0103 de DNA',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Pite\u0219ti a anun\u021bat la 8 aprilie 2026 trimiterea sa \u00een judecat\u0103, \u00een stare de libertate, \u00een dosarul privind achizi\u021bia unor locuin\u021be protejate de c\u0103tre D.G.A.S.P.C. Arge\u0219. Procurorii sus\u021bin c\u0103, \u00een calitate de vicepre\u0219edinte al Consiliului Jude\u021bean Arge\u0219, ar fi comunicat informa\u021bii nepublice \u0219i ar fi sprijinit o achizi\u021bie public\u0103 viciat\u0103, cu un prejudiciu estimat de 316.000 lei \u0219i un folos necuvenit de peste 1,14 milioane lei pentru societatea v\u00e2nz\u0103toare.',
    verified_at: '2026-04-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13665',
      },
      {
        label: 'Consiliul Jude\u021bean Arge\u0219',
        kind: 'official',
        url: 'https://www.cjarges.ro/en/mandat-2024-2028',
      },
      {
        label: 'Profil Marius Nicolaescu',
        kind: 'profile',
        url: 'https://mariusnicolaescu.ro/',
      },
    ],
  },
  {
    name: 'Vintil\u0103 Marin',
    party: 'PSD',
    position: 'Fost primar al comunei Poiana Mare, jude\u021bul Dolj',
    position_type: 'mayor',
    crime:
      'Abuz \u00een serviciu; tentativ\u0103 la ob\u021binerea ilegal\u0103 de fonduri; fals material \u00een \u00eenscrisuri oficiale',
    sentence: 'Trimis \u00een judecat\u0103 de DNA',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Craiova a anun\u021bat la 9 aprilie 2026 trimiterea sa \u00een judecat\u0103 pentru fapte din perioada \u00een care era primar al comunei Poiana Mare. Dosarul prive\u0219te dou\u0103 contracte de lucr\u0103ri pentru drumuri locale, \u00een care procurorii sus\u021bin c\u0103 ar fi fost folosite \u00eenscrisuri false pentru ob\u021binerea sau justificarea unor pl\u0103\u021bi, cu p\u0103r\u021bi civile MDLPA \u0219i UAT Poiana Mare.',
    verified_at: '2026-04-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13667',
      },
      {
        label: 'Prim\u0103ria Poiana Mare',
        kind: 'official',
        url: 'https://www.poianamare.ro/lista-consilieri-37',
      },
    ],
  },
  {
    name: 'Cristian-Nicolae Ologu',
    party: 'PSD',
    position: 'Fost viceprimar al comunei Poiana Mare, jude\u021bul Dolj',
    position_type: 'local_official',
    crime:
      'Abuz \u00een serviciu; tentativ\u0103 la ob\u021binerea ilegal\u0103 de fonduri; fals material \u00een \u00eenscrisuri oficiale',
    sentence: 'Trimis \u00een judecat\u0103 de DNA',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Craiova a anun\u021bat la 9 aprilie 2026 trimiterea sa \u00een judecat\u0103 pentru fapte din perioada \u00een care era viceprimar al comunei Poiana Mare. Rechizitoriul men\u021bioneaz\u0103 semnarea unor documente de lucr\u0103ri care ar fi atestat lucr\u0103ri neexecutate efectiv \u00een dou\u0103 proiecte de drumuri locale.',
    verified_at: '2026-04-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13667',
      },
      {
        label: 'Prim\u0103ria Poiana Mare',
        kind: 'official',
        url: 'https://poianamare.ro/nr.-..-854',
      },
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_dolj/consiliul-local/poiana-mare/',
      },
    ],
  },
  {
    name: 'Mihai-Sandu Ni\u021b\u0103',
    party: 'PSD',
    position: 'Fost prefect al jude\u021bului Ilfov; fost consilier jude\u021bean',
    position_type: 'other',
    geography: { county: 'Ilfov', basis: 'office' },
    crime: 'Abuz \u00een serviciu',
    sentence: 'Trimis \u00een judecat\u0103 de DNA',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA a anun\u021bat la 7 ianuarie 2022 trimiterea sa \u00een judecat\u0103 pentru abuz \u00een serviciu. Procurorii sus\u021bin c\u0103, la 1 noiembrie 2019, \u00een calitate de prefect al jude\u021bului Ilfov, ar fi emis un ordin privind constatarea dreptului de proprietate asupra unui imobil din comuna Dobroe\u0219ti pe baza unei documenta\u021bii oficiale false \u0219i incomplete.',
    verified_at: '2026-04-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10787',
      },
      {
        label: 'Jurnalul de Ilfov',
        kind: 'press',
        url: 'https://jurnaluldeilfov.ro/mihai-sandu-nita-este-noul-prefect-al-judetului-ilfov/',
      },
    ],
  },
  {
    name: 'Adrian Viorel Nicolaescu',
    party: 'PNL',
    position: 'Fost prefect al jude\u021bului Constan\u021ba',
    position_type: 'other',
    geography: { county: 'Constan\u021ba', basis: 'office' },
    crime: 'Abuz \u00een serviciu cu consecin\u021be deosebit de grave',
    sentence: '4 ani \u00eenchisoare',
    sentence_years: 4,
    conviction_year: 2025,
    status: 'convicted',
    details:
      'DNA a consemnat condamnarea definitiv\u0103 pronun\u021bat\u0103 de Curtea de Apel Constan\u021ba la 30 aprilie 2025: 4 ani de \u00eenchisoare pentru abuz \u00een serviciu cu consecin\u021be deosebit de grave. Dosarul prive\u0219te refuzul \u0219i blocarea emiterii unor titluri de proprietate pentru 19 hectare de teren de pe malul lacului Siutghiol, \u00een perioada mandatului s\u0103u de prefect.',
    verified_at: '2026-04-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13067',
      },
      {
        label: 'PNL Constan\u021ba',
        kind: 'profile',
        url: 'https://pnlconstanta.ro/istoric-prefecti/',
      },
    ],
  },
  {
    name: 'George Laz\u0103r',
    party: 'PNL',
    position: 'Secretar de stat \u00een Ministerul Energiei; pre\u0219edinte PNL Neam\u021b',
    position_type: 'secretary_of_state',
    crime:
      'Folosirea influen\u021bei sau autorit\u0103\u021bii \u00een scopul ob\u021binerii de foloase necuvenite',
    sentence: 'Trimis \u00een judecat\u0103 de DNA',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Bac\u0103u a anun\u021bat la 29 iulie 2024 trimiterea sa \u00een judecat\u0103, sus\u021bin\u00e2nd c\u0103, \u00een septembrie 2022, ca secretar de stat \u0219i pre\u0219edinte al unei organiza\u021bii jude\u021bene de partid, \u0219i-ar fi folosit influen\u021ba asupra conducerii Romsilva pentru men\u021binerea unei persoane \u00een func\u021bia de director al Direc\u021biei Silvice Neam\u021b.',
    verified_at: '2026-04-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12645',
      },
      {
        label: 'Focus Energetic',
        kind: 'press',
        url: 'https://www.focus-energetic.ro/presedintele-pnl-neamt-numit-secretar-de-stat-la-ministerul-energiei-79583.html',
      },
    ],
  },
  {
    name: 'Constantin-Flavius Nedelcea',
    party: 'PSD',
    position:
      'Fost secretar de stat \u00een Ministerul Economiei; fost vicepre\u0219edinte al Consiliului Jude\u021bean Cara\u0219-Severin',
    position_type: 'secretary_of_state',
    crime: 'Instigare la abuz \u00een serviciu',
    sentence: 'Trimis \u00een judecat\u0103 de DNA',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA Timi\u0219oara a anun\u021bat la 17 decembrie 2025 trimiterea sa \u00een judecat\u0103 pentru instigare la abuz \u00een serviciu. Procurorii sus\u021bin c\u0103, \u00een perioada octombrie 2024 - ianuarie 2025, ar fi determinat mutarea temporar\u0103 a unei persoane din conducerea Comisariatului Jude\u021bean pentru Protec\u021bia Consumatorilor Cara\u0219-Severin, \u00een alt scop dec\u00e2t interesul institu\u021biei.',
    verified_at: '2026-04-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13417',
      },
      {
        label: 'InfoCS',
        kind: 'press',
        url: 'https://www.infocs.ro/video-flavius-nedelcea-a-fost-ales-in-functia-de-vicepresedinte-al-cj/',
      },
    ],
  },
  {
    name: 'Niculae Havrile\u021b',
    party: 'PNL',
    position:
      'Fost secretar de stat \u00een Ministerul Economiei, Energiei \u0219i Mediului de Afaceri; fost pre\u0219edinte ANRE',
    position_type: 'secretary_of_state',
    crime: 'Ob\u021binere de foloase necuvenite de c\u0103tre o persoan\u0103 cu atribu\u021bii de supraveghere sau control',
    sentence: 'Trimis \u00een judecat\u0103 de DNA',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA a anun\u021bat la 10 septembrie 2024 trimiterea sa \u00een judecat\u0103 pentru fapte legate de perioada ulterioar\u0103 mandatului de pre\u0219edinte ANRE \u0219i de mandatul de secretar de stat. Procurorii sus\u021bin c\u0103 ar fi \u00eendeplinit \u00eens\u0103rcin\u0103ri pentru trei operatori economici priva\u021bi din energie \u00een intervalul de interdic\u021bie prev\u0103zut de lege, ob\u021bin\u00e2nd foloase necuvenite de 1.195.599 lei.',
    verified_at: '2026-04-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12660',
      },
      {
        label: 'Aspen Institute Romania',
        kind: 'profile',
        url: 'https://aspeninstitute.ro/people/niculae-havrilet/',
      },
    ],
  },
  {
    name: 'Ionel Minea',
    party: 'PSD',
    position: 'Fost secretar de stat \u00een Ministerul Transporturilor',
    position_type: 'secretary_of_state',
    geography: {
      county: 'București',
      basis: 'political_base',
      note: 'Candidat pe lista PSD București înainte de numirea ca secretar de stat.',
    },
    crime: 'Participa\u021bie improprie la abuz \u00een serviciu; participa\u021bie improprie la fals intelectual',
    sentence: 'Trimis \u00een judecat\u0103; prim\u0103 instan\u021b\u0103: \u00eencetare prin prescrip\u021bie, nedefinitiv',
    sentence_years: null,
    conviction_year: null,
    status: 'indicted',
    details:
      'DNA a anun\u021bat la 7 ianuarie 2022 trimiterea sa \u00een judecat\u0103 pentru c\u0103, dup\u0103 ce ar fi fost surprins conduc\u00e2nd cu 201 km/h pe autostrada A2 \u00een 2019, l-ar fi determinat pe \u0219eful s\u0103u de cabinet s\u0103 \u00ee\u0219i asume contraven\u021bia. \u00cen decembrie 2025, Tribunalul Ilfov a dispus \u00eencetarea procesului penal ca urmare a prescrip\u021biei, dar presa a consemnat c\u0103 solu\u021bia nu era definitiv\u0103; am p\u0103strat statusul de trimis \u00een judecat\u0103 p\u00e2n\u0103 la o solu\u021bie definitiv\u0103.',
    verified_at: '2026-04-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10787',
      },
      {
        label: 'Ziarul Financiar',
        kind: 'press',
        url: 'https://www.zf.ro/politica/premierul-tudose-l-a-numit-pe-ionel-minea-secretar-de-stat-in-ministerul-transporturilor-16729258',
      },
      {
        label: 'HotNews',
        kind: 'press',
        url: 'https://hotnews.ro/fostul-secretar-de-stat-de-la-transporturi-care-si-a-pus-seful-de-cabinet-sa-si-asume-o-amenda-in-locul-sau-a-scapat-de-proces-din-cauza-prescrierii-angajatul-care-l-a-acoperit-si-a-recunoscut-vina-2134699',
      },
    ],
  },
  {
    name: 'Ionel Arsene',
    party: 'PSD',
    position: 'Fost pre\u0219edinte al Consiliului Jude\u021bean Neam\u021b; fost deputat',
    position_type: 'county_council_president',
    crime: 'Trafic de influen\u021b\u0103',
    sentence: '6 ani \u0219i 8 luni \u00eenchisoare',
    sentence_years: 6.67,
    conviction_year: 2023,
    status: 'convicted',
    details:
      'DNA a consemnat condamnarea sa definitiv\u0103 din 10 martie 2023 la 6 ani \u0219i 8 luni de \u00eenchisoare pentru dou\u0103 infrac\u021biuni de trafic de influen\u021b\u0103, cu confiscarea sumelor de 80.000 euro \u0219i 80.000 lei. Anterior, DNA Bac\u0103u \u00eel trimisese \u00een judecat\u0103 \u00een 2018 pentru fapte legate de interven\u021bii promise pe l\u00e2ng\u0103 ANI \u0219i un primar din jude\u021bul Neam\u021b.',
    verified_at: '2026-04-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12001',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8897',
      },
      {
        label: 'AGERPRES',
        kind: 'press',
        url: 'https://agerpres.ro/justitie/2023/03/10/presedintele-cj-neamt-ionel-arsene-condamnat-definitiv-la-6-ani-si-8-luni-de-inchisoare--1073747',
      },
    ],
  },
  {
    name: 'Corneliu-Mugurel Cozmanciuc',
    party: 'PNL',
    position: 'Fost deputat de Neam\u021b; fost pre\u0219edinte PNL Neam\u021b',
    position_type: 'deputy',
    crime: 'Trafic de influen\u021b\u0103',
    sentence: 'Achitat definitiv',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Bac\u0103u l-a trimis \u00een judecat\u0103 la 23 februarie 2021 pentru trafic de influen\u021b\u0103 \u00een dosarul privind presupuse interven\u021bii pentru numirea conducerii Administra\u021biei Na\u021bionale Apele Rom\u00e2ne. Prin actualizarea oficial\u0103 din 20 februarie 2023, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea definitiv\u0103 a inculpa\u021bilor deoarece faptele nu exist\u0103.',
    verified_at: '2026-04-22',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10237',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/deputatul-pnl-corneliu-cozmanciuc-achitat-definitiv-pentru-trafic-de-influenta-in-dosarul-dna-privind-numirea-sefului-la-apele-romane-2227937',
      },
    ],
  },
  {
    name: 'Adrian Mladin',
    party: 'UNPR',
    position: 'Fost primar al comunei Jilava, județul Ilfov',
    position_type: 'mayor',
    crime: 'Luare de mită; constituire grup infracțional organizat; spălare de bani',
    sentence: '5 ani și 10 luni închisoare',
    sentence_years: 5.83,
    conviction_year: 2016,
    status: 'convicted',
    details:
      'DNA a consemnat condamnarea sa definitivă prin decizia penală nr. 300 din 14 iulie 2016, într-un dosar privind promisiuni de intervenții, eliberarea de documente și operațiuni imobiliare legate de terenuri din Jilava și Snagov.',
    verified_at: '2026-04-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7606',
      },
      {
        label: 'Mediafax',
        kind: 'press',
        url: 'https://www.mediafax.ro/social/primarii-din-snagov-si-jilava-retinuti-pentru-coruptie-9080981',
      },
      {
        label: 'DCNews',
        kind: 'press',
        url: 'https://www.dcnews.ro/iccj-primarul-snagovului-ramane-in-arest-preventiv_146168.html',
      },
    ],
  },
  {
    name: 'Apostol Mușat',
    party: 'PDL',
    position: 'Fost primar al comunei Snagov, județul Ilfov',
    position_type: 'mayor',
    crime: 'Trafic de influență; asociere pentru săvârșirea de infracțiuni',
    sentence: '4 ani închisoare',
    sentence_years: 4,
    conviction_year: 2016,
    status: 'convicted',
    details:
      'DNA a consemnat condamnarea sa definitivă prin decizia penală nr. 300 din 14 iulie 2016, în același dosar privind intervenții promise și operațiuni imobiliare din zona Snagov-Jilava.',
    verified_at: '2026-04-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7606',
      },
      {
        label: 'GSP',
        kind: 'press',
        url: 'https://www.gsp.ro/gsp-special/anchetele-gazetei/update-primarul-din-snagov-apostol-musat-pdl-acuzat-de-trafic-de-influenta-la-iccj-328977.html',
      },
    ],
  },
  {
    name: 'Gheorghe Roman',
    party: 'UNPR',
    position: 'Fost vicepreședinte al Consiliului Județean Ilfov',
    position_type: 'local_official',
    crime: 'Trafic de influență; asociere pentru săvârșirea de infracțiuni',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'DNA a consemnat condamnarea sa definitivă prin decizia penală nr. 300 din 14 iulie 2016, în dosarul în care au fost condamnați și foștii primari din Jilava și Snagov.',
    verified_at: '2026-04-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7606',
      },
      {
        label: 'DCNews',
        kind: 'press',
        url: 'https://www.dcnews.ro/iccj-primarul-snagovului-ramane-in-arest-preventiv_146168.html',
      },
    ],
  },
  {
    name: 'Gheorghe Băzăvan',
    party: 'PDL',
    position: 'Fost primar al comunei Malovăț, județul Mehedinți',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    sentence: 'Proces penal încetat ca urmare a prescripției',
    sentence_years: 0,
    conviction_year: 2023,
    status: 'prescribed',
    details:
      'DNA l-a trimis în judecată în iunie 2021 pentru abuz în serviciu legat de contracte și plăți ale primăriei. Prin actualizarea oficială din 13 octombrie 2023, DNA a consemnat încetarea definitivă a procesului penal ca urmare a prescripției.',
    verified_at: '2026-04-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10471',
      },
      {
        label: 'Sursa Zilei',
        kind: 'press',
        url: 'https://www.sursazilei.ro/mehedin%C5%A3i-primarul-din-malov%C4%83%C5%A3-re%C5%A3inut-dup%C4%83-ce-a-fost-prins-primind-mit%C4%83-20-000-de-euro/',
      },
    ],
  },
  {
    name: 'Cătălin-Iulian Martinuș',
    party: 'PNL',
    position: 'Fost primar al comunei Dobrovăț, județul Iași',
    position_type: 'mayor',
    crime: 'Abuz în serviciu; folosire sau prezentare de documente false pentru fonduri europene',
    sentence: 'Proces penal încetat ca urmare a prescripției',
    sentence_years: 0,
    conviction_year: 2023,
    status: 'prescribed',
    details:
      'DNA l-a trimis în judecată în 2015 într-un dosar privind fonduri europene și lucrări publice din comuna Dobrovăț. Prin actualizarea oficială din 7 aprilie 2023, DNA a consemnat încetarea procesului penal ca urmare a prescripției.',
    verified_at: '2026-04-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6818',
      },
      {
        label: 'News.ro',
        kind: 'press',
        url: 'https://www.news.ro/politic-intern/primarii-a-doua-comune-iesene-dar-si-un-viceprimar-membri-ai-pnl-vor-candida-pe-listele-psd-la-alegerile-locale-1922405001212024030821509579',
      },
    ],
  },
  {
    name: 'Vasile Ostanschi',
    party: 'PSD',
    position: 'Fost primar al comunei Stulpicani, județul Suceava',
    position_type: 'mayor',
    crime: 'Complicitate la folosire sau prezentare de documente false pentru fonduri europene',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2022,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'DNA a consemnat condamnarea sa definitivă prin decizia penală nr. 134 din 10 februarie 2022 la 2 ani de închisoare cu suspendare, într-un dosar privind cereri APIA și documente folosite pentru obținerea nelegală de fonduri.',
    verified_at: '2026-04-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11063',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9315',
      },
      {
        label: 'Monitorul de Suceava',
        kind: 'press',
        url: 'https://www.monitorulsv.ro/victorie-categorica-a-pnl-la-votul-pentru-consiliul-judetean-suceava_509a59/',
      },
    ],
  },
  {
    name: 'Constantin Moroșan',
    party: 'PSD',
    position: 'Fost primar al comunei Valea Moldovei, județul Suceava',
    position_type: 'mayor',
    crime: 'Complicitate la folosire sau prezentare de documente false pentru fonduri europene; folosirea funcției pentru favorizarea unor persoane',
    sentence: 'Achitat definitiv',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în 2019 în dosarul APIA din județul Suceava. Prin actualizarea oficială din 4 februarie 2025, DNA a consemnat că, pentru Constantin Moroșan, Curtea de Apel Suceava a dispus achitarea definitivă deoarece faptele nu există.',
    verified_at: '2026-04-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9315',
      },
      {
        label: 'SuceavaLive',
        kind: 'press',
        url: 'https://suceavalive.ro/primarul-constantin-morosan-dupa-20-de-ani-de-psd-va-candida-din-partea-pnl-la-alegerile-locale/',
      },
    ],
  },
  {
    name: 'Neculai Ionescu',
    party: 'PSD',
    position: 'Fost primar al comunei Homocea, județul Vrancea',
    position_type: 'mayor',
    crime: 'Tentativă la folosire sau prezentare de documente false pentru fonduri europene',
    sentence: 'Proces penal încetat ca urmare a prescripției',
    sentence_years: 0,
    conviction_year: 2022,
    status: 'prescribed',
    details:
      'DNA l-a trimis în judecată în iulie 2021 într-un dosar privind documente depuse la APIA pentru obținerea de fonduri. Prin actualizarea oficială din 23 decembrie 2022, DNA a consemnat încetarea procesului penal ca urmare a prescripției.',
    verified_at: '2026-04-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10471',
      },
      {
        label: 'Ziarul de Vrancea',
        kind: 'press',
        url: 'https://www.ziaruldevrancea.ro/actualitatea/stiri-locale/fostul-primar-de-la-homocea-neculai-ionescu-trimis-in-judecata-de-dna-intr-un-nou-dosar',
      },
    ],
  },
  {
    name: 'Eugen Antica',
    party: 'PDL',
    position: 'Fost primar al comunei Prăjești, județul Bacău',
    position_type: 'mayor',
    crime: 'Luare de mită; efectuarea de operațiuni financiare incompatibile cu funcția',
    sentence: '3 ani închisoare',
    sentence_years: 3,
    conviction_year: 2017,
    status: 'convicted',
    details:
      'DNA Bacău l-a trimis în judecată în 2015 pentru luare de mită și operațiuni financiare incompatibile cu funcția de primar. Prin comunicarea oficială din februarie 2017, DNA a consemnat condamnarea definitivă la 3 ani de închisoare.',
    verified_at: '2026-04-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6551',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8063',
      },
      {
        label: 'Onești Online',
        kind: 'press',
        url: 'https://www.onestionline.ro/politica/alegeri2012/alegeri_2012_locale.htm',
      },
    ],
  },
  {
    name: 'Păun Baba',
    party: 'PSD',
    position: 'Fost primar al comunei Șopotu Nou, județul Caraș-Severin',
    position_type: 'mayor',
    crime: 'Luare de mită în formă continuată',
    sentence: 'Achitat definitiv',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Timișoara l-a trimis în judecată în septembrie 2021 într-un dosar privind foloase pretinse în legătură cu un contract finanțat din fonduri nerambursabile. Prin actualizarea oficială din 9 februarie 2024, DNA a consemnat achitarea definitivă a fostului primar.',
    verified_at: '2026-04-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10544',
      },
      {
        label: 'Reșița.ro',
        kind: 'press',
        url: 'https://resita.ro/primar-achitat-dupa-ce-fusese-condamnat-de-prima-instanta-la-sase-ani-de-inchisoare/',
      },
    ],
  },
  {
    name: 'Laurențiu Neghină',
    party: 'PDL',
    position: 'Fost primar al municipiului Onești, județul Bacău',
    position_type: 'mayor',
    crime: 'Cumpărare de influență',
    sentence: '8 luni închisoare cu suspendare',
    sentence_years: 0.67,
    conviction_year: 2013,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'DNA a consemnat condamnarea definitivă din 18 decembrie 2013 pentru cumpărare de influență, într-un dosar privind intervenții promise la examenul de bacalaureat. Comunicatul oficial îl menționează sub numele Neghină Victor-Laurențiu.',
    verified_at: '2026-04-27',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4487',
      },
      {
        label: 'România Liberă',
        kind: 'press',
        url: 'https://romanialibera.ro/special/rezultate-alegeri-bacau-rocada-intre-usl-si-pdl-la-primariile-onesti-si-targu-ocna-267083/',
      },
    ],
  },
  {
    name: 'Liviu Spătaru',
    party: 'PNL',
    position: 'Fost primar al municipiului Reșița, județul Caraș-Severin',
    position_type: 'mayor',
    crime: 'Luare de mită; abuz în serviciu',
    sentence: '3 ani închisoare',
    sentence_years: 3,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'DNA a consemnat condamnarea sa definitivă prin decizia penală nr. 438 din 28 martie 2014 a Curții de Apel Craiova, într-un dosar privind foloase necuvenite și contracte atribuite de serviciul public al Consiliului Local Reșița.',
    verified_at: '2026-04-29',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4780',
      },
      {
        label: 'Evenimentul Zilei',
        kind: 'press',
        url: 'https://evz.ro/primarul-resitei-cercetat-de-dna-435669.html',
      },
    ],
  },
  {
    name: 'Vitalie Stanciu',
    party: 'PSD',
    position: 'Fost primar al orașului Balș, județul Olt',
    position_type: 'mayor',
    crime: 'Abuz în serviciu; fals intelectual',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'DNA a consemnat condamnarea sa definitivă prin decizia penală nr. 761 din 5 iunie 2014 a Curții de Apel Craiova, într-un dosar privind documente folosite pentru obținerea nelegală de fonduri SAPARD.',
    verified_at: '2026-04-29',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4992',
      },
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/stiri/dna/primar-pesedist-din-olt-trimis-in-judecata-pentru-abuz-in-serviciu-1140003',
      },
    ],
  },
  {
    name: 'Vasile Zbîrciog',
    party: 'PSD',
    position: 'Primar al comunei Străoane, județul Vrancea',
    position_type: 'mayor',
    crime: 'Cumpărare de influență',
    sentence: '1 an închisoare cu suspendare',
    sentence_years: 1,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'DNA a consemnat condamnarea sa definitivă prin decizia penală nr. 225/A din 19 martie 2014 a Curții de Apel Galați, într-un dosar privind cumpărare de influență legată de examenul de bacalaureat.',
    verified_at: '2026-04-29',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4762',
      },
      {
        label: 'Monitorul de Vrancea',
        kind: 'press',
        url: 'https://www.monitoruldevrancea.ro/2020/09/10/straoane-primarul-vasile-zbirciog-vom-continua-lupta-pentru-modernizarea-si-dezvoltarea-comunei-noastre/',
      },
    ],
  },
  {
    name: 'Constantin Mihuțescu',
    party: 'PSD',
    position: 'Fost primar al comunei Baia de Fier, județul Gorj',
    position_type: 'mayor',
    crime: 'Instigare la abuz în serviciu',
    sentence: '1 an închisoare cu suspendare',
    sentence_years: 1,
    conviction_year: 2011,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'DNA a consemnat condamnarea sa definitivă prin decizia penală nr. 363 din 10 noiembrie 2011 a completului de 5 judecători al ÎCCJ, în dosarul în care a fost condamnat și Dan Ilie Morega.',
    verified_at: '2026-04-29',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=2776',
      },
      {
        label: 'Pandurul',
        kind: 'press',
        url: 'https://www.pandurul.ro/articol/mihutescu-invins-de-psd-in-alegerile-locale_32840.html',
      },
    ],
  },
  {
    name: 'Gheorghe Lupu',
    party: 'PDL',
    position: 'Fost primar al orașului Zărnești, județul Brașov',
    position_type: 'mayor',
    crime: 'Abuz în serviciu; uz de fals',
    sentence: '1 an închisoare cu suspendare',
    sentence_years: 1,
    conviction_year: 2012,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'DNA a consemnat condamnarea sa definitivă prin decizia penală nr. 2160 din 20 iunie 2012 a ÎCCJ, într-un dosar privind abuz în serviciu, uz de fals și prejudicii către Primăria Zărnești.',
    verified_at: '2026-04-29',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3399',
      },
      {
        label: 'România Curată',
        kind: 'press',
        url: 'https://www.romaniacurata.ro/partidul-ecologist-sustine-un-candidat-care-vrea-sa-inlesneasca-constructiile-in-parcul-national-piatra-craiului/',
      },
    ],
  },
  {
    name: 'Dorin Mircea Malii',
    party: 'PSD',
    position: 'Primar al comunei Șipote, județul Iași; fost viceprimar',
    position_type: 'mayor',
    crime: 'Complicitate la folosire sau prezentare de documente false pentru fonduri europene; fals intelectual',
    sentence: '1 an și 5 luni închisoare cu suspendare',
    sentence_years: 1.42,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'DNA a consemnat condamnarea sa definitivă prin decizia penală nr. 477 din 17 iunie 2016 a Curții de Apel Iași, într-un dosar privind documente false depuse pentru un proiect al comunei Șipote.',
    verified_at: '2026-04-29',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7532',
      },
      {
        label: 'Inițiativa pentru o Justiție Curată',
        kind: 'press',
        url: 'https://justitiecurata.ro/primar-cu-ghinion-proaspat-alesului-din-sipote-condamnarea-cu-suspendare-i-a-tras-scaunul-de-sub-sezut/',
      },
    ],
  },
  {
    name: 'Victor Ponta',
    party: 'PSD',
    position: 'Fost prim-ministru al României; fost deputat de Gorj',
    position_type: 'prime_minister',
    geography: {
      county: 'Gorj',
      basis: 'constituency',
      note: 'A reprezentat județul Gorj în Camera Deputaților în perioada dosarului; mandatul nou din 2024 este în Dâmbovița, dar această fișă folosește circumscripția istorică relevantă cauzei.',
    },
    crime: 'Fals în înscrisuri sub semnătură privată; complicitate la evaziune fiscală; spălarea banilor',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul Turceni-Rovinari în 2015. La 28 decembrie 2023, un complet de cinci judecători al ÎCCJ a dispus achitarea definitivă.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6675',
      },
      {
        label: 'AGERPRES',
        kind: 'press',
        url: 'https://agerpres.ro/justitie/2023/12/28/victor-ponta-achitat-definitiv-in-dosarul-rovinari---turceni--1225581',
      },
      {
        label: 'Mediafax',
        kind: 'press',
        url: 'https://www.mediafax.ro/politic/alegeri-parlamentare-in-gorj-ponta-vrea-al-treilea-mandat-de-deputat-in-gorj-candideaza-si-fostul-sef-al-spitalului-universitar-10256132',
      },
      {
        label: 'G4Media',
        kind: 'press',
        url: 'https://www.g4media.ro/parlamentare2024-ponta-cap-de-lista-la-camera-deputatilor-in-psd-dambovita-m-am-saturat-sa-fiu-fostul.html',
      },
    ],
  },
  {
    name: 'Toni Greblă',
    party: 'PSD',
    position: 'Fost senator de Gorj; fost judecător la Curtea Constituțională',
    position_type: 'senator',
    geography: {
      county: 'Gorj',
      basis: 'constituency',
      note: 'Senator ales în Circumscripția electorală nr. 20 Gorj.',
    },
    crime:
      'Trafic de influență; efectuare de operațiuni financiare incompatibile; constituire de grup infracțional organizat; fals în declarații',
    sentence: 'Achitat definitiv (2019)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în 2015. ÎCCJ l-a achitat definitiv în 2019 în dosarul privind acuzațiile de trafic de influență, fals în declarații și grup infracțional organizat.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6660',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/final-in-procesul-secretarului-general-al-guvernului-achitat-in-prima-instanta-toni-grebla-asteapta-decizia-finala-1151886',
      },
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=ACE143D7-7865-4D18-90F9-7B7135E59294',
      },
    ],
  },
  {
    name: 'Theodor-Cătălin Nicolescu',
    party: 'PNL',
    position: 'Fost deputat de Argeș; fost vicepreședinte ANRP',
    position_type: 'deputy',
    geography: {
      county: 'Argeș',
      basis: 'constituency',
      note: 'Deputat ales în județul Argeș; se folosește circumscripția parlamentară.',
    },
    crime: 'Luare de mită în formă continuată',
    sentence: '8 ani închisoare cu executare',
    sentence_years: 8,
    conviction_year: 2019,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'DNA l-a trimis în judecată în dosarul ANRP în 2015. În 2019, ÎCCJ l-a condamnat definitiv la 8 ani de închisoare pentru luare de mită; pentru acuzația de abuz în serviciu a fost achitat.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6190',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/verdicte-in-dosarul-anrp-horia-georgescu-si-ingrid-mocanu-achitati-definitiv-theodor-nicolescu-condamnat-la-8-ani-de-inchisoare-1197936',
      },
      {
        label: 'Mediafax',
        kind: 'press',
        url: 'https://www.mediafax.ro/politic/rezultate-alegeri-parlamentare-2012-arges-10380069',
      },
    ],
  },
  {
    name: 'Sebastian Ghiță',
    party: 'PSD',
    position: 'Fost deputat de Prahova',
    position_type: 'deputy',
    geography: {
      county: 'Prahova',
      basis: 'constituency',
      note: 'Deputat ales în Prahova; se folosește circumscripția parlamentară.',
    },
    crime: 'Trafic de influență; instigare la fals în înscrisuri sub semnătură privată',
    sentence: 'Dosar restituit definitiv la DNA în camera preliminară (2025)',
    sentence_years: null,
    conviction_year: null,
    status: 'investigated',
    details:
      'DNA l-a trimis în judecată în 2022 în dosarul „Taxă pentru contracte IT”. În septembrie 2025, Curtea de Apel Ploiești a dispus definitiv restituirea cauzei la DNA, astfel că profilul este urmărit ca dosar aflat din nou în fază de anchetă/procedură prealabilă.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11536',
      },
      {
        label: 'G4Media',
        kind: 'press',
        url: 'https://www.g4media.ro/fugarul-sebastian-ghita-mai-scapa-de-un-dosar-cazul-taxa-pentru-contracte-it-a-fost-restituit-la-dna-decizia-este-definitiva-fostul-deputat-era-acuzat-ca-a-primit-comisioane-de.html',
      },
      {
        label: 'Antena 3',
        kind: 'press',
        url: 'https://www.antena3.ro/politica/romania-tv-intra-in-parlament-omul-de-afaceri-sebastian-ghita-ales-deputat-de-prahova-195675.html',
      },
    ],
  },
  {
    name: 'Markó Attila-Gábor',
    party: 'UDMR',
    position: 'Fost deputat de Covasna; fost subsecretar de stat',
    position_type: 'deputy',
    geography: {
      county: 'Covasna',
      basis: 'constituency',
      note: 'Deputat ales în județul Covasna, colegiul Sfântu Gheorghe.',
    },
    crime: 'Abuz în serviciu contra intereselor publice, cu consecințe deosebit de grave',
    sentence: '3 ani închisoare cu suspendarea condiționată a executării pedepsei',
    sentence_years: 3,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'DNA a consemnat condamnarea definitivă pronunțată de Curtea de Apel Ploiești la 26 noiembrie 2014 în dosarul retrocedării Colegiului „Székely Mikó” din Sfântu Gheorghe.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5666',
      },
      {
        label: 'Mesagerul de Covasna',
        kind: 'press',
        url: 'https://mesageruldecovasna.ro/fostul-subsecretar-de-stat-marko-attila-a-castigat-mandatul-de-deputat-la-sfantu-gheorghe/',
      },
    ],
  },
  {
    name: 'Călin Popescu-Tăriceanu',
    party: 'PNL',
    position: 'Fost prim-ministru al României; fost președinte al Senatului',
    position_type: 'prime_minister',
    geography: {
      county: 'București',
      basis: 'constituency',
      note: 'Senator ales în Circumscripția electorală nr. 42 București; se folosește circumscripția parlamentară.',
    },
    crime: 'Luare de mită',
    sentence: 'Achitat definitiv (2025)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a pus în mișcare acțiunea penală în 2021 într-un dosar privind o presupusă mită de 800.000 USD. La 2 iunie 2025, ÎCCJ a respins apelul DNA și a menținut achitarea definitivă.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'G4Media',
        kind: 'press',
        url: 'https://www.g4media.ro/tariceanu-a-fost-trimis-in-judecata-de-dna-in-dosarul-mitei-de-800-000-de-dolari.html',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/amphtml/stiri/actualitate/justitie/fostul-premier-calin-popescu-tariceanu-achitat-definitiv-in-dosarul-in-care-a-fost-acuzat-ca-a-luat-mita-800-000-de-dolari-3267789',
      },
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/fisasenator.aspx?parlamentarid=522afea4-b00c-44ec-802f-be592c406a5c',
      },
    ],
  },
  {
    name: 'Ludovic Orban',
    party: 'PNL',
    position: 'Fost prim-ministru al României; fost deputat de București',
    position_type: 'prime_minister',
    geography: {
      county: 'București',
      basis: 'constituency',
      note: 'Dosarul privea campania pentru Primăria Capitalei; Orban a fost deputat ales în București în legislaturile relevante.',
    },
    crime: 'Folosirea influenței în scopul obținerii de foloase necuvenite',
    sentence: 'Achitat definitiv (2018)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în 2016, susținând că ar fi cerut bani pentru promovarea campaniei la Primăria Capitalei. ÎCCJ a respins apelul DNA și a menținut achitarea definitivă în martie 2018.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=e0d59a9b-6d02-46d1-a748-18a7a0b93cf1',
      },
      {
        label: 'Rador',
        kind: 'press',
        url: 'https://www.rador.ro/2018/03/05/presedintele-pnl-ludovic-orban-a-fost-achitat-definitiv-de-inalta-curte-de-casatie-si-justitie/',
      },
      {
        label: 'AGERPRES',
        kind: 'press',
        url: 'https://agerpres.ro/documentare/2020/12/22/presedintele-pnl-ludovic-orban-ales-presedinte-al-camerei-deputatilor-fisa-biografica--631942',
      },
    ],
  },
  {
    name: 'Vasile Blaga',
    party: 'PDL',
    position: 'Fost senator; fost ministru al Internelor',
    position_type: 'senator',
    geography: {
      county: 'București',
      basis: 'constituency',
      note: 'Pentru perioada faptelor anchetate, era senator ales în București; mandatul din 2024 este în Timiș.',
    },
    crime: 'Complicitate la trafic de influență',
    sentence: 'Achitat definitiv (2022)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a acuzat că ar fi primit 700.000 euro în perioada 2011-2012, în legătură cu atribuirea unor contracte publice. ÎCCJ a menținut definitiv achitarea în iunie 2022.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=2972FF7A-D452-4AAC-86BC-AF263DD5A32B',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/amphtml/stiri/actualitate/justitie/vasile-blaga-a-fost-achitat-definitiv-intr-un-dosar-de-trafic-de-influenta-1990383',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7882',
      },
    ],
  },
  {
    name: 'Ion Ariton',
    party: 'PDL',
    position: 'Fost ministru al Economiei; fost senator de Sibiu',
    position_type: 'minister',
    geography: {
      county: 'Sibiu',
      basis: 'constituency',
      note: 'Senator ales în Circumscripția electorală nr. 34 Sibiu; se folosește circumscripția parlamentară.',
    },
    crime: 'Participație improprie la abuz în serviciu; folosirea influenței în scopul obținerii de foloase necuvenite',
    sentence: 'Achitat definitiv (2018)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'Trimis în judecată în dosarul „Gala Bute”, fiind acuzat că ar fi determinat companii din subordinea Ministerului Economiei să sponsorizeze evenimentul. Achitarea sa a rămas definitivă la ÎCCJ în iunie 2018.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=98D72C53-DA2E-44E8-8376-3A90C08E835B',
      },
      {
        label: 'Turnul Sfatului',
        kind: 'press',
        url: 'https://www.turnulsfatului.ro/2018/06/05/ariton-achitat-definitiv-dosarul-gala-bute-elena-udrea-primit-sase-ani-cu-executare-105904/',
      },
      {
        label: 'Mesagerul de Sibiu',
        kind: 'press',
        url: 'https://mesageruldesibiu.ro/ariton-judecata/',
      },
    ],
  },
  {
    name: 'Cristian Poteraș',
    party: 'PDL',
    position: 'Fost primar al Sectorului 6 București',
    position_type: 'mayor',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă a fost cea de primar al Sectorului 6 București.',
    },
    crime: 'Abuz în serviciu contra intereselor publice, în formă continuată',
    sentence: '8 ani închisoare cu executare',
    sentence_years: 8,
    conviction_year: 2015,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'DNA a consemnat condamnarea definitivă pronunțată de Curtea de Apel București în 2015, într-un dosar privind emiterea ilegală a unor titluri de proprietate pentru terenuri intravilane din București.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6348',
      },
      {
        label: 'TVR Info',
        kind: 'press',
        url: 'https://tvrinfo.ro/tribunalul-bucure-ti-fostul-primar-al-sectorului-6-cristian-poteras-eliberat-condi-ionat-decizia-este-definitiva_863000/',
      },
    ],
  },
  {
    name: 'Cătălin Florin Teodorescu',
    party: 'PDL',
    position: 'Fost deputat de Argeș; fost membru în comisii ANRP',
    position_type: 'deputy',
    geography: {
      county: 'Argeș',
      basis: 'constituency',
      note: 'Deputat ales în județul Argeș; se folosește circumscripția parlamentară.',
    },
    crime: 'Abuz în serviciu dacă funcționarul public a obținut un folos necuvenit pentru sine sau pentru altul',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată într-un dosar ANRP privind despăgubiri supraevaluate. Actualizarea DNA din 2024 consemnează achitarea definitivă dispusă de ÎCCJ prin decizia penală nr. 166/A din 27 aprilie 2023.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7596',
      },
      {
        label: 'Mediafax',
        kind: 'press',
        url: 'https://www.mediafax.ro/politic/rezultate-alegeri-parlamentare-2012-arges-10380069',
      },
    ],
  },
  {
    name: 'Paul Păcuraru',
    party: 'PNL',
    position: 'Fost ministru al Muncii; fost senator de Galați',
    position_type: 'minister',
    geography: {
      county: 'Galați',
      basis: 'constituency',
      note: 'Senator ales în Circumscripția electorală nr. 18 Galați; se folosește circumscripția parlamentară.',
    },
    crime: 'Luare de mită',
    sentence: 'Achitat definitiv (2011)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în decembrie 2008 pentru luare de mită, în legătură cu numirea conducerii ITM Gorj și contracte ale unor companii energetice. ÎCCJ a dispus achitarea definitivă în decembrie 2011.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=1128',
      },
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=2F4C69CA-7139-4E5B-A827-AB9E9518C362',
      },
      {
        label: 'Mediafax',
        kind: 'press',
        url: 'https://www.mediafax.ro/social/fostul-ministru-al-muncii-paul-pacuraru-si-dan-ilie-morega-achitati-definitiv-in-procesul-in-care-sunt-acuzati-de-coruptie-9073988',
      },
    ],
  },
  {
    name: 'Dan Ilie Morega',
    party: 'PNL',
    position: 'Fost deputat de Gorj; fost lider PNL Gorj',
    position_type: 'deputy',
    geography: {
      county: 'Gorj',
      basis: 'constituency',
      note: 'Deputat ales în Gorj și lider politic județean; cazul privea companii energetice din Gorj.',
    },
    crime: 'Dare de mită',
    sentence: 'Achitat definitiv (2011)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în decembrie 2008 pentru dare de mită, în același dosar cu Paul Păcuraru. ÎCCJ a respins recursul DNA și a menținut achitarea definitivă în decembrie 2011.',
    verified_at: '2026-04-30',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=1128',
      },
      {
        label: 'Mediafax',
        kind: 'press',
        url: 'https://www.mediafax.ro/social/fostul-ministru-al-muncii-paul-pacuraru-si-dan-ilie-morega-achitati-definitiv-in-procesul-in-care-sunt-acuzati-de-coruptie-9073988',
      },
      {
        label: 'Mediafax',
        kind: 'press',
        url: 'https://www.mediafax.ro/politic/deputatul-dan-ilie-morega-a-fost-numit-sef-la-unpr-gorj-8876152',
      },
    ],
  },
  {
    name: 'Ovidiu Ioan Silaghi',
    party: 'PNL',
    position: 'Fost ministru al Transporturilor; fost deputat de Satu Mare',
    position_type: 'minister',
    geography: {
      county: 'Satu Mare',
      basis: 'constituency',
      note: 'Deputat ales în Satu Mare și lider politic local; se folosește baza parlamentară și politică.',
    },
    crime: 'Trafic de influență',
    sentence: 'Cauză clasată (2018)',
    sentence_years: null,
    conviction_year: null,
    status: 'closed',
    details:
      'DNA a cerut în 2013 urmărirea penală pentru trafic de influență, în legătură cu presupuse intervenții la CNADNR și suma de 200.000 euro. Actualizarea DNA din 23 mai 2018 consemnează clasarea cauzei, întrucât nu au rezultat probe că o persoană a săvârșit presupusele fapte penale.',
    verified_at: '2026-05-02',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4511',
      },
    ],
  },
  {
    name: 'Sevil Shhaideh',
    party: 'PSD',
    position: 'Fost viceprim-ministru; fost ministru al Dezvoltării',
    position_type: 'minister',
    geography: {
      county: 'Teleorman',
      basis: 'case_location',
      note: 'Dosarul Belina a vizat transferul unor bunuri către județul Teleorman; nu există o circumscripție parlamentară proprie mai relevantă.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Achitată definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a trimis-o în judecată în dosarul Belina pentru abuz în serviciu legat de transferul Insulei Belina și al Brațului Pavel către județul Teleorman. Curtea de Apel București a dispus achitarea definitivă în februarie 2023.',
    verified_at: '2026-05-02',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8870',
      },
      {
        label: 'Radio România Actualități',
        kind: 'press',
        url: 'https://www.romania-actualitati.ro/stiri/romania/fostul-ministru-al-dezvoltarii-sevil-shhaideh-a-fost-achitata-definitiv-pentru-acuzatiile-de-abuz-in-serviciu-in-dosarul-belina-id174136.html',
      },
    ],
  },
  {
    name: 'Adrian Ionuț Gâdea',
    party: 'PSD',
    position: 'Fost președinte al Consiliului Județean Teleorman',
    position_type: 'county_council_president',
    geography: {
      county: 'Teleorman',
      basis: 'office',
      note: 'Funcția publică relevantă a fost cea de președinte al Consiliului Județean Teleorman.',
    },
    crime: 'Complicitate la abuz în serviciu; participație improprie la abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul Belina pentru acte legate de transferul și închirierea Insulei Belina și a Brațului Pavel. Curtea de Apel București a menținut achitarea și pentru Adrian Ionuț Gâdea în februarie 2023.',
    verified_at: '2026-05-02',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8870',
      },
      {
        label: 'Radio România Actualități',
        kind: 'press',
        url: 'https://www.romania-actualitati.ro/stiri/romania/fostul-ministru-al-dezvoltarii-sevil-shhaideh-a-fost-achitata-definitiv-pentru-acuzatiile-de-abuz-in-serviciu-in-dosarul-belina-id174136.html',
      },
    ],
  },
  {
    name: 'Rovana Plumb',
    party: 'PSD',
    position: 'Fost ministru; fost deputat de Dâmbovița; fost europarlamentar',
    position_type: 'minister',
    geography: {
      county: 'Dâmbovița',
      basis: 'constituency',
      note: 'Mandatele parlamentare relevante recente au fost obținute în Dâmbovița; se folosește circumscripția politică.',
    },
    crime: 'Complicitate la abuz în serviciu',
    sentence: 'Cauză clasată după respingerea cererii de urmărire penală',
    sentence_years: null,
    conviction_year: null,
    status: 'closed',
    details:
      'În dosarul Belina, DNA a solicitat încuviințarea urmăririi penale pentru Rovana Plumb, însă Camera Deputaților a respins cererea, iar DNA a consemnat clasarea față de aceasta.',
    verified_at: '2026-05-02',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8870',
      },
      {
        label: 'AGERPRES via Comisarul.ro',
        kind: 'press',
        url: 'https://www.comisarul.ro/articol/profil-de-parlamentar-rovana-plumb-deputat-psd-dam_862662.html',
      },
    ],
  },
  {
    name: 'Adriean Videanu',
    party: 'PDL',
    position: 'Fost ministru al Economiei; fost primar general al Capitalei',
    position_type: 'minister',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'A deținut funcția de primar general al municipiului București; pentru fișă se folosește funcția locală cea mai clară.',
    },
    crime: 'Constituire a unui grup infracțional organizat; participație improprie la delapidare',
    sentence: 'Achitat definitiv (2024)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'În dosarul Romgaz-Interagro, fostul ministru al Economiei Adriean Videanu a fost acuzat de DIICOT de constituire a unui grup infracțional organizat și participație improprie la delapidare. ÎCCJ a dispus achitarea definitivă în mai 2024.',
    verified_at: '2026-05-02',
    sources: [
      {
        label: 'Primăria Municipiului București',
        kind: 'official',
        url: 'https://doc.pmb.ro/monitorul_oficial/2006/aug_2006/august_bis.pdf',
      },
      {
        label: 'Radio România Actualități',
        kind: 'press',
        url: 'https://www.romania-actualitati.ro/stiri/romania/ioan-niculae-si-adriean-videanu-au-fost-achitati-definitiv-de-iccj-id193730.html',
      },
    ],
  },
  {
    name: 'Ana-Maria Pătru',
    party: 'Independent',
    position: 'Fost președinte al Autorității Electorale Permanente',
    position_type: 'secretary_of_state',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția relevantă a fost la Autoritatea Electorală Permanentă, instituție centrală cu sediul în București.',
    },
    crime: 'Trafic de influență; spălare a banilor',
    sentence: 'Achitată definitiv (2020)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a trimis-o în judecată în dosarul privind presupuse contracte AEP și sume totalizând 275.000 euro. Actualizarea oficială a DNA consemnează achitarea definitivă dispusă de Curtea de Apel București la 7 octombrie 2020.',
    verified_at: '2026-05-02',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7939',
      },
    ],
  },
  {
    name: 'Gabriel Oprea',
    party: 'UNPR',
    position: 'Fost viceprim-ministru; fost ministru al Afacerilor Interne; fost senator de București',
    position_type: 'minister',
    geography: {
      county: 'București',
      basis: 'constituency',
      note: 'Senator ales în Circumscripția electorală nr. 42 București; dosarul DIPI a vizat exercitarea funcției de ministru de Interne.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în mai 2016 în dosarul DIPI, pentru abuz în serviciu privind folosirea fondurilor operative pentru achiziția unui autoturism destinat folosinței ministrului. Actualizarea DNA din 22 iunie 2023 consemnează achitarea definitivă, întrucât faptele nu sunt prevăzute de legea penală.',
    verified_at: '2026-05-03',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7383',
      },
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=1985D876-858A-4060-B1AF-E8F78BFB7150',
      },
    ],
  },
  {
    name: 'Florian Bodog',
    party: 'PSD',
    position: 'Fost ministru al Sănătății; fost senator de Bihor',
    position_type: 'minister',
    geography: {
      county: 'Bihor',
      basis: 'constituency',
      note: 'Senator ales în Circumscripția electorală nr. 05 Bihor în mai multe legislaturi.',
    },
    crime: 'Abuz în serviciu; fals intelectual; fals în înscrisuri sub semnătură privată',
    sentence: 'Achitat definitiv (2026)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în august 2021 în dosarul privind presupusa angajare fictivă a unei consiliere la Ministerul Sănătății. Înalta Curte a dispus achitarea definitivă în februarie 2026.',
    verified_at: '2026-05-03',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10526',
      },
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=0d1387b3-1962-4d1d-bf45-a580db37da50',
      },
      {
        label: 'News.ro',
        kind: 'press',
        url: 'https://www.news.ro/social/fostul-ministru-sanatatii-florian-bodog-achitat-definitiv-dosarul-trimis-judecata-abuz-serviciu-decizia-pronuntata-complet-cinci-judecatori-iccj-au-argumentele-instantei-1922403702002026021722332231',
      },
    ],
  },
  {
    name: 'Nicolae Bănicioiu',
    party: 'PSD',
    position: 'Fost ministru al Sănătății; fost ministru al Tineretului și Sporturilor; fost deputat',
    position_type: 'minister',
    geography: {
      county: 'București',
      basis: 'case_location',
      note: 'Dosarul DNA privea influență asupra conducerii unor spitale publice din București și Ilfov; se folosește București ca loc principal al cauzei și al instituțiilor centrale.',
    },
    crime: 'Trafic de influență; luare de mită',
    sentence: 'Achitat definitiv (2025)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în decembrie 2021 pentru trafic de influență și luare de mită, în legătură cu presupuse sume primite de la oameni de afaceri care aveau contracte cu spitale publice. Actualizarea DNA din 28 ianuarie 2026 consemnează achitarea definitivă dispusă de ÎCCJ la 13 octombrie 2025.',
    verified_at: '2026-05-03',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10714',
      },
      {
        label: 'AGERPRES',
        kind: 'press',
        url: 'https://agerpres.ro/justitie/2025/10/13/nicolae-banicioiu-achitat-definitiv-intr-un-dosar-de-coruptie-el-scapa-si-de-plata-sumei-de-1-3-mili--1493100',
      },
    ],
  },
  {
    name: 'Iulian-Claudiu Manda',
    party: 'PSD',
    position: 'Europarlamentar; fost senator de Dolj; fost președinte PSD Dolj',
    position_type: 'member_european_parliament',
    geography: {
      county: 'Dolj',
      basis: 'political_base',
      note: 'Dosarul DNA viza folosirea influenței ca președinte al organizației județene Dolj a unui partid; a fost și senator de Dolj.',
    },
    crime: 'Folosirea influenței ori autorității unei funcții de conducere într-un partid',
    sentence: 'Proces încetat prin prescripție (2024)',
    sentence_years: 0,
    conviction_year: 2024,
    status: 'prescribed',
    details:
      'DNA l-a trimis în judecată în aprilie 2021 pentru folosirea influenței ca lider județean de partid în legătură cu AJPIS Dolj și beneficiari de ajutor social din Bratovoești. Actualizarea DNA din 27 mai 2024 consemnează încetarea definitivă a procesului penal ca urmare a prescripției.',
    verified_at: '2026-05-03',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10331',
      },
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=244DD5C3-8F96-4F23-8C7A-7B1C83A9A828',
      },
    ],
  },
  {
    name: 'Cosmin Șandru',
    party: 'PNL',
    position: 'Fost deputat de Timiș',
    position_type: 'deputy',
    geography: {
      county: 'Timiș',
      basis: 'constituency',
      note: 'Deputat de Timiș; cauza DNA privea un presupus aranjament politic legat de votul la moțiunea de cenzură din 2021.',
    },
    crime: 'Dare de mită',
    sentence: 'Achitat definitiv (2024)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în decembrie 2021 pentru dare de mită, într-un dosar privind presupusa promisiune de numiri în funcții publice pentru absența unui parlamentar de la votul unei moțiuni de cenzură. Actualizarea DNA din 21 februarie 2025 consemnează achitarea definitivă dispusă de ÎCCJ la 4 noiembrie 2024.',
    verified_at: '2026-05-03',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10743',
      },
      {
        label: 'Radio România Timișoara',
        kind: 'press',
        url: 'https://www.radiotimisoara.ro/administratie-politica/politica/deputatul-de-timis-cosmin-sandru-urmarit-pentru-dare-de-mita-se-autosuspenda-din-pnl-270118.html',
      },
    ],
  },
  {
    name: 'László Borbély',
    party: 'UDMR',
    position: 'Fost ministru al Mediului; fost deputat de Mureș',
    position_type: 'minister',
    geography: {
      county: 'Mureș',
      basis: 'constituency',
      note: 'Deputat UDMR ales în județul Mureș și lider politic județean; cazul DNA a fost legat de perioada mandatului de ministru.',
    },
    crime: 'Trafic de influență; fals în declarații de avere',
    sentence: 'Cerere de urmărire penală respinsă de Parlament',
    sentence_years: null,
    conviction_year: null,
    status: 'closed',
    details:
      'DNA a sesizat în 2012 procedura pentru obținerea cererii necesare urmăririi penale față de László Borbély, fost ministru al Mediului, pentru trafic de influență și fals în declarații. Camera Deputaților a respins cererile de încuviințare, inclusiv solicitarea reluată în 2015, astfel că nu a existat trimitere în judecată.',
    verified_at: '2026-05-03',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/faces/comunicat.xhtml?id=3116',
      },
      {
        label: 'Radio România Actualități',
        kind: 'press',
        url: 'https://www.romania-actualitati.ro/stiri/politica/deputatii-resping-urmarirea-penala-pentru-doi-fosti-ministri-id39988.html',
      },
      {
        label: 'Economica.net',
        kind: 'press',
        url: 'https://www.economica.net/camera-deputatilor-a-respins-cererea-de-incuviintare-a-inceperii-urmaririi-penale-a-lui-laszlo-borbely_97744.html',
      },
    ],
  },
  {
    name: 'Petre Tobă',
    party: 'Independent',
    position: 'Fost ministru al Afacerilor Interne; fost șef al Poliției Române',
    position_type: 'minister',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de ministru al Afacerilor Interne, instituție centrală cu sediul în București.',
    },
    crime: 'Favorizarea făptuitorului',
    sentence: 'Cauză clasată (2018)',
    sentence_years: null,
    conviction_year: null,
    status: 'closed',
    details:
      'DNA a dispus în septembrie 2016 efectuarea urmăririi penale față de Petre Tobă, fost ministru al Afacerilor Interne, pentru favorizarea făptuitorului în legătură cu dosarul DIPI. În noiembrie 2018, DNA a comunicat clasarea cauzei, pe motiv că fapta nu există.',
    verified_at: '2026-05-03',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7679',
      },
      {
        label: 'Realitatea.net',
        kind: 'press',
        url: 'https://www.realitatea.net/stiri/actual/de-ce-a-inchis-dna-dosarul-fostului-ministru-petre-toba_5dcc9272406af85273d757d5',
      },
    ],
  },
  {
    name: 'Valeriu Zgonea',
    party: 'PSD',
    position: 'Fost președinte al Camerei Deputaților; fost deputat de Dolj',
    position_type: 'deputy',
    geography: {
      county: 'Dolj',
      basis: 'constituency',
      note: 'Deputat ales în Dolj; dosarul DNA a vizat perioada în care era președinte al Camerei Deputaților.',
    },
    crime: 'Trafic de influență',
    sentence: 'Achitat definitiv (2022)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în ianuarie 2018 pentru trafic de influență, în legătură cu presupuse foloase de 62.143 lei și numirea unei persoane într-o funcție publică. Actualizarea DNA din 25 martie 2022 consemnează achitarea definitivă dispusă de Curtea de Apel București, întrucât fapta nu există.',
    verified_at: '2026-05-03',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8612',
      },
    ],
  },
  {
    name: 'Mihnea Costoiu',
    party: 'PSD',
    position: 'Fost ministru delegat pentru Învățământ Superior; fost senator de Gorj',
    position_type: 'minister',
    geography: {
      county: 'Gorj',
      basis: 'constituency',
      note: 'Senator ales în Circumscripția electorală nr. 20 Gorj; dosarul privea Baza Cutezătorii din București, dar baza parlamentară relevantă este Gorj.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Proces încetat prin prescripție (2023)',
    sentence_years: 0,
    conviction_year: 2023,
    status: 'prescribed',
    details:
      'DNA l-a trimis în judecată în martie 2018 în dosarul Baza Cutezătorii, privind semnarea unui act adițional la un contract de locațiune. Actualizarea DNA din 5 februarie 2024 consemnează încetarea definitivă a procesului penal prin prescripție și confiscarea sumei de 267.577 euro.',
    verified_at: '2026-05-03',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8745',
      },
      {
        label: 'Senatul României',
        kind: 'official',
        url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=2CC51EF1-3996-49C4-834F-31AA6872DDF2',
      },
    ],
  },
  {
    name: 'Lia Olguța Vasilescu',
    party: 'PSD',
    position: 'Primar al municipiului Craiova; fost ministru al Muncii',
    position_type: 'mayor',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția locală principală este cea de primar al municipiului Craiova, județul Dolj.',
    },
    crime: 'Luare de mită; folosirea influenței; spălare a banilor',
    sentence: 'Cauză clasată; dosar închis definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'closed',
    details:
      'DNA a dispus în 2016 punerea în mișcare a acțiunii penale și reținerea pentru acuzații legate de sponsorizări, campania electorală din 2012 și reabilitarea unor fațade din Craiova. După restituirea dosarului la DNA, presa locală a consemnat clasarea din 2020, iar în 2023 plângerile împotriva soluției de clasare au fost respinse definitiv.',
    verified_at: '2026-05-03',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7260',
      },
      {
        label: 'Gazeta de Sud',
        kind: 'press',
        url: 'https://www.gds.ro/eveniment/2020-12-30/de-ce-a-clasat-dna-dosarul-de-coruptie-al-olgutei-vasilescu/',
      },
      {
        label: 'Sursa Zilei',
        kind: 'press',
        url: 'https://www.sursazilei.ro/tribunalul-bucuresti-i-a-inchis-definitiv-dosarul-de-coruptie-al-primarului-craiovei-lia-olguta-vasilescu/',
      },
    ],
  },
  {
    name: 'Ioan Oltean',
    party: 'PDL',
    position: 'Fost deputat de Bistrița-Năsăud; fost lider PDL',
    position_type: 'deputy',
    geography: {
      county: 'Bistrița-Năsăud',
      basis: 'political_base',
      note: 'A fost lider al organizației județene Bistrița-Năsăud și deputat cu bază politică în acest județ.',
    },
    crime: 'Trafic de influență; complicitate la abuz în serviciu',
    sentence: 'Cauză închisă după restituirea dosarului la DNA',
    sentence_years: null,
    conviction_year: null,
    status: 'closed',
    details:
      'DNA l-a vizat în dosare privind folosirea influenței politice și despăgubiri ANRP. În dosarul ANRP, cauza a fost restituită definitiv la DNA în 2017 pentru neregularitatea rechizitoriului, iar presa a relatat ulterior că dosarul lui Ioan Oltean a fost închis prin clasare.',
    verified_at: '2026-05-03',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6898',
      },
      {
        label: 'Jurnalul',
        kind: 'press',
        url: 'https://jurnalul.ro/stiri/justitie/iccj-unul-dintre-dosarele-anrp-in-care-este-inculpat-ioan-oltean-restituit-definitiv-la-dna-737451.html',
      },
      {
        label: 'Gândul',
        kind: 'press',
        url: 'https://www.gandul.ro/actualitate/achitat-definitiv-fostul-deputat-ioan-oltean-acuza-dna-de-tortura-psihica-si-cere-statului-roman-despagubiri-de-400-000-e-20157994',
      },
    ],
  },
  {
    name: 'Mihai Tănăsescu',
    party: 'PSD',
    position: 'Fost ministru al Finanțelor Publice',
    position_type: 'minister',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de ministru al Finanțelor Publice, instituție centrală cu sediul în București.',
    },
    crime: 'Abuz în serviciu; luare de mită; trafic de influență; spălare a banilor',
    sentence: 'Cauză clasată (2018)',
    sentence_years: null,
    conviction_year: null,
    status: 'closed',
    details:
      'În dosarul Microsoft, DNA a cerut în 2014 începerea urmăririi penale față de Mihai Tănăsescu, fost ministru al Finanțelor. Comunicatul DNA din 2018 consemnează soluții de clasare pentru acuzațiile de luare de mită și spălare a banilor reținute în legătură cu acest dosar.',
    verified_at: '2026-05-03',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8667',
      },
    ],
  },
];

/**
 * County mapping — assigns each politician to a county (județ) based on
 * their position or known constituency. National-level officials (PM,
 * ministers without clear local ties) are mapped to 'București' only
 * when they held a local office there.
 */
export const countyOverrides = {
  // ── County Council Presidents ─────────────────────────
  'Nicușor Constantinescu': 'Constanța',
  'Constantin Nicolescu': 'Argeș',
  'Aristotel Căncescu': 'Brașov',
  'Horea Uioreanu': 'Cluj',
  'Nicolae Iotcu': 'Arad',
  'Gheorghe Bunea Stancu': 'Brăila',
  'Florin Țurcanu': 'Botoșani',
  'Adrian Duicu': 'Mehedinți',
  'Borboly Csaba': 'Harghita',
  'Mircea Cosma': 'Prahova',
  'Victor Mocanu': 'Buzău',
  'Dumitru Buzatu': 'Vaslui',
  'Ionel Arsene': 'Neam\u021b',
  'Florin Popescu': 'D\u00e2mbovi\u021ba',

  // ── Mayors ────────────────────────────────────────────
  'Radu Mazăre': 'Constanța',
  'Gheorghe Nichita': 'Iași',
  'Tudor Pendiuc': 'Argeș',
  'Gheorghe Ștefan': 'Neamț',
  'Cătălin Cherecheș': 'Maramureș',
  'Iulian Bădescu': 'Prahova',
  'Neculai Ontanu': 'București',
  'Minel Prina': 'Olt',
  'Antonie Solomon': 'Dolj',
  'Marian-Daniel Vanghelie': 'București',
  'Daniel Tudorache': 'București',
  'Clotilde Armand': 'București',
  'Cristian Popescu Piedone': 'București',
  'Sorin Oprescu': 'București',
  'Sorin Apostu': 'Cluj',
  'Romeo Stavarache': 'Bacău',
  'Mircia Gutău': 'Vâlcea',
  'Emilian Frâncu': 'Vâlcea',
  'Băran Aurică': 'Timiș',
  'Cristian Marius Mincă': 'Teleorman',
  'Iulian Miliare': 'Vaslui',
  'Gheorghe Percea': 'Caraș-Severin',
  'Gheorghe Vișovan': 'Maramureș',
  'Ovidiu Nemeș': 'Maramureș',
  'Vintil\u0103 Marin': 'Dolj',
  'M\u00e1rk Endre Dezs\u0151': 'Mure\u0219',
  'G\u00e1lfi \u00c1rp\u00e1d': 'Harghita',

  // ── Senators / Deputies with known constituency ───────
  'Viorel Ilie': 'Bacău',
  'Titus Corlățean': 'Dâmbovița',
  'Gheorghe Coman': 'Buzău',
  'Lucian Florin Pușcașu': 'Suceava',
  'Mihail Boldea': 'Galați',
  'Dan Păsat': 'Giurgiu',
  'Sorin Andi Pandele': 'Argeș',
  'Dorin Lazăr Maior': 'Brașov',
  'Nati Meir': 'Tulcea',
  'Vasile Duță': 'Bihor',
  'Mircia Chelaru': 'Argeș',
  'George-Adrian Scutaru': 'Buzău',
  'Mircea Banias': 'Constanța',
  'Daniel Gheorghe Rusu': 'Alba',
  'Marin Anton': 'Giurgiu',
  'Alexandru Mazăre': 'Constanța',
  'Niculae Bădălău': 'Giurgiu',
  'Ovidiu Marius Isailă': 'Olt',
  'Mirela-Florența Matichescu': 'Constanța',
  'Răzvan-Iulian Ciortea': 'Cluj',
  'Mihai Banu': 'Bacău',
  'Ioan Munteanu': 'Neamț',
  'Constantin Adăscăliței': 'Iași',
  'Mihai Alexandru Voicu': 'Dolj',
  'Mircea Roșca': 'Prahova',
  'Cornel Mircea Sămărtinean': 'Timiș',
  'Diniță Ion': 'Brașov',
  'Adrian Gurzău': 'Cluj',
  'Mircea Drăghici': 'Argeș',
  'Corneliu-Mugurel Cozmanciuc': 'Neam\u021b',
  'Adrian N\u0103stase': 'Prahova',
  'Elena Udrea': 'Neam\u021b',
  'Viorel Hrebenciuc': 'Bac\u0103u',
  'Cristian Rizea': 'Br\u0103ila',
  'Vlad Cosma': 'Prahova',
  'C\u0103t\u0103lin Marian R\u0103dulescu': 'Arge\u0219',
  '\u0218erban Mih\u0103ilescu': 'Teleorman',
  'Ion Stan': 'D\u00e2mbovi\u021ba',
  'Marian Ghiveciu': 'Buz\u0103u',
  'Diana Iovanovici-\u0218o\u0219oac\u0103': 'Ia\u0219i',
  'Gergely Olosz': 'Covasna',
  'Dan \u0218tefan Motreanu': 'C\u0103l\u0103ra\u0219i',

  // ── Ministers / national officials with clear local ties ─
  'Liviu Dragnea': 'Teleorman',
  'Darius Vâlcov': 'Olt',
  'Cristian Adomniței': 'Iași',
  'Costel Alexe': 'Iași',
  'Sorin Frunzăverde': 'Caraș-Severin',
  'Valerian Vreme': 'Bacău',
  'Mihai-Sandu Ni\u021b\u0103': 'Ilfov',
  'Adrian Viorel Nicolaescu': 'Constan\u021ba',
  'George Laz\u0103r': 'Neam\u021b',
  'Constantin-Flavius Nedelcea': 'Cara\u0219-Severin',
  'Niculae Havrile\u021b': 'Mure\u0219',
  'Decebal Traian Reme\u0219': 'Maramure\u0219',
  'Ioan Avram Mure\u0219an': 'Mure\u0219',
  'Victor Babiuc': 'Bra\u0219ov',
  'Relu Fenechiu': 'Ia\u0219i',
  'Miron Mitrea': 'Vrancea',
  'Monica Iacob-Ridzi': 'Hunedoara',
  'Zsolt Nagy': 'Mure\u0219',
  'Gabriel Sandu': 'Br\u0103ila',
  'Stelian Fuia': 'C\u0103l\u0103ra\u0219i',
  'Tudor Chiuariu': 'Mehedin\u021bi',
  'Dan \u0218ova': 'Olt',
  'Constantin Ni\u021b\u0103': 'Bra\u0219ov',
  'Cristian David': 'Vaslui',
  'Gabriel Berca': 'Bac\u0103u',
  'Varujan Vosganian': 'Ia\u0219i',
  'Alexandru-R\u0103zvan Cuc': 'Giurgiu',

  // ���─ Local officials from additions ────────────���───────
  'Ion Năftănilă': 'Argeș',
  'Viorel Mitea Roșca': 'Caraș-Severin',
  'Adrian Nicolae Domocoș': 'Bihor',
  'Dănuț Rentea': 'Gorj',
  'Vasile Olaru': 'Neamț',
  'Vasile Andreaș': 'Brașov',
  'Costel Tulițu': 'Dolj',
  'Dumitru Drăghici': 'Vâlcea',
  'Ion Moșoarcă': 'Caraș-Severin',
  'Ioan Jors': 'Mureș',
  'Sandu Costel': 'Iași',
  'Neculai Lupu': 'Vaslui',
  'Viorel Chiriță': 'Tulcea',
  'Ștefan Ionescu': 'Ialomița',
  'Vasile Aleca': 'Neamț',
  'Antonie Bunei': 'Caraș-Severin',
  'Ioana Bușe': 'Gorj',
  'Ioan Rădulescu': 'Ilfov',
  'Ioan Borduz': 'Caraș-Severin',
  'Mihai Chirica': 'Iași',
  'Nicu Silviu Odobasianu': 'Bihor',
  'Dorin Florea': 'Mureș',
  'Maria Precup': 'Mureș',
  'Petre Gheorghe': 'Ilfov',
  'Radu Cristian': 'Constanța',
  'Dragoș Chitic': 'Neamț',
  'Mircea Minea': 'Ilfov',
  'Cristian Maricel Cîrjaliu': 'Constanța',
  'Vasile Vieru': 'Vaslui',
  'Ion Florin Moț': 'Arad',
  'Fabian Laurențiu Costel Drocan': 'Mehedinți',
  'Pavăl Ioan': 'Suceava',
  'Soós Zoltán': 'Mureș',
  'Vergil Chițac': 'Constanța',
  'Cosmin Andrei': 'Botoșani',
  'Iulian Iacomi': 'Călărași',
  'Vlad Oprea': 'Prahova',
  'Dan Oloieru': 'Botoșani',
  'Dumitru-Verginel Gireadă': 'Botoșani',
  'Ionel Neagu': 'Teleorman',
  'Barti Tihamér': 'Harghita',
  'Todorică-Constantin Șerban': 'Brașov',
  'Eugen Nechita': 'Botoșani',
  'Ilie Ivanache': 'Botoșani',
  'Ioan Filip': 'Neamț',
  'Robert Sorin Negoiță': 'București',
  'Claudiu Daniel Chelariu': 'Botoșani',
  'Neculai Șchiopu': 'Botoșani',
  'Ionuț Voicu': 'Botoșani',
  'Iulian Dumitrescu': 'Prahova',
  'Aur Sandu': 'Vrancea',
  'Mihai Barbu': 'Vaslui',
  'Vasile Nic\u0103': 'Arge\u0219',
  'Gheorghe Cern\u0103tescu': 'Arge\u0219',
  'Gheorghe P\u0103tra\u0219cu': 'Arge\u0219',
  'Nicolae Radu': 'Arge\u0219',
  'Simion Emil': 'Arge\u0219',
  'Popa Ion': 'Arge\u0219',
  '\u0218tefan Ion': 'Arge\u0219',
  'Ivan Vasile Bebe': 'Arge\u0219',
  'Berevoianu Corneliu': 'Arge\u0219',
  'B\u0103l\u0103\u0219oiu Aurel': 'Arge\u0219',
  'Ene Florea': 'Arge\u0219',
  'B\u0103dulescu Ion': 'Arge\u0219',
  'Dincu\u021b\u0103 Daniel': 'Arge\u0219',
  'Langer Nicolae': 'Arge\u0219',
  '\u021auc\u0103 Gheorghe': 'Arge\u0219',
  'Ungurenu\u0219 Mihai': 'Arge\u0219',
  'Sec\u0103reanu Dumitru': 'Arge\u0219',
  'Cristescu Alexandru-Adrian': 'Arge\u0219',
  'Pepenel Nicolae-Cornel': 'Arge\u0219',
  'Tarb\u0103 Sever': 'Arge\u0219',
  'Tarb\u0103 Mihai Gheorghe': 'Arge\u0219',
  'Luca Ion': 'Arge\u0219',
  'Andrei Nicolae': 'Arge\u0219',
  'Cioflan Iulian': 'Arge\u0219',
  'Ciobanu Marcel': 'Arge\u0219',
  '\u0218erban Niculae': 'Arge\u0219',
  'Sm\u0103du Nicolae': 'Arge\u0219',
  'Ion Georgescu': 'Arge\u0219',
  'Bo\u021b\u00e2rc\u0103 Gheorghi\u021b\u0103': 'Arge\u0219',
  'Stoican Gheorghe': 'Arge\u0219',
  'Diaconu Nicolae': 'Arge\u0219',
  'Dumitrescu Mihail': 'Arge\u0219',
  'Lupu Sorin': 'Arge\u0219',
  'P\u0103dureanu Ion': 'Arge\u0219',
  'Popa Iulian': 'Prahova',
  'Manole Vasile': 'C\u0103l\u0103ra\u0219i',
  'Furtun\u0103 Gheorghe': 'Ia\u0219i',
  'Niculae Florin': 'Ilfov',
  'Georgescu Liviu': 'D\u00e2mbovi\u021ba',
  'Nicolae Ilie': 'Buz\u0103u',
  'Hane\u0219 Gheorghe': 'Mehedin\u021bi',
  'Marius Florinel Nicolaescu': 'Arge\u0219',
  'Cristian-Nicolae Ologu': 'Dolj',
  'Sorin Bala\u0219i': 'Bra\u0219ov',
  'Sik\u00f3 Imre': 'Covasna',
  'Gavril Lupu': 'Neam\u021b',
  'Grigore Marin': 'Dâmbovița',
  'Petre Zamfir': 'Neamț',
  'Costel Zamfir': 'Argeș',
  'Costel Vieriu': 'Ialomița',
  'Rizea Florian': 'Argeș',
  'Cioran Lucian': 'Argeș',
  'Tudose Elisaveta': 'Argeș',
  'Marian Ibric': 'Argeș',
  'Gheorghe Matei': 'Argeș',
  'Dumitru Voicu': 'Argeș',
  'Marin Ion': 'Argeș',
  'Vișan Ionel Dragoș': 'Argeș',
  'Poștoacă Damian-Ion': 'Argeș',
  'Constantin Iatagan': 'Argeș',
  'Niculaie Dochinoiu': 'Argeș',
  'Sevastian Pupăză-Roșu': 'Argeș',
  'Lucreția Cadar': 'Mureș',
  'Filimon Brian': 'Caraș-Severin',
  'Bocșe Raul Florin': 'Bihor',
  'Marian Cristinel Bîgiu': 'Buzău',
  'Florin Serghei Anghel': 'Prahova',
  'Marian Oprișan': 'Vrancea',
  'Andrei Volosevici': 'Prahova',
  'Teodor Neamțu': 'Sibiu',
  'Vasile Iliuță': 'Călărași',
  'Adrian Mladin': 'Ilfov',
  'Apostol Mușat': 'Ilfov',
  'Gheorghe Roman': 'Ilfov',
  'Gheorghe Băzăvan': 'Mehedinți',
  'Cătălin-Iulian Martinuș': 'Iași',
  'Vasile Ostanschi': 'Suceava',
  'Constantin Moroșan': 'Suceava',
  'Neculai Ionescu': 'Vrancea',
  'Eugen Antica': 'Bacău',
  'Păun Baba': 'Caraș-Severin',
  'Laurențiu Neghină': 'Bacău',
  'Liviu Spătaru': 'Caraș-Severin',
  'Vitalie Stanciu': 'Olt',
  'Vasile Zbîrciog': 'Vrancea',
  'Constantin Mihuțescu': 'Gorj',
  'Gheorghe Lupu': 'Brașov',
  'Dorin Mircea Malii': 'Iași',
};
