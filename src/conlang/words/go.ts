import * as _ from '.'

export const go = _.word('go', {
  pref: 'big',
  adj: 'intense',
  glo: 'AUG',
  etym: () => [_.gu, _.o$],
  see: () => [_.gi],
})

export const goa = _.word('goa', {
  noun: 'big place',
  suff: 'big place',
  etym: () => [_.go, _.da],
})

export const gopona = _.word('gopona', {
  noun: 'pumpkin, October',
  etym: () => [_.go, _.pona],
  see: () => [_.fruits, _.seasons],
})

// Le pont
export const gawi = _.word('gawi', {
  noun: 'whale',
  etym: () => [_.go, _.awi],
})

// debout, penché.e en avant, on touche le sol avec les mains (éléphant qui boit)
export const goda = _.word('goda', {
  noun: 'elephant',
  etym: () => [_.go, _.oda],
})
