import * as _ from '.'

export const tei = _.word('tei', {
  det: 'your (2SG.HONOR)',
  prefix: 'your (HONOR)',
  suffix: 'your (HONOR)',
  glo: '2SG.HONOR.POSS',
  etym: () => [_.ti, _.ei],
  see: () => [_.to, _.ti, _.ta, _.wu],
})
_.see(_.pronouns)
