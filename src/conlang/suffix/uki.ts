import { suffix } from '../keoda'
import * as _ from '../lang'

export const uki = suffix('uki', {
  adj: 'long',
  see: () => [_.iki],
  desc: () => `
* ${_.phrase('Long hair, long legs', _.ji.uki, _.baj.uki)}`,
})

export const ukile = suffix('ukile', {
  adj: 'old',
  etym: () => [_.uki, _.lei],
})
