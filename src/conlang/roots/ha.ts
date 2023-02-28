import * as _ from '../lang'

export const ha = _.word('ha', {
  adj: 'far',
  def: 'up',
  desc: () => 'Also means top or distal',
  see: () => [_.jo],
})

export const hafik = _.word('hafik', {
  verb: 'to fall',
  etym: () => [_.ha, _.fik],
})

export const hame = _.word('hame', {
  noun: 'head',
  adj: 'far',
  pref: 'top or distal',
  see: () => [_.jo],
})

export const duha = _.word('duha', {
  noun: 'face',
  etym: () => [_.du, _.ha],
})

export const duhany = _.word('duhany', {
  verb: 'to laugh',
  etym: () => [_.duha, _.y$],
})

export const hawe = _.word('hawe', {
  noun: 'right cheek',
  etym: () => [_.ha, _.we],
})

export const hase = _.word('hase', {
  noun: 'left cheek',
  etym: () => [_.ha, _.se],
})

export const noha = _.word('noha', {
  noun: 'occiput (back of the head)',
  etym: () => [_.no, _.ha],
})

export const hada = _.word('hada', {
  noun: 'parent',
  etym: () => [_.ha, _.oda],
  see: () => [_.family],
})

export const hanu = _.word('hanu', {
  noun: 'mother',
  etym: () => [_.ha, _.unu],
  see: () => [_.family],
})

export const hawi = _.word('hawi', {
  noun: 'enby parent',
  etym: () => [_.ha, _.iwi],
  see: () => [_.family],
})

export const hato = _.word('hato', {
  noun: 'father',
  etym: () => [_.ha, _.oto],
  see: () => [_.family],
})
