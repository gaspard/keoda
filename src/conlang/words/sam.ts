import * as _ from '.'

export const sam = _.word('sam', {
  noun: 'foot',
  posit: 'standing',
})

export const samoda = _.word('samoda', {
  noun: 'hero',
  glo: 'foot.person',
  etym: () => [_.sam, _.oda],
})

export const fesam = _.word('fesam', {
  noun: 'socks',
})

export const hasam = _.word('hasam', {
  noun: 'toe',
})

export const djosam = _.word('djosam', {
  noun: 'ankle',
})
