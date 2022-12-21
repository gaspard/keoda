import * as _ from '../lang'

export const sam = _.word('sam', {
  noun: 'foot',
  pos: 'standing',
  exam: () => [_.phrase('left foot, right foot', _.sam.se, _.sam.we)],
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

export const josam = _.word('josam', {
  noun: 'ankle',
})
