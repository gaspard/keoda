import * as _ from '../lang'

export const lam = _.word('lam', {
  noun: 'water',
  verb: 'to wash',
  see: () => [_.nature],
})

export const falam = _.word('falam', {
  noun: 'tears',
  verb: 'to cry',
  etym: () => [_.fa, _.lam],
})

export const lama = _.word('lama', {
  noun: 'sea',
  etym: () => [_.lam, _.da],
})

export const lamagoa = _.word('lamagoa', {
  noun: 'ocean',
  etym: () => [_.lama, _.goa],
})

export const lami = _.word('lami', {
  noun: 'wave',
  etym: () => [_.lam, _.mi],
})

export const lamioda = _.word('lamioda', {
  noun: 'snake',
  etym: () => [_.lami, _.oda],
})

export const lamoa = _.word('lamoa', {
  noun: 'source (place)',
  etym: () => [_.lam, _.on, _.da],
  see: () => [_.nature],
})

export const lamu = _.word('lamu', {
  verb: 'to drink',
  etym: () => [_.lam, _.u$],
})
