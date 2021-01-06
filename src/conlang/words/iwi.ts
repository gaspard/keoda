import * as _ from '.'

export const iwi = _.word('iwi', {
  noun: 'bird',
  adj: 'enby',
  see: () => [_.genders],
})

export const liwi = _.word('liwi', {
  noun: 'they (enby)',
  glo: '3SG.ENBY',
  see: () => [_.pron, _.idiwi],
})

export const iwana = _.word('iwana', {
  adj: 'treeish bird (fem enby)',
  see: () => [_.genders],
})

export const iwoto = _.word('iwoto', {
  adj: 'windy bird (masc enby)',
  see: () => [_.genders],
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

// === alt

export const liwam = _.alt('liwam', {
  glo: '**enby**.ACC',
  alt: () => _.liwi,
})
