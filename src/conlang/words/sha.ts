import * as _ from '.'

export const sha = _.word('sha', {
  noun: 'hip',
  conj: 'them (3PL)',
})
_.see(_.shamaconj)

export const shada = _.word('shada', {
  pron: 'them (3PL)',
  etym: () => [_.sha, _.oda],
})
_.see(_.pronouns)

export const shaha = _.word('shaha', {
  pron: 'poetic them (3PL)',
  etym: () => [_.sha, _.yada],
})

export const shasha = _.word('shasha', {
  verb: 'to dance',
  etym: () => [_.sha, _.sha],
})

export const shana = _.word('shana', {
  noun: 'danse',
  etym: () => [_.sha, _.na],
})
