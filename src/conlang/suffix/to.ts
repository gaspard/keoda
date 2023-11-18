import * as _ from '../words'
import { alt, suffix, word } from '../zulapa'

export const to = suffix('to', {
  noun: 'movement',
  adj: 'masculine',
  glo: 'MASC',
  see: () => [_.subj, _.tosh],
})

export const toda = word('toda', {
  noun: 'man, wind',
  see: () => [_.tosh, _.nuda, _.wida],
  etym: () => [_.to, _.da],
})

alt('tonum', {
  alt: () => _.to,
  id: 'to-nu-m',
  glo: 'MASC.**her**.ACC',
  cla: 'noun',
})
