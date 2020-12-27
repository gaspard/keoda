import * as _ from '.'

export const iwi = _.word('iwi', {
  noun: 'bird',
  adj: 'enby',
  see: () => [_.ana, _.oto],
})
_.see(_.aniwi)

export const iwana = _.word('iwana', {
  adj: 'treeish bird (fem enby)',
})

export const iwoto = _.word('iwoto', {
  adj: 'windy bird (masc enby)',
})

export const iwiu = _.word('iwiu', {
  verb: 'to fly',
  etym: () => [_.iwi, _.u],
})
_.see(_.awiu)

export const iwigui = _.word('iwigui', {
  noun: 'phoenix',
  etym: () => [_.iwi, _.gui],
})

export const iwioda = _.word('iwioda', {
  noun: 'enby',
})
_.see(_.duwi)
