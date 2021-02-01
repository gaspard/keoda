import { suffix } from '../make'
import * as _ from '../words'

export const uki = suffix('uki', {
  adj: 'long',
  see: () => [_.iki],
  desc: () => `
* ${_.phrase('Long hair, long legs', _.jihuki, _.bajuki)}`,
})

export const ukile = suffix('ukile', {
  adj: 'old',
  etym: () => [_.uki, _.lei],
})
