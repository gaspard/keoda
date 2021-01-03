import * as _ from '.'

export const ti = _.word('ti', {
  det: 'your',
  prefix: 'your',
  suffix: 'your',
  glo: 'POSS.**2SG**',
  see: () => [_.poss],
})

export const toyi = _.alt('tiyi', {
  det: 'your (tiny)',
  glo: 'POSS.**2SG**.TINY',
  see: () => [_.tolo],
  alt: () => _.yi,
})

export const tolo = _.alt('tilo', {
  det: 'your (wet)',
  glo: 'POSS.**2SG**.WET',
  alt: () => _.lo,
})
