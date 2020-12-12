import * as _ from '.'

export const sha = _.word('sha', {
  noun: 'hanche',
  conj: 'iels (3p)',
})
_.see(_.shamaconj)

export const shada = _.word('shada', {
  noun: 'elles/eux',
  etym: () => [_.sha, _.oda],
})
_.see(_.pronouns)

export const shaha = _.word('shaha', {
  noun: 'elles/eux poétique',
  etym: () => [_.sha, _.yada],
})

export const shasha = _.word('shasha', {
  verb: 'dancer',
  etym: () => [_.sha, _.sha],
})

export const shana = _.word('shana', {
  noun: 'la danse',
  etym: () => [_.sha, _.na],
})
