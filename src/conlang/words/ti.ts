import * as _ from '.'

export const ti = _.word('ti', {
  det: 'your (2SG)',
  prefix: 'your',
  suffix: 'your',
  glo: '2SG.POSS',
  see: () => [_.to, _.ta, _.tei, _.wu],
})
_.see(_.pronouns)

export const tiyi = _.alt('tiyi', {
  glo: 'your.DPRV',
  see: () => [_.tilo],
  alt: () => _.yi,
})

export const tilo = _.word('tilo', {
  det: 'your (2SG.WET)',
  glo: '2SG.WET',
})
