import * as _ from '.'

export const lame = _.word('lame', {
  action: 'to wash',
  noun: 'water',
  see: () => [_.nature],
})

export const falame = _.word('falame', {
  noun: 'tears',
  action: 'to cry',
  etym: () => [_.fa, _.lame],
})

export const lama = _.word('lama', {
  noun: 'sea',
  etym: () => [_.lame, _.da],
})

export const lamagoa = _.word('lamagoa', {
  noun: 'ocean',
  etym: () => [_.lama, _.goa],
})

export const lami = _.word('lami', {
  noun: 'wave',
  etym: () => [_.lame, _.mi],
})

export const lamioda = _.word('lamioda', {
  noun: 'snake',
  etym: () => [_.lami, _.oda],
})

export const lamoa = _.word('lamoa', {
  noun: 'source (place)',
  etym: () => [_.lame, _.on, _.da],
  see: () => [_.nature],
})

export const lamu = _.word('lamu', {
  action: 'to drink',
})

// === alt

export const lameN = _.alt('lame', {
  glo: '**water**',
  alt: () => _.lame,
})
