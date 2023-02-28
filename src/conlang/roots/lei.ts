import * as _ from '../lang'

// on rename, change suffix/uki
export const lei = _.word('lei', {
  def: 'then',
  noun: 'time',
  pref: 'time',
})

export const leu = _.word('leu', {
  def: 'while, as',
  etym: () => [_.lei, _.u$],
})

export const gulei = _.word('gulei', {
  verb: 'to experience',
  noun: 'experience',
  etym: () => [_.gu, _.lei],
})

export const leiluki = _.word('leiluki', {
  noun: 'patience',
  adj: 'patient',
  etym: () => [_.lei, _.uki],
})

export const sauleiluki = _.word('sauleiluki', {
  noun: 'impatience',
  adj: 'impatient',
  etym: () => [_.sau, _.leiluki],
})
