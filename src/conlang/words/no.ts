import * as _ from '.'

export const no = _.word('no', {
  prefix: 'back',
  see: () => [_.se, _.du, _.we],
})

export const noda = _.word('noda', {
  def: 'older sibling',
  etym: () => [_.no, _.oda],
  see: () => [_.duda, _.nowi, _.nona, _.noto],
})

export const noto = _.word('noto', {
  def: 'older brother/wind',
  etym: () => [_.no, _.oto],
  see: () => [_.duto, _.noda],
})

export const nona = _.word('nona', {
  def: 'older sister/tree',
  etym: () => [_.no, _.ana],
  see: () => [_.duna, _.noda],
})

export const nowi = _.word('nowi', {
  def: 'older enby/bird',
  etym: () => [_.no, _.iwi],
  see: () => [_.duwi, _.noda],
})

export const nopi = _.word('nopi', {
  def: 'back',
  posit: 'lying on th back',
  etym: () => [_.no, _.pi],
})

export const djonopi = _.word('djonopi', {
  def: 'lower back',
  etym: () => [_.jo, _.nopi],
})

export const noyin = _.word('noyin', {
  def: `fond du vagin (col de l'utérus)`,
  etym: () => [_.no, _.yin],
})
