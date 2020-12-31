import * as _ from '.'

export const sha = _.word('sha', {
  noun: 'hip',
  conj: 'they (3PL)',
})

export const shada = _.word('shada', {
  pron: 'them (3PL)',
  see: () => [_.sham],
  etym: () => [_.sha, _.oda],
})

export const sham = _.word('sham', {
  noun: 'them',
  glo: 'they.DAT',
  etym: () => [_.sha, _.am],
})

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
