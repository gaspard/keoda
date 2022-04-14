import { prefix } from '../../zulapa'

export const ti = prefix('ti', {
  noun: 'you (singular)',
  glo: 'POSS.you',
  cla: 'noun',
  // forcedGlo: false,
})

// =========== glossing fix
prefix('iti', {
  id: 'i-ti',
  noun: 'you',
  glo: '**you**',
})

prefix('tim', {
  id: 'ti-m',
  noun: 'your (PL)',
  glo: '**you**.ACC+',
})

prefix('tih', {
  id: 'ti-h',
  noun: 'your (PL)',
  glo: '**you**.ACC-',
})

prefix('tin', {
  id: 'ti-n',
  noun: 'your (PL)',
  glo: '**you**.ACC',
})
