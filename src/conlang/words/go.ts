import * as _ from '.'

export const go = _.word('go', {
  prefix: 'big',
  adj: 'intense',
  glo: 'AUG',
  etym: () => [_.gu, _.oC],
  see: () => [_.gi],
})

export const goa = _.word('goa', {
  suffix: 'big place',
  etym: () => [_.go, _.da],
})

export const gopona = _.word('gopona', {
  def: 'pumpkin, October',
  etym: () => [_.go, _.pona],
  see: () => [_.fruits, _.seasons],
})

export const gawi = _.word('gawi', {
  def: 'whale',
  etym: () => [_.go, _.awi],
})

export const goda = _.word('goda', {
  def: 'elephant',
  etym: () => [_.go, _.oda],
})
