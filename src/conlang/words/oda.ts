import * as _ from '.'

export const yoda = _.word('yoda', {
  noun: 'body with a vulva',
  etym: () => [_.yon, _.oda],
})

export const oda = _.word('oda', {
  noun: 'body, place of life',
  pron: 'me/us (1SG.INDEF)',
  adj: 'alive',
  suffix: 'animal',
})
_.see(_.pronouns)
_.see(_.to)

export const oda_adj = _.alt('oda', {
  glo: 'body.ADJ',
  alt: () => _.oda,
})

export const oha = _.word('oha', {
  pron: 'poetic self (1G.INDEF)',
  etym: () => [_.o, _.yada],
})

export const keoda = _.word('keoda', {
  noun: 'hidden body language',
  etym: () => [_.ke, _.oda],
})

export const yosa = _.word('yosa', {
  noun: 'person',
  etym: () => [_.yo, _.oda],
})

_.see(_.ida)
_.see(_.ti)
