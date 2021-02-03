import * as _ from '.'

export const oda = _.word('oda', {
  noun: 'body',
  etym: () => [_.o, _.da],
})

export const keoda = _.word('keoda', {
  noun: 'hidden body language',
  etym: () => [_.ke, _.oda],
})

export const hida = _.word('hida', {
  noun: 'sibling',
  etym: () => [_.him, _.oda],
  see: () => [_.family],
})

export const hina = _.word('hina', {
  noun: 'sister',
  etym: () => [_.him, _.ana],
  see: () => [_.family],
})
export const hiwi = _.word('hiwi', {
  noun: 'enby sibling',
  etym: () => [_.him, _.iwi],
  see: () => [_.family],
})
export const hito = _.word('hito', {
  noun: 'brother',
  etym: () => [_.him, _.oto],
  see: () => [_.family],
})

/// =============== ALT

export const oda_adj = _.alt('oda', {
  adj: 'body',
  alt: () => _.oda,
})
