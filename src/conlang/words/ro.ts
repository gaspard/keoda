import * as _ from '.'

export const ro = _.word('ro', {
  adj: 'inner',
  suff: 'in (INESS)',
  pref: 'inner',
  glo: 'INESS',
  see: () => [_.ri, _.prep],
})

export const robaj = _.word('robaj', {
  noun: 'inner thighs',
  etym: () => [_.ro, _.baj],
})
