import * as _ from '.'

export const du = _.word('du', {
  prefix: 'front',
  see: () => [_.we, _.no, _.se],
})

export const duda = _.word('doda', {
  def: 'small sibling',
  etym: () => [_.du, _.oda],
  see: () => [_.noda, _.duwi, _.duna, _.duto],
})

export const duto = _.word('duto', {
  def: 'small brother/wind',
  etym: () => [_.du, _.oto],
  see: () => [_.noto, _.duda],
})

export const duna = _.word('duna', {
  def: 'small sister/tree',
  etym: () => [_.du, _.ana],
  see: () => [_.nona, _.duda],
})

export const duwi = _.word('duwi', {
  def: 'small enby/bird',
  etym: () => [_.du, _.iwi],
  see: () => [_.nowi, _.duda],
})

export const duyin = _.word('duyin', {
  def: 'front of the vagina',
  etym: () => [_.du, _.yin],
})
