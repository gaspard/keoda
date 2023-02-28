import * as _ from '../lang'

// iwi

export const tawi = _.word('tawi', {
  noun: 'they',
  etym: () => [_.ta.iwi],
})

// iwiB

export const iwiB = _.word('iwi', {
  id: 'iwiB',
  noun: 'bird',
  see: () => [_.iwi],
})

export const iwilu = _.word('iwilu', {
  verb: 'to fly',
  etym: () => [_.iwiB, _.u$],
})

export const iwiju = _.word('iwiju', {
  noun: 'phoenix',
  etym: () => [_.iwiB, _.ju],
})

// === alt
