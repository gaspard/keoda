import * as _ from '.'

export const lem = _.word('lem', {
  def: 'past',
  verb: 'lived',
  etym: () => [_.lei, _.em],
})
_.see(_.lir)
_.see(_.lei)

export const elem = _.word('elem', {
  noun: 'in the past',
  etym: () => [_.e, _.lem],
})

export const lemana = _.word('lemana', {
  noun: 'history',
  etym: () => [_.lem, _.na],
})

// === alt
