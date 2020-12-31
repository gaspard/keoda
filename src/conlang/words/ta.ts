import * as _ from '.'

export const ta = _.word('ta', {
  det: 'their',
  prefix: 'their',
  suffix: 'their',
  glo: 'POSS.3SG',
  see: () => [_.poss],
})
