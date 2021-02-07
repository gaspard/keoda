export {}
import * as _ from '../lang'

export const yin = _.word('yin', {
  noun: 'vulva',
  verb: 'to vulva',
  see: () => [_.yuru /*_.genitals*/],
  etym: () => [_.yu, _.ina],
})

export const riyin = _.word('riyin', {
  noun: 'peripheral lips',
  etym: () => [_.ri, _.yin],
})

export const royin = _.word('royin', {
  noun: 'central lips of the vulva',
  etym: () => [_.ro, _.yin],
})

export const keyin = _.word('keyin', {
  noun: 'clitoris',
  see: () => [_.yineri],
  etym: () => [_.ke, _.yin],
  desc: () => `Yes, the whole thing mostly hidden. Not just the tip.`,
})

export const feyin = _.word('feyin', {
  noun: 'panties',
  etym: () => [_.fe, _.yin],
})
