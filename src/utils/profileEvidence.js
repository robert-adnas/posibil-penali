import { evidenceReviewDate, profileEvidence } from '../../data/profileEvidence.js';
import { additionalProfileEvidence } from '../../data/profileEvidenceManual.js';
import { multipleProfileEvidence } from '../../data/profileEvidenceMultiple.js';
import evidenceIndex from '../../data/profileEvidenceIndex.json' with { type: 'json' };

const emptyEvidence = { chronologies: [], currentStatusSource: null, statusVerifiedAt: null };
const curatedEvidence = { ...profileEvidence, ...additionalProfileEvidence, ...multipleProfileEvidence };
const eventLabels = {
  convicted: 'Condamnare definitivă',
  acquitted: 'Achitare definitivă',
  prescribed: 'Încetare definitivă prin prescripție',
  integrity: 'ANI a publicat constatarea',
  indicted: 'DNA a anunțat trimiterea în judecată',
  investigated: 'DNA a comunicat evoluția urmăririi penale',
};
const announcementLabels = {
  integrity: 'ANI – comunicatul privind constatarea',
  indicted: 'DNA – comunicatul privind trimiterea în judecată',
  investigated: 'DNA – comunicatul privind urmărirea penală',
};

export function getProfileEvidence(politician) {
  if (!politician) return emptyEvidence;

  if (Object.hasOwn(curatedEvidence, politician.name)) {
    const evidence = curatedEvidence[politician.name];
    if (politician.verified_at !== (evidence.verifiedAt ?? evidenceReviewDate)) return emptyEvidence;

    const currentStatusSource = politician.status === evidence.status ? evidence.statusSource ?? null : null;
    return {
      chronologies: evidence.chronologies,
      currentStatusSource,
      statusVerifiedAt: currentStatusSource ? evidence.reviewedAt ?? evidenceReviewDate : null,
    };
  }

  if (!Object.hasOwn(evidenceIndex, politician.name)) return emptyEvidence;
  const evidence = evidenceIndex[politician.name];
  if (politician.verified_at !== evidence.verifiedAt || politician.status !== evidence.status) return emptyEvidence;

  const source = {
    url: evidence.sourceUrl,
    label: announcementLabels[evidence.status] ?? 'DNA – comunicatul privind decizia definitivă',
  };
  let title = 'Dosarul menționat în comunicatul DNA';
  if (evidence.decisionNumber) title = `Dosarul soluționat prin decizia nr. ${evidence.decisionNumber}`;
  if (evidence.status === 'integrity') title = 'Constatarea Agenției Naționale de Integritate';
  const events = [{ date: evidence.date, label: eventLabels[evidence.status], source }];
  if (evidence.referralDate) {
    events.unshift({ date: evidence.referralDate, label: 'Trimitere în judecată', source });
  }

  return {
    chronologies: [{ title, events }],
    currentStatusSource: evidence.confirmsStatus ? source : null,
    statusVerifiedAt: evidence.confirmsStatus ? evidence.reviewedAt : null,
  };
}
