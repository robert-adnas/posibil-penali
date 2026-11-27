const dna = (id, label) => ({ label: `DNA – ${label}`, url: `https://www.dna.ro/comunicat.xhtml?id=${id}` });

const corlatean = dna(7387, 'comunicatul și actualizarea privind clasarea');
const economat2024 = dna(12760, 'comunicatul despre dosarul Economat din 2024');
const economat2026 = dna(13737, 'comunicatul despre dosarul Economat din 2026');
const vanghelieAppeal = dna(6521, 'actualizarea cu decizia definitivă');
const isailaConviction = dna(7817, 'comunicatul privind decizia definitivă');
const tudoracheConviction = dna(13033, 'comunicatul privind decizia definitivă');
const badalauReferral = dna(11663, 'trimiterea în judecată');
const piedoneAnpc = dna(13141, 'trimiterea în judecată în dosarul ANPC');
const vosganianSenate = {
  label: 'Senatul României – stenograma din 12 februarie 2015',
  url: 'https://www.senat.ro/PAGINI/Stenograme/Stenograme2015/15.02.12.pdf',
};
const vosganianClosure = {
  label: 'Economica / Agerpres – clasarea cauzei',
  url: 'https://www.economica.net/diicot-a-clasat-partea-din-dosarul-romgaz-care-l-viza-pe-varujan-vosganian-surse-agerpres_510376.html',
};
const puscasuConviction = dna(4454, 'comunicatul privind decizia definitivă');
const sosoacaReferral = {
  label: 'HotNews – comunicatul Parchetului General privind trimiterea în judecată',
  url: 'https://hotnews.ro/diana-sosoaca-trimisa-in-judecata-ce-acuzatii-ii-aduce-parchetul-general-2302067',
};
const ivanacheReferral = dna(13456, 'buletinul de presă din 8 ianuarie 2026');
const pleteaConviction = {
  label: 'Vremea Nouă – decizia în apel',
  url: 'https://www.vremeanoua.ro/inchisoare-cu-supendare-pentru-benone-pletea-fostul-primar-al-comunei-ibanesti-care-in-2020-a-fraudat-alegerile-locale/',
};
const picuAndGutanu = dna(12942, 'buletinul de presă din 9 iulie 2025');

// Public case evidence checked against the underlying documents. Kept apart from
// editorial profile snapshots and the internal reverification registry.
export const evidenceReviewDate = '2026-08-03';

export const profileEvidence = {
  'Cristian Popescu Piedone': {
    status: 'indicted',
    statusSource: piedoneAnpc,
    chronologies: [
      {
        title: 'Dosarul controlului ANPC la hotelul din Sinaia',
        events: [
          {
            date: '2025-10-15', label: 'Trimitere în judecată',
            note: 'DNA a comunicat trimiterea în judecată în legătură cu presupusa divulgare a informațiilor despre un control ANPC.',
            source: piedoneAnpc,
          },
        ],
      },
      {
        title: 'Dosarul Colectiv',
        events: [
          {
            date: '2023-06-21', label: 'Achitare definitivă',
            note: 'Înalta Curte a admis recursul în casație și a dispus achitarea.',
            source: {
              label: 'Digi24 – achitarea definitivă',
              url: 'https://www.digi24.ro/stiri/actualitate/justitie/piedone-iesit-din-inchisoare-nu-cer-despagubiri-statului-duc-mandatul-pana-la-capat-piedone-n-o-muritu-doar-putin-s-o-odihnitu-2394969',
            },
          },
        ],
      },
      {
        title: 'Litigiul privind constatarea ANI',
        events: [
          {
            date: '2024-02-28', label: 'Constatarea unui conflict de interese',
            note: 'ANI a comunicat constatarea unui conflict de interese administrativ legat de numirea într-o comisie a unei rude prin alianță.',
            source: {
              label: 'ANI – comunicatul privind conflictul de interese',
              url: 'https://integritate.eu/incidente-de-integritate-3-persoane-prevazute-de-legea-nr-176-2010/',
            },
          },
          {
            date: '2026-02-12', label: 'Soluție definitivă în litigiul cu ANI',
            note: 'Înalta Curte a respins recursul în litigiul privind constatarea ANI.',
            source: {
              label: 'Digi24 – soluția definitivă',
              url: 'https://www.digi24.ro/stiri/actualitate/politica/cristian-popescu-piedone-nu-mai-poate-ocupa-functii-publice-timp-de-3-ani-dupa-ce-a-pierdut-definitiv-procesul-cu-ani-3630279',
            },
          },
        ],
      },
    ],
  },
  'Daniel Tudorache': {
    status: 'convicted',
    statusSource: tudoracheConviction,
    chronologies: [{
      title: 'Dosarul diamantelor',
      events: [
        {
          date: '2025-01-21', label: 'Condamnare definitivă în apel',
          note: 'Înalta Curte a stabilit o pedeapsă de 3 ani de închisoare cu suspendare sub supraveghere.',
          source: tudoracheConviction,
        },
        {
          date: '2026-01-12', label: 'Recurs în casație respins',
          note: 'Înalta Curte a respins calea extraordinară de atac. Condamnarea definitivă a rămas în vigoare.',
          source: {
            label: 'G4Media – relatarea despre recursul în casație',
            url: 'https://www.g4media.ro/completul-de-5-judecatori-al-instantei-supreme-a-respins-un-recurs-in-casatie-al-fostului-primar-psd-daniel-tudorache-in-dosarul-diamantelor-fostul-edil-fusese-condamnat-definiti.html',
          },
        },
      ],
    }],
  },
  'Diana Iovanovici-Șoșoacă': {
    status: 'indicted',
    statusSource: sosoacaReferral,
    chronologies: [{
      title: 'Dosarul privind incidentul cu echipa RAI',
      events: [
        {
          date: '2021-12-10', label: 'Incidentul cu echipa RAI',
          note: 'Potrivit rechizitoriului, patru persoane invitate la un interviu ar fi fost lipsite de libertate în cabinetul de avocatură.',
          source: sosoacaReferral,
        },
        {
          date: '2026-04-28', label: 'Decizia privind ridicarea imunității',
          note: 'Parlamentul European a votat ridicarea imunității pentru mai multe fapte, inclusiv pentru cele cercetate în legătură cu incidentul cu echipa RAI.',
          source: {
            label: 'Parlamentul European – procedura și decizia de ridicare a imunității',
            url: 'https://oeil.europarl.europa.eu/oeil/en/procedure-file?reference=2025%2F2196%28IMM%29',
          },
        },
        {
          date: '2026-07-16', label: 'Trimitere în judecată',
          note: 'Parchetul General a trimis cauza la Înalta Curte de Casație și Justiție pentru acuzații de lipsire de libertate.',
          source: sosoacaReferral,
        },
      ],
    }],
  },
  'Guțanu Mihai': {
    chronologies: [{
      title: 'Dosarul privind concursurile de angajare la DGAPMFP',
      events: [
        {
          date: '2025-07-09', label: 'DNA a anunțat acordul de recunoaștere a vinovăției',
          note: 'Procurorii au comunicat încheierea acordului în legătură cu acuzațiile de fals intelectual.',
          source: picuAndGutanu,
        },
      ],
    }],
  },
  'Ivanache Ilie': {
    status: 'indicted',
    statusSource: ivanacheReferral,
    chronologies: [{
      title: 'Dosarul privind lucrările de canalizare din Ungureni',
      events: [
        {
          date: '2026-01-08', label: 'DNA a anunțat trimiterea în judecată',
          note: 'Buletinul de presă consemnează trimiterea rechizitoriului la Tribunalul Botoșani.',
          source: ivanacheReferral,
        },
        {
          date: '2026-07-21', label: 'Control judiciar pe cauțiune menținut',
          note: 'Tribunalul Botoșani a menținut măsura preventivă în camera preliminară.',
          source: {
            label: 'BotoșaniNews – relatarea despre controlul judiciar',
            url: 'https://www.botosaninews.ro/745173/administratie/un-fost-primar-din-botosani-ramane-sub-control-judiciar-este-acuzat-de-luare-de-mita/',
          },
        },
      ],
    }],
  },
  'Lucian Florin Pușcașu': {
    status: 'convicted',
    statusSource: puscasuConviction,
    chronologies: [{
      title: 'Dosarul documentelor folosite într-un proiect PHARE',
      events: [
        {
          date: '2009-03-12', label: 'Trimitere în judecată',
          note: 'DNA a anunțat trimiterea în judecată în legătură cu documentele folosite într-un proiect PHARE de calificare în grafică publicitară.',
          source: dna(1199, 'trimiterea în judecată'),
        },
        {
          date: '2013-10-24', label: 'Condamnare definitivă',
          note: 'Curtea de Apel Suceava a stabilit 1 an și 6 luni de închisoare cu suspendare condiționată. Procesul pentru fals în înscrisuri sub semnătură privată a încetat prin prescripție.',
          source: puscasuConviction,
        },
      ],
    }],
  },
  'Marian-Daniel Vanghelie': {
    status: 'indicted',
    statusSource: economat2026,
    chronologies: [
      {
        title: 'Dosarul Economat Sector 5 – rechizitoriul din 2026',
        events: [
          {
            date: '2026-05-05', label: 'Trimitere în judecată',
            note: 'DNA l-a trimis în judecată pentru constituirea unui grup infracțional organizat și complicitate la abuz în serviciu.',
            source: economat2026,
          },
        ],
      },
      {
        title: 'Dosarul Economat Sector 5 – rechizitoriul din 2024',
        events: [
          {
            date: '2024-12', label: 'Trimitere în judecată',
            note: 'DNA a anunțat trimiterea în judecată pentru complicitate la abuz în serviciu.',
            source: economat2024,
          },
        ],
      },
      {
        title: 'Dosarul de luare de mită, abuz în serviciu și spălare de bani',
        events: [
          {
            date: '2021-05', label: 'Condamnare în primă instanță',
            note: 'Tribunalul București a pronunțat o pedeapsă de 11 ani și 8 luni, înainte de soluția definitivă în apel.',
            source: {
              label: 'TVR Info – parcursul dosarului și decizia în apel',
              url: 'https://tvrinfo.ro/dupa-zece-ani-de-procese-marian-vanghelie-scapa-de-condamnarea-de-11-ani-in-dosarul-mitei-de-30-milioane-euro-decizia-curtii-de-apel-bucuresti-este-definitiva/',
            },
          },
          {
            date: '2025-03-19', label: 'Soluție definitivă în apel',
            note: 'Curtea de Apel București a dispus încetarea procesului pentru luare de mită ca urmare a prescripției și achitarea pentru abuz în serviciu și spălare de bani.',
            source: vanghelieAppeal,
          },
        ],
      },
    ],
  },
  'Marius Ovidiu Isăilă': {
    status: 'convicted',
    statusSource: isailaConviction,
    chronologies: [
      {
        title: 'Dosarul de trafic de influență și instigare la fals',
        events: [
          {
            date: '2014-07', label: 'Trimitere în judecată',
            note: 'DNA a anunțat trimiterea în judecată pentru trafic de influență și instigare la fals în înscrisuri sub semnătură privată.',
            source: dna(5122, 'trimiterea în judecată din 2014'),
          },
          {
            date: '2016-11-10', label: 'Condamnare definitivă',
            note: 'Înalta Curte a stabilit o pedeapsă de 5 ani și 4 luni de închisoare.',
            source: isailaConviction,
          },
        ],
      },
      {
        title: 'Dosarul privind contractele Romtehnica',
        events: [
          {
            date: '2025-12-02', label: 'Trimitere în judecată într-un dosar separat',
            note: 'A fost trimis în judecată pentru cumpărare de influență, în legătură cu presupusa influențare a unor contracte Romtehnica.',
            source: {
              label: 'Digi24 – trimiterea în judecată din 2025',
              url: 'https://www.digi24.ro/stiri/actualitate/marius-isaila-a-fost-trimis-in-judecata-fostul-senator-psd-este-acuzat-ca-a-vrut-sa-dea-mita-fostului-ministru-al-apararii-3528665',
            },
          },
        ],
      },
    ],
  },
  'Niculae Bădălău': {
    chronologies: [{
      title: 'Dosarul contractelor de alimentare cu apă',
      events: [
        {
          date: '2022-12-16', label: 'Trimitere în judecată',
          note: 'DNA a anunțat trimiterea în judecată pentru trafic de influență și dare de mită.',
          source: badalauReferral,
        },
      ],
    }],
  },
  'Picu Emanuel-Victor': {
    chronologies: [{
      title: 'Dosarul privind concursurile de angajare la DGAPMFP',
      events: [
        {
          date: '2025-07-09', label: 'DNA a anunțat trimiterea în judecată',
          note: 'Buletinul de presă descrie acuzațiile din dosarul privind organizarea concursurilor de angajare.',
          source: picuAndGutanu,
        },
        {
          date: '2026-03-02', label: 'Condamnare în primă instanță',
          note: 'Curtea de Apel București a stabilit în primă instanță o pedeapsă de 3 ani și 2 luni de închisoare cu executare.',
          source: {
            label: 'Radio România Actualități – sentința nedefinitivă',
            url: 'https://www.romania-actualitati.ro/stiri/romania/fost-director-in-primaria-capitalei-si-un-primar-din-dambovita-condamnati-pentru-abuz-in-serviciu-id224608.html',
          },
        },
      ],
    }],
  },
  'Pletea Benone': {
    status: 'convicted',
    statusSource: pleteaConviction,
    chronologies: [
      {
        title: 'Dosarul privind alegerile locale din 2020',
        events: [
          {
            date: '2024-10-23', label: 'Condamnare în primă instanță',
            note: 'Judecătoria Bârlad a pronunțat o pedeapsă de 2 ani și 8 luni de închisoare cu suspendare sub supraveghere.',
            source: pleteaConviction,
          },
          {
            date: '2025-05-08', label: 'Condamnare definitivă în apel',
            note: 'Curtea de Apel Iași a menținut sentința în privința lui Benone Pletea.',
            source: pleteaConviction,
          },
        ],
      },
      {
        title: 'Constatarea separată a ANI',
        events: [
          {
            date: '2026-07-31', label: 'Constatare ANI și sesizarea parchetului',
            note: 'ANI a comunicat constatarea unui conflict de interese administrativ și a unei incompatibilități, precum și sesizarea parchetului.',
            source: {
              label: 'ANI – comunicatul din 31 iulie 2026',
              url: 'https://integritate.eu/c-o-m-u-n-i-c-a-t-incidente-de-integritate-13-persoane-prevazute-de-legea-nr-176-2010/',
            },
          },
        ],
      },
    ],
  },
  'Titus Corlățean': {
    status: 'closed',
    statusSource: corlatean,
    chronologies: [{
      title: 'Dosarul votului din diaspora',
      events: [
        {
          date: '2016-05-16', label: 'Demers pentru încuviințarea urmăririi penale',
          note: 'DNA a anunțat transmiterea referatului către procurorul general, în vederea sesizării Senatului.',
          source: corlatean,
        },
        {
          date: '2016-06-21', label: 'Senatul a respins solicitarea',
          note: 'Senatul a respins cererea de începere a urmăririi penale.',
          source: corlatean,
        },
        {
          date: '2018-11-15', label: 'Clasare',
          note: 'Procurorii au dispus clasarea. DNA a publicat soluția în actualizarea din 20 noiembrie 2018.',
          source: corlatean,
        },
      ],
    }],
  },
  'Varujan Vosganian': {
    chronologies: [{
      title: 'Cauza care îl privea în dosarul Romgaz–Interagro',
      events: [
        {
          date: '2013-10', label: 'Prima cerere de urmărire penală respinsă',
          note: 'Senatul nu a încuviințat solicitarea. Votul a fost consemnat retrospectiv în stenograma dezbaterii din 2015.',
          source: vosganianSenate,
        },
        {
          date: '2015-02-12', label: 'A doua cerere respinsă',
          note: 'Senatul a respins a doua cerere de începere a urmăririi penale.',
          source: vosganianSenate,
        },
        {
          date: '2021-03', label: 'Clasarea cauzei care îl privea',
          note: 'Agerpres a relatat clasarea de către DIICOT a părții din dosar care îl viza.',
          source: vosganianClosure,
        },
      ],
    }],
  },
};
