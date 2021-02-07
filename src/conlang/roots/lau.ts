import * as _ from '../lang'

export const lau = _.word('lau', {
  def: 'always',
  noun: 'eternity',
  glo: 'ETERN',
  etym: () => [_.lei, _.au],
  desc: () => `The time loves.`,
  see: () => [_.tu, _.verbs],
})

export const elau = _.word('elau', {
  noun: 'in all eternity',
  etym: () => [_.e, _.lau],
})
