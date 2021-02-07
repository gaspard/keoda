import * as _ from '../lang'

export const jo = _.word('jo', {
  adj: 'close',
  def: 'down',
  desc: () => 'Also means proximal.',
  etym: () => [_.dau, _.ojo],
  see: () => [_.ha],
})

export const hajo = _.word('hajo', {
  verb: 'to take',
  etym: () => [_.ha, _.jo],
})

export const joha = _.word('joha', {
  verb: 'to reject',
  etym: () => [_.jo, _.ha],
})

export const muhajo = _.word('muhajo', {
  verb: 'to pick up',
  etym: () => [_.mu, _.hajo],
})

export const joda = _.word('joda', {
  noun: 'child',
  etym: () => [_.jo, _.oda],
  see: () => [_.family],
})

export const jona = _.word('jona', {
  noun: 'daughter',
  desc: () => `We also use: ${_.linkAndGlo(_.ana.lil)}`,
  etym: () => [_.jo, _.ana],
  see: () => [_.family],
})

export const jowi = _.word('jowi', {
  noun: 'enby child',
  etym: () => [_.jo, _.iwi],
  see: () => [_.family],
})

export const joto = _.word('joto', {
  noun: 'son',
  etym: () => [_.jo, _.oto],
  see: () => [_.family],
})
