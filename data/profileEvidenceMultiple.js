const dna = (id, label) => ({
  label: `DNA – ${label}`,
  url: `https://www.dna.ro/comunicat.xhtml?id=${id}`,
});

const trofeulCalitatii = dna(3383, 'comunicatul privind decizia nr. 60/2012');
const zambaccian = dna(4564, 'comunicatul privind decizia din 6 ianuarie 2014');
const retrocedarile = dna(9349, 'comunicatul privind decizia nr. 32/2019');
const mazareMita = dna(11083, 'comunicatul privind decizia nr. 14/2022');
const transformatorul = dna(4618, 'comunicatul privind decizia nr. 18/2014');
const fenechiuAcord = dna(7930, 'comunicatul privind sentința nr. 2622/2016');
const referendumul = dna(7368, 'comunicatul privind decizia nr. 114/2016');
const dgaspc = dna(9470, 'comunicatul privind decizia nr. 142/2019');
const iotcuCondamnare = dna(8297, 'comunicatul privind decizia nr. 806/2017');
const iotcuAchitare = dna(8386, 'comunicatul de trimitere în judecată și actualizarea privind achitarea');
const draghiciDosar2019 = dna(10502, 'comunicatul privind decizia nr. 227/2021');
const draghiciDosar2022 = dna(11615, 'comunicatul privind sentința nr. 937/2022');
const draghiciConsultanta = dna(6888, 'comunicatul de trimitere în judecată și actualizarea privind achitarea');

export const multipleProfileEvidence = {
  'Adrian Năstase': {
    verifiedAt: '2026-08-03',
    reviewedAt: '2026-08-03',
    chronologies: [
      {
        title: 'Dosarul „Trofeul Calității”',
        events: [
          {
            date: '2009-01-16',
            label: 'Trimitere în judecată',
            source: trofeulCalitatii,
          },
          {
            date: '2012-06-20',
            label: 'Condamnare definitivă',
            note: 'Înalta Curte a stabilit o pedeapsă de 2 ani de închisoare cu executare.',
            source: trofeulCalitatii,
          },
        ],
      },
      {
        title: 'Dosarul „Zambaccian”',
        events: [
          {
            date: '2010-05-05',
            label: 'Trimitere în judecată',
            source: zambaccian,
          },
          {
            date: '2014-01-06',
            label: 'Condamnare definitivă',
            note: 'Înalta Curte a stabilit o pedeapsă de 4 ani de închisoare pentru luare de mită și șantaj.',
            source: zambaccian,
          },
        ],
      },
    ],
  },
  'Liviu Dragnea': {
    verifiedAt: '2026-08-03',
    reviewedAt: '2026-08-03',
    chronologies: [
      {
        title: 'Dosarul referendumului din 2012',
        events: [
          {
            date: '2013-09-27',
            label: 'Trimitere în judecată',
            source: referendumul,
          },
          {
            date: '2016-04-22',
            label: 'Condamnare definitivă',
            note: 'Înalta Curte a stabilit o pedeapsă de 2 ani de închisoare cu suspendare.',
            source: referendumul,
          },
        ],
      },
      {
        title: 'Dosarul angajărilor fictive la DGASPC Teleorman',
        events: [
          {
            date: '2016-07-15',
            label: 'Trimitere în judecată',
            source: dgaspc,
          },
          {
            date: '2019-05-27',
            label: 'Condamnare definitivă',
            note: 'Înalta Curte a stabilit o pedeapsă de 3 ani și 6 luni de închisoare cu executare.',
            source: dgaspc,
          },
        ],
      },
    ],
  },
  'Relu Fenechiu': {
    verifiedAt: '2026-08-03',
    reviewedAt: '2026-08-03',
    chronologies: [
      {
        title: 'Dosarul „Transformatorul”',
        events: [
          {
            date: '2012-06-28',
            label: 'Trimitere în judecată',
            source: transformatorul,
          },
          {
            date: '2014-01-30',
            label: 'Condamnare definitivă',
            note: 'Înalta Curte a stabilit o pedeapsă de 5 ani de închisoare pentru complicitate la abuz în serviciu.',
            source: transformatorul,
          },
        ],
      },
      {
        title: 'Dosarul privind traficul de influență și spălarea banilor',
        events: [
          {
            date: '2016-10-13',
            label: 'Acord de recunoaștere înaintat instanței',
            source: fenechiuAcord,
          },
          {
            date: '2016-11-14',
            label: 'Acord admis în primă instanță',
            note: 'Tribunalul București a stabilit o pedeapsă de 3 ani și 10 luni de închisoare.',
            source: fenechiuAcord,
          },
          {
            date: '2016-11-28',
            label: 'Sentință rămasă definitivă',
            note: 'Sentința Tribunalului București a rămas definitivă prin neapelare.',
            source: fenechiuAcord,
          },
        ],
      },
    ],
  },
  'Petru Nicolae Ioțcu': {
    verifiedAt: '2026-08-03',
    reviewedAt: '2026-08-03',
    status: 'convicted',
    statusSource: iotcuCondamnare,
    chronologies: [
      {
        title: 'Dosarul de trafic de influență trimis în judecată în 2015',
        events: [
          {
            date: '2015-08-11',
            label: 'Trimitere în judecată',
            source: iotcuCondamnare,
          },
          {
            date: '2017-06-26',
            label: 'Condamnare definitivă',
            note: 'Curtea de Apel Timișoara a stabilit o pedeapsă de 4 ani de închisoare.',
            source: iotcuCondamnare,
          },
        ],
      },
      {
        title: 'Dosarul de trafic de influență anunțat în 2017',
        events: [
          {
            date: '2017-09-28',
            label: 'DNA anunță trimiterea în judecată',
            source: iotcuAchitare,
          },
          {
            date: '2020-11-04',
            label: 'Achitare definitivă',
            note: 'Curtea de Apel Timișoara a dispus achitarea deoarece faptele nu există.',
            source: iotcuAchitare,
          },
        ],
      },
    ],
  },
  'Radu Mazăre': {
    verifiedAt: '2026-08-03',
    reviewedAt: '2026-08-03',
    chronologies: [
      {
        title: 'Dosarul retrocedărilor din Constanța',
        events: [
          {
            date: '2008-10-24',
            label: 'Trimitere în judecată',
            source: retrocedarile,
          },
          {
            date: '2019-02-07',
            label: 'Condamnare definitivă',
            note: 'Înalta Curte a stabilit o pedeapsă de 9 ani de închisoare.',
            source: retrocedarile,
          },
        ],
      },
      {
        title: 'Dosarul privind luarea de mită și conflictul de interese',
        events: [
          {
            date: '2015-12-07',
            label: 'Trimitere în judecată',
            source: mazareMita,
          },
          {
            date: '2022-02-03',
            label: 'Condamnare definitivă',
            note: 'Înalta Curte a stabilit o pedeapsă de 5 ani de închisoare.',
            source: mazareMita,
          },
        ],
      },
    ],
  },
  'Mircea Drăghici': {
    verifiedAt: '2026-08-03',
    reviewedAt: '2026-08-03',
    status: 'convicted',
    statusSource: draghiciDosar2022,
    chronologies: [
      {
        title: 'Dosarul achiziției unui imobil și al înstrăinării unui autoturism',
        events: [
          {
            date: '2019-07-23',
            label: 'Trimitere în judecată',
            source: draghiciDosar2019,
          },
          {
            date: '2021-07-01',
            label: 'Condamnare definitivă',
            note: 'Înalta Curte a stabilit o pedeapsă de 5 ani de închisoare.',
            source: draghiciDosar2019,
          },
        ],
      },
      {
        title: 'Dosarul privind subvențiile partidului, soluționat prin acord',
        events: [
          {
            date: '2022-06-27',
            label: 'Acord de recunoaștere înaintat instanței',
            source: draghiciDosar2022,
          },
          {
            date: '2022-09-05',
            label: 'Acord admis în primă instanță',
            note: 'Tribunalul București a stabilit prin contopire o pedeapsă rezultantă de 6 ani de închisoare.',
            source: draghiciDosar2022,
          },
          {
            date: '2022-10-12',
            label: 'Sentință rămasă definitivă',
            note: 'Sentința Tribunalului București a rămas definitivă prin neapelare.',
            source: draghiciDosar2022,
          },
        ],
      },
      {
        title: 'Dosarul contractelor de consultanță pentru primării din Argeș',
        events: [
          {
            date: '2015-11-23',
            label: 'DNA anunță trimiterea în judecată',
            source: draghiciConsultanta,
          },
          {
            date: '2023-04-24',
            label: 'Achitare definitivă',
            note: 'Înalta Curte a dispus achitarea în acest dosar.',
            source: draghiciConsultanta,
          },
        ],
      },
    ],
  },
};
