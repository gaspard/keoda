import { alt, prefix } from '../../zulapa'

export const sa = prefix('sa', {
  noun: 'they (singular)',
  glo: 'they',
  cla: 'noun',
})

export const sasha = prefix('sasha', {
  noun: 'they (PL)',
  glo: '**their (PL)**',
  sglo: 'POSS.**them (PL)**',
  scla: 'noun',
})

alt('sam', {
  alt: () => sa,
  id: 'sa-m',
  noun: 'them',
  glo: '**they**.ACC',
})

alt('sawim', {
  alt: () => sa,
  id: 'sa-wi-m',
  noun: 'them-enby',
  glo: '**they**.NB.ACC',
})

alt('sanum', {
  alt: () => sa,
  id: 'sa-nu-m',
  noun: 'her',
  glo: '**they**.FEM.ACC',
})

alt('satom', {
  alt: () => sa,
  id: 'sa-to-m',
  noun: 'him',
  glo: '**they**.FEM.ACC',
})
