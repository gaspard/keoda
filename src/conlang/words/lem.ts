import * as _ from '.'

export const lem = _.word('lem', {
  tens: 'past',
  verb: 'lived',
  etym: () => [_.lei, _.em],
})
_.see(_.lir)
_.see(_.lei)

export const elem = _.word('elem', {
  def: 'in the past',
  etym: () => [_.e, _.lem],
})

export const lemana = _.word('lemana', {
  def: 'history',
  etym: () => [_.lem, _.na],
})

// === alt
