import { alt, prefix } from '../../zulapa'

export const mo = prefix('mo', {
  noun: 'me/us',
  glo: '**my/our**',
  sglo: 'POSS.**me/us**',
  scla: 'noun',
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
