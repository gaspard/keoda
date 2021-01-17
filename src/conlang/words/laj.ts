import * as _ from '.'

export const laj = _.word('laj', {
  noun: 'smile',
  verb: 'to smile',
  etym: () => [_.la, _.aj],
})

// === alt

export const lajatim = _.alt('lajatim', {
  glo: '**smile**.POSS.2SG.ACC',
  alt: () => _.laj,
})
