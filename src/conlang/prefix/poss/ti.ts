import { prefix } from '../../keoda'

export const ti = prefix('ti', {
  noun: 'you (singular)',
  glo: 'POSS.you',
  cla: 'noun',
  // forcedGlo: false,
})

// =========== glossing fix
prefix('tim', {
  noun: 'your (PL)',
  glo: '**you**.ACC+',
})

prefix('tih', {
  noun: 'your (PL)',
  glo: '**you**.ACC-',
})

prefix('tin', {
  noun: 'your (PL)',
  glo: '**you**.ACC',
})

prefix('tishi', {
  noun: 'your (PL)',
  glo: 'POSS.you.PL',
})
