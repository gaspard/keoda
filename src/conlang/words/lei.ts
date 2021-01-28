import * as _ from '.'

export const lei = _.word('lei', {
  noun: 'time',
  prep: 'then',
  pref: 'time',
})

export const leu = _.word('leu', {
  prep: 'while, as',
  etym: () => [_.lei, _.u],
})

export const gulei = _.word('gulei', {
  action: 'to experience',
  noun: 'experience',
  etym: () => [_.gu, _.lei],
})

export const leiuki = _.word('leiuki', {
  noun: 'patience',
  prop: 'patient',
  etym: () => [_.lei, _.uki],
})

export const neleiuki = _.word('neleiuki', {
  noun: 'impatience',
  prop: 'impatient',
  etym: () => [_.ne, _.leiuki],
})
