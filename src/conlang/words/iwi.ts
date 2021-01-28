import * as _ from '.'

export const iwi = _.word('iwi', {
  def: 'bird',
  adj: 'enby',
  see: () => [_.subj],
})

export const iwida = _.word('iwoda', {
  def: '**enby** (bird) **person**',
  etym: () => [_.iwi, _.da],
})

export const iwiu = _.word('iwiu', {
  verb: 'to fly',
  etym: () => [_.iwi, _.u],
})

export const iwigui = _.word('iwigui', {
  def: 'phoenix',
  etym: () => [_.iwi, _.gui],
})

// === alt

export const ahiwi = _.alt('ahiwi', {
  glo: '**they1**.bird',
  alt: () => _.iwi,
})
