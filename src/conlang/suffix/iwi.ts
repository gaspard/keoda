import * as _ from '../words'
import { suffix, word } from '../zulapa'

export const wi = suffix('wi', {
  noun: 'creativity',
  adj: 'enby',
  glo: 'NB',
  see: () => [_.dwi, _.nu, _.to],
})

export const wida = word('wida', {
  noun: 'enby, bird',
  see: () => [_.dwi, _.nuda, _.toda],
  etym: () => [_.wi, _.da],
})
