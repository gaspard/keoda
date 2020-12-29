import * as _ from '.'

export const lem = _.word('lem', {
  tens: 'past',
  verb: 'lived',
  etym: () => [_.lei, _.em],
})
_.see(_.lir)
_.see(_.lei)

export const lemir = _.word('lemir', {
  suffix: 'always',
  etym: () => [_.lem, _.lir],
})

export const elem = _.word('elem', {
  noun: 'in the past',
  etym: () => [_.e, _.lem],
})

export const elemir = _.word('elemir', {
  noun: 'in all eternity',
  etym: () => [_.e, _.lemir],
})

export const lemana = _.word('lemana', {
  noun: 'history',
  etym: () => [_.lem, _.na],
})
