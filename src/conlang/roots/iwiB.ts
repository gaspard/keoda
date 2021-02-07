import * as _ from '../lang'

export const iwiB = _.word('iwi', {
  id: 'iwiB',
  noun: 'bird',
  see: () => [_.iwi],
})

export const iwiu = _.word('iwiu', {
  verb: 'to fly',
  etym: () => [_.iwiB, _.u$],
})

export const iwigui = _.word('iwigui', {
  noun: 'phoenix',
  etym: () => [_.iwiB, _.gui],
})

// === alt
