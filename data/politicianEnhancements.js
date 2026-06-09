export const metadataOverrides = {
  description:
        'Proiect independent, non-profit și open source despre politicieni români condamnați, trimiși în judecată sau cercetați pentru corupție și probleme de integritate.',
  last_updated: '2026-06-09',
  notes:
    'Statusuri: convicted (condamnare definitivă), first_instance (condamnat în primă instanță), indicted (trimis în judecată), investigated (cercetat), prescribed (proces închis prin prescripție), closed (cauză clasată sau închisă fără trimitere în judecată), acquitted (achitat). Fiecare persoană inclusă are cel puțin o sursă oficială verificabilă; unde contextul o cere, am adăugat și presă de referință pentru clarificarea evoluției procedurale. Lista rămâne deschisă și nu este exhaustivă.',
};

const ARGES_CONSULTANCY_ACQUITTAL_DETAILS =
  'DNA Pitești l-a vizat inițial în martie 2014 și apoi l-a trimis în judecată în noiembrie 2015 în dosarul contractelor de consultanță din județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.';

const ARGES_CONSULTANCY_ACQUITTAL_DETAILS_2015 =
  'DNA Pitești l-a vizat inițial în noiembrie 2015 în dosarul contractelor de consultanță din județul Argeș. Prin actualizarea oficială din 5 februarie 2024, DNA a consemnat că ÎCCJ a dispus achitarea sa definitivă la 24 aprilie 2023, întrucât faptele nu există ori nu există probe că persoana a săvârșit infracțiunea.';

const VASILE_NICA_AUDIT_DETAILS =
  'DNA a consemnat condamnarea sa definitivă la 7 decembrie 2015 într-un dosar distinct instrumentat de Serviciul Teritorial Pitești. Într-o cauză separată privind contractele de consultanță din județul Argeș, DNA a actualizat ulterior soluția definitivă de achitare pronunțată la 24 aprilie 2023; pentru consistența bazei, intrarea rămâne clasificată drept convicted deoarece există o condamnare definitivă distinctă în intervalul 2010-2026.';

const SALCEA_EXAM_GEOGRAPHY = {
  county: 'Suceava',
  basis: 'office',
  note: 'Funcția publică relevantă ori cauza viza orașul Salcea, județul Suceava.',
};

const SALCEA_EXAM_SOURCES = [
  {
    label: 'DNA',
    kind: 'official',
    url: 'https://www.dna.ro/comunicat.xhtml?id=12406',
  },
  {
    label: 'DNA',
    kind: 'official',
    url: 'https://www.dna.ro/comunicat.xhtml?id=7945',
  },
];

const SALCEA_LUNGU_PARTY_SOURCE = {
  label: 'Jurnal FM',
  kind: 'press',
  url: 'https://jurnalfm.ro/surpriza-la-salcea-unde-a-fost-ales-un-primar-tanar-provenit-de-la-un-partid-mic/',
};

const SALCEA_GIZA_PARTY_SOURCE = {
  label: 'Monitorul de Suceava',
  kind: 'press',
  url: 'https://m.monitorulsv.ro/Politic-local/2014-02-13/Viceprimar-nou-in-Salcea',
};

const SAMBATA_DE_SUS_GEOGRAPHY = {
  county: 'Brașov',
  basis: 'case_location',
  note: 'Cauza viza UAT Sâmbăta de Sus, județul Brașov.',
};

const SAMBATA_DE_SUS_DNA_SOURCE = {
  label: 'DNA',
  kind: 'official',
  url: 'https://www.dna.ro/comunicat.xhtml?id=11303',
};

const DOMASNEA_APIA_GEOGRAPHY = {
  county: 'Caraș-Severin',
  basis: 'case_location',
  note: 'Cauza APIA viza comuna Domașnea, județul Caraș-Severin.',
};

const DOMASNEA_DNA_SOURCE = {
  label: 'DNA',
  kind: 'official',
  url: 'https://www.dna.ro/comunicat.xhtml?id=8844',
};

const DOMASNEA_LORINT_PARTY_SOURCE = {
  label: 'PressAlert',
  kind: 'press',
  url: 'https://www.pressalert.ro/2016/11/primarul-bataus-din-banat-trimis-judecata-intr-un-dosar-de-frauda-cu-fonduri-europene-vezi-cum-obtinut-pe-nedrept-peste-jumatate-de-milion-de-lei/',
};

const GORBAN_APIA_GEOGRAPHY = {
  county: 'Iași',
  basis: 'case_location',
  note: 'Cauza APIA viza comuna Gorban, județul Iași.',
};

const GORBAN_DNA_SOURCE = {
  label: 'DNA',
  kind: 'official',
  url: 'https://www.dna.ro/comunicat.xhtml?id=9260',
};

const ECONOMAT_SECTOR_5_GEOGRAPHY = {
  county: 'București',
  basis: 'case_location',
  note:
    'Cauza viza achiziții publice derulate prin societăți și instituții din subordinea autorităților locale ale Sectorului 5.',
};

const ECONOMAT_SECTOR_5_DNA_SOURCE = {
  label: 'DNA',
  kind: 'official',
  url: 'https://www.dna.ro/comunicat.xhtml?id=13737',
};

const ECONOMAT_SECTOR_5_PSDI_SOURCE = {
  label: 'Tribunalul București',
  kind: 'official',
  url: 'https://tribunalulbucuresti.ro/images/articole/politice-partide/poz-186_martie_2019.pdf',
};

const MADR_FITOSANITAR_GEOGRAPHY = {
  county: 'București',
  basis: 'office',
  note:
    'Funcția publică relevantă era în cadrul Ministerului Agriculturii și/sau al Autorității Naționale Fitosanitare, instituții centrale cu sediul în București.',
};

const MADR_FITOSANITAR_DNA_SOURCE = {
  label: 'DNA',
  kind: 'official',
  url: 'https://www.dna.ro/comunicat.xhtml?id=13735',
};

const ADRIAN_PINTEA_PARTY_SOURCE = {
  label: 'DeFapt.ro',
  kind: 'press',
  url: 'https://defapt.ro/justitie/dna-cerceteaza-psd-pintea-ministerul-agriculturii',
};

const SARBI_ISCTR_GEOGRAPHY = {
  county: 'Bihor',
  basis: 'office',
  note: 'Funcția publică relevantă era cea de viceprimar al comunei Sârbi, județul Bihor.',
};

const SARBI_ISCTR_DNA_SOURCE = {
  label: 'DNA',
  kind: 'official',
  url: 'https://www.dna.ro/comunicat.xhtml?id=12507',
};

const SARBI_PARTY_SOURCE = {
  label: 'Primăria Sârbi',
  kind: 'official',
  url: 'https://comunasarbi.ro/componenta-consiliului-local/',
};

const CONSTANTA_SECRETAR_CONTEST_GEOGRAPHY = {
  county: 'Constanța',
  basis: 'office',
  note: 'Funcția publică relevantă era în cadrul Primăriei municipiului Constanța.',
};

const CONSTANTA_SECRETAR_CONTEST_DNA_SOURCE = {
  label: 'DNA',
  kind: 'official',
  url: 'https://www.dna.ro/comunicat.xhtml?id=12611',
};

const CONSTANTA_SECRETAR_CONTEST_INITIAL_DNA_SOURCE = {
  label: 'DNA',
  kind: 'official',
  url: 'https://www.dna.ro/comunicat.xhtml?id=12331',
};

const ANI_DEC_2024_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-4-alesi-locali-3/',
};

const ANI_FEB_2025_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-4-alesi-locali-4/',
};

const ANI_APR_2025_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-4-alesi-locali-5/',
};

const ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-14-persoane-prevazute-de-legea-nr-176-2010/',
};

const ANI_FEB_2026_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-11-persoane/',
};

const ANI_APR_2026_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-10-persoane-prevazute-de-legea-nr-176-2010-4/',
};

const ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-12-persoane-prevazute-de-legea-nr-176-2010-3/',
};

const DNA_APR_2026_BULLETIN_SOURCE = {
  label: 'DNA',
  kind: 'official',
  url: 'https://www.dna.ro/comunicat.xhtml?id=13667',
};

const DNA_APR_2026_ARR_EXAM_SOURCE = {
  label: 'DNA',
  kind: 'official',
  url: 'https://www.dna.ro/comunicat.xhtml?id=13664',
};

const DNA_APR_2026_BN_ROADS_SOURCE = {
  label: 'DNA',
  kind: 'official',
  url: 'https://www.dna.ro/comunicat.xhtml?id=13692',
};

const ANI_APR_2023_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-14-alesi-locali/',
};

const ANI_FEB_2024_FOUR_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-4-alesi-locali/',
};

const ANI_AUG_2022_FIRST_SEVEN_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-7-alesi-locali/',
};

const ANI_AUG_2022_SECOND_SEVEN_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-7-alesi-locali-2/',
};

const ANI_DEC_2021_TWENTY_SIX_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3193&PID=20&currentPage=6',
};

const ANI_DEC_2025_AGERPRES_SOURCE = {
  label: 'AGERPRES',
  kind: 'press',
  url: 'https://agerpres.ro/comunicate/2025/12/10/comunicat-de-presa---agentia-nationala-de-integritate--1510612',
};

const ANI_MAY_2026_AGERPRES_SOURCE = {
  label: 'AGERPRES',
  kind: 'press',
  url: 'https://agerpres.ro/comunicate/2026/05/04/comunicat-de-presa---agentia-nationala-de-integritate--1552410',
};

const ANI_JAN_2026_BIG_DATA_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-3-persoane-autosesizari-sistem-big-data/',
};

const ANI_DEC_2025_BIG_DATA_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-18-persoane-autosesizari-sistem-big-data/',
};

const ANI_DEC_2022_TEN_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-10-persoane-prevazute-de-legea-nr-176-2010/',
};

const ANI_SEP_2025_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-10-persoane-prevazute-de-legea-nr-176-2010-3/',
};

const DOGARU_TATIANA_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_arges/consiliul-local/dobresti/9',
};

const HANTASCU_FLORIN_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_suceava/consiliul-local/zamostea/',
};

const ALBU_IOAN_AUGUSTIN_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_sibiu/consiliul-local/rasinari/',
};

const DUNCA_FELICIA_PARTY_SOURCE = {
  label: 'G4Media',
  kind: 'press',
  url: 'https://www.g4media.ro/clotilde-armand-despre-cum-isi-impart-functiile-pnl-si-psd-consiliera-personala-a-lui-dan-tudorache-a-fost-numita-in-conducerea-autoritatii-competente-de-reglementarea-operatiunilor-petroliere-offs.html',
};

const PROTEASA_PARTY_SOURCE = {
  label: 'Ziua de Vest',
  kind: 'press',
  url: 'https://www.ziuadevest.ro/alexandru-proteasa-propunerea-pnl-pentru-functia-de-vicepresedinte-a-consiliului-judetean-timis/',
};

const DOSARU_ALDE_PARTY_SOURCE = {
  label: 'Ziarul Prahova',
  kind: 'press',
  url: 'https://dev.ziarulprahova.ro/2020/10/sedinta-de-constituire-a-noului-consiliu-judetean-prahova-tinuta-sub-acoperire-la-ploiesti/',
};

const CARAS_SEVERIN_ANI_PARTY_SOURCE = {
  label: 'Resita.ro',
  kind: 'press',
  url: 'https://resita.ro/primari-pnl-si-psd-infractori-parchetul-sesizat-de-ani/',
};

const DRAGUSENI_VINTILA_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_galati/primarie/draguseni/1',
};

const SALCIOARA_STOICA_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_ialomita/primarie/salcioara/20',
};

const TOMSANI_PEARCU_PARTY_SOURCE = {
  label: 'Tribuna Vâlceană',
  kind: 'press',
  url: 'https://www.tribunavalceana.ro/la-tomsani-investitiile-de-modernizare-a-infrastructurii-rutiere-si-de-introducere-a-utilitatilor-vor-fi-o-prioritate-pentru-liberalul-andrei-nicolae/',
};

const DANESTI_RUSU_PARTY_SOURCE = {
  label: 'Comuna Dănești',
  kind: 'official',
  url: 'https://www.comunadanesti.ro/consiliul-local/componenta/page/18/',
};

const TIMISOARA_LULCIUC_PARTY_SOURCE = {
  label: 'Știri de Timișoara',
  kind: 'press',
  url: 'https://stiridetimisoara.ro/consilierul-local-adrian-lulciuc-seful-regionalei-de-posta-timis_6977.html',
};

const MANGALIA_STAN_PARTY_SOURCE = {
  label: 'Ziua Constanța',
  kind: 'press',
  url: 'https://www.ziuaconstanta.ro/stiri/justitie/consilierul-local-linica-stan-de-la-mangalia-pierde-procesul-cu-agentia-nationala-de-integritate-decizia-nu-este-definitiva-856636.html',
};

const BACAU_DINU_PARTY_SOURCE = {
  label: 'Știri Bacău',
  kind: 'press',
  url: 'https://stiribc.ro/2020/09/29/lucian-stanciu-viziteu-este-noul-primar-al-municipiului-bacau/',
};

const MOGOSOAIA_PREDESEL_PARTY_SOURCE = {
  label: 'Jurnalul de Ilfov',
  kind: 'press',
  url: 'https://jurnaluldeilfov.ro/paul-mihai-nicu-precup-si-consilierii-locali-din-mogosoaia-au-depus-juramantul-de-credinta/',
};

const HODAC_FEIER_PARTY_SOURCE = {
  label: 'Zi de Zi',
  kind: 'press',
  url: 'https://www.zi-de-zi.ro/2021/01/14/conducerea-comunei-hodac-in-formula-completa-ioan-feier-ales-viceprimar/',
};

const GRINDU_TRISCA_PARTY_SOURCE = {
  label: 'Primăria Grindu',
  kind: 'official',
  url: 'https://www.comunagrindutl.ro/?p=consiliul_local',
};

const OPRESCU_PSD_SOURCE = {
  label: 'Mediafax',
  kind: 'press',
  url: 'https://www.mediafax.ro/politic/biografie-oprescu-fost-lider-psd-si-candidat-independent-care-dorea-sa-ajunga-la-palatul-cotroceni-14702184',
};

const TARGU_MURES_FARCAS_PARTY_SOURCE = {
  label: 'Zi de Zi',
  kind: 'press',
  url: 'https://www.zi-de-zi.ro/2016/09/20/batalia-pentru-consiliile-de-administratie-scolilor-aproape-de-final/',
};

const PRODILEANU_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_dolj/consiliul-local/podari/4',
};

const PISTEA_PARTY_SOURCE = {
  label: 'Ziarul de Bacău',
  kind: 'press',
  url: 'https://ziaruldebacau.ro/ciprian-pistea-este-noul-manager-public-al-municipiului-bacau-ce-directii-va-avea-in-subordine/',
};

const SOLDEA_PSD_SUPPORT_SOURCE = {
  label: 'Cotidianul',
  kind: 'press',
  url: 'https://www.cotidianul.ro/cele-doua-agentii-de-la-agricultura-conduse-de-oameni-cu-probleme-in-justitie/',
};

const PSDI_2019_EUROPARLAMENTARE_SOURCE = {
  label: 'Ziarul de Iași',
  kind: 'press',
  url: 'https://www.ziaruldeiasi.ro/stiri/lista-partidelor-si-candidatilor-din-romania-la-alegerile-europarlamentare--220085.html',
};

const DRAGOS_BOGDAN_PNL_SOURCE = {
  label: 'Buletin de București',
  kind: 'press',
  url: 'https://buletin.de/bucuresti/viceprimarii-sectorului-2-i-dragos-bogdan-liberalul-implicat-in-scandalul-despagubirilor-supraevaluate-de-la-anrp/',
};

const STEFAN_CONSTANTIN_PSD_SOURCE = {
  label: 'Ziarul de Iași',
  kind: 'press',
  url: 'https://www.ziaruldeiasi.ro/stiri/lista-in-premiera-candidatii-la-cele-98-de-primarii-din-judetul-iasi--121197.html',
};

const SALAVASTRU_UNPR_SOURCE = {
  label: 'Mediafax',
  kind: 'press',
  url: 'https://www.mediafax.ro/politic/nepoata-fostului-sef-al-sri-radu-timofte-s-a-inscris-in-unpr-6076626',
};

const RUS_DAN_DORUL_PARTY_SOURCE = {
  label: 'Zi de Zi',
  kind: 'press',
  url: 'https://www.zi-de-zi.ro/2023/12/13/sediu-nou-pentru-aur-reghin/',
};

const TOKOS_PNL_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_brasov/primarie/augustin/',
};

const DEVESEL_DANIELA_PNL_SOURCE = {
  label: 'Ziarul de Prahova',
  kind: 'press',
  url: 'https://www.zdp.ro/maneciu-primarul-si-membrii-noului-consiliu-local-au-depus-juramantul-pentru-mandatul-2024-2028.html',
};

const PASATA_ADAM_PNL_SOURCE = {
  label: 'Primăria Stejaru',
  kind: 'official',
  url: 'https://primaria-stejaru.ro/consilier-local/adam-pasata/',
};

const GOIDAN_CRISTIAN_PMP_SOURCE = {
  label: 'Gazeta de Prahova',
  kind: 'press',
  url: 'https://gazetaph.ro/rezultate-alegeri-locale-prahova-2020/',
};

const CHIMIGERIU_BARBURA_PNL_SOURCE = {
  label: 'PressAlert',
  kind: 'press',
  url: 'https://www.pressalert.ro/2025/12/incompatibilitati-la-spitalele-din-vestul-tarii-ani-a-identificat-functii-politice-detinute-de-membrii-ca-din-resita-si-sebis/',
};

const BOTEA_VIOREL_PMP_SOURCE = {
  label: 'ProBrăila',
  kind: 'press',
  url: 'https://probr.ro/viorel-botea-s-a-aflat-in-incompatibilitate-in-perioada-in-care-a-fost-membru-al-ca-la-spitalul-judetean-si-presedinte-al-pmp-braila/',
};

const DONDAS_ADRIANA_PSD_SOURCE = {
  label: 'NewsPașcani',
  kind: 'press',
  url: 'https://newspascani.com/psd-pascani-isi-alege-maine-noua-conducere-dragos-ionescu-si-mihai-buhaiescu-in-cursa-pentru-sefia-organizatiei/',
};

const ANDREESCU_COSTEL_USR_SOURCE = {
  label: 'Observatorul Prahovean',
  kind: 'press',
  url: 'https://www.observatorulph.ro/administratie/2587906-componenta-aga-la-societatile-din-subordinea-consiliului-local-ploiesti',
};

const BECIU_ELISABETA_PSD_SOURCE = {
  label: 'Obiectiv Ialomița',
  kind: 'press',
  url: 'https://obiectiv.net/ialomita-a-fost-constituit-consiliul-judetean-mandatul-2020-2024-62816.html/',
};

const GAVRIL_MIHAI_LIVIU_PSD_SOURCE = {
  label: 'Primăria Iași',
  kind: 'official',
  url: 'https://www.primaria-iasi.ro/dm_iasi/portal.nsf/pagini/comisii%2Bde%2Bspecialitate-00001A7E?Open=&Start=1',
};

const BRATU_NICOLAE_PSD_SOURCE = {
  label: 'Primăria Ștefești',
  kind: 'official',
  url: 'https://primariastefesti.ro/consilier-local/nicolae-bratu/',
};

const VASILIU_VLAD_PNL_SOURCE = {
  label: 'Știri Botoșani',
  kind: 'press',
  url: 'https://stiri.botosani.ro/stiri/politica/medicul-valerian-andries-a-renuntat-la-conducerea-organizatiei-pnl-dorohoi.html',
};

const NASTASE_IONUT_DRAGOS_PSD_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_olt/consiliul-local/caracal/9',
};

const TOMA_BROASCA_PMP_SOURCE = {
  label: 'Jurnal Brăila',
  kind: 'press',
  url: 'https://jurnalbr.ro/politica/ani-a-decis-viorel-botea-si-virginia-toma-broasca-declarati-incompatibili-ce-functii-au-cumulat-ilegal/',
};

const CAMPEANU_ADRIANA_PNL_SOURCE = {
  label: 'Radio Constanța',
  kind: 'press',
  url: 'https://www.radioconstanta.ro/2022/06/25/constanta-consilierul-local-adriana-arghirescu-este-noul-presedintele-al-organizatiei-de-femei-a-partidului-national-liberal/',
};

const GALATANU_IONEL_PNL_SOURCE = {
  label: 'Comuna Odobești',
  kind: 'official',
  url: 'https://www.comuna-odobesti.ro/primaria/consiliul-local/componenta',
};

const PLESA_IOAN_DANUT_PNL_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_cluj/consiliul-local/margau/6',
};

const STAN_EMIL_ALECU_PSD_SOURCE = {
  label: 'Zi de Zi',
  kind: 'press',
  url: 'https://www.zi-de-zi.ro/2020/10/24/ludusul-are-primar-si-consiliu-local-constituit/',
};

const ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-13-alesi-locali-2/',
};

const ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-16-alesi-locali/',
};

const ANI_MAY_2022_AGERPRES_SOURCE = {
  label: 'AGERPRES',
  kind: 'press',
  url: 'https://agerpres.ro/justitie/2022/05/17/ani-16-alesi-locali-in-stare-de-incompatibilitate-sau-conflict-de-interese--919211',
};

const CIOCANESTI_PAVEL_PARTY_SOURCE = {
  label: 'Actualitatea de Călărași',
  kind: 'press',
  url: 'https://actualitateacalarasi.eu/jud-calarasi-prezenta-la-vot-in-functie-de-culoarea-politica-a-localitatilor/',
};

const MILCOVUL_COUNCIL_PARTY_SOURCE = {
  label: 'Primaria Milcovul',
  kind: 'official',
  url: 'https://www.primariamilcovul.ro/conducere',
};

const AMARA_DANIEL_MIHAI_PARTY_SOURCE = {
  label: 'Independent',
  kind: 'press',
  url: 'https://www.independentonline.ro/?articles_page=228&cele_mai_citite=%25253Fpagina%25253D5&news_page=349',
};

const TOMUS_DOREL_PARTY_SOURCE = {
  label: 'Consiliul Judetean Alba',
  kind: 'official',
  url: 'https://www.staging.cjalba.ro/wp-content/uploads/2019/03/PH28.03.2019.pdf',
};

const CARANSEBES_DRAGOMIR_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_caras-severin/consiliul-local/caransebes/',
};

const MOLDOVA_NOUA_CARPIAN_PARTY_SOURCE = {
  label: 'Reper24',
  kind: 'press',
  url: 'https://arhiva.reper24.ro/lupta-intensa-pentru-primaria-moldova-noua-vezi-listele-complete-pentru-primarie-si-consiliu-local/',
};

const BARCA_TURCULEANU_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_dolj/consiliul-local/barca/19',
};

const RODNA_BOLDIS_PARTY_SOURCE = {
  label: 'Comuna Rodna',
  kind: 'official',
  url: 'https://comunarodna.ro/consiliul-local-rodna/rapoarte-de-activitate-ale-consiliului-local.html',
};

const HODAC_FARCAS_PARTY_SOURCE = {
  label: 'Zi de Zi',
  kind: 'press',
  url: 'https://www.zi-de-zi.ro/2021/01/14/conducerea-comunei-hodac-in-formula-completa-ioan-feier-ales-viceprimar/',
};

const COCORA_TOADER_PARTY_SOURCE = {
  label: 'Comuna Cocora',
  kind: 'official',
  url: 'https://comunacocora.ro/componenta_cl.html',
};

const HALCHIU_DRUGAN_NECULA_PARTY_SOURCE = {
  label: 'Stirile ProTV',
  kind: 'press',
  url: 'https://stirileprotv.ro/alegeri-locale/alegeri-locale-2016-candidatii-la-primarie-in-localitatile-din-judetul-brasov.html',
};

const TECUCI_MARTIN_PARTY_SOURCE = {
  label: 'Primaria Tecuci',
  kind: 'official',
  url: 'https://primariatecuci.ro/wp-content/uploads/2025/09/Statutul-Municipiului-Tecuci.pdf',
};

const AVRAM_IANCU_HELER_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_alba/primarie/avram-iancu/14',
};

const BRANESTI_PREDA_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_dambovita/primarie/branesti/',
};

const POGANA_VEZETEU_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_vaslui/consiliul-local/pogana/',
};

const TARGU_BUJOR_ANDONE_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_galati/consiliul-local/targu-bujor/',
};

const SALATRUCEL_PREOTESCU_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_valcea/consiliul-local/salatrucel/',
};

const FLORESTI_MARGHIOLESCU_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_prahova/consiliul-local/floresti/12',
};

const VANATORI_HULEA_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_galati/consiliul-local/vanatori/',
};

const PUIESTI_BALAN_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_vaslui/consiliul-local/puiesti/10',
};

const AGIGEA_NITA_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_constanta/primarie/agigea/',
};

const POPESTI_LUPU_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_iasi/primarie/popesti/',
};

const CRISTIAN_COJOCARU_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_brasov/primarie/cristian/19',
};

const BREASTA_VIZITIU_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_dolj/primarie/breasta/',
};

const NUFARU_SOLOMENCU_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_tulcea/primarie/nufaru/',
};

const CHIUIESTI_MIHUT_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_cluj/primarie/chiuiesti/',
};

const SARMIZEGETUSA_HIBAIS_PARTY_SOURCE = {
  label: 'Comuna Sarmizegetusa',
  kind: 'official',
  url: 'https://comuna-sarmizegetusa.ro/wp-content/uploads/2024/10/sentinta-validare-consilieri-locali-2024-2028.pdf',
};

const CARTA_CANDULETIU_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_sibiu/primarie/carta/',
};

const CELARU_COUNCIL_PARTY_SOURCE = {
  label: 'Primăria Celaru',
  kind: 'official',
  url: 'https://www.primariacelarudolj.ro/consilieri/',
};

const NICOLAE_BALCESCU_COUNCIL_PARTY_SOURCE = {
  label: 'Primăria Nicolae Bălcescu',
  kind: 'official',
  url: 'https://www.primarianicolaebalcescu.ro/despre-institutie/consiliul-local/',
};

const COCORA_LUNGU_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_ialomita/consiliul-local/cocora/',
};

const PODENII_NOI_COUNCIL_PARTY_SOURCE = {
  label: 'Primăria Podenii Noi',
  kind: 'official',
  url: 'https://primariapodeniinoi.ro/componenta-consiliului-local/',
};

const RADAUTI_PRUT_COUNCIL_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_botosani/consiliul-local/radauti-prut/2',
};

const RODNA_COUNCIL_PARTY_SOURCE = {
  label: 'Comuna Rodna',
  kind: 'official',
  url: 'https://comunarodna.ro/consiliul-local-rodna/rapoarte-de-activitate-ale-consiliului-local.html',
};

const ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-13-alesi-locali/',
};

const PODOLENI_2020_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_neamt/consiliul-local/podoleni/',
};

const RADOMIRESTI_2020_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_olt/consiliul-local/radomiresti/21',
};

const DANESTI_COUNCIL_PARTY_SOURCE = {
  label: 'Comuna Dănești',
  kind: 'official',
  url: 'https://www.comunadanesti.ro/consiliul-local/componenta/',
};

const BUMBESTI_JIU_2020_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_gorj/consiliul-local/bumbesti-jiu/2',
};

const CORBENI_2020_PARTY_SOURCE = {
  label: 'Consiliul Județean Argeș',
  kind: 'official',
  url: 'https://www.cjarges.ro/documents/45853/959771/PV%2Bconstituire%2B26.10.2020.pdf/a2613be0-79a7-4426-9d0a-ba1342a41c3b',
};

const PADINA_2020_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_buzau/consiliul-local/padina/21',
};

const PERIETI_2020_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_ialomita/consiliul-local/perieti/',
};

const ANI_DEC_2023_TEN_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-10-alesi-locali-2/',
};

const ANI_DEC_2023_FIRST_TEN_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-10-alesi-locali/',
};

const ANI_AUG_2022_SEVEN_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-7-alesi-locali-3/',
};

const ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-12-alesi-locali/',
};

const ANI_PUBLIC_OFFICIALS_SIX_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-6-persoane-prevazute-de-legea-nr-176-2010/',
};

const ANI_PUBLIC_OFFICIALS_FIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/c-o-m-u-n-i-c-a-t-privind-incidente-de-integritate-5-persoane-prevazute-de-legea-nr-176-2010/',
};

const ANI_PUBLIC_OFFICIALS_TEN_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-10-persoane-prevazute-de-legea-nr-176-2010-2/',
};

const ANI_PUBLIC_OFFICIALS_FOUR_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-4-persoane-prevazute-de-legea-nr-176-2010-6/',
};

const ANI_PUBLIC_OFFICIALS_THREE_2024_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-3-persoane-prevazute-de-legea-nr-176-2010-4/',
};

const ANI_PUBLIC_OFFICIALS_THREE_2023_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-3-persoane-prevazute-de-legea-nr-176-2010/',
};

const ANI_PUBLIC_OFFICIALS_FIVE_2021_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-5-persoane-prevazute-de-legea-nr-176-2010/',
};

const ANI_FEB_2022_EIGHTEEN_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-18-persoane-prevazute-de-legea-nr-176-2010/',
};

const ANI_APR_2025_SIX_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-6-persoane-prevazute-de-legea-nr-176-2010-5/',
};

const ANI_FEB_2023_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-6-persoane-prevazute-de-legea-nr-176-2010-3/',
};

const ANI_AUG_2022_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-8-persoane-prevazute-de-legea-nr-176-2010/',
};

const AMZOI_PSD_CANDIDACY_SOURCE = {
  label: 'Reper24',
  kind: 'press',
  url: 'https://reper24.ro/drept-la-replica/',
};

const ANI_FEB_2024_TWO_PUBLIC_OFFICIALS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3578&PID=20',
};

const ANI_DEC_2023_THREE_PUBLIC_OFFICIALS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3553&PID=20',
};

const ANI_APR_2023_EIGHT_PUBLIC_OFFICIALS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3466&PID=20',
};

const ANI_JAN_2023_FIVE_PUBLIC_OFFICIALS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3430&PID=20',
};

const ANI_NOV_2022_SIX_PUBLIC_OFFICIALS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3411&PID=20',
};

const ANI_OCT_2022_EIGHT_PUBLIC_OFFICIALS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3390&PID=20',
};

const ANI_AUG_2022_FOUR_PUBLIC_OFFICIALS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3366&PID=20',
};

const ANI_AUG_2022_MEDICAL_MANAGERS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3358&PID=20',
};

const MIRON_BRAD_PSD_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_hunedoara/consiliul-local/brad/6',
};

const ANI_JAN_2021_FOUR_PUBLIC_SERVANTS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3037&PID=20',
};

const ANI_OCT_2020_FIVE_PUBLIC_SERVANTS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3014&PID=20',
};

const ANI_DEC_2019_PUBLIC_SERVANT_MEDICAL_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=2915&PID=20',
};

const ANI_NOV_2019_TWO_PUBLIC_SERVANTS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=2907&PID=20',
};

const ANI_NOV_2019_TWO_MORE_PUBLIC_SERVANTS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=2892&PID=20',
};

const ANI_OCT_2019_MEDICAL_LEADERS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=2891&PID=20',
};

const ANI_OCT_2019_TEN_PUBLIC_SERVANTS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=2884&PID=20',
};

const ANI_JUL_2019_PUBLIC_SERVANTS_MEDICAL_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=2860&PID=20',
};

const ANI_NOV_2020_THREE_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3028&PID=20',
};

const ANI_NOV_2020_SEVENTEEN_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3020&PID=20',
};

const ANI_OCT_2020_THREE_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3015&PID=20',
};

const ANI_JUL_2020_SIX_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=2997&PID=20',
};

const ANI_JUN_2020_TEN_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=2991&PID=20',
};

const ANI_JUN_2020_SEVEN_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=2988&PID=20',
};

const ANI_FEB_2020_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=2950&PID=20',
};

const ANI_MAY_2022_TWELVE_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3238&PID=20',
};

const ANI_DEC_2021_NINE_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3194&PID=20',
};

const ANI_OCT_2021_FIVE_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3186&PID=20',
};

const BOTA_IOAN_DUMITRU_PSD_SOURCE = {
  label: 'Mesagerul de Sibiu',
  kind: 'press',
  url: 'https://mesageruldesibiu.ro/fotoliu-cu-greutate-ioan-bota-sef-peste-sase-judete/',
};

const ANI_OCT_2021_NINE_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3184&PID=20',
};

const ANI_JUL_2021_SIXTEEN_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3165&PID=20',
};

const ANI_JUL_2021_TWENTY_TWO_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3148&PID=20',
};

const ANI_MAY_2021_FOUR_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3107&PID=20',
};

const ANI_MAY_2021_SEVENTEEN_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3093&PID=20',
};

const ANI_MAR_2021_THREE_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3053&PID=20',
};

const ANI_FEB_2021_EIGHT_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3049&PID=20',
};

const ANI_FEB_2021_SIX_PUBLIC_PERSONS_ARCHIVE_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://old.integritate.eu/Comunicate.aspx?Action=1&M=NewsV2&NewsId=3040&PID=20',
};

const TITEA_PSD_SOURCE = {
  label: 'Newsweek România',
  kind: 'press',
  url: 'https://newsweek.ro/politica/un-director-romatsa-fost-secretar-de-stat-si-lider-psd-maramures-nu-poate-justifica-800000-lei',
};

const MITULETU_PSD_SOURCE = {
  label: 'Curs de Guvernare',
  kind: 'press',
  url: 'https://cursdeguvernare.ro/constantin-mituletu-psd-numit-prin-votul-parlamentului-la-sefia-autoritatii-permanente-electorale.html',
};

const GORAN_CAMPINA_SOURCE = {
  label: 'Ziarul de Ploiești',
  kind: 'press',
  url: 'https://www.zdp.ro/campina-mihai-goran-seful-serviciului-ordine-publica-al-politiei-locale-cercetat-pentru-avere-nejustificata.html',
};

const TUDORA_DORIN_PARTY_SOURCE = {
  label: 'Observatorul Prahovean',
  kind: 'press',
  url: 'https://www.observatorulph.ro/administratie/2595713-dorin-tudora-pnl-si-a-dat-demisia-din-consiliul-judetean-prahova-a-fost-numit-director-general-la-conpet',
};

const BRADEA_GRIGORE_PARTY_SOURCE = {
  label: 'Gazeta de Bistrita',
  kind: 'press',
  url: 'https://gazetadebistrita.ro/grigore-bradea-nu-mai-este-primarul-comunei-chiuza/',
};

const GHINDAOANI_ANTOCHI_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_neamt/consiliul-local/ghindaoani/19',
};

const SCUNDU_BLEJAN_PARTY_SOURCE = {
  label: 'Eveniment Valcean',
  kind: 'press',
  url: 'https://evenimentvalcean.ro/psd-scundu-incepe-o-noua-etapa-sub-conducerea-primarului-mihaita-george-blejan/',
};

const MIRCESTI_ANTOANE_PARTY_SOURCE = {
  label: 'Primaria Mircesti',
  kind: 'official',
  url: 'https://mircesti.ro/hcl-2021/',
};

const STRAMTURA_IAGAR_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_maramures/consiliul-local/stramtura/',
};

const HARABAGIU_PSD_SOURCE = {
  label: 'Ziarul de Iasi',
  kind: 'press',
  url: 'https://www.ziaruldeiasi.ro/stiri/fostul-viceprimar-gabriel-harabagiu-cercetat-pentru-conflict-de-interese-a-fost-sesizat-parchetul--331626.html',
};

const OSVATH_UDMR_SOURCE = {
  label: 'UDMR',
  kind: 'official',
  url: 'https://udmr.ro/profil/osvath-csaba',
};

const BUSTENI_COUNCIL_SOURCE = {
  label: 'Orasul Busteni',
  kind: 'official',
  url: 'https://orasul-busteni.ro/wp-content/files/lista_CL.pdf',
};

const HAIDUC_USR_SOURCE = {
  label: 'USR',
  kind: 'official',
  url: 'https://next.usr.ro/stiri/usr-sapte-candidati-la-alegerile-locale-din-11-iunie',
};

const COLTEA_PNL_SOURCE = {
  label: 'NewsBV',
  kind: 'press',
  url: 'https://newsbv.ro/consilier-local-cu-atributii-de-viceprimar-la-crizbav-conflict-de-interese/',
};

const HARLAU_RUGINA_PNL_SOURCE = {
  label: 'BIT24',
  kind: 'press',
  url: 'https://bit24.ro/ales-local-din-harlau-sanctionat-pentru-conflict-de-interese/',
};

const STRUGARI_DOSPINESCU_PARTY_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_bacau/consiliul-local/strugari/',
};

const TOPOLOV_PNL_SOURCE = {
  label: 'PNL Constanta',
  kind: 'official',
  url: 'https://pnlconstanta.ro/consiliul-judetean-constanta/',
};

const BLAGA_LUCIAN_PNL_SOURCE = {
  label: 'JustNews',
  kind: 'press',
  url: 'https://justnews.ro/un-consilier-judetean-liberal-din-timis-proaspat-demisionat-a-pierdut-procesul-de-integritate-cu-ani/',
};

const BOBIC_NARCIS_PSD_SOURCE = {
  label: 'PressAlert',
  kind: 'press',
  url: 'https://www.pressalert.ro/2016/07/schimbare-componenta-cj-timis-pesedistul-tiuch-renuntat-la-mandat-cine-i-luat-locul/',
};

const SASU_VASILE_PNL_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/rezultate_botosani/primarie/durnesti/1',
};

const CURTEA_ARGES_POPESCU_PSD_SOURCE = {
  label: 'Arges Expres',
  kind: 'press',
  url: 'https://argesexpres.ro/index.php/administratie/36271-la-curtea-de-arges-au-fost-validati-17-consilieri-locali',
};

const ONESTI_PANFIL_INDEPENDENT_SOURCE = {
  label: 'Onesti Online',
  kind: 'press',
  url: 'https://www.onestionline.ro/politica/administratie2020/administratia2020.htm',
};

const ONESTI_PANFIL_PSD_SOURCE = {
  label: 'JustNews',
  kind: 'press',
  url: 'https://justnews.ro/un-consilier-judetean-psd-din-bacau-a-pierdut-procesul-cu-ani-care-il-gasise-in-conflict-de-interese-administrativ-pe-cand-era-consilier-local-la-onesti/',
};

const RATB_ADRIAN_SORIN_MIHAI_PSD_SOURCE = {
  label: 'Digi24',
  kind: 'press',
  url: 'https://www.digi24.ro/stiri/economie/companii/cum-a-ajuns-stb-o-gaura-neagra-sufocata-de-numiri-politice-sindicat-si-masuri-populiste-1809995',
};

const SULINA_HUBATI_PSD_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_tulcea/consiliul-local/sulina/',
};

const HUEDIN_COZEA_PNL_SOURCE = {
  label: 'Primaria Huedin',
  kind: 'official',
  url: 'https://primariahuedin.ro/wp-content/uploads/2020/12/H.C.L.-nr.59-validare-mandat-de-consilier-local-ales-iunie-2016.pdf',
};

const FOROTIC_MUNEA_PSD_SOURCE = {
  label: 'Primaria Forotic',
  kind: 'official',
  url: 'https://comunaforotic.ro/despre-institutie/consiliul-local/componenta-consiliului-local/',
};

const IC_BRATIANU_POPA_PNL_SOURCE = {
  label: 'Ziua Constanta',
  kind: 'press',
  url: 'https://www.ziuaconstanta.ro/stiri/eveniment/popa-cristina-din-comuna-ic-bratianu-judetul-tulcea-gasita-incompatibila-de-ani-816584.html',
};

const SONA_BIRO_UDMR_SOURCE = {
  label: 'Alba24',
  kind: 'press',
  url: 'https://alba24.ro/consilier-local-din-sona-gasit-in-stare-de-incompatibilitate-de-ani-firma-la-care-era-administrator-contracte-cu-primaria-982502.html',
};

const MISCA_DUMBRAVA_PNL_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_arad/primarie/misca/18',
};

const AUR_CIRLIGEA_ANI_SOURCE = {
  label: 'AGERPRES',
  kind: 'press',
  url: 'https://agerpres.ro/justitie/2018/07/09/ani-20-alesi-locali-in-incompatibilitate-si-conflict-de-interese-administrativ--141812',
};

const AUR_CIRLIGEA_PARTY_SOURCE = {
  label: 'ProBrăila',
  kind: 'press',
  url: 'https://probr.ro/din-ce-comisii-permanente-vor-face-parte-cei-5-deputati-de-braila/',
};

const AUR_LASCA_CONVICTION_SOURCE = {
  label: 'Știrile ProTV',
  kind: 'press',
  url: 'https://stirileprotv.ro/stiri/actualitate/deputatul-mihai-lasca-ex-aur-condamnat-definitiv-la-2-ani-de-inchisoare-cu-suspendare-dupa-ce-a-batut-in-trafic-un-sofer.html',
};

const AUR_FOCSA_INVESTIGATION_SOURCE = {
  label: 'TVR Info',
  kind: 'press',
  url: 'https://tvrinfo.ro/deputatul-dumitru-focsa-are-dosar-penal-si-ordin-de-restrictie-dupa-ce-si-a-batut-sotia-politicianul-nu-e-la-prima-abatere/',
};

const AUR_FOCSA_PARTY_SOURCE = {
  label: 'AUR',
  kind: 'official',
  url: 'https://partidulaur.ro/focsa-dumitru-viorel-declaratie-de-presa-nu-uitati-de-romanii-din-ucraina/',
};

const AUR_CIUBUC_INVESTIGATION_SOURCE = {
  label: 'Realitatea',
  kind: 'press',
  url: 'https://www.realitatea.net/stiri/actual/un-fost-deputat-aur-sa-ales-cu-dosar-penal-motivul-este-ireal_6685463174f6882f9001f782',
};

const AUR_CIUBUC_TVR_SOURCE = {
  label: 'TVR Info',
  kind: 'press',
  url: 'https://tvrinfo.ro/deputatul-neafiliat-ciprian-ciubuc-urmarit-penal-pentru-distrugere-el-si-ar-fi-dus-turma-de-oi-pe-tarlaua-de-lucerna-a-unui-vecin-provocand-pagube-de-5-000-de-lei/',
};

const AUR_CIUBUC_PARTY_SOURCE = {
  label: 'AUR',
  kind: 'official',
  url: 'https://aurnews.ro/2021/07/12/ciprian-ciubuc-aur-felicitari-maia-sandu-aur-moldova-nu-abandoneaza-cauza-nationala-incepe-campania-pentru-alegerile-locale-din-2023/',
};

const AUR_SIMION_VOTER_CORRUPTION_SOURCE = {
  label: 'Digi24',
  kind: 'press',
  url: 'https://www.digi24.ro/stiri/actualitate/politica/procurorii-din-ialomita-il-ancheteaza-pe-george-simion-pentru-coruperea-alegatorilor-surse-ar-fi-vorba-de-caravanele-medicale-ale-aur-2642441',
};

const AUR_SIMION_PARTY_SOURCE = {
  label: 'AUR',
  kind: 'official',
  url: 'https://partidulaur.ro/george-simion-presedinte-aur-suntem-dispusi-sa-intram-la-guvernare-sa-reparam-si-sa-corectam-erorile-guvernarii-bolojan/',
};

const AUR_BOSUTAR_INVESTIGATION_SOURCE = {
  label: 'G4Media',
  kind: 'press',
  url: 'https://www.g4media.ro/un-politician-ales-deputat-in-noul-parlament-pus-sub-control-judiciar-dupa-ce-a-instigat-la-aruncarea-in-aer-a-sediului-prefecturii-din-bistrita-nasaud.html',
};

const AUR_CREFELEAN_INVESTIGATION_SOURCE = {
  label: 'G4Media',
  kind: 'press',
  url: 'https://www.g4media.ro/parchetul-general-confirma-urmarirea-penala-impotriva-unui-membru-aur-sef-de-cabinet-al-unei-deputate-prins-in-flagrant-cand-ar-fi-primit-1-500-de-lei-mita-el-a-fost-exclus-din-partid.html',
};

const AUR_IAGARU_CONVICTION_SOURCE = {
  label: 'PressHub',
  kind: 'press',
  url: 'https://www.presshub.ro/candidatura-unui-condamnat-penal-la-o-primarie-din-olt-a-fost-respinsa-avea-sustinerea-aur-reporter24-322632/',
};

const AUR_CAPALNASAN_CASE_SOURCE = {
  label: 'Stiripesurse',
  kind: 'press',
  url: 'https://www.stiripesurse.ro/un-candidat-aur-la-primarie-este-condamnat-pentru-delapidare-alte-trei-persoane-il-acuza-de-inselaciune_3377443.html',
};

const AUR_CAPALNASAN_PARTY_SOURCE = {
  label: 'Comuna Birchis',
  kind: 'official',
  url: 'https://www.comunabirchis.ro/storage/1241/Proces-verbal-%C3%AEncheiat-ast%C4%83zi%2C-8-mai-2024-privind-constatarea-r%C4%83m%C3%A2nerii-definitive-a-candidaturilor-la-alegerile-pentru-autorit%C4%83%C8%9Bile-administra%C8%9Biei-publice-locale-din-09.06.2024.PDF',
};

const AUR_MOSOIU_CONVICTION_SOURCE = {
  label: 'Gazeta de Sud',
  kind: 'press',
  url: 'https://www.gds.ro/Local/2015-07-31/comuna-dragutesti-ramas-fara-primar/',
};

const AUR_MOSOIU_PARTY_SOURCE = {
  label: 'Radio Infinit',
  kind: 'press',
  url: 'https://radioinfinit.ro/2024/10/24/mosoiu-nu-mai-am-pretentii-la-functia-de-primar/',
};

const AUR_IURES_INVESTIGATION_SOURCE = {
  label: 'G4Media',
  kind: 'press',
  url: 'https://www.g4media.ro/fost-ofiter-dga-si-membru-aur-cornel-iures-dosar-penal-pentru-ca-si-ar-fi-batut-sotia.html',
};

const AUR_CATALAN_INVESTIGATION_SOURCE = {
  label: 'Gazeta Dambovitei',
  kind: 'press',
  url: 'https://www.gazetadambovitei.ro/actual/ancheta/adrian-catalan-consilier-local-aur-la-titu-vizat-de-un-ordin-de-protectie-pentru-agresiune-sexuala-asupra-unor-copii/',
};

const AUR_VLAD_VIRGIL_INVESTIGATION_SOURCE = {
  label: 'Ziua de Constanta',
  kind: 'press',
  url: 'https://www.ziuaconstanta.ro/stiri/justitie/consilierul-aur-virgil-vlad-din-comuna-oltina-si-sefa-serviciului-social-din-primarie-retinuti-pentru-24-de-ore-de-procurorii-diicot-846328.html',
};

const AUR_PAC_PROTECTION_ORDER_SOURCE = {
  label: 'TurdaNews',
  kind: 'press',
  url: 'https://turdanews.net/un-consilier-local-aur-din-baisoara-a-primit-ordin-de-protectie/',
};

const AUR_DUNGACIU_CASE_SOURCE = {
  label: 'Stirile ProTV',
  kind: 'press',
  url: 'https://stirileprotv.ro/stiri/actualitate/curtea-de-apel-bucuresti-respinge-contestatia-lui-dan-dungaciu-in-dosarul-in-care-este-judecat-pentru-abuz-in-serviciu.html',
};

const AUR_DUNGACIU_PARTY_SOURCE = {
  label: 'AUR',
  kind: 'official',
  url: 'https://partidulaur.ro/dan-dungaciu-prim-vicepresedinte-aur-umilinta-romaniei-la-chisinau-de-27-martie-absente-oficiale-si-un-esec-diplomatic-de-proportii/',
};

const AUR_TONITA_CONVICTION_SOURCE = {
  label: 'Puterea',
  kind: 'press',
  url: 'https://www.puterea.ro/un-controversat-personaj-din-anturajul-lui-george-simion-este-consilier-al-presedintelui-anpc-cristian-popescu-piedone/',
};

const AUR_TONITA_PARTY_SOURCE = {
  label: 'PS News',
  kind: 'press',
  url: 'https://psnews.ro/alegeri-parlamentare-2024-galati-candidatii-aur-la-camera-deputatilor-si-senat/',
};

const AUR_GEAMANU_CASE_SOURCE = {
  label: 'Gorjeanul',
  kind: 'press',
  url: 'https://www.gorjeanul.ro/in-numele-afdpr-gorj-dublul-inculpat-geamanu-alaturi-de-odrasla-la-dezvelirea-monumentului-fostilor-detinuti-politici/',
};

const AUR_GEAMANU_PARTY_SOURCE = {
  label: 'AUR',
  kind: 'official',
  url: 'https://partidulaur.ro/stefan-geamanu-senator-aur-inchiderea-centralelor-pe-carbune-este-o-condamnare-la-frig-si-saracie-dictata-de-bruxelles-nu-putem-gira-distrugerea-sistemului-energetic-national/',
};

const AUR_TARZIU_PARTY_SOURCE = {
  label: 'AUR',
  kind: 'official',
  url: 'https://partidulaur.ro/claudiu-tarziu-aur-suntem-gardienii-suveranitatii-libertatii-familiei-si-economiei-nationale/',
};

const AUR_LULEA_PARTY_SOURCE = {
  label: 'AUR',
  kind: 'official',
  url: 'https://partidulaur.ro/marius-lulea-prim-vicepresedinte-aur-suntem-obligati-sa-intretinem-o-administratie-stufoasa-o-birocratie-inutila-care-tine-romania-sechestrata-in-saracie/',
};

const AUR_PAUNESCU_PARLIAMENT_SOURCE = {
  label: 'Senatul Romaniei',
  kind: 'official',
  url: 'https://www.senat.ro/FisaSenator.aspx?ParlamentarID=0D9385DE-0338-47F9-A85D-49BFC8632384',
};

const AUR_NEACSU_ANI_SOURCE = {
  label: 'Monitorul de Cluj',
  kind: 'press',
  url: 'https://www.monitorulcj.ro/politica-administratie/101651-consilier-din-primaria-cluj-napoca-gasit-incompatibil-de-ani',
};

const AUR_NEGOESCU_PROTECTION_ORDER_SOURCE = {
  label: 'B1TV',
  kind: 'press',
  url: 'https://www.b1tv.ro/politica/tarziu-e-convins-ca-deputatii-aur-n-au-legatura-cu-violentele-de-la-proteste-intrebat-daca-e-mandru-de-colegul-sau-care-a-avut-interdictie-sa-se-apropie-de-fiica-minora-nu-intram-in-bucata-1565271.html',
};

const AUR_NICU_VIOREL_DNA_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://m.ziare.com/stiri-timisoara/stiri-actualitate/primarul-nicu-viorel-candidat-aur-la-primaria-sacalaz-cercetat-de-dna-timisoara-pentru-abuz-in-serviciu-in-cadrul-unui-dosar-disjuns-de-parchetul-european-8979766',
};

const AUR_MURAD_ELECTORAL_BRIBERY_SOURCE = {
  label: 'Newsweek Romania',
  kind: 'press',
  url: 'https://newsweek.ro/actualitate/mohammad-murad-dosar-penal-pentru-mita-electorala-candideaza-la-mangalia',
};

const AUR_MURAD_PARTY_SOURCE = {
  label: 'AUR',
  kind: 'official',
  url: 'https://partidulaur.ro/wp-content/uploads/2025/10/D.-Mohammad-Murad-participarea-angajatilor-la-profit-1.pdf',
};

const AUR_JURAVLEA_CONVICTION_SOURCE = {
  label: 'Articulat',
  kind: 'press',
  url: 'https://www.articulat.ro/2024/11/20/gheorghe-juravlea-pierdere-mandat',
};

const AUR_RINGO_DAMUREANU_CONVICTION_SOURCE = {
  label: 'B1TV',
  kind: 'press',
  url: 'https://www.b1tv.ro/politica/cine-este-ringo-damureanu-condamnat-cu-amenda-penala-pentru-lovire-deputatul-aur-a-participat-la-consultarile-cu-klaus-iohannis-354250.html',
};

const AUR_RINGO_DAMUREANU_PARTY_SOURCE = {
  label: 'AUR',
  kind: 'official',
  url: 'https://partidulaur.ro/ringo-damureanu-intrebare-catre-m-a-i-a-constatat-politia-vreo-fapta-penala-la-data-de-28-mai-2010-in-urma-apelului-doamnei-boara-mioara-la-serviciul-unic-112/',
};

const AUR_DRAGOS_STEFAN_CASE_SOURCE = {
  label: 'Bacau.net',
  kind: 'press',
  url: 'https://www.bacau.net/cosmin-necula-si-dragos-stefan-au-fost-achitati-pentru-abuz-in-serviciu/',
};

const AUR_DRAGOS_STEFAN_PARTY_SOURCE = {
  label: 'Bacau.net',
  kind: 'press',
  url: 'https://www.bacau.net/dragos-stefan-prezentat-oficial-candidat-aur-pentru-primaria-bacau/',
};

const AUR_BEC_PROTESTS_SOURCE = {
  label: 'Gandul',
  kind: 'press',
  url: 'https://www.gandul.ro/justitie/cinci-deputati-aur-prezenti-la-violentele-din-fata-bec-chemati-la-parchet-george-simion-acuza-un-sistem-corupt-si-politie-politica-20454569',
};

const ANI_JUL_2023_LOCAL_OFFICIALS_RECORDS = [
  {
    name: 'Vizitiu Ion',
    party: 'PSD',
    position: 'Primar al comunei Breasta, județul Dolj',
    position_type: 'mayor',
    crime: 'Avere nejustificată; fals în declarații (sesizare parchet)',
    status: 'investigated',
    details:
      'ANI a constatat în iulie 2023 o diferență nejustificată de 114.540 lei între averea dobândită și veniturile realizate în mandatul de primar 2016-2020 și a sesizat Parchetul de pe lângă ÎCCJ pentru indicii de fals în declarații privind venituri din jocuri de noroc nedeclarate.',
    verified_at: '2026-05-24',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Breasta, județul Dolj.',
    },
    sources: [ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE, BREASTA_VIZITIU_PARTY_SOURCE],
  },
  {
    name: 'Solomencu Ciprian',
    party: 'PSD',
    position: 'Primar al comunei Nufăru, județul Tulcea',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în iulie 2023 că, în mandatul de primar început în 2020, ar fi încheiat două acte juridice care au produs un folos material pentru soția sa, constând în încasarea de subvenții în calitate de persoană fizică autorizată.',
    verified_at: '2026-05-24',
    geography: {
      county: 'Tulcea',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Nufăru, județul Tulcea.',
    },
    sources: [ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE, NUFARU_SOLOMENCU_PARTY_SOURCE],
  },
  {
    name: 'Mihuț Gavril',
    party: 'PNL',
    position: 'Primar al comunei Chiuiești, județul Cluj',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în iulie 2023 că, în mandatul de primar început în 2020, ar fi emis acte administrative care au produs un folos material pentru fiul său, prin achiziții directe ale primăriei de la societatea acestuia în valoare de 14.440,03 lei.',
    verified_at: '2026-05-24',
    geography: {
      county: 'Cluj',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Chiuiești, județul Cluj.',
    },
    sources: [ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE, CHIUIESTI_MIHUT_PARTY_SOURCE],
  },
  {
    name: 'Hibais Leontin Dorin',
    party: 'PNL',
    position: 'Primar și fost viceprimar al comunei Sarmizegetusa, județul Hunedoara',
    position_type: 'mayor',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în iulie 2023 că, în perioada exercitării mandatului de viceprimar, societatea comercială în care soția sa era asociat unic și administrator ar fi încheiat două contracte de prestări servicii, de 6.664 lei, cu Școala Gimnazială Sarmizegetusa.',
    verified_at: '2026-05-24',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția publică relevantă este legată de comuna Sarmizegetusa, județul Hunedoara.',
    },
    sources: [ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE, SARMIZEGETUSA_HIBAIS_PARTY_SOURCE],
  },
  {
    name: 'Cândulețiu Daniel',
    party: 'PNL',
    position: 'Primar al comunei Cârța, județul Sibiu',
    position_type: 'mayor',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în iulie 2023 că, în perioada 22 octombrie 2020 - 2 noiembrie 2021, ar fi exercitat simultan funcția de primar și calitatea de comerciant persoană fizică.',
    verified_at: '2026-05-24',
    geography: {
      county: 'Sibiu',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Cârța, județul Sibiu.',
    },
    sources: [ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE, CARTA_CANDULETIU_PARTY_SOURCE],
  },
  {
    name: 'Mincan Marin',
    party: 'PNL',
    position: 'Consilier local al comunei Celaru, județul Dolj',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în iulie 2023 că, în perioada 30 iunie 2016 - 31 decembrie 2022, Primăria Celaru și Consiliul Local Celaru ar fi încheiat achiziții directe de 622.587,71 lei cu societatea comercială în cadrul căreia persoana evaluată deținea funcția de director.',
    verified_at: '2026-05-24',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Celaru, județul Dolj.',
    },
    sources: [ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE, CELARU_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Popescu Ionuț-Gabriel',
    party: 'PSD',
    position: 'Consilier local al comunei Nicolae Bălcescu, județul Călărași',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în iulie 2023 că, în mandatul de consilier local început în 2020, ar fi participat la adoptarea unor hotărâri privind prelungirea contractelor de închiriere ale terenurilor primăriei și modificarea taxei anuale de închiriere, persoana evaluată fiind beneficiar direct.',
    verified_at: '2026-05-24',
    geography: {
      county: 'Călărași',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Nicolae Bălcescu, județul Călărași.',
    },
    sources: [ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE, NICOLAE_BALCESCU_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Teodorescu Sergiu',
    party: 'PSD',
    position: 'Consilier local al comunei Nicolae Bălcescu, județul Călărași',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în iulie 2023 că, în mandatul de consilier local început în 2020, ar fi participat la adoptarea unei hotărâri privind prelungirea unor contracte de închiriere ale terenurilor primăriei și modificarea taxei anuale de închiriere, tatăl său fiind beneficiar direct.',
    verified_at: '2026-05-24',
    geography: {
      county: 'Călărași',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Nicolae Bălcescu, județul Călărași.',
    },
    sources: [ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE, NICOLAE_BALCESCU_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Lungu Victor',
    party: 'PNL',
    position: 'Consilier local al comunei Cocora, județul Ialomița',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în iulie 2023 că, în mandatul de consilier local, ar fi participat la adoptarea unei hotărâri privind inițierea procedurii de închiriere a unor terenuri comunale, iar ulterior atât persoana evaluată, cât și fratele său au încheiat contracte de închiriere cu comuna.',
    verified_at: '2026-05-24',
    geography: {
      county: 'Ialomița',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Cocora, județul Ialomița.',
    },
    sources: [ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE, COCORA_LUNGU_PARTY_SOURCE],
  },
  {
    name: 'Mareș Florin',
    party: 'PNL',
    position: 'Consilier local al comunei Podenii Noi, județul Prahova',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în iulie 2023 că, în mandatul de consilier local început în 2020, societatea comercială a soției sale ar fi încheiat un contract de prestări servicii și un act adițional cu Școala Gimnazială Comuna Podenii Noi, entitate aflată în subordinea UAT Podenii Noi.',
    verified_at: '2026-05-24',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Podenii Noi, județul Prahova.',
    },
    sources: [ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE, PODENII_NOI_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Hrițcușoru Fănică',
    party: 'PNL',
    position: 'Consilier local al comunei Rădăuți-Prut, județul Botoșani',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în iulie 2023 că, în calitate de consilier local, ar fi participat la adoptarea hotărârii din 31 martie 2021 privind prelungirea unor contracte de concesiune, iar ulterior a încheiat un act adițional la contractul său de concesiune din 2016.',
    verified_at: '2026-05-24',
    geography: {
      county: 'Botoșani',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Rădăuți-Prut, județul Botoșani.',
    },
    sources: [ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE, RADAUTI_PRUT_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Culcă Istrate',
    party: 'PSD',
    position: 'Fost consilier local al comunei Rodna, județul Bistrița-Năsăud',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în iulie 2023 că, în mandatul de consilier local 2016-2020, societatea comercială în cadrul căreia soția sa deținea funcția de director economic ar fi încheiat cu Primăria Rodna un contract de prestări servicii în baza căruia a încasat 21.420 lei.',
    verified_at: '2026-05-24',
    geography: {
      county: 'Bistrița-Năsăud',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Rodna, județul Bistrița-Năsăud.',
    },
    sources: [ANI_JUL_2023_LOCAL_OFFICIALS_SOURCE, RODNA_COUNCIL_PARTY_SOURCE],
  },
];

const ANI_MAY_2022_LOCAL_OFFICIALS_RECORDS = [
  {
    name: 'Pavel Petre',
    party: 'PNL',
    position: 'Fost primar al comunei Ciocănești, județul Călărași',
    position_type: 'mayor',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în perioada 28 iunie 2016 - 15 octombrie 2020, a exercitat simultan funcția de primar și calitatea de comerciant persoană fizică.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Călărași',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al comunei Ciocănești, județul Călărași.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, CIOCANESTI_PAVEL_PARTY_SOURCE],
  },
  {
    name: 'Cernica Costică',
    party: 'PSD',
    position: 'Viceprimar al comunei Milcovul, județul Vrancea',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în perioada 3 noiembrie 2020 - 15 februarie 2021, a exercitat simultan funcția de viceprimar și calitatea de comerciant persoană fizică în propria întreprindere individuală.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Vrancea',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Milcovul, județul Vrancea.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, MILCOVUL_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Mihai Daniel Ionuț',
    party: 'PSD',
    position: 'Fost viceprimar al orașului Amara, județul Ialomița',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în perioada 30 iulie - 28 noiembrie 2019, a exercitat simultan funcția de viceprimar și calitatea de comerciant persoană fizică în propria întreprindere individuală.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Ialomița',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al orașului Amara, județul Ialomița.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, AMARA_DANIEL_MIHAI_PARTY_SOURCE],
  },
  {
    name: 'Tomuș Dorel',
    party: 'PSD',
    position: 'Fost consilier județean în Consiliul Județean Alba',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în perioada 9 iulie 2018 - 28 martie 2019, a deținut simultan mandatul de consilier județean și funcția de director general sau director general adjunct într-o societate comercială cu acționar unic Ministerul Economiei.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Alba',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de consilier județean în Consiliul Județean Alba.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, TOMUS_DOREL_PARTY_SOURCE],
  },
  {
    name: 'Dragomir Cristian Eugen',
    party: 'PNL',
    position: 'Consilier local al municipiului Caransebeș, județul Caraș-Severin',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; sesizare parchet',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în mandatul de consilier local, a participat la adoptarea unei hotărâri privind darea în folosință gratuită a unui teren către clubul sportiv în cadrul căruia deținea o funcție contractuală și a sesizat Parchetul de pe lângă ÎCCJ pentru indicii privind folosirea funcției pentru favorizarea unor persoane.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Caransebeș, județul Caraș-Severin.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, CARANSEBES_DRAGOMIR_PARTY_SOURCE],
  },
  {
    name: 'Cârpian Ion',
    party: 'UNPR',
    position: 'Fost consilier local al orașului Moldova Nouă, județul Caraș-Severin',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în mandatul de consilier local, a participat la adoptarea a două hotărâri ale Consiliului Local Moldova Nouă privind activitatea Ocolului Silvic Moldova Nouă, în timp ce deținea funcții de șef district și șef ocol în cadrul acelui ocol.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al orașului Moldova Nouă, județul Caraș-Severin.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, MOLDOVA_NOUA_CARPIAN_PARTY_SOURCE],
  },
  {
    name: 'Turculeanu Constantin',
    party: 'PSD',
    position: 'Consilier local al comunei Bârca, județul Dolj',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în mandatul 2016-2020 de consilier local, societatea comercială administrată de fiul său a încheiat un contract de prestări servicii cu Primăria comunei Bârca.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Bârca, județul Dolj.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, BARCA_TURCULEANU_PARTY_SOURCE],
  },
  {
    name: 'Boldiș Cornelia Alexandra',
    party: 'USR',
    position: 'Consilier local al comunei Rodna, județul Bistrița-Năsăud',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în mandatul de consilier local, a participat la adoptarea unei hotărâri privind taxe speciale în comuna Rodna, inclusiv taxa pentru terenul sintetic de la plata căreia erau exceptați sportivii legitimați la cluburi locale, deși soțul său era legitimat la un club sportiv din comună.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Bistrița-Năsăud',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Rodna, județul Bistrița-Năsăud.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, RODNA_BOLDIS_PARTY_SOURCE],
  },
  {
    name: 'Fărcaș Nicolae',
    party: 'PSD',
    position: 'Consilier local al comunei Hodac, județul Mureș',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; sesizare parchet',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în mandatul 2016-2020 de consilier local, a participat la acte administrative privind atribuirea directă a pășunilor proprietate privată ale comunei Hodac, care puteau produce folos material pentru fiul său, și a sesizat Parchetul de pe lângă ÎCCJ.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Hodac, județul Mureș.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, HODAC_FARCAS_PARTY_SOURCE],
  },
  {
    name: 'Toader Vasile',
    party: 'PSD',
    position: 'Consilier local al comunei Cocora, județul Ialomița',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; sesizare parchet',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în mandatul 2020-2024 de consilier local, a participat la adoptarea unei hotărâri privind închirierea pajiștilor comunale, după care a încheiat cu Primăria Cocora un contract de închiriere pentru o pajiște comunală; ANI a sesizat și Parchetul de pe lângă ÎCCJ.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Ialomița',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Cocora, județul Ialomița.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, COCORA_TOADER_PARTY_SOURCE],
  },
  {
    name: 'Drugan Petru',
    party: 'PNL',
    position: 'Consilier local al comunei Hălchiu, județul Brașov',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în mandatul de consilier local, a participat la deliberarea și adoptarea hotărârii privind închirierea directă a unor suprafețe de pășune proprietate privată a comunei Hălchiu, iar ulterior primăria a încheiat un contract de închiriere cu tatăl său.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Hălchiu, județul Brașov.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, HALCHIU_DRUGAN_NECULA_PARTY_SOURCE],
  },
  {
    name: 'Necula Samoilă',
    party: 'UNPR',
    position: 'Fost consilier local al comunei Hălchiu, județul Brașov',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în mandatul 2016-2020 de consilier local, a participat la deliberarea și adoptarea hotărârii privind închirierea directă a unor pășuni comunale, iar ulterior primăria a încheiat un contract de închiriere cu o întreprindere individuală al cărei titular era fiul său.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Hălchiu, județul Brașov.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, HALCHIU_DRUGAN_NECULA_PARTY_SOURCE],
  },
  {
    name: 'Martin Mihai Cristinel',
    party: 'PSD',
    position: 'Fost consilier local al municipiului Tecuci, județul Galați',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2022 că, în perioada 2020-2021, a exercitat simultan mandatul de consilier local și calitatea de administrator în consiliul de administrație al unei societăți comerciale de interes local.',
    verified_at: '2026-05-25',
    geography: {
      county: 'Galați',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Tecuci, județul Galați.',
    },
    sources: [ANI_MAY_2022_LOCAL_OFFICIALS_SOURCE, ANI_MAY_2022_AGERPRES_SOURCE, TECUCI_MARTIN_PARTY_SOURCE],
  },
];

const ANI_2021_2023_BACKFILL_LOCAL_OFFICIALS_RECORDS = [
  {
    name: 'Heler Sandu',
    party: 'PNL',
    position: 'Primar al comunei Avram Iancu, județul Alba',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, în exercitarea atribuțiilor de primar, ar fi semnat mai multe documente care au produs un folos patrimonial acestuia.',
    verified_at: '2026-06-01',
    geography: {
      county: 'Alba',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Avram Iancu, județul Alba.',
    },
    sources: [ANI_AUG_2022_SECOND_SEVEN_LOCAL_OFFICIALS_SOURCE, AVRAM_IANCU_HELER_PARTY_SOURCE],
  },
  {
    name: 'Preda Ion',
    party: 'PSD',
    position: 'Fost primar al comunei Brănești, județul Dâmbovița; ulterior consilier local',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, în perioada exercitării mandatului de primar, ar fi semnat o dispoziție prin care soția sa a fost scutită de restituirea unor venituri salariale încasate necuvenit.',
    verified_at: '2026-06-01',
    geography: {
      county: 'Dâmbovița',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al comunei Brănești, județul Dâmbovița.',
    },
    sources: [ANI_AUG_2022_SECOND_SEVEN_LOCAL_OFFICIALS_SOURCE, BRANESTI_PREDA_PARTY_SOURCE],
  },
  {
    name: 'Vezeteu Ioan',
    party: 'ALDE',
    position:
      'Viceprimar al comunei Pogana, județul Vaslui și funcționar public în Primăria Comunei Voinești',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că ar fi candidat și apoi ar fi exercitat mandatul de consilier local fără suspendarea corespunzătoare a raportului de serviciu din funcția publică deținută în Primăria Voinești.',
    verified_at: '2026-06-01',
    geography: {
      county: 'Vaslui',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Pogana, județul Vaslui.',
    },
    sources: [ANI_AUG_2022_SECOND_SEVEN_LOCAL_OFFICIALS_SOURCE, POGANA_VEZETEU_PARTY_SOURCE],
  },
  {
    name: 'Andone Ion',
    party: 'PSD',
    position: 'Primar al orașului Târgu Bujor, județul Galați; fost viceprimar',
    position_type: 'mayor',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că ar fi candidat și apoi ar fi exercitat mandatul de consilier local fără suspendarea corespunzătoare a raportului de serviciu din funcția publică deținută în Primăria Târgu Bujor.',
    verified_at: '2026-06-01',
    geography: {
      county: 'Galați',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al orașului Târgu Bujor, județul Galați.',
    },
    sources: [ANI_AUG_2022_SECOND_SEVEN_LOCAL_OFFICIALS_SOURCE, TARGU_BUJOR_ANDONE_PARTY_SOURCE],
  },
  {
    name: 'Preoțescu Marian',
    party: 'PNL',
    position: 'Consilier local al comunei Sălătrucel, județul Vâlcea',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, începând cu 23 octombrie 2020, ar fi exercitat simultan mandatul de consilier local și o funcție contractuală în aparatul de specialitate al primarului comunei Sălătrucel.',
    verified_at: '2026-06-01',
    geography: {
      county: 'Vâlcea',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Sălătrucel, județul Vâlcea.',
    },
    sources: [ANI_AUG_2022_SECOND_SEVEN_LOCAL_OFFICIALS_SOURCE, SALATRUCEL_PREOTESCU_PARTY_SOURCE],
  },
  {
    name: 'Marghiolescu Lucia-Nicoleta',
    party: 'Partida Romilor Pro-Europa',
    position: 'Consilier local al comunei Florești, județul Prahova',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, în perioada 15 iunie - 12 septembrie 2021, ar fi exercitat simultan mandatul de consilier local și o funcție contractuală la cancelaria prefectului din județul Prahova.',
    verified_at: '2026-06-01',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Florești, județul Prahova.',
    },
    sources: [ANI_AUG_2022_SECOND_SEVEN_LOCAL_OFFICIALS_SOURCE, FLORESTI_MARGHIOLESCU_PARTY_SOURCE],
  },
  {
    name: 'Hulea Ecaterina',
    party: 'PNL',
    position: 'Fost consilier local al comunei Vânători, județul Galați',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, în mandatul 2016-2020, ar fi încheiat cu Primăria Comunei Vânători, prin propriul PFA, două contracte de prestări servicii și un act adițional în valoare totală de 30.000 lei.',
    verified_at: '2026-06-01',
    geography: {
      county: 'Galați',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Vânători, județul Galați.',
    },
    sources: [ANI_AUG_2022_SECOND_SEVEN_LOCAL_OFFICIALS_SOURCE, VANATORI_HULEA_PARTY_SOURCE],
  },
  {
    name: 'Niță Marius Daniel',
    party: 'PER',
    position: 'Fost viceprimar al comunei Agigea, județul Constanța',
    position_type: 'local_official',
    crime: 'Fals în declarații',
    status: 'investigated',
    details:
      'ANI a sesizat în decembrie 2023 Parchetul de pe lângă ÎCCJ, susținând că nu ar fi menționat în declarațiile de avere depuse în 2018 și 2019 un imobil aflat în proprietate comună și apoi înstrăinarea acestuia.',
    verified_at: '2026-06-01',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Agigea, județul Constanța.',
    },
    sources: [ANI_DEC_2023_FIRST_TEN_LOCAL_OFFICIALS_SOURCE, AGIGEA_NITA_PARTY_SOURCE],
  },
  {
    name: 'Bălan Viorel',
    party: 'ALDE',
    position: 'Consilier local al comunei Puiești, județul Vaslui',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în perioada 1 august 2022 - 31 ianuarie 2023, ar fi deținut simultan mandatul de consilier local și calitatea de angajat cu contract individual de muncă în aparatul de specialitate al Consiliului Local Puiești.',
    verified_at: '2026-06-01',
    geography: {
      county: 'Vaslui',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Puiești, județul Vaslui.',
    },
    sources: [ANI_DEC_2023_FIRST_TEN_LOCAL_OFFICIALS_SOURCE, PUIESTI_BALAN_PARTY_SOURCE],
  },
  {
    name: 'Lupu Vasile',
    party: 'PNL',
    position: 'Primar al comunei Popești, județul Iași',
    position_type: 'mayor',
    crime: 'Folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat în decembrie 2021 Parchetul de pe lângă ÎCCJ, susținând că, în mandatul de primar 2016-2020, ar fi încheiat cu Primăria Popești un contract de vânzare-cumpărare prin care a dobândit imobile în suprafață totală de 3.000 mp.',
    verified_at: '2026-06-01',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Popești, județul Iași.',
    },
    sources: [ANI_DEC_2021_TWENTY_SIX_LOCAL_OFFICIALS_SOURCE, POPESTI_LUPU_PARTY_SOURCE],
  },
  {
    name: 'Cojocaru Gicu',
    party: 'PNL',
    position: 'Primar al comunei Cristian, județul Brașov',
    position_type: 'mayor',
    crime: 'Conflict de interese; folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat în decembrie 2021 Parchetul de pe lângă ÎCCJ, susținând că ar fi încheiat în nume propriu un contract de asistență juridică, iar ulterior, ca primar, ar fi semnat și aprobat contracte ale comunei cu același cabinet de avocatură.',
    verified_at: '2026-06-01',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Cristian, județul Brașov.',
    },
    sources: [ANI_DEC_2021_TWENTY_SIX_LOCAL_OFFICIALS_SOURCE, CRISTIAN_COJOCARU_PARTY_SOURCE],
  },
];

const ANI_DEC_2023_LOCAL_OFFICIALS_RECORDS = [
  {
    name: 'Mihai Dumitru-Daniel',
    party: 'PSD',
    position: 'Consilier local al comunei Podoleni, județul Neamț',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul 2020-prezent, ar fi participat la avizarea și adoptarea unor hotărâri privind scutiri de taxe și închirierea directă de terenuri comunale, deși actele produceau foloase pentru întreprinderea sa ori pentru entități ale tatălui său.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Neamț',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Podoleni, județul Neamț.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, PODOLENI_2020_PARTY_SOURCE],
  },
  {
    name: 'Mândrilaș Mihai',
    party: 'PSD',
    position: 'Consilier local al comunei Podoleni, județul Neamț',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul 2020-prezent, ar fi participat la avizarea și adoptarea unei hotărâri prin care au fost exceptați de la plata unei taxe agenți economici, inclusiv întreprinderea individuală al cărei titular era.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Neamț',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Podoleni, județul Neamț.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, PODOLENI_2020_PARTY_SOURCE],
  },
  {
    name: 'Grasu Adrian-Nicolae',
    party: 'PSD',
    position: 'Consilier local al comunei Podoleni, județul Neamț',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul 2020-prezent, ar fi participat în anul 2022 la emiterea și adoptarea unor acte administrative care au produs un folos material pentru soția sa, titular al unei întreprinderi individuale.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Neamț',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Podoleni, județul Neamț.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, PODOLENI_2020_PARTY_SOURCE],
  },
  {
    name: 'Achim Ionel',
    party: 'PSD',
    position: 'Consilier local al comunei Radomirești, județul Olt',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în perioada deținerii mandatului 2020-prezent, societatea la care era asociat unic și administrator unic ar fi încheiat două contracte de furnizare cu Primăria Radomirești, în valoare totală de 49.580 lei.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Olt',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Radomirești, județul Olt.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, RADOMIRESTI_2020_PARTY_SOURCE],
  },
  {
    name: 'David-Stanciu Marian',
    party: 'PNL',
    position: 'Consilier local al comunei Cocora, județul Ialomița',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 un conflict de interese administrativ și a sesizat Parchetul de pe lângă ÎCCJ, susținând că ar fi participat la adoptarea unei hotărâri privind închirierea de terenuri, iar ulterior soția și fratele său au încheiat contracte cu comuna.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Ialomița',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Cocora, județul Ialomița.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, COCORA_LUNGU_PARTY_SOURCE],
  },
  {
    name: 'Necula Valentin',
    party: 'PNL',
    position: 'Consilier local al comunei Cocora, județul Ialomița',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul 2020-prezent, ar fi participat la deliberarea și adoptarea a două hotărâri în baza cărora a încheiat cu Comuna Cocora contracte de închiriere pentru terenuri din domeniul privat al comunei.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Ialomița',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Cocora, județul Ialomița.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, COCORA_LUNGU_PARTY_SOURCE],
  },
  {
    name: 'Ștefănescu Mihail',
    party: 'PNL',
    position: 'Consilier local al comunei Nicolae Bălcescu, județul Călărași',
    position_type: 'local_official',
    crime: 'Folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat în decembrie 2023 Parchetul de pe lângă ÎCCJ, susținând că ar fi participat la deliberarea și adoptarea unor hotărâri pe baza cărora el, soția sa și societatea pe care o administra au încheiat contracte de închiriere de terenuri cu primăria.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Călărași',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Nicolae Bălcescu, județul Călărași.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, NICOLAE_BALCESCU_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Paliță Daniel',
    party: 'PSD',
    position: 'Consilier local al comunei Dănești, județul Gorj',
    position_type: 'local_official',
    crime: 'Infracțiune asimilată faptelor de corupție',
    status: 'investigated',
    details:
      'ANI a sesizat în decembrie 2023 DNA, susținând că, în exercitarea atribuțiilor de consilier local, ar fi aprobat bugetul comunei Dănești prin care s-au alocat 40.000 lei pentru reabilitarea unui monument, lucrare efectuată de societatea la care era asociat și administrator.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Gorj',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Dănești, județul Gorj.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, DANESTI_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Dădălău Dumitru',
    party: 'PNL',
    position: 'Consilier local al orașului Bumbești-Jiu, județul Gorj',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în perioada 1 octombrie 2020 - 31 ianuarie 2022, ar fi exercitat simultan mandatul de consilier local și funcția de director general al unei societăți pe acțiuni, filială a unei companii naționale.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Gorj',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al orașului Bumbești-Jiu, județul Gorj.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, BUMBESTI_JIU_2020_PARTY_SOURCE],
  },
  {
    name: 'Bostan Ștefan',
    party: 'USR',
    position: 'Consilier local al comunei Corbeni, județul Argeș',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul 2020-prezent, ar fi participat la deliberarea și adoptarea hotărârii privind închirierea unor terenuri comunale disponibile către o asociație în care avea calitatea de membru.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Corbeni, județul Argeș.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, CORBENI_2020_PARTY_SOURCE],
  },
  {
    name: 'Dan Jan',
    party: 'PNL',
    position: 'Consilier local al comunei Padina, județul Buzău',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatele 2016-2020 și 2020-prezent, societatea la care era asociat și director, iar soția sa asociat și administrator, ar fi încheiat cu Primăria Padina 30 de contracte de furnizare prin achiziție directă.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Buzău',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Padina, județul Buzău.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, PADINA_2020_PARTY_SOURCE],
  },
  {
    name: 'Agiu Marian',
    party: 'PNL',
    position: 'Fost consilier local al comunei Nicolae Bălcescu, județul Călărași',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul de consilier local 2020-2021, ar fi participat la adoptarea unei hotărâri prin care s-au prelungit contracte de închiriere pentru terenuri comunale și s-a modificat taxa anuală de închiriere, ulterior încheind un act adițional cu comuna.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Călărași',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Nicolae Bălcescu, județul Călărași.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, NICOLAE_BALCESCU_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Merlea Sile-Adrian',
    party: 'PNL',
    position: 'Fost consilier local al comunei Perieți, județul Ialomița',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în perioada exercitării mandatului de consilier local, ar fi participat la adoptarea bugetului comunei Perieți pentru anul 2021, prin care s-au alocat bani școlii gimnaziale în cadrul căreia deținea funcția de director.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Ialomița',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Perieți, județul Ialomița.',
    },
    sources: [ANI_DEC_2023_LOCAL_OFFICIALS_SOURCE, PERIETI_2020_PARTY_SOURCE],
  },
];

const ANI_DEC_2023_TEN_LOCAL_OFFICIALS_RECORDS = [
  {
    name: 'Tudora Dorin',
    party: 'PNL',
    position: 'Fost consilier județean în cadrul Consiliului Județean Prahova',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în perioada 15 octombrie 2020 - 15 februarie 2021, a deținut simultan mandatul de consilier județean și funcții de conducere la o societate cu capital integral de stat.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Județean Prahova.',
    },
    sources: [ANI_DEC_2023_TEN_LOCAL_OFFICIALS_SOURCE, TUDORA_DORIN_PARTY_SOURCE],
  },
  {
    name: 'Bradea Grigore',
    party: 'PSD',
    position: 'Primar al comunei Chiuza, județul Bistrița-Năsăud',
    position_type: 'mayor',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în perioada 15 iunie 2016 - 18 iulie 2023, a exercitat simultan funcția de primar și calitatea de comerciant persoană fizică.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Bistrița-Năsăud',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al comunei Chiuza, județul Bistrița-Năsăud.',
    },
    sources: [ANI_DEC_2023_TEN_LOCAL_OFFICIALS_SOURCE, BRADEA_GRIGORE_PARTY_SOURCE],
  },
  {
    name: 'Antochi Adrian',
    party: 'PSD',
    position: 'Primar al comunei Ghindăoani, județul Neamț',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul de primar, ar fi propus și susținut înființarea unui post contractual de consilier al primarului, post pe care l-a ocupat ulterior.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Neamț',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al comunei Ghindăoani, județul Neamț.',
    },
    sources: [ANI_DEC_2023_TEN_LOCAL_OFFICIALS_SOURCE, GHINDAOANI_ANTOCHI_PARTY_SOURCE],
  },
  {
    name: 'Blejan Mihăiță-George',
    party: 'PSD',
    position: 'Viceprimar al comunei Scundu, județul Vâlcea',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul de viceprimar, a participat la adoptarea unei hotărâri privind modificarea organigramei și statului de funcții al primăriei, act care a stat la baza angajării tatălui său.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Vâlcea',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Scundu, județul Vâlcea.',
    },
    sources: [ANI_DEC_2023_TEN_LOCAL_OFFICIALS_SOURCE, SCUNDU_BLEJAN_PARTY_SOURCE],
  },
  {
    name: 'Martin Eugen',
    party: 'PNL',
    position: 'Fost consilier local al municipiului Tecuci, județul Galați',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul de consilier local, a participat la deliberarea și adoptarea hotărârii prin care a fost numit administrator/director general al unei societăți din subordinea Consiliului Local Tecuci.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Galați',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Tecuci, județul Galați.',
    },
    sources: [ANI_DEC_2023_TEN_LOCAL_OFFICIALS_SOURCE, TECUCI_MARTIN_PARTY_SOURCE],
  },
  {
    name: 'Antoane Cristian',
    party: 'USR',
    position: 'Fost consilier local al comunei Mircești, județul Iași',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul de consilier local, a participat la adoptarea unei hotărâri privind înființarea unui post contractual în aparatul de specialitate al primarului, post pe care l-a ocupat ulterior.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Mircești, județul Iași.',
    },
    sources: [ANI_DEC_2023_TEN_LOCAL_OFFICIALS_SOURCE, MIRCESTI_ANTOANE_PARTY_SOURCE],
  },
  {
    name: 'Iagăr Cosma',
    party: 'PNL',
    position: 'Fost consilier local al comunei Strâmtura, județul Maramureș',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în perioada 24 octombrie - 1 decembrie 2020, a exercitat simultan funcția de consilier local și o funcție contractuală de asistent personal în Primăria Comunei Strâmtura.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Maramureș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Strâmtura, județul Maramureș.',
    },
    sources: [ANI_DEC_2023_TEN_LOCAL_OFFICIALS_SOURCE, STRAMTURA_IAGAR_PARTY_SOURCE],
  },
];

const ANI_DEC_2023_FIRST_AND_FEB_2026_LOCAL_RECORDS = [
  {
    name: 'Cotețiu Andrei',
    party: 'PNL',
    position: 'Consilier județean în Consiliul Județean Timiș',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în perioada 27 octombrie 2020 - 25 martie 2021, a exercitat simultan funcția de consilier județean și calitatea de membru în consiliul de administrație și administrator al unei societăți al cărei acționar unic era Consiliul Local Timișoara.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Județean Timiș.',
    },
    sources: [
      ANI_DEC_2023_FIRST_TEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Consiliul Județean Timiș',
        kind: 'official',
        url: 'https://www.cjtimis.ro/infocjt/document.php?c=7qbzd6r2&d=43417&r=5',
      },
    ],
  },
  {
    name: 'Dima Ionuț-Lucian',
    party: 'PSD',
    position: 'Primar al comunei Coteana, județul Olt',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul 2020-2024, ar fi emis o dispoziție prin care și-a majorat indemnizația lunară de primar.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Olt',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al comunei Coteana, județul Olt.',
    },
    sources: [
      ANI_DEC_2023_FIRST_TEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Radio România Oltenia Craiova',
        kind: 'press',
        url: 'https://www.radiocraiova.ro/stiri/olt-primarul-psd-din-comuna-coteana-castigat-cel-de-al-cincelea-mandat/',
      },
    ],
  },
  {
    name: 'Oanea Ioan',
    party: 'PSD',
    position: 'Primar al comunei Ocna Șugatag, județul Maramureș',
    position_type: 'mayor',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în perioada 29 septembrie - 27 octombrie 2020, deși raportul de serviciu era suspendat de drept după alegerea ca primar, ar fi continuat să exercite atribuții de funcționar public.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Maramureș',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al comunei Ocna Șugatag, județul Maramureș.',
    },
    sources: [
      ANI_DEC_2023_FIRST_TEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Primăria Ocna Șugatag',
        kind: 'official',
        url: 'https://primariaocnasugatag.ro/autoritate-publica-locala/primar/',
      },
    ],
  },
  {
    name: 'Sărăor Elena Adriana',
    party: 'PNL',
    position: 'Primar al comunei Fârliug, județul Caraș-Severin',
    position_type: 'mayor',
    crime: 'Folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat Parchetul de pe lângă Judecătoria Reșița în decembrie 2023, reținând indicii că, în calitate de primar, ar fi îndeplinit acte prin care o societate administrată de cumnatul său a livrat produse către primărie în valoare de 11.137 lei.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al comunei Fârliug, județul Caraș-Severin.',
    },
    sources: [
      ANI_DEC_2023_FIRST_TEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Gazeta de Caraș-Severin',
        kind: 'press',
        url: 'https://www.gazetadecarasseverin.ro/elena-adrian-saraor-un-primar-adevarat-pentru-comuna-farliug/',
      },
    ],
  },
  {
    name: 'Horescu Petrișor',
    party: 'PRM',
    position: 'Viceprimar al comunei Domașnea, județul Caraș-Severin',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în perioada 16 mai - 20 decembrie 2022, a exercitat simultan funcția de viceprimar și calitatea de administrator al unei societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Domașnea, județul Caraș-Severin.',
    },
    sources: [
      ANI_DEC_2023_FIRST_TEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Caon.ro',
        kind: 'press',
        url: 'https://caon.ro/alegeri-locale-2020-in-caras-severin/petre-iles-primar-cu-9-voturi-peste-cel-de-la-usr-in-domasnea-2390951/',
      },
    ],
  },
  {
    name: 'Timofciuc Răzvan',
    party: 'USR',
    position: 'Fost consilier local al municipiului Iași',
    position_type: 'local_official',
    crime: 'Incompatibilitate; conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 incompatibilitate pentru perioada 15 iunie - 6 septembrie 2021, când a fost simultan membru în Consiliul de administrație al Spitalului Clinic de Recuperare Iași și vicepreședinte al unei organizații politice locale, precum și conflict administrativ legat de votarea unui reprezentant într-un consiliu de administrație școlar.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Iași.',
    },
    sources: [
      ANI_DEC_2023_FIRST_TEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'News.ro',
        kind: 'press',
        url: 'https://www.news.ro/politic-intern/liderul-usr-iasi-razvan-timofciuc-declarat-incompatibil-de-ani-1922404918422023121421429684',
      },
    ],
  },
  {
    name: 'Slivneanu Valentin',
    party: 'PNL',
    position: 'Viceprimar al orașului Berești, județul Galați',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul de viceprimar, a exercitat simultan activitate comercială prin PFA și calitatea de administrator al unei societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Galați',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al orașului Berești, județul Galați.',
    },
    sources: [
      ANI_DEC_2023_FIRST_TEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_galati/consiliul-local/beresti/',
      },
    ],
  },
  {
    name: 'Tanasă Constantin',
    party: 'PSD',
    position: 'Consilier local al orașului Dolhasca, județul Suceava',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2023 că, în mandatul de consilier local, a participat la adoptarea unei hotărâri prin care bugetul local a alocat 40.000 lei unei activități al cărei manager de proiect era persoana evaluată.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Suceava',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al orașului Dolhasca, județul Suceava.',
    },
    sources: [
      ANI_DEC_2023_FIRST_TEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_suceava/consiliul-local/dolhasca/',
      },
    ],
  },
  {
    name: 'Blagan Eleonor',
    party: 'PNL',
    position: 'Primar al comunei Băneasa, județul Constanța',
    position_type: 'mayor',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2026 că, în perioada 20 septembrie 2023 - 5 decembrie 2024, a exercitat simultan funcția de viceprimar/primar și calitatea de membru în Consiliul de administrație al Casei Județene de Asigurări de Sănătate Constanța.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al comunei Băneasa, județul Constanța.',
    },
    sources: [
      ANI_FEB_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Primăria Băneasa',
        kind: 'official',
        url: 'https://www.primaria-baneasa.ro/membru-primarie/eleonor-blagan/',
      },
    ],
  },
  {
    name: 'Faur Florentin',
    party: 'PNL',
    position: 'Primar al comunei Husasău de Tinca, județul Bihor',
    position_type: 'mayor',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2026 că, în perioada 13 noiembrie 2020 - 11 aprilie 2024, a exercitat simultan funcția de viceprimar și calitatea de titular al unei PFA care a încasat 38.760 lei din contracte cu Administrația Națională Apele Române.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Bihor',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al comunei Husasău de Tinca, județul Bihor.',
    },
    sources: [
      ANI_FEB_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'e-PNL',
        kind: 'official',
        url: 'https://www.e-pnl.ro/florentin-faur',
      },
    ],
  },
  {
    name: 'Cerba Cristian',
    party: 'PNL',
    position: 'Viceprimar al comunei Gottlob, județul Timiș',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2026 că, în mandatul 2020-2024, a exercitat simultan funcția de viceprimar și calitatea de comerciant persoană fizică.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Gottlob, județul Timiș.',
    },
    sources: [
      ANI_FEB_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_timis/consiliul-local/gottlob/',
      },
    ],
  },
  {
    name: 'Cupu Lucian',
    party: 'PNL',
    position: 'Fost consilier local al municipiului Făgăraș, județul Brașov',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2026 că, în perioada 14 septembrie 2021 - 18 septembrie 2023, a exercitat simultan funcția de consilier local și calitatea de membru în consiliul de administrație al unei societăți comerciale de interes județean.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Făgăraș, județul Brașov.',
    },
    sources: [
      ANI_FEB_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Brasov.net',
        kind: 'press',
        url: 'https://www.brasov.net/fagarasean-fost-consilier-local-reclamat-pentru-conflict-de-interese-administrativ/',
      },
    ],
  },
];

const ANI_AUG_2022_SEVEN_LOCAL_OFFICIALS_RECORDS = [
  {
    name: 'Harabagiu Gabriel Vasile',
    party: 'PSD',
    position: 'Fost viceprimar al municipiului Iași și fost consilier local al municipiului Iași',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 un conflict de interese administrativ și a sesizat Parchetul de pe lângă ÎCCJ, reținând că, în mandatul de viceprimar, a semnat acte adiționale la un contract între Primăria Iași și o societate în care erau angajați socrii săi.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al municipiului Iași.',
    },
    sources: [ANI_AUG_2022_SEVEN_LOCAL_OFFICIALS_SOURCE, HARABAGIU_PSD_SOURCE],
  },
  {
    name: 'Osváth Csaba',
    party: 'UDMR',
    position: 'Primar al comunei Acățari, județul Mureș',
    position_type: 'mayor',
    crime: 'Folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat în august 2022 Parchetul de pe lângă ÎCCJ, reținând indicii că, în exercitarea funcției de primar, ar fi semnat contracte ale primăriei cu două asociații în care avea roluri sau calități.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al comunei Acățari, județul Mureș.',
    },
    sources: [ANI_AUG_2022_SEVEN_LOCAL_OFFICIALS_SOURCE, OSVATH_UDMR_SOURCE],
  },
  {
    name: 'Haiduc Gheorghe',
    party: 'USR',
    position: 'Consilier local al orașului Bușteni, județul Prahova',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, în perioada 26 octombrie 2020 - 22 octombrie 2021, a exercitat simultan funcția de consilier local și activitatea de voluntar în Serviciul Voluntar pentru Situații de Urgență Bușteni.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al orașului Bușteni, județul Prahova.',
    },
    sources: [ANI_AUG_2022_SEVEN_LOCAL_OFFICIALS_SOURCE, BUSTENI_COUNCIL_SOURCE, HAIDUC_USR_SOURCE],
  },
  {
    name: 'Gherasă Radu',
    party: 'PNL',
    position: 'Consilier local al comunei Rădăuți-Prut, județul Botoșani',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, în mandatul de consilier local, a participat la adoptarea unei hotărâri privind inițierea procedurii de concesiune directă a unei pășuni comunale, iar ulterior a încheiat contractul de concesiune cu primăria.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Botoșani',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Rădăuți-Prut, județul Botoșani.',
    },
    sources: [ANI_AUG_2022_SEVEN_LOCAL_OFFICIALS_SOURCE, RADAUTI_PRUT_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Colțea Gheorghe',
    party: 'PNL',
    position: 'Consilier local al comunei Crizbav cu atribuții de viceprimar, județul Brașov',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, în calitate de consilier local, a inițiat și a votat o hotărâre privind modernizarea și asfaltarea unui drum de exploatare care deservește un imobil pe care îl deține.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Crizbav, județul Brașov.',
    },
    sources: [ANI_AUG_2022_SEVEN_LOCAL_OFFICIALS_SOURCE, COLTEA_PNL_SOURCE],
  },
  {
    name: 'Rugină Maria Tereza',
    party: 'PNL',
    position: 'Consilier local al orașului Hârlău, județul Iași',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, în mandatul de consilier local, a participat la adoptarea unei hotărâri privind desemnarea reprezentanților Consiliului Local Hârlău într-o comisie de interviu, iar ulterior a participat la concurs și a fost declarată promovată.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al orașului Hârlău, județul Iași.',
    },
    sources: [ANI_AUG_2022_SEVEN_LOCAL_OFFICIALS_SOURCE, HARLAU_RUGINA_PNL_SOURCE],
  },
  {
    name: 'Dospinescu Sorin Narcis',
    party: 'PSD',
    position: 'Fost consilier local al comunei Strugari, județul Bacău',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, în mandatul de consilier local 2016-2020, a exercitat simultan și o funcție contractuală în aparatul de specialitate al primarului comunei Strugari.',
    verified_at: '2026-05-28',
    geography: {
      county: 'Bacău',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Strugari, județul Bacău.',
    },
    sources: [ANI_AUG_2022_SEVEN_LOCAL_OFFICIALS_SOURCE, STRUGARI_DOSPINESCU_PARTY_SOURCE],
  },
];

const ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_RECORDS = [
  {
    name: 'Topolov Gianina Ionela',
    party: 'PNL',
    position: 'Consilier județean în cadrul Consiliului Județean Constanța',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în iunie 2023 că, în mandatul de consilier județean, societatea comercială în care deținea calitatea de asociat a încheiat trei acorduri-cadru de servicii cu două instituții aflate în subordinea Consiliului Județean Constanța.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Județean Constanța.',
    },
    sources: [ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE, TOPOLOV_PNL_SOURCE],
  },
  {
    name: 'Blaga Lucian',
    party: 'PNL',
    position: 'Consilier județean în cadrul Consiliului Județean Timiș',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în iunie 2023 că, în perioada 8 iunie 2017 - 25 martie 2021, a exercitat simultan funcția de consilier județean și calitatea de membru în Consiliul de Administrație al unei societăți aflate sub autoritatea Consiliului Local Timișoara.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Județean Timiș.',
    },
    sources: [ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE, BLAGA_LUCIAN_PNL_SOURCE],
  },
  {
    name: 'Bobic Narcis Sabin',
    party: 'PSD',
    position: 'Fost consilier județean în cadrul Consiliului Județean Timiș',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în iunie 2023 că, în perioada 27 noiembrie 2018 - 24 octombrie 2020, a exercitat simultan funcția de consilier județean și calitatea de membru/administrator în consiliul de administrație al unei societăți aflate sub autoritatea Consiliului Local Timișoara.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Județean Timiș.',
    },
    sources: [ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE, BOBIC_NARCIS_PSD_SOURCE],
  },
  {
    name: 'Sasu Vasile',
    party: 'PNL',
    position: 'Primar al comunei Durnești, județul Botoșani',
    position_type: 'mayor',
    crime: 'Folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat Parchetul de pe lângă ÎCCJ în iunie 2023, reținând indicii că, în mandatul de primar, ar fi emis o dispoziție de încadrare într-o funcție contractuală din aparatul de specialitate al primarului pentru soția fiului său.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Botoșani',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al comunei Durnești, județul Botoșani.',
    },
    sources: [ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE, SASU_VASILE_PNL_SOURCE],
  },
  {
    name: 'Popescu Marius Viorel',
    party: 'PSD',
    position: 'Consilier local al municipiului Curtea de Argeș, județul Argeș',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în iunie 2023 că, în perioada 6 decembrie 2017 - 8 mai 2020, a exercitat simultan funcția de manager interimar al Spitalului Municipal Curtea de Argeș și funcția de consilier local.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Curtea de Argeș, județul Argeș.',
    },
    sources: [ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE, CURTEA_ARGES_POPESCU_PSD_SOURCE],
  },
  {
    name: 'Panfil Gelu Ionuț',
    party: 'PSD',
    position: 'Fost consilier local al municipiului Onești, județul Bacău',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în iunie 2023 că, în mandatul de consilier local 2016-2020, a participat la deliberarea și adoptarea unor hotărâri privind Spitalul Municipal „Sf. Ierarh Dr. Luca” Onești, unde deținea calitatea de membru în consiliul de administrație.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Bacău',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Onești, județul Bacău.',
    },
    sources: [
      ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE,
      ONESTI_PANFIL_INDEPENDENT_SOURCE,
      ONESTI_PANFIL_PSD_SOURCE,
    ],
  },
  {
    name: 'Hubati Tudor',
    party: 'PSD',
    position: 'Consilier local al orașului Sulina, județul Tulcea',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în iunie 2023 că, începând cu 7 noiembrie 2017, a deținut simultan funcția de consilier local și funcția de director general adjunct într-o regie autonomă aflată sub autoritatea consiliului județean.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Tulcea',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al orașului Sulina, județul Tulcea.',
    },
    sources: [ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE, SULINA_HUBATI_PSD_SOURCE],
  },
  {
    name: 'Cozea Marinela Corina',
    party: 'PNL',
    position: 'Fost consilier local al orașului Huedin, județul Cluj',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în iunie 2023 că, în perioada 21 decembrie 2017 - 24 octombrie 2020, a exercitat simultan funcția de consilier local și funcții de administrator provizoriu/neexecutiv în consiliul de administrație al unei societăți aflate sub autoritatea consiliului județean.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Cluj',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al orașului Huedin, județul Cluj.',
    },
    sources: [ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE, HUEDIN_COZEA_PNL_SOURCE],
  },
  {
    name: 'Munea Nelu Simion',
    party: 'PSD',
    position: 'Consilier local al comunei Forotic, județul Caraș-Severin',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în iunie 2023 că, în mandatul de consilier local 2020-2024, a participat la adoptarea unei hotărâri privind închirierea pajiștilor comunale, iar ulterior soția sa a primit spre închiriere o suprafață de pajiște.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Forotic, județul Caraș-Severin.',
    },
    sources: [ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE, FOROTIC_MUNEA_PSD_SOURCE],
  },
  {
    name: 'Popa Cristina',
    party: 'PNL',
    position: 'Consilier local al comunei I.C. Brătianu, județul Tulcea',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în iunie 2023 că, în mandatul de consilier local 2016-2020, a participat la adoptarea unei hotărâri privind acordarea de teren arabil personalului de specialitate din serviciile publice comunale, iar persoana evaluată figura între beneficiari.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Tulcea',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei I.C. Brătianu, județul Tulcea.',
    },
    sources: [ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE, IC_BRATIANU_POPA_PNL_SOURCE],
  },
  {
    name: 'Biro Levente Mihai',
    party: 'UDMR',
    position: 'Consilier local al comunei Șona, județul Alba',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în iunie 2023 că, în perioada 2020-2022, societatea la care deținea calitatea de asociat unic și administrator a desfășurat operațiuni comerciale cu Primăria Comunei Șona.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Alba',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Șona, județul Alba.',
    },
    sources: [ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE, SONA_BIRO_UDMR_SOURCE],
  },
  {
    name: 'Dumbravă Petru',
    party: 'PNL',
    position: 'Fost consilier local al comunei Mișca, județul Arad',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în iunie 2023 că, în mandatul de consilier local 2020-2024, a participat la adoptarea unei hotărâri privind închirierea pășunii comunale, iar ulterior a încheiat un contract de închiriere pășune cu Primăria Comunei Mișca.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Arad',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Mișca, județul Arad.',
    },
    sources: [ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_SOURCE, MISCA_DUMBRAVA_PNL_SOURCE],
  },
];

const ANI_INDEPENDENT_PUBLIC_OFFICIALS_RECORDS = [
  {
    name: 'Dinu Daniela',
    party: 'Independent',
    position: 'Secretar general al comunei Albești, județul Constanța',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în perioada 2021-2022, în exercitarea funcției publice de conducere, a contrasemnat pentru legalitate acte administrative prin care a fost desemnată președinte al unor comisii de concurs și ulterior remunerată pentru aceste activități.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar general al comunei Albești, județul Constanța.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_SIX_SOURCE],
  },
  {
    name: 'Munteanu Mirela',
    party: 'Independent',
    position: 'Secretar general al comunei Pădureni, județul Vaslui',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, la 31 ianuarie 2023, în exercitarea funcției publice de conducere, a contrasemnat un act administrativ prin care a fost desemnată secretar al unei comisii de concurs și al unei comisii de soluționare a contestațiilor, activități pentru care a încasat venituri.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Vaslui',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar general al comunei Pădureni, județul Vaslui.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_SIX_SOURCE],
  },
  {
    name: 'Deac Ioan',
    party: 'PSD',
    position: 'Secretar general al comunei Bogdan Vodă, județul Maramureș',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în exercitarea funcției publice, având un interes personal de natură patrimonială, a refuzat să contrasemneze pentru legalitate o hotărâre a consiliului local privind adjudecarea proprietății imobiliare aparținând unei societăți în care deținea calitatea de membru cooperator.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Maramureș',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar general al comunei Bogdan Vodă, județul Maramureș.',
    },
    sources: [
      ANI_PUBLIC_OFFICIALS_SIX_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_maramures/consiliul-local/bogdan-voda/',
      },
    ],
  },
  {
    name: 'Stan Maria Țuțina',
    party: 'Independent',
    position: 'Personal contractual de conducere în aparatul de specialitate al primarului comunei Comana, județul Giurgiu',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 5 noiembrie 2020 - 29 iulie 2022, după ce societăți la care deținea calități de asociat sau administrator au încheiat contracte cu Primăria comunei Comana.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Giurgiu',
      basis: 'office',
      note: 'Funcția publică relevantă era în aparatul de specialitate al primarului comunei Comana, județul Giurgiu.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_SIX_SOURCE],
  },
  {
    name: 'Nicola Mihaela',
    party: 'Independent',
    position: 'Fost auditor superior în cadrul Agenției Naționale de Administrare Fiscală',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 1 martie - 4 august 2021, întrucât a deținut simultan funcția publică de auditor superior în ANAF și funcția de director economic la o societate al cărei acționar unic era o societate cu capital de stat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Agenției Naționale de Administrare Fiscală.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_SIX_SOURCE],
  },
  {
    name: 'Duță Maria-Mihaela',
    party: 'PMP',
    position: 'Fost director executiv al Agenției pentru Protecția Mediului Prahova',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în exercitarea funcției publice de conducere de director executiv al Agenției pentru Protecția Mediului Prahova, a semnat pentru sine o decizie care i-a adus un beneficiu material.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de director executiv al Agenției pentru Protecția Mediului Prahova.',
    },
    sources: [
      ANI_PUBLIC_OFFICIALS_FIVE_SOURCE,
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/politica/alegeri-parlamentare-2016/alegeri-parlamentare-2016-listele-de-candidati-din-judetul-prahova-623255',
      },
    ],
  },
  {
    name: 'Drogeanu Aurelian',
    party: 'PNL',
    position: 'Șef al Secției de Drumuri Naționale Constanța din cadrul DRDP Constanța',
    position_type: 'other',
    crime: 'Avere nejustificată',
    status: 'investigated',
    details:
      'ANI a constatat o diferență nejustificată de 165.957 lei între averea dobândită și veniturile realizate împreună cu familia în perioada exercitării funcției publice de conducere.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul DRDP Constanța.',
    },
    sources: [
      ANI_PUBLIC_OFFICIALS_TEN_SOURCE,
      {
        label: 'Replica Online',
        kind: 'press',
        url: 'https://www.replicaonline.ro/jaf-drdp-constanta-a-atribuit-contracte-propriilor-angajati-iar-neaga-a-musamalizat-tot-257011',
      },
    ],
  },
  {
    name: 'Kiss Csaba',
    party: 'Independent',
    position: 'Fost funcționar public cu statut special în cadrul Direcției Generale de Poliție a Municipiului București',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate pentru perioada 16 decembrie 2011 - 1 februarie 2021, când ar fi exercitat simultan funcția publică cu statut special și alte funcții în sectorul privat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Direcției Generale de Poliție a Municipiului București.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_TEN_SOURCE],
  },
  {
    name: 'Sandu Doina Zizi',
    party: 'Independent',
    position: 'Manager al Spitalului de Psihiatrie „Elisabeta Doamna” Galați',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în calitate de manager al spitalului, a aprobat și semnat documente care au stat la baza schimbării funcției și mutării soțului său în altă structură a aceleiași unități.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Galați',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de manager al Spitalului de Psihiatrie „Elisabeta Doamna” Galați.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_TEN_SOURCE],
  },
  {
    name: 'Lotoroșanu Lucian',
    party: 'Independent',
    position: 'Funcționar public în cadrul DGASPC Caraș-Severin',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 8 septembrie 2020 - 2 iunie 2022, întrucât ar fi exercitat simultan funcția publică din DGASPC Caraș-Severin și alte funcții în sectorul privat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul DGASPC Caraș-Severin.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_TEN_SOURCE],
  },
  {
    name: 'Alexeev Georgică',
    party: 'Independent',
    position: 'Fost director al Penitenciarului Timișoara',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în exercitarea funcției publice de conducere cu statut special, a participat la luarea unor decizii privind o societate comercială al cărei asociat unic era creditorul unui împrumut declarat în propria declarație de avere.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de director al Penitenciarului Timișoara.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_TEN_SOURCE],
  },
  {
    name: 'Tănase George Șerban',
    party: 'Independent',
    position: 'Funcționar public cu statut special în cadrul IPJ Argeș',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 11 februarie 2020 - 12 octombrie 2022, când ar fi deținut simultan calitatea de organ de cercetare penală al poliției judiciare și funcția de asociat și administrator al unei societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Inspectoratului de Poliție Județean Argeș.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_TEN_SOURCE],
  },
  {
    name: 'Vasile Anca Maria Cătălina',
    party: 'Independent',
    position: 'Funcționar public în cadrul Primăriei comunei Manasia, județul Ialomița',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 18 ianuarie 2021 - 19 decembrie 2022, întrucât, în calitate de funcționar public în Primăria comunei Manasia, s-a aflat în raporturi ierarhice directe cu tatăl său, secretar general al comunei.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Ialomița',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei comunei Manasia, județul Ialomița.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_TEN_SOURCE],
  },
  {
    name: 'Tomi Lucian Ioan',
    party: 'Independent',
    position: 'Fost funcționar public în cadrul Primăriei comunei Chinteni, județul Cluj',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat conflict de interese administrativ și a sesizat Parchetul de pe lângă ÎCCJ, reținând indicii că, în exercitarea atribuțiilor de serviciu, ar fi semnat autorizații de construire bazate pe documentații tehnice elaborate de societăți în care soția sa avea calități de asociat și administrator.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Cluj',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei comunei Chinteni, județul Cluj.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_TEN_SOURCE],
  },
  {
    name: 'Popescu Sebastian',
    party: 'Independent',
    position: 'Funcționar public cu statut special în cadrul IGPR - Brigada de Combatere a Criminalității Organizate București',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate și a sesizat comisia de disciplină, reținând că în perioada 11 februarie 2020 - 29 aprilie 2021 ar fi deținut simultan calitatea de organ de cercetare penală al poliției judiciare și calitatea de persoană fizică autorizată.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul IGPR - Brigada de Combatere a Criminalității Organizate București.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_TEN_SOURCE],
  },
  {
    name: 'Condrat Florin',
    party: 'Independent',
    position: 'Funcționar public cu statut special în cadrul Inspectoratului de Poliție Județean Covasna',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 11 februarie 2020 - 26 mai 2021, când ar fi deținut simultan calitatea de organ de cercetare penală al poliției judiciare și funcția de administrator în cadrul unei societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Covasna',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Inspectoratului de Poliție Județean Covasna.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_TEN_SOURCE],
  },
  {
    name: 'Preda Mircea-Gabriel',
    party: 'Independent',
    position: 'Fost manager al Spitalului Clinic de Obstetrică Ginecologie „Dr. Ioan Aurel Sbârcea” Brașov',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 1 aprilie 2019 - 9 octombrie 2023, întrucât a exercitat simultan funcția de manager al spitalului și activitatea de medic primar într-un cabinet medical privat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de manager al spitalului din Brașov.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_FOUR_SOURCE],
  },
  {
    name: 'Dubei Liviu',
    party: 'Independent',
    position: 'Director medical în cadrul Spitalului Municipal „Dr. Cosma și Damian” Rădăuți',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în perioada exercitării funcției de director medical, soția sa a deținut funcția de șef secție în același spital, iar persoana evaluată a întocmit sau semnat documente referitoare la evaluarea performanțelor profesionale individuale ale acesteia.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Suceava',
      basis: 'office',
      note: 'Funcția publică relevantă era la Spitalul Municipal „Dr. Cosma și Damian” Rădăuți, județul Suceava.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_FOUR_SOURCE],
  },
  {
    name: 'Cioc Mariana',
    party: 'Independent',
    position: 'Secretar general al comunei Goiești, județul Dolj',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în calitate de secretar general al comunei Goiești, a avizat pentru legalitate o dispoziție privind organizarea unui examen de promovare și constituirea comisiilor, fiind ulterior desemnată secretar al comisiilor și remunerată.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar general al comunei Goiești, județul Dolj.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_FOUR_SOURCE],
  },
  {
    name: 'Nancy Loghin',
    party: 'Independent',
    position: 'Secretar general al comunei Sinești, județul Iași',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în perioada 2020-2023, în exercitarea funcției publice de conducere, a contrasemnat pentru legalitate cinci dispoziții prin care a fost desemnată președinte al unor comisii de concurs și ulterior remunerată.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar general al comunei Sinești, județul Iași.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_THREE_2024_SOURCE],
  },
  {
    name: 'Marcu Silvia Teodora',
    party: 'Independent',
    position: 'Secretar general al comunei Coteana, județul Olt',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în anul 2022, în exercitarea funcției publice de conducere, a contrasemnat dispoziția primarului privind constituirea unei comisii de concurs în care a fost desemnată președinte și ulterior remunerată.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Olt',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar general al comunei Coteana, județul Olt.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_THREE_2024_SOURCE],
  },
  {
    name: 'Ion Robert Florin',
    party: 'Independent',
    position: 'Funcționar public cu statut special în cadrul Inspectoratului de Poliție Județean Argeș',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate pentru intervalele 27 august - 3 octombrie 2022 și 19 noiembrie 2022 - 3 ianuarie 2023, când ar fi exercitat simultan funcția publică cu statut special și o altă funcție remunerată în sectorul privat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Inspectoratului de Poliție Județean Argeș.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_THREE_2023_SOURCE],
  },
  {
    name: 'Orășanu Romică',
    party: 'PSD',
    position: 'Secretar general în cadrul Primăriei comunei Dudești, județul Brăila',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 27 ianuarie - 28 februarie 2023, când raportul de serviciu din funcția de secretar general era suspendat, iar persoana evaluată exercita funcția de consilier personal în cabinetul primarului comunei Dudești.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Brăila',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar general al comunei Dudești, județul Brăila.',
    },
    sources: [
      ANI_PUBLIC_OFFICIALS_THREE_2023_SOURCE,
      {
        label: 'Ziarul Comunitatea',
        kind: 'press',
        url: 'https://ziarulcomunitatea.ro/secretarul-general-orasanu-de-la-primaria-dudesti-declarat-incompatibil-de-catre-ani/',
      },
    ],
  },
  {
    name: 'Musta Virgil Filaret',
    party: 'Independent',
    position: 'Șef al Secției Boli Infecțioase II din Spitalul Clinic de Boli Infecțioase și Pneumoftiziologie „Dr. Victor Babeș” Timișoara',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat conflict de interese administrativ după ce o societate în care persoana evaluată și membri ai familiei dețineau calități profesionale sau societare a încheiat contracte de prestări servicii medicale cu spitalul unde acesta era șef de secție.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era la Spitalul „Dr. Victor Babeș” Timișoara.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_FIVE_2021_SOURCE],
  },
  {
    name: 'Sauer Maria',
    party: 'Independent',
    position: 'Director al Stațiunii de Cercetare Dezvoltare pentru Creșterea Ovinelor și Caprinelor Caransebeș',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 22 iulie 2019 - 28 iulie 2021, întrucât a deținut funcția de director al stațiunii de cercetare și calitatea de membru în consiliul de administrație, în timp ce soțul său avea calități de administrator sau asociat în societăți cu obiect de activitate similar.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era la Stațiunea de Cercetare Dezvoltare pentru Creșterea Ovinelor și Caprinelor Caransebeș.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_FIVE_2021_SOURCE],
  },
  {
    name: 'Lifa Sabin',
    party: 'Independent',
    position: 'Fost director executiv adjunct în cadrul DSVSA Timiș',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în exercitarea funcției de director executiv adjunct al DSVSA Timiș, a aprobat deconturi justificative pentru o societate în cadrul căreia fiul său era angajat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Direcției Sanitare Veterinare și pentru Siguranța Alimentelor Timiș.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_FIVE_2021_SOURCE],
  },
  {
    name: 'Dumitrescu Andrei',
    party: 'Independent',
    position: 'Comandant detașament la Unitatea Specială 72 Jandarmi Protecție Instituțională „Anghel Saligny” Cernavodă',
    position_type: 'other',
    crime: 'Fals în declarații',
    status: 'investigated',
    details:
      'ANI a sesizat Parchetul de pe lângă ÎCCJ privind indicii de fals în declarații, reținând că nu ar fi declarat venituri realizate din jocuri de noroc în declarațiile de avere depuse în perioada exercitării funcției publice.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția publică relevantă era la unitatea de jandarmi din Cernavodă, județul Constanța.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_FIVE_2021_SOURCE],
  },
];

const ANI_MORE_INDEPENDENT_PUBLIC_OFFICIALS_RECORDS = [
  {
    name: 'Baciu Mariana',
    party: 'Independent',
    position: 'Secretar general al comunei Zagon, județul Covasna',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 21 ianuarie - 20 mai 2021, întrucât a exercitat simultan funcția publică de conducere de secretar general al comunei Zagon și funcția de membru în consiliul de administrație al Școlii Gimnaziale „Mikes Kelemen” din comuna Zagon.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Covasna',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar general al comunei Zagon, județul Covasna.',
    },
    sources: [ANI_FEB_2022_EIGHTEEN_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Vasilică Gheorghiță Liviu',
    party: 'Independent',
    position: 'Fost secretar al comunei Șirețel, județul Iași',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 23 aprilie 2019 - 18 martie 2021, întrucât a exercitat simultan funcția publică de secretar al comunei Șirețel și funcția de casier în cadrul aceleiași instituții publice.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar al comunei Șirețel, județul Iași.',
    },
    sources: [ANI_FEB_2022_EIGHTEEN_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Acatrinei Laura',
    party: 'Independent',
    position: 'Inspector în cadrul Direcției de Sănătate Publică a Județului Botoșani',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 2 iulie 2020 - 11 august 2021, întrucât a deținut simultan funcția de inspector în cadrul DSP Botoșani și funcția de medic primar epidemiolog în cadrul Spitalului Municipal Dorohoi.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Botoșani',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Direcției de Sănătate Publică a Județului Botoșani.',
    },
    sources: [ANI_FEB_2022_EIGHTEEN_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Zlate Gina Elena',
    party: 'Independent',
    position: 'Fost funcționar public în cadrul Primăriei municipiului Giurgiu',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 2 iulie 2019 - 31 martie 2020, întrucât a deținut simultan funcția de consilier în cadrul Biroului Buget al Primăriei municipiului Giurgiu și alte funcții în domeniul economic în sectorul privat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Giurgiu',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei municipiului Giurgiu.',
    },
    sources: [ANI_FEB_2022_EIGHTEEN_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Marinescu Bogdan Dragoș',
    party: 'Independent',
    position: 'Fost director în cadrul Ministerului Investițiilor și Proiectelor Europene',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 27 iulie - 31 octombrie 2023, întrucât a exercitat simultan funcția publică de conducere de director în cadrul MIPE și funcția de administrator al unei societăți comerciale care a încheiat contracte de consultanță cu mai multe UAT-uri.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Ministerului Investițiilor și Proiectelor Europene.',
    },
    sources: [ANI_APR_2025_SIX_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Murgeanu Gabriela',
    party: 'Independent',
    position: 'Funcționar public de conducere în cadrul Ministerului Transporturilor și Infrastructurii',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 16 aprilie 2018 - 15 aprilie 2022, întrucât, simultan cu funcția publică de conducere, a exercitat și funcția de membru în consiliul de administrație al unei societăți reglementate de Legea nr. 31/1990.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Ministerului Transporturilor și Infrastructurii.',
    },
    sources: [ANI_APR_2025_SIX_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Boltinescu Gabriel-Tiberiu',
    party: 'Independent',
    position: 'Fost funcționar public cu statut special în cadrul Inspectoratului de Poliție Județean Brașov',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 11 februarie 2020 - 14 septembrie 2022, întrucât, simultan cu calitatea de organ de cercetare penală al poliției judiciare, a deținut și funcția de administrator al unei societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Inspectoratului de Poliție Județean Brașov.',
    },
    sources: [ANI_APR_2025_SIX_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Georgescu Monica Elena',
    party: 'Independent',
    position: 'Fost funcționar public în cadrul DSVSA Călărași',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 19 ianuarie - 1 iunie 2022, întrucât a deținut simultan funcția publică de consilier juridic în cadrul DSVSA Călărași și funcția contractuală de consilier juridic în cadrul unei societăți reglementate de Legea nr. 31/1990.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Călărași',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Direcției Sanitare Veterinare și pentru Siguranța Alimentelor Călărași.',
    },
    sources: [ANI_APR_2025_SIX_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Pintilie Elena-Camelia',
    party: 'Independent',
    position: 'Fost funcționar public în cadrul Inspectoratului de Stat în Construcții',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 6 februarie 2023 - 6 februarie 2025, întrucât a deținut simultan calitatea de funcționar public și funcția de consilier în cadrul Ministerului Afacerilor Externe.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Inspectoratului de Stat în Construcții.',
    },
    sources: [ANI_APR_2025_SIX_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Tănase Cristina',
    party: 'Independent',
    position: 'Director al Direcției Control și Digitalizare din cadrul Consiliului Național al Audiovizualului',
    position_type: 'other',
    crime: 'Sesizare DNA pentru infracțiune asimilată infracțiunilor de corupție',
    status: 'investigated',
    details:
      'ANI a sesizat DNA privind indicii că, în perioada în care exercita temporar funcția de director al Direcției Control și Digitalizare, a întocmit și semnat bibliografia aferentă concursului pentru ocuparea funcției, concurs la care a participat și în urma căruia a fost numită director.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Consiliului Național al Audiovizualului.',
    },
    sources: [ANI_FEB_2023_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Mihalte Sandu-Ioan',
    party: 'PNL',
    position: 'Inspector șef al Gărzii Forestiere Brașov; fost șef al Ocolului Silvic Bucegi - Piatra Craiului Ciucaș R.A.',
    position_type: 'other',
    crime: 'Avere nejustificată',
    status: 'investigated',
    details:
      'ANI a constatat o diferență nejustificată de 68.000 euro între averea dobândită și veniturile realizate împreună cu familia în perioada exercitării funcției de conducere de șef al Ocolului Silvic Bucegi - Piatra Craiului Ciucaș R.A.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de inspector șef al Gărzii Forestiere Brașov.',
    },
    sources: [
      ANI_FEB_2023_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Argumentul.ro',
        kind: 'press',
        url: 'https://argumentul.ro/single.php?id=2104',
      },
    ],
  },
  {
    name: 'Bungău Codruța Emilia',
    party: 'Independent',
    position: 'Fost manager al Spitalului Orășenesc Deta',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 9 mai 2019 - 31 mai 2021, întrucât a exercitat simultan funcția de manager al Spitalului Orășenesc Deta și funcția de medic primar în cadrul unei societăți comerciale și al unui cabinet medical individual.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de manager al Spitalului Orășenesc Deta, județul Timiș.',
    },
    sources: [ANI_FEB_2023_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Bucur Lucian Cornel',
    party: 'Independent',
    position: 'Secretar al municipiului Reșița, județul Caraș-Severin',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în perioada exercitării funcției publice, a avizat o serie de dispoziții ale primarului municipiului Reșița prin care i-au fost atribuite funcții sau calități pentru care a obținut venituri.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar al municipiului Reșița, județul Caraș-Severin.',
    },
    sources: [ANI_FEB_2023_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Bolborea Veronel Florin',
    party: 'Independent',
    position: 'Director executiv în cadrul DSVSA Olt',
    position_type: 'other',
    crime: 'Conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane; fals în declarații',
    status: 'investigated',
    details:
      'ANI a constatat conflict de interese administrativ și a sesizat Parchetul de pe lângă ÎCCJ, reținând indicii privind folosirea funcției pentru favorizarea unor persoane și fals în declarații în legătură cu acte semnate pentru o societate la care tatăl său deținea calități societare.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Olt',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Direcției Sanitare Veterinare și pentru Siguranța Alimentelor Olt.',
    },
    sources: [ANI_AUG_2022_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Amzoi Elena',
    party: 'PSD',
    position: 'Director executiv al DGASPC Caraș-Severin',
    position_type: 'other',
    crime: 'Folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat Parchetul de pe lângă ÎCCJ privind indicii că, în perioada detașării la DGASPC Caraș-Severin, a participat la realizarea unui control tematic și ulterior a semnat raportul privind reorganizarea direcției, situație care putea produce un folos patrimonial pentru sine.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de director executiv al DGASPC Caraș-Severin.',
    },
    sources: [ANI_AUG_2022_PUBLIC_OFFICIALS_SOURCE, AMZOI_PSD_CANDIDACY_SOURCE],
  },
  {
    name: 'Mărgărit Lăcrămioara',
    party: 'Independent',
    position: 'Șef serviciu în cadrul AIMMAIPE Ploiești',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în perioada delegării în funcția publică de director executiv al AIMMAIPE, a semnat documente pentru concursuri de promovare și ocupare a unei funcții publice de conducere care puteau crea un beneficiu pentru aceasta.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul AIMMAIPE Ploiești, județul Prahova.',
    },
    sources: [ANI_AUG_2022_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Podină Dorina Florica',
    party: 'Independent',
    position: 'Funcționar public în cadrul Primăriei comunei Botiz, județul Satu Mare',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 9 iunie 2015 - 4 februarie 2020, întrucât a exercitat simultan funcția publică de consilier juridic în cadrul Primăriei comunei Botiz și calitatea de angajat cu contract individual de muncă în sectorul privat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Satu Mare',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei comunei Botiz, județul Satu Mare.',
    },
    sources: [ANI_AUG_2022_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Albu Marius',
    party: 'Independent',
    position: 'Funcționar public în cadrul AJOFM Botoșani',
    position_type: 'other',
    crime: 'Conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat conflict de interese administrativ și a sesizat Parchetul de pe lângă ÎCCJ, reținând indicii că, în exercitarea atribuțiilor de control din cadrul AJOFM Botoșani, a desfășurat controale și a semnat documente referitoare la societăți în legătură cu soția sa sau cu venituri proprii din sectorul privat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Botoșani',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Agenției Județene pentru Ocuparea Forței de Muncă Botoșani.',
    },
    sources: [ANI_AUG_2022_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Cosma Gabriel',
    party: 'Independent',
    position: 'Funcționar public în cadrul Penitenciarului Oradea',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate începând cu 1 octombrie 2016, întrucât a exercitat simultan funcția publică de medic în cadrul Penitenciarului Oradea și funcția de administrator al unei societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Bihor',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Penitenciarului Oradea, județul Bihor.',
    },
    sources: [ANI_AUG_2022_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Matei Adrian-Robert',
    party: 'Independent',
    position: 'Funcționar public cu statut special în cadrul Inspectoratului General al Poliției Române',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate pentru intervalele 11 mai - 30 iunie 2020 și 13 iulie - 1 august 2021, întrucât a deținut și exercitat simultan funcția publică cu statut special din cadrul IGPR și o funcție contractuală.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Inspectoratului General al Poliției Române.',
    },
    sources: [ANI_AUG_2022_PUBLIC_OFFICIALS_SOURCE],
  },
];

const ANI_ARCHIVE_PUBLIC_OFFICIALS_RECORDS = [
  {
    name: 'Dorobanțu Virgil Valentin',
    party: 'Independent',
    position: 'Director executiv în cadrul APIA - Centrul Județean Ialomița',
    position_type: 'other',
    crime: 'Folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat Parchetul de pe lângă Judecătoria Slobozia, reținând indicii că, ulterior numirii în funcția de director executiv al APIA Ialomița, a delegat soției sale atribuții de control aferente unui compartiment aflat în subordinea sa directă.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Ialomița',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul APIA - Centrul Județean Ialomița.',
    },
    sources: [ANI_FEB_2024_TWO_PUBLIC_OFFICIALS_ARCHIVE_SOURCE],
  },
  {
    name: 'Crăciun Daniel Vasile',
    party: 'Independent',
    position: 'Auditor în cadrul Agenției Naționale de Administrare Fiscală',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 17 mai 2021 - 4 mai 2022, întrucât a exercitat simultan funcția publică de auditor în cadrul ANAF și funcția contractuală de auditor intern în cadrul unei societăți, cu atribuții aflate în legătură directă sau indirectă cu atribuțiile publice.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Agenției Naționale de Administrare Fiscală.',
    },
    sources: [ANI_FEB_2024_TWO_PUBLIC_OFFICIALS_ARCHIVE_SOURCE],
  },
  {
    name: 'Goran Mihai',
    party: 'Independent',
    position: 'Fost funcționar public cu statut special în cadrul Ministerului Afacerilor Interne',
    position_type: 'other',
    crime: 'Avere nejustificată',
    status: 'investigated',
    details:
      'ANI a constatat o diferență nejustificată de 107.116 lei între averea dobândită și veniturile realizate împreună cu familia în perioada exercitării funcției publice cu statut special și a sesizat Comisia de cercetare a averilor din cadrul Curții de Apel Ploiești.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Presa locală îl identifică drept șef al Serviciului Ordine Publică al Poliției Locale Câmpina, județul Prahova; ANI a vizat perioada funcției publice cu statut special din MAI.',
    },
    sources: [ANI_DEC_2023_THREE_PUBLIC_OFFICIALS_ARCHIVE_SOURCE, GORAN_CAMPINA_SOURCE],
  },
  {
    name: 'Titea Dragoș-Virgil',
    party: 'PSD',
    position: 'Fost secretar de stat la Ministerul Transporturilor; director în cadrul R.A. ROMATSA',
    position_type: 'secretary_of_state',
    crime: 'Avere nejustificată',
    status: 'investigated',
    details:
      'ANI a constatat o diferență nejustificată de 824.898 lei între averea dobândită și veniturile realizate împreună cu familia în perioada exercitării funcțiilor publice de secretar de stat și director și a sesizat Comisia de cercetare a averilor din cadrul Curții de Apel București.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcțiile publice relevante erau în Ministerul Transporturilor și în cadrul R.A. ROMATSA.',
    },
    sources: [ANI_APR_2023_EIGHT_PUBLIC_OFFICIALS_ARCHIVE_SOURCE, TITEA_PSD_SOURCE],
  },
  {
    name: 'Cobelschi Călin Pavel',
    party: 'Independent',
    position: 'Manager al Spitalului Județean de Urgență Brașov',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate începând cu 7 mai 2019, întrucât a exercitat simultan funcția de manager al Spitalului Clinic Județean de Urgență Brașov și funcții medicale în cadrul unei societăți comerciale private.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de manager al Spitalului Județean de Urgență Brașov.',
    },
    sources: [ANI_APR_2023_EIGHT_PUBLIC_OFFICIALS_ARCHIVE_SOURCE],
  },
  {
    name: 'Constantin-Florin Mitulețu Buică',
    party: 'PSD',
    position: 'Fost președinte al Autorității Electorale Permanente',
    position_type: 'other',
    crime: 'Folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat Parchetul de pe lângă ÎCCJ, reținând indicii privind folosirea funcției pentru favorizarea unei persoane după angajarea unei rude în cadrul Autorității Electorale Permanente.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de președinte al Autorității Electorale Permanente.',
    },
    sources: [ANI_JAN_2023_FIVE_PUBLIC_OFFICIALS_ARCHIVE_SOURCE, MITULETU_PSD_SOURCE],
  },
  {
    name: 'Delie Claudiu Leontin',
    party: 'Independent',
    position: 'Funcționar public cu statut special în cadrul Inspectoratului de Poliție Județean Hunedoara',
    position_type: 'other',
    crime: 'Avere nejustificată; sesizare Parchet',
    status: 'investigated',
    details:
      'ANI a constatat o diferență nejustificată de 41.606 euro între averea dobândită și veniturile realizate în perioada exercitării funcției publice și a sesizat organele de urmărire penală cu privire la indicii suplimentare reținute în evaluare.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Inspectoratului de Poliție Județean Hunedoara.',
    },
    sources: [ANI_NOV_2022_SIX_PUBLIC_OFFICIALS_ARCHIVE_SOURCE],
  },
  {
    name: 'Șușca Petru',
    party: 'Independent',
    position: 'Fost manager al Spitalului Clinic Județean de Urgență Cluj-Napoca',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 28 noiembrie 2018 - 28 iunie 2020, întrucât a exercitat simultan funcția de manager al Spitalului Clinic Județean de Urgență Cluj-Napoca și funcția de președinte al unei asociații.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Cluj',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de manager al Spitalului Clinic Județean de Urgență Cluj-Napoca.',
    },
    sources: [ANI_OCT_2022_EIGHT_PUBLIC_OFFICIALS_ARCHIVE_SOURCE],
  },
  {
    name: 'Catargiu Camelia Cristina',
    party: 'Independent',
    position: 'Secretar al comunei Pianu, județul Alba',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în exercitarea funcției publice de secretar, a contrasemnat o dispoziție privind constituirea comisiei de concurs și a comisiei de soluționare a contestațiilor pentru ocuparea unei funcții publice din cadrul instituției.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Alba',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar al comunei Pianu, județul Alba.',
    },
    sources: [ANI_AUG_2022_FOUR_PUBLIC_OFFICIALS_ARCHIVE_SOURCE],
  },
  {
    name: 'Poh Florentina',
    party: 'Independent',
    position: 'Secretar al comunei Beștepe, județul Tulcea',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat că, în exercitarea funcției publice de secretar al comunei, a semnat în anul 2021 certificate de urbanism și autorizații de construire care îi aveau ca titulari pe soțul, respectiv fiul acesteia.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Tulcea',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar al comunei Beștepe, județul Tulcea.',
    },
    sources: [ANI_AUG_2022_FOUR_PUBLIC_OFFICIALS_ARCHIVE_SOURCE],
  },
  {
    name: 'Katsiaounas Georgios',
    party: 'Independent',
    position: 'Fost manager interimar al Institutului Național pentru Sănătatea Mamei și Copilului „Alessandrescu - Rusescu”',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 3 noiembrie 2020 - 26 august 2021, întrucât a deținut și exercitat simultan funcția de manager interimar al institutului și calitatea de administrator al două societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de manager interimar al Institutului Național pentru Sănătatea Mamei și Copilului din București.',
    },
    sources: [ANI_AUG_2022_MEDICAL_MANAGERS_ARCHIVE_SOURCE],
  },
  {
    name: 'Miron Lucian Ștefan',
    party: 'PSD',
    position: 'Director medical al Spitalului Județean de Urgență Deva',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 25 mai 2020 - 2 aprilie 2021, întrucât a exercitat simultan funcția de director medical, membru al comitetului director al Spitalului Județean de Urgență Deva, și funcția de administrator al unei societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de director medical al Spitalului Județean de Urgență Deva.',
    },
    sources: [ANI_AUG_2022_MEDICAL_MANAGERS_ARCHIVE_SOURCE, MIRON_BRAD_PSD_PARTY_SOURCE],
  },
];

const ANI_ARCHIVE_PUBLIC_SERVANTS_RECORDS = [
  {
    name: 'Oltean Daniel Ilie',
    party: 'Independent',
    position: 'Funcționar public cu statut special în cadrul Penitenciarului Miercurea Ciuc',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate începând cu 24 octombrie 2016, întrucât a deținut și exercitat simultan funcția publică cu statut special din Penitenciarul Miercurea Ciuc și calitatea de angajat în cadrul unei societăți comerciale, activitățile private fiind în legătură directă sau indirectă cu atribuțiile publice.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Harghita',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Penitenciarului Miercurea Ciuc, județul Harghita.',
    },
    sources: [ANI_JAN_2021_FOUR_PUBLIC_SERVANTS_ARCHIVE_SOURCE],
  },
  {
    name: 'Ardelean-Oltean Ionuț-Mihai',
    party: 'Independent',
    position: 'Funcționar public cu statut special în cadrul Penitenciarului Oradea',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 6 aprilie 2017 - 19 ianuarie 2018, întrucât a exercitat simultan funcția publică cu statut special din Penitenciarul Oradea și calitatea de angajat în cadrul unei societăți comerciale, cu atribuții private aflate în legătură directă sau indirectă cu cele publice.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Bihor',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Penitenciarului Oradea, județul Bihor.',
    },
    sources: [ANI_JAN_2021_FOUR_PUBLIC_SERVANTS_ARCHIVE_SOURCE],
  },
  {
    name: 'Pană Mariana',
    party: 'Independent',
    position: 'Director executiv în cadrul Centrului Județean Argeș al APIA',
    position_type: 'other',
    crime: 'Folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat Parchetul de pe lângă Judecătoria Pitești, reținând indicii că, în exercitarea atribuțiilor de director executiv al APIA Argeș, ar fi îndeplinit un act prin care s-a obținut un folos patrimonial pentru sora sa.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Centrului Județean Argeș al Agenției de Plăți și Intervenție pentru Agricultură.',
    },
    sources: [ANI_OCT_2020_FIVE_PUBLIC_SERVANTS_ARCHIVE_SOURCE],
  },
  {
    name: 'Drăgan Mircea Petru',
    party: 'Independent',
    position: 'Funcționar public în cadrul Consiliului Județean Satu Mare; fost director executiv în cadrul Direcției Județene pentru Cultură Satu Mare',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate pentru perioada 30 iunie 2012 - 11 septembrie 2017, când, în calitate de expert și director executiv la Direcția Județeană pentru Cultură Satu Mare, a exercitat funcții și activități în sectorul privat aflate în legătură indirectă cu atribuțiile publice.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Satu Mare',
      basis: 'office',
      note: 'Funcțiile publice relevante erau în cadrul Consiliului Județean Satu Mare și al Direcției Județene pentru Cultură Satu Mare.',
    },
    sources: [ANI_OCT_2020_FIVE_PUBLIC_SERVANTS_ARCHIVE_SOURCE],
  },
  {
    name: 'Vasiloe Iuliana',
    party: 'Independent',
    position: 'Funcționar public în cadrul Primăriei comunei Gura Vadului, județul Prahova',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 2010-2018, întrucât, pe durata deținerii funcției publice de inspector de cadastru în Primăria Gura Vadului, a exercitat și activități de specialitate în domeniul cadastrului, geodeziei și cartografiei în sectorul privat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei comunei Gura Vadului, județul Prahova.',
    },
    sources: [ANI_DEC_2019_PUBLIC_SERVANT_MEDICAL_ARCHIVE_SOURCE],
  },
  {
    name: 'Pop Ovidiu Laurean',
    party: 'Independent',
    position: 'Fost medic șef serviciu în cadrul Spitalului Clinic Municipal „Dr. Gavril Curteanu” Oradea',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat conflict de interese administrativ după ce, în exercitarea mandatului, a participat la o ședință a consiliului de administrație și a votat împotriva desființării Serviciului de Anatomie Patologică, în cadrul căruia deținea funcțiile de medic primar și medic șef serviciu.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Bihor',
      basis: 'office',
      note: 'Funcția publică relevantă era la Spitalul Clinic Municipal „Dr. Gavril Curteanu” Oradea, județul Bihor.',
    },
    sources: [ANI_DEC_2019_PUBLIC_SERVANT_MEDICAL_ARCHIVE_SOURCE],
  },
  {
    name: 'Ghiță Marinela',
    party: 'Independent',
    position: 'Funcționar public în cadrul Direcției de Protecție Socială Râmnicu Vâlcea',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 1 ianuarie 2014 - 30 octombrie 2016, întrucât a deținut și exercitat simultan funcția publică de consilier în cadrul Direcției de Protecție Socială Râmnicu Vâlcea și calitatea de expert contabil judiciar.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Vâlcea',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Direcției de Protecție Socială Râmnicu Vâlcea, județul Vâlcea.',
    },
    sources: [ANI_NOV_2019_TWO_PUBLIC_SERVANTS_ARCHIVE_SOURCE],
  },
  {
    name: 'Șchiop Bogdan Ionuț',
    party: 'Independent',
    position: 'Funcționar public în cadrul Primăriei municipiului Salonta, județul Bihor',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 19 septembrie 2018 - 15 mai 2019, întrucât a deținut simultan funcția de arhitect-șef în cadrul Primăriei Salonta și funcția de arhitect de clădiri în cadrul unei societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Bihor',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei municipiului Salonta, județul Bihor.',
    },
    sources: [ANI_NOV_2019_TWO_PUBLIC_SERVANTS_ARCHIVE_SOURCE],
  },
  {
    name: 'Așibreiner Sergiu-Ștefan',
    party: 'Independent',
    position: 'Funcționar public cu statut special în cadrul Penitenciarului Iași',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 10 noiembrie 2017 - 30 mai 2018, întrucât a exercitat simultan funcția publică cu statut special de agent operativ în Penitenciarul Iași și funcția de agent de securitate în cadrul unei societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Penitenciarului Iași.',
    },
    sources: [ANI_NOV_2019_TWO_MORE_PUBLIC_SERVANTS_ARCHIVE_SOURCE],
  },
  {
    name: 'Săvescu Dan',
    party: 'Independent',
    position: 'Fost funcționar public în cadrul Primăriei comunei Șelimbăr, județul Sibiu',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 1 februarie - 25 octombrie 2016, întrucât a exercitat simultan funcția publică de execuție de arhitect în Primăria comunei Șelimbăr și funcția de arhitect în cadrul unui birou individual de arhitectură.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Sibiu',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei comunei Șelimbăr, județul Sibiu.',
    },
    sources: [ANI_NOV_2019_TWO_MORE_PUBLIC_SERVANTS_ARCHIVE_SOURCE],
  },
  {
    name: 'Popescu Vasile',
    party: 'Independent',
    position: 'Fost manager general al Serviciului Județean de Ambulanță Constanța',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat conflict de interese administrativ după ce o asociație în care soția și fiica sa dețineau calități relevante a desfășurat operațiuni comerciale cu Serviciul Județean de Ambulanță Constanța, iar persoana evaluată a semnat ulterior un protocol de colaborare cu aceeași asociație.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de manager general al Serviciului Județean de Ambulanță Constanța.',
    },
    sources: [ANI_OCT_2019_MEDICAL_LEADERS_ARCHIVE_SOURCE],
  },
  {
    name: 'Ceaușescu Daniela',
    party: 'Independent',
    position: 'Șef al Serviciului Administrativ din cadrul Spitalului de Pneumoftiziologie „Constantin Anastasatu” Mihăești',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat conflict de interese administrativ deoarece, în calitate de șef al Serviciului Administrativ, a aprobat și semnat în perioada octombrie 2016 - octombrie 2018 documente emise de Centrul Județean de Aparatură Medicală Olt, instituție în cadrul căreia soțul său era angajat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Vâlcea',
      basis: 'office',
      note: 'Funcția publică relevantă era la Spitalul de Pneumoftiziologie „Constantin Anastasatu” din comuna Mihăești, județul Vâlcea.',
    },
    sources: [ANI_OCT_2019_MEDICAL_LEADERS_ARCHIVE_SOURCE],
  },
  {
    name: 'Andreica Dorel Cosmin',
    party: 'Independent',
    position: 'Fost funcționar public cu statut special în cadrul Inspectoratului de Poliție Județean Satu Mare',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 14 iunie 2017 - 7 ianuarie 2019, întrucât a deținut simultan funcția publică cu statut special de agent de poliție în cadrul IPJ Satu Mare și funcții de conducere în cadrul Direcției Generale de Asistență Socială și Protecția Copilului Sector 4.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Satu Mare',
      basis: 'office',
      note: 'Funcția publică relevantă evaluată de ANI era în cadrul Inspectoratului de Poliție Județean Satu Mare.',
    },
    sources: [ANI_OCT_2019_TEN_PUBLIC_SERVANTS_ARCHIVE_SOURCE],
  },
  {
    name: 'Mirică Alexandra',
    party: 'Independent',
    position: 'Funcționar public de conducere în cadrul Administrației Județene a Finanțelor Publice Giurgiu',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 2007-2018, întrucât a deținut și exercitat funcția publică de conducere de șef administrație adjunct în cadrul AJFP Giurgiu și calitatea de expert tehnic judiciar în cadrul Tribunalului Giurgiu.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Giurgiu',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Administrației Județene a Finanțelor Publice Giurgiu.',
    },
    sources: [ANI_JUL_2019_PUBLIC_SERVANTS_MEDICAL_ARCHIVE_SOURCE],
  },
  {
    name: 'Dan Voichița',
    party: 'Independent',
    position: 'Funcționar public în cadrul APIA - Centrul Județean Maramureș',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate începând cu 30 iunie 2011, întrucât a deținut simultan funcția publică de consilier în cadrul APIA Maramureș și calitatea de titular al unei întreprinderi individuale, activitate aflată în legătură directă cu atribuțiile funcției publice.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Maramureș',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul APIA - Centrul Județean Maramureș.',
    },
    sources: [ANI_JUL_2019_PUBLIC_SERVANTS_MEDICAL_ARCHIVE_SOURCE],
  },
];

const ANI_ARCHIVE_ADDITIONAL_PUBLIC_SERVANTS_RECORDS = [
  {
    name: 'Marinescu Cristian-Ștefan',
    party: 'Independent',
    position: 'Fost funcționar public în cadrul Primăriei comunei Bujoreni, județul Vâlcea',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 20 ianuarie 2015 - 31 mai 2018, întrucât a deținut simultan funcția publică de execuție de inspector și funcția contractuală de execuție de inspector de specialitate în cadrul Primăriei comunei Bujoreni.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Vâlcea',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei comunei Bujoreni, județul Vâlcea.',
    },
    sources: [ANI_NOV_2020_THREE_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Mocanu Ioan',
    party: 'Independent',
    position: 'Fost funcționar public cu statut special în cadrul Inspectoratului de Poliție Județean Constanța',
    position_type: 'other',
    crime: 'Avere nejustificată',
    status: 'investigated',
    details:
      'ANI a constatat o diferență nejustificată de 562.220 lei între averea dobândită și veniturile realizate în perioada exercitării funcției publice cu statut special de ofițer de poliție în cadrul IPJ Constanța.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Inspectoratului de Poliție Județean Constanța.',
    },
    sources: [ANI_NOV_2020_SEVENTEEN_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Magdalena Niculescu',
    party: 'Independent',
    position: 'Secretar general adjunct în cadrul Ministerului Transporturilor; fost funcționar public de conducere în cadrul Ministerului Economiei',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat conflict de interese administrativ după ce, în calitate de director al Direcției Juridice și Relații Internaționale din Ministerul Economiei, a avizat în 2018 ordine ale ministrului prin care a fost nominalizată pentru mandat de administrator provizoriu al unei societăți.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcțiile publice relevante erau în cadrul Ministerului Transporturilor și Ministerului Economiei.',
    },
    sources: [ANI_OCT_2020_THREE_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Dragomirescu Florinel',
    party: 'Independent',
    position: 'Fost director general al DGASPC Teleorman',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat conflict de interese administrativ deoarece, în calitate de director general, a semnat o dispoziție privind mutarea definitivă a soției sale între compartimente din cadrul DGASPC Teleorman.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Teleorman',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de director general al Direcției Generale de Asistență Socială și Protecția Copilului Teleorman.',
    },
    sources: [ANI_JUL_2020_SIX_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Mătășăl Valerica',
    party: 'Independent',
    position: 'Șef Birou Juridic în cadrul Casei Județene de Pensii Bacău',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 4 iulie 2013 - 4 iulie 2018, întrucât a deținut simultan funcția publică de conducere de șef birou în cadrul Biroului Juridic al Casei Județene de Pensii Bacău și funcția de asistent judiciar la Tribunalul Bacău.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Bacău',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Casei Județene de Pensii Bacău.',
    },
    sources: [ANI_JUL_2020_SIX_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Moldovan Cristian Florin',
    party: 'Independent',
    position: 'Fost inspector antifraudă în cadrul Direcției Regionale Antifraudă Fiscală 5 Deva',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 8 aprilie 2016 - 8 aprilie 2019, întrucât a deținut simultan funcția de inspector antifraudă în cadrul Direcției Regionale Antifraudă Fiscală 5 Deva și o funcție contractuală într-o societate comercială pe acțiuni cu capital integral de stat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Direcției Regionale Antifraudă Fiscală 5 Deva.',
    },
    sources: [ANI_JUN_2020_TEN_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Pârvu Simona',
    party: 'Independent',
    position: 'Fost funcționar public de conducere în cadrul Ministerului Sănătății; director general la Institutul Național de Sănătate Publică',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate deoarece a deținut simultan funcția publică de conducere de șef serviciu la Inspecția Sanitară de Stat din Ministerul Sănătății și calitatea de angajat cu contract individual de muncă la Direcția de Sănătate Publică Teleorman.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Ministerului Sănătății, iar funcția actuală menționată de ANI era la Institutul Național de Sănătate Publică.',
    },
    sources: [ANI_JUN_2020_TEN_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Stan Gabriela',
    party: 'Independent',
    position: 'Funcționar public de conducere în cadrul Ministerului Sănătății',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 1 aprilie 2014 - 31 martie 2017, întrucât a exercitat simultan funcția publică de conducere în cadrul Ministerului Sănătății și funcția de director financiar-contabil în cadrul Institutului Național de Gerontologie și Geriatrie „Ana Aslan”.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Ministerului Sănătății.',
    },
    sources: [ANI_JUN_2020_SEVEN_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Răducu Silvia Adriana',
    party: 'Independent',
    position: 'Funcționar public în cadrul Primăriei comunei Băbeni, județul Vâlcea',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate începând cu 20 septembrie 2007, întrucât atribuțiile exercitate ca funcționar public în cadrul primăriei erau în legătură directă sau indirectă cu activitățile desfășurate în domeniul privat.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Vâlcea',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei comunei Băbeni, județul Vâlcea.',
    },
    sources: [ANI_JUN_2020_SEVEN_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Tripon Iosefina Viorica',
    party: 'Independent',
    position: 'Funcționar public în cadrul Primăriei comunei Călățele, județul Cluj',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 8 iunie 2015 - 16 octombrie 2019, întrucât a exercitat simultan funcția publică de consilier principal cu atribuții de control financiar preventiv în aparatul de specialitate al primarului și funcția contractuală de administrator financiar patrimoniu/contabil la Școala Gimnazială Călățele.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Cluj',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei comunei Călățele, județul Cluj.',
    },
    sources: [ANI_JUN_2020_SEVEN_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Mititiuc Luanda Irina',
    party: 'Independent',
    position: 'Director medical în cadrul Spitalului Clinic „Prof. Dr. C.I. Parhon” Iași',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 22 noiembrie 2016 - 1 octombrie 2018, întrucât a exercitat simultan funcția de director medical al Spitalului Clinic „Prof. Dr. C.I. Parhon” Iași și calitatea de administrator al unei societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de director medical al Spitalului Clinic „Prof. Dr. C.I. Parhon” Iași.',
    },
    sources: [ANI_FEB_2020_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Prelipcean Cristina',
    party: 'Independent',
    position: 'Medic șef al Secției Clinice Gastroenterologie I din Spitalul Clinic Județean de Urgență „Sf. Spiridon” Iași',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 22 noiembrie 2016 - 2 aprilie 2018, întrucât a deținut și exercitat simultan funcția de medic șef al Secției Clinice Gastroenterologie I din Spitalul Clinic Județean de Urgență „Sf. Spiridon” Iași și calitatea de administrator într-o societate comercială.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era la Spitalul Clinic Județean de Urgență „Sf. Spiridon” Iași.',
    },
    sources: [ANI_FEB_2020_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
];

const ANI_ARCHIVE_MEDICAL_AND_PUBLIC_SERVANTS_RECORDS = [
  {
    name: 'Blăjan Daniel',
    party: 'Independent',
    position: 'Fost șef al Secției de Cardiologie din cadrul Spitalului Județean de Urgență Pitești',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 10 iulie 2017 - 13 mai 2019, întrucât a exercitat simultan funcția de șef al Secției de Cardiologie din cadrul Spitalului Județean de Urgență Pitești și calitatea de administrator al unei societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Funcția publică relevantă era la Spitalul Județean de Urgență Pitești, județul Argeș.',
    },
    sources: [ANI_MAY_2022_TWELVE_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Rizea Marinel',
    party: 'UNPR',
    position: 'Director general al Direcției Generale Regionale a Finanțelor Publice Ploiești',
    position_type: 'other',
    crime: 'Avere nejustificată',
    status: 'investigated',
    details:
      'ANI a constatat o diferență nejustificată de 442.377 lei și 35.000 euro între averea dobândită și veniturile realizate în perioada 25 februarie 2014 - 31 decembrie 2018 și a sesizat Comisia de cercetare a averilor competentă.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de director general al Direcției Generale Regionale a Finanțelor Publice Ploiești.',
    },
    sources: [
      ANI_DEC_2021_NINE_PUBLIC_PERSONS_ARCHIVE_SOURCE,
      {
        label: 'Stiripesurse.ro',
        kind: 'press',
        url: 'https://www.stiripesurse.ro/unpr-revendica-ministerul-finantelor_921071.html',
      },
    ],
  },
  {
    name: 'Boța Ioan Dumitru',
    party: 'PSD',
    position: 'Director executiv în cadrul Agenției Județene pentru Plăți și Inspecție Socială Sibiu',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 2 iulie 2018 - 10 iunie 2020, când raportul de serviciu din cadrul AJPIS Sibiu era suspendat, iar persoana evaluată exercita funcția contractuală de director în cadrul Transelectrica - Sucursala de Transport Sibiu.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Sibiu',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Agenției Județene pentru Plăți și Inspecție Socială Sibiu.',
    },
    sources: [ANI_OCT_2021_FIVE_PUBLIC_PERSONS_ARCHIVE_SOURCE, BOTA_IOAN_DUMITRU_PSD_SOURCE],
  },
  {
    name: 'Misaroși Ioana Carmen',
    party: 'Independent',
    position: 'Manager al Spitalului Municipal Lupeni, județul Hunedoara',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 2 aprilie 2018 - 8 decembrie 2020, întrucât a exercitat simultan funcția de manager al Spitalului Municipal Lupeni și calitatea de membru în consiliul director al unei asociații C.A.R.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de manager al Spitalului Municipal Lupeni, județul Hunedoara.',
    },
    sources: [ANI_OCT_2021_FIVE_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Militaru Liviu',
    party: 'Independent',
    position: 'Secretar general al comunei Sălcuța, județul Dolj',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat conflict de interese administrativ după ce, în exercitarea funcției publice de conducere, a întocmit acte administrative privind avansarea și promovarea soției sale și numirea acesteia într-o funcție publică prin modificarea statului de funcții al Primăriei Sălcuța.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar general al comunei Sălcuța, județul Dolj.',
    },
    sources: [ANI_OCT_2021_NINE_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Vlad Ioan Florin',
    party: 'Independent',
    position: 'Funcționar public în cadrul Administrației Județene a Finanțelor Publice Hunedoara',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate începând cu 21 aprilie 2003, întrucât deținea simultan funcția publică în cadrul AJFP Hunedoara și funcția de expert tehnic judiciar în sectorul privat, activitățile private fiind în legătură directă cu atribuțiile publice.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Administrației Județene a Finanțelor Publice Hunedoara.',
    },
    sources: [ANI_OCT_2021_NINE_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Cîrlig Daniela',
    party: 'Independent',
    position: 'Manager al Spitalului „Dr. Karl Diel” Jimbolia, județul Timiș',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat conflict de interese administrativ deoarece, în perioada exercitării funcției de manager, a încheiat și semnat acte administrative privind încadrarea și promovarea profesională a unor rude și afini în cadrul spitalului.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de manager al Spitalului „Dr. Karl Diel” Jimbolia, județul Timiș.',
    },
    sources: [ANI_OCT_2021_NINE_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Maghiari Marius',
    party: 'Independent',
    position: 'Fost funcționar public cu statut special în cadrul IGPR - Direcția Generală de Poliție a Municipiului București',
    position_type: 'other',
    crime: 'Avere nejustificată',
    status: 'investigated',
    details:
      'ANI a constatat o diferență nejustificată de 465.507,27 lei, echivalentul a 106.554 euro, între averea dobândită și veniturile realizate în perioada exercitării funcției publice cu statut special de polițist.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul IGPR - Direcția Generală de Poliție a Municipiului București.',
    },
    sources: [ANI_JUL_2021_SIXTEEN_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Hîrțea Simona-Carmen',
    party: 'Independent',
    position: 'Funcționar public în cadrul Ministerului Sănătății; fost manager interimar al unor spitale din București',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate deoarece, simultan cu funcția publică din Ministerul Sănătății, a exercitat funcții de manager interimar la Institutul Național de Endocrinologie „C.I. Parhon” și la Spitalul Clinic de Urgență Chirurgie Plastică Reparatorie și Arsuri.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcțiile publice relevante erau în cadrul Ministerului Sănătății și al unor unități medicale din București.',
    },
    sources: [ANI_JUL_2021_TWENTY_TWO_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Smochină Simona Eliza-Sanda',
    party: 'Independent',
    position: 'Fost manager al Spitalului Municipal Oltenița, județul Călărași',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 26 martie 2018 - 23 octombrie 2020, întrucât, simultan cu funcția de manager al Spitalului Municipal Oltenița, a exercitat și funcția de medic titular al unui cabinet medical individual.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Călărași',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de manager al Spitalului Municipal Oltenița, județul Călărași.',
    },
    sources: [ANI_JUL_2021_TWENTY_TWO_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Vasile Felicia',
    party: 'Independent',
    position: 'Director medical în cadrul Spitalului Municipal Râmnicu Sărat, județul Buzău',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 22 noiembrie 2016 - 17 februarie 2020, întrucât a exercitat simultan funcția de director medical al Spitalului Municipal Râmnicu Sărat și calitatea de asociat unic și administrator al unei societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Buzău',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de director medical al Spitalului Municipal Râmnicu Sărat, județul Buzău.',
    },
    sources: [ANI_JUL_2021_TWENTY_TWO_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Adrian Sorin Mihail',
    party: 'PSD',
    position: 'Fost director general al Regiei Autonome de Transport București',
    position_type: 'other',
    crime: 'Conflict de interese; sesizare Parchet',
    status: 'investigated',
    details:
      'ANI a sesizat Parchetul de pe lângă Judecătoria Buzău privind indicii de conflict de interese, reținând că, în exercitarea funcției de director general al RATB, ar fi îndeplinit acte relevante pentru o situație de folos patrimonial.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de director general al Regiei Autonome de Transport București, actuala STB.',
    },
    sources: [ANI_MAY_2021_FOUR_PUBLIC_PERSONS_ARCHIVE_SOURCE, RATB_ADRIAN_SORIN_MIHAI_PSD_SOURCE],
  },
  {
    name: 'Chirea Sorin Dan',
    party: 'Independent',
    position: 'Șef al Secției Ginecologie din cadrul Spitalului Județean de Urgență Alexandria',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 1 noiembrie 2017 - 17 februarie 2019, întrucât, simultan cu funcția de șef secție în cadrul Spitalului Județean de Urgență Alexandria, a exercitat și funcția de administrator în cadrul a două societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Teleorman',
      basis: 'office',
      note: 'Funcția publică relevantă era la Spitalul Județean de Urgență Alexandria, județul Teleorman.',
    },
    sources: [ANI_MAY_2021_FOUR_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Indrieș Marius Sorin',
    party: 'Independent',
    position: 'Funcționar public cu statut special în cadrul Inspectoratului General al Poliției Române',
    position_type: 'other',
    crime: 'Avere nejustificată',
    status: 'investigated',
    details:
      'ANI a constatat o diferență nejustificată de 124.420,16 lei, echivalentul a 30.190,12 euro, între averea dobândită și veniturile realizate pe perioada exercitării funcției publice și a sesizat Comisia de cercetare a averilor competentă.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Inspectoratului General al Poliției Române.',
    },
    sources: [ANI_MAY_2021_SEVENTEEN_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Lăcătușu Carmen',
    party: 'Independent',
    position: 'Funcționar public în cadrul DGRFP Iași - Administrația Județeană a Finanțelor Publice Neamț',
    position_type: 'other',
    crime: 'Avere nejustificată',
    status: 'investigated',
    details:
      'ANI a constatat o diferență nejustificată de 230.161,34 lei, aproximativ 57.436,48 euro, între averea dobândită și veniturile realizate în perioada exercitării funcției publice.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Neamț',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Administrației Județene a Finanțelor Publice Neamț.',
    },
    sources: [ANI_MAR_2021_THREE_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Pop Narcisa Elena',
    party: 'Independent',
    position: 'Fost inspector în cadrul Primăriei municipiului Cluj-Napoca',
    position_type: 'local_official',
    crime: 'Avere nejustificată',
    status: 'investigated',
    details:
      'ANI a constatat o diferență nejustificată totală de aproximativ 500.000 euro, constând în 387.294 euro și 631.906,91 lei, între averea dobândită și veniturile realizate în perioada exercitării funcției publice.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Cluj',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei municipiului Cluj-Napoca, județul Cluj.',
    },
    sources: [ANI_FEB_2021_EIGHT_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Pricină Lucian',
    party: 'Independent',
    position: 'Șef Serviciu Control în cadrul Ministerului Dezvoltării, Lucrărilor Publice și Administrației',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 2 octombrie - 25 noiembrie 2019, întrucât a deținut simultan funcția de șef Serviciu Control în minister și funcția de director general-președinte în cadrul unui institut național.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Ministerului Dezvoltării, Lucrărilor Publice și Administrației.',
    },
    sources: [ANI_FEB_2021_EIGHT_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Deutsch Petru-Martin',
    party: 'Independent',
    position: 'Șef secție în cadrul Institutului de Boli Cardiovasculare Timișoara',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 22 noiembrie 2016 - 11 noiembrie 2020, întrucât a deținut simultan funcția de șef secție în cadrul Institutului de Boli Cardiovasculare Timișoara și calitatea de asociat, respectiv administrator, în două societăți comerciale.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Institutului de Boli Cardiovasculare Timișoara, județul Timiș.',
    },
    sources: [ANI_FEB_2021_SIX_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
  {
    name: 'Coteanu Liana Daniela',
    party: 'Independent',
    position: 'Funcționar public în cadrul Agenției Naționale pentru Plăți și Inspecție Socială',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate în perioada 1 februarie - 1 mai 2018, întrucât a exercitat simultan funcția publică de inspector social în cadrul Compartimentului Control Intern și Managementul Calității și funcția de coordonator activități într-un proiect.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Agenției Naționale pentru Plăți și Inspecție Socială.',
    },
    sources: [ANI_FEB_2021_SIX_PUBLIC_PERSONS_ARCHIVE_SOURCE],
  },
];

const AUR_FOCUSED_ADDITIONAL_RECORDS = [
  {
    name: 'Florin Eugen C\u00eerligea',
    party: 'AUR',
    position: 'Deputat de Br\u0103ila (AUR); fost consilier jude\u021bean Br\u0103ila',
    position_type: 'deputy',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat \u00een iulie 2018 c\u0103, \u00een mandatul de consilier jude\u021bean Br\u0103ila, societatea la care de\u021binea func\u021bii de conducere ar fi avut rela\u021bii contractuale cu o institu\u021bie aflat\u0103 \u00een subordinea Consiliului Jude\u021bean Br\u0103ila; ulterior a fost ales deputat AUR de Br\u0103ila.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Br\u0103ila',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era \u00een Consiliul Jude\u021bean Br\u0103ila, iar mandatul parlamentar este tot \u00een jude\u021bul Br\u0103ila.',
    },
    sources: [AUR_CIRLIGEA_ANI_SOURCE, AUR_CIRLIGEA_PARTY_SOURCE],
  },
  {
    name: 'Mihai Ioan Lasca',
    party: 'AUR',
    position: 'Fost deputat de Bihor ales pe listele AUR',
    position_type: 'deputy',
    crime: 'Lovire sau alte violen\u021be',
    sentence: '2 ani \u00eenchisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2021,
    status: 'convicted',
    details:
      'Presa a relatat c\u0103 Mihai Ioan Lasca, intrat \u00een Parlament pe listele AUR, a fost condamnat definitiv \u00een 2021 la 2 ani \u00eenchisoare cu suspendare dup\u0103 ce a b\u0103tut un \u0219ofer \u00een trafic.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Bihor',
      basis: 'constituency',
      note: 'Deputat ales \u00een circumscrip\u021bia Bihor pe listele AUR.',
    },
    sources: [AUR_LASCA_CONVICTION_SOURCE],
  },
  {
    name: 'Dumitru-Viorel Foc\u0219a',
    party: 'AUR',
    position: 'Fost deputat de Constan\u021ba ales pe listele AUR',
    position_type: 'deputy',
    crime: 'Violen\u021b\u0103 \u00een familie',
    status: 'investigated',
    details:
      'TVR Info a relatat c\u0103 Dumitru-Viorel Foc\u0219a avea dosar penal \u0219i ordin de restric\u021bie dup\u0103 ce so\u021bia sa l-a reclamat pentru agresiune; politicianul fusese ales deputat AUR de Constan\u021ba.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Constan\u021ba',
      basis: 'constituency',
      note: 'Deputat ales \u00een circumscrip\u021bia Constan\u021ba pe listele AUR.',
    },
    sources: [AUR_FOCSA_INVESTIGATION_SOURCE, AUR_FOCSA_PARTY_SOURCE],
  },
  {
    name: 'Ciprian Ciubuc',
    party: 'AUR',
    position: 'Fost deputat ales pe listele AUR',
    position_type: 'deputy',
    crime: 'Distrugere',
    status: 'investigated',
    details:
      'TVR Info \u0219i Realitatea au relatat c\u0103 fostul deputat AUR Ciprian Ciubuc era cercetat penal pentru distrugere dup\u0103 ce o turm\u0103 de oi ar fi produs pagube pe o cultur\u0103 de lucern\u0103 \u0219i trifoi din jude\u021bul Neam\u021b.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Neam\u021b',
      basis: 'case_location',
      note: 'Cazul relatat prive\u0219te o cultur\u0103 agricol\u0103 din jude\u021bul Neam\u021b.',
    },
    sources: [AUR_CIUBUC_TVR_SOURCE, AUR_CIUBUC_INVESTIGATION_SOURCE, AUR_CIUBUC_PARTY_SOURCE],
  },
  {
    name: 'George Simion',
    party: 'AUR',
    position: 'Pre\u0219edinte AUR; deputat',
    position_type: 'deputy',
    crime: 'Coruperea aleg\u0103torilor',
    status: 'investigated',
    details:
      'Digi24 a relatat c\u0103 procurorii din Ialomi\u021ba \u00eel anchetau pe George Simion pentru coruperea aleg\u0103torilor, \u00eentr-un dosar despre caravanele medicale ale AUR; partidul \u00eel prezint\u0103 oficial ca pre\u0219edinte AUR.',
    verified_at: '2026-05-26',
    geography: {
      county: 'Ialomi\u021ba',
      basis: 'case_location',
      note: 'Dosarul relatat era instrumentat de procurori din jude\u021bul Ialomi\u021ba.',
    },
    sources: [AUR_SIMION_VOTER_CORRUPTION_SOURCE, AUR_SIMION_PARTY_SOURCE],
  },
];

const AUR_SECOND_PASS_ADDITIONAL_RECORDS = [
  {
    name: 'Tiberiu Bo\u0219utar',
    party: 'AUR',
    position: 'Deputat AUR de Bistri\u021ba-N\u0103s\u0103ud; coordonator AUR Bistri\u021ba-N\u0103s\u0103ud',
    position_type: 'deputy',
    crime: 'Instigare public\u0103',
    status: 'investigated',
    details:
      'G4Media a relatat c\u0103 Tiberiu Bo\u0219utar, coordonatorul filialei AUR Bistri\u021ba-N\u0103s\u0103ud ales deputat \u00een 2024, a fost pus sub control judiciar dup\u0103 ce ar fi instigat public la aruncarea \u00een aer a sediului Prefecturii Bistri\u021ba-N\u0103s\u0103ud.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Bistri\u021ba-N\u0103s\u0103ud',
      basis: 'case_location',
      note: 'Cazul relatat prive\u0219te sediul Prefecturii Bistri\u021ba-N\u0103s\u0103ud, iar mandatul parlamentar este \u00een aceea\u0219i circumscrip\u021bie.',
    },
    sources: [AUR_BOSUTAR_INVESTIGATION_SOURCE],
  },
  {
    name: 'Bogdan Crefelean',
    party: 'AUR',
    position: 'Fost membru AUR; fost \u0219ef de cabinet al unei deputate AUR',
    position_type: 'other',
    crime: 'Trafic de influen\u021b\u0103',
    status: 'investigated',
    details:
      'G4Media a relatat c\u0103 Parchetul General a confirmat urm\u0103rirea penal\u0103 a lui Bogdan Crefelean, membru AUR \u0219i \u0219ef de cabinet al unei deputate AUR, prins \u00een flagrant c\u00e2nd ar fi primit 1.500 lei invoc\u00e2nd influen\u021b\u0103 asupra unor poli\u021bi\u0219ti locali; articolul consemneaz\u0103 c\u0103 partidul l-a exclus.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Ilfov',
      basis: 'case_location',
      note: 'Flagrantul relatat a avut loc \u00een Bragadiru, jude\u021bul Ilfov.',
    },
    sources: [AUR_CREFELEAN_INVESTIGATION_SOURCE],
  },
  {
    name: 'Ionu\u021b Bogdan Iag\u0103ru',
    party: 'AUR',
    position: 'Candidat sus\u021binut de AUR la Prim\u0103ria Valea Mare; candidat pe lista AUR pentru consiliul local',
    position_type: 'other',
    crime: 'Contraband\u0103 cu \u021big\u0103ri',
    sentence: '1 an \u0219i 2 luni \u00eenchisoare cu suspendare',
    sentence_years: 1.17,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'PressHub/Reporter24 a relatat c\u0103 instan\u021ba i-a respins candidatura la Prim\u0103ria Valea Mare, jude\u021bul Olt, dup\u0103 o condamnare definitiv\u0103 din 2014 la 1 an \u0219i 2 luni \u00eenchisoare cu suspendare pentru implicarea \u00eentr-o re\u021bea de trafic de \u021big\u0103ri; articolul precizeaz\u0103 c\u0103 avea sus\u021binerea AUR \u0219i figura pe lista AUR pentru consiliul local.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Olt',
      basis: 'political_base',
      note: 'Candidatura sus\u021binut\u0103 de AUR era pentru Prim\u0103ria Valea Mare, jude\u021bul Olt.',
    },
    sources: [AUR_IAGARU_CONVICTION_SOURCE],
  },
  {
    name: 'C\u0103p\u0103lna\u0219an F\u0103nic\u0103',
    party: 'AUR',
    position: 'Candidat AUR la Prim\u0103ria Birchi\u0219, jude\u021bul Arad',
    position_type: 'other',
    crime: 'Delapidare',
    sentence: '2 ani \u0219i 6 luni \u00eenchisoare cu suspendare',
    sentence_years: 2.5,
    conviction_year: 2021,
    status: 'first_instance',
    details:
      'Presa a relatat c\u0103 F\u0103nic\u0103 C\u0103p\u0103lna\u0219an, candidat AUR la Prim\u0103ria Birchi\u0219, fusese condamnat de Judec\u0103toria Lipova la 2 ani \u0219i 6 luni \u00eenchisoare cu suspendare pentru delapidare; procesul-verbal publicat de comuna Birchi\u0219 \u00eel listeaz\u0103 drept candidat AUR la localele din 2024.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Arad',
      basis: 'political_base',
      note: 'Candidatura AUR era pentru Prim\u0103ria Birchi\u0219, jude\u021bul Arad.',
    },
    sources: [AUR_CAPALNASAN_CASE_SOURCE, AUR_CAPALNASAN_PARTY_SOURCE],
  },
  {
    name: 'Vasile Mo\u0219oiu',
    party: 'AUR',
    position: 'Consilier local AUR \u00een Dr\u0103gu\u021be\u0219ti; fost primar al comunei Dr\u0103gu\u021be\u0219ti',
    position_type: 'mayor',
    crime: 'Conflict de interese',
    sentence: '1 an \u00eenchisoare cu suspendare',
    sentence_years: 1,
    conviction_year: 2015,
    status: 'convicted',
    details:
      'Gazeta de Sud a relatat c\u0103 fostul primar al comunei Dr\u0103gu\u021be\u0219ti, Vasile Mo\u0219oiu, a fost condamnat definitiv \u00een 2015 la 1 an \u00eenchisoare cu suspendare pentru conflict de interese; Radio Infinit l-a prezentat ulterior ca ales local AUR \u00een Dr\u0103gu\u021be\u0219ti.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Gorj',
      basis: 'office',
      note: 'Func\u021bia de primar \u0219i mandatul local AUR sunt legate de comuna Dr\u0103gu\u021be\u0219ti, jude\u021bul Gorj.',
    },
    sources: [AUR_MOSOIU_CONVICTION_SOURCE, AUR_MOSOIU_PARTY_SOURCE],
  },
  {
    name: 'Cornel Iure\u0219',
    party: 'AUR',
    position: 'Fost purt\u0103tor de cuv\u00e2nt AUR Timi\u0219; fost ofi\u021ber DGA',
    position_type: 'other',
    crime: 'Violen\u021b\u0103 \u00een familie',
    status: 'investigated',
    details:
      'G4Media a relatat c\u0103 fostul ofi\u021ber DGA \u0219i membru AUR Cornel Iure\u0219 avea dosar penal dup\u0103 ce so\u021bia sa l-a reclamat pentru agresiune; articolul noteaz\u0103 c\u0103 fusese purt\u0103tor de cuv\u00e2nt al AUR Timi\u0219.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Timi\u0219',
      basis: 'political_base',
      note: 'Rolul politic men\u021bionat \u00een surs\u0103 este legat de organiza\u021bia AUR Timi\u0219.',
    },
    sources: [AUR_IURES_INVESTIGATION_SOURCE],
  },
  {
    name: 'Adrian Catalan',
    party: 'AUR',
    position: 'Consilier local AUR la Titu',
    position_type: 'local_official',
    crime: 'Agresiune sexual\u0103',
    status: 'investigated',
    details:
      'Presa local\u0103 a relatat c\u0103 Adrian Catalan, consilier local AUR la Titu, era vizat de un ordin de protec\u021bie provizoriu emis \u00eentr-un caz privind acuza\u021bii de agresiune sexual\u0103 asupra unor minori; articolul noteaz\u0103 \u0219i reac\u021bia organiza\u021biei AUR D\u00e2mbovi\u021ba.',
    verified_at: '2026-05-27',
    geography: {
      county: 'D\u00e2mbovi\u021ba',
      basis: 'office',
      note: 'Mandatul local men\u021bionat \u00een surs\u0103 este \u00een ora\u0219ul Titu, jude\u021bul D\u00e2mbovi\u021ba.',
    },
    sources: [AUR_CATALAN_INVESTIGATION_SOURCE],
  },
  {
    name: 'Vlad Virgil',
    party: 'AUR',
    position: 'Consilier local AUR \u00een comuna Oltina',
    position_type: 'local_official',
    crime: 'Trafic de persoane; grup infrac\u021bional organizat',
    status: 'investigated',
    details:
      'Ziua de Constan\u021ba a relatat c\u0103 Virgil Vlad, consilier local AUR \u00een comuna Oltina, a fost re\u021binut de DIICOT \u00eentr-un dosar privind constituirea unui grup infrac\u021bional organizat, trafic de persoane, abuz \u00een serviciu, fals intelectual \u0219i sp\u0103lare de bani.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Constan\u021ba',
      basis: 'office',
      note: 'Mandatul local men\u021bionat \u00een surs\u0103 este \u00een comuna Oltina, jude\u021bul Constan\u021ba.',
    },
    sources: [AUR_VLAD_VIRGIL_INVESTIGATION_SOURCE],
  },
  {
    name: 'P\u00e2c Flavius Ioan',
    party: 'AUR',
    position: 'Consilier local AUR \u00een B\u0103i\u0219oara',
    position_type: 'local_official',
    crime: 'Violen\u021b\u0103 domestic\u0103',
    status: 'investigated',
    details:
      'TurdaNews a relatat c\u0103 P\u00e2c Flavius Ioan, consilier local AUR \u00een B\u0103i\u0219oara, a primit ordin de protec\u021bie emis de Judec\u0103toria Cluj-Napoca, \u00eentr-un caz de violen\u021b\u0103 domestic\u0103; fi\u0219a re\u021bine natura de ordin de protec\u021bie, nu o condamnare penal\u0103.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Cluj',
      basis: 'office',
      note: 'Mandatul local men\u021bionat \u00een surs\u0103 este \u00een comuna B\u0103i\u0219oara, jude\u021bul Cluj.',
    },
    sources: [AUR_PAC_PROTECTION_ORDER_SOURCE],
  },
  {
    name: 'Dan Dungaciu',
    party: 'AUR',
    position: 'Prim-vicepre\u0219edinte AUR; fost director ISPRI',
    position_type: 'other',
    crime: 'Abuz \u00een serviciu',
    status: 'indicted',
    details:
      '\u0218tirile ProTV a relatat c\u0103 Dan Dungaciu este judecat pentru abuz \u00een serviciu \u00eentr-un dosar legat de perioada \u00een care a condus Institutul de \u0218tiin\u021be Politice \u0219i Rela\u021bii Interna\u021bionale; AUR \u00eel prezint\u0103 oficial ca prim-vicepre\u0219edinte al partidului.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Bucure\u0219ti',
      basis: 'case_location',
      note: 'Dosarul este judecat la instan\u021be din Bucure\u0219ti, iar institu\u021bia vizat\u0103 este ISPRI.',
    },
    sources: [AUR_DUNGACIU_CASE_SOURCE, AUR_DUNGACIU_PARTY_SOURCE],
  },
  {
    name: 'Marian Toni\u021b\u0103',
    party: 'AUR',
    position: 'Candidat AUR la Camera Deputa\u021bilor \u00een Gala\u021bi; fost primar al comunei B\u0103l\u0103\u0219e\u0219ti',
    position_type: 'mayor',
    crime: 'Conducere sub influen\u021ba alcoolului',
    sentence: '1 an \u0219i 6 luni \u00eenchisoare cu suspendare',
    sentence_years: 1.5,
    conviction_year: 2018,
    status: 'convicted',
    details:
      'Puterea a relatat c\u0103 Marian Toni\u021b\u0103, fost primar al comunei B\u0103l\u0103\u0219e\u0219ti, a primit \u00een 2018 o condamnare de 1 an \u0219i 6 luni \u00eenchisoare cu suspendare pentru conducere sub influen\u021ba alcoolului; PS News l-a listat \u00eentre candida\u021bii AUR Gala\u021bi la Camera Deputa\u021bilor \u00een 2024.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Gala\u021bi',
      basis: 'political_base',
      note: 'Candidatura AUR la Camera Deputa\u021bilor a fost \u00een jude\u021bul Gala\u021bi, iar fostul mandat de primar era \u00een B\u0103l\u0103\u0219e\u0219ti, Gala\u021bi.',
    },
    sources: [AUR_TONITA_CONVICTION_SOURCE, AUR_TONITA_PARTY_SOURCE],
  },
  {
    name: '\u0218tefan Geam\u0103nu',
    party: 'AUR',
    position: 'Senator AUR pentru diaspora',
    position_type: 'senator',
    crime: 'Evaziune fiscal\u0103',
    sentence: '2 ani \u0219i 6 luni \u00eenchisoare cu suspendare \u00een prim\u0103 instan\u021b\u0103',
    sentence_years: 2.5,
    conviction_year: 2016,
    status: 'first_instance',
    details:
      'Gorjeanul a relatat c\u0103 \u0218tefan Geam\u0103nu a fost condamnat \u00een prim\u0103 instan\u021b\u0103 la 2 ani \u0219i 6 luni \u00eenchisoare cu suspendare \u00eentr-un dosar de evaziune fiscal\u0103; AUR \u00eel prezint\u0103 oficial ca senator AUR.',
    verified_at: '2026-05-27',
    sources: [AUR_GEAMANU_CASE_SOURCE, AUR_GEAMANU_PARTY_SOURCE],
  },
];

const AUR_BIG_SEARCH_ADDITIONAL_RECORDS = [
  {
    name: 'Claudiu Târziu',
    party: 'AUR',
    position: 'Lider AUR; fost senator AUR; candidat AUR la Parlamentul European',
    position_type: 'senator',
    crime: 'Coruperea alegătorilor',
    status: 'investigated',
    details:
      'Digi24 a relatat că Poliția Ialomița a cerut Parlamentului date privind calitatea lui George Simion, Claudiu Târziu, Marius Lulea și Silviu Titus Păunescu într-un dosar penal privind coruperea alegătorilor, legat de caravanele medicale AUR; AUR îl prezenta oficial pe Târziu ca senator și lider al partidului.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Ialomița',
      basis: 'case_location',
      note: 'Solicitarea relatată provenea de la Poliția Ialomița, într-un dosar înregistrat la Parchetul Slobozia.',
    },
    sources: [AUR_SIMION_VOTER_CORRUPTION_SOURCE, AUR_TARZIU_PARTY_SOURCE],
  },
  {
    name: 'Marius Lulea',
    party: 'AUR',
    position: 'Prim-vicepreședinte AUR',
    position_type: 'other',
    crime: 'Coruperea alegătorilor',
    status: 'investigated',
    details:
      'Digi24 a relatat că Poliția Ialomița a cerut Parlamentului date privind calitatea lui George Simion, Claudiu Târziu, Marius Lulea și Silviu Titus Păunescu într-un dosar penal privind coruperea alegătorilor, legat de caravanele medicale AUR; AUR îl prezintă oficial pe Lulea ca prim-vicepreședinte al partidului.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Ialomița',
      basis: 'case_location',
      note: 'Solicitarea relatată provenea de la Poliția Ialomița, într-un dosar înregistrat la Parchetul Slobozia.',
    },
    sources: [AUR_SIMION_VOTER_CORRUPTION_SOURCE, AUR_LULEA_PARTY_SOURCE],
  },
  {
    name: 'Silviu-Titus Păunescu',
    party: 'AUR',
    position: 'Deputat AUR',
    position_type: 'deputy',
    crime: 'Coruperea alegătorilor',
    status: 'investigated',
    details:
      'Digi24 a relatat că Poliția Ialomița a cerut Parlamentului date privind calitatea lui George Simion, Claudiu Târziu, Marius Lulea și Silviu Titus Păunescu într-un dosar penal privind coruperea alegătorilor, legat de caravanele medicale AUR; fișa oficială parlamentară îl listează ca deputat al Alianței pentru Unirea Românilor.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Ialomița',
      basis: 'case_location',
      note: 'Solicitarea relatată provenea de la Poliția Ialomița, într-un dosar înregistrat la Parchetul Slobozia.',
    },
    sources: [AUR_SIMION_VOTER_CORRUPTION_SOURCE, AUR_PAUNESCU_PARLIAMENT_SOURCE],
  },
  {
    name: 'Mihai Gabriel Neacșu',
    party: 'AUR',
    position: 'Candidat AUR la Consiliul Județean Cluj; funcționar public în Primăria Cluj-Napoca',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'Monitorul de Cluj a relatat că ANI l-a găsit pe Mihai Gabriel Neacșu în incompatibilitate pentru perioada 28 august - 26 septembrie 2020, deoarece a candidat la Consiliul Județean Cluj din partea AUR fără să se suspende din funcția publică deținută la Primăria Cluj-Napoca.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Cluj',
      basis: 'office',
      note: 'Funcția publică și candidatura menționate de sursă sunt legate de județul Cluj.',
    },
    sources: [AUR_NEACSU_ANI_SOURCE],
  },
  {
    name: 'Mihai-Bogdan Negoescu',
    party: 'AUR',
    position: 'Deputat AUR de Timiș; lider AUR Timiș',
    position_type: 'deputy',
    crime: 'Violență domestică / ordin de protecție',
    status: 'investigated',
    details:
      'B1TV a relatat că Mihai-Bogdan Negoescu, deputat AUR de Timiș, fusese împiedicat printr-o decizie judecătorească din 2023 să se apropie la mai puțin de 200 de metri de fiica sa minoră, după un ordin de restricție obținut la Judecătoria Timișoara.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'case_location',
      note: 'Ordinul de restricție relatat era legat de Judecătoria Timișoara, iar mandatul parlamentar este în județul Timiș.',
    },
    sources: [AUR_NEGOESCU_PROTECTION_ORDER_SOURCE],
  },
  {
    name: 'Nicu Viorel',
    party: 'AUR',
    position: 'Candidat AUR la Primăria Săcălaz; fost primar al comunei Săcălaz',
    position_type: 'mayor',
    crime: 'Abuz în serviciu',
    status: 'investigated',
    details:
      'Ziare.com, preluând Ziua de Vest, a relatat că fostul primar Nicu Viorel, candidat AUR la Primăria Săcălaz, era cercetat de DNA Timișoara pentru abuz în serviciu într-un dosar disjuns de Parchetul European privind folosirea banilor publici în perioada mandatului său local.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția și candidatura relatate sunt legate de comuna Săcălaz, județul Timiș.',
    },
    sources: [AUR_NICU_VIOREL_DNA_SOURCE],
  },
  {
    name: 'Mohammad Murad',
    party: 'AUR',
    position: 'Deputat AUR; fost candidat la Primăria Mangalia',
    position_type: 'deputy',
    crime: 'Coruperea alegătorilor / mită electorală',
    status: 'investigated',
    details:
      'Newsweek România a relatat că polițiștii din Mangalia au deschis dosar penal pentru coruperea alegătorilor după apariția unor imagini în care Mohammad Murad, candidat la Primăria Mangalia, ar fi oferit pachete electorale; documente AUR ulterioare îl listează ca deputat AUR.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Constanța',
      basis: 'case_location',
      note: 'Dosarul relatat era legat de campania pentru Primăria Mangalia, județul Constanța.',
    },
    sources: [AUR_MURAD_ELECTORAL_BRIBERY_SOURCE, AUR_MURAD_PARTY_SOURCE],
  },
  {
    name: 'Gheorghe Juravlea',
    party: 'AUR',
    position: 'Candidat AUR ales în Consiliul Local Giarmata',
    position_type: 'local_official',
    crime: 'Viol; perversiuni sexuale; lipsire de libertate',
    sentence: '6 ani închisoare',
    sentence_years: 6,
    status: 'convicted',
    details:
      'Articulat a relatat că Gheorghe Juravlea, condamnat anterior la 6 ani de închisoare pentru viol în grup, perversiuni sexuale și lipsire de libertate, a fost ales pe listele AUR în Consiliul Local Giarmata, dar instanța i-a invalidat definitiv mandatul.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Timiș',
      basis: 'political_base',
      note: 'Candidatura și mandatul invalidat erau pentru Consiliul Local Giarmata, județul Timiș.',
    },
    sources: [AUR_JURAVLEA_CONVICTION_SOURCE],
  },
  {
    name: 'Ringo Dămureanu',
    party: 'AUR',
    position: 'Fost deputat AUR de Dolj',
    position_type: 'deputy',
    crime: 'Lovire',
    sentence: 'Amendă penală',
    status: 'convicted',
    details:
      'B1TV a relatat că deputatul AUR Ringo Dămureanu avea o amendă penală pentru lovire, într-un caz petrecut înainte de mandatul parlamentar; pagina AUR îl prezenta ulterior în activitatea parlamentară a partidului.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Dolj',
      basis: 'case_location',
      note: 'Incidentul relatat era legat de Craiova, iar mandatul parlamentar AUR a fost în județul Dolj.',
    },
    sources: [AUR_RINGO_DAMUREANU_CONVICTION_SOURCE, AUR_RINGO_DAMUREANU_PARTY_SOURCE],
  },
  {
    name: 'Dragoș Ștefan',
    party: 'AUR',
    position: 'Viceprimar AUR al municipiului Bacău; fost candidat AUR la Primăria Bacău',
    position_type: 'local_official',
    crime: 'Abuz în serviciu',
    sentence: '3 ani închisoare cu suspendare în primă instanță; achitat definitiv în apel',
    sentence_years: 3,
    status: 'acquitted',
    details:
      'Bacau.net a relatat că fostul viceprimar Dragoș Ștefan a fost trimis în judecată de DNA pentru abuz în serviciu, condamnat în primă instanță la 3 ani cu suspendare și achitat ulterior de Curtea de Apel Bacău; aceeași publicație l-a prezentat ca candidat AUR la Primăria Bacău.',
    verified_at: '2026-05-29',
    geography: {
      county: 'Bacău',
      basis: 'office',
      note: 'Funcțiile publice și candidatura AUR menționate sunt în municipiul Bacău.',
    },
    sources: [AUR_DRAGOS_STEFAN_CASE_SOURCE, AUR_DRAGOS_STEFAN_PARTY_SOURCE],
  },
  {
    name: 'Răzvan Biro',
    party: 'AUR',
    position: 'Deputat AUR de Mureș',
    position_type: 'deputy',
    crime: 'Instigare publică / violențe la proteste',
    status: 'investigated',
    details:
      'Gândul a relatat că deputatul AUR Răzvan Biro a fost audiat la Parchetul General după protestele violente de la sediul Biroului Electoral Central; fișa reține citarea/audierea în cauza privind violențele de la BEC, nu o condamnare.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'case_location',
      note: 'Ancheta relatată privea protestele de la sediul Biroului Electoral Central din București.',
    },
    sources: [AUR_BEC_PROTESTS_SOURCE],
  },
  {
    name: 'Tiberiu Claudiu Barstan',
    party: 'AUR',
    position: 'Deputat AUR',
    position_type: 'deputy',
    crime: 'Instigare publică / violențe la proteste',
    status: 'investigated',
    details:
      'Gândul a relatat că deputatul AUR Tiberiu Claudiu Barstan a fost audiat ca martor la Parchetul General după ce a postat o filmare din timpul protestelor violente de la sediul BEC; fișa reține citarea/audierea în cauza privind violențele, nu o condamnare.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'case_location',
      note: 'Ancheta relatată privea protestele de la sediul Biroului Electoral Central din București.',
    },
    sources: [AUR_BEC_PROTESTS_SOURCE],
  },
  {
    name: 'Daniel-Cătălin Ciornei',
    party: 'AUR',
    position: 'Deputat AUR',
    position_type: 'deputy',
    crime: 'Instigare publică / violențe la proteste',
    status: 'investigated',
    details:
      'Gândul a relatat că deputatul AUR Daniel-Cătălin Ciornei s-a numărat printre parlamentarii AUR audiați la Parchetul General după protestele violente de la sediul BEC; fișa reține citarea/audierea în cauza privind violențele, nu o condamnare.',
    verified_at: '2026-05-29',
    geography: {
      county: 'București',
      basis: 'case_location',
      note: 'Ancheta relatată privea protestele de la sediul Biroului Electoral Central din București.',
    },
    sources: [AUR_BEC_PROTESTS_SOURCE],
  },
];

const ANI_DEC_2025_ADDITIONAL_RECORDS = [
  {
    name: 'Serea St\u0103nica',
    party: 'Independent',
    position: 'Func\u021bionar public în cadrul Prim\u0103riei Comunei M\u0103ic\u0103ne\u0219ti, jude\u021bul Vrancea',
    position_type: 'local_official',
    crime: 'Folosirea func\u021biei pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat în decembrie 2025 Parchetul de pe l\u00e2ng\u0103 Tribunalul Vrancea, sus\u021bin\u00e2nd c\u0103 ar fi semnat documente care au stat la baza unor achizi\u021bii directe c\u0103tre o societate administrat\u0103 de so\u021bul s\u0103u.',
    verified_at: '2026-05-23',
    geography: {
      county: 'Vrancea',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în cadrul Prim\u0103riei Comunei M\u0103ic\u0103ne\u0219ti, jude\u021bul Vrancea.',
    },
    sources: [ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE, ANI_DEC_2025_AGERPRES_SOURCE],
  },
  {
    name: 'Dogaru Tatiana Mioara',
    party: 'PSD',
    position: 'Consilier local în Consiliul Local al comunei Dobre\u0219ti, jude\u021bul Arge\u0219',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 c\u0103, de\u0219i avea un interes personal, a participat la deliberarea \u0219i adoptarea hot\u0103r\u00e2rii prin care cabinetul medical individual la care lucra era scutit de taxe \u0219i impozite.',
    verified_at: '2026-05-23',
    geography: {
      county: 'Arge\u0219',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în Consiliul Local al comunei Dobre\u0219ti, jude\u021bul Arge\u0219.',
    },
    sources: [
      ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE,
      ANI_DEC_2025_AGERPRES_SOURCE,
      DOGARU_TATIANA_PARTY_SOURCE,
    ],
  },
  {
    name: 'H\u0103n\u021b\u0103scu Florin',
    party: 'PNL',
    position: 'Consilier local în Consiliul Local al comunei Zamostea, jude\u021bul Suceava',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 c\u0103 a participat la deliberarea \u0219i votul asupra unei hot\u0103r\u00e2ri privind asisten\u021ba juridic\u0103 pentru Comisia de Fond Funciar Zamostea, în contextul în care so\u021bia sa figura ca mandatar al unuia dintre reclaman\u021bi.',
    verified_at: '2026-05-23',
    geography: {
      county: 'Suceava',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în Consiliul Local al comunei Zamostea, jude\u021bul Suceava.',
    },
    sources: [
      ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE,
      ANI_DEC_2025_AGERPRES_SOURCE,
      HANTASCU_FLORIN_PARTY_SOURCE,
    ],
  },
  {
    name: 'Is\u0103rescu Lumini\u021ba',
    party: 'Independent',
    position: 'Fost agent \u0219ef de poli\u021bie în cadrul Poli\u021biei Municipiului Dr\u0103g\u0103\u0219ani, jude\u021bul V\u00e2lcea',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 c\u0103, în perioada 7 septembrie 2021 - 25 septembrie 2022, ar fi exercitat simultan func\u021bia public\u0103 cu statut special de organ de cercetare al poli\u021biei judiciare \u0219i o func\u021bie în sistemul privat.',
    verified_at: '2026-05-23',
    geography: {
      county: 'V\u00e2lcea',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în cadrul Poli\u021biei Municipiului Dr\u0103g\u0103\u0219ani, jude\u021bul V\u00e2lcea.',
    },
    sources: [ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE, ANI_DEC_2025_AGERPRES_SOURCE],
  },
  {
    name: 'Albu Sorin',
    party: 'Independent',
    position: 'Agent \u0219ef de poli\u021bie în cadrul Inspectoratului de Poli\u021bie Jude\u021bean Ilfov',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 c\u0103, în perioada 15 februarie 2022 - 2 iunie 2025, ar fi exercitat simultan func\u021bia public\u0103 cu statut special \u0219i o alt\u0103 func\u021bie în sistemul privat.',
    verified_at: '2026-05-23',
    geography: {
      county: 'Ilfov',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în cadrul Inspectoratului de Poli\u021bie Jude\u021bean Ilfov.',
    },
    sources: [ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE, ANI_DEC_2025_AGERPRES_SOURCE],
  },
  {
    name: 'Albulescu Gabriel',
    party: 'Independent',
    position: 'Agent de poli\u021bie în cadrul Poli\u021biei Municipiului Mangalia, jude\u021bul Constan\u021ba',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 c\u0103, în perioada 11 februarie 2020 - 28 martie 2025, ar fi de\u021binut simultan func\u021bia public\u0103 cu statut special de organ de cercetare penal\u0103 al poli\u021biei judiciare \u0219i calitatea de persoan\u0103 fizic\u0103 autorizat\u0103 în propriul PFA.',
    verified_at: '2026-05-23',
    geography: {
      county: 'Constan\u021ba',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în cadrul Poli\u021biei Municipiului Mangalia, jude\u021bul Constan\u021ba.',
    },
    sources: [ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE, ANI_DEC_2025_AGERPRES_SOURCE],
  },
  {
    name: 'Albu Ioan-Augustin',
    party: 'PSD',
    position:
      'Func\u021bionar public în Direc\u021bia Sanitar\u0103 Veterinar\u0103 \u0219i pentru Siguran\u021ba Alimentelor Sibiu; candidat la Consiliul Local R\u0103\u0219inari',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 c\u0103, în timpul exercit\u0103rii func\u021biei publice, a candidat la alegerile locale din 2024 pentru func\u021bia de consilier local f\u0103r\u0103 suspendarea raportului de serviciu pe durata campaniei electorale.',
    verified_at: '2026-05-23',
    geography: {
      county: 'Sibiu',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în cadrul DSVSA Sibiu; candidatura local\u0103 era pentru Consiliul Local R\u0103\u0219inari, jude\u021bul Sibiu.',
    },
    sources: [
      ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE,
      ANI_DEC_2025_AGERPRES_SOURCE,
      ALBU_IOAN_AUGUSTIN_PARTY_SOURCE,
    ],
  },
  {
    name: 'Pavel Daniel-Mihai',
    party: 'Independent',
    position:
      'Consilier în Ministerul Investi\u021biilor \u0219i Proiectelor Europene; pre\u0219edinte \u0219i vicepre\u0219edinte A.N.D.I.S.',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 c\u0103, în perioada 20 ianuarie 2025 - 20 octombrie 2025, ar fi exercitat simultan func\u021bia public\u0103 de consilier în MIPE \u0219i func\u021bii de conducere în Agen\u021bia Na\u021bional\u0103 pentru Dezvoltarea Infrastructurii în S\u0103n\u0103tate.',
    verified_at: '2026-05-23',
    geography: {
      county: 'Bucure\u0219ti',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în cadrul MIPE \u0219i A.N.D.I.S., institu\u021bii centrale cu sediul în Bucure\u0219ti.',
    },
    sources: [ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE, ANI_DEC_2025_AGERPRES_SOURCE],
  },
  {
    name: 'Dunca Felicia Ancu\u021ba',
    party: 'PSD',
    position: 'Consilier juridic în cadrul Prim\u0103riei Sectorului 1 Bucure\u0219ti',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 c\u0103, în perioada 2 iunie 2021 - 16 mai 2022, ar fi exercitat simultan func\u021bia public\u0103 \u0219i o func\u021bie în sectorul privat, cu atribu\u021bii legate direct sau indirect de cele exercitate ca func\u021bionar public.',
    verified_at: '2026-05-23',
    geography: {
      county: 'Bucure\u0219ti',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în cadrul Prim\u0103riei Sectorului 1 Bucure\u0219ti.',
    },
    sources: [
      ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE,
      ANI_DEC_2025_AGERPRES_SOURCE,
      DUNCA_FELICIA_PARTY_SOURCE,
    ],
  },
  {
    name: 'Dobre Daniel Eugen',
    party: 'Independent',
    position:
      'Func\u021bionar public în Consiliul Jude\u021bean Ilfov \u0219i fost func\u021bionar public în Prim\u0103ria Comunei Mogo\u0219oaia',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 c\u0103, în perioada 25 ianuarie 2022 - 15 iunie 2023, ar fi de\u021binut simultan func\u021bia public\u0103 în aparatul primarului comunei Mogo\u0219oaia \u0219i func\u021bia de administrator public al aceleia\u0219i comune.',
    verified_at: '2026-05-23',
    geography: {
      county: 'Ilfov',
      basis: 'office',
      note: 'Func\u021biile publice relevante erau în Consiliul Jude\u021bean Ilfov \u0219i Prim\u0103ria Comunei Mogo\u0219oaia, jude\u021bul Ilfov.',
    },
    sources: [ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE, ANI_DEC_2025_AGERPRES_SOURCE],
  },
];

const ANI_MAY_2026_ADDITIONAL_RECORDS = [
  {
    name: 'Ad\u0103sc\u0103li\u021b\u0103 Adelina',
    party: 'Independent',
    position: 'Fost director medical interimar al Spitalului Municipal Olteni\u021ba, jude\u021bul C\u0103l\u0103ra\u0219i',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2026 c\u0103, în perioada 1 martie - 20 iunie 2023, ar fi exercitat simultan func\u021bia de director medical interimar al spitalului \u0219i func\u021bia de administrator al propriului cabinet medical.',
    verified_at: '2026-05-23',
    geography: {
      county: 'C\u0103l\u0103ra\u0219i',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în cadrul Spitalului Municipal Olteni\u021ba, jude\u021bul C\u0103l\u0103ra\u0219i.',
    },
    sources: [ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE, ANI_MAY_2026_AGERPRES_SOURCE],
  },
  {
    name: 'Rus Dan Dorul',
    party: 'AUR',
    position:
      'Fost reprezentant al Consiliului Local Reghin în Consiliul de administra\u021bie al Spitalului Municipal Dr. Eugen Nicoar\u0103 Reghin',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2026 c\u0103, în perioada 25 noiembrie 2020 - 27 octombrie 2023, ar fi exercitat simultan calitatea de membru permanent în consiliul de administra\u021bie al spitalului \u0219i o func\u021bie interimar\u0103 de conducere într-un partid politic din filiala Mure\u0219.',
    verified_at: '2026-05-23',
    geography: {
      county: 'Mure\u0219',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era legat\u0103 de Consiliul Local Reghin \u0219i Spitalul Municipal Dr. Eugen Nicoar\u0103 Reghin, jude\u021bul Mure\u0219.',
    },
    sources: [
      ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE,
      ANI_MAY_2026_AGERPRES_SOURCE,
      RUS_DAN_DORUL_PARTY_SOURCE,
    ],
  },
  {
    name: 'Petre Adina Mihaela',
    party: 'Independent',
    position:
      'Fost \u0219ef al Biroului de Colectare \u0219i Executare Silit\u0103 din Serviciul Fiscal Or\u0103\u0219enesc Sl\u0103nic - DGRFP Ploie\u0219ti',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2026 c\u0103, în perioada 7 martie 2022 - 10 aprilie 2024, ar fi fost în raport ierarhic direct cu so\u021bul s\u0103u, func\u021bionar public de execu\u021bie în cadrul aceluia\u0219i birou.',
    verified_at: '2026-05-23',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în cadrul Serviciului Fiscal Or\u0103\u0219enesc Sl\u0103nic - DGRFP Ploie\u0219ti, jude\u021bul Prahova.',
    },
    sources: [ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE, ANI_MAY_2026_AGERPRES_SOURCE],
  },
  {
    name: 'Petre Ion',
    party: 'Independent',
    position:
      'Inspector în Biroul de Colectare \u0219i Executare Silit\u0103 din Serviciul Fiscal Or\u0103\u0219enesc Sl\u0103nic - DGRFP Ploie\u0219ti',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2026 c\u0103, în perioada 7 martie 2022 - 10 aprilie 2024, ar fi fost în raport ierarhic direct de subordonare fa\u021b\u0103 de so\u021bia sa, \u0219ef al Biroului de colectare \u0219i executare silit\u0103.',
    verified_at: '2026-05-23',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în cadrul Serviciului Fiscal Or\u0103\u0219enesc Sl\u0103nic - DGRFP Ploie\u0219ti, jude\u021bul Prahova.',
    },
    sources: [ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE, ANI_MAY_2026_AGERPRES_SOURCE],
  },
  {
    name: 'Ioana Neagoe',
    party: 'Independent',
    position: 'Fost func\u021bionar public de execu\u021bie în cadrul Prim\u0103riei Ora\u0219ului B\u0103beni, jude\u021bul V\u00e2lcea',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2026 c\u0103, în perioada 5 ianuarie - 2 mai 2023, ar fi exercitat simultan func\u021bia public\u0103 \u0219i o func\u021bie în sectorul privat, cu atribu\u021bii legate direct sau indirect de cele de func\u021bionar public.',
    verified_at: '2026-05-23',
    geography: {
      county: 'V\u00e2lcea',
      basis: 'office',
      note: 'Func\u021bia public\u0103 relevant\u0103 era în cadrul Prim\u0103riei Ora\u0219ului B\u0103beni, jude\u021bul V\u00e2lcea.',
    },
    sources: [ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE, ANI_MAY_2026_AGERPRES_SOURCE],
  },
];

const ANI_JUN_2024_EIGHT_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-8-persoane-prevazute-de-legea-nr-176-2010-5/',
};

const ANI_NOV_2022_EIGHT_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-8-persoane-prevazute-de-legea-nr-176-2010-3/',
};

const ANI_APR_2024_ELEVEN_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-11-persoane-prevazute-de-legea-nr-176-2010-2/',
};

const ANI_JUN_2024_TWO_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-2-persoane-prevazute-de-legea-nr-176-2010-4/',
};

const ANI_SEP_2024_TWO_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-2-persoane-prevazute-de-legea-nr-176-2010-5/',
};

const ANI_DEC_2024_FOUR_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-4-persoane-prevazute-de-legea-nr-176-2010-5/',
};

const ANI_FEB_2025_THREE_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-3-persoane-prevazute-de-legea-nr-176-2010-3/',
};

const ANI_MAR_2025_THREE_PUBLIC_OFFICIALS_SOURCE = {
  label: 'ANI',
  kind: 'official',
  url: 'https://integritate.eu/incidente-de-integritate-3-persoane-prevazute-de-legea-nr-176-2010-4/',
};

const CICAN_ORSOVA_PARTY_SOURCE = {
  label: 'Primaria Orsova',
  kind: 'official',
  url: 'https://primariaorsova.ro/personal/cican-adrian/',
};

const MICULAICIUC_PSD_SOURCE = {
  label: 'Ziare.com',
  kind: 'press',
  url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_maramures/consiliul-judetean/1',
};

const IVANCIU_PSD_SOURCE = {
  label: 'Ziarul de Iasi',
  kind: 'press',
  url: 'https://www.ziaruldeiasi.ro/stiri/caz-revoltator-inculpat-pentru-abuz-si-fals-un-fost-vice-al-cj-iasi-a-scapat-de-toate-acuzatiile-prin-clasare-zilele-trecute-a-fost-ales-in-conducerea-psd-iasi--1843818.html',
};

const AUTOMATED_JUN_2026_FOLLOWUP_PUBLIC_RECORDS = [
  {
    name: 'Miculaiciuc Andrei',
    party: 'PSD',
    position: 'Fost consilier jude\u021bean Maramure\u0219 \u0219i consilier local al comunei Repedea, jude\u021bul Maramure\u0219',
    position_type: 'local_official',
    crime: 'Avere nejustificat\u0103; fals \u00een declara\u021bii',
    status: 'investigated',
    details:
      'ANI a constatat in februarie 2025 o diferenta nejustificata de 138.773,54 lei intre averea dobandita si veniturile realizate impreuna cu familia in perioada exercitarii functiilor publice; agentia a sesizat si ANAF si Parchetul pentru indicii de fals in declaratii.',
    verified_at: '2026-06-09',
    geography: {
      county: 'Maramure\u0219',
      basis: 'office',
      note: 'Functiile publice relevante erau in Consiliul Judetean Maramures si in Consiliul Local Repedea, judetul Maramures.',
    },
    sources: [ANI_FEB_2025_THREE_PUBLIC_OFFICIALS_SOURCE, MICULAICIUC_PSD_SOURCE],
  },
  {
    name: 'Ro\u0219u Gheorghe Cristinel',
    party: 'PSD',
    position: 'Fost inginer \u0219ef \u00een cadrul SN Nuclearelectrica S.A. - Sucursala Cernavod\u0103',
    position_type: 'other',
    crime: 'Folosirea func\u021biei pentru favorizarea unor persoane; fals \u00een declara\u021bii; infrac\u021biuni asimilate corup\u021biei',
    status: 'investigated',
    details:
      'ANI a sesizat DNA in februarie 2025, retinand indicii ca, in functia de inginer sef la Sucursala Cernavoda, ar fi semnat documente privind contracte ale SN Nuclearelectrica cu o societate care a contractat ulterior servicii de la o firma administrata de acesta si nu ar fi declarat calitatea de administrator in doua societati.',
    verified_at: '2026-06-09',
    geography: {
      county: 'Constan\u021ba',
      basis: 'office',
      note: 'Functia publica relevanta era la Sucursala Cernavoda a SN Nuclearelectrica, judetul Constanta.',
    },
    sources: [
      ANI_FEB_2025_THREE_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Primăria Cernavodă',
        kind: 'official',
        url: 'https://primaria-cernavoda.ro/consiliu-local/comisiile-de-specialitate-ale-consiliului-local/',
      },
    ],
  },
  {
    name: 'Ivanciu Nicolaie',
    party: 'PSD',
    position: 'Fost func\u021bionar public \u00een cadrul DSVSA Ia\u0219i',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat in februarie 2025 ca, in perioada 27 mai 2022 - 27 mai 2024, a exercitat simultan functii publice in cadrul DSVSA Iasi si functii de conducere in organizatia judeteana a unui partid politic.',
    verified_at: '2026-06-09',
    geography: {
      county: 'Ia\u0219i',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul Directiei Sanitare Veterinare si pentru Siguranta Alimentelor Iasi.',
    },
    sources: [ANI_FEB_2025_THREE_PUBLIC_OFFICIALS_SOURCE, IVANCIU_PSD_SOURCE],
  },
  {
    name: 'Cican Adrian',
    party: 'PNL',
    position: 'Primar al municipiului Or\u0219ova, jude\u021bul Mehedin\u021bi; fost manager al Spitalului Municipal Or\u0219ova',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in martie 2025 ca, in calitate de manager al Spitalului Municipal Orsova, a emis si semnat doua dispozitii prin care si-a acordat premii de excelenta lunare.',
    verified_at: '2026-06-09',
    geography: {
      county: 'Mehedin\u021bi',
      basis: 'office',
      note: 'Functiile publice relevante erau in municipiul Orsova, judetul Mehedinti.',
    },
    sources: [ANI_MAR_2025_THREE_PUBLIC_OFFICIALS_SOURCE, CICAN_ORSOVA_PARTY_SOURCE],
  },
  {
    name: 'Opri\u0219 Marius Cosmin',
    party: 'Independent',
    position: 'Fost inspector vamal la Biroul Vamal de Frontier\u0103 Aeroport Baia Mare',
    position_type: 'other',
    crime: 'Avere nejustificat\u0103',
    status: 'investigated',
    details:
      'ANI a constatat in decembrie 2024 o diferenta nejustificata de 812.094 lei intre averea dobandita si veniturile realizate impreuna cu familia in perioada exercitarii functiei publice.',
    verified_at: '2026-06-09',
    geography: {
      county: 'Maramure\u0219',
      basis: 'office',
      note: 'Functia publica relevanta era la Biroul Vamal de Frontiera Aeroport Baia Mare, judetul Maramures.',
    },
    sources: [ANI_DEC_2024_FOUR_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Gavri\u0219 Radu Emilian',
    party: 'Independent',
    position: 'Director general adjunct al Direc\u021biei Generale de Poli\u021bie a Municipiului Bucure\u0219ti',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat in decembrie 2024 ca ar fi detinut simultan calitatea de ofiter de politie judiciara si functii remunerate in cadrul unor entitati, incalcand regimul incompatibilitatilor.',
    verified_at: '2026-06-09',
    geography: {
      county: 'Bucure\u0219ti',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul Directiei Generale de Politie a Municipiului Bucuresti.',
    },
    sources: [ANI_DEC_2024_FOUR_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'P\u0103tra\u0219cu Mihai',
    party: 'Independent',
    position: 'Director general al Regiei Autonome Aeroportul Satu Mare',
    position_type: 'other',
    crime: 'Folosirea func\u021biei pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat organele de urmarire penala in decembrie 2024, retinand indicii ca, in functia de director general al Aeroportului Satu Mare, s-ar fi desemnat sau mentinut in roluri remunerate in proiecte ale regiei.',
    verified_at: '2026-06-09',
    geography: {
      county: 'Satu Mare',
      basis: 'office',
      note: 'Functia publica relevanta era la Regia Autonoma Aeroportul Satu Mare.',
    },
    sources: [ANI_DEC_2024_FOUR_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Costea R\u0103zvan-Dumitru',
    party: 'Independent',
    position: 'Agent de poli\u021bie la Centrul de Formare \u0219i Perfec\u021bionare a Poli\u021bi\u0219tilor \"Nicolae Golescu\" Slatina',
    position_type: 'other',
    crime: 'Fals \u00een declara\u021bii',
    status: 'investigated',
    details:
      'ANI a sesizat Parchetul de pe langa Inalta Curte de Casatie si Justitie in decembrie 2024 pentru indicii privind savarsirea infractiunii de fals in declaratii.',
    verified_at: '2026-06-09',
    geography: {
      county: 'Olt',
      basis: 'office',
      note: 'Functia publica relevanta era la Centrul de Formare si Perfectionare a Politistilor \"Nicolae Golescu\" Slatina, judetul Olt.',
    },
    sources: [ANI_DEC_2024_FOUR_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Dinu Dorel Dorinel',
    party: 'Independent',
    position: 'Comisar la Comisariatul Municipiului Bucure\u0219ti din cadrul G\u0103rzii Na\u021bionale de Mediu',
    position_type: 'other',
    crime: 'Avere nejustificat\u0103',
    status: 'investigated',
    details:
      'ANI a constatat in septembrie 2024 o diferenta nejustificata de 162.852 lei intre averea dobandita si veniturile realizate impreuna cu familia in perioada exercitarii functiei publice.',
    verified_at: '2026-06-09',
    geography: {
      county: 'Bucure\u0219ti',
      basis: 'office',
      note: 'Functia publica relevanta era la Comisariatul Municipiului Bucuresti din cadrul Garzii Nationale de Mediu.',
    },
    sources: [ANI_SEP_2024_TWO_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Stroe Vasilica Felicia',
    party: 'Independent',
    position: 'Director al Colegiului Tehnologic \"Viaceslav Harnaj\" Bucure\u0219ti',
    position_type: 'other',
    crime: 'Folosirea func\u021biei pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat Parchetul de pe langa Curtea de Apel Bucuresti in septembrie 2024, retinand indicii ca ar fi semnat, aprobat sau avizat documente care au dus la numirea sotului sau ca profesor in cadrul colegiului pe care il conducea.',
    verified_at: '2026-06-09',
    geography: {
      county: 'Bucure\u0219ti',
      basis: 'office',
      note: 'Functia publica relevanta era la Colegiul Tehnologic \"Viaceslav Harnaj\" Bucuresti.',
    },
    sources: [ANI_SEP_2024_TWO_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Vasile Costel',
    party: 'Independent',
    position: 'Secretar general al comunei Manasia, jude\u021bul Ialomi\u021ba',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat in iunie 2024 ca, in perioada 18 ianuarie 2021 - 19 decembrie 2022, in calitate de secretar general al comunei Manasia, s-a aflat in raporturi ierarhice directe cu fiica sa, consilier intr-un compartiment subordonat direct secretarului general.',
    verified_at: '2026-06-09',
    geography: {
      county: 'Ialomi\u021ba',
      basis: 'office',
      note: 'Functia publica relevanta era cea de secretar general al comunei Manasia, judetul Ialomita.',
    },
    sources: [ANI_JUN_2024_TWO_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Enache Marcela',
    party: 'Independent',
    position: 'Secretar general al comunei Chiscani, jude\u021bul Br\u0103ila',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in iunie 2024 ca, in exercitarea functiei publice de conducere, a participat impreuna cu fiica sa in comisia speciala pentru inventarierea bunurilor din domeniul privat al comunei Chiscani.',
    verified_at: '2026-06-09',
    geography: {
      county: 'Br\u0103ila',
      basis: 'office',
      note: 'Functia publica relevanta era cea de secretar general al comunei Chiscani, judetul Braila.',
    },
    sources: [ANI_JUN_2024_TWO_PUBLIC_OFFICIALS_SOURCE],
  },
];

const AUTOMATED_JUN_2026_ADDITIONAL_LOCAL_RECORDS = [
  {
    name: 'Ilie \u0218tefan',
    party: 'PNL',
    position: 'Primar al municipiului Tulcea, jude\u021bul Tulcea',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in iunie 2024 ca, in mandatul de primar al municipiului Tulcea, ar fi participat la decizii si ar fi emis autorizatii de construire si certificate de urbanism pentru o societate comerciala de la care a cumparat ulterior un imobil.',
    verified_at: '2026-06-05',
    geography: {
      county: 'Tulcea',
      basis: 'office',
      note: 'Functia publica relevanta era Primaria municipiului Tulcea, judetul Tulcea.',
    },
    sources: [
      ANI_JUN_2024_EIGHT_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/agentia-nationala-de-integritate/stefan-ilie-primar-pnl-municipiul-tulcea-integritate-1878195',
      },
    ],
  },
  {
    name: 'Cioba C\u0103t\u0103lin-Zaharie',
    party: 'PSD',
    position: 'Consilier local al comunei Beica de Jos, jude\u021bul Mure\u0219',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in iunie 2024 ca, in mandatul de consilier local, ar fi participat in 2021 si 2022 la adoptarea a doua hotarari privind inchirierea unor terenuri catre o asociatie in al carei Consiliu Director era membru.',
    verified_at: '2026-06-05',
    geography: {
      county: 'Mure\u0219',
      basis: 'office',
      note: 'Functia publica relevanta era in Consiliul Local al comunei Beica de Jos, judetul Mures.',
    },
    sources: [
      ANI_JUN_2024_EIGHT_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Zi de Zi',
        kind: 'press',
        url: 'https://www.zi-de-zi.ro/2020/10/22/maria-moldovan-reinvestita-oficial-primar-la-beica/',
      },
    ],
  },
  {
    name: 'U\u0219vat Ioan-Marius',
    party: 'PSD',
    position: 'Consilier local al comunei Remetea, jude\u021bul Bihor',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in iunie 2024 ca, in mandatul de consilier local, ar fi participat la adoptarea unei hotarari din 28 aprilie 2021 privind atribuirea directa a unui teren al comunei Remetea catre o asociatie in care era membru in Comitetul director.',
    verified_at: '2026-06-05',
    geography: {
      county: 'Bihor',
      basis: 'office',
      note: 'Functia publica relevanta era in Consiliul Local al comunei Remetea, judetul Bihor.',
    },
    sources: [
      ANI_JUN_2024_EIGHT_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Bihoreanul',
        kind: 'press',
        url: 'https://www.ebihoreanul.ro/stiri/un-consilier-local-din-bihor-proaspat-reales-pe-9-iunie-nu-isi-va-putea-exercita-mandatul-astfel-obtinut-ani-l-a-gasit-in-conflict-de-interes-187253.html',
      },
    ],
  },
  {
    name: 'Lup Iosif',
    party: 'PNL',
    position: 'Consilier local al comunei Vadu Mo\u021bilor, jude\u021bul Alba',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in iunie 2024 ca, in mandatul de consilier local, ar fi participat la deliberarea si adoptarea a sapte hotarari ale Consiliului Local Vadu Motilor in favoarea societatii comerciale la care era angajat.',
    verified_at: '2026-06-05',
    geography: {
      county: 'Alba',
      basis: 'office',
      note: 'Functia publica relevanta era in Consiliul Local al comunei Vadu Motilor, judetul Alba.',
    },
    sources: [
      ANI_JUN_2024_EIGHT_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_alba/consiliul-local/vadu-motilor/14',
      },
    ],
  },
  {
    name: 'Laba Vasile',
    party: 'PSD',
    position: 'Primar al comunei Bistri\u021ba B\u00e2rg\u0103ului, jude\u021bul Bistri\u021ba-N\u0103s\u0103ud',
    position_type: 'mayor',
    crime: 'Avere nejustificat\u0103',
    status: 'investigated',
    details:
      'ANI a constatat in noiembrie 2022 o diferenta nejustificata de 101.120 lei si 37.370 euro intre averea dobandita si veniturile realizate impreuna cu familia in perioada exercitarii functiei publice.',
    verified_at: '2026-06-05',
    geography: {
      county: 'Bistri\u021ba-N\u0103s\u0103ud',
      basis: 'office',
      note: 'Functia publica relevanta era Primaria comunei Bistrita Bargaului, judetul Bistrita-Nasaud.',
    },
    sources: [
      ANI_NOV_2022_EIGHT_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Info Bistrita',
        kind: 'press',
        url: 'https://www.infobistrita.ro/psd-incepe-anuntarea-candidatilor-vasile-laba-pentru-un-nou-mandat-la-primaria-bistrita-bargaului',
      },
    ],
  },
  {
    name: 'Iordache Adrian',
    party: 'PSD',
    position: 'Consilier jude\u021bean in cadrul Consiliului Jude\u021bean Olt',
    position_type: 'local_official',
    crime: 'Incompatibilitate; sesizare Parchet',
    status: 'investigated',
    details:
      'ANI a constatat in noiembrie 2022 ca, in mandatele de consilier judetean 2016-2020 si 2020-prezent, societatea la care era asociat si administrator ar fi incheiat doua contracte de prestari servicii cu DGASPC Olt, institutie subordonata Consiliului Judetean Olt; ANI a sesizat si Parchetul pentru indicii de fals in declaratii.',
    verified_at: '2026-06-05',
    geography: {
      county: 'Olt',
      basis: 'office',
      note: 'Functia publica relevanta era in Consiliul Judetean Olt.',
    },
    sources: [
      ANI_NOV_2022_EIGHT_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Consiliul Judetean Olt',
        kind: 'official',
        url: 'https://cjolt.ro/consiliul-judetean/consilieri-judeteni/',
      },
    ],
  },
  {
    name: 'Constantin Vasile',
    party: 'PSD',
    position: 'Primar al comunei Tudor Vladimirescu, jude\u021bul Br\u0103ila',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ; sesizare Parchet',
    status: 'investigated',
    details:
      'ANI a constatat in noiembrie 2022 ca, in mandatul 2016-2020, ar fi aprobat alocarea unor sume de bani catre asociatia sportiva al carei membru fondator era, semnand 18 acte materiale in valoare totala de 297.000 lei; ANI a sesizat si Parchetul.',
    verified_at: '2026-06-05',
    geography: {
      county: 'Br\u0103ila',
      basis: 'office',
      note: 'Functia publica relevanta era Primaria comunei Tudor Vladimirescu, judetul Braila.',
    },
    sources: [
      ANI_NOV_2022_EIGHT_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Realitatea de Braila',
        kind: 'press',
        url: 'https://realitateadebraila.net/primarul-psd-din-comuna-braileana-tudor-vladimirescu-constantin-vasile-aflat-in-conflict-de-interese-de-natura-administrativa/',
      },
    ],
  },
  {
    name: 'Bobu Constantin',
    party: 'PNL',
    position: 'Viceprimar al comunei Ipote\u0219ti, jude\u021bul Suceava',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; sesizare Parchet',
    status: 'investigated',
    details:
      'ANI a constatat in noiembrie 2022 ca, in perioada exercitarii atributiilor de primar din 16 iulie 2019 pana la 2 noiembrie 2020, ar fi semnat trei certificate de urbanism si trei autorizatii de construire in favoarea unei societati comerciale fata de care avea un interes personal; ANI a sesizat si Parchetul.',
    verified_at: '2026-06-05',
    geography: {
      county: 'Suceava',
      basis: 'office',
      note: 'Functia publica relevanta era Primaria comunei Ipotesti, judetul Suceava.',
    },
    sources: [
      ANI_NOV_2022_EIGHT_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Primaria Ipotesti',
        kind: 'official',
        url: 'https://primariaipotesti.ro/wp-content/uploads/2025/09/2016355_Bobu-L.-Constantin-1.pdf',
      },
      {
        label: 'Monitorul de Suceava',
        kind: 'press',
        url: 'https://v3.monitorulsv.ro/Ultima-ora-local/2019-07-18/Primarul-comunei-Ipotesti-Sorin-Augustin-Tofan-si-a-pierdut-mandatul-pentru-o-situatie-de-incompatibilitate',
      },
    ],
  },
  {
    name: 'Bratu Marcel Nicolae',
    party: 'PSD',
    position: 'Consilier local al comunei Nicolae B\u0103lcescu, jude\u021bul C\u0103l\u0103ra\u0219i',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2024 ca, in mandatul de consilier local, nu ar fi anuntat la inceputul sedintelor Consiliului Local interesul personal la adoptarea unor hotarari din 2021-2022 privind prelungirea contractelor de inchiriere si redistribuirea unor terenuri ale comunei.',
    verified_at: '2026-06-05',
    geography: {
      county: 'C\u0103l\u0103ra\u0219i',
      basis: 'office',
      note: 'Functia publica relevanta era in Consiliul Local al comunei Nicolae Balcescu, judetul Calarasi.',
    },
    sources: [
      ANI_APR_2024_ELEVEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Primaria Nicolae Balcescu',
        kind: 'official',
        url: 'https://www.primarianicolaebalcescu.ro/despre-institutie/conducere/lista-persoanelor-din-conducere/consiliul-local-2/',
      },
    ],
  },
  {
    name: 'B\u0103l\u0103\u0219anu Constantin Corneliu',
    party: 'PNL',
    position: 'Primar al comunei Frumu\u0219ica, jude\u021bul Boto\u0219ani',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2024 ca, in mandatul de primar, ar fi semnat in 2021 un contract de asistenta juridica cu acelasi cabinet de avocatura cu care incheiase in 2020, ca persoana fizica, un alt contract de asistenta juridica.',
    verified_at: '2026-06-05',
    geography: {
      county: 'Boto\u0219ani',
      basis: 'office',
      note: 'Functia publica relevanta era Primaria comunei Frumusica, judetul Botosani.',
    },
    sources: [
      ANI_APR_2024_ELEVEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_botosani/primarie/frumusica/',
      },
    ],
  },
  {
    name: 'Avasilc\u0103i Ionu\u021b',
    party: 'PNL',
    position: 'Consilier local al comunei Grum\u0103ze\u0219ti, jude\u021bul Neam\u021b',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2024 ca, in mandatul de consilier local, ar fi participat la deliberarea si adoptarea unei hotarari care putea produce un folos material pentru societatea comerciala in care detinea functia de administrator si calitatea de asociat unic.',
    verified_at: '2026-06-05',
    geography: {
      county: 'Neam\u021b',
      basis: 'office',
      note: 'Functia publica relevanta era in Consiliul Local al comunei Grumazesti, judetul Neamt.',
    },
    sources: [
      ANI_APR_2024_ELEVEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_neamt/consiliul-local/grumazesti/',
      },
    ],
  },
];

const AUTOMATED_JUN_2026_MORE_LOCAL_RECORDS = [
  {
    name: 'Ga\u021bu Eugen Remus',
    party: 'PNL',
    position: 'Viceprimar al comunei Ungheni \u0219i consilier local al comunei Ungheni, jude\u021bul Ia\u0219i',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in iunie 2024 ca, in mandatul de consilier local, ar fi participat la adoptarea unei hotarari privind inchirierea directa a unor terenuri publice ale comunei Ungheni, apoi a incheiat un contract de inchiriere folosit pentru cererea unica de plata APIA Iasi, obtinand subventii de 18.540,78 lei.',
    verified_at: '2026-06-08',
    geography: {
      county: 'Ia\u0219i',
      basis: 'office',
      note: 'Functia publica relevanta era in comuna Ungheni, judetul Iasi.',
    },
    sources: [
      ANI_JUN_2024_EIGHT_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'WikiPress',
        kind: 'press',
        url: 'https://wikipress.ro/viceprimarul-din-ungheni-vrea-sa-scape-de-ani/',
      },
    ],
  },
  {
    name: 'Tulcan Petru',
    party: 'PSD',
    position: 'Consilier local al comunei Apateu, jude\u021bul Arad',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; folosirea func\u021biei pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat in iunie 2024 ca, in mandatul de consilier local, ar fi participat la adoptarea unor hotarari privind inchirierea terenurilor din domeniul privat al comunei Apateu, in urma carora sotia sa a incheiat doua acte aditionale la un contract de inchiriere; ANI a sesizat si Parchetul.',
    verified_at: '2026-06-08',
    geography: {
      county: 'Arad',
      basis: 'office',
      note: 'Functia publica relevanta era in Consiliul Local al comunei Apateu, judetul Arad.',
    },
    sources: [
      ANI_JUN_2024_EIGHT_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_arad/consiliul-local/apateu/1',
      },
    ],
  },
  {
    name: 'Radu Mariana',
    party: 'PSD',
    position: 'Fost consilier local al comunei Filipeni, jude\u021bul Bac\u0103u',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat in iunie 2024 ca, in mandatul de consilier local, ar fi participat la adoptarea unei hotarari prin care un post vacant din Primaria Filipeni a fost transformat intr-un post pe care ulterior l-a ocupat prin concurs; ANI mentionase anterior si incompatibilitatea sa.',
    verified_at: '2026-06-08',
    geography: {
      county: 'Bac\u0103u',
      basis: 'office',
      note: 'Functia publica relevanta era in Consiliul Local al comunei Filipeni, judetul Bacau.',
    },
    sources: [
      ANI_JUN_2024_EIGHT_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_bacau/consiliul-local/filipeni/',
      },
    ],
  },
  {
    name: 'Vucu Ionel Paul',
    party: 'PNL',
    position: 'Fost consilier local al comunei B\u00e2rzava, jude\u021bul Arad',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat in iunie 2024 ca, in mandatul de consilier local 2020-2022, societatea in care persoana evaluata avea calitatea de asociat unic, iar tatal sau era asociat unic si administrator, ar fi incheiat contracte de vanzare-cumparare cu o entitate aflata in subordinea Consiliului Local Barzava.',
    verified_at: '2026-06-08',
    geography: {
      county: 'Arad',
      basis: 'office',
      note: 'Functia publica relevanta era in Consiliul Local al comunei Barzava, judetul Arad.',
    },
    sources: [
      ANI_JUN_2024_EIGHT_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_arad/primarie/barzava/',
      },
    ],
  },
  {
    name: 'Menan Samir',
    party: 'PNL',
    position: 'Consilier local al municipiului Medgidia, jude\u021bul Constan\u021ba',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2024 ca, in mandatul de consilier local, ar fi participat la deliberarea si adoptarea mai multor hotarari ale Consiliului Local Medgidia care puteau produce un folos pentru o asociatie in care detinea functia de vicepresedinte.',
    verified_at: '2026-06-08',
    geography: {
      county: 'Constan\u021ba',
      basis: 'office',
      note: 'Functia publica relevanta era in Consiliul Local al municipiului Medgidia, judetul Constanta.',
    },
    sources: [
      ANI_APR_2024_ELEVEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_constanta/consiliul-local/medgidia/',
      },
    ],
  },
  {
    name: 'Nica Adrian Cornel',
    party: 'PNL',
    position: 'Consilier local al comunei Apateu, jude\u021bul Arad',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; folosirea func\u021biei pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2024 ca, in mandatul de consilier local, ar fi participat la adoptarea unei hotarari privind inchirierea unor terenuri ale comunei Apateu, fara sa anunte interesul personal; ulterior au fost incheiate doua acte aditionale la contractul sau de inchiriere, iar ANI a sesizat Parchetul.',
    verified_at: '2026-06-08',
    geography: {
      county: 'Arad',
      basis: 'office',
      note: 'Functia publica relevanta era in Consiliul Local al comunei Apateu, judetul Arad.',
    },
    sources: [
      ANI_APR_2024_ELEVEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_arad/consiliul-local/apateu/1',
      },
    ],
  },
  {
    name: 'Nicoar\u0103 Oana Maria',
    party: 'USR',
    position: 'Fost consilier local al comunei V\u0103c\u0103reni, jude\u021bul Tulcea',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2024 ca, in mandatul de consilier local, ar fi participat la deliberarea si adoptarea unei hotarari prin care au fost modificate organigrama si statul de functii ale UAT Vacareni, iar functia rezultata a fost ocupata ulterior de persoana evaluata prin concurs.',
    verified_at: '2026-06-08',
    geography: {
      county: 'Tulcea',
      basis: 'office',
      note: 'Functia publica relevanta era in Consiliul Local al comunei Vacareni, judetul Tulcea.',
    },
    sources: [
      ANI_APR_2024_ELEVEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_tulcea/consiliul-local/vacareni/',
      },
    ],
  },
  {
    name: 'Dale Voichi\u021ba Mariana',
    party: 'Independent',
    position: 'Secretar general al ora\u0219ului \u0218tei, jude\u021bul Bihor',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2024 ca, in exercitarea functiei publice de conducere, ar fi contrasemnat un act administrativ care i-a produs un folos material.',
    verified_at: '2026-06-08',
    geography: {
      county: 'Bihor',
      basis: 'office',
      note: 'Functia publica relevanta era cea de secretar general al orasului Stei, judetul Bihor.',
    },
    sources: [ANI_APR_2024_ELEVEN_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Ani\u021bescu Petrache',
    party: 'Independent',
    position: 'Secretar general al comunei Balta, jude\u021bul Mehedin\u021bi',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2024 ca, in exercitarea functiei publice de conducere, ar fi solicitat eliberarea unei autorizatii de functionare pentru entitatea economica pe care o administra, autorizatie semnata ulterior si de persoana evaluata ca secretar general, pe baza careia entitatea a beneficiat de un ajutor AFIR de 95.319 lei.',
    verified_at: '2026-06-08',
    geography: {
      county: 'Mehedin\u021bi',
      basis: 'office',
      note: 'Functia publica relevanta era cea de secretar general al comunei Balta, judetul Mehedinti.',
    },
    sources: [ANI_APR_2024_ELEVEN_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'R\u0103ileanu Melania',
    party: 'Independent',
    position: 'Secretar general al comunei Pr\u0103jeni, jude\u021bul Boto\u0219ani',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2024 ca, in exercitarea functiei publice de conducere, ar fi contrasemnat un act administrativ care i-a produs un folos material.',
    verified_at: '2026-06-08',
    geography: {
      county: 'Boto\u0219ani',
      basis: 'office',
      note: 'Functia publica relevanta era cea de secretar general al comunei Prajeni, judetul Botosani.',
    },
    sources: [ANI_APR_2024_ELEVEN_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Groza Ligia-Daniela',
    party: 'Independent',
    position: 'Fost secretar general al comunei Blandiana, jude\u021bul Alba',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2024 ca, in exercitarea functiei publice de conducere, ar fi contrasemnat un act administrativ care i-a produs un folos material.',
    verified_at: '2026-06-08',
    geography: {
      county: 'Alba',
      basis: 'office',
      note: 'Functia publica relevanta era cea de secretar general al comunei Blandiana, judetul Alba.',
    },
    sources: [ANI_APR_2024_ELEVEN_PUBLIC_OFFICIALS_SOURCE],
  },
];

const AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES = {
  ani18PublicOfficials2022: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-18-persoane-prevazute-de-legea-nr-176-2010/',
  },
  ani12PublicOfficials2022: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-12-persoane-prevazute-de-legea-nr-176-2010/',
  },
  ani3PublicOfficials2022: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-3-persoane-prevazute-de-legea-nr-176-2010-2/',
  },
  ani12PublicOfficials2023: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-12-persoane-prevazute-de-legea-nr-176-2010-2/',
  },
  aniMedicalManagers2022: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-3-persoane-cu-functii-de-conducere-din-sistemul-medical/',
  },
  ani8PublicOfficials2022: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-8-persoane-prevazute-de-legea-nr-176-2010/',
  },
  ani4PublicOfficials2022: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-4-persoane-prevazute-de-legea-nr-176-2010/',
  },
  ani6PublicOfficials2023: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-6-persoane-prevazute-de-legea-nr-176-2010/',
  },
  ani8PublicOfficials2023: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-8-persoane-prevazute-de-legea-nr-176-2010-2/',
  },
  ani6PublicOfficials2021: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-6-persoane-prevazute-de-legea-nr-176-2010-2/',
  },
  ani2PublicOfficials2023: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-2-persoane-prevazute-de-legea-nr-176-2010-3/',
  },
  ani8PublicOfficials2024: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-8-persoane-prevazute-de-legea-nr-176-2010-4/',
  },
  ani4PublicOfficials2024: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-4-persoane-prevazute-de-legea-nr-176-2010-2/',
  },
  ani2PublicOfficials2024: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-2-persoane-prevazute-de-legea-nr-176-2010-4/',
  },
  ani5PublicOfficials2025: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-5-persoane-prevazute-de-legea-nr-176-2010-2/',
  },
  ani4PublicOfficials2025: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-4-persoane-prevazute-de-legea-nr-176-2010-3/',
  },
  ani2PublicOfficials2025: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-2-persoane-prevazute-de-legea-nr-176-2010-5/',
  },
  ani6PublicOfficials2025: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-6-persoane-prevazute-de-legea-nr-176-2010-4/',
  },
  ani4PublicOfficials2025Second: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-4-persoane-prevazute-de-legea-nr-176-2010-5/',
  },
  ani3PublicOfficials2025: {
    label: 'ANI',
    kind: 'official',
    url: 'https://integritate.eu/incidente-de-integritate-3-persoane-prevazute-de-legea-nr-176-2010-3/',
  },
  neacsuAurParty: {
    label: 'Gazeta de Cluj',
    kind: 'press',
    url: 'https://gazetadecluj.ro/unul-dintre-sefii-de-la-spatii-verzi-din-primaria-cluj-napoca-declarat-incompatibil/',
  },
  popescuPsdParty: {
    label: 'eMOL Lupac',
    kind: 'official',
    url: 'https://emol.ro/local/emol/ajax/setcurrentlang.php?gotourl=https%3A%2F%2Femol.ro%2Flupac-cs%2Fregistru-phcl%2F31299%2Fview-anexe-phcl%2F14374&newlang=ro',
  },
  stanculescuPsdParty: {
    label: 'G4Media',
    kind: 'press',
    url: 'https://www.g4media.ro/ani-prefectul-din-giurgiu-psd-se-afla-de-aproape-doi-ani-in-stare-de-incompatibilitate.html',
  },
  ivanciuPsdParty: {
    label: 'BZI',
    kind: 'press',
    url: 'https://www.bzi.ro/un-functionar-public-din-cadrul-dsvsa-iasi-gasit-in-stare-de-incompatibilitate-de-ani-5191898',
  },
  draganPsdParty: {
    label: 'Jurnalul',
    kind: 'press',
    url: 'https://jurnalul.ro/stiri/justitie/fost-primar-pierdut-proces-ani-administrator-public-targsoru-vechi-987872.html',
  },
  purgePsdParty: {
    label: 'Ziare.com',
    kind: 'press',
    url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_bihor/primarie/gepiu/',
  },
  tirziuPnlParty: {
    label: 'Buletin de Timișoara',
    kind: 'press',
    url: 'https://buletindetimisoara.ro/fapte-nu-vorbe-primarul-pnl-timis-din-belint-ales-in-2020-laurentiu-tirziu-a-fost-declarat-incompatibil-de-agentia-nationala-de-integritate/',
  },
  popaPnlParty: {
    label: 'Biz Brașov',
    kind: 'press',
    url: 'https://bizbrasov.ro/2022/06/19/liberalul-popa-zachiu-ramane-primar-al-comunei-dumbravita-referendumul-a-fost-invalidat-dupa-o-prezenta-de-doar-2559/',
  },
  turcinPsdParty: {
    label: 'Arad 24',
    kind: 'press',
    url: 'https://arad24.net/2020/09/27/ioan-turcin-psd-a-castigat-primaria-paulis/',
  },
  tomaPnlParty: {
    label: 'BotoșaniNews',
    kind: 'press',
    url: 'https://www.botosaninews.ro/514404/administratie/sesizare-la-parchet-pentru-un-fost-primar-din-botosani-care-si-a-angajat-sotia-la-primarie/',
  },
  birarutiPsdParty: {
    label: 'Ziarul de Vâlcea',
    kind: 'press',
    url: 'https://ziaruldevalcea.ro/2016/05/votati-pentru-viitor-votati-primar-cristian-biraruti-psd-la-alunu-un-ajutor-nu-un-stapan/',
  },
  bodeanPnlParty: {
    label: 'News Brașov',
    kind: 'press',
    url: 'https://newsbv.ro/rocada-de-liberali-la-functia-de-viceprimar/',
  },
  filimonPnlParty: {
    label: 'Ziare.com',
    kind: 'press',
    url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_neamt/primarie/razboieni/2',
  },
  cealeraPnlParty: {
    label: 'Ziua de Constanța',
    kind: 'press',
    url: 'https://www.ziuaconstanta.ro/stiri/actualitate/ionut-cealera-reales-in-fruntea-serviciului-de-ambulanta-judetean-constanta-776028.html',
  },
  badescuPsdParty: {
    label: 'Ziua de Constanța',
    kind: 'press',
    url: 'https://www.ziuaconstanta.ro/informatii/alegeri-electorale-romania/lista-candidatilor-la-consiliul-judetean-constanta-din-partea-psd-constanta-855013.html',
  },
};

const makeAutomatedJun2026DeepDiveRecord = ({
  name,
  party = 'Independent',
  position,
  positionType = 'other',
  crime,
  county,
  source,
  extraSources = [],
}) => ({
  name,
  party,
  position,
  position_type: positionType,
  crime,
  status: 'investigated',
  details: `ANI a consemnat incidentul de integritate (${crime}) pentru persoana evaluată în legătură cu funcția publică: ${position}.`,
  verified_at: '2026-06-09',
  ...(county
    ? {
        geography: {
          county,
          basis: 'office',
          note: `Funcția publică relevantă era: ${position}.`,
        },
      }
    : {}),
  sources: [source, ...extraSources],
});

const AUTOMATED_JUN_2026_DEEP_DIVE_RECORDS = [
  {
    name: 'Filimon Iosif Ciprian',
    party: 'PNL',
    position: 'Funcționar public în cadrul Primăriei Comunei Tupilați, județul Neamț',
    positionType: 'local_official',
    crime: 'Incompatibilitate',
    county: 'Neamț',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani18PublicOfficials2022,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.filimonPnlParty],
  },
  {
    name: 'Drăgan Nicolae',
    party: 'PSD',
    position: 'Primar al comunei Târgșoru Vechi, județul Prahova',
    positionType: 'mayor',
    crime: 'Conflict de interese administrativ',
    county: 'Prahova',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani18PublicOfficials2022,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.draganPsdParty],
  },
  {
    name: 'Purge Ioan',
    party: 'PSD',
    position: 'Primar al comunei Gepiu, județul Bihor',
    positionType: 'mayor',
    crime: 'Conflict de interese administrativ; sesizare Parchet',
    county: 'Bihor',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani18PublicOfficials2022,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.purgePsdParty],
  },
  {
    name: 'Tîrziu Laurențiu-Ionel',
    party: 'PNL',
    position: 'Primar al comunei Belinț, județul Timiș',
    positionType: 'mayor',
    crime: 'Incompatibilitate',
    county: 'Timiș',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani18PublicOfficials2022,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.tirziuPnlParty],
  },
  {
    name: 'Popa Zachiu',
    party: 'PNL',
    position: 'Primar al comunei Dumbrăvița, județul Brașov',
    positionType: 'mayor',
    crime: 'Conflict de interese administrativ',
    county: 'Brașov',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani18PublicOfficials2022,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.popaPnlParty],
  },
  {
    name: 'Turcin Ioan',
    party: 'PSD',
    position: 'Primar al comunei Păuliș, județul Arad și fost viceprimar',
    positionType: 'mayor',
    crime: 'Conflict de interese administrativ',
    county: 'Arad',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani18PublicOfficials2022,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.turcinPsdParty],
  },
  {
    name: 'Toma Ioan',
    party: 'PNL',
    position: 'Fost primar al comunei Brăești, județul Botoșani',
    positionType: 'mayor',
    crime: 'Conflict de interese administrativ; sesizare Parchet',
    county: 'Botoșani',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani18PublicOfficials2022,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.tomaPnlParty],
  },
  {
    name: 'Birăruți Cristian',
    party: 'PSD',
    position: 'Fost primar al comunei Alunu, județul Vâlcea',
    positionType: 'mayor',
    crime: 'Incompatibilitate',
    county: 'Vâlcea',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani18PublicOfficials2022,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.birarutiPsdParty],
  },
  {
    name: 'Bodean Gheorghe',
    party: 'PNL',
    position: 'Fost viceprimar al comunei Bod, județul Brașov',
    positionType: 'local_official',
    crime: 'Incompatibilitate',
    county: 'Brașov',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani18PublicOfficials2022,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.bodeanPnlParty],
  },
  {
    name: 'Doroș Cătălin George',
    position: 'Funcționar public cu statut special, șef birou în cadrul Academiei de Poliție „Al. I. Cuza” din București',
    crime: 'Incompatibilitate',
    county: 'București',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani12PublicOfficials2022,
  },
  {
    name: 'Dobre Violeta',
    position: 'Director executiv al Direcției Generale Resurse Umane din cadrul Primăriei Sectorului 5, București',
    positionType: 'local_official',
    crime: 'Incompatibilitate',
    county: 'București',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani12PublicOfficials2022,
  },
  {
    name: 'Deușan Marina Daniela',
    position: 'Director al Direcției Avizare din cadrul Ministerului Transporturilor și Infrastructurii',
    crime: 'Conflict de interese administrativ',
    county: 'București',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani3PublicOfficials2022,
  },
  {
    name: 'Suciu Corina',
    position: 'Funcționar public în cadrul APIA - Centrul Județean Maramureș și fost funcționar public în cadrul Primăriei Municipiului Baia Mare',
    crime: 'Sesizare Parchet privind folosirea funcției pentru favorizarea unor persoane',
    county: 'Maramureș',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani3PublicOfficials2022,
  },
  {
    name: 'Sadoveanu Ioana',
    position: 'Secretar al comunei Gingiova, județul Dolj',
    positionType: 'local_official',
    crime: 'Sesizare Parchet privind folosirea funcției pentru favorizarea unor persoane',
    county: 'Dolj',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani12PublicOfficials2023,
  },
  {
    name: 'Pețenchea Bogdan-Dumitru',
    position: 'Secretar al comunei Cristești, județul Botoșani',
    positionType: 'local_official',
    crime: 'Sesizare Parchet privind folosirea funcției pentru favorizarea unor persoane',
    county: 'Botoșani',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani12PublicOfficials2023,
  },
  {
    name: 'Mihalache Ion Mihai',
    position: 'Împuternicit adjunct al șefului Inspectoratului de Poliție Județean Olt',
    crime: 'Conflict de interese administrativ',
    county: 'Olt',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani12PublicOfficials2023,
  },
  {
    name: 'Disăgilă Nicoleta Isabela',
    position: 'Director general în cadrul Primăriei Sectorului 5 București',
    positionType: 'local_official',
    crime: 'Incompatibilitate',
    county: 'București',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani12PublicOfficials2023,
  },
  {
    name: 'Popa Florența Aura',
    position: 'Șef serviciu Resurse Umane în cadrul Primăriei Municipiului Drăgășani, județul Vâlcea',
    positionType: 'local_official',
    crime: 'Incompatibilitate',
    county: 'Vâlcea',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani12PublicOfficials2023,
  },
  {
    name: 'Chiriac Robert Ionuț',
    position: 'Șef serviciu Juridic și Autoritate Tutelară în cadrul Primăriei Municipiului Onești, județul Bacău',
    positionType: 'local_official',
    crime: 'Incompatibilitate',
    county: 'Bacău',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani12PublicOfficials2023,
  },
  {
    name: 'Bârsan Dumitru',
    position: 'Inspector în Compartimentul de Contabilitate și Taxe și Impozite al Primăriei Comunei Jina, județul Sibiu',
    positionType: 'local_official',
    crime: 'Incompatibilitate',
    county: 'Sibiu',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani12PublicOfficials2023,
  },
  {
    name: 'Liferie Lenuța',
    position: 'Referent în cadrul Primăriei Comunei Pardina, județul Tulcea',
    positionType: 'local_official',
    crime: 'Incompatibilitate; conflict de interese administrativ',
    county: 'Tulcea',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani12PublicOfficials2023,
  },
  {
    name: 'Frumușeanu Ileana',
    position: 'Consilier în DGRFP Craiova - Serviciul Fiscal Orășenesc Orșova',
    crime: 'Incompatibilitate',
    county: 'Mehedinți',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani12PublicOfficials2023,
  },
  {
    name: 'Marinescu Gheorghe',
    position: 'Consilier juridic în cadrul Direcției de Sănătate Publică Vâlcea',
    crime: 'Incompatibilitate',
    county: 'Vâlcea',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani12PublicOfficials2023,
  },
  {
    name: 'Bădescu Laurențiu',
    party: 'PSD',
    position: 'Fost manager general al Serviciului de Ambulanță Județean Constanța',
    crime: 'Conflict de interese administrativ; sesizare Parchet',
    county: 'Constanța',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.aniMedicalManagers2022,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.badescuPsdParty],
  },
  {
    name: 'Neacșu Mihai Gabriel',
    party: 'AUR',
    position: 'Funcționar public în cadrul Primăriei Municipiului Cluj-Napoca, județul Cluj',
    positionType: 'local_official',
    crime: 'Incompatibilitate',
    county: 'Cluj',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani8PublicOfficials2022,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.neacsuAurParty],
  },
  {
    name: 'Vînătoru Dragoș-Victor',
    position: 'Secretar al comunei Argetoaia, județul Dolj',
    positionType: 'local_official',
    crime: 'Sesizare Parchet privind folosirea funcției pentru favorizarea unor persoane',
    county: 'Dolj',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani4PublicOfficials2022,
  },
  {
    name: 'Costică Andra Maria',
    position: 'Funcționar public în cadrul Penitenciarului Giurgiu',
    crime: 'Incompatibilitate',
    county: 'Giurgiu',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani4PublicOfficials2022,
  },
  {
    name: 'Popescu Mircea',
    party: 'PSD',
    position: 'Manager interimar al Spitalului Orășenesc Oravița, județul Caraș-Severin',
    crime: 'Incompatibilitate',
    county: 'Caraș-Severin',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani6PublicOfficials2023,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.popescuPsdParty],
  },
  {
    name: 'Păcurar Mariana',
    position: 'Șef secție al Ambulatorului integrat stomatologie din cadrul Spitalului Clinic Județean de Urgență Târgu-Mureș',
    crime: 'Incompatibilitate; sesizare Parchet',
    county: 'Mureș',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani8PublicOfficials2023,
  },
  {
    name: 'Raicu Filip',
    position: 'Arhitect șef în cadrul Primăriei Municipiului Tulcea, județul Tulcea',
    positionType: 'local_official',
    crime: 'Conflict de interese administrativ; sesizare Parchet',
    county: 'Tulcea',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani8PublicOfficials2023,
  },
  {
    name: 'Vasile Mari',
    position: 'Funcționar public în cadrul Primăriei Comunei Dragoș Vodă, județul Călărași',
    positionType: 'local_official',
    crime: 'Conflict de interese administrativ',
    county: 'Călărași',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani8PublicOfficials2023,
  },
  {
    name: 'Filimon Dan',
    position: 'Fost șef birou Impozite și Taxe Locale în cadrul Primăriei Orașului Panciu, județul Vrancea',
    positionType: 'local_official',
    crime: 'Incompatibilitate',
    county: 'Vrancea',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani8PublicOfficials2023,
  },
  {
    name: 'Chiribău Constantin Dudu',
    position: 'Agent de poliție în cadrul Serviciului Arme, Explozivi și Substanțe Periculoase al IPJ Bacău',
    crime: 'Incompatibilitate',
    county: 'Bacău',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani8PublicOfficials2023,
  },
  {
    name: 'Șteau Darius Antonio',
    position: 'Funcționar public cu statut special în cadrul Brigăzii de Combatere a Criminalității Alba-Iulia',
    crime: 'Sesizare Parchet pentru fals în declarații',
    county: 'Alba',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani6PublicOfficials2021,
  },
  {
    name: 'Dobrescu Daniel',
    position: 'Fost funcționar public cu statut special în cadrul Penitenciarului Satu Mare',
    crime: 'Conflict de interese administrativ',
    county: 'Satu Mare',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani6PublicOfficials2021,
  },
  {
    name: 'Oprescu Mircea Sorin',
    position: 'Fost șef secție în cadrul Spitalului Universitar de Urgență București',
    crime: 'Incompatibilitate',
    county: 'București',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani2PublicOfficials2023,
  },
  {
    name: 'Mureșan Vasile Adrian',
    position: 'Medic șef secție Chirurgie Vasculară în cadrul Spitalului Clinic Județean de Urgență Târgu-Mureș',
    crime: 'Incompatibilitate',
    county: 'Mureș',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani8PublicOfficials2024,
  },
  {
    name: 'Mitroi Ștefan Cristinel',
    position: 'Șef serviciu Financiar-Contabil, Buget în cadrul Direcției Economice a Primăriei Orașului Voluntari, județul Ilfov',
    positionType: 'local_official',
    crime: 'Incompatibilitate',
    county: 'Ilfov',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani8PublicOfficials2024,
  },
  {
    name: 'Enișor Cristina Magdalena',
    position: 'Coordonator al controlului financiar preventiv propriu în cadrul MIPE - Direcția Generală Programe Europene Capital Uman',
    crime: 'Conflict de interese administrativ',
    county: 'București',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani8PublicOfficials2024,
  },
  {
    name: 'Maxim Bogdan-Valentin',
    position: 'Funcționar public cu statut special în cadrul Inspectoratului de Poliție Județean Sibiu',
    crime: 'Incompatibilitate',
    county: 'Sibiu',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani8PublicOfficials2024,
  },
  {
    name: 'Țibenschi Felicia',
    position: 'Fost funcționar public în cadrul Direcției de Asistență Socială Deva',
    positionType: 'local_official',
    crime: 'Incompatibilitate',
    county: 'Hunedoara',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani8PublicOfficials2024,
  },
  {
    name: 'Popovici Cosmin-Ovidiu Florian',
    position: 'Funcționar public cu statut special în cadrul Serviciului de Combatere a Criminalității Organizate Arad',
    crime: 'Avere nejustificată',
    county: 'Arad',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani4PublicOfficials2024,
  },
  {
    name: 'Epuran Silviu',
    position: 'Subcomisar de poliție medic în cadrul Spitalului de Urgență „Prof. Dr. Dimitrie Gerota”',
    crime: 'Incompatibilitate; sesizare Parchet',
    county: 'București',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani4PublicOfficials2024,
  },
  {
    name: 'Stănculescu Florentina',
    party: 'PSD',
    position: 'Prefect în cadrul Instituției Prefectului Județul Giurgiu',
    crime: 'Incompatibilitate',
    county: 'Giurgiu',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani5PublicOfficials2025,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.stanculescuPsdParty],
  },
  {
    name: 'Breban Claudia-Maria',
    position: 'Director executiv al Direcției de Dezvoltare și Implementare Proiecte din cadrul Consiliului Județean Mureș',
    positionType: 'local_official',
    crime: 'Incompatibilitate',
    county: 'Mureș',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani4PublicOfficials2025,
  },
  {
    name: 'Nacu Manuel',
    position: 'Fost comisar-șef de poliție, împuternicit șef al Inspectoratului de Poliție Județean Vaslui',
    crime: 'Incompatibilitate',
    county: 'Vaslui',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani4PublicOfficials2025,
  },
  {
    name: 'Cealera Ionuț',
    party: 'PNL',
    position: 'Fost manager general interimar al Serviciului de Ambulanță Județean Constanța',
    crime: 'Incompatibilitate',
    county: 'Constanța',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani4PublicOfficials2025,
    extraSources: [AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.cealeraPnlParty],
  },
  {
    name: 'Tufă Mihalcea Alin-Gabriel',
    position: 'Agent șef adjunct de poliție la Poliția orașului Ștefănești din cadrul IPJ Argeș',
    crime: 'Avere nejustificată',
    county: 'Argeș',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani6PublicOfficials2025,
  },
  {
    name: 'Nagy Robert Albert',
    position: 'Agent principal de poliție la Brigada Autostrăzi din cadrul Inspectoratului General al Poliției Române',
    crime: 'Incompatibilitate',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani6PublicOfficials2025,
  },
  {
    name: 'Andriuță Elena-Cristina',
    position: 'Medic șef al Laboratorului de Recuperare Medicină Fizică și Balneologie din cadrul Spitalului Clinic Județean de Urgență „Sf. Apostol Andrei” Constanța',
    crime: 'Incompatibilitate',
    county: 'Constanța',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani6PublicOfficials2025,
  },
  {
    name: 'Bogheanu Marilena',
    position: 'Fost director general în cadrul Agenției pentru Dezvoltare Regională Sud-Vest Oltenia',
    crime: 'Sesizare Parchet privind folosirea funcției pentru favorizarea unor persoane',
    county: 'Dolj',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani6PublicOfficials2025,
  },
  {
    name: 'Pătrașcu Dorin Mihai',
    position: 'Director general în cadrul Regiei Autonome Aeroportul Satu Mare',
    crime: 'Sesizare Parchet privind folosirea funcției pentru favorizarea unor persoane',
    county: 'Satu Mare',
    source: AUTOMATED_JUN_2026_DEEP_DIVE_SOURCES.ani4PublicOfficials2025Second,
  },
].map(makeAutomatedJun2026DeepDiveRecord);

const AUTOMATED_JUN_2026_PUBLIC_ADMIN_RECORDS = [
  {
    name: 'Stoian Adrian',
    party: 'Independent',
    position: 'Consilier superior in cadrul Primariei Orasului Novaci, judetul Gorj',
    position_type: 'local_official',
    crime: 'Folosirea informatiilor obtinute in exercitarea atributiilor de serviciu',
    status: 'investigated',
    details:
      'ANI a anuntat in aprilie 2026 ca a sesizat DNA cu privire la indicii potrivit carora, in perioada 2018-2025, ar fi utilizat informatii obtinute in exercitarea atributiilor de serviciu pentru incheierea a 30 de contracte, in valoare de aproximativ 2,06 milioane lei, intre Primaria Novaci si societati comerciale administrate de acesta.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Gorj',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul Primariei Orasului Novaci, judetul Gorj.',
    },
    sources: [ANI_APR_2026_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Rotar Izabella-Cristina',
    party: 'UDMR',
    position: 'Director general in cadrul S.C. Administrarea Domeniului Public S.A. Gherla',
    position_type: 'local_official',
    crime: 'Folosirea functiei pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a anuntat in aprilie 2026 ca a sesizat Parchetul de pe langa Curtea de Apel Cluj, retinand indicii ca ar fi participat la adoptarea hotararii Consiliului de Administratie prin care a fost numita director general al societatii, cu incalcarea regulilor de guvernanta corporativa.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Cluj',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul societatii Administrarea Domeniului Public S.A. Gherla, judetul Cluj.',
    },
    sources: [
      ANI_APR_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Gherla INFO',
        kind: 'press',
        url: 'https://gherlainfo.ro/investirea-primarului-la-gherla-consilierii-au-depus-juramantul-video/',
      },
    ],
  },
  {
    name: 'Radu Florentina Georgeta',
    party: 'Independent',
    position:
      'Director executiv al Directiei pentru Sanatate din cadrul Administratiei pentru Sanatate si Educatie a Municipiului Timisoara',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2026 ca, la 28 decembrie 2023, ar fi semnat dispozitia prin care si-a aprobat propriul transfer de la Directia de Sanatate Publica Timis la Administratia pentru Sanatate si Educatie a Municipiului Timisoara.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul Administratiei pentru Sanatate si Educatie a Municipiului Timisoara.',
    },
    sources: [ANI_APR_2026_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Gîrtone Ligia Mihaela',
    party: 'Independent',
    position: 'Functionar public in cadrul Primariei Comunei Moraresti, judetul Arges',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2026 ca, la 22 octombrie 2022, ar fi avizat pentru legalitate dispozitia prin care a fost numita intr-o functie publica de executie in aparatul de specialitate al primarului comunei Moraresti si i-au fost delegate atributii de secretar general.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul Primariei Comunei Moraresti, judetul Arges.',
    },
    sources: [ANI_APR_2026_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Ciorba Zita Monica',
    party: 'Independent',
    position: 'Fost functionar public in cadrul Directiei de Sanatate Publica Salaj',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat in aprilie 2026 ca, in perioada 15 ianuarie 2018 - 15 martie 2023, ar fi detinut simultan functia publica si activitati private in domeniul financiar-contabil, legate direct sau indirect de atributiile sale de functionar public.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Sălaj',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul Directiei de Sanatate Publica Salaj.',
    },
    sources: [ANI_APR_2026_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Folescu Cornel-Vasile',
    party: 'PNL',
    position:
      'Fost director general al S.C. SECOM S.A.; director implementare proiecte in cadrul DRDP Craiova',
    position_type: 'other',
    crime: 'Abuz in serviciu cu obtinere de foloase necuvenite',
    sentence: 'Trimis in judecata de DNA',
    sentence_years: null,
    status: 'indicted',
    details:
      'DNA a anuntat in aprilie 2026 trimiterea sa in judecata in dosarul achizitiilor de servicii de telefonie si date mobile ale S.C. SECOM S.A.; societatea s-a constituit parte civila fata de acesta cu suma de 1.371.669,1 lei.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Mehedinți',
      basis: 'office',
      note: 'Functia publica relevanta era la S.C. SECOM S.A., societate publica locala din Drobeta-Turnu Severin, judetul Mehedinti.',
    },
    sources: [
      DNA_APR_2026_BULLETIN_SOURCE,
      {
        label: 'Alba24',
        kind: 'press',
        url: 'https://alba24.ro/procurorii-dna-alba-iulia-au-trimis-in-judecata-un-fost-deputat-si-un-director-tun-de-peste-1-milion-de-lei-cu-smartphone-uri-1130215.html',
      },
    ],
  },
  {
    name: 'Bidilici Adrian',
    party: 'PSD',
    position: 'Director executiv al Directiei Generale de Asistenta Sociala si Protectia Copilului Mehedinti',
    position_type: 'local_official',
    crime: 'Abuz in serviciu cu obtinere de foloase necuvenite',
    sentence: 'Trimis in judecata de DNA',
    sentence_years: null,
    status: 'indicted',
    details:
      'DNA a anuntat in aprilie 2026 trimiterea sa in judecata, retinand ca in perioada 25 ianuarie 2021 - 31 octombrie 2023 ar fi realizat achizitii publice de telefonie si date mobile cu costuri nejustificat de mari, iar D.G.A.S.P.C. Mehedinti s-a constituit parte civila cu suma de 1.252.712,24 lei.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Mehedinți',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul D.G.A.S.P.C. Mehedinti.',
    },
    sources: [
      DNA_APR_2026_BULLETIN_SOURCE,
      {
        label: 'Jurnalul Olteniei',
        kind: 'press',
        url: 'https://www.jurnalulolteniei.ro/2017/09/25/baieti-buni-psd-mehedinti-l-a-facut-mare-pe-chirila-urmeaza-bidilici/',
      },
    ],
  },
  {
    name: 'Moldovan Grigore Florin',
    party: 'Independent',
    position:
      'Administrator public al judetului Bistrita-Nasaud si reprezentant al UAT Bistrita-Nasaud',
    position_type: 'local_official',
    crime: 'Abuz in serviciu; luare de mita',
    status: 'investigated',
    details:
      'DNA Cluj a anuntat in aprilie 2026 punerea in miscare a actiunii penale si retinerea sa pentru doua infractiuni de abuz in serviciu si luare de mita in forma continuata, in cauza privind lucrari derulate la nivelul Consiliului Judetean Bistrita-Nasaud.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Bistrița-Năsăud',
      basis: 'office',
      note: 'Functia publica relevanta era la nivelul UAT judetul Bistrita-Nasaud.',
    },
    sources: [DNA_APR_2026_BN_ROADS_SOURCE],
  },
  {
    name: 'Ceclan Oprea Ciprian',
    party: 'PSD',
    position:
      'Director executiv al Directiei investitii si drumuri judetene din cadrul Consiliului Judetean Bistrita-Nasaud',
    position_type: 'local_official',
    crime: 'Complicitate la abuz in serviciu',
    status: 'investigated',
    details:
      'DNA Cluj a anuntat in aprilie 2026 punerea in miscare a actiunii penale si retinerea sa pentru complicitate la abuz in serviciu, in dosarul privind lucrari aflate in derulare la Consiliul Judetean Bistrita-Nasaud.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Bistrița-Năsăud',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul Consiliului Judetean Bistrita-Nasaud.',
    },
    sources: [
      DNA_APR_2026_BN_ROADS_SOURCE,
      {
        label: 'Mesager24',
        kind: 'press',
        url: 'https://mesager24.ro/psd-bistrita-nasaud-si-a-stabilit-candidatii-pentru-alegerile-parlamentare-din-6-decembrie/',
      },
    ],
  },
  {
    name: 'Poienar Victor',
    party: 'Independent',
    position:
      'Sef al Serviciului administrare drumuri judetene din cadrul Consiliului Judetean Bistrita-Nasaud',
    position_type: 'local_official',
    crime: 'Complicitate la abuz in serviciu',
    status: 'investigated',
    details:
      'DNA Cluj a anuntat in aprilie 2026 punerea in miscare a actiunii penale si retinerea sa pentru complicitate la abuz in serviciu in cauza privind lucrari publice la nivelul Consiliului Judetean Bistrita-Nasaud.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Bistrița-Năsăud',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul Consiliului Judetean Bistrita-Nasaud.',
    },
    sources: [DNA_APR_2026_BN_ROADS_SOURCE],
  },
  {
    name: 'Botiș Rodica',
    party: 'Independent',
    position:
      'Inginer in cadrul Serviciului administrare drumuri judetene din cadrul Consiliului Judetean Bistrita-Nasaud',
    position_type: 'local_official',
    crime: 'Complicitate la abuz in serviciu',
    status: 'investigated',
    details:
      'DNA Cluj a anuntat in aprilie 2026 punerea in miscare a actiunii penale si control judiciar pentru complicitate la abuz in serviciu, in dosarul privind lucrari publice la nivelul Consiliului Judetean Bistrita-Nasaud.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Bistrița-Năsăud',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul Consiliului Judetean Bistrita-Nasaud.',
    },
    sources: [DNA_APR_2026_BN_ROADS_SOURCE],
  },
  {
    name: 'Văclaș Gelu',
    party: 'Independent',
    position: 'Sef al parcului auto si sofer in cadrul Consiliului Judetean Bistrita-Nasaud',
    position_type: 'local_official',
    crime: 'Delapidare; participatie improprie la abuz in serviciu',
    status: 'investigated',
    details:
      'DNA Cluj a anuntat in aprilie 2026 punerea in miscare a actiunii penale si control judiciar pentru delapidare in forma continuata si participatie improprie la abuz in serviciu, sub forma instigarii.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Bistrița-Năsăud',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul Consiliului Judetean Bistrita-Nasaud.',
    },
    sources: [DNA_APR_2026_BN_ROADS_SOURCE],
  },
  {
    name: 'Anton Cristian',
    party: 'PSD',
    position: 'Director general al Autoritatii Rutiere Romane',
    position_type: 'other',
    crime: 'Luare de mita; folosirea de informatii nedestinate publicitatii; grup infractional organizat',
    status: 'investigated',
    details:
      'DNA Cluj a anuntat in aprilie 2026 punerea in miscare a actiunii penale si retinerea sa pentru fapte legate de fraudarea examenelor pentru certificatele de pregatire profesionala organizate in cadrul Autoritatii Rutiere Romane.',
    verified_at: '2026-06-04',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Functia publica relevanta era cea de director general al Autoritatii Rutiere Romane, institutie centrala.',
    },
    sources: [
      DNA_APR_2026_ARR_EXAM_SOURCE,
      {
        label: 'Euronews România',
        kind: 'press',
        url: 'https://www.euronews.ro/articole/perchezitii-dna-la-autoritatea-rutiera-romana-intr-un-dosar-de-coruptie-seful-arr',
      },
    ],
  },
  {
    name: 'Popescu Mihai Cornel',
    party: 'Independent',
    position:
      'Inspector-sef al Inspectiei de Stat pentru Controlul Cazanelor, Recipientelor sub Presiune si Instalatiilor de Ridicat Constanta',
    position_type: 'other',
    crime: 'Luare de mita; folosirea de informatii nedestinate publicitatii',
    sentence: 'Acord de recunoastere trimis instantei',
    sentence_years: null,
    status: 'indicted',
    details:
      'DNA Constanta a anuntat in aprilie 2026 sesizarea instantei cu acord de recunoastere a vinovatiei pentru fapte din perioada 29 octombrie 2025 - 28 ianuarie 2026, privind sume primite pentru indeplinirea atributiilor de serviciu si acces la informatii confidentiale despre examene.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Functia publica relevanta era in cadrul I.S.C.I.R. Constanta.',
    },
    sources: [DNA_APR_2026_BULLETIN_SOURCE],
  },
  {
    name: 'Carataș George Adrian',
    party: 'Independent',
    position:
      'Inspector in cadrul Companiei Nationale pentru Controlul Cazanelor, Instalatiilor de Ridicat si Recipientelor sub Presiune S.A.',
    position_type: 'other',
    crime: 'Luare de mita',
    sentence: 'Acord de recunoastere trimis instantei',
    sentence_years: null,
    status: 'indicted',
    details:
      'DNA Constanta a anuntat in aprilie 2026 sesizarea instantei cu acord de recunoastere a vinovatiei, retinand ca in perioada 22 septembrie - 17 decembrie 2025 ar fi primit bunuri in valoare totala de 2.102,57 lei pentru rapoarte de inspectie favorabile.',
    verified_at: '2026-06-04',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Functia publica relevanta era exercitata in judetul Constanta.',
    },
    sources: [DNA_APR_2026_BULLETIN_SOURCE],
  },
];

const ANI_2022_2024_LOCAL_OFFICIALS_RECORDS = [
  {
    name: 'Stanciu Cristian',
    party: 'PSD',
    position: 'Consilier județean în cadrul Consiliului Județean Iași',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2024 că, în perioada 15 iunie 2018 - 27 ianuarie 2021, ar fi exercitat simultan calitatea de membru titular în Consiliul de administrație al Spitalului Clinic de Urgență pentru Copii „Sf. Maria” Iași și funcția de vicepreședinte într-un partid politic.',
    verified_at: '2026-05-31',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de consilier județean în cadrul Consiliului Județean Iași.',
    },
    sources: [
      ANI_FEB_2024_FOUR_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Instituția Prefectului - Județul Iași',
        kind: 'official',
        url: 'https://is.prefectura.mai.gov.ro/wp-content/uploads/sites/49/2024/05/ANEXA-2-CJ-LA-PROCES-VERBAL-RAMANERE-DEFINITIVA-CANDIDATURI.pdf',
      },
    ],
  },
  {
    name: 'Rotaru Gheorghe',
    party: 'PSD',
    position: 'Primar al comunei Țibana, județul Iași',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2024 că, în exercitarea atribuțiilor de primar, ar fi emis o dispoziție pentru întreprinderea familială reprezentată de soția sa și în care era membru unul dintre fiii săi.',
    verified_at: '2026-05-31',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Țibana, județul Iași.',
    },
    sources: [
      ANI_FEB_2024_FOUR_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Primăria Țibana',
        kind: 'official',
        url: 'https://www.primariatibana.ro/data/_editor/files/Documents/CONSILIERI_LOCALI.pdf',
      },
    ],
  },
  {
    name: 'Novac Vasile',
    party: 'PSD',
    position: 'Primar al comunei Ivănești, județul Vaslui',
    position_type: 'mayor',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2024 că, începând cu luna octombrie 2020, ar fi exercitat simultan funcția de primar și activități remunerate în cadrul unei societăți.',
    verified_at: '2026-05-31',
    geography: {
      county: 'Vaslui',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Ivănești, județul Vaslui.',
    },
    sources: [
      ANI_FEB_2024_FOUR_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_vaslui/primarie/ivanesti/',
      },
    ],
  },
  {
    name: 'Gherman Vasile-Vlăduț',
    party: 'PSD',
    position: 'Primar al comunei Slatina, județul Suceava',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2024 că, în exercitarea atribuțiilor de primar, ar fi semnat un contract de furnizare produse cu societatea comercială în care fratele său era asociat și administrator.',
    verified_at: '2026-05-31',
    geography: {
      county: 'Suceava',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Slatina, județul Suceava.',
    },
    sources: [
      ANI_FEB_2024_FOUR_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_suceava/primarie/slatina/2',
      },
    ],
  },
  {
    name: 'Vatamanu Ionel',
    party: 'PSD',
    position: 'Primar al orașului Târgu Frumos, județul Iași',
    position_type: 'mayor',
    crime: 'Fals în declarații; sesizare fiscală',
    status: 'investigated',
    details:
      'ANI a sesizat în august 2022 Parchetul de pe lângă ÎCCJ pentru indicii de fals în declarații privind mențiuni neconcordante din declarațiile de avere depuse în perioada 2015-2017 și a solicitat verificări fiscale.',
    verified_at: '2026-05-31',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al orașului Târgu Frumos, județul Iași.',
    },
    sources: [
      ANI_AUG_2022_FIRST_SEVEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'NewsPascani.com',
        kind: 'press',
        url: 'https://newspascani.com/ionel-vatamanu-a-castigat-un-nou-mandat-la-primaria-targu-frumos/',
      },
    ],
  },
  {
    name: 'Manole Nicolae-Marius',
    party: 'PSD',
    position: 'Primar al comunei Aninoasa, județul Argeș; fost consilier județean în C.J. Argeș',
    position_type: 'mayor',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, în mandatele de consilier județean 2016-2020 și 2020-2024, societatea administrată de soția sa ar fi încheiat contracte și acte adiționale cu instituții aflate sub autoritatea Consiliului Județean Argeș.',
    verified_at: '2026-05-31',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Aninoasa, județul Argeș, iar cauza vizează și mandatul de consilier județean în C.J. Argeș.',
    },
    sources: [
      ANI_AUG_2022_FIRST_SEVEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Consiliul Județean Argeș',
        kind: 'official',
        url: 'https://www.cjarges.ro/documents/10865/1410647/PH%2B17.08.2021.pdf/7230e963-fa5c-47da-9952-bdd24dbfc6e0',
      },
    ],
  },
  {
    name: 'Butum Ioan Eusebiu',
    party: 'PNL',
    position: 'Viceprimar al comunei Șercaia, județul Brașov',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, începând cu 22 ianuarie 2019, ar fi exercitat simultan funcția de viceprimar și calitatea de comerciant persoană fizică în cadrul propriei întreprinderi individuale.',
    verified_at: '2026-05-31',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Șercaia, județul Brașov.',
    },
    sources: [
      ANI_AUG_2022_FIRST_SEVEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Primăria Șercaia',
        kind: 'official',
        url: 'https://www.primaria-sercaia.ro/wp-content/uploads/2022/02/STATUTUL_COMUNEI_SERCAIA.pdf',
      },
    ],
  },
  {
    name: 'Simion Ionuț Stelian',
    party: 'PSD',
    position: 'Consilier local al comunei Muntenii de Sus, județul Vaslui',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, în mandatul de consilier local, ar fi participat la adoptarea unei hotărâri prin care s-au alocat 45.000 lei clubului sportiv în cadrul căruia era legitimat.',
    verified_at: '2026-05-31',
    geography: {
      county: 'Vaslui',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Muntenii de Sus, județul Vaslui.',
    },
    sources: [
      ANI_AUG_2022_FIRST_SEVEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_vaslui/consiliul-local/muntenii-de-sus/',
      },
    ],
  },
  {
    name: 'Kutasi Dezső',
    party: 'UDMR',
    position: 'Consilier local al comunei Neaua, județul Mureș',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în august 2022 că, în mandatul 2016-2020, ar fi votat pentru o hotărâre privind acordarea unei cotizații către o asociație în care deținea funcția de evaluator proiecte.',
    verified_at: '2026-05-31',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Neaua, județul Mureș.',
    },
    sources: [
      ANI_AUG_2022_FIRST_SEVEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Primăria Neaua',
        kind: 'official',
        url: 'https://neaua.ro/download/9x6OUqw6Y0vmk7xHWDZbVBhWEGl8eanTpoi86TfS.pdf',
      },
    ],
  },
  {
    name: 'Matei Paul Vlad',
    party: 'USR',
    position: 'Consilier local al comunei Hălchiu, județul Brașov',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat conflict administrativ și a sesizat Parchetul de pe lângă ÎCCJ după ce, în mai 2019, ar fi participat la adoptarea unei hotărâri privind închirierea unor pășuni, în baza căreia o asociație reprezentată de tatăl său a primit subvenții APIA.',
    verified_at: '2026-05-31',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Hălchiu, județul Brașov.',
    },
    sources: [
      ANI_AUG_2022_FIRST_SEVEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Primăria Hălchiu',
        kind: 'official',
        url: 'https://primariahalchiu.ro/componenta-consiliului-local/',
      },
      {
        label: 'Brașov Metropolitan',
        kind: 'press',
        url: 'https://brasovmetropolitan.ro/2019/07/usr-brasov-a-recrutat-doi-consilieri-locali-care-vor-sa-candideze-si-la-primarie/',
      },
    ],
  },
  {
    name: 'Feier Emil-Călin',
    party: 'PSD',
    position: 'Consilier local al comunei Hodac, județul Mureș',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat conflict administrativ și a sesizat Parchetul de pe lângă ÎCCJ, susținând că ar fi luat parte la emiterea și adoptarea unor acte administrative care au produs folos patrimonial pentru o asociație din care făcea parte împreună cu fiul său.',
    verified_at: '2026-05-31',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Hodac, județul Mureș.',
    },
    sources: [
      ANI_AUG_2022_FIRST_SEVEN_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Primăria Hodac',
        kind: 'official',
        url: 'https://www.hodac.ro/consiliul-local/',
      },
    ],
  },
];

const ANI_2025_2026_ADDITIONAL_RECORDS = [
  {
    name: 'Jugănaru Victor Antoniu',
    party: 'PNL',
    position:
      'Membru titular în Consiliul de administrație al Institutului de Urgențe pentru Boli Cardiovasculare „Prof. Dr. C.C. Iliescu”',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în ianuarie 2026 că, în perioada 9 decembrie 2022 - 15 noiembrie 2025, ar fi exercitat simultan calitatea de membru titular în consiliul de administrație al institutului și funcții în organele de conducere ale PNL, inclusiv vicepreședinte al Departamentului pentru Politici în Sănătate în cadrul PNL Sector 3.',
    verified_at: '2026-05-30',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Institutului de Urgențe pentru Boli Cardiovasculare „Prof. Dr. C.C. Iliescu”, București.',
    },
    sources: [ANI_JAN_2026_BIG_DATA_SOURCE],
  },
  {
    name: 'Hățăgan Olimpiu-Sorin',
    party: 'PNL',
    position:
      'Fost membru supleant în Consiliul de administrație al Spitalului Orășenesc „Dr. Valer Russu” Luduș',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în ianuarie 2026 că, în perioada 17 mai 2023 - 27 august 2025, ar fi exercitat simultan funcția de membru supleant în consiliul de administrație al spitalului și funcția de președinte al Organizației PNL Luduș.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul de administrație al Spitalului Orășenesc „Dr. Valer Russu” Luduș, județul Mureș.',
    },
    sources: [ANI_JAN_2026_BIG_DATA_SOURCE],
  },
  {
    name: 'Romocean Paula Ana',
    party: 'USR',
    position: 'Membru titular în Consiliul de administrație al Spitalului Clinic Municipal de Urgență Timișoara',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în ianuarie 2026 că, în perioada 27 iunie 2021 - 22 mai 2023, ar fi exercitat simultan calitatea de membru titular în consiliul de administrație al spitalului și funcția de membru în Biroul Local Timișoara al USR.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul de administrație al Spitalului Clinic Municipal de Urgență Timișoara.',
    },
    sources: [ANI_JAN_2026_BIG_DATA_SOURCE],
  },
  {
    name: 'Nicula Monica',
    party: 'Independent',
    position: 'Fost expert în cadrul Primăriei Municipiului București',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat în septembrie 2025 conflict de interese administrativ și a sesizat Parchetul de pe lângă ÎCCJ, reținând că ar fi participat la întocmirea unei autorizații de construire și a unui certificat de urbanism în favoarea unor societăți în care soțul său avea calitatea de asociat unic și administrator.',
    verified_at: '2026-05-30',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei Municipiului București.',
    },
    sources: [ANI_SEP_2025_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Căprărin Marian Daniel',
    party: 'Independent',
    position: 'Fost funcționar public de conducere în cadrul Ministerului Transporturilor și Infrastructurii',
    position_type: 'other',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în septembrie 2025 că, în perioada exercitării funcției publice, ar fi avizat trei împuterniciri prin care a fost numit administrator provizoriu al CN APDF SA, i-a fost prelungit mandatul și a fost stabilită remunerația administratorilor provizorii.',
    verified_at: '2026-05-30',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Ministerului Transporturilor și Infrastructurii, instituție centrală cu sediul în București.',
    },
    sources: [ANI_SEP_2025_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Necula Lucia-Alina',
    party: 'Independent',
    position: 'Fost funcționar public parlamentar în cadrul Autorității Electorale Permanente',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în septembrie 2025 că, în perioada 1 aprilie 2021 - 28 august 2022, ar fi desfășurat activități de consultanță juridică în sectorul privat aflate în legătură directă cu atribuțiile funcției publice deținute.',
    verified_at: '2026-05-30',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Autorității Electorale Permanente.',
    },
    sources: [ANI_SEP_2025_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Dicu Cosmin Aurel',
    party: 'Independent',
    position: 'Funcționar public cu statut special în cadrul Inspectoratului de Poliție Județean Ilfov',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în septembrie 2025 că, în perioada 10 mai 2021 - 30 octombrie 2022, ar fi deținut simultan funcția publică cu statut special și o funcție în sectorul privat incompatibilă cu calitatea de organ de cercetare penală al poliției judiciare.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Ilfov',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Inspectoratului de Poliție Județean Ilfov.',
    },
    sources: [ANI_SEP_2025_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Ceară Olimpia',
    party: 'Independent',
    position: 'Fost șef de post la Inspectoratul de Poliție Județean Constanța',
    position_type: 'other',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în septembrie 2025 că, în perioada 11 februarie 2020 - 23 februarie 2022, ar fi deținut simultan funcția publică cu statut special și o funcție în sectorul privat incompatibilă cu calitatea de organ de cercetare penală al poliției judiciare.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Inspectoratului de Poliție Județean Constanța.',
    },
    sources: [ANI_SEP_2025_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Gavril Mihai Liviu',
    party: 'PSD',
    position:
      'Fost membru în Consiliul de administrație al Spitalului Clinic de Recuperare Iași și consilier local în Consiliul Local Iași',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în septembrie 2025 că, în perioada 26 februarie 2021 - 28 februarie 2022, ar fi exercitat simultan funcția de membru în Consiliul de administrație al Spitalului Clinic de Recuperare Iași, ca reprezentant al Consiliului Local Iași, și funcția de membru în organele de conducere ale unui partid politic.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era legată de Consiliul Local Iași și Spitalul Clinic de Recuperare Iași.',
    },
    sources: [ANI_SEP_2025_PUBLIC_OFFICIALS_SOURCE, GAVRIL_MIHAI_LIVIU_PSD_SOURCE],
  },
  {
    name: 'Gavrilă Mariana',
    party: 'Independent',
    position: 'Funcționar public în cadrul Primăriei comunei Plosca, județul Teleorman',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în septembrie 2025 că, în perioada 2020-2024, ar fi fost în raport de subordonare ierarhică directă față de soțul său, viceprimarul comunei Plosca, ca urmare a exercitării unei funcții publice în aparatul de specialitate al primarului.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Teleorman',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Primăriei comunei Plosca, județul Teleorman.',
    },
    sources: [ANI_SEP_2025_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Tokoș Gabriela-Lavinia',
    party: 'PNL',
    position: 'Consilier local în Consiliul Local al comunei Augustin, județul Brașov',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în iunie 2025 că, în exercitarea mandatului de consilier local, ar fi participat la adoptarea unei hotărâri privind bugetul și lista de investiții ale comunei Augustin, prin care s-a aprobat și cota de finanțare pentru un proiect în cadrul căruia erau angajate și remunerate atât persoana evaluată, cât și nora sa.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Augustin, județul Brașov.',
    },
    sources: [ANI_PUBLIC_OFFICIALS_FOUR_SOURCE, TOKOS_PNL_SOURCE],
  },
  {
    name: 'Devesel Daniela',
    party: 'PNL',
    position: 'Viceprimar al comunei Măneciu, județul Prahova',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada noiembrie 2020 - aprilie 2025, ar fi exercitat simultan funcția de viceprimar și calitatea de angajat cu contract individual de muncă în sectorul privat, realizând venituri salariale de 18.776 lei.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Măneciu, județul Prahova.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, DEVESEL_DANIELA_PNL_SOURCE],
  },
  {
    name: 'Pașata Adam',
    party: 'PNL',
    position: 'Viceprimar al comunei Stejaru, județul Tulcea',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada 15 ianuarie 2021 - 11 august 2025, ar fi exercitat simultan funcția de viceprimar și calitatea de comerciant persoană fizică autorizată în cadrul propriului PFA.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Tulcea',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Stejaru, județul Tulcea.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, PASATA_ADAM_PNL_SOURCE],
  },
  {
    name: 'Goidan Cristian',
    party: 'PMP',
    position: 'Fost viceprimar al comunei Drăgănești, județul Prahova',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada exercitării mandatului 2020-2024, ar fi exercitat simultan funcția de viceprimar și activități remunerate în mediul privat.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Drăgănești, județul Prahova.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, GOIDAN_CRISTIAN_PMP_SOURCE],
  },
  {
    name: 'Chimigeriu Ovidiu Cristian',
    party: 'PNL',
    position: 'Membru în Consiliul de administrație al Spitalului Județean de Urgență Reșița',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada deținerii funcției de membru în Consiliul de administrație al Spitalului Județean de Urgență Reșița, ar fi exercitat și funcția de membru în organele de conducere ale unui partid politic.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul de administrație al Spitalului Județean de Urgență Reșița.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, CHIMIGERIU_BARBURA_PNL_SOURCE],
  },
  {
    name: 'Barbura Maurieana-Liliana',
    party: 'PNL',
    position:
      'Membru în Consiliul de administrație al Spitalului de Boli Cronice Sebiș și fost membru supleant reprezentant al Consiliului Local Sebiș',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada 25 noiembrie 2020 - 8 martie 2024, ar fi exercitat simultan calitatea de membru supleant în consiliul de administrație al spitalului și funcția de vicepreședinte al Consiliului Executiv Județean în cadrul unui partid politic.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Arad',
      basis: 'office',
      note: 'Funcția publică relevantă era legată de Consiliul Local Sebiș și Spitalul de Boli Cronice Sebiș, județul Arad.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, CHIMIGERIU_BARBURA_PNL_SOURCE],
  },
  {
    name: 'Botea Viorel',
    party: 'PMP',
    position:
      'Fost membru titular în Consiliul de administrație al Spitalului Clinic Județean de Urgență Brăila, reprezentant al Consiliului Județean Brăila',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada 28 aprilie 2021 - 19 octombrie 2023, ar fi exercitat simultan calitatea de membru titular al consiliului de administrație al spitalului și funcții în organele de conducere ale unui partid politic.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Brăila',
      basis: 'office',
      note: 'Funcția publică relevantă era legată de Consiliul Județean Brăila și Spitalul Clinic Județean de Urgență Brăila.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, BOTEA_VIOREL_PMP_SOURCE],
  },
  {
    name: 'Dondaș Adriana',
    party: 'PSD',
    position: 'Fost membru în Consiliul de administrație al Spitalului Municipal de Urgență Pașcani',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada 23 septembrie 2023 - 30 ianuarie 2025, ar fi exercitat simultan funcția de membru în consiliul de administrație al spitalului și calitatea de membru în organele de conducere ale unui partid politic.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul de administrație al Spitalului Municipal de Urgență Pașcani, județul Iași.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, DONDAS_ADRIANA_PSD_SOURCE],
  },
  {
    name: 'Andreescu Costel',
    party: 'USR',
    position: 'Fost membru supleant în Consiliul de administrație al Spitalului Municipal Ploiești',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada 22 decembrie 2022 - 28 noiembrie 2024, ar fi exercitat simultan calitatea de membru supleant în consiliul de administrație al Spitalului Municipal Ploiești și funcția de vicepreședinte al unui partid politic.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul de administrație al Spitalului Municipal Ploiești, județul Prahova.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, ANDREESCU_COSTEL_USR_SOURCE],
  },
  {
    name: 'Beciu Elisabeta',
    party: 'PSD',
    position:
      'Fost membru supleant în Consiliul de administrație al Spitalului Județean de Urgență Slobozia și consilier județean Ialomița',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada 17 noiembrie 2020 - 19 noiembrie 2024, ar fi exercitat simultan calitatea de membru supleant în consiliul de administrație al spitalului și diverse funcții în organele de conducere, administrare și control ale unui partid politic.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Ialomița',
      basis: 'office',
      note: 'Funcția publică relevantă era legată de Consiliul Județean Ialomița și Spitalul Județean de Urgență Slobozia.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, BECIU_ELISABETA_PSD_SOURCE],
  },
  {
    name: 'Cijevschi Ion',
    party: 'Independent',
    position: 'Fost șef secție clinică oftalmologie în cadrul Spitalului Clinic Căi Ferate Iași',
    position_type: 'other',
    crime: 'Avere nejustificată',
    status: 'investigated',
    details:
      'ANI a sesizat în februarie 2026 Comisia de cercetare a averilor de pe lângă Curtea de Apel Iași, după constatarea unei diferențe nejustificate de 2.515.331 lei între averea dobândită și veniturile realizate împreună cu familia în perioada exercitării funcției publice.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Spitalului Clinic Căi Ferate Iași.',
    },
    sources: [ANI_FEB_2026_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Trandafir Alexandru Viorel',
    party: 'Independent',
    position: 'Secretar general al comunei Balaciu, județul Ialomița',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2026 că, la 31 martie 2021, în calitate de secretar general al comunei, ar fi avizat pentru legalitate dispoziția primarului prin care a fost nominalizat membru al unei echipe de implementare a unui proiect finanțat din fonduri europene, realizând ulterior venituri aferente acelei activități.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Ialomița',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de secretar general al comunei Balaciu, județul Ialomița.',
    },
    sources: [ANI_FEB_2026_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Pleșa Ioan Dănuț',
    party: 'PNL',
    position: 'Consilier local în Consiliul Local al comunei Mărgău, județul Cluj',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2026 că, în perioada exercitării mandatului de consilier local, UAT Mărgău ar fi încheiat contracte comerciale de prestări servicii și furnizare de produse cu societatea comercială în care persoana evaluată deține calitatea de asociat unic și administrator.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Cluj',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Mărgău, județul Cluj.',
    },
    sources: [ANI_FEB_2026_PUBLIC_OFFICIALS_SOURCE, PLESA_IOAN_DANUT_PNL_SOURCE],
  },
  {
    name: 'Stan Emil-Alecu',
    party: 'PSD',
    position: 'Fost membru supleant în Consiliul de administrație al Spitalului Orășenesc Dr. Valer Russu Luduș',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2026 că, în perioada 10 noiembrie 2022 - 31 ianuarie 2023, ar fi exercitat simultan calitatea de membru supleant în consiliul de administrație al spitalului și o funcție de conducere într-o organizație locală a unui partid politic.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul de administrație al Spitalului Orășenesc Dr. Valer Russu Luduș, județul Mureș.',
    },
    sources: [ANI_FEB_2026_PUBLIC_OFFICIALS_SOURCE, STAN_EMIL_ALECU_PSD_SOURCE],
  },
  {
    name: 'Hărăbor Valentina',
    party: 'Independent',
    position: 'Șef serviciu în cadrul Consiliului Județean Vrancea',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2026 că, în perioada 1 februarie 2020 - 1 martie 2023, ar fi exercitat simultan funcția publică și o altă funcție în sistemul privat, atribuțiile din sectorul privat fiind în legătură directă sau indirectă cu atribuțiile exercitate ca funcționar public.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Vrancea',
      basis: 'office',
      note: 'Funcția publică relevantă era în cadrul Consiliului Județean Vrancea.',
    },
    sources: [ANI_FEB_2026_PUBLIC_OFFICIALS_SOURCE],
  },
  {
    name: 'Bratu Nicolae',
    party: 'PSD',
    position: 'Viceprimar al comunei Ștefești, județul Prahova',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că se află în stare de incompatibilitate deoarece, simultan cu exercitarea funcției de viceprimar, a desfășurat în mandatul 2020-2024 și în mandatul actual activități remunerate în mediul privat.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Ștefești, județul Prahova.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, BRATU_NICOLAE_PSD_SOURCE],
  },
  {
    name: 'Vasiliu Vlad',
    party: 'PNL',
    position: 'Membru în Consiliul de administrație al Spitalului Municipal Dorohoi',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada deținerii funcției de membru în Consiliul de administrație al Spitalului Municipal Dorohoi, ar fi exercitat și funcția de membru în organele de conducere ale unui partid politic.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Botoșani',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul de administrație al Spitalului Municipal Dorohoi, județul Botoșani.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, VASILIU_VLAD_PNL_SOURCE],
  },
  {
    name: 'Năstase Ionuț-Dragoș',
    party: 'PSD',
    position: 'Fost membru în Consiliul de administrație al Spitalului Municipal Caracal',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada 27 decembrie 2022 - 28 iunie 2023, ar fi exercitat simultan funcția de membru în Consiliul de administrație al Spitalului Municipal Caracal și funcția de membru în organele de conducere ale unui partid politic.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Olt',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul de administrație al Spitalului Municipal Caracal, județul Olt.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, NASTASE_IONUT_DRAGOS_PSD_SOURCE],
  },
  {
    name: 'Toma Broasca Virginia Geanina',
    party: 'PMP',
    position: 'Fost membru supleant în Consiliul de administrație al Spitalului de Pneumoftiziologie Brăila',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada 21 decembrie 2022 - 26 septembrie 2024, ar fi exercitat simultan calitatea de membru supleant în consiliul de administrație al spitalului și funcțiile de președinte, respectiv vicepreședinte în organisme ale unui partid politic.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Brăila',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul de administrație al Spitalului de Pneumoftiziologie Brăila.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, TOMA_BROASCA_PMP_SOURCE],
  },
  {
    name: 'Câmpeanu Adriana Teodora',
    party: 'PNL',
    position: 'Fost membru în Consiliul de administrație al Spitalului Clinic de Boli Infecțioase Constanța',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada 19 iunie 2021 - 5 martie 2025, ar fi exercitat simultan calitatea de membru supleant în Consiliul de administrație al Spitalului Clinic de Boli Infecțioase Constanța și diverse funcții în organele de conducere, administrare și control ale unui partid politic.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul de administrație al Spitalului Clinic de Boli Infecțioase Constanța.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, CAMPEANU_ADRIANA_PNL_SOURCE],
  },
  {
    name: 'Gălățanu Ionel',
    party: 'PNL',
    position: 'Funcționar public în cadrul AJPIS Bacău și consilier local în Consiliul Local Odobești',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că a exercitat simultan funcția publică de referent în cadrul AJPIS Bacău, mandatul de consilier local al comunei Odobești și o funcție în organele de conducere ale unui partid politic, în perioade care s-au suprapus între 2022 și 2024.',
    verified_at: '2026-05-30',
    geography: {
      county: 'Bacău',
      basis: 'office',
      note: 'Funcțiile publice relevante erau la AJPIS Bacău și în Consiliul Local al comunei Odobești, județul Bacău.',
    },
    sources: [ANI_DEC_2025_BIG_DATA_SOURCE, GALATANU_IONEL_PNL_SOURCE],
  },
];

const ANI_APR_2023_LOCAL_OFFICIALS_RECORDS = [
  {
    name: 'Proteasa Alexandru Constantin',
    party: 'PNL',
    position:
      'Vicepreședinte al Consiliului Județean Timiș și fost consilier local al comunei Moșnița Nouă',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2023 că, în perioada mandatului de consilier local al comunei Moșnița Nouă, a participat la deliberarea și adoptarea unei hotărâri privind PUZ pentru terenul unei societăți în care avea calitatea de asociat unic și administrator.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în comuna Moșnița Nouă și Consiliul Județean Timiș.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, PROTEASA_PARTY_SOURCE],
  },
  {
    name: 'Dosaru Elena Iuliana',
    party: 'ALDE',
    position: 'Consilier județean în Consiliul Județean Prahova',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2023 că, în perioada 19 noiembrie 2020 - 16 martie 2022, ar fi exercitat simultan mandatul de consilier județean și funcția de director general al Serviciului Județean de Pază Prahova.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Județean Prahova.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, DOSARU_ALDE_PARTY_SOURCE],
  },
  {
    name: 'Vlasici Marian',
    party: 'PNL',
    position: 'Primar al comunei Lupac, județul Caraș-Severin',
    position_type: 'local_official',
    crime:
      'Conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane; fals în declarații',
    status: 'investigated',
    details:
      'ANI a constatat conflict administrativ și a sesizat Parchetul pentru indicii privind folosirea funcției pentru favorizarea unei rude și fals în declarații, în legătură cu acte privind o societate comercială și contracte cu primăria.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era în Primăria Comunei Lupac, județul Caraș-Severin.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, CARAS_SEVERIN_ANI_PARTY_SOURCE],
  },
  {
    name: 'Vintilă Dumitru',
    party: 'PSD',
    position: 'Primar al comunei Drăgușeni, județul Galați',
    position_type: 'local_official',
    crime:
      'Incompatibilitate; conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat incompatibilitate și conflict administrativ și a sesizat Parchetul, arătând că în mandatul de primar ar fi participat la acte administrative prin care au fost achiziționate servicii de la o întreprindere individuală a fiului său.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Galați',
      basis: 'office',
      note: 'Funcția publică relevantă era în Primăria Comunei Drăgușeni, județul Galați.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, DRAGUSENI_VINTILA_PARTY_SOURCE],
  },
  {
    name: 'Boambeș Daniel',
    party: 'PSD',
    position: 'Primar al comunei Constantin Daicoviciu, județul Caraș-Severin',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat conflict administrativ și a sesizat Parchetul, susținând că în exercitarea mandatului de primar ar fi semnat acte care au produs un folos patrimonial pentru o rudă de gradul I.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era în Primăria Comunei Constantin Daicoviciu, județul Caraș-Severin.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, CARAS_SEVERIN_ANI_PARTY_SOURCE],
  },
  {
    name: 'Stoica Gabriel',
    party: 'PNL',
    position: 'Primar al comunei Sălcioara, județul Ialomița',
    position_type: 'local_official',
    crime: 'Folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat Parchetul de pe lângă Judecătoria Slobozia, susținând că, în mandatul 2016-2020, ar fi semnat acte administrative prin care o rudă apropiată a fost angajată în aparatul de specialitate al primarului.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Ialomița',
      basis: 'office',
      note: 'Funcția publică relevantă era în Primăria Comunei Sălcioara, județul Ialomița.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, SALCIOARA_STOICA_PARTY_SOURCE],
  },
  {
    name: 'Pearcu Dumitru',
    party: 'PSD',
    position: 'Fost primar al comunei Tomșani, județul Vâlcea',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2023 că, în mandatul de primar, a semnat acte administrative legate de un proiect finanțat din fonduri publice în care avea un interes personal.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Vâlcea',
      basis: 'office',
      note: 'Funcția publică relevantă era în Primăria Comunei Tomșani, județul Vâlcea.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, TOMSANI_PEARCU_PARTY_SOURCE],
  },
  {
    name: 'Rusu Emilian',
    party: 'PNL',
    position: 'Fost primar al comunei Dănești, județul Gorj',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat conflict administrativ deoarece, în mandatul de primar, ar fi semnat un contract de concesiune cu o asociație de crescători de animale în cadrul căreia avea un interes personal.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Gorj',
      basis: 'office',
      note: 'Funcția publică relevantă era în Primăria Comunei Dănești, județul Gorj.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, DANESTI_RUSU_PARTY_SOURCE],
  },
  {
    name: 'Lulciuc Adrian Răzvan',
    party: 'PNL',
    position: 'Consilier local în Consiliul Local al municipiului Timișoara',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2023 că, în perioada 14 decembrie 2018 - 10 decembrie 2020, ar fi exercitat simultan mandatul de consilier local și funcția de director general adjunct la Compania Națională Poșta Română.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Timișoara, județul Timiș.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, TIMISOARA_LULCIUC_PARTY_SOURCE],
  },
  {
    name: 'Stan Linica',
    party: 'PNL',
    position: 'Fost consilier local al municipiului Mangalia, județul Constanța',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat conflict administrativ deoarece ar fi participat la adoptarea unei hotărâri privind prelungirea unui contract de închiriere pentru un spațiu comercial deținut de o societate în care soțul său avea calitatea de asociat unic și administrator.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Mangalia, județul Constanța.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, MANGALIA_STAN_PARTY_SOURCE],
  },
  {
    name: 'Dinu Ioana Raluca',
    party: 'PSD',
    position: 'Consilier local în Consiliul Local al municipiului Bacău',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2023 că, în perioada 24 noiembrie 2020 - 13 mai 2022, ar fi exercitat simultan mandatul de consilier local și funcția de manager interimar al Spitalului Județean de Urgență Bacău.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Bacău',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Bacău și Spitalul Județean de Urgență Bacău.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, BACAU_DINU_PARTY_SOURCE],
  },
  {
    name: 'Predeșel Nicolae',
    party: 'PNL',
    position: 'Consilier local al comunei Mogoșoaia, județul Ilfov',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat conflict administrativ deoarece, în mandatul 2016-2020, ar fi participat la deliberarea și adoptarea unei hotărâri a consiliului local care a produs un folos patrimonial pentru o societate comercială cu legături de interes personal.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Ilfov',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Mogoșoaia, județul Ilfov.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, MOGOSOAIA_PREDESEL_PARTY_SOURCE],
  },
  {
    name: 'Feier Ioan',
    party: 'PMP',
    position: 'Consilier local al comunei Hodac, județul Mureș',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat conflict administrativ deoarece, în mandatul de consilier local, ar fi participat la deliberarea și adoptarea unei hotărâri privind concesionarea unei suprafețe de pășune către o asociație în care avea un interes personal.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Hodac, județul Mureș.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, HODAC_FEIER_PARTY_SOURCE],
  },
  {
    name: 'Trișca Ionel',
    party: 'PSD',
    position: 'Consilier local al comunei Grindu, județul Tulcea',
    position_type: 'local_official',
    crime: 'Folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat Parchetul de pe lângă Judecătoria Tulcea, susținând că ar fi participat la adoptarea unei hotărâri prin care soția sa a fost desemnată membru al consiliului de administrație al școlii gimnaziale din comună.',
    verified_at: '2026-05-27',
    geography: {
      county: 'Tulcea',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Grindu, județul Tulcea.',
    },
    sources: [ANI_APR_2023_LOCAL_OFFICIALS_SOURCE, GRINDU_TRISCA_PARTY_SOURCE],
  },
];

const ANI_DEC_2022_TEN_PUBLIC_OFFICIALS_RECORDS = [
  {
    name: 'Duma Ovidiu Marius',
    party: 'PNL',
    position: 'Primar al orașului Ardud, județul Satu Mare',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2022 că, în mandatele de primar 2016-2020 și 2020-2024, ar fi emis ori semnat acte administrative care au produs folos patrimonial pentru fiica sa și pentru o asociație în care deținea calitatea de membru.',
    verified_at: '2026-06-02',
    geography: {
      county: 'Satu Mare',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al orașului Ardud, județul Satu Mare.',
    },
    sources: [
      ANI_DEC_2022_TEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_satu-mare/primarie/ardud/',
      },
    ],
  },
  {
    name: 'Popa Sorin Vasile',
    party: 'PSD',
    position: 'Fost primar al comunei Micăsasa, județul Sibiu',
    position_type: 'mayor',
    crime: 'Folosirea funcției pentru favorizarea unor persoane; sesizare parchet',
    status: 'investigated',
    details:
      'ANI a sesizat în decembrie 2022 Parchetul de pe lângă ÎCCJ, reținând indicii că, în exercitarea atribuțiilor de primar, ar fi semnat contracte de închiriere a unor pajiști din domeniul public al comunei cu rude și afini.',
    verified_at: '2026-06-02',
    geography: {
      county: 'Sibiu',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al comunei Micăsasa, județul Sibiu.',
    },
    sources: [
      ANI_DEC_2022_TEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_sibiu/primarie/micasasa/',
      },
    ],
  },
  {
    name: 'Pachițac Dumitru Cătălin',
    party: 'PMP',
    position: 'Viceprimar al comunei Dumești, județul Iași',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat conflict de interese administrativ și a sesizat Parchetul în decembrie 2022, arătând că, în mandatul 2020-2024, ar fi încheiat contracte de închiriere a unor pajiști comunale care au produs foloase materiale pentru soția și mama sa.',
    verified_at: '2026-06-02',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Dumești, județul Iași.',
    },
    sources: [
      ANI_DEC_2022_TEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_iasi/consiliul-local/dumesti/',
      },
    ],
  },
  {
    name: 'Olaru Valentin George',
    party: 'PSD',
    position: 'Viceprimar al comunei Bara, județul Timiș',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2022 că, începând cu 20 noiembrie 2020, ar fi exercitat simultan funcția de viceprimar și calitatea de comerciant persoană fizică în propria întreprindere individuală.',
    verified_at: '2026-06-02',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Bara, județul Timiș.',
    },
    sources: [
      ANI_DEC_2022_TEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_timis/consiliul-local/bara/',
      },
    ],
  },
  {
    name: 'Pentea Florian',
    party: 'Pro Romania',
    position: 'Fost viceprimar al comunei Hidișelu de Sus, județul Bihor',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2022 că, în mandatul 2016-2020, ar fi exercitat simultan funcția de viceprimar și calitatea de comerciant persoană fizică.',
    verified_at: '2026-06-02',
    geography: {
      county: 'Bihor',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Hidișelu de Sus, județul Bihor.',
    },
    sources: [
      ANI_DEC_2022_TEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_bihor/consiliul-local/hidiselu-de-sus/',
      },
    ],
  },
  {
    name: 'Iliescu Pintea Aurelian',
    party: 'USR',
    position: 'Consilier local în Consiliul Local al municipiului Satu Mare',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2022 că, în mandatul de consilier local, societatea comercială în care deținea calitatea de asociat ar fi încheiat contracte de prestări servicii cu entități aflate sub autoritatea Consiliului Local Satu Mare.',
    verified_at: '2026-06-02',
    geography: {
      county: 'Satu Mare',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Satu Mare.',
    },
    sources: [
      ANI_DEC_2022_TEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_satu-mare/consiliul-local/satu-mare/',
      },
    ],
  },
  {
    name: 'Nicola-Olteanu Ionuț-Vasile',
    party: 'PSD',
    position: 'Consilier local în Consiliul Local al comunei Lipovu, județul Dolj',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2022 că, în calitate de consilier local, ar fi luat parte la adoptarea unei hotărâri privind înființarea unor funcții de execuție, în contextul în care soția sa a ocupat ulterior unul dintre posturile scoase la concurs.',
    verified_at: '2026-06-02',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Lipovu, județul Dolj.',
    },
    sources: [
      ANI_DEC_2022_TEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_dolj/consiliul-local/lipovu/',
      },
    ],
  },
  {
    name: 'Badea Dumitru',
    party: 'PNL',
    position: 'Consilier local în Consiliul Local al comunei Troianul, județul Teleorman',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2022 că, în calitate de consilier local, ar fi participat la adoptarea unor hotărâri privind bugetul local, în care erau incluse și salariile pentru asistenți personali, context în care soția sa deținea o funcție contractuală în primărie.',
    verified_at: '2026-06-02',
    geography: {
      county: 'Teleorman',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Troianul, județul Teleorman.',
    },
    sources: [
      ANI_DEC_2022_TEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_teleorman/consiliul-local/troianul/',
      },
    ],
  },
  {
    name: 'Balașei Iulian',
    party: 'Pro Romania',
    position: 'Consilier local al comunei Frumușica, județul Botoșani',
    position_type: 'local_official',
    crime: 'Folosirea funcției pentru favorizarea unor persoane; incompatibilitate',
    status: 'investigated',
    details:
      'ANI a sesizat în decembrie 2022 Parchetul de pe lângă ÎCCJ, susținând că, în mandatul de consilier local 2016-2020, ar fi participat la adoptarea unei hotărâri legate de un proiect POCU din care tatăl său a beneficiat ulterior de o subvenție; ANI consemnase anterior și incompatibilitatea sa.',
    verified_at: '2026-06-02',
    geography: {
      county: 'Botoșani',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Frumușica, județul Botoșani.',
    },
    sources: [
      ANI_DEC_2022_TEN_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_botosani/consiliul-local/frumusica/',
      },
    ],
  },
  {
    name: 'Dohi Francisk',
    party: 'PCM-MPP',
    position: 'Viceprimar al comunei Ciumești, județul Satu Mare',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2026 că, în mandatul de viceprimar 2020-2024, ar fi înregistrat venituri din activități independente prin intermediul propriei întreprinderi familiale.',
    verified_at: '2026-06-02',
    geography: {
      county: 'Satu Mare',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Ciumești, județul Satu Mare.',
    },
    sources: [
      ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Primăria Ciumești',
        kind: 'official',
        url: 'https://primariaciumesti.ro/consiliul-local/consilieri-locali/',
      },
    ],
  },
  {
    name: 'Herescu Emil',
    party: 'Pro Romania',
    position: 'Fost viceprimar al comunei Buciumeni, județul Galați',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2026 că, în timpul exercitării funcției de viceprimar, ar fi desfășurat în perioada 23 martie - 8 decembrie 2023 activități remunerate prin intermediul întreprinderii familiale în care figura ca reprezentant.',
    verified_at: '2026-06-02',
    geography: {
      county: 'Galați',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de viceprimar al comunei Buciumeni, județul Galați.',
    },
    sources: [
      ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_galati/consiliul-local/buciumeni/',
      },
    ],
  },
];

const MEDIAS_GOSCOM_GEOGRAPHY = {
  county: 'Sibiu',
  basis: 'office',
  note: 'Funcția publică relevantă era în cadrul Consiliului Local al municipiului Mediaș, județul Sibiu.',
};

const MEDIAS_GOSCOM_DNA_SOURCE = {
  label: 'DNA',
  kind: 'official',
  url: 'https://www.dna.ro/comunicat.xhtml?id=5265',
};

const MEDIAS_GOSCOM_PARTY_SOURCE = {
  label: 'Monitorul de Mediaș',
  kind: 'press',
  url: 'https://www.monitoruldemedias.ro/2016/02/analiza-consiliul-local-medias-2012.html',
};

const MEDIAS_GOSCOM_ACQUITTAL_DETAILS =
  'DNA i-a trimis în judecată în septembrie 2014 în dosarul Gospodăria Comunală Mediaș. Prin actualizarea oficială din 4 iunie 2018, DNA a consemnat că, prin decizia penală nr. 419 din 18 mai 2018, Curtea de Apel Alba a dispus achitarea definitivă, întrucât faptele nu sunt prevăzute de legea penală.';

const MEDIAS_GOSCOM_STANDARD_CRIME =
  'Abuz în serviciu cu consecințe deosebit de grave';

const MEDIAS_GOSCOM_TWO_COUNTS_CRIME =
  'Două infracțiuni concurente de abuz în serviciu, dintre care una cu consecințe deosebit de grave';

const MEDIAS_GOSCOM_COUNCIL_RECORDS = [
  {
    name: 'Balazs Bela Atila',
    party: 'UDMR',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Ciulea Ioan Vasile',
    party: 'PP-DD',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Grozav Eugen',
    party: 'PSD',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Knall Helmuth Iulius',
    party: 'PDL',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Lăzăroiu Ioan',
    party: 'PP-DD',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Manta Anca Maria',
    party: 'PSD',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Moraru Eugen',
    party: 'PSD',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Neag Florin',
    party: 'PDL',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Nicorici Constantin Gheorghe',
    party: 'PDL',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Petrescu George Stelian',
    party: 'PNL',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Popa Ioan',
    party: 'PDL',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Sas Ilarie',
    party: 'PNL',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Taropa Floarea',
    party: 'PDL',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Toma Cosmin Lucian',
    party: 'PNL',
    crime: MEDIAS_GOSCOM_TWO_COUNTS_CRIME,
  },
  {
    name: 'Ciolpan Vasile',
    party: 'PDL',
    crime: MEDIAS_GOSCOM_STANDARD_CRIME,
  },
  {
    name: 'Nagy Pavel',
    party: 'PNL',
    crime: MEDIAS_GOSCOM_STANDARD_CRIME,
  },
  {
    name: 'Pătrui Eleonora',
    party: 'PDL',
    crime: MEDIAS_GOSCOM_STANDARD_CRIME,
  },
  {
    name: 'Lața Ilie',
    party: 'PSD',
    crime:
      'Două infracțiuni concurente de abuz în serviciu, dintre care una cu consecințe deosebit de grave; conflict de interese',
  },
  {
    name: 'Plopeanu Teodor',
    party: 'PSD',
    crime:
      'Două infracțiuni concurente de abuz în serviciu, dintre care una cu consecințe deosebit de grave; conflict de interese',
  },
  {
    name: 'Marian Victor Cristian',
    party: 'PDL',
    crime:
      'Abuz în serviciu dacă funcționarul a obținut pentru sine sau pentru altul un folos necuvenit',
  },
  {
    name: 'Orosz Csaba',
    party: 'UDMR',
    crime:
      'Abuz în serviciu dacă funcționarul a obținut pentru sine sau pentru altul un folos necuvenit',
  },
].map((record) => ({
  ...record,
  position: 'Consilier local în Consiliul Local al municipiului Mediaș',
  position_type: 'local_official',
  geography: MEDIAS_GOSCOM_GEOGRAPHY,
  sentence: 'Achitat definitiv (2018)',
  sentence_years: null,
  conviction_year: null,
  status: 'acquitted',
  details: MEDIAS_GOSCOM_ACQUITTAL_DETAILS,
  verified_at: '2026-05-20',
  sources: [MEDIAS_GOSCOM_DNA_SOURCE, MEDIAS_GOSCOM_PARTY_SOURCE],
}));

const PASCANI_AGROCOMPLEX_GEOGRAPHY = {
  county: 'Iași',
  basis: 'office',
  note: 'Funcția publică relevantă ori cauza viza municipiul Pașcani, județul Iași.',
};

const PASCANI_AGROCOMPLEX_SOURCES = [
  {
    label: 'DNA',
    kind: 'official',
    url: 'https://www.dna.ro/comunicat.xhtml?id=8988',
  },
  {
    label: 'DNA',
    kind: 'official',
    url: 'https://www.dna.ro/comunicat.xhtml?id=6472',
  },
];

const PASCANI_COUNCIL_PARTY_SOURCE = {
  label: 'RegieLive',
  kind: 'press',
  url: 'https://regielive.net/proiecte/finante/fundamentarea-cheltuielilor-publice-la-primaria-pascani-108571.html',
};

const PASCANI_RUSU_PARTY_SOURCE = {
  label: '9am / NewsIn',
  kind: 'press',
  url: 'https://www.9am.ro/stiri-revista-presei/Politica/114106/Excluderi-la-PD-L-Pascani-in-urma-rezultatului-slab-de-la-alegerile-parlamentare.html',
};

const PASCANI_SIMION_VALIDATION_SOURCE = {
  label: 'Primăria Pașcani',
  kind: 'official',
  url: 'https://www.primariapascani.ro/dm_pascani/portal.nsf/308AC2F099EFC75DC22586010028BCAD/%24FILE/HCL-62-68.pdf',
};

const PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS =
  'DNA a consemnat că, prin decizia penală nr. 119 din 4 iulie 2018, ÎCCJ a dispus achitarea definitivă în dosarul Agrocomplex Lunca Pașcani, întrucât faptele reținute nu sunt prevăzute de legea penală.';

const PASCANI_AGROCOMPLEX_RECORDS = [
  {
    name: 'Zuzan Mircea',
    party: 'Independent',
    position: 'Secretar al Consiliului Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Participație improprie la abuz în serviciu; instigare la fals material',
    sentence: '3 ani închisoare cu suspendare (proces închis prin prescripție)',
    sentence_years: 3,
    conviction_year: 2018,
    status: 'prescribed',
    execution_type: 'Cu suspendare',
    details:
      'ÎCCJ l-a condamnat definitiv în 2018 în dosarul Agrocomplex Lunca Pașcani, iar DNA a actualizat ulterior cauza cu decizia Curții de Apel Iași din 19 septembrie 2023, prin care procesul penal a încetat ca urmare a prescripției răspunderii penale.',
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Negrescu Nicoleta',
    party: 'Independent',
    position:
      'Consilier în Serviciul Administrației Publice din aparatul de specialitate al primarului municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Instigare la fals material în înscrisuri oficiale',
    sentence: '1 an închisoare cu suspendare',
    sentence_years: 1,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Prin decizia penală nr. 119 din 4 iulie 2018, ÎCCJ a condamnat-o definitiv la 1 an de închisoare cu suspendare în dosarul Agrocomplex Lunca Pașcani.',
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Vîngă Costinel',
    party: 'Independent',
    position: 'Funcționar în Serviciul Finanțe Publice Locale Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Mărturie mincinoasă',
    status: 'closed',
    details:
      'DNA a consemnat că ÎCCJ a încetat procesul penal față de acesta în dosarul Agrocomplex Lunca Pașcani ca urmare a decesului inculpatului.',
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Rățoi Neculai',
    party: 'PSD',
    position: 'Primar al municipiului Pașcani; ulterior deputat',
    position_type: 'mayor',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Constantinescu Florin',
    party: 'PSD',
    position: 'Consilier local în Pașcani; ulterior senator',
    position_type: 'senator',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Agache Nina',
    party: 'PNL',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_SIMION_VALIDATION_SOURCE],
  },
  {
    name: 'Bucovanu Irina',
    party: 'PRM',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Dumea Eronim-Eduard',
    party: 'PSD',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Huțanu Georgeta',
    party: 'PD',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_SIMION_VALIDATION_SOURCE],
  },
  {
    name: 'Simion Constantin',
    party: 'PSD',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_SIMION_VALIDATION_SOURCE],
  },
  {
    name: 'Sofian Dorina',
    party: 'PSD',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_SIMION_VALIDATION_SOURCE],
  },
  {
    name: 'Toma Viorel',
    party: 'PSD',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Bodoașcă Mihai',
    party: 'Independent',
    position: 'Șef Serviciu Finanțe Publice Locale Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Damian Dumitru',
    party: 'Independent',
    position: 'Consilier în Serviciul Finanțe Publice Locale Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Postolachi Elena-Silvia',
    party: 'Independent',
    position: 'Inginer în Primăria municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Prisacaru Vasile',
    party: 'Independent',
    position: 'Inginer în Primăria municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Apostol Nicolae',
    party: 'PSD',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_SIMION_VALIDATION_SOURCE],
  },
  {
    name: 'Centea Liliana',
    party: 'PSD',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Cojocaru Constantin',
    party: 'PSD',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_SIMION_VALIDATION_SOURCE],
  },
  {
    name: 'Ioniță Ioan',
    party: 'PD',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Pleșca Vasile',
    party: 'PSD',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Răuț Dănuț',
    party: 'PRM',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Rusu Leonard',
    party: 'PD',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_RUSU_PARTY_SOURCE],
  },
  {
    name: 'Sîrbu Daniel',
    party: 'PSD',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_COUNCIL_PARTY_SOURCE],
  },
  {
    name: 'Baba Iulia',
    party: 'Independent',
    position: 'Contabil la SC Agrocomplex Lunca Pașcani SA',
    position_type: 'other',
    geography: {
      county: 'Iași',
      basis: 'case_location',
      note: 'Cauza viza facilități fiscale acordate pentru SC Agrocomplex Lunca Pașcani SA.',
    },
    crime: 'Complicitate la abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Pantazi Dumitru',
    party: 'PSD',
    position: 'Viceprimar al municipiului Pașcani; acționar majoritar la SC Agrocomplex Lunca Pașcani SA',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Instigare la abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Păvălucă Ioan',
    party: 'Independent',
    position: 'Director general la SC Agrocomplex Lunca Pașcani SA',
    position_type: 'other',
    geography: {
      county: 'Iași',
      basis: 'case_location',
      note: 'Cauza viza facilități fiscale acordate pentru SC Agrocomplex Lunca Pașcani SA.',
    },
    crime: 'Complicitate la abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Casandra Elena',
    party: 'Independent',
    position: 'Director economic la SC Agrocomplex Lunca Pașcani SA',
    position_type: 'other',
    geography: {
      county: 'Iași',
      basis: 'case_location',
      note: 'Cauza viza facilități fiscale acordate pentru SC Agrocomplex Lunca Pașcani SA.',
    },
    crime: 'Complicitate la abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Moraru Zîna',
    party: 'Independent',
    position: 'Director comercial la SC Agrocomplex Lunca Pașcani SA',
    position_type: 'other',
    geography: {
      county: 'Iași',
      basis: 'case_location',
      note: 'Cauza viza facilități fiscale acordate pentru SC Agrocomplex Lunca Pașcani SA.',
    },
    crime: 'Complicitate la abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Lungu Cristina',
    party: 'Independent',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Complicitate la abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: PASCANI_AGROCOMPLEX_SOURCES,
  },
  {
    name: 'Tabarcea Ionela-Laura',
    party: 'PRM',
    position: 'Consilier local în Consiliul Local al municipiului Pașcani',
    position_type: 'local_official',
    geography: PASCANI_AGROCOMPLEX_GEOGRAPHY,
    crime: 'Complicitate la abuz în serviciu cu consecințe deosebit de grave',
    status: 'acquitted',
    details: PASCANI_AGROCOMPLEX_ACQUITTAL_DETAILS,
    verified_at: '2026-05-12',
    sources: [...PASCANI_AGROCOMPLEX_SOURCES, PASCANI_COUNCIL_PARTY_SOURCE],
  },
];

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
      'În septembrie 2025 a fost citată la Parchetul General ca suspect într-un dosar care vizează 11 infracțiuni. În octombrie 2025, Parchetul General a anunțat punerea în mișcare a urmăririi penale și demersurile pentru ridicarea imunității sale de europarlamentar. Raportul JURI al Parlamentului European din 23 aprilie 2026 consemnează cererea de ridicare a imunității și audierea din 24 martie 2026.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'Parlamentul European',
        kind: 'official',
        url: 'https://www.europarl.europa.eu/doceo/document/A-10-2026-0117_EN.html',
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
  'Tarbă Mihai Gheorghe': {
    party: 'PSD',
    details: ARGES_CONSULTANCY_ACQUITTAL_DETAILS_2015,
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-dragoslavele-arges.html',
      },
    ],
  },
  'Ciobanu Marcel': {
    party: 'PSD',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-uda-arges.html',
      },
    ],
  },
  'Șerban Niculae': {
    party: 'PSD',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-maracineni-arges.html',
      },
    ],
  },
  'Smădu Nicolae': {
    party: 'PSD',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-domnesti-arges.html',
      },
    ],
  },
  'Diaconu Nicolae': {
    party: 'PSD',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-curtea_de_arges-arges.html',
      },
    ],
  },
  'Dumitrescu Mihail': {
    party: 'PSD',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Biroul Electoral Central',
        kind: 'official',
        url: 'https://www.scribd.com/document/710717305/Alegeri-locale-2008',
      },
    ],
  },
  'Popa Iulian': {
    party: 'PDL',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Observatorul Prahovean',
        kind: 'press',
        url: 'https://www.observatorulph.ro/alegeri-locale-2012/14976-alegeri-locale-2012-prahova-lista-candidailor-confirmai-de-partide',
      },
    ],
  },
  'Manole Vasile': {
    party: 'PNȚCD',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Biroul Electoral Central',
        kind: 'official',
        url: 'https://www.scribd.com/document/710717305/Alegeri-locale-2008',
      },
    ],
  },
  'Niculae Florin': {
    party: 'PDL',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Protecția Animalelor',
        kind: 'profile',
        url: 'https://www.protectiaanimalelor.org/primari/scrie-primarului-comunei-vidra-jud-ilfov/',
      },
    ],
  },
  'Georgescu Liviu': {
    party: 'PSD',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'România Liberă',
        kind: 'press',
        url: 'https://romanialibera.ro/special/rl-investigatii/primarul-care-a-furat-10-400-de-lei-de-la-copii--condamnat-la-doi-ani-si-opt-luni-inchisoare-485636/',
      },
    ],
  },
  'Nicolae Ilie': {
    party: 'PSD',
    sentence: '4 ani închisoare cu executare',
    sentence_years: 4,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'DNA Ploiești l-a trimis în judecată în 2015, iar Curtea de Apel Ploiești l-a condamnat definitiv la 17 octombrie 2018 la 4 ani închisoare cu executare pentru abuz în serviciu și fraudă în obținerea de fonduri europene.',
    verified_at: '2026-05-25',
    sources: [
      {
        label: 'AGERPRES',
        kind: 'press',
        url: 'https://agerpres.ro/justitie/2018/10/18/buzau-fost-primar-al-comunei-cochirleanca-condamnat-la-patru-ani-de-inchisoare-cu-executare-pentru-f--195675',
      },
      {
        label: 'Știri pe surse',
        kind: 'press',
        url: 'https://www.stiripesurse.ro/inchisoare-cu-executare-pentru-un-politician-psd-a-furat-din-fondurile-europene-alaturi-de-so-ia-s_1297485.html',
      },
    ],
  },
  'Haneș Gheorghe': {
    party: 'PDL',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-gogosu-mehedinti.html',
      },
    ],
  },
  'Baciu Vasile': {
    party: 'PDL',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-horia-neamt.html',
      },
    ],
  },
  'Pârvulescu Constantin': {
    party: 'PSD',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Edupedu',
        kind: 'press',
        url: 'https://www.edupedu.ro/candidatura-de-la-titularizare-a-unui-profesor-de-educatie-fizica-invalidata-pentru-ca-fusese-condamnat-in-2012-la-7-ani-de-inchisoare-dupa-ce-a-fost-declarat-incompatibil-de-inspectoratul-scolar-gorj/',
      },
    ],
  },
  'Preda Vasile': {
    party: 'PNL',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-varasti-giurgiu.html',
      },
    ],
  },
  'Hada Ovidiu-Marius': {
    party: 'PNL',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Mediafax',
        kind: 'press',
        url: 'https://www.mediafax.ro/politic/primarul-hunedoarei-sustine-ca-este-nevinovat-in-noul-dosar-in-care-a-fost-trimis-in-judecata-9789814',
      },
    ],
  },
  'Slabu Otonel': {
    party: 'PDL',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-popricani-iasi.html',
      },
    ],
  },
  'Botezatu Gelu': {
    party: 'PSD',
    sentence: 'Achitat definitiv (2026)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    execution_type: null,
    details:
      'Radio Iași a publicat un update potrivit căruia, prin hotărârea nr. 318 din 29 aprilie 2026, Înalta Curte de Casație și Justiție a admis recursul în casație și a dispus achitarea definitivă în dosarul privind fonduri europene.',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Radio Iași',
        kind: 'press',
        url: 'https://www.radioiasi.ro/stiri/regional/update-bacau-achitare-definitiva-la-inalta-curte-de-casatie-si-justitie-fostul-viceprimar-din-barsanesti-gelu-botezatu-exonerat-de-acuzatiile-privind-fonduri-europene/',
      },
    ],
  },
  'Dunărințu Ionel Rafael': {
    party: 'PSD',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Stiripesurse.ro',
        kind: 'press',
        url: 'https://www.stiripesurse.ro/primar-trimis-in-judecata-pentru-fapte-de-coruptie_1142079.html',
      },
    ],
  },
  'Leonte Ioan': {
    party: 'PNL',
    verified_at: '2026-05-08',
    sources: [
      {
        label: '7 Iași',
        kind: 'press',
        url: 'https://www.7iasi.ro/cum-ii-scapa-statul-pe-condamnatii-din-dosarele-dna-de-plata-prejudiciului-cazul-unui-fost-primar-pnl-din-judetul-iasi/',
      },
    ],
  },
  'Gherghișan Sterian': {
    party: 'PSD',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Portal Info',
        kind: 'profile',
        url: 'https://www.portal-info.ro/primarii/primaria-vacareni-tulcea.html',
      },
    ],
  },
  'Corleciuc Ovidiu': {
    party: 'PSD',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Știri Botoșani',
        kind: 'press',
        url: 'https://stiri.botosani.ro/stiri/actualitate/primarul-comunei-vorniceni-a-demisionat.html',
      },
    ],
  },
  'Kis Hajnalka': {
    party: 'PDL',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Biroul Electoral Central',
        kind: 'official',
        url: 'https://www.scribd.com/document/710717305/Alegeri-locale-2008',
      },
    ],
  },
  'Gliga Daniel-Gabriel': {
    party: 'PNL',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Punctul',
        kind: 'press',
        url: 'https://www.punctul.ro/daniel-gliga-pnl-vrea-sa-schimbe-viitorul-reghinului/',
      },
    ],
  },
  'Iuhas Viorel': {
    party: 'PSD',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'Bihoreanul',
        kind: 'press',
        url: 'https://www.ebihoreanul.ro/stiri/fostul-viceprimar-din-beius-bagat-in-inchisoare-119946.html',
      },
    ],
  },
};

export const politicianAdditions = [
  {
    name: 'Sorin Oprescu',
    party: 'PSD',
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
      OPRESCU_PSD_SOURCE,
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
        label: 'Mediafax',
        kind: 'press',
        url: 'https://www.mediafax.ro/social/fostul-senator-vasile-duta-condamnat-la-5-ani-de-inchisoare-cu-executare-6093237',
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
    party: 'UDMR',
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
    party: 'Partidul pentru Odorheiu Secuiesc',
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
    party: 'PSD',
    position: 'Fost primar al comunei Bradu, județul Argeș',
    position_type: 'mayor',
    crime: 'Abuz în serviciu; fals intelectual; uz de fals',
    sentence: '5 ani închisoare',
    sentence_years: 5,
    conviction_year: 2014,
    status: 'convicted',
    details:
      'ÎCCJ l-a condamnat definitiv la 22 ianuarie 2014 la 5 ani de închisoare în dosarul retrocedărilor ilegale de terenuri de la Bradu. Ulterior, DNA Pitești l-a trimis din nou în judecată în ianuarie 2019 într-un dosar separat privind alte 161 de acte materiale de abuz în serviciu legate de fond funciar; am păstrat statutul general de convicted deoarece condamnarea definitivă din 2014 este mai puternică decât stadiul ulterior al noii cauze. Presa îl identifică drept fost primar PSD al comunei Bradu, afiliere folosită pentru perioada mandatului.',
    verified_at: '2026-05-10',
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
      {
        label: 'Curentul',
        kind: 'press',
        url: 'https://curentul.info/actualitate/argesul-lui-pendiuc-la-mana-dna-ului/',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PDL',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PNL',
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
    party: 'PDL',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PSD',
    position: 'Fost viceprimar al comunei Dragoslavele, jude\u021bul Arge\u0219',
    position_type: 'local_official',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA Pite\u0219ti l-a vizat ini\u021bial \u00een martie 2014 \u0219i apoi l-a trimis \u00een judecat\u0103 \u00een noiembrie 2015 \u00een dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219. Prin actualizarea oficial\u0103 din 5 februarie 2024, DNA a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea.',
    verified_at: '2026-05-11',
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
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
    ],
  },
  {
    name: 'Tarb\u0103 Mihai Gheorghe',
    party: 'PSD',
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
    party: 'PSD',
    position: 'Fost viceprimar al comunei Stoene\u0219ti, jude\u021bul Arge\u0219',
    position_type: 'local_official',
    crime: 'Abuz \u00een serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a trimis \u00een judecat\u0103 \u00een noiembrie 2015 dosarul contractelor de consultan\u021b\u0103 din jude\u021bul Arge\u0219, iar \u00een actualizarea oficial\u0103 din 5 februarie 2024 a consemnat c\u0103 \u00ceCCJ a dispus achitarea sa definitiv\u0103 la 24 aprilie 2023, \u00eentruc\u00e2t faptele nu exist\u0103 ori nu exist\u0103 probe c\u0103 persoana a s\u0103v\u00e2r\u0219it infrac\u021biunea. Apartenen\u021ba la PSD este confirmat\u0103 de presa local\u0103 \u00een lista ale\u0219ilor locali PSD din Arge\u0219 viza\u021bi de dosare de integritate.',
    verified_at: '2026-05-11',
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
      {
        label: 'Jurnalul de Arge\u0219',
        kind: 'press',
        url: 'https://jurnaluldearges.ro/primari-si-viceprimari-psd-cu-probleme-16390/',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PDL',
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
    party: 'PNȚCD',
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
    party: 'PSD',
    position: 'Fost primar al comunei Deleni, jude\u021bul Ia\u0219i',
    position_type: 'mayor',
    crime: 'Folosirea sau prezentarea de documente ori declara\u021bii false pentru ob\u021binerea pe nedrept de fonduri europene',
    sentence: '6 luni \u00eenchisoare cu suspendare',
    sentence_years: 0.5,
    conviction_year: 2013,
    status: 'convicted',
    details:
      'DNA Ia\u0219i a consemnat prin hot\u0103r\u00e2rea definitiv\u0103 din 24 ianuarie 2013 condamnarea sa la 6 luni de \u00eenchisoare cu suspendare condi\u021bionat\u0103 pentru ob\u021binerea pe nedrept de fonduri europene.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3851',
      },
      {
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
    ],
  },
  {
    name: 'Niculae Florin',
    party: 'PDL',
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
    party: 'PSD',
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
    party: 'PSD',
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
    party: 'PDL',
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
    party: 'PDL',
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
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/justitie/sotul-sefei-aep-a-incercat-sa-fuga-cu-documente-612729',
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
  {
    name: 'Gheorghe Falcă',
    party: 'PDL',
    position: 'Fost primar al municipiului Arad; europarlamentar',
    position_type: 'mayor',
    geography: {
      county: 'Arad',
      basis: 'office',
      note: 'Funcția locală relevantă a fost cea de primar al municipiului Arad.',
    },
    crime: 'Luare de mită; abuz în serviciu',
    sentence: 'Achitat definitiv (2013)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în 2007 pentru luare de mită și abuz în serviciu într-un dosar privind o tranzacție imobiliară din perioada în care era primar al municipiului Arad. ÎCCJ a respins recursul DNA și a menținut achitarea definitivă în iunie 2013.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=772',
      },
      {
        label: 'Jurnalul',
        kind: 'press',
        url: 'https://jurnalul.ro/stiri/observator/inalta-curte-de-casatie-si-justitie-l-a-achitat-pe-primarul-aradului-gheorghe-falca-sentinta-este-definitiva-645754.html',
      },
    ],
  },
  {
    name: 'Crinuța Dumitrean',
    party: 'PDL',
    position: 'Fost președinte al Autorității Naționale pentru Restituirea Proprietăților',
    position_type: 'secretary_of_state',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția relevantă a fost la ANRP, autoritate centrală cu sediul în București.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Proces încetat prin prescripție (2022)',
    sentence_years: 0,
    conviction_year: 2022,
    status: 'prescribed',
    details:
      'DNA a trimis-o în judecată în dosarul despăgubirilor ANRP pentru aprobarea unui raport de evaluare supraevaluat. Actualizarea DNA din 27 ianuarie 2023 consemnează încetarea procesului penal prin prescripție și obligații civile stabilite în solidar în dosar.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5695',
      },
      {
        label: 'Mediafax',
        kind: 'press',
        url: 'https://www.mediafax.ro/politic/crinuta-dumitrean-pdl-a-fost-numita-de-boc-la-conducerea-anrp-4973563',
      },
    ],
  },
  {
    name: 'Sergiu Diacomatu',
    party: 'PNL',
    position: 'Fost vicepreședinte ANRP',
    position_type: 'secretary_of_state',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcția relevantă a fost la ANRP, autoritate centrală cu sediul în București.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Proces încetat prin prescripție (2022)',
    sentence_years: 0,
    conviction_year: 2022,
    status: 'prescribed',
    details:
      'În dosarul despăgubirilor ANRP, DNA l-a trimis în judecată ca fost vicepreședinte al ANRP și membru al Comisiei Centrale pentru Stabilirea Despăgubirilor. Actualizarea oficială DNA consemnează încetarea procesului penal prin prescripție.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5695',
      },
      {
        label: 'HotNews',
        kind: 'press',
        url: 'https://hotnews.ro/sergiu-diacomatu-fost-membru-pmp-a-fost-validat-in-functia-de-presedinte-pnl-sector-1-1620774',
      },
    ],
  },
  {
    name: 'Remus Baciu',
    party: 'Independent',
    position: 'Fost membru al Comisiei Centrale pentru Stabilirea Despăgubirilor',
    position_type: 'other',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Cauza privea exercitarea atribuțiilor într-o comisie centrală ANRP cu sediul în București.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2022)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul ANRP privind aprobarea unei despăgubiri supraevaluate. Actualizarea DNA din 27 ianuarie 2023 consemnează achitarea definitivă pronunțată de ÎCCJ la 5 decembrie 2022.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5695',
      },
    ],
  },
  {
    name: 'Oana Vasilescu',
    party: 'Independent',
    position: 'Fost șef birou în Ministerul Justiției; fost membru al comisiei ANRP',
    position_type: 'other',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Funcțiile relevante au fost în Ministerul Justiției și în comisia centrală ANRP, instituții centrale din București.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Achitată definitiv (2022)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a trimis-o în judecată ca membru al comisiei centrale ANRP în dosarul despăgubirilor supraevaluate. Actualizarea oficială a DNA consemnează achitarea definitivă pronunțată de ÎCCJ în decembrie 2022.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5695',
      },
    ],
  },
  {
    name: 'Dragoș Bogdan',
    party: 'PNL',
    position: 'Fost membru al Comisiei Centrale pentru Stabilirea Despăgubirilor',
    position_type: 'other',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Cauza privea exercitarea atribuțiilor într-o comisie centrală ANRP cu sediul în București.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2022)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul ANRP privind o despăgubire supraevaluată pentru un teren. Actualizarea DNA din 27 ianuarie 2023 consemnează achitarea definitivă dispusă de ÎCCJ.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5695',
      },
      DRAGOS_BOGDAN_PNL_SOURCE,
    ],
  },
  {
    name: 'Lăcrămioara Alexandru',
    party: 'Independent',
    position: 'Fost membru al Comisiei Centrale pentru Stabilirea Despăgubirilor',
    position_type: 'other',
    geography: {
      county: 'București',
      basis: 'office',
      note: 'Cauza privea exercitarea atribuțiilor într-o comisie centrală ANRP cu sediul în București.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Achitată definitiv (2022)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'În dosarul ANRP, DNA a reținut calitatea de membru al comisiei centrale care a aprobat un raport de evaluare supraevaluat. Actualizarea DNA consemnează achitarea definitivă din 5 decembrie 2022.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5695',
      },
    ],
  },
  {
    name: 'Dănuț Culețu',
    party: 'PNL',
    position: 'Fost prefect al județului Constanța; fost deputat',
    position_type: 'deputy',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Cauza DNA privea calitatea de prefect al județului Constanța și președinte al Comisiei Județene de Fond Funciar.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2021)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul retrocedării a 656,76 hectare de teren din Constanța, în legătură cu activitatea Comisiei Județene de Fond Funciar. Actualizarea DNA din 14 septembrie 2021 consemnează achitarea definitivă.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5738',
      },
    ],
  },
  {
    name: 'Florin Mitroi',
    party: 'PNL',
    position: 'Primar al comunei Valu lui Traian; președinte al Consiliului Județean Constanța',
    position_type: 'mayor',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Cauza DNA privea calitatea de primar al comunei Valu lui Traian, județul Constanța.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Achitat definitiv (2021)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul fondului funciar de la Valu lui Traian, pentru abuz în serviciu. Actualizarea oficială din 14 septembrie 2021 consemnează achitarea definitivă de către Curtea de Apel Constanța.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5738',
      },
    ],
  },
  {
    name: 'Gabriel Ghețu',
    party: 'Independent',
    position: 'Fost șef al Biroului Județean de Rentă Viageră Agricolă Constanța',
    position_type: 'local_official',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția relevantă a fost la structura teritorială Constanța a Administrației Domeniilor Statului.',
    },
    crime: 'Complicitate la abuz în serviciu',
    sentence: 'Achitat definitiv (2021)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul retrocedării terenurilor de la Valu lui Traian, ca reprezentant ADS în comisia județeană de fond funciar. Actualizarea DNA consemnează achitarea definitivă.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5738',
      },
    ],
  },
  {
    name: 'Stere Sponte',
    party: 'PDL',
    position: 'Fost director al Oficiului de Cadastru și Publicitate Imobiliară Constanța',
    position_type: 'local_official',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de director OCPI Constanța și membru în Comisia Județeană de Fond Funciar.',
    },
    crime: 'Complicitate la abuz în serviciu',
    sentence: 'Achitat definitiv (2021)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată pentru acte legate de validarea unor reconstituiri de proprietate în județul Constanța. Curtea de Apel Constanța a dispus achitarea definitivă, potrivit actualizării DNA.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5738',
      },
      {
        label: 'Ziua de Constanța',
        kind: 'press',
        url: 'https://www.ziuaconstanta.ro/stiri/social/stere-sponte-ex-viceprimar-de-navodari-actual-sef-al-ocpi-252934.html',
      },
    ],
  },
  {
    name: 'Titus Găgeatu',
    party: 'Independent',
    position: 'Fost consilier în Instituția Prefectului Constanța',
    position_type: 'local_official',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția relevantă a fost la Instituția Prefectului județului Constanța.',
    },
    crime: 'Complicitate la abuz în serviciu; fals intelectual',
    sentence: 'Achitat parțial; fals prescris (2021)',
    sentence_years: 0,
    conviction_year: 2021,
    status: 'prescribed',
    details:
      'În dosarul fondului funciar Constanța, DNA l-a trimis în judecată pentru complicitate la abuz în serviciu și fals intelectual. Actualizarea DNA consemnează achitarea pentru faptele principale și încetarea procesului pentru fals intelectual prin prescripție.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5738',
      },
    ],
  },
  {
    name: 'Sergiu-Claudiu Maior',
    party: 'PDL',
    position: 'Fost viceprimar al municipiului Târgu Mureș',
    position_type: 'local_official',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția locală relevantă a fost cea de viceprimar al municipiului Târgu Mureș.',
    },
    crime: 'Uzurparea funcției',
    sentence: 'Achitat definitiv (2022)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată într-un dosar privind exercitarea atribuțiilor de viceprimar după o interdicție ANI. Actualizarea DNA din 8 iulie 2022 consemnează achitarea definitivă.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8387',
      },
      {
        label: 'Radio Târgu Mureș',
        kind: 'press',
        url: 'https://www.radiomures.ro/stiri/claudiu_maior_revine_in_func_ia_de_viceprimar_al_municipiului_tirgu_mure__1.html',
      },
    ],
  },
  {
    name: 'Andrei Mureșan',
    party: 'Independent',
    position: 'Fost secretar al municipiului Târgu Mureș',
    position_type: 'local_official',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al municipiului Târgu Mureș.',
    },
    crime: 'Complicitate la uzurparea funcției',
    sentence: 'Achitat definitiv (2022)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul privind atribuțiile exercitate de fostul viceprimar Sergiu-Claudiu Maior. Actualizarea oficială consemnează achitarea definitivă de către Curtea de Apel Târgu Mureș.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8387',
      },
    ],
  },
  {
    name: 'Maria Cioban',
    party: 'Independent',
    position: 'Fost secretar al municipiului Târgu Mureș',
    position_type: 'local_official',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al municipiului Târgu Mureș.',
    },
    crime: 'Complicitate la abuz în serviciu',
    sentence: 'Achitată definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a trimis-o în judecată în dosarul finanțării Fotbal Club Municipal Târgu Mureș. Actualizarea DNA din 13 martie 2023 consemnează achitarea definitivă dispusă de Curtea de Apel Cluj.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6969',
      },
    ],
  },
  {
    name: 'Imola Kiss',
    party: 'Independent',
    position: 'Fost director economic al municipiului Târgu Mureș',
    position_type: 'local_official',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de director economic al municipiului Târgu Mureș.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Achitată definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a trimis-o în judecată în dosarul privind alocarea finanțării către Fotbal Club Municipal Târgu Mureș. Actualizarea oficială consemnează achitarea definitivă din februarie 2023.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6969',
      },
    ],
  },
  {
    name: 'Laszlo Attila Bako',
    party: 'Independent',
    position: 'Fost funcționar/consilier local implicat în dosarul FCM Târgu Mureș',
    position_type: 'local_official',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Cauza DNA privea activitatea din administrația municipiului Târgu Mureș.',
    },
    crime: 'Complicitate la abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul finanțării Fotbal Club Municipal Târgu Mureș. Actualizarea DNA consemnează achitarea definitivă, întrucât faptele nu sunt prevăzute de legea penală.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6969',
      },
    ],
  },
  {
    name: 'Ioan Fărcaș',
    party: 'PNL',
    position: 'Fost funcționar/consilier local implicat în dosarul FCM Târgu Mureș',
    position_type: 'local_official',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Cauza DNA privea activitatea din administrația municipiului Târgu Mureș.',
    },
    crime: 'Complicitate la abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'În dosarul FCM Târgu Mureș, DNA l-a trimis în judecată pentru complicitate la abuz în serviciu. Actualizarea DNA din 13 martie 2023 consemnează achitarea definitivă.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6969',
      },
      TARGU_MURES_FARCAS_PARTY_SOURCE,
    ],
  },
  {
    name: 'Emil Virgil Măceșanu',
    party: 'Independent',
    position: 'Fost jurist în administrația municipiului Târgu Mureș',
    position_type: 'local_official',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția relevantă a fost în administrația municipiului Târgu Mureș.',
    },
    crime: 'Complicitate la abuz în serviciu',
    sentence: 'Achitat definitiv (2023)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul privind contractul de asociere și finanțarea Fotbal Club Municipal Târgu Mureș. Actualizarea oficială consemnează achitarea definitivă.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6969',
      },
    ],
  },
  {
    name: 'Florica Mioara Popa',
    party: 'Independent',
    position: 'Fost șef Serviciu administrare patrimoniu în Primăria Arad',
    position_type: 'local_official',
    geography: {
      county: 'Arad',
      basis: 'office',
      note: 'Funcția relevantă a fost în administrația municipiului Arad.',
    },
    crime: 'Abuz în serviciu',
    sentence: 'Achitată definitiv (2013)',
    sentence_years: null,
    conviction_year: null,
    status: 'acquitted',
    details:
      'DNA a trimis-o în judecată în același dosar al tranzacției imobiliare din Arad în care a fost vizat Gheorghe Falcă. ÎCCJ a menținut achitarea definitivă în iunie 2013.',
    verified_at: '2026-05-04',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=772',
      },
      {
        label: 'Jurnalul',
        kind: 'press',
        url: 'https://jurnalul.ro/stiri/observator/inalta-curte-de-casatie-si-justitie-l-a-achitat-pe-primarul-aradului-gheorghe-falca-sentinta-este-definitiva-645754.html',
      },
    ],
  },
  {
    name: 'Baciu Vasile',
    party: 'PDL',
    position: 'Primar al comunei Horia, județul Neamț',
    position_type: 'mayor',
    geography: {
      county: 'Neamț',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Horia, județul Neamț.',
    },
    crime: 'Fraudă cu fonduri europene; fals intelectual; uz de fals',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2010,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Bacău l-a condamnat definitiv la 7 octombrie 2010 pentru folosirea sau prezentarea de documente false ori inexacte pentru obținerea de fonduri europene, fals intelectual în formă continuată și uz de fals. Prejudiciul indicat de instanță a fost consemnat ca integral acoperit.',
    verified_at: '2026-05-05',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=1937',
      },
    ],
  },
  {
    name: 'Diaconu Gabriel Marian',
    party: 'PD',
    position: 'Fost viceprimar al municipiului Slatina',
    position_type: 'local_official',
    geography: {
      county: 'Olt',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al municipiului Slatina, județul Olt.',
    },
    crime: 'Abuz în serviciu contra intereselor publice',
    sentence: '4 ani închisoare cu executare',
    sentence_years: 4,
    conviction_year: 2012,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Curtea de Apel Craiova l-a condamnat definitiv la 7 decembrie 2012 pentru abuz în serviciu contra intereselor publice, în formă continuată, într-un dosar în care partea civilă era Consiliul Local Slatina.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3727',
      },
      {
        label: 'Curentul',
        kind: 'press',
        url: 'https://www.curentul.info/politic/tineretul-democrat-vrea-functii-de-conducere/',
      },
    ],
  },
  {
    name: 'Bleoca Ioan',
    party: 'PNL',
    position: 'Fost viceprimar al comunei Șeica Mare',
    position_type: 'local_official',
    geography: {
      county: 'Sibiu',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al comunei Șeica Mare, județul Sibiu.',
    },
    crime: 'Fraudă cu fonduri europene; deturnare de fonduri; fals intelectual',
    sentence: '1 an închisoare cu suspendare',
    sentence_years: 1,
    conviction_year: 2012,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Alba Iulia l-a condamnat definitiv la 23 februarie 2012 pentru fapte legate de folosirea documentelor false sau inexacte pentru obținerea de fonduri europene, schimbarea destinației fondurilor și fals intelectual.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=2995',
      },
      {
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
    ],
  },
  {
    name: 'Anghelină Ioan',
    party: 'PNL',
    position: 'Fost primar al comunei Șeica Mare',
    position_type: 'mayor',
    geography: {
      county: 'Sibiu',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Șeica Mare, județul Sibiu.',
    },
    crime: 'Instigare la fraudă cu fonduri europene; deturnare de fonduri; fals intelectual',
    sentence: '1 an închisoare cu suspendare',
    sentence_years: 1,
    conviction_year: 2012,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Alba Iulia l-a condamnat definitiv la 23 februarie 2012 pentru instigare la folosirea documentelor false sau inexacte pentru obținerea de fonduri europene, instigare la schimbarea destinației fondurilor și fals intelectual.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=2995',
      },
      {
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
    ],
  },
  {
    name: 'Zaharia Vasile',
    party: 'PDL',
    position: 'Fost viceprimar al comunei Cernica',
    position_type: 'local_official',
    geography: {
      county: 'Ilfov',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al comunei Cernica, județul Ilfov.',
    },
    crime: 'Fals material în înscrisuri oficiale; asociere pentru săvârșirea de infracțiuni',
    sentence: '3 ani închisoare cu executare',
    sentence_years: 3,
    conviction_year: 2013,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'ICCJ l-a condamnat definitiv la 26 septembrie 2013 pentru fals material în înscrisuri oficiale și asociere pentru săvârșirea de infracțiuni, în același dosar în care a fost vizat fostul director OCPI Călărași Ion Năbârgeac.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4355',
      },
      {
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
    ],
  },
  {
    name: 'Drăgan Constantin',
    party: 'PSD',
    position: 'Viceprimar al comunei Ucea',
    position_type: 'local_official',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al comunei Ucea, județul Brașov.',
    },
    crime: 'Fraudă cu fonduri europene; schimbarea destinației fondurilor',
    sentence: '1 an închisoare cu suspendare',
    sentence_years: 1,
    conviction_year: 2011,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Brașov l-a condamnat definitiv la 24 mai 2011 pentru folosirea sau prezentarea de documente false ori inexacte pentru obținerea de fonduri europene și schimbarea destinației fondurilor.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=2432',
      },
      {
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
    ],
  },
  {
    name: 'Popasavu Ioan',
    party: 'PNL',
    position: 'Consilier în Consiliul Local al comunei Ucea',
    position_type: 'local_official',
    geography: {
      county: 'Brașov',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de consilier în Consiliul Local al comunei Ucea, județul Brașov.',
    },
    crime: 'Fraudă cu fonduri europene; schimbarea destinației fondurilor',
    sentence: '1 an închisoare cu suspendare',
    sentence_years: 1,
    conviction_year: 2011,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Brașov l-a condamnat definitiv la 24 mai 2011 pentru folosirea sau prezentarea de documente false ori inexacte pentru obținerea de fonduri europene și schimbarea destinației fondurilor.',
    verified_at: '2026-05-05',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=2432',
      },
      {
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
    ],
  },
  {
    name: 'Alexandru Gheorghe',
    party: 'Independent',
    position: 'Viceprimar al comunei Plugari',
    position_type: 'local_official',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al comunei Plugari, județul Iași.',
    },
    crime: 'Instigare la abuz în serviciu; instigare la fals; complicitate la fraudă cu fonduri europene',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2013,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Iași a menținut definitiv la 22 martie 2013 condamnarea pentru instigare la abuz în serviciu, instigare la fals în înscrisuri sub semnătură privată și complicitate la folosirea documentelor false sau inexacte pentru obținerea de fonduri europene.',
    verified_at: '2026-05-05',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3988',
      },
    ],
  },
  {
    name: 'Pârvulescu Constantin',
    party: 'PSD',
    position: 'Primar al comunei Fărcășești',
    position_type: 'mayor',
    geography: {
      county: 'Gorj',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Fărcășești, județul Gorj.',
    },
    crime: 'Luare de mită; abuz în serviciu; fals în înscrisuri sub semnătură privată',
    sentence: '7 ani închisoare',
    sentence_years: 7,
    conviction_year: 2012,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'ICCJ l-a condamnat definitiv la 16 noiembrie 2012 pentru două infracțiuni de luare de mită în formă continuată, abuz în serviciu cu consecințe deosebit de grave și fals în înscrisuri sub semnătură privată.',
    verified_at: '2026-05-05',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3706',
      },
    ],
  },
  {
    name: 'Scorobete Ion',
    party: 'PSD',
    position: 'Fost viceprimar al comunei Zăvoi',
    position_type: 'local_official',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al comunei Zăvoi, județul Caraș-Severin.',
    },
    crime: 'Complicitate la luare de mită',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'ICCJ l-a condamnat definitiv la 22 aprilie 2014 pentru complicitate la luare de mită în dosarul fostului primar al comunei Zăvoi, Antonie Bunei.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4867',
      },
      {
        label: 'Express de Banat',
        kind: 'press',
        url: 'https://expressdebanat.ro/news-alert-ion-scorobete-fost-primar-si-candidat-psd-la-consiliul-judetean-a-fost-trimis-in-judecata-de-dna-pentru-a-doua-oara/',
      },
    ],
  },
  {
    name: 'Preda Vasile',
    party: 'PNL',
    position: 'Primar al comunei Vărăști, județul Giurgiu',
    position_type: 'mayor',
    geography: {
      county: 'Giurgiu',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Vărăști, județul Giurgiu.',
    },
    crime: 'Mărturie mincinoasă',
    sentence: '8 luni închisoare cu suspendare condiționată',
    sentence_years: 0.67,
    conviction_year: 2013,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'ICCJ l-a condamnat definitiv la 12 decembrie 2013, în același dosar cu deputatul Dan Păsat, la 8 luni de închisoare cu suspendare condiționată pentru mărturie mincinoasă.',
    verified_at: '2026-05-06',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4516',
      },
    ],
  },
  {
    name: 'Hada Ovidiu-Marius',
    party: 'PNL',
    position: 'Fost primar al municipiului Hunedoara',
    position_type: 'mayor',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al municipiului Hunedoara.',
    },
    crime: 'Abuz în serviciu contra intereselor publice; complicitate la conflict de interese',
    sentence: '5 ani închisoare',
    sentence_years: 5,
    conviction_year: 2015,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'ICCJ i-a condamnat definitiv la 7 mai 2015 pe fostul primar, viceprimar și funcționari din Primăria Hunedoara pentru fapte legate de abuz în serviciu și conflict de interese.',
    verified_at: '2026-05-06',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6295',
      },
    ],
  },
  {
    name: 'Dan Nicolae Robert',
    party: 'PNL',
    position: 'Fost viceprimar al municipiului Hunedoara',
    position_type: 'local_official',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al municipiului Hunedoara.',
    },
    crime: 'Abuz în serviciu contra intereselor publice; complicitate la conflict de interese',
    sentence: '5 ani închisoare',
    sentence_years: 5,
    conviction_year: 2015,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'ICCJ l-a condamnat definitiv la 7 mai 2015, alături de alți inculpați din administrația municipiului Hunedoara, pentru abuz în serviciu și complicitate la conflict de interese.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6295',
      },
      {
        label: 'Curentul',
        kind: 'press',
        url: 'https://www.curentul.info/actualitate/fostul-primar-al-hunedoarei-ovidius-hada-a-fost-condamnat-la-cinci-ani-de-inchisoare-cu-executare/',
      },
    ],
  },
  {
    name: 'Căpâlnă Daniela-Arieta',
    party: 'Independent',
    position: 'Fost șef serviciu buget, finanțe, contabilitate în Primăria Hunedoara',
    position_type: 'local_official',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția relevantă a fost în administrația municipiului Hunedoara.',
    },
    crime: 'Abuz în serviciu contra intereselor publice; complicitate la conflict de interese',
    sentence: '5 ani închisoare',
    sentence_years: 5,
    conviction_year: 2015,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'ICCJ a condamnat-o definitiv la 7 mai 2015 pentru abuz în serviciu și complicitate la conflict de interese în dosarul administrației municipiului Hunedoara.',
    verified_at: '2026-05-06',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6295',
      },
    ],
  },
  {
    name: 'Țiplea Ioan',
    party: 'Independent',
    position: 'Fost inspector de specialitate la Compartimentul Achiziții Publice din Primăria Hunedoara',
    position_type: 'local_official',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția relevantă a fost la Compartimentul Achiziții Publice din Primăria Hunedoara.',
    },
    crime: 'Abuz în serviciu; complicitate la conflict de interese; fals în înscrisuri sub semnătură privată',
    sentence: '5 ani închisoare',
    sentence_years: 5,
    conviction_year: 2015,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'ICCJ l-a condamnat definitiv la 7 mai 2015 pentru abuz în serviciu, complicitate la conflict de interese și fals în înscrisuri sub semnătură privată.',
    verified_at: '2026-05-06',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6295',
      },
    ],
  },
  {
    name: 'Slabu Otonel',
    party: 'PDL',
    position: 'Primar al comunei Popricani, județul Iași',
    position_type: 'mayor',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Popricani, județul Iași.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; complicitate la înșelăciune; fals intelectual',
    sentence: '5 ani închisoare',
    sentence_years: 5,
    conviction_year: 2013,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Curtea de Apel Bacău l-a condamnat definitiv la 6 decembrie 2013 pentru fapte legate de obținerea pe nedrept de fonduri europene, înșelăciune și fals intelectual.',
    verified_at: '2026-05-06',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4555',
      },
    ],
  },
  {
    name: 'Crîșmaru Monica',
    party: 'Independent',
    position: 'Inginer agronom la Primăria comunei Popricani',
    position_type: 'local_official',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost în Primăria comunei Popricani, județul Iași.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; complicitate la înșelăciune; fals intelectual',
    sentence: '5 ani închisoare',
    sentence_years: 5,
    conviction_year: 2013,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Curtea de Apel Bacău a condamnat-o definitiv la 6 decembrie 2013, în același dosar cu primarul comunei Popricani, pentru complicitate la obținerea pe nedrept de fonduri europene și fals intelectual.',
    verified_at: '2026-05-06',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4555',
      },
    ],
  },
  {
    name: 'Crăciunel Dorel-Rusalin',
    party: 'Independent',
    position: 'Referent în cadrul Primăriei comunei Tormac',
    position_type: 'local_official',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția relevantă a fost în Primăria comunei Tormac, județul Timiș.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; fals intelectual',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Timișoara l-a condamnat definitiv la 4 februarie 2016 pentru complicitate la folosirea documentelor false sau inexacte pentru obținerea de fonduri europene și fals intelectual.',
    verified_at: '2026-05-06',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7176',
      },
    ],
  },
  {
    name: 'Botezatu Gelu',
    party: 'PSD',
    position: 'Primar al comunei Bârsănești, județul Bacău',
    position_type: 'mayor',
    geography: {
      county: 'Bacău',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Bârsănești, județul Bacău.',
    },
    crime: 'Tentativă la fraudă cu fonduri europene',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2025,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Bacău l-a condamnat definitiv la 30 decembrie 2025 pentru tentativă la folosirea de documente false, inexacte sau incomplete pentru obținerea pe nedrept de fonduri europene.',
    verified_at: '2026-05-06',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13615',
      },
    ],
  },
  {
    name: 'Dunărințu Ionel Rafael',
    party: 'PSD',
    position: 'Fost primar al orașului Baia de Aramă, județul Mehedinți',
    position_type: 'mayor',
    geography: {
      county: 'Mehedinți',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al orașului Baia de Aramă, județul Mehedinți.',
    },
    crime: 'Fraudă cu fonduri europene; obținere ilegală de fonduri',
    sentence: '5 ani și 10 luni închisoare',
    sentence_years: 5.83,
    conviction_year: 2023,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Curtea de Apel Craiova l-a condamnat definitiv la 28 martie 2023 pentru folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene și obținere ilegală de fonduri.',
    verified_at: '2026-05-06',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12034',
      },
    ],
  },
  {
    name: 'Băiculescu Vasile',
    party: 'Partida Romilor Pro-Europa',
    position: 'Primar al comunei Brăhășești, județul Galați',
    position_type: 'mayor',
    geography: {
      county: 'Galați',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Brăhășești, județul Galați.',
    },
    crime: 'Luare de mită',
    sentence: '4 ani și 3 luni închisoare',
    sentence_years: 4.25,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Curtea de Apel Galați l-a condamnat definitiv la 9 martie 2016 pentru două infracțiuni de luare de mită, una în formă continuată, în legătură cu funcția de primar al comunei Brăhășești.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7293',
      },
      {
        label: 'România Liberă',
        kind: 'press',
        url: 'https://romanialibera.ro/special/pnl-si-pd-l-au-castigat-jumatate-din-fieful-psd-127509/',
      },
    ],
  },
  {
    name: 'Pleșcan Iuliana',
    party: 'Independent',
    position: 'Secretar la Primăria Brăhășești, județul Galați',
    position_type: 'local_official',
    geography: {
      county: 'Galați',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar la Primăria Brăhășești, județul Galați.',
    },
    crime: 'Luare de mită',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Galați a condamnat-o definitiv la 9 martie 2016 pentru luare de mită, instanța dispunând și confiscarea sumei de 1.500 lei.',
    verified_at: '2026-05-07',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7293',
      },
    ],
  },
  {
    name: 'Leonte Ioan',
    party: 'PNL',
    position: 'Primar al comunei Gorban, județul Iași',
    position_type: 'mayor',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Gorban, județul Iași.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; fals intelectual',
    sentence: '3 ani și 8 luni închisoare',
    sentence_years: 3.67,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 14 decembrie 2018 pentru complicitate la obținerea pe nedrept de fonduri europene și fals intelectual.',
    verified_at: '2026-05-07',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9260',
      },
    ],
  },
  {
    name: 'Lupei Constantin',
    party: 'PNL',
    position: 'Consilier local al comunei Gorban, județul Iași',
    position_type: 'local_official',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de consilier local în comuna Gorban, județul Iași.',
    },
    crime: 'Fraudă cu fonduri europene; complicitate; fals intelectual',
    sentence: '4 ani și 2 luni închisoare',
    sentence_years: 4.17,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 14 decembrie 2018 pentru fapte legate de obținerea pe nedrept de fonduri europene și fals intelectual.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9260',
      },
      {
        label: 'Ziarul de Iași',
        kind: 'press',
        url: 'https://www.ziaruldeiasi.ro/stiri/patronul-vascar-executat-pentru-un-tun-imobiliar-la-gorban--174166.html',
      },
    ],
  },
  {
    name: 'Barbălată Gabriel',
    party: 'Independent',
    position: 'Consilier local al comunei Gorban, județul Iași',
    position_type: 'local_official',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de consilier local în comuna Gorban, județul Iași.',
    },
    crime: 'Spălare de bani; complicitate la fraudă cu fonduri europene',
    sentence: '3 ani închisoare',
    sentence_years: 3,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 14 decembrie 2018 pentru spălare de bani și complicitate la folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene.',
    verified_at: '2026-05-07',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9260',
      },
    ],
  },
  {
    name: 'Gherghișan Sterian',
    party: 'PSD',
    position: 'Primar al comunei Văcăreni, județul Tulcea',
    position_type: 'mayor',
    geography: {
      county: 'Tulcea',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Văcăreni, județul Tulcea.',
    },
    crime: 'Fraudă cu fonduri europene',
    sentence: '4 ani și 6 luni închisoare',
    sentence_years: 4.5,
    conviction_year: 2020,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Curtea de Apel Constanța l-a condamnat definitiv la 25 februarie 2020 pentru folosirea de documente sau declarații false, inexacte ori incomplete pentru obținerea pe nedrept de fonduri europene.',
    verified_at: '2026-05-07',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9753',
      },
    ],
  },
  {
    name: 'Corleciuc Ovidiu',
    party: 'PSD',
    position: 'Primar al comunei Vorniceni, județul Botoșani',
    position_type: 'mayor',
    geography: {
      county: 'Botoșani',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Vorniceni, județul Botoșani.',
    },
    crime: 'Fraudă cu fonduri europene; abuz în serviciu',
    sentence: '1 an și 6 luni închisoare cu suspendare',
    sentence_years: 1.5,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Suceava l-a condamnat definitiv la 19 decembrie 2016 pentru folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene și abuz în serviciu.',
    verified_at: '2026-05-07',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7954',
      },
    ],
  },
  {
    name: 'Kis Hajnalka',
    party: 'PDL',
    position: 'Primar al comunei Berveni, județul Satu Mare',
    position_type: 'mayor',
    geography: {
      county: 'Satu Mare',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Berveni, județul Satu Mare.',
    },
    crime: 'Fraudă cu fonduri europene; luare de mită',
    sentence: '2 ani și 6 luni închisoare cu suspendare',
    sentence_years: 2.5,
    conviction_year: 2017,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Tribunalul Satu Mare a admis acordul de recunoaștere a vinovăției, definitiv prin neapelare la 25 octombrie 2017, și a condamnat-o pentru folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene și luare de mită.',
    verified_at: '2026-05-07',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8517',
      },
    ],
  },
  {
    name: 'Gliga Daniel-Gabriel',
    party: 'PNL',
    position: 'Primar al municipiului Reghin, județul Mureș',
    position_type: 'mayor',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al municipiului Reghin, județul Mureș.',
    },
    crime: 'Abuz în serviciu',
    sentence: '3 luni închisoare cu suspendare și amendă penală',
    sentence_years: 0.25,
    conviction_year: 2021,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Târgu Mureș l-a condamnat definitiv la 11 august 2021 pentru abuz în serviciu în legătură cu repartizarea de locuințe ANL pentru tineri.',
    verified_at: '2026-05-07',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10532',
      },
    ],
  },
  {
    name: 'Koss Gabriela',
    party: 'PNL',
    position: 'Secretar al UAT municipiul Reghin, județul Mureș',
    position_type: 'local_official',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al UAT municipiul Reghin, județul Mureș.',
    },
    crime: 'Abuz în serviciu',
    sentence: '1 an închisoare cu suspendare',
    sentence_years: 1,
    conviction_year: 2021,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Târgu Mureș a condamnat-o definitiv la 11 august 2021 pentru abuz în serviciu în formă continuată, în dosarul privind repartizarea de locuințe ANL pentru tineri.',
    verified_at: '2026-05-07',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10532',
      },
      {
        label: 'Zi de Zi',
        kind: 'press',
        url: 'https://www.zi-de-zi.ro/2016/09/28/cine-va-supraveghea-respectarea-legalitatii-scrutinului-electoral-din-mures/',
      },
    ],
  },
  {
    name: 'Lucaș Laurian Iulian',
    party: 'PSD',
    position: 'Fost viceprimar și consilier local al municipiului Bacău',
    position_type: 'local_official',
    geography: {
      county: 'Bacău',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar și consilier local al municipiului Bacău.',
    },
    crime: 'Complicitate la luare de mită',
    sentence: '4 ani închisoare',
    sentence_years: 4,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 6 noiembrie 2014 pentru complicitate la luare de mită în formă continuată, în legătură cu activitatea din administrația municipiului Bacău.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5543',
      },
      {
        label: 'Ziarul de Bacău',
        kind: 'press',
        url: 'https://ziaruldebacau.ro/furtuna-pentru-unii-picatura-pentru-dumnezeu/',
      },
    ],
  },
  {
    name: 'Ifrim Vasile Dorinel',
    party: 'Independent',
    position: 'Șef al Serviciului Cadastral și Fond Funciar din Primăria Municipiului Bacău',
    position_type: 'local_official',
    geography: {
      county: 'Bacău',
      basis: 'office',
      note: 'Funcția relevantă a fost în cadrul Primăriei Municipiului Bacău.',
    },
    crime: 'Complicitate la luare de mită',
    sentence: '4 ani închisoare',
    sentence_years: 4,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 6 noiembrie 2014 pentru complicitate la luare de mită în formă continuată, în același dosar privind administrația municipiului Bacău.',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5543',
      },
    ],
  },
  {
    name: 'Băncianu Alexandru',
    party: 'Independent',
    position: 'Angajat în cadrul Primăriei comunei Fruntișeni, județul Vaslui',
    position_type: 'local_official',
    geography: {
      county: 'Vaslui',
      basis: 'office',
      note: 'Funcția relevantă a fost în cadrul Primăriei comunei Fruntișeni, județul Vaslui.',
    },
    crime: 'Complicitate la abuz în serviciu; fraudă cu fonduri europene',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 16 iulie 2014 pentru complicitate la abuz în serviciu și folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene.',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5155',
      },
    ],
  },
  {
    name: 'Goga Nicolae',
    party: 'PNL',
    position: 'Viceprimar al comunei Apold, județul Mureș',
    position_type: 'local_official',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al comunei Apold, județul Mureș.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; conflict de interese',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2015,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 29 aprilie 2015 pentru complicitate la folosirea de declarații false sau inexacte pentru obținerea pe nedrept de fonduri europene și conflict de interese.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6279',
      },
      {
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
    ],
  },
  {
    name: 'Grigore Marian',
    party: 'PMP',
    position: 'Secretar al Primăriei comunei Braniștea, județul Dâmbovița',
    position_type: 'local_official',
    geography: {
      county: 'Dâmbovița',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al Primăriei comunei Braniștea, județul Dâmbovița.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; conflict de interese; fals',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 16 iulie 2014 pentru complicitate la folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene, conflict de interese și fals în înscrisuri sub semnătură privată.',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5156',
      },
      {
        label: 'VotCorect',
        kind: 'press',
        url: 'https://votcorect.ro/liste-candidati/?judet=dambovita',
      },
    ],
  },
  {
    name: 'Ștefan Marian',
    party: 'PNL',
    position: 'Viceprimar al comunei Braniștea, județul Dâmbovița',
    position_type: 'local_official',
    geography: {
      county: 'Dâmbovița',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al comunei Braniștea, județul Dâmbovița.',
    },
    crime: 'Fraudă cu fonduri europene; complicitate; conflict de interese',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 16 iulie 2014 pentru infracțiuni legate de folosirea documentelor false sau inexacte pentru obținerea pe nedrept de fonduri europene și conflict de interese.',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5156',
      },
      {
        label: 'VotCorect',
        kind: 'press',
        url: 'https://votcorect.ro/liste-candidati/?judet=dambovita',
      },
    ],
  },
  {
    name: 'Grigore Liliana',
    party: 'Independent',
    position: 'Referent cu atribuții de urbanism în Primăria comunei Braniștea, județul Dâmbovița',
    position_type: 'local_official',
    geography: {
      county: 'Dâmbovița',
      basis: 'office',
      note: 'Funcția relevantă a fost în cadrul Primăriei comunei Braniștea, județul Dâmbovița.',
    },
    crime: 'Fraudă cu fonduri europene',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție a condamnat-o definitiv la 16 iulie 2014 pentru folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene, în formă continuată.',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5156',
      },
    ],
  },
  {
    name: 'Alexandru Adriana',
    party: 'Independent',
    position: 'Referent la serviciul taxe și impozite în Primăria comunei Braniștea, județul Dâmbovița',
    position_type: 'local_official',
    geography: {
      county: 'Dâmbovița',
      basis: 'office',
      note: 'Funcția relevantă a fost în cadrul Primăriei comunei Braniștea, județul Dâmbovița.',
    },
    crime: 'Fraudă cu fonduri europene',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție a condamnat-o definitiv la 16 iulie 2014 pentru folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene, în formă continuată.',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5156',
      },
    ],
  },
  {
    name: 'Iuhas Viorel',
    party: 'PSD',
    position: 'Viceprimar al municipiului Beiuș, județul Bihor',
    position_type: 'local_official',
    geography: {
      county: 'Bihor',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al municipiului Beiuș, județul Bihor.',
    },
    crime: 'Complicitate la abuz în serviciu; fals; complicitate la înșelăciune',
    sentence: '3 ani și 10 luni închisoare',
    sentence_years: 3.83,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 3 iunie 2016 pentru complicitate la abuz în serviciu, fals în înscrisuri sub semnătură privată, fals intelectual și complicitate la înșelăciune.',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7518',
      },
    ],
  },
  {
    name: 'Hasan Gelu Laurențiu',
    party: 'Independent',
    position: 'Inspector de specialitate în Primăria Beiuș, județul Bihor',
    position_type: 'local_official',
    geography: {
      county: 'Bihor',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de inspector de specialitate în Primăria Beiuș, județul Bihor.',
    },
    crime: 'Complicitate la abuz în serviciu; complicitate la înșelăciune; fals',
    sentence: '4 ani și 6 luni închisoare',
    sentence_years: 4.5,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 3 iunie 2016 pentru complicitate la abuz în serviciu, complicitate la înșelăciune, fals în înscrisuri sub semnătură privată și fals intelectual.',
    verified_at: '2026-05-08',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7518',
      },
    ],
  },
  {
    name: 'Anculia Romică Pavel',
    party: 'PDL',
    position: 'Director al APIA Caraș-Severin',
    position_type: 'local_official',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de director al APIA Caraș-Severin.',
    },
    crime: 'Complicitate la luare de mită; trafic de influență; instigare la fals',
    sentence: '6 ani închisoare',
    sentence_years: 6,
    conviction_year: 2015,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 28 ianuarie 2015 pentru complicitate la luare de mită, trafic de influență și instigare la fals în înscrisuri sub semnătură privată, toate în formă continuată.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5957',
      },
      {
        label: 'România Curată',
        kind: 'press',
        url: 'https://www.romaniacurata.ro/decorat-de-traian-basescu-cu-ordinul-meritul-agricol-fostul-sef-al-apia-caras-severin-a-fost-trimis-in-judecata-pentru-meritele-lui-el-executa-deja-o-condamnare/',
      },
    ],
  },
  {
    name: 'Ghiță Valentin',
    party: 'PDL',
    position: 'Primar al comunei Socol, județul Caraș-Severin',
    position_type: 'mayor',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Socol, județul Caraș-Severin.',
    },
    crime: 'Luare de mită; fals în înscrisuri sub semnătură privată',
    sentence: '4 ani închisoare',
    sentence_years: 4,
    conviction_year: 2015,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 28 ianuarie 2015 pentru luare de mită și fals în înscrisuri sub semnătură privată, ambele în formă continuată.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5957',
      },
      {
        label: 'Jurnalul',
        kind: 'press',
        url: 'https://jurnalul.ro/stiri/observator/primarii-din-socol-si-otelu-rosu-au-fost-retinuti-de-procurorii-dna-timisoara-pentru-luare-de-mita-624374.html',
      },
    ],
  },
  {
    name: 'Iancu Simion Simi',
    party: 'PDL',
    position: 'Primar al orașului Oțelu Roșu, județul Caraș-Severin',
    position_type: 'mayor',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al orașului Oțelu Roșu, județul Caraș-Severin.',
    },
    crime: 'Luare de mită; fals în înscrisuri sub semnătură privată',
    sentence: '3 ani închisoare',
    sentence_years: 3,
    conviction_year: 2015,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 28 ianuarie 2015 pentru luare de mită și fals în înscrisuri sub semnătură privată, ambele în formă continuată.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5957',
      },
      {
        label: 'Jurnalul',
        kind: 'press',
        url: 'https://jurnalul.ro/stiri/observator/primarii-din-socol-si-otelu-rosu-au-fost-retinuti-de-procurorii-dna-timisoara-pentru-luare-de-mita-624374.html',
      },
    ],
  },
  {
    name: 'Chiriță Viorel',
    party: 'PSD',
    position: 'Primar al comunei I.C. Brătianu, județul Tulcea',
    position_type: 'mayor',
    geography: {
      county: 'Tulcea',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei I.C. Brătianu, județul Tulcea.',
    },
    crime: 'Conflict de interese',
    sentence: '3 luni închisoare cu suspendare',
    sentence_years: 0.25,
    conviction_year: 2015,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Constanța l-a condamnat definitiv la 2 decembrie 2015 pentru conflict de interese, cu suspendarea condiționată a executării pedepsei.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7019',
      },
      {
        label: 'Enciclopedia Primăriilor',
        kind: 'press',
        url: 'https://www.enciclopedia.biz/ro/2529_primaria-ic-bratianu_tulcea.html',
      },
    ],
  },
  {
    name: 'Petre Mihai',
    party: 'Independent',
    position: 'Secretar al comunei Produlești, județul Dâmbovița',
    position_type: 'local_official',
    geography: {
      county: 'Dâmbovița',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al comunei Produlești, județul Dâmbovița.',
    },
    crime: 'Fals material; complicitate la uz de fals; complicitate la abuz în serviciu',
    sentence: '1 an, 7 luni și 10 zile închisoare',
    sentence_years: 1.61,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Curtea de Apel Ploiești l-a condamnat definitiv la 17 octombrie 2014 pentru fals material în înscrisuri oficiale, complicitate la uz de fals și complicitate la abuz în serviciu, în formă continuată.',
    verified_at: '2026-05-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5452',
      },
    ],
  },
  {
    name: 'Bunei Silviu Iosif',
    party: 'Independent',
    position: 'Consilier administrativ al Primăriei comunei Zăvoi, județul Caraș-Severin',
    position_type: 'local_official',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de consilier administrativ al Primăriei comunei Zăvoi, județul Caraș-Severin.',
    },
    crime: 'Complicitate la luare de mită',
    sentence: '4 ani închisoare',
    sentence_years: 4,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 22 aprilie 2014 pentru complicitate la luare de mită.',
    verified_at: '2026-05-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4867',
      },
    ],
  },
  {
    name: 'Lungu Gheorghe Adrian',
    party: 'Independent',
    position: 'Secretar al comunei Zăvoi, județul Caraș-Severin',
    position_type: 'local_official',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al comunei Zăvoi, județul Caraș-Severin.',
    },
    crime: 'Complicitate la luare de mită',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 22 aprilie 2014 pentru complicitate la luare de mită, cu suspendarea executării pedepsei.',
    verified_at: '2026-05-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4867',
      },
    ],
  },
  {
    name: 'Mihuț Firuț',
    party: 'Independent',
    position: 'Consilier juridic al Consiliului Local Zăvoi, județul Caraș-Severin',
    position_type: 'local_official',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de consilier juridic al Consiliului Local Zăvoi, județul Caraș-Severin.',
    },
    crime: 'Complicitate la luare de mită',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 22 aprilie 2014 pentru complicitate la luare de mită, cu suspendarea executării pedepsei.',
    verified_at: '2026-05-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=4867',
      },
    ],
  },
  {
    name: 'Miu Vasile',
    party: 'PNL',
    position: 'Viceprimar al comunei Sălătrucel, județul Vâlcea',
    position_type: 'local_official',
    geography: {
      county: 'Vâlcea',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al comunei Sălătrucel, județul Vâlcea.',
    },
    crime: 'Fraudă cu fonduri europene; complicitate la conflict de interese',
    sentence: '2 ani și 5 luni închisoare cu suspendare',
    sentence_years: 2.42,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Pitești l-a condamnat definitiv la 25 mai 2018 pentru folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene și complicitate la conflict de interese.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8848',
      },
      {
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
    ],
  },
  {
    name: 'Grecu Nicolaie-Dan',
    party: 'Independent',
    position: 'Consilier local al comunei Sălătrucel, județul Vâlcea',
    position_type: 'local_official',
    geography: {
      county: 'Vâlcea',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de consilier local al comunei Sălătrucel, județul Vâlcea.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; complicitate la conflict de interese',
    sentence: '2 ani și 5 luni închisoare cu suspendare',
    sentence_years: 2.42,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Pitești l-a condamnat definitiv la 25 mai 2018 pentru complicitate la folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene și complicitate la conflict de interese.',
    verified_at: '2026-05-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8848',
      },
    ],
  },
  {
    name: 'Cernea Elena',
    party: 'PSD',
    position: 'Secretar al Primăriei comunei Sălătrucel, județul Vâlcea',
    position_type: 'local_official',
    geography: {
      county: 'Vâlcea',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al Primăriei comunei Sălătrucel, județul Vâlcea.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; complicitate la conflict de interese',
    sentence: '2 ani și 5 luni închisoare cu suspendare',
    sentence_years: 2.42,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Pitești a condamnat-o definitiv la 25 mai 2018 pentru complicitate la folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene și complicitate la conflict de interese.',
    verified_at: '2026-05-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8848',
      },
      SALATRUCEL_PREOTESCU_PARTY_SOURCE,
    ],
  },
  {
    name: 'Mesia Ion',
    party: 'PSD',
    position: 'Contabil-casier al Primăriei comunei Sălătrucel, județul Vâlcea',
    position_type: 'local_official',
    geography: {
      county: 'Vâlcea',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de contabil-casier al Primăriei comunei Sălătrucel, județul Vâlcea.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; complicitate la conflict de interese',
    sentence: '2 ani și 5 luni închisoare cu suspendare',
    sentence_years: 2.42,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Pitești l-a condamnat definitiv la 25 mai 2018 pentru complicitate la folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene și complicitate la conflict de interese.',
    verified_at: '2026-05-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8848',
      },
      SALATRUCEL_PREOTESCU_PARTY_SOURCE,
    ],
  },
  {
    name: 'Bedreag Maria',
    party: 'Independent',
    position: 'Viceprimar al comunei Arsura, județul Vaslui',
    position_type: 'local_official',
    geography: {
      county: 'Vaslui',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al comunei Arsura, județul Vaslui.',
    },
    crime: 'Fraudă cu fonduri europene',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2020,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Iași a condamnat-o definitiv la 20 martie 2020 pentru folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene, în formă continuată.',
    verified_at: '2026-05-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9804',
      },
    ],
  },
  {
    name: 'Mitrofan Mihai',
    party: 'PSD',
    position: 'Primar al comunei Arsura, județul Vaslui',
    position_type: 'mayor',
    geography: {
      county: 'Vaslui',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Arsura, județul Vaslui.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2020,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Iași l-a condamnat definitiv la 20 martie 2020 pentru complicitate la folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene, în formă continuată.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9804',
      },
      {
        label: 'România Liberă',
        kind: 'press',
        url: 'https://romanialibera.ro/special/pesedistul-mitrofan-din-arsura--ajuns-edil-datorita-votului-unui-liberal-262131/',
      },
    ],
  },
  {
    name: 'Mușat Neculai',
    party: 'PNL',
    position: 'Viceprimar al comunei Ion Neculce, județul Iași',
    position_type: 'local_official',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al comunei Ion Neculce, județul Iași.',
    },
    crime: 'Fraudă cu fonduri europene; uz de fals',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Iași l-a condamnat definitiv la 24 mai 2018 pentru folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene și uz de fals.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8846',
      },
      {
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
    ],
  },
  {
    name: 'Ștefan Constantin',
    party: 'PSD',
    position: 'Consilier local al comunei Ion Neculce, județul Iași',
    position_type: 'local_official',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de consilier local al comunei Ion Neculce, județul Iași.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Iași l-a condamnat definitiv la 24 mai 2018 pentru complicitate la folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene.',
    verified_at: '2026-05-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8846',
      },
      STEFAN_CONSTANTIN_PSD_SOURCE,
    ],
  },
  {
    name: 'Miu Ileana-Cristina',
    party: 'Independent',
    position: 'Secretar al comunei Țițești, județul Argeș',
    position_type: 'local_official',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al comunei Țițești, județul Argeș.',
    },
    crime: 'Fraudă cu fonduri europene; tentativă de fraudă cu fonduri europene',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Pitești a condamnat-o definitiv la 18 octombrie 2018 pentru folosirea de documente false sau inexacte pentru obținerea pe nedrept de fonduri europene și tentativă la aceeași infracțiune.',
    verified_at: '2026-05-09',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9126',
      },
    ],
  },
  {
    name: 'Buciumeanu Ilie',
    party: 'PSD',
    position: 'Primar al comunei Tărtășești, județul Dâmbovița',
    position_type: 'mayor',
    geography: {
      county: 'Dâmbovița',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Tărtășești, județul Dâmbovița.',
    },
    crime: 'Complicitate la abuz în serviciu',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2020,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 2 octombrie 2020 pentru complicitate la abuz în serviciu dacă funcționarul public a obținut pentru sine sau pentru altul un folos necuvenit.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10059',
      },
      {
        label: 'HotNews',
        kind: 'press',
        url: 'https://hotnews.ro/tartasesti-trotuare-ca-n-povesti-835265',
      },
    ],
  },
  {
    name: 'Urdea Iustin Nicolae',
    party: 'PNL',
    position: 'Primar al comunei Limanu, județul Constanța',
    position_type: 'mayor',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Limanu, județul Constanța.',
    },
    crime: 'Abuz în serviciu; fraudă cu fonduri europene',
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul proiectului PHARE de la Limanu, iar actualizarea oficială din 17 aprilie 2024 consemnează achitarea definitivă dispusă de Curtea de Apel Constanța.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6717',
      },
      {
        label: 'Ziua de Constanța',
        kind: 'press',
        url: 'https://www.ziuaconstanta.ro/stiri/politic/dosarul-primarului-pnl-urdea-si-al-secretarului-voicu-din-limanu-in-apel-la-curtea-de-apel-constanta-811796.html',
      },
    ],
  },
  {
    name: 'Voicu Bogdan',
    party: 'Independent',
    position: 'Secretar al Primăriei comunei Limanu, județul Constanța',
    position_type: 'local_official',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al Primăriei comunei Limanu, județul Constanța.',
    },
    crime: 'Complicitate la abuz în serviciu; complicitate la fraudă cu fonduri europene',
    status: 'acquitted',
    details:
      'DNA l-a trimis în judecată în dosarul proiectului PHARE de la Limanu, iar actualizarea oficială din 17 aprilie 2024 consemnează achitarea definitivă dispusă de Curtea de Apel Constanța.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6717',
      },
    ],
  },
  {
    name: 'Hurdugaci Emanoil',
    party: 'PRM',
    position: 'Primar al comunei Chiheru de Jos, județul Mureș',
    position_type: 'mayor',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Chiheru de Jos, județul Mureș.',
    },
    crime: 'Instigare la fraudă cu fonduri europene; obținere ilegală de fonduri; spălare a banilor',
    status: 'indicted',
    details:
      'DNA Târgu Mureș a dispus trimiterea sa în judecată pentru acuzații legate de obținerea pe nedrept de fonduri europene, obținere ilegală de fonduri și spălare a banilor.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6717',
      },
      {
        label: 'Zi de Zi',
        kind: 'press',
        url: 'https://www.zi-de-zi.ro/2011/11/21/primarul-prm-din-chiheru-de-jos-vrea-sa-retraga-comuna-din-parcul-national-defileul-muresului/',
      },
    ],
  },
  {
    name: 'Bîlea Constantin',
    party: 'PDL',
    position: 'Primar al comunei Oarja, județul Argeș',
    position_type: 'mayor',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Oarja, județul Argeș.',
    },
    crime: 'Abuz în serviciu; complicitate la fals',
    sentence: 'Proces încetat prin prescripție',
    sentence_years: 0,
    conviction_year: 2025,
    status: 'prescribed',
    details:
      'DNA Pitești l-a trimis în judecată în dosarul achizițiilor din comuna Oarja, iar actualizarea oficială din 15 aprilie 2025 consemnează încetarea definitivă a procesului penal prin prescripție.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7945',
      },
      {
        label: 'Argeș Plus',
        kind: 'press',
        url: 'https://argesplus.ro/pdl-arges-si-a-ales-noua-conducere/',
      },
    ],
  },
  {
    name: 'Sima Iulia Mihaela',
    party: 'Independent',
    position: 'Director al Școlii Gimnaziale Dumitru Rădulescu Oarja, județul Argeș',
    position_type: 'local_official',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de director al școlii gimnaziale din comuna Oarja, județul Argeș.',
    },
    crime: 'Abuz în serviciu; complicitate la fals',
    sentence: 'Proces încetat prin prescripție',
    sentence_years: 0,
    conviction_year: 2025,
    status: 'prescribed',
    details:
      'DNA Pitești a trimis-o în judecată în dosarul achizițiilor din comuna Oarja, iar actualizarea oficială din 15 aprilie 2025 consemnează încetarea definitivă a procesului penal prin prescripție.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7945',
      },
    ],
  },
  {
    name: 'Gherghescu Lucian',
    party: 'PDL',
    position: 'Viceprimar al comunei Oarja, județul Argeș',
    position_type: 'local_official',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al comunei Oarja, județul Argeș.',
    },
    crime: 'Complicitate la abuz în serviciu; fals intelectual; uz de fals',
    sentence: 'Proces încetat prin prescripție',
    sentence_years: 0,
    conviction_year: 2025,
    status: 'prescribed',
    details:
      'DNA Pitești l-a trimis în judecată în dosarul achizițiilor din comuna Oarja, iar actualizarea oficială din 15 aprilie 2025 consemnează încetarea definitivă a procesului penal prin prescripție.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7945',
      },
      {
        label: 'Ziar Obiectiv',
        kind: 'press',
        url: 'https://ziarobiectiv.ro/migratia-primarilor-argeseni-schimbarile-politice-in-administratia-publica-din-arges-dupa-aplicarea-oug-552014/',
      },
    ],
  },
  {
    name: 'Vereș Mihail',
    party: 'Independent',
    position: 'Secretar al comunei Zagra, județul Bistrița-Năsăud',
    position_type: 'local_official',
    geography: {
      county: 'Bistrița-Năsăud',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al comunei Zagra, județul Bistrița-Năsăud.',
    },
    crime: 'Fraudă cu fonduri europene; instigare la fals intelectual',
    status: 'indicted',
    details:
      'DNA Cluj a dispus trimiterea sa în judecată pentru folosirea de documente nereale în relația cu APIA și instigare la fals intelectual.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9216',
      },
    ],
  },
  {
    name: 'Bălăi Ovidiu Lazăr',
    party: 'Independent',
    position: 'Agent agricol în Primăria comunei Zagra, județul Bistrița-Năsăud',
    position_type: 'local_official',
    geography: {
      county: 'Bistrița-Năsăud',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de agent agricol în Primăria comunei Zagra, județul Bistrița-Năsăud.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; fals intelectual',
    status: 'indicted',
    details:
      'DNA Cluj a dispus trimiterea sa în judecată pentru complicitate la folosirea de documente nereale în relația cu APIA și fals intelectual.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=9216',
      },
    ],
  },
  {
    name: 'Căluian Cristina',
    party: 'Independent',
    position: 'Secretar al Primăriei comunei Mircea Vodă, județul Constanța',
    position_type: 'local_official',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al Primăriei comunei Mircea Vodă, județul Constanța.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; fals material',
    status: 'indicted',
    details:
      'DNA Constanța a dispus trimiterea sa în judecată pentru complicitate la tentativă de fraudă cu fonduri europene și fals material în înscrisuri oficiale.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=1700',
      },
    ],
  },
  {
    name: 'Sterea Costică',
    party: 'PSD',
    position: 'Primar al comunei Tansa, județul Iași',
    position_type: 'mayor',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Tansa, județul Iași.',
    },
    crime: 'Fraudă cu fonduri europene; înșelăciune',
    status: 'indicted',
    details:
      'DNA Iași a dispus trimiterea sa în judecată pentru acuzații legate de folosirea de documente false în proiectul de alimentare cu apă din comuna Tansa.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=1700',
      },
      {
        label: 'Juridice.ro',
        kind: 'press',
        url: 'https://www.juridice.ro/113184/dna-sinteza-cauzelor-finalizate-in-luna-iunie-2010.html',
      },
    ],
  },
  {
    name: 'Panainte Vasile',
    party: 'Independent',
    position: 'Secretar al Consiliului Local Tansa, județul Iași',
    position_type: 'local_official',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al Consiliului Local Tansa, județul Iași.',
    },
    crime: 'Fraudă cu fonduri europene; înșelăciune',
    status: 'indicted',
    details:
      'DNA Iași a dispus trimiterea sa în judecată pentru acuzații legate de folosirea de documente false în proiectul de alimentare cu apă din comuna Tansa.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=1700',
      },
    ],
  },
  {
    name: 'Buculei Doina',
    party: 'PSD',
    position: 'Fost primar al comunei Plugari, județul Iași',
    position_type: 'mayor',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Plugari, județul Iași.',
    },
    crime: 'Fraudă cu fonduri europene; înșelăciune',
    status: 'indicted',
    details:
      'DNA Iași a dispus trimiterea sa în judecată pentru folosirea de documente false sau inexacte în vederea obținerii de fonduri europene și înșelăciune.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=1700',
      },
      {
        label: 'EMOL',
        kind: 'official',
        url: 'https://emol.ro/pluginfile.php/1/local_emol/statut_ro/1764/Statut%20Plugari%20IS.pdf',
      },
    ],
  },
  {
    name: 'Șerb Gheorghe',
    party: 'PDL',
    position: 'Primar al comunei Laslea, județul Sibiu',
    position_type: 'mayor',
    geography: {
      county: 'Sibiu',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Laslea, județul Sibiu.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; fals intelectual',
    status: 'indicted',
    details:
      'DNA Alba Iulia a dispus trimiterea sa în judecată într-un dosar privind un contract de închiriere folosit pentru obținerea de subvenții APIA.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=1700',
      },
      {
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
      {
        label: 'Turnul Sfatului',
        kind: 'press',
        url: 'https://www.turnulsfatului.ro/2012/05/02/alegeri-locale-lista-candidatilor-usl-si-pdl-la-primariile-din-judet-14699',
      },
    ],
  },
  {
    name: 'Jeleriu Gheorghe',
    party: 'PNL',
    position: 'Viceprimar al comunei Laslea, județul Sibiu',
    position_type: 'local_official',
    geography: {
      county: 'Sibiu',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al comunei Laslea, județul Sibiu.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; fals intelectual',
    status: 'indicted',
    details:
      'DNA Alba Iulia a dispus trimiterea sa în judecată într-un dosar privind un contract de închiriere folosit pentru obținerea de subvenții APIA.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=1700',
      },
      {
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
      {
        label: 'Consiliul Județean Sibiu',
        kind: 'official',
        url: 'https://www.cjsibiu.ro/wp-content/uploads/2016/09/Brosura-Alegeri-locale-2016.pdf',
      },
    ],
  },
  {
    name: 'Dudaș Lucian Marius',
    party: 'Independent',
    position: 'Secretar al Primăriei comunei Laslea, județul Sibiu',
    position_type: 'local_official',
    geography: {
      county: 'Sibiu',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar al Primăriei comunei Laslea, județul Sibiu.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; complicitate la fals intelectual',
    status: 'indicted',
    details:
      'DNA Alba Iulia a dispus trimiterea sa în judecată într-un dosar privind un contract de închiriere folosit pentru obținerea de subvenții APIA.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=1700',
      },
    ],
  },
  {
    name: 'Coțofanu Constantin',
    party: 'PSD',
    position: 'Fost primar al comunei Șipote, județul Iași',
    position_type: 'mayor',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Șipote, județul Iași.',
    },
    crime: 'Fraudă cu fonduri europene; înșelăciune; fals intelectual',
    status: 'indicted',
    details:
      'DNA Iași a dispus trimiterea sa în judecată pentru acuzații legate de documente false folosite într-un proiect de consolidare și modernizare din comuna Șipote.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3520',
      },
      {
        label: 'Jurnal Virtual',
        kind: 'press',
        url: 'https://jurnalvirtual.ro/2010/10/06/lista-delegatilor-pesedisti-ieseni-la-congresul-de-la-bucuresti/',
      },
    ],
  },
  {
    name: 'Ciobanu Maria',
    party: 'Independent',
    position: 'Contabil șef în Primăria comunei Șipote, județul Iași',
    position_type: 'local_official',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de contabil șef în Primăria comunei Șipote, județul Iași.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; complicitate la fals',
    status: 'indicted',
    details:
      'DNA Iași a dispus trimiterea sa în judecată ca membru al comisiei de recepție în dosarul proiectului din comuna Șipote.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3520',
      },
    ],
  },
  {
    name: 'Sufragiu Maria',
    party: 'Independent',
    position: 'Tehnician constructor în Primăria comunei Șipote, județul Iași',
    position_type: 'local_official',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de tehnician constructor în Primăria comunei Șipote, județul Iași.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene; complicitate la fals',
    status: 'indicted',
    details:
      'DNA Iași a dispus trimiterea sa în judecată ca membru al comisiei de recepție în dosarul proiectului din comuna Șipote.',
    verified_at: '2026-05-10',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=3520',
      },
    ],
  },
  {
    name: 'Lupu Neculai',
    party: 'PRM',
    position: 'Primar al comunei Fruntișeni, județul Vaslui',
    position_type: 'mayor',
    geography: {
      county: 'Vaslui',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Fruntișeni, județul Vaslui.',
    },
    crime: 'Abuz în serviciu; conflict de interese',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2014,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 16 iulie 2014 pentru abuz în serviciu contra intereselor publice și conflict de interese.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=5155',
      },
      {
        label: 'Primarii Vaslui',
        kind: 'press',
        url: 'https://www.portal-info.ro/primarii/primaria-fruntiseni-vaslui.html',
      },
    ],
  },
  {
    name: 'Diaconu Veronica',
    party: 'PDL',
    position: 'Primar al comunei Gorgota, județul Prahova',
    position_type: 'mayor',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de primar al comunei Gorgota și membru al Comisiei locale de fond funciar.',
    },
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    sentence: '6 ani închisoare',
    sentence_years: 6,
    conviction_year: 2017,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Curtea de Apel Ploiești a condamnat-o definitiv la 29 iunie 2017 în dosarul retrocedării ilegale a unor terenuri din județul Prahova.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8320',
      },
      {
        label: 'Observatorul Prahovean',
        kind: 'press',
        url: 'https://www.observatorulph.ro/alegeri-locale-2012/14980-veronica-ioni-primarul-pdl-din-gorgota-a-trecut-la-pnl',
      },
    ],
  },
  {
    name: 'Oproescu Dumitru',
    party: 'Independent',
    position: 'Director al Administrației Domeniilor Statului Prahova',
    position_type: 'other',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de director A.D.S. Prahova și membru al comisiei județene de fond funciar.',
    },
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    sentence: '3 ani închisoare',
    sentence_years: 3,
    conviction_year: 2017,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Curtea de Apel Ploiești l-a condamnat definitiv la 29 iunie 2017 în același dosar privind retrocedarea ilegală a terenurilor din Prahova.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8320',
      },
    ],
  },
  {
    name: 'Stan Constantin Cătălin',
    party: 'Independent',
    position: 'Fost subprefect al județului Prahova',
    position_type: 'other',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de subprefect și membru al colectivului tehnic al Instituției Prefectului Prahova.',
    },
    crime: 'Abuz în serviciu cu consecințe deosebit de grave',
    sentence: '3 ani închisoare',
    sentence_years: 3,
    conviction_year: 2017,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Curtea de Apel Ploiești l-a condamnat definitiv la 29 iunie 2017 în dosarul retrocedării ilegale a unor terenuri din județul Prahova.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8320',
      },
    ],
  },
  {
    name: 'Vasile Tudora',
    party: 'Independent',
    position: 'Referent contabil șef la Primăria Gorgota, județul Prahova',
    position_type: 'local_official',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de referent contabil șef la Primăria Gorgota.',
    },
    crime: 'Complicitate la abuz în serviciu',
    sentence: '4 ani închisoare cu suspendare',
    sentence_years: 4,
    conviction_year: 2017,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Ploiești a condamnat-o definitiv la 29 iunie 2017 pentru complicitate la abuz în serviciu contra intereselor publice, în formă calificată.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8320',
      },
    ],
  },
  {
    name: 'Sotir Simona Mariana',
    party: 'Independent',
    position: 'Fost agent agricol în Primăria Gorgota, județul Prahova',
    position_type: 'local_official',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de agent agricol în Primăria Gorgota.',
    },
    crime: 'Abuz în serviciu',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2017,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Ploiești a condamnat-o definitiv la 29 iunie 2017 pentru abuz în serviciu contra intereselor publice, în formă calificată.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8320',
      },
    ],
  },
  {
    name: 'Sârbu Laura',
    party: 'Independent',
    position: 'Secretar general al Primăriei municipiului Deva',
    position_type: 'local_official',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar general al Primăriei municipiului Deva.',
    },
    crime: 'Trafic de influență',
    sentence: '3 ani și 8 luni închisoare',
    sentence_years: 3.67,
    conviction_year: 2024,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Curtea de Apel Alba a condamnat-o definitiv la 13 februarie 2024 pentru două infracțiuni de trafic de influență, dintre care una în formă continuată.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12497',
      },
    ],
  },
  {
    name: 'Sârbu Hadrian',
    party: 'Independent',
    position: 'Angajat în Primăria municipiului Deva',
    position_type: 'local_official',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de angajat al Biroului Investitori Relații Externe din Primăria Deva.',
    },
    crime: 'Complicitate la trafic de influență',
    sentence: '2 ani și 3 luni închisoare cu suspendare',
    sentence_years: 2.25,
    conviction_year: 2024,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Alba l-a condamnat definitiv la 13 februarie 2024 pentru complicitate la trafic de influență, în formă continuată.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12497',
      },
    ],
  },
  {
    name: 'Bodrean Adrian Mihai',
    party: 'Independent',
    position: 'Funcționar în Primăria municipiului Deva',
    position_type: 'local_official',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de funcționar în Primăria municipiului Deva.',
    },
    crime: 'Complicitate la trafic de influență',
    sentence: '2 ani și 4 luni închisoare cu suspendare',
    sentence_years: 2.33,
    conviction_year: 2024,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Alba l-a condamnat definitiv la 13 februarie 2024 pentru complicitate la trafic de influență.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12497',
      },
    ],
  },
  {
    name: 'Iordache Constantin',
    party: 'Independent',
    position: 'Secretar la Primăria comunei Seaca de Câmp, județul Dolj',
    position_type: 'local_official',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar la Primăria comunei Seaca de Câmp.',
    },
    crime: 'Fals intelectual; complicitate la fraudă cu fonduri europene',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2021,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Craiova l-a condamnat definitiv la 26 martie 2021 pentru fals intelectual și complicitate la folosirea de documente false pentru obținerea de fonduri europene.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10345',
      },
    ],
  },
  {
    name: 'Buduru Cornel',
    party: 'Independent',
    position: 'Funcționar APIA Dolj - Centrul local Craiova',
    position_type: 'other',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de funcționar în cadrul APIA Dolj, centrul local Craiova.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene',
    sentence: '2 ani și 8 luni închisoare cu suspendare',
    sentence_years: 2.67,
    conviction_year: 2021,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Craiova l-a condamnat definitiv la 26 martie 2021 pentru două infracțiuni de complicitate la folosirea de documente false pentru obținerea de fonduri europene.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10345',
      },
    ],
  },
  {
    name: 'Moreanu Castelia',
    party: 'Independent',
    position: 'Șef birou APIA Dolj - Centrul local Craiova',
    position_type: 'other',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de șef birou la APIA Dolj, centrul local Craiova.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2021,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Craiova a condamnat-o definitiv la 26 martie 2021 pentru complicitate la folosirea de documente false pentru obținerea de fonduri europene.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10345',
      },
    ],
  },
  {
    name: 'Pădureanu Sabina',
    party: 'Independent',
    position: 'Funcționar APIA Dolj - Centrul local Craiova',
    position_type: 'other',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de funcționar în cadrul APIA Dolj, centrul local Craiova.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene',
    sentence: '1 an și 8 luni închisoare cu suspendare',
    sentence_years: 1.67,
    conviction_year: 2021,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Craiova a condamnat-o definitiv la 26 martie 2021 pentru complicitate la folosirea de documente false pentru obținerea de fonduri europene.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10345',
      },
    ],
  },
  {
    name: 'Spătaru Nelu Eugen',
    party: 'Independent',
    position: 'Director al Oficiului de Cadastru și Publicitate Imobiliară Mehedinți',
    position_type: 'other',
    geography: {
      county: 'Mehedinți',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de director al Oficiului de Cadastru și Publicitate Imobiliară Mehedinți.',
    },
    crime: 'Instigare la abuz în serviciu',
    sentence: '4 ani închisoare',
    sentence_years: 4,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 10 martie 2016 pentru instigare la abuz în serviciu în formă calificată și continuată.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7291',
      },
    ],
  },
  {
    name: 'Grosu Mircea Sevastian',
    party: 'PDL',
    position: 'Viceprimar al municipiului Drobeta Turnu Severin',
    position_type: 'local_official',
    geography: {
      county: 'Mehedinți',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar al municipiului Drobeta Turnu Severin.',
    },
    crime: 'Instigare la abuz în serviciu',
    sentence: '3 ani închisoare',
    sentence_years: 3,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 10 martie 2016 pentru instigare la abuz în serviciu în formă calificată și continuată.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7291',
      },
      {
        label: 'România Curată',
        kind: 'press',
        url: 'https://www.romaniacurata.ro/face-dna-dosare-politice-suprematia-psd-este-proportionala-cu-dominatia-sa-asupra-administratiei-locale/',
      },
    ],
  },
  {
    name: 'Iancu Nicolae',
    party: 'Independent',
    position: 'Registrator șef la Oficiul de Cadastru și Publicitate Imobiliară Mehedinți',
    position_type: 'other',
    geography: {
      county: 'Mehedinți',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de registrator șef la Oficiul de Cadastru și Publicitate Imobiliară Mehedinți.',
    },
    crime: 'Abuz în serviciu',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 10 martie 2016 pentru abuz în serviciu în formă calificată.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7291',
      },
    ],
  },
  {
    name: 'Laciu Răducu George',
    party: 'Independent',
    position: 'Șef Serviciu patrimoniu la Hidroelectrica - Sucursala Porțile de Fier',
    position_type: 'other',
    geography: {
      county: 'Mehedinți',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de șef Serviciu patrimoniu la Sucursala Porțile de Fier.',
    },
    crime: 'Abuz în serviciu',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 10 martie 2016 pentru abuz în serviciu în formă calificată.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7291',
      },
    ],
  },
  {
    name: 'Pavelescu Teodor',
    party: 'Independent',
    position: 'Director general la Hidroelectrica - Sucursala Porțile de Fier',
    position_type: 'other',
    geography: {
      county: 'Mehedinți',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de director general al Sucursalei Porțile de Fier.',
    },
    crime: 'Instigare la abuz în serviciu',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2016,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv la 10 martie 2016 pentru instigare la abuz în serviciu în formă calificată.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7291',
      },
    ],
  },
  {
    name: 'Argintaru Niță',
    party: 'Independent',
    position: 'Secretar în Primăria comunei Padeș, județul Gorj',
    position_type: 'local_official',
    geography: {
      county: 'Gorj',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de secretar în Primăria comunei Padeș.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene',
    status: 'acquitted',
    details:
      'După condamnarea din 22 aprilie 2024, actualizarea DNA din 14 martie 2025 consemnează achitarea definitivă dispusă de ÎCCJ în recurs în casație.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12610',
      },
    ],
  },
  {
    name: 'Băloi Ion',
    party: 'PDL',
    position: 'Viceprimar și referent agricol în Primăria comunei Padeș, județul Gorj',
    position_type: 'local_official',
    geography: {
      county: 'Gorj',
      basis: 'office',
      note: 'Funcția relevantă a fost cea de viceprimar și referent agricol în Primăria comunei Padeș.',
    },
    crime: 'Complicitate la fraudă cu fonduri europene',
    status: 'acquitted',
    details:
      'După condamnarea din 22 aprilie 2024, actualizarea DNA din 14 martie 2025 consemnează achitarea definitivă dispusă de ÎCCJ în recurs în casație.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12610',
      },
      {
        label: 'FINAL DNA Database',
        kind: 'press',
        url: 'https://peterhfrank.com/wp-content/uploads/2024/12/FINALDNADatabase.v10.pdf',
      },
    ],
  },
  {
    name: 'R\u00e2mbu Cosmina',
    party: 'Independent',
    position:
      'Consilier \u00een Direc\u021bia Proiecte \u0219i Dezvoltare Durabil\u0103 din cadrul Consiliului Jude\u021bean Ia\u0219i',
    position_type: 'other',
    geography: {
      county: 'Ia\u0219i',
      basis: 'office',
      note:
        'Func\u021bia relevant\u0103 a fost \u00een cadrul Consiliului Jude\u021bean Ia\u0219i.',
    },
    crime: 'Abuz \u00een serviciu; fals intelectual',
    status: 'indicted',
    details:
      'DNA Ia\u0219i a trimis-o \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul materialelor de promovare ale Consiliului Jude\u021bean Ia\u0219i.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: '\u021aoptea Oana Elena',
    party: 'Independent',
    position:
      'Consilier \u00een Direc\u021bia Proiecte \u0219i Dezvoltare Durabil\u0103 din cadrul Consiliului Jude\u021bean Ia\u0219i',
    position_type: 'other',
    geography: {
      county: 'Ia\u0219i',
      basis: 'office',
      note:
        'Func\u021bia relevant\u0103 a fost \u00een cadrul Consiliului Jude\u021bean Ia\u0219i; DNA o men\u021bioneaz\u0103 ca \u021aoptea, fost\u0103 Hanganu.',
    },
    crime: 'Abuz \u00een serviciu; fals intelectual',
    status: 'indicted',
    details:
      'DNA Ia\u0219i a trimis-o \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul materialelor de promovare ale Consiliului Jude\u021bean Ia\u0219i.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Ra\u021b\u0103-H\u0103p\u0103le\u021b Irina Mihaela',
    party: 'Independent',
    position:
      'Consilier \u00een Direc\u021bia Proiecte \u0219i Dezvoltare Durabil\u0103 din cadrul Consiliului Jude\u021bean Ia\u0219i',
    position_type: 'other',
    geography: {
      county: 'Ia\u0219i',
      basis: 'office',
      note:
        'Func\u021bia relevant\u0103 a fost \u00een cadrul Consiliului Jude\u021bean Ia\u0219i, ca membru al comisiei de recep\u021bie.',
    },
    crime: 'Abuz \u00een serviciu; fals intelectual',
    status: 'indicted',
    details:
      'DNA Ia\u0219i a trimis-o \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul materialelor de promovare ale Consiliului Jude\u021bean Ia\u0219i.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Ilie Neculai',
    party: 'Independent',
    position: 'Reprezentant al SC Laser Co SRL',
    position_type: 'other',
    geography: {
      county: 'Ia\u0219i',
      basis: 'case_location',
      note:
        'Dosarul prive\u0219te contractul de servicii \u00eencheiat cu Consiliul Jude\u021bean Ia\u0219i.',
    },
    crime: 'Complicitate la fals intelectual',
    status: 'indicted',
    details:
      'DNA Ia\u0219i l-a trimis \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul materialelor de promovare ale Consiliului Jude\u021bean Ia\u0219i.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Chiril\u0103 Victor',
    party: 'PNL',
    position: 'Fost vicepre\u0219edinte al Consiliului Jude\u021bean Ia\u0219i; consilier jude\u021bean',
    position_type: 'local_official',
    geography: {
      county: 'Ia\u0219i',
      basis: 'office',
      note:
        'Func\u021bia relevant\u0103 a fost cea de vicepre\u0219edinte \u0219i consilier jude\u021bean \u00een Consiliul Jude\u021bean Ia\u0219i.',
    },
    crime: 'Complicitate la abuz \u00een serviciu; complicitate la fals intelectual',
    status: 'indicted',
    details:
      'DNA Ia\u0219i l-a trimis \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul materialelor de promovare ale Consiliului Jude\u021bean Ia\u0219i.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/regional/digi24-iasi/psd-preia-controlul-in-cj-iasi-liberalul-victor-chirila-a-fost-demis-din-functia-de-vicepresedinte-214477',
      },
    ],
  },
  {
    name: 'C\u0103u\u0219 Lumini\u021ba',
    party: 'Independent',
    position: 'Membru al comisiei de recep\u021bie pentru Consiliul Jude\u021bean Ia\u0219i',
    position_type: 'other',
    geography: {
      county: 'Ia\u0219i',
      basis: 'case_location',
      note:
        'Dosarul prive\u0219te recep\u021bia materialelor de promovare ale Consiliului Jude\u021bean Ia\u0219i.',
    },
    crime: 'Abuz \u00een serviciu',
    status: 'indicted',
    details:
      'DNA Ia\u0219i a inclus-o \u00een cauza transmis\u0103 instan\u021bei \u00een decembrie 2015, men\u021bion\u00e2nd \u0219i un acord de recunoa\u0219tere pentru fals intelectual.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Hordil\u0103 Doini\u021ba Paula',
    party: 'Independent',
    position: 'Membru al comisiei de recep\u021bie pentru Consiliul Jude\u021bean Ia\u0219i',
    position_type: 'other',
    geography: {
      county: 'Ia\u0219i',
      basis: 'case_location',
      note:
        'Dosarul prive\u0219te recep\u021bia materialelor de promovare ale Consiliului Jude\u021bean Ia\u0219i.',
    },
    crime: 'Abuz \u00een serviciu; fals intelectual',
    status: 'indicted',
    details:
      'DNA Ia\u0219i a trimis-o \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul materialelor de promovare ale Consiliului Jude\u021bean Ia\u0219i.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Lupu Daniela Maricela',
    party: 'Independent',
    position:
      'Membru al comisiei de recep\u021bie \u0219i gestionar al Magaziei Centrale a Consiliului Jude\u021bean Ia\u0219i',
    position_type: 'other',
    geography: {
      county: 'Ia\u0219i',
      basis: 'office',
      note:
        'Func\u021bia relevant\u0103 a fost \u00een cadrul Consiliului Jude\u021bean Ia\u0219i.',
    },
    crime: 'Abuz \u00een serviciu; fals intelectual',
    status: 'indicted',
    details:
      'DNA Ia\u0219i a trimis-o \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul materialelor de promovare ale Consiliului Jude\u021bean Ia\u0219i.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Gheorghi\u021b\u0103 Constantin',
    party: 'PSD',
    position: 'Primar al comunei Podari, jude\u021bul Dolj',
    position_type: 'mayor',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Func\u021bia relevant\u0103 a fost cea de primar al comunei Podari.',
    },
    crime: 'Abuz \u00een serviciu; fals intelectual',
    status: 'indicted',
    details:
      'DNA Craiova l-a trimis \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul restituirii unui teren intravilan din comuna Podari.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
      {
        label: 'Portal Info',
        kind: 'press',
        url: 'https://www.portal-info.ro/primarii/primaria-podari-dolj.html',
      },
    ],
  },
  {
    name: 'Prodileanu Petre',
    party: 'PSD',
    position: 'Viceprimar al comunei Podari, jude\u021bul Dolj',
    position_type: 'local_official',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Func\u021bia relevant\u0103 a fost cea de viceprimar al comunei Podari.',
    },
    crime: 'Abuz \u00een serviciu; fals intelectual',
    status: 'indicted',
    details:
      'DNA Craiova l-a trimis \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul restituirii unui teren intravilan din comuna Podari.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
      PRODILEANU_PARTY_SOURCE,
    ],
  },
  {
    name: 'Stan Mioara',
    party: 'Independent',
    position: 'Secretar la Prim\u0103ria comunei Podari, jude\u021bul Dolj',
    position_type: 'local_official',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Func\u021bia relevant\u0103 a fost cea de secretar \u00een Prim\u0103ria comunei Podari.',
    },
    crime: 'Abuz \u00een serviciu; fals intelectual',
    status: 'indicted',
    details:
      'DNA Craiova a trimis-o \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul restituirii unui teren intravilan din comuna Podari.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Vl\u0103du\u021bi Mariana',
    party: 'Independent',
    position: 'Arhitect \u0219ef la Prim\u0103ria comunei Podari, jude\u021bul Dolj',
    position_type: 'local_official',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Func\u021bia relevant\u0103 a fost cea de arhitect \u0219ef \u00een Prim\u0103ria comunei Podari.',
    },
    crime: 'Abuz \u00een serviciu; fals intelectual',
    status: 'indicted',
    details:
      'DNA Craiova a trimis-o \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul restituirii unui teren intravilan din comuna Podari.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'B\u0103b\u0103l\u0103u Costinel',
    party: 'Independent',
    position: '\u0218ef serviciu taxe \u0219i impozite \u00een Prim\u0103ria comunei Podari, jude\u021bul Dolj',
    position_type: 'other',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note:
        'Func\u021bia relevant\u0103 a fost cea de \u0219ef serviciu taxe \u0219i impozite \u00een Prim\u0103ria comunei Podari.',
    },
    crime: 'Instigare la abuz \u00een serviciu; \u00een\u0219el\u0103ciune; instigare la fals; uz de fals',
    status: 'indicted',
    details:
      'DNA Craiova l-a trimis \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul restituirii unui teren intravilan din comuna Podari.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Pisic\u0103 Radu Cristian',
    party: 'Independent',
    position: 'Inginer la o societate comercial\u0103',
    position_type: 'other',
    geography: {
      county: 'Dolj',
      basis: 'case_location',
      note: 'Dosarul prive\u0219te restituirea unui teren intravilan din comuna Podari.',
    },
    crime: 'Instigare la fals \u00een \u00eenscrisuri sub semn\u0103tur\u0103 privat\u0103',
    status: 'indicted',
    details:
      'DNA Craiova l-a trimis \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul restituirii unui teren intravilan din comuna Podari.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Albu Iulian Alexandru',
    party: 'Independent',
    position: 'Arhitect la o societate comercial\u0103',
    position_type: 'other',
    geography: {
      county: 'Dolj',
      basis: 'case_location',
      note: 'Dosarul prive\u0219te restituirea unui teren intravilan din comuna Podari.',
    },
    crime: 'Fals \u00een \u00eenscrisuri sub semn\u0103tur\u0103 privat\u0103',
    status: 'indicted',
    details:
      'DNA Craiova l-a trimis \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul restituirii unui teren intravilan din comuna Podari.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Ciobanu Ortan\u021ba',
    party: 'Independent',
    position: 'Director executiv adjunct \u00een Casa Jude\u021bean\u0103 de Asigur\u0103ri de S\u0103n\u0103tate Olt',
    position_type: 'other',
    geography: {
      county: 'Olt',
      basis: 'office',
      note:
        'Func\u021bia relevant\u0103 a fost cea de director executiv adjunct \u00een Casa Jude\u021bean\u0103 de Asigur\u0103ri de S\u0103n\u0103tate Olt.',
    },
    crime: 'Luare de mit\u0103; fals \u00een \u00eenscrisuri sub semn\u0103tur\u0103 privat\u0103',
    status: 'indicted',
    details:
      'DNA Craiova a trimis-o \u00een judecat\u0103 \u00een decembrie 2015 pentru fapte legate de examenul unei \u0219coli postliceale sanitare din Slatina.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Petre Viorel',
    party: 'Independent',
    position: '\u0218ef birou \u00een Brigada Poli\u021biei Rutiere Bucure\u0219ti',
    position_type: 'other',
    geography: {
      county: 'Bucure\u0219ti',
      basis: 'office',
      note:
        'Func\u021bia relevant\u0103 a fost cea de \u0219ef birou \u00een Brigada Poli\u021biei Rutiere Bucure\u0219ti.',
    },
    crime: 'Trafic de influen\u021b\u0103; fals material \u00een \u00eenscrisuri oficiale',
    status: 'indicted',
    details:
      'DNA l-a trimis \u00een judecat\u0103 \u00een decembrie 2015 pentru primirea unei sume de bani \u0219i falsificarea registrului pentru permise re\u021binute.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Lovin Stela',
    party: 'Independent',
    position:
      'Director financiar \u00een Institutul Na\u021bional de Recuperare, Medicin\u0103 Fizic\u0103 \u0219i Balneoclimatologie Bucure\u0219ti',
    position_type: 'other',
    geography: {
      county: 'Bucure\u0219ti',
      basis: 'office',
      note:
        'Func\u021bia relevant\u0103 a fost cea de director financiar \u00een institutul na\u021bional din Bucure\u0219ti.',
    },
    crime: 'Abuz \u00een serviciu',
    status: 'indicted',
    details:
      'DNA a trimis-o \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul unor pl\u0103\u021bi pretins nelegale ale institutului.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Nicolae Elisabeta',
    party: 'Independent',
    position:
      '\u0218ef serviciu contabilitate \u00een Institutul Na\u021bional de Recuperare, Medicin\u0103 Fizic\u0103 \u0219i Balneoclimatologie Bucure\u0219ti',
    position_type: 'other',
    geography: {
      county: 'Bucure\u0219ti',
      basis: 'office',
      note:
        'Func\u021bia relevant\u0103 a fost cea de \u0219ef serviciu contabilitate \u00een institutul na\u021bional din Bucure\u0219ti.',
    },
    crime: 'Complicitate la abuz \u00een serviciu',
    status: 'indicted',
    details:
      'DNA a trimis-o \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul unor pl\u0103\u021bi pretins nelegale ale institutului.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Jucan Petru',
    party: 'Independent',
    position: '\u0218ef al Serviciului Rutier din cadrul IPJ Suceava',
    position_type: 'other',
    geography: {
      county: 'Suceava',
      basis: 'office',
      note:
        'Func\u021bia relevant\u0103 a fost cea de \u0219ef al Serviciului Rutier din cadrul IPJ Suceava.',
    },
    crime:
      'Instigare la abuz \u00een serviciu; instigare la fals; fals intelectual; inducerea \u00een eroare a organelor judiciare',
    status: 'indicted',
    details:
      'DNA Suceava l-a trimis \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul privind interven\u021bii asupra unor documente \u0219i cercet\u0103ri rutiere.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Stratu Ioan',
    party: 'Independent',
    position: 'Agent de poli\u021bie \u00een Serviciul Rutier din cadrul IPJ Suceava',
    position_type: 'other',
    geography: {
      county: 'Suceava',
      basis: 'office',
      note:
        'Func\u021bia relevant\u0103 a fost cea de agent de poli\u021bie \u00een Serviciul Rutier din cadrul IPJ Suceava.',
    },
    crime: 'Abuz \u00een serviciu',
    status: 'indicted',
    details:
      'DNA Suceava l-a trimis \u00een judecat\u0103 \u00een decembrie 2015 \u00een dosarul privind interven\u021bii asupra unor documente \u0219i cercet\u0103ri rutiere.',
    verified_at: '2026-05-11',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=7027',
      },
    ],
  },
  {
    name: 'Pașca Eugenia',
    party: 'Independent',
    position: 'Inspector superior impozite și taxe al comunei Câmpani',
    position_type: 'local_official',
    geography: {
      county: 'Bihor',
      basis: 'office',
      note: 'Funcția publică relevantă era în comuna Câmpani, județul Bihor.',
    },
    crime: 'Abuz în serviciu cu obținere de foloase necuvenite',
    status: 'indicted',
    details:
      'DNA Oradea a trimis-o în judecată în octombrie 2024, alături de fostul primar Bocșe Raul Florin, în dosarul plăților pretins nelegale din Primăria Câmpani.',
    verified_at: '2026-05-13',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12699',
      },
    ],
  },
  {
    name: 'Coroiu Jenica Dorina',
    party: 'Independent',
    position: 'Inspector superior - contabil al comunei Câmpani',
    position_type: 'local_official',
    geography: {
      county: 'Bihor',
      basis: 'office',
      note: 'Funcția publică relevantă era în comuna Câmpani, județul Bihor.',
    },
    crime: 'Abuz în serviciu cu obținere de foloase necuvenite',
    sentence: '3 ani închisoare cu suspendare, prin acord de recunoaștere trimis instanței',
    sentence_years: null,
    status: 'indicted',
    details:
      'DNA Oradea a anunțat în octombrie 2024 acordul de recunoaștere a vinovăției și trimiterea dosarului la Tribunalul Bihor în cauza plăților pretins nelegale din Primăria Câmpani.',
    verified_at: '2026-05-13',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=12699',
      },
    ],
  },
  {
    name: 'Batîr Rareș',
    party: 'Independent',
    position: 'Administrator public al comunei Ungureni',
    position_type: 'local_official',
    geography: {
      county: 'Botoșani',
      basis: 'office',
      note: 'Funcția publică relevantă era în comuna Ungureni, județul Botoșani.',
    },
    crime: 'Luare de mită; folosirea de informații nedestinate publicității',
    status: 'indicted',
    details:
      'DNA Suceava l-a trimis în judecată în ianuarie 2026 în dosarul privind pretinse mite și furnizarea de informații pentru favorizarea unei societăți la o licitație din comuna Ungureni.',
    verified_at: '2026-05-13',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13456',
      },
    ],
  },
  {
    name: 'Piștea Ciprian-Octavian',
    party: 'PNL',
    position:
      'Administrator public al municipiului Bacău; coordonator al activității de implementare a proiectelor din fonduri europene',
    position_type: 'local_official',
    geography: {
      county: 'Bacău',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Bacău, județul Bacău.',
    },
    crime:
      'Instigare la tentativă de obținere nelegală de fonduri europene; fals în înscrisuri sub semnătură privată',
    status: 'indicted',
    details:
      'DNA Bacău l-a trimis în judecată în aprilie 2026 în dosarul proiectului de management al traficului din municipiul Bacău, privind documente pretins false folosite pentru modificarea proiectului tehnic.',
    verified_at: '2026-05-13',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13667',
      },
      PISTEA_PARTY_SOURCE,
    ],
  },
  {
    name: 'Anghel Constantin-Adrian',
    party: 'Independent',
    position:
      'Director al Agenției de Dezvoltare Locală Bacău din cadrul Primăriei municipiului Bacău; manager de proiect',
    position_type: 'local_official',
    geography: {
      county: 'Bacău',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Bacău, județul Bacău.',
    },
    crime:
      'Tentativă la folosirea de documente false pentru obținerea sau reținerea pe nedrept de fonduri europene; fals în înscrisuri sub semnătură privată',
    status: 'indicted',
    details:
      'DNA Bacău l-a trimis în judecată în aprilie 2026 în dosarul proiectului de management al traficului din municipiul Bacău, reținând că ar fi semnat și înaintat dispoziții de șantier cu date pretins necorespunzătoare adevărului.',
    verified_at: '2026-05-13',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13667',
      },
    ],
  },
  {
    name: 'Petre Vlad-Andrei',
    party: 'Independent',
    position: 'Arhitect-șef al municipiului Zalău',
    position_type: 'local_official',
    geography: {
      county: 'Sălaj',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Zalău, județul Sălaj.',
    },
    crime: 'Abuz în serviciu; fals intelectual',
    status: 'indicted',
    details:
      'DNA Cluj l-a trimis în judecată în aprilie 2026 pentru emiterea a două adrese oficiale pretins nelegale în calitate de arhitect-șef al municipiului Zalău.',
    verified_at: '2026-05-13',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=13667',
      },
    ],
  },
  {
    name: 'Câmpulungeanu Petruș',
    party: 'PSD',
    position: 'Primar al comunei Pantelimon',
    position_type: 'mayor',
    geography: {
      county: 'Ilfov',
      basis: 'office',
      note: 'Funcția publică relevantă era în comuna Pantelimon, județul Ilfov.',
    },
    crime: 'Instigare la abuz în serviciu, în forma participației improprii',
    status: 'indicted',
    details:
      'DNA l-a trimis în judecată în noiembrie 2020 pentru două infracțiuni de instigare la abuz în serviciu în legătură cu documente de fond funciar emise în perioada 2004-2007.',
    verified_at: '2026-05-13',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10048',
      },
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/psd/primari/fostul-primar-psd-din-pantelimon-trimis-in-judecata-pentru-instigare-la-abuz-in-servicu-1641588',
      },
    ],
  },
  {
    name: 'Olteanu Aristide',
    party: 'Independent',
    position: 'Secretar al comunei Pantelimon',
    position_type: 'local_official',
    geography: {
      county: 'Ilfov',
      basis: 'office',
      note: 'Funcția publică relevantă era în comuna Pantelimon, județul Ilfov.',
    },
    crime: 'Instigare la abuz în serviciu, în forma participației improprii',
    status: 'indicted',
    details:
      'DNA l-a trimis în judecată în noiembrie 2020 în dosarul documentelor de fond funciar din comuna Pantelimon, reținând 61 de acte materiale.',
    verified_at: '2026-05-13',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10048',
      },
    ],
  },
  {
    name: 'Tusac Mihai Claudiu',
    party: 'PSD',
    position: 'Primar al municipiului Mangalia',
    position_type: 'mayor',
    geography: {
      county: 'Constanța',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Mangalia, județul Constanța.',
    },
    crime: 'Conflict de interese, în formă continuată',
    sentence: '1 an închisoare cu suspendare; consecințe penale încetate ulterior prin dezincriminare',
    sentence_years: 1,
    conviction_year: 2017,
    status: 'closed',
    execution_type: 'Cu suspendare',
    details:
      'DNA a consemnat condamnarea definitivă din 15 mai 2017 pentru conflict de interese, iar actualizarea oficială din octombrie 2018 arată că instanța a constatat dezincriminarea și încetarea consecințelor penale.',
    verified_at: '2026-05-13',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=8222',
      },
      {
        label: 'DCNews',
        kind: 'press',
        url: 'https://www.dcnews.ro/primarul-mangaliei-detine-un-apartament-la-bruxelles-si-peste-740-000-de-euro-in-conturi_122176.html',
      },
    ],
  },
  {
    name: 'Lupulescu Livițuc',
    party: 'PNL',
    position: 'Primar al comunei Lunca Cernii de Jos',
    position_type: 'mayor',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția publică relevantă era în comuna Lunca Cernii de Jos, județul Hunedoara.',
    },
    crime:
      'Dare de mită; folosire sau prezentare de documente false pentru obținerea pe nedrept de fonduri europene',
    sentence: 'Proces penal încetat ca urmare a prescripției',
    sentence_years: 0,
    conviction_year: 2025,
    status: 'prescribed',
    details:
      'DNA Alba Iulia l-a trimis în judecată în 2022 în dosarul APIA Lunca Cernii de Jos, iar actualizarea oficială din 25 noiembrie 2025 consemnează încetarea definitivă a procesului penal prin prescripție.',
    verified_at: '2026-05-13',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11711',
      },
      {
        label: 'Mesagerul Hunedorean',
        kind: 'press',
        url: 'https://www.mesagerulhunedorean.ro/lunca-cernii-de-jos-merge-mai-departe-cu-aceeasi-echipa-administrativa/',
      },
    ],
  },
  {
    name: 'Zepa Daniel',
    party: 'PNL',
    position: 'Viceprimar al comunei Lunca Cernii de Jos',
    position_type: 'local_official',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția publică relevantă era în comuna Lunca Cernii de Jos, județul Hunedoara.',
    },
    crime:
      'Dare de mită; folosire sau prezentare de documente false pentru obținerea pe nedrept de fonduri europene',
    sentence: 'Proces penal încetat ca urmare a prescripției',
    sentence_years: 0,
    conviction_year: 2025,
    status: 'prescribed',
    details:
      'DNA Alba Iulia l-a trimis în judecată în 2022 în dosarul APIA Lunca Cernii de Jos, iar actualizarea oficială din 25 noiembrie 2025 consemnează încetarea definitivă a procesului penal prin prescripție.',
    verified_at: '2026-05-13',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=11711',
      },
      {
        label: 'Mesagerul Hunedorean',
        kind: 'press',
        url: 'https://www.mesagerulhunedorean.ro/lunca-cernii-de-jos-merge-mai-departe-cu-aceeasi-echipa-administrativa/',
      },
    ],
  },
  {
    name: 'Ciuhandu Gheorghe-Coriolan',
    party: 'PNȚCD',
    position: 'Primar al municipiului Timișoara',
    position_type: 'mayor',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Timișoara, județul Timiș.',
    },
    crime: 'Abuz în serviciu cu obținere de folos necuvenit, în formă continuată',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2019,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Timișoara l-a condamnat definitiv în noiembrie 2019 în dosarul finanțării clubului Politehnica Timișoara din bugetul local.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10106',
      },
      {
        label: 'DCNews',
        kind: 'press',
        url: 'https://www.dcnews.ro/gheorghe-ciuhandu-renunta-la-candidatura-primariei-timisoara_178752.html',
      },
    ],
  },
  {
    name: 'Cojocari Ioan',
    party: 'Independent',
    position: 'Secretar al Consiliului Local Timișoara',
    position_type: 'local_official',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Timișoara, județul Timiș.',
    },
    crime: 'Abuz în serviciu cu obținere de folos necuvenit',
    sentence: 'Proces penal încetat prin prescripție după condamnarea definitivă inițială la 3 ani cu suspendare',
    sentence_years: 0,
    conviction_year: 2023,
    status: 'prescribed',
    details:
      'DNA a consemnat condamnarea definitivă inițială din noiembrie 2019, iar actualizarea oficială din aprilie 2023 arată că procesul penal a încetat prin prescripție.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10106',
      },
    ],
  },
  {
    name: 'Haracicu Smaranda Maria',
    party: 'Independent',
    position: 'Director al Direcției Economice din cadrul Primăriei Timișoara',
    position_type: 'local_official',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Timișoara, județul Timiș.',
    },
    crime: 'Abuz în serviciu cu obținere de folos necuvenit, în formă continuată',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2019,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Timișoara a condamnat-o definitiv în noiembrie 2019 în dosarul finanțării clubului Politehnica Timișoara din bugetul local.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10106',
      },
    ],
  },
  {
    name: 'Mihalache Violeta-Teodora',
    party: 'Independent',
    position: 'Director al Direcției Comunicare din cadrul Primăriei Timișoara',
    position_type: 'local_official',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Timișoara, județul Timiș.',
    },
    crime: 'Abuz în serviciu cu obținere de folos necuvenit, în formă continuată',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2019,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Timișoara a condamnat-o definitiv în noiembrie 2019 în dosarul finanțării clubului Politehnica Timișoara din bugetul local.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10106',
      },
    ],
  },
  {
    name: 'Dumitru Delia-Ileana',
    party: 'Independent',
    position: 'Consilier juridic în cadrul Primăriei Timișoara',
    position_type: 'local_official',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Timișoara, județul Timiș.',
    },
    crime: 'Abuz în serviciu cu obținere de folos necuvenit',
    status: 'acquitted',
    details:
      'Curtea de Apel Timișoara a dispus achitarea definitivă în noiembrie 2019 în dosarul finanțării clubului Politehnica Timișoara.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10106',
      },
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=6674',
      },
    ],
  },
  {
    name: 'Orza Adrian Romiță',
    party: 'PNȚCD',
    position: 'Viceprimar al municipiului Timișoara',
    position_type: 'local_official',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Timișoara, județul Timiș.',
    },
    crime: 'Complicitate la abuz în serviciu cu obținere de folos necuvenit',
    status: 'acquitted',
    details:
      'Curtea de Apel Timișoara a dispus achitarea definitivă în noiembrie 2019 în dosarul finanțării clubului Politehnica Timișoara.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10106',
      },
      {
        label: 'DCNews',
        kind: 'press',
        url: 'https://www.dcnews.ro/gheorghe-ciuhandu-renunta-la-candidatura-primariei-timisoara_178752.html',
      },
    ],
  },
  {
    name: 'Staia Martin',
    party: 'Independent',
    position: 'Șef Serviciu Administrare Baze Sportive din cadrul Primăriei Timișoara',
    position_type: 'local_official',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Timișoara, județul Timiș.',
    },
    crime: 'Complicitate la abuz în serviciu cu obținere de folos necuvenit',
    status: 'acquitted',
    details:
      'Curtea de Apel Timișoara a dispus achitarea definitivă în noiembrie 2019 în dosarul finanțării clubului Politehnica Timișoara.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10106',
      },
      {
        label: 'Știrile ProTV',
        kind: 'press',
        url: 'https://stirileprotv.ro/stiri/actualitate/fostul-primar-al-timisoarei-gheorghe-ciuhandu-trimis-in-judecata-de-dna-edilul-este-acuzat-de-abuz-in-serviciu.html',
      },
    ],
  },
  {
    name: 'Munteanu Mirel Florin',
    party: 'Independent',
    position: 'Economist în cadrul Direcției Economice a Primăriei Timișoara',
    position_type: 'local_official',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Timișoara, județul Timiș.',
    },
    crime: 'Complicitate la abuz în serviciu cu obținere de folos necuvenit',
    status: 'acquitted',
    details:
      'Curtea de Apel Timișoara a dispus achitarea definitivă în noiembrie 2019 în dosarul finanțării clubului Politehnica Timișoara.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10106',
      },
      {
        label: 'Știrile ProTV',
        kind: 'press',
        url: 'https://stirileprotv.ro/stiri/actualitate/fostul-primar-al-timisoarei-gheorghe-ciuhandu-trimis-in-judecata-de-dna-edilul-este-acuzat-de-abuz-in-serviciu.html',
      },
    ],
  },
  {
    name: 'Pintilie Alina',
    party: 'Independent',
    position: 'Funcționar public în cadrul Primăriei Timișoara',
    position_type: 'local_official',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Timișoara, județul Timiș.',
    },
    crime: 'Complicitate la abuz în serviciu cu obținere de folos necuvenit',
    status: 'acquitted',
    details:
      'Curtea de Apel Timișoara a dispus achitarea definitivă în noiembrie 2019 în dosarul finanțării clubului Politehnica Timișoara.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10106',
      },
      {
        label: 'Știrile ProTV',
        kind: 'press',
        url: 'https://stirileprotv.ro/stiri/actualitate/fostul-primar-al-timisoarei-gheorghe-ciuhandu-trimis-in-judecata-de-dna-edilul-este-acuzat-de-abuz-in-serviciu.html',
      },
    ],
  },
  {
    name: 'Dimitriu Mariana',
    party: 'Independent',
    position: 'Economist în cadrul Direcției Economice a Primăriei Timișoara',
    position_type: 'local_official',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Timișoara, județul Timiș.',
    },
    crime: 'Complicitate la abuz în serviciu cu obținere de folos necuvenit',
    status: 'acquitted',
    details:
      'Curtea de Apel Timișoara a dispus achitarea definitivă în noiembrie 2019 în dosarul finanțării clubului Politehnica Timișoara.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10106',
      },
      {
        label: 'Știrile ProTV',
        kind: 'press',
        url: 'https://stirileprotv.ro/stiri/actualitate/fostul-primar-al-timisoarei-gheorghe-ciuhandu-trimis-in-judecata-de-dna-edilul-este-acuzat-de-abuz-in-serviciu.html',
      },
    ],
  },
  {
    name: 'Miuț Nicușor Constantin',
    party: 'Independent',
    position: 'Director al Direcției Patrimoniu din cadrul Primăriei Timișoara',
    position_type: 'local_official',
    geography: {
      county: 'Timiș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Timișoara, județul Timiș.',
    },
    crime: 'Complicitate la abuz în serviciu cu obținere de folos necuvenit',
    status: 'acquitted',
    details:
      'Curtea de Apel Timișoara a dispus achitarea definitivă în noiembrie 2019 în dosarul finanțării clubului Politehnica Timișoara.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10106',
      },
      {
        label: 'Știrile ProTV',
        kind: 'press',
        url: 'https://stirileprotv.ro/stiri/actualitate/fostul-primar-al-timisoarei-gheorghe-ciuhandu-trimis-in-judecata-de-dna-edilul-este-acuzat-de-abuz-in-serviciu.html',
      },
    ],
  },
  {
    name: 'Moldovan-Verdeș Doina-Adriana',
    party: 'Independent',
    position: 'Șef Serviciu Impozite și Taxe Locale din cadrul Primăriei Reghin',
    position_type: 'local_official',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Reghin, județul Mureș.',
    },
    crime: 'Abuz în serviciu cu obținere de folos necuvenit, în formă continuată',
    sentence: '3 luni închisoare cu suspendare',
    sentence_years: 0.25,
    conviction_year: 2021,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Târgu Mureș a condamnat-o definitiv în august 2021 în dosarul repartizării unor locuințe ANL pentru tineri în municipiul Reghin.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10532',
      },
    ],
  },
  {
    name: 'Badiu Ovidiu-Vasile',
    party: 'Independent',
    position: 'Consilier juridic în cadrul Primăriei Reghin',
    position_type: 'local_official',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Reghin, județul Mureș.',
    },
    crime: 'Abuz în serviciu cu obținere de folos necuvenit, în formă continuată',
    sentence: '1 an închisoare cu suspendare și amendă penală',
    sentence_years: 1,
    conviction_year: 2021,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Târgu Mureș l-a condamnat definitiv în august 2021 în dosarul repartizării unor locuințe ANL pentru tineri în municipiul Reghin.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10532',
      },
    ],
  },
  {
    name: 'Nagy Andras',
    party: 'UDMR',
    position: 'Viceprimar al municipiului Reghin; fost primar al municipiului Reghin',
    position_type: 'mayor',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția publică relevantă era în municipiul Reghin, județul Mureș.',
    },
    crime: 'Abuz în serviciu cu obținere de folos necuvenit, în formă continuată',
    sentence: 'Proces penal încetat prin prescripție după condamnarea definitivă inițială la 6 luni cu suspendare',
    sentence_years: 0,
    conviction_year: 2023,
    status: 'prescribed',
    details:
      'DNA a consemnat condamnarea definitivă inițială din august 2021, iar actualizarea oficială din martie 2023 arată că procesul penal a încetat prin prescripție.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10532',
      },
      {
        label: 'Zi de Zi',
        kind: 'press',
        url: 'https://www.zi-de-zi.ro/2021/03/29/nagy-andras-de-la-primar-la-consilier-pentru-dezvoltarea-reghinului/',
      },
    ],
  },
  {
    name: 'Saghin Virgil',
    party: 'PNL',
    position: 'Primar al comunei Vatra Moldoviței',
    position_type: 'mayor',
    geography: {
      county: 'Suceava',
      basis: 'office',
      note: 'Funcția publică relevantă era în comuna Vatra Moldoviței, județul Suceava.',
    },
    crime: 'Abuz în serviciu cu obținere de folos necuvenit',
    sentence: '3 ani închisoare cu executare',
    sentence_years: 3,
    conviction_year: 2026,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'DNA Iași l-a trimis în judecată în 2021 în dosarul angajărilor și detașărilor către ABA Prut-Bârlad, iar presa locală a consemnat condamnarea definitivă din martie 2026.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10468',
      },
      {
        label: 'Monitorul de Suceava',
        kind: 'press',
        url: 'https://www.monitorulsv.ro/primarul-comunei-vatra-moldovitei-virgil-saghin-condamnat-la-3-ani-de-inchisoare-in-dosarul-angajarilor-de-la-apele-romane_cce346/',
      },
      {
        label: 'VIVA FM',
        kind: 'press',
        url: 'https://vivafm.ro/stire/2026/03/04/primarul-comunei-vatra-moldovitei-condamnat-la-3-ani-de-inchisoare-cu-executare/',
      },
    ],
  },
  {
    name: 'Niga Gabriel',
    party: 'PNL',
    position: 'Viceprimar cu atribuții de primar al comunei Vatra Moldoviței',
    position_type: 'local_official',
    geography: {
      county: 'Suceava',
      basis: 'office',
      note: 'Funcția publică relevantă era în comuna Vatra Moldoviței, județul Suceava.',
    },
    crime: 'Abuz în serviciu cu obținere de folos necuvenit, în formă continuată',
    sentence: '3 ani închisoare cu executare',
    sentence_years: 3,
    conviction_year: 2026,
    status: 'convicted',
    execution_type: 'Cu executare',
    details:
      'DNA Iași l-a trimis în judecată în 2021 în dosarul angajărilor și detașărilor către ABA Prut-Bârlad, iar presa locală a consemnat condamnarea definitivă din martie 2026.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10468',
      },
      {
        label: 'Monitorul de Suceava',
        kind: 'press',
        url: 'https://www.monitorulsv.ro/primarul-comunei-vatra-moldovitei-virgil-saghin-condamnat-la-3-ani-de-inchisoare-in-dosarul-angajarilor-de-la-apele-romane_cce346/',
      },
      {
        label: 'News Romania',
        kind: 'press',
        url: 'https://newsromania.net/justitie/fata-si-pensionarul-animalului-politic-din-pnl-de-la-apele-romane/',
      },
    ],
  },
  {
    name: 'Boca Ana',
    party: 'Independent',
    position: 'Secretar general al comunei Vatra Moldoviței',
    position_type: 'local_official',
    geography: {
      county: 'Suceava',
      basis: 'office',
      note: 'Funcția publică relevantă era în comuna Vatra Moldoviței, județul Suceava.',
    },
    crime:
      'Abuz în serviciu cu obținere de folos necuvenit; complicitate la abuz în serviciu cu obținere de folos necuvenit',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2026,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'DNA Iași a trimis-o în judecată în 2021 în dosarul angajărilor și detașărilor către ABA Prut-Bârlad, iar presa locală a consemnat condamnarea definitivă din martie 2026.',
    verified_at: '2026-05-14',
    sources: [
      {
        label: 'DNA',
        kind: 'official',
        url: 'https://www.dna.ro/comunicat.xhtml?id=10468',
      },
      {
        label: 'Monitorul de Suceava',
        kind: 'press',
        url: 'https://www.monitorulsv.ro/primarul-comunei-vatra-moldovitei-virgil-saghin-condamnat-la-3-ani-de-inchisoare-in-dosarul-angajarilor-de-la-apele-romane_cce346/',
      },
    ],
  },
  {
    name: 'Lungu Ilie',
    party: 'PNL',
    position: 'Primar al orașului Salcea',
    position_type: 'mayor',
    geography: SALCEA_EXAM_GEOGRAPHY,
    crime: 'Cumpărare de influență și dare de mită, în formă continuată',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2023,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Suceava l-a condamnat definitiv în aprilie 2023 în dosarul fraudării tezelor fiului său la Evaluarea Națională.',
    verified_at: '2026-05-15',
    sources: [...SALCEA_EXAM_SOURCES, SALCEA_LUNGU_PARTY_SOURCE],
  },
  {
    name: 'Zettel Nicoleta',
    party: 'Independent',
    position: 'Director al Școlii Gimnaziale „Cristofor Simionescu” Plopeni',
    position_type: 'local_official',
    geography: SALCEA_EXAM_GEOGRAPHY,
    crime: 'Luare de mită și complicitate la sustragerea sau distrugerea de înscrisuri',
    sentence: '2 ani și 4 luni închisoare cu suspendare',
    sentence_years: 2.33,
    conviction_year: 2023,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Suceava a condamnat-o definitiv în aprilie 2023 în dosarul fraudării tezelor de la Evaluarea Națională din Salcea.',
    verified_at: '2026-05-15',
    sources: SALCEA_EXAM_SOURCES,
  },
  {
    name: 'Gîză Mihai',
    party: 'PSD',
    position: 'Consilier local al orașului Salcea; profesor de matematică la Școala Gimnazială „Cristofor Simionescu” Plopeni',
    position_type: 'local_official',
    geography: SALCEA_EXAM_GEOGRAPHY,
    crime:
      'Trafic de influență, complicitate la dare de mită și instigare la sustragerea sau distrugerea de înscrisuri în formă continuată',
    sentence: '2 ani și 10 luni închisoare cu suspendare',
    sentence_years: 2.83,
    conviction_year: 2023,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Suceava l-a condamnat definitiv în aprilie 2023 în dosarul fraudării tezelor de la Evaluarea Națională din Salcea.',
    verified_at: '2026-05-15',
    sources: [...SALCEA_EXAM_SOURCES, SALCEA_GIZA_PARTY_SOURCE],
  },
  {
    name: 'Folea Adriana Simona',
    party: 'Independent',
    position: 'Contabil în cadrul Primăriei Comunei Sâmbăta de Sus',
    position_type: 'local_official',
    geography: SAMBATA_DE_SUS_GEOGRAPHY,
    crime: 'Abuz în serviciu cu obținerea unui avantaj patrimonial sau nepatrimonial, în formă continuată',
    sentence: '2 ani și 8 luni închisoare cu suspendare',
    sentence_years: 2.67,
    conviction_year: 2022,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Brașov a condamnat-o definitiv în mai 2022 în dosarul prejudicierii UAT Sâmbăta de Sus prin neplata impozitului pe clădiri.',
    verified_at: '2026-05-15',
    sources: [SAMBATA_DE_SUS_DNA_SOURCE],
  },
  {
    name: 'Andreaș Elena',
    party: 'Independent',
    position: 'Administrator al SC Florirex SRL',
    position_type: 'other',
    geography: SAMBATA_DE_SUS_GEOGRAPHY,
    crime: 'Complicitate la abuz în serviciu cu obținerea unui avantaj patrimonial sau nepatrimonial, în formă continuată',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2022,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Brașov a condamnat-o definitiv în mai 2022 în dosarul prejudicierii UAT Sâmbăta de Sus prin neplata impozitului pe clădiri.',
    verified_at: '2026-05-15',
    sources: [SAMBATA_DE_SUS_DNA_SOURCE],
  },
  {
    name: 'Antinie Andreea',
    party: 'Independent',
    position: 'Administrator al SC Antada Com SRL',
    position_type: 'other',
    geography: SAMBATA_DE_SUS_GEOGRAPHY,
    crime: 'Complicitate la abuz în serviciu cu obținerea unui avantaj patrimonial sau nepatrimonial, în formă continuată',
    sentence: '2 ani și 9 luni închisoare cu suspendare',
    sentence_years: 2.75,
    conviction_year: 2022,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Brașov a condamnat-o definitiv în mai 2022 în dosarul prejudicierii UAT Sâmbăta de Sus prin neplata impozitului pe clădiri.',
    verified_at: '2026-05-15',
    sources: [SAMBATA_DE_SUS_DNA_SOURCE],
  },
  {
    name: 'Lorinț Petru',
    party: 'PSD',
    position: 'Primar al comunei Domașnea',
    position_type: 'mayor',
    geography: DOMASNEA_APIA_GEOGRAPHY,
    crime:
      'Folosire sau prezentare cu rea-credință de documente false ori inexacte pentru obținerea pe nedrept de fonduri europene, în formă continuată; fals intelectual; uz de fals',
    sentence: '2 ani și 9 luni închisoare cu suspendare',
    sentence_years: 2.75,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Timișoara l-a condamnat definitiv în aprilie 2018 în dosarul APIA privind pajiștile alpine ale comunei Domașnea.',
    verified_at: '2026-05-15',
    sources: [DOMASNEA_DNA_SOURCE, DOMASNEA_LORINT_PARTY_SOURCE],
  },
  {
    name: 'Benghia Zărie',
    party: 'Independent',
    position: 'Persoană fizică implicată în dosarul APIA Domașnea',
    position_type: 'other',
    geography: DOMASNEA_APIA_GEOGRAPHY,
    crime:
      'Complicitate la folosire sau prezentare cu rea-credință de documente false ori inexacte pentru obținerea pe nedrept de fonduri europene, în formă continuată',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Timișoara l-a condamnat definitiv în aprilie 2018 în dosarul APIA privind pajiștile alpine ale comunei Domașnea.',
    verified_at: '2026-05-15',
    sources: [DOMASNEA_DNA_SOURCE],
  },
  {
    name: 'Românu Ioan',
    party: 'Independent',
    position: 'Persoană fizică implicată în dosarul APIA Domașnea',
    position_type: 'other',
    geography: DOMASNEA_APIA_GEOGRAPHY,
    crime:
      'Complicitate la folosire sau prezentare cu rea-credință de documente false ori inexacte pentru obținerea pe nedrept de fonduri europene, în formă continuată',
    sentence: '2 ani închisoare cu suspendare',
    sentence_years: 2,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Timișoara l-a condamnat definitiv în aprilie 2018 în dosarul APIA privind pajiștile alpine ale comunei Domașnea.',
    verified_at: '2026-05-15',
    sources: [DOMASNEA_DNA_SOURCE],
  },
  {
    name: 'Cloșan Cornelia',
    party: 'Independent',
    position: 'Bibliotecar la Primăria Domașnea',
    position_type: 'local_official',
    geography: DOMASNEA_APIA_GEOGRAPHY,
    crime:
      'Fals în înscrisuri sub semnătură privată și participație improprie la fals în înscrisuri sub semnătură privată, în formă continuată',
    sentence: '1 an închisoare cu suspendare',
    sentence_years: 1,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Curtea de Apel Timișoara a condamnat-o definitiv în aprilie 2018 în dosarul APIA privind pajiștile alpine ale comunei Domașnea.',
    verified_at: '2026-05-15',
    sources: [DOMASNEA_DNA_SOURCE],
  },
  {
    name: 'Barbălată Romică',
    party: 'Independent',
    position: 'Asociat și administrator al SC Agroind Gorban SRL',
    position_type: 'other',
    geography: GORBAN_APIA_GEOGRAPHY,
    crime:
      'Folosire sau prezentare de documente ori declarații false pentru obținerea pe nedrept de fonduri europene; spălare de bani',
    sentence: '3 ani închisoare cu suspendare',
    sentence_years: 3,
    conviction_year: 2018,
    status: 'convicted',
    execution_type: 'Cu suspendare',
    details:
      'Înalta Curte de Casație și Justiție l-a condamnat definitiv în decembrie 2018 în dosarul APIA Gorban.',
    verified_at: '2026-05-15',
    sources: [GORBAN_DNA_SOURCE],
  },
  {
    name: 'Petre Marian-Leonard',
    party: 'PSDI',
    position: 'Director general al S.C. Economat Sector 5 S.R.L.',
    position_type: 'other',
    geography: ECONOMAT_SECTOR_5_GEOGRAPHY,
    crime:
      'Constituire a unui grup infracțional organizat; abuz în serviciu cu consecințe deosebit de grave; complicitate și participație improprie la abuz în serviciu',
    status: 'indicted',
    details:
      'DNA l-a trimis în judecată la 5 mai 2026 în dosarul achizițiilor pretins supraevaluate derulate prin S.C. Economat Sector 5 S.R.L., cu un prejudiciu estimat de peste 120 milioane lei.',
    verified_at: '2026-05-19',
    sources: [ECONOMAT_SECTOR_5_DNA_SOURCE, ECONOMAT_SECTOR_5_PSDI_SOURCE],
  },
  {
    name: 'Rămulescu Floricica-Carmen',
    party: 'Independent',
    position: 'Director achiziții în cadrul S.C. Economat Sector 5 S.R.L.',
    position_type: 'other',
    geography: ECONOMAT_SECTOR_5_GEOGRAPHY,
    crime:
      'Complicitate la abuz în serviciu cu consecințe deosebit de grave, în formă continuată',
    status: 'indicted',
    details:
      'DNA a trimis-o în judecată la 5 mai 2026 în dosarul Economat Sector 5, reținând că ar fi sprijinit achiziții publice la prețuri pretins supraevaluate.',
    verified_at: '2026-05-19',
    sources: [ECONOMAT_SECTOR_5_DNA_SOURCE],
  },
  {
    name: 'Dabija Georgeta',
    party: 'Independent',
    position: 'Cenzor al S.C. Economat Sector 5 S.R.L.',
    position_type: 'other',
    geography: ECONOMAT_SECTOR_5_GEOGRAPHY,
    crime: 'Abuz în serviciu în formă continuată',
    status: 'indicted',
    details:
      'DNA a trimis-o în judecată la 5 mai 2026 în dosarul Economat Sector 5, reținând omisiuni de verificare și semnalare a neregulilor privind plățile și achizițiile.',
    verified_at: '2026-05-19',
    sources: [ECONOMAT_SECTOR_5_DNA_SOURCE],
  },
  {
    name: 'Lupașcu Marian',
    party: 'Independent',
    position: 'Director general al S.C. Amenajare Edilitară și Salubrizare S.A.',
    position_type: 'other',
    geography: ECONOMAT_SECTOR_5_GEOGRAPHY,
    crime: 'Abuz în serviciu cu consecințe deosebit de grave, în formă continuată',
    status: 'indicted',
    details:
      'DNA l-a trimis în judecată la 5 mai 2026 în dosarul Economat Sector 5, pentru achiziții pretins supraevaluate derulate prin societatea municipală pe care o conducea.',
    verified_at: '2026-05-19',
    sources: [ECONOMAT_SECTOR_5_DNA_SOURCE],
  },
  {
    name: 'Zidărescu Loredana Ionela',
    party: 'PSDI',
    position:
      'Șef Serviciu Achiziții, ulterior director Investiții și Achiziții în cadrul S.C. Amenajare Edilitară și Salubrizare S.A.',
    position_type: 'other',
    geography: ECONOMAT_SECTOR_5_GEOGRAPHY,
    crime:
      'Complicitate la abuz în serviciu cu consecințe deosebit de grave, în formă continuată',
    status: 'indicted',
    details:
      'DNA a trimis-o în judecată la 5 mai 2026 în dosarul Economat Sector 5, susținând că ar fi întocmit documentații care creau aparența unor proceduri de achiziție directă offline.',
    verified_at: '2026-05-19',
    sources: [ECONOMAT_SECTOR_5_DNA_SOURCE, ECONOMAT_SECTOR_5_PSDI_SOURCE],
  },
  {
    name: 'Antonescu Vincențiu-Daniel',
    party: 'PSDI',
    position: 'Director general al Administrației Domeniului Public Sector 5',
    position_type: 'local_official',
    geography: ECONOMAT_SECTOR_5_GEOGRAPHY,
    crime: 'Abuz în serviciu în formă continuată',
    status: 'indicted',
    details:
      'DNA l-a trimis în judecată la 5 mai 2026 în dosarul Economat Sector 5, legat de achiziții publice pretins supraevaluate realizate prin entități ale administrației locale.',
    verified_at: '2026-05-19',
    sources: [ECONOMAT_SECTOR_5_DNA_SOURCE, PSDI_2019_EUROPARLAMENTARE_SOURCE],
  },
  {
    name: 'Lăzărescu Paul-Alexandru',
    party: 'PSDI',
    position: 'Director general al Administrației Piețelor Sector 5',
    position_type: 'local_official',
    geography: ECONOMAT_SECTOR_5_GEOGRAPHY,
    crime: 'Abuz în serviciu în formă continuată',
    status: 'indicted',
    details:
      'DNA l-a trimis în judecată la 5 mai 2026 în dosarul Economat Sector 5, legat de achiziții publice pretins supraevaluate realizate prin entități ale administrației locale.',
    verified_at: '2026-05-19',
    sources: [ECONOMAT_SECTOR_5_DNA_SOURCE, PSDI_2019_EUROPARLAMENTARE_SOURCE],
  },
  {
    name: 'Stoica Mariana',
    party: 'Independent',
    position: 'Director general al Centrului Cultural și de Tineret „Ștefan Iordache”',
    position_type: 'local_official',
    geography: ECONOMAT_SECTOR_5_GEOGRAPHY,
    crime: 'Abuz în serviciu în formă continuată',
    status: 'indicted',
    details:
      'DNA a trimis-o în judecată la 5 mai 2026 în dosarul Economat Sector 5, legat de achiziții publice pretins supraevaluate realizate prin entități ale administrației locale.',
    verified_at: '2026-05-19',
    sources: [ECONOMAT_SECTOR_5_DNA_SOURCE],
  },
  {
    name: 'Sălăvăstru Valerian',
    party: 'UNPR',
    position: 'Director general al Direcției de Impozite și Taxe Locale Sector 5',
    position_type: 'local_official',
    geography: ECONOMAT_SECTOR_5_GEOGRAPHY,
    crime: 'Abuz în serviciu',
    status: 'indicted',
    details:
      'DNA l-a trimis în judecată la 5 mai 2026 în dosarul Economat Sector 5, legat de achiziții publice pretins supraevaluate realizate prin entități ale administrației locale.',
    verified_at: '2026-05-19',
    sources: [ECONOMAT_SECTOR_5_DNA_SOURCE, SALAVASTRU_UNPR_SOURCE],
  },
  {
    name: 'Pintea Adrian',
    party: 'PSD',
    position: 'Secretar de stat în Ministerul Agriculturii și Dezvoltării Rurale',
    position_type: 'secretary_of_state',
    geography: MADR_FITOSANITAR_GEOGRAPHY,
    crime:
      'Instigare la abuz în serviciu cu obținere de foloase necuvenite pentru altul, în formă continuată',
    status: 'investigated',
    details:
      'DNA Suceava a dispus în mai 2026 punerea în mișcare a acțiunii penale, susținând că ar fi determinat transferul pretins nelegal al unei persoane de la Camera Deputaților la Autoritatea Națională Fitosanitară și apoi la OJF Botoșani.',
    verified_at: '2026-05-19',
    sources: [MADR_FITOSANITAR_DNA_SOURCE, ADRIAN_PINTEA_PARTY_SOURCE],
  },
  {
    name: 'Șoldea Romeo',
    party: 'PSD',
    position: 'Director general al Autorității Naționale Fitosanitare',
    position_type: 'other',
    geography: MADR_FITOSANITAR_GEOGRAPHY,
    crime: 'Abuz în serviciu cu obținere de foloase necuvenite pentru altul, în formă continuată',
    status: 'investigated',
    details:
      'DNA Suceava a dispus în mai 2026 punerea în mișcare a acțiunii penale, susținând că ar fi aprobat transferul și mutarea pretins nelegală a unui funcționar public în cadrul Autorității Naționale Fitosanitare.',
    verified_at: '2026-05-19',
    sources: [MADR_FITOSANITAR_DNA_SOURCE, SOLDEA_PSD_SUPPORT_SOURCE],
  },
  {
    name: 'Popovici Florin Mădălin',
    party: 'PSD',
    position: 'Viceprimar al comunei Sârbi',
    position_type: 'local_official',
    geography: SARBI_ISCTR_GEOGRAPHY,
    crime:
      'Complicitate la dare de mită; efectuare de operațiuni financiare incompatibile cu funcția publică',
    status: 'indicted',
    details:
      'DNA Cluj l-a trimis în judecată în martie 2024 în dosarul ISCTR privind divulgarea de informații despre controale rutiere și protejarea unor operatori de transport.',
    verified_at: '2026-05-19',
    sources: [SARBI_ISCTR_DNA_SOURCE, SARBI_PARTY_SOURCE],
  },
  {
    name: 'Bobeș Laura',
    party: 'Independent',
    position: 'Șef al Serviciului Resurse Umane din cadrul Primăriei Constanța',
    position_type: 'local_official',
    geography: CONSTANTA_SECRETAR_CONTEST_GEOGRAPHY,
    crime:
      'Folosirea de informații ce nu sunt destinate publicității ori permiterea accesului unor persoane neautorizate la aceste informații',
    sentence: '1 an închisoare cu amânarea aplicării pedepsei',
    sentence_years: 1,
    conviction_year: 2024,
    status: 'convicted',
    execution_type: 'Amânarea aplicării pedepsei',
    details:
      'Tribunalul Constanța a admis definitiv, prin neapelare în aprilie 2024, acordul de recunoaștere a vinovăției în dosarul concursului pentru funcția de secretar general al municipiului Constanța.',
    verified_at: '2026-05-19',
    sources: [CONSTANTA_SECRETAR_CONTEST_DNA_SOURCE, CONSTANTA_SECRETAR_CONTEST_INITIAL_DNA_SOURCE],
  },
  {
    name: 'Călin Viorela Mirabela',
    party: 'Independent',
    position:
      'Funcționar public delegat în funcția de secretar al Primăriei municipiului Constanța',
    position_type: 'local_official',
    geography: CONSTANTA_SECRETAR_CONTEST_GEOGRAPHY,
    crime:
      'Complicitate la folosirea de informații ce nu sunt destinate publicității ori permiterea accesului unor persoane neautorizate la aceste informații',
    sentence: '1 an închisoare cu amânarea aplicării pedepsei',
    sentence_years: 1,
    conviction_year: 2024,
    status: 'convicted',
    execution_type: 'Amânarea aplicării pedepsei',
    details:
      'Tribunalul Constanța a admis definitiv, prin neapelare în aprilie 2024, acordul de recunoaștere a vinovăției în dosarul concursului pentru funcția de secretar general al municipiului Constanța.',
    verified_at: '2026-05-19',
    sources: [CONSTANTA_SECRETAR_CONTEST_DNA_SOURCE, CONSTANTA_SECRETAR_CONTEST_INITIAL_DNA_SOURCE],
  },
  {
    name: 'Morega Costel Cosmin',
    party: 'PSD',
    position: 'Primar al municipiului Motru, județul Gorj',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ; folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2024 un conflict de interese administrativ și a sesizat Parchetul de pe lângă ÎCCJ privind indicii de folosire a funcției pentru favorizarea unor persoane, după semnarea unor autorizații de construire în 2022 și 2024.',
    verified_at: '2026-05-21',
    geography: {
      county: 'Gorj',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al municipiului Motru, județul Gorj.',
    },
    sources: [
      ANI_DEC_2024_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Primăria Motru',
        kind: 'official',
        url: 'https://primariamotru.ro/primaria/primar/',
      },
    ],
  },
  {
    name: 'Strîmbu Florin',
    party: 'PNL',
    position: 'Fost consilier local al comunei Rădăuți-Prut, județul Botoșani',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2024 că, în mandatul de consilier local 2020-2024, a participat la deliberarea și adoptarea unor hotărâri privind concesionarea unui teren pe care ulterior l-a contractat cu Primăria Rădăuți-Prut.',
    verified_at: '2026-05-21',
    geography: {
      county: 'Botoșani',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Rădăuți-Prut, județul Botoșani.',
    },
    sources: [
      ANI_DEC_2024_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_botosani/consiliul-local/radauti-prut/1',
      },
    ],
  },
  {
    name: 'Fugaru Ion',
    party: 'PUSL',
    position: 'Fost consilier local al orașului Târgu Cărbunești, județul Gorj',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2024 că, în mandatul de consilier local 2020-2024, societatea la care fiul său deținea funcții și calități a încheiat contracte de furnizare cu Primăria Târgu Cărbunești și cu spitalul local.',
    verified_at: '2026-05-21',
    geography: {
      county: 'Gorj',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al orașului Târgu Cărbunești, județul Gorj.',
    },
    sources: [
      ANI_DEC_2024_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_gorj/consiliul-local/targu-carbunesti/1',
      },
    ],
  },
  {
    name: 'Deaconescu Marian-Viorel',
    party: 'PSD',
    position: 'Fost consilier local al comunei Fărcaș, județul Dolj',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2024 că, în mandatul de consilier local 2020-2024, a participat la adoptarea unei hotărâri privind organigrama aparatului primarului, după care a exercitat o funcție contractuală de execuție în acel aparat.',
    verified_at: '2026-05-21',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Fărcaș, județul Dolj.',
    },
    sources: [
      ANI_DEC_2024_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_dolj/consiliul-local/farcas/',
      },
    ],
  },
  {
    name: 'Gogoi Ion',
    party: 'PSD',
    position: 'Consilier local al municipiului Roșiorii de Vede, județul Teleorman',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2025 că, în perioada 2 noiembrie 2022 - 24 aprilie 2024, a exercitat simultan calitatea de membru titular în Consiliul de administrație al Spitalului Municipal Caritas Roșiorii de Vede și funcții în organele de conducere ale unui partid politic.',
    verified_at: '2026-05-21',
    geography: {
      county: 'Teleorman',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Roșiorii de Vede, județul Teleorman.',
    },
    sources: [
      ANI_FEB_2025_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Primăria Roșiorii de Vede',
        kind: 'official',
        url: 'https://www.primariarosioriidevede.ro/ro/component/content/article/10-all/650-consiliul-local-2024-2028?Itemid=101',
      },
    ],
  },
  {
    name: 'Lupulescu Ciprian',
    party: 'USR',
    position: 'Consilier local al orașului Lipova, județul Arad',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2025 că, în perioada 28 ianuarie 2021 - 9 martie 2022, a exercitat simultan funcții în Consiliul de administrație al Spitalului Orășenesc Lipova și în organele de conducere ale unui partid politic.',
    verified_at: '2026-05-21',
    geography: {
      county: 'Arad',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al orașului Lipova, județul Arad.',
    },
    sources: [
      ANI_FEB_2025_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_arad/consiliul-local/lipova/4',
      },
    ],
  },
  {
    name: 'Chelaru Larisa Mihaela',
    party: 'PSD',
    position: 'Consilier local al orașului Târgu Frumos, județul Iași',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2025 că, în mandatul de consilier local, a participat la deliberarea și adoptarea unei hotărâri privind desemnarea reprezentanților în comisia de interviu a unui concurs de recrutare, concurs la care ulterior a participat și a fost declarată admisă.',
    verified_at: '2026-05-21',
    geography: {
      county: 'Iași',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al orașului Târgu Frumos, județul Iași.',
    },
    sources: [
      ANI_FEB_2025_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_iasi/consiliul-local/targu-frumos/',
      },
    ],
  },
  {
    name: 'Rusu Sorin-Ilie',
    party: 'PNL',
    position: 'Consilier local al comunei Mișca, județul Arad',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2025 că, în mandatul de consilier local, a participat la adoptarea unor hotărâri privind închirierea unor terenuri ale comunei Mișca, după care a încheiat contracte de închiriere și a obținut venituri APIA de 64.582,29 lei.',
    verified_at: '2026-05-21',
    geography: {
      county: 'Arad',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Mișca, județul Arad.',
    },
    sources: [
      ANI_FEB_2025_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Comuna Mișca',
        kind: 'official',
        url: 'https://misca.ro/2024/11/27/componenta-consiliului-local/',
      },
    ],
  },
  {
    name: 'Măcrineanu Ana Cornelia',
    party: 'PNL',
    position: 'Primar al comunei Viziru, județul Brăila',
    position_type: 'mayor',
    crime: 'Incompatibilitate; conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2025 că s-a aflat în incompatibilitate în perioada 8 iulie 2021 - 3 mai 2022, iar anterior constatase și un conflict de interese administrativ legat de emiterea unei dispoziții prin care a beneficiat de o sumă acordată unor angajați ai aparatului de specialitate.',
    verified_at: '2026-05-21',
    geography: {
      county: 'Brăila',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Viziru, județul Brăila.',
    },
    sources: [
      ANI_APR_2025_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Pro Brăila',
        kind: 'press',
        url: 'https://probr.ro/pnl-braila-are-incepand-de-astazi-doi-deputati-prin-venirea-deputatului-george-paladi-iar-doi-primari-alesi-pe-listele-psd-au-anuntat-ca-vor-candida-din-partea-liberalilor-in-2024/',
      },
    ],
  },
  {
    name: 'Bobârnat Radu',
    party: 'PNL',
    position: 'Consilier local al municipiului Huși, județul Vaslui',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2025 că, în două intervale din 2024, a exercitat simultan calitatea de membru în Consiliul de administrație al Spitalului Municipal Dimitrie Castroian Huși și calitatea de membru în organele de conducere ale unui partid politic.',
    verified_at: '2026-05-21',
    geography: {
      county: 'Vaslui',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Huși, județul Vaslui.',
    },
    sources: [
      ANI_APR_2025_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Vremea Nouă',
        kind: 'press',
        url: 'https://www.vremeanoua.ro/social-democratii-de-la-husi-si-au-completat-cu-supleanti-mandatele-din-noul-consiliu-local/',
      },
    ],
  },
  {
    name: 'Damian Constantin',
    party: 'PSD',
    position: 'Consilier local al comunei Agăș, județul Bacău',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2025 că, în mandatul de consilier local, Primăria Agăș a încheiat două contracte cu societatea comercială în care persoana evaluată deține calitatea de asociat unic și administrator.',
    verified_at: '2026-05-21',
    geography: {
      county: 'Bacău',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Agăș, județul Bacău.',
    },
    sources: [
      ANI_APR_2025_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_bacau/consiliul-local/agas/',
      },
    ],
  },
  {
    name: 'Pușcă Vasile',
    party: 'PNL',
    position: 'Consilier local și fost primar al comunei Valea Lungă, județul Alba',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2025 că, în mandatul de consilier local, a inițiat și a participat la adoptarea unei hotărâri privind denunțarea unui contract de asistență juridică, hotărâre care putea produce un folos material pentru sine.',
    verified_at: '2026-05-21',
    geography: {
      county: 'Alba',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Valea Lungă, județul Alba.',
    },
    sources: [
      ANI_APR_2025_LOCAL_OFFICIALS_SOURCE,
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2020/candidati_alba/consiliul-local/valea-lunga/',
      },
    ],
  },
  {
    name: 'Miclău Cristian',
    party: 'PNL',
    position: 'Fost primar al orașului Băile Herculane, județul Caraș-Severin',
    position_type: 'mayor',
    crime: 'Folosirea funcției pentru favorizarea unor persoane',
    status: 'investigated',
    details:
      'ANI a sesizat în decembrie 2025 Parchetul de pe lângă Tribunalul Caraș-Severin, susținând că, în mandatul de primar, ar fi inițiat și susținut acte prin care orașul nu și-a exercitat dreptul de preempțiune asupra unui imobil monument istoric cumpărat ulterior de părinții săi.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Caraș-Severin',
      basis: 'office',
      note: 'Funcția publică relevantă era cea de primar al orașului Băile Herculane, județul Caraș-Severin.',
    },
    sources: [
      ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Primăria Băile-Herculane',
        kind: 'official',
        url: 'https://primaria.baile-herculane.ro/administratie/primaria/',
      },
      {
        label: 'AGERPRES',
        kind: 'press',
        url: 'https://agerpres.ro/justitie/2025/12/10/fost-primar-din-baile-herculane-reclamat-la-parchet-pentru-ca-si-a-favorizat-parintii-in-afaceri-imo--1510621',
      },
    ],
  },
  {
    name: 'Popa Gabriel',
    party: 'PNL',
    position: 'Primar al comunei Albeștii de Argeș, județul Argeș',
    position_type: 'mayor',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în mandatul 2020-2024, ar fi emis trei acte administrative prin care primăria a achiziționat servicii de găzduire pentru site-ul său personal, în valoare de 1.500 lei.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Argeș',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de primar al comunei Albeștii de Argeș, județul Argeș.',
    },
    sources: [
      ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'CJ Argeș',
        kind: 'official',
        url: 'https://www.cjarges.ro/web/albestii-de-arges/prezentare',
      },
      {
        label: 'Ziarul Argeșul',
        kind: 'press',
        url: 'https://ziarulargesul.ro/rezultate-finale-harta-alegerilor-in-arges/',
      },
    ],
  },
  {
    name: 'Botu Daniela',
    party: 'USR',
    position: 'Consilier local al comunei Sadova, județul Dolj',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în perioada 18 decembrie 2024 - 26 septembrie 2025, ar fi exercitat simultan funcția de consilier local și o funcție contractuală de execuție în aparatul de specialitate al primarului comunei Sadova.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Dolj',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de consilier local al comunei Sadova, județul Dolj.',
    },
    sources: [
      ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Primăria Sadova',
        kind: 'official',
        url: 'https://www.primariasadova.ro/autoritatile-publice-locale/consiliul-local/',
      },
      {
        label: 'Ziare.com',
        kind: 'press',
        url: 'https://ziare.com/alegeri/alegeri-locale-2024/candidati_dolj/consiliul-local/sadova/1',
      },
    ],
  },
  {
    name: 'Márton János',
    party: 'UDMR',
    position: 'Fost consilier local al comunei Zagon, județul Covasna',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în decembrie 2025 că, în mandatul 2020-2024, ar fi exercitat simultan funcția de consilier local și o funcție contractuală de execuție în aparatul de specialitate al primarului comunei Zagon.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Covasna',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Zagon, județul Covasna.',
    },
    sources: [
      ANI_DEC_2025_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Comuna Zagon',
        kind: 'official',
        url: 'https://comunazagon.info/index.php/hu/helyi-tanacs/a-helyi-tanacs-osszetetele',
      },
    ],
  },
  {
    name: 'Enescu Răzvan',
    party: 'USR',
    position:
      'Reprezentant al Consiliului Local Ploiești în Consiliul de administrație al Spitalului de Pediatrie Ploiești',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2026 că, în perioada 27 iulie 2024 - 21 februarie 2025, ar fi exercitat simultan calitatea de membru în Consiliul de administrație al Spitalului de Pediatrie Ploiești și o funcție de conducere în cadrul unui partid politic - filiala Prahova.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era legată de Consiliul Local al municipiului Ploiești, județul Prahova.',
    },
    sources: [
      ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Primăria Ploiești',
        kind: 'official',
        url: 'https://ploiesti.ro/administratie/consiliul-local/consilieri-locali/',
      },
    ],
  },
  {
    name: 'Petruț Țiculescu Silvian-Cătălin',
    party: 'PNL',
    position:
      'Reprezentant al Consiliului Local Târgu Lăpuș în Consiliul de administrație al Spitalului Orășenesc Târgu Lăpuș',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2026 că, în perioada 22 decembrie 2022 - 22 decembrie 2025, ar fi exercitat simultan calitatea de membru în Consiliul de administrație al spitalului și funcția de membru în biroul politic local al PNL Târgu Lăpuș.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Maramureș',
      basis: 'office',
      note: 'Funcția publică relevantă era legată de Consiliul Local al orașului Târgu Lăpuș, județul Maramureș.',
    },
    sources: [
      ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Maramureș NonStop',
        kind: 'press',
        url: 'https://maramuresnonstop.ro/doi-maramureseni-vizati-de-ani-pentru-incompatibilitate-gabriel-stetco-pnl-pe-lista-agentiei/',
      },
    ],
  },
  {
    name: 'Ștețco Gabriel Bogdan',
    party: 'PNL',
    position:
      'Reprezentant al Consiliului Județean Maramureș în Consiliul de administrație al Spitalului Județean de Urgență Baia Mare',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2026 că, în perioada 28 mai 2021 - 30 august 2023, ar fi exercitat simultan calitatea de membru titular în Consiliul de administrație al spitalului și funcția de președinte al organizației de tineret a unui partid politic din județul Maramureș.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Maramureș',
      basis: 'office',
      note: 'Funcția publică relevantă era legată de Consiliul Județean Maramureș.',
    },
    sources: [
      ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Consiliul Județean Maramureș',
        kind: 'official',
        url: 'https://www.cjmaramures.ro/judetul-maramures/turism/hotararea-nr-124-din-24-04-2025',
      },
      {
        label: 'Gazeta de Maramureș',
        kind: 'press',
        url: 'https://www.gazetademaramures.ro/judetul-maramures-da-un-secretar-de-stat-in-ministerul-economiei-28143',
      },
    ],
  },
  {
    name: 'Ilea Sorin',
    party: 'PSD',
    position:
      'Reprezentant al Consiliului Local Hunedoara în Consiliul de administrație al Spitalului Municipal Dr. Alexandru Simionescu Hunedoara',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2026 că, începând cu 19 august 2022, ar fi exercitat simultan funcția de membru în Consiliul de administrație al spitalului și o funcție de conducere într-o organizație locală a unui partid politic.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Hunedoara',
      basis: 'office',
      note: 'Funcția publică relevantă era legată de Consiliul Local al municipiului Hunedoara, județul Hunedoara.',
    },
    sources: [
      ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Primăria Hunedoara',
        kind: 'official',
        url: 'https://www.primariahunedoara.ro/ro/pagina/consiliul-local/componenta-consiliului-local',
      },
      {
        label: 'Spitalul Municipal Hunedoara',
        kind: 'official',
        url: 'https://www.sphd.ro/conducere',
      },
    ],
  },
  {
    name: 'Oltean Dorel',
    party: 'PMP',
    position:
      'Fost reprezentant al Consiliului Local Năsăud în Consiliul de administrație al Spitalului Orășenesc Dr. George Trifon Năsăud',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în mai 2026 că, în perioada 25 noiembrie 2021 - 18 martie 2024, ar fi deținut simultan calitatea de membru supleant în Consiliul de administrație al spitalului și o funcție de conducere într-o organizație locală a unui partid politic.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Bistrița-Năsăud',
      basis: 'office',
      note: 'Funcția publică relevantă era legată de Consiliul Local al orașului Năsăud, județul Bistrița-Năsăud.',
    },
    sources: [
      ANI_MAY_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Spitalul Năsăud',
        kind: 'official',
        url: 'https://spitalnasaud.ro/?page_id=4121',
      },
      {
        label: 'Gazeta de Bistrița',
        kind: 'press',
        url: 'https://gazetadebistrita.ro/dorel-oltean-a-lasat-alde-pentru-pmp-mare-parte-din-organizatia-locala-nasaudeana-il-urmeaza/',
      },
    ],
  },
  {
    name: 'Simionescu Radu-Alexandru',
    party: 'PNL',
    position:
      'Fost membru în Consiliul de administrație al Spitalului de Pediatrie Ploiești',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2026 că, în perioada 28 februarie 2024 - 27 noiembrie 2024, ar fi exercitat simultan calitatea de membru în Consiliul de administrație al Spitalului de Pediatrie Ploiești și funcții de conducere în structuri politice locale, județene și naționale.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Prahova',
      basis: 'office',
      note: 'Funcția publică relevantă era legată de Spitalul de Pediatrie Ploiești, județul Prahova.',
    },
    sources: [
      ANI_APR_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Telegrama',
        kind: 'press',
        url: 'https://telegrama.ro/article/fost-consilier-local-din-ploiesti-declarat-incompatibil-de-ani',
      },
    ],
  },
  {
    name: 'Furtună Dan Gabriel',
    party: 'PSD',
    position: 'Fost consilier local al comunei Tătăranu, județul Vrancea',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2026 că, în mandatul 2020-2024, societatea comercială pe care o administra și care fusese înființată de Consiliul Local Tătăranu ar fi încheiat două contracte de prestări servicii cu UAT Comuna Tătăranu, în valoare totală de 2.222.197,28 lei.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Vrancea',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al comunei Tătăranu, județul Vrancea.',
    },
    sources: [
      ANI_APR_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Digi24',
        kind: 'press',
        url: 'https://www.digi24.ro/stiri/actualitate/politica/cat-costa-o-zi-la-coasa-in-2023-la-claca-pe-filiera-de-partid-cu-bani-de-la-bugetul-de-stat-2457345',
      },
    ],
  },
  {
    name: 'Dudilă Marius',
    party: 'PSD',
    position:
      'Administrator public al orașului Luduș și fost membru titular în Consiliul de administrație al Spitalului Orășenesc Dr. Valer Russu Luduș',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2026 că, în perioada 31 ianuarie 2023 - 14 iulie 2025, ar fi deținut simultan funcția de membru în Consiliul de administrație al spitalului și funcția de secretar executiv al organizației PSD Luduș.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Mureș',
      basis: 'office',
      note: 'Funcția publică relevantă este cea de administrator public al orașului Luduș, județul Mureș.',
    },
    sources: [
      ANI_APR_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Spitalul Orășenesc Luduș',
        kind: 'official',
        url: 'https://spital-ludus.ro/organizare/consiliul-de-administratie/',
      },
      {
        label: 'Zi de Zi',
        kind: 'press',
        url: 'https://www.zi-de-zi.ro/2022/11/14/cristian-moldovan-psd-promite-continuarea-reformelor-in-ludus/',
      },
    ],
  },
  {
    name: 'Drăniceanu Daniel',
    party: 'PSD',
    position: 'Fost consilier local al municipiului Tulcea, județul Tulcea',
    position_type: 'local_official',
    crime: 'Conflict de interese administrativ',
    status: 'investigated',
    details:
      'ANI a constatat în februarie 2026 că, în mandatul 2020-2024, ar fi participat la adoptarea a două hotărâri ale Consiliului Local Tulcea privind finanțarea prin PNRR a reabilitării energetice a unor blocuri administrate de o asociație al cărei președinte era.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Tulcea',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul Local al municipiului Tulcea, județul Tulcea.',
    },
    sources: [
      ANI_FEB_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'Primăria Tulcea',
        kind: 'official',
        url: 'https://www.primariatulcea.ro/declaratii-de-avere-si-interese-3/',
      },
      {
        label: 'InfoTulcea',
        kind: 'press',
        url: 'https://infotulcea.ro/simulare-grafica-structura-consiliului-local-tulcea/',
      },
    ],
  },
  {
    name: 'Grama Eduard',
    party: 'PSD',
    position: 'Membru în Consiliul de administrație al Spitalului de Pneumoftiziologie Călărași',
    position_type: 'local_official',
    crime: 'Incompatibilitate',
    status: 'investigated',
    details:
      'ANI a constatat în aprilie 2026 că, în perioada 16 septembrie 2022 - 14 iunie 2023, ar fi deținut simultan calitatea de membru în Consiliul de administrație al Spitalului de Pneumoftiziologie Călărași și funcția de vicepreședinte în Biroul permanent județean al unui partid politic.',
    verified_at: '2026-05-22',
    geography: {
      county: 'Călărași',
      basis: 'office',
      note: 'Funcția publică relevantă era în Consiliul de administrație al Spitalului de Pneumoftiziologie Călărași.',
    },
    sources: [
      ANI_APR_2026_PUBLIC_OFFICIALS_SOURCE,
      {
        label: 'CălărașiPress',
        kind: 'press',
        url: 'https://calarasipress.ro/video-eduard-grama-il-catalogheaza-pe-vasile-iliuta-drept-cel-mai-vanat-politician/',
      },
    ],
  },
  ...AUTOMATED_JUN_2026_ADDITIONAL_LOCAL_RECORDS,
  ...AUTOMATED_JUN_2026_MORE_LOCAL_RECORDS,
  ...AUTOMATED_JUN_2026_DEEP_DIVE_RECORDS,
  ...AUTOMATED_JUN_2026_PUBLIC_ADMIN_RECORDS,
  ...AUTOMATED_JUN_2026_FOLLOWUP_PUBLIC_RECORDS,
  ...ANI_DEC_2025_ADDITIONAL_RECORDS,
  ...ANI_MAY_2026_ADDITIONAL_RECORDS,
  ...ANI_2022_2024_LOCAL_OFFICIALS_RECORDS,
  ...ANI_2025_2026_ADDITIONAL_RECORDS,
  ...ANI_APR_2023_LOCAL_OFFICIALS_RECORDS,
  ...ANI_MAY_2022_LOCAL_OFFICIALS_RECORDS,
  ...ANI_2021_2023_BACKFILL_LOCAL_OFFICIALS_RECORDS,
  ...ANI_JUL_2023_LOCAL_OFFICIALS_RECORDS,
  ...ANI_DEC_2023_LOCAL_OFFICIALS_RECORDS,
  ...ANI_DEC_2023_TEN_LOCAL_OFFICIALS_RECORDS,
  ...ANI_DEC_2023_FIRST_AND_FEB_2026_LOCAL_RECORDS,
  ...ANI_AUG_2022_SEVEN_LOCAL_OFFICIALS_RECORDS,
  ...ANI_JUN_2023_TWELVE_LOCAL_OFFICIALS_RECORDS,
  ...ANI_INDEPENDENT_PUBLIC_OFFICIALS_RECORDS,
  ...ANI_MORE_INDEPENDENT_PUBLIC_OFFICIALS_RECORDS,
  ...ANI_ARCHIVE_PUBLIC_OFFICIALS_RECORDS,
  ...ANI_DEC_2022_TEN_PUBLIC_OFFICIALS_RECORDS,
  ...ANI_ARCHIVE_PUBLIC_SERVANTS_RECORDS,
  ...ANI_ARCHIVE_ADDITIONAL_PUBLIC_SERVANTS_RECORDS,
  ...ANI_ARCHIVE_MEDICAL_AND_PUBLIC_SERVANTS_RECORDS,
  ...AUR_FOCUSED_ADDITIONAL_RECORDS,
  ...AUR_SECOND_PASS_ADDITIONAL_RECORDS,
  ...AUR_BIG_SEARCH_ADDITIONAL_RECORDS,
  ...MEDIAS_GOSCOM_COUNCIL_RECORDS,
  ...PASCANI_AGROCOMPLEX_RECORDS,
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
