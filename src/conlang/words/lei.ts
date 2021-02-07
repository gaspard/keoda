import * as _ from '.'

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

export const leiuki = _.word('leiuki', {
  noun: 'patience',
  adj: 'patient',
  etym: () => [_.lei, _.uki],
})

export const neleiuki = _.word('neleiuki', {
  noun: 'impatience',
  adj: 'impatient',
  etym: () => [_.ne, _.leiuki],
})
