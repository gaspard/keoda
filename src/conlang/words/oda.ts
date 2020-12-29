import * as _ from '.'

export const yoda = _.word('yoda', {
  noun: 'body with a vulva',
  etym: () => [_.yon, _.oda],
})

export const oda = _.word('oda', {
  noun: 'body, place of life',
  pron: 'me/us (1SG.INDF)',
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
  pron: 'poetic self (1G.INDF)',
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

export const odato = _.alt('odato', {
  glo: 'body.1SG.INDF.POSS',
  alt: () => _.oda,
})

export const odei = _.word('odei', {
  noun: 'fantastic body (Dom)',
  etym: () => [_.oda, _.ei],
})
