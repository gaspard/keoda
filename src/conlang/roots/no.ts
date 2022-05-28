import * as _ from '../lang'

export const no = _.word('no', {
  adj: 'back',
  pref: 'back',
  see: () => [_.se, _.du, _.we],
})

export const noda = _.word('noda', {
  noun: 'older sibling',
  etym: () => [_.no, _.oda],
  see: () => [_.duda, _.nowi, _.nonu, _.noto],
})

export const noto = _.word('noto', {
  noun: 'older brother/wind',
  etym: () => [_.no, _.oto],
  see: () => [_.duto, _.noda],
})

export const nonu = _.word('nonu', {
  noun: 'older sister/tree',
  etym: () => [_.no, _.unu],
  see: () => [_.dunu, _.noda],
})

export const nowi = _.word('nowi', {
  noun: 'older enby/bird',
  etym: () => [_.no, _.iwi],
  see: () => [_.duwi, _.noda],
})

export const nopi = _.word('nopi', {
  noun: 'back',
  pos: 'lying on th back',
  etym: () => [_.no, _.pi],
})

export const djonopi = _.word('djonopi', {
  noun: 'lower back',
  etym: () => [_.jo, _.nopi],
})

export const noyuru = _.word('noyuru', {
  noun: 'cervix',
  etym: () => [_.no, _.yuru],
})
