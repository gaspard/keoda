import { alt, prefix } from '../../zulapa'

export const mo = prefix('mo', {
  noun: 'me/us',
  glo: 'me/us',
  cla: 'noun',
})

export const mosho = prefix('mosho', {
  noun: 'us (PL)',
  glo: '**our**',
  sglo: 'POSS.**us**',
  scla: 'noun',
})

alt('mom', {
  alt: () => mo,
  id: 'mo-m',
  noun: 'me/us',
  glo: '**me/us**.ACC',
})

export const nimo = alt('nimo', {
  alt: () => mo,
  id: 'ni-mo',
  noun: 'me/us',
  glo: 'DAT.**me/us**',
  cla: 'noun',
})
