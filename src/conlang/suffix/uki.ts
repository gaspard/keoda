import { word } from '../keoda'
import * as _ from '../lang'

export const uki = word('uki', {
  adj: 'long',
  see: () => [_.iki],
  desc: () => `
* ${_.phrase('Long hair, long legs', _.ji.uki, _.baj.uki)}`,
})

export const ukile = word('ukile', {
  adj: 'old',
  etym: () => [_.uki, _.lei],
})
