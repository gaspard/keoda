import * as _ from '.'

export const tei = _.word('tei', {
  det: 'mine (honorific)',
  prefix: 'mine',
  suffix: 'mine',
  glo: 'POSS.1SG.HONOR',
  etym: () => [_.to, _.ei],
  see: () => [_.poss],
})

export const toke = _.word('toke', {
  det: 'your (honorific)',
  prefix: 'your',
  suffix: 'your',
  glo: 'POSS.2SG.HONOR',
  etym: () => [_.to, _.kei],
  see: () => [_.poss],
})
