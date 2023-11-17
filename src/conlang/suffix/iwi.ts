import * as _ from '../words'
import { suffix, word } from '../zulapa'

export const wi = suffix('wi', {
  noun: 'creativity',
  adj: 'enby',
  glo: 'NB',
  see: () => [_.dwi, _.nu, _.to],
})

export const iwi = word('iwi', {
  noun: 'enby, bird',
  see: () => [_.dwi, _.nu, _.to],
  etym: () => [_.wi],
})
