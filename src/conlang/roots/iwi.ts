import * as _ from '../lang'

// iwi

export const tawi = _.word('tawi', {
  noun: 'they',
  etym: () => [_.ta.iwi],
})

// iwiB

export const iwiN = _.word('iwi', {
  id: 'iwiN',
  noun: 'bird',
  see: () => [_.iwi],
})

export const iwilu = _.word('iwilu', {
  verb: 'to fly',
  etym: () => [_.iwiN, _.u$],
})

export const iwiju = _.word('iwiju', {
  noun: 'phoenix',
  etym: () => [_.iwiN, _.ju],
})

// === alt
