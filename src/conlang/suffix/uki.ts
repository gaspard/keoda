import { suffix } from '../make'
import * as _ from '../words'

export const uki = suffix('uki', {
  mod: 'long',
  see: () => [_.iki],
  desc: () => `
* ${_.phrase('Long hair, long legs', _.ji.uki, _.baj.uki)}`,
})

export const ukile = suffix('ukile', {
  mod: 'old',
  etym: () => [_.uki, _.lei],
})
