import * as _ from '.'

export const iwi = _.word('iwi', {
  noun: 'bird',
  prop: 'enby',
  see: () => [_.subj],
})

export const iwida = _.word('iwoda', {
  noun: '**enby** (bird) **person**',
  etym: () => [_.iwi, _.da],
})

export const iwiu = _.word('iwiu', {
  action: 'to fly',
  etym: () => [_.iwi, _.u],
})

export const iwigui = _.word('iwigui', {
  noun: 'phoenix',
  etym: () => [_.iwi, _.gui],
})

// === alt

export const ahiwi = _.alt('ahiwi', {
  glo: '**they1**.bird',
  alt: () => _.iwi,
})
