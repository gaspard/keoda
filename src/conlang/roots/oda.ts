import * as _ from '../lang'

export const oda = _.word('oda', {
  noun: 'body',
  etym: () => [_.o, _.da],
})

export const hida = _.word('hida', {
  noun: 'sibling',
  etym: () => [_.him, _.oda],
  see: () => [_.family],
})

export const hinu = _.word('hinu', {
  noun: 'sister',
  etym: () => [_.him, _.unu],
  see: () => [_.family],
})
export const hiwi = _.word('hiwi', {
  noun: 'enby sibling',
  etym: () => [_.him, _.iwi],
  see: () => [_.family],
})
export const hifo = _.word('hifo', {
  noun: 'brother',
  etym: () => [_.him, _.ofo],
  see: () => [_.family],
})
