import * as _ from '.'

export const sha = _.word('sha', {
  noun: 'hip',
  conj: 'they (3PL)',
})

export const shada = _.word('shada', {
  pron: 'them',
  glo: '3PL',
  etym: () => [_.sha, _.oda],
  see: () => [_.tosha, _.shaya, _.pron],
})

export const shaya = _.word('shaya', {
  pron: 'them (3PL)',
  etym: () => [_.sha, _.yada],
  see: () => [_.shada, _.pron],
})

// shadam ??
export const sham = _.word('sham', {
  noun: 'them',
  glo: 'they.DAT',
  etym: () => [_.sha, _.am],
})

export const shasha = _.word('shasha', {
  verb: 'to dance',
  etym: () => [_.sha, _.sha],
})

export const shana = _.word('shana', {
  noun: 'danse',
  etym: () => [_.sha, _.na],
})
