import * as _ from '.'

export const nu = _.word('nu', {
  adj: 'arrogance',
  noun: 'hubris',
  desc: () => `${_.nu} is the confusion of ${_.na}.`,
  etym: () => [_.na, _.u],
  see: () => [_.gu, _.nanes],
})

export const ganu = _.word('ganu', {
  noun: 'psychosis, god-child',
  etym: () => [_.ga, _.nu],
  see: () => [_.guna],
})

// === alt

export const nu_s = _.alt('nu', {
  glo: 'surface',
  alt: () => _.nu,
})
