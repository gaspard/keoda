import * as _ from '.'

export const laj = _.word('laj', {
  noun: 'smile',
  action: 'to smile',
  etym: () => [_.la, _.aj],
})

// === alt

export const lajatim = _.alt('lajatim', {
  glo: '**smile**.you1+',
  alt: () => _.laj,
})
