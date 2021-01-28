import * as _ from '.'

export const lame = _.word('lame', {
  verb: 'to wash',
  def: 'water',
  see: () => [_.nature],
})

export const falame = _.word('falame', {
  def: 'tears',
  verb: 'to cry',
  etym: () => [_.fa, _.lame],
})

export const lama = _.word('lama', {
  def: 'sea',
  etym: () => [_.lame, _.da],
})

export const lamagoa = _.word('lamagoa', {
  def: 'ocean',
  etym: () => [_.lama, _.goa],
})

export const lami = _.word('lami', {
  def: 'wave',
  etym: () => [_.lame, _.mi],
})

export const lamioda = _.word('lamioda', {
  def: 'snake',
  etym: () => [_.lami, _.oda],
})

export const lamoa = _.word('lamoa', {
  def: 'source (place)',
  etym: () => [_.lame, _.on, _.da],
  see: () => [_.nature],
})

export const lamu = _.word('lamu', {
  verb: 'to drink',
})

// === alt

export const lameN = _.alt('lame', {
  glo: '**water**',
  alt: () => _.lame,
})
