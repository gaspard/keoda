import * as _ from '../lang'

export const ha = _.word('ha', {
  adj: 'far',
  def: 'up',
  desc: () => 'Also means top or distal',
  see: () => [_.jo],
})

export const hafo = _.word('hafo', {
  verb: 'to fall',
  etym: () => [_.ha, _.fo],
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

export const duhasha = _.word('duhasha', {
  verb: 'to laugh',
  etym: () => [_.duha, _.shaH],
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

export const hana = _.word('hana', {
  noun: 'mother',
  etym: () => [_.ha, _.ana],
  see: () => [_.family],
})

export const hawi = _.word('hawi', {
  noun: 'enby parent',
  etym: () => [_.ha, _.iwi],
  see: () => [_.family],
})

export const hato = _.word('hato', {
  noun: 'father',
  see: () => [_.duto, _.noto, _.ha],
})
