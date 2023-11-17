import * as _ from '../words'
import { suffix, word } from '../zulapa'

export const to = suffix('to', {
  noun: 'movement',
  adj: 'masculine',
  glo: 'MASC',
  see: () => [_.subj, _.tosh],
})

export const oto = word('oto', {
  noun: 'man, wind',
  see: () => [_.unu, _.iwi, _.tosh],
  etym: () => [_.to],
})
