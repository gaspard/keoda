import * as _ from '../lang'

export const du = _.word('du', {
  def: 'front',
  pref: 'front',
  see: () => [_.we, _.no, _.se],
})

export const duda = _.word('duda', {
  noun: 'small sibling',
  etym: () => [_.du, _.oda],
  see: () => [_.noda, _.duwi, _.dunu, _.dufo],
})

export const dufo = _.word('dufo', {
  noun: 'small brother/wind',
  etym: () => [_.du, _.ofo],
  see: () => [_.nofo, _.duda],
})

export const dunu = _.word('dunu', {
  noun: 'small sister/tree',
  etym: () => [_.du, _.unu],
  see: () => [_.nonu, _.duda],
})

export const duwi = _.word('duwi', {
  noun: 'small enby/bird',
  etym: () => [_.du, _.iwi],
  see: () => [_.nowi, _.duda],
})

export const duyuru = _.word('duyuru', {
  noun: 'front of the vagina',
  etym: () => [_.du, _.yuru],
})
