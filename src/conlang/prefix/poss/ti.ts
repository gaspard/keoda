import { alt, prefix } from '../../zulapa'

export const ti = prefix('ti', {
  noun: 'you',
  // glo: 'POSS.you',
  cla: 'noun',
})

export const tishi = prefix('tishi', {
  noun: 'you (PL)',
  glo: '**your**',
  sglo: 'POSS.**you**',
  scla: 'noun',
})

alt('tim', {
  alt: () => ti,
  id: 'ti-m',
  noun: 'you',
  glo: '**you**.ACC',
})
