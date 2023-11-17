import { alt, prefix } from '../../zulapa'

export const a = prefix('a', {
  noun: 'they',
  glo: 'they',
  cla: 'verb',
})

prefix('ape', {
  noun: 'some',
  glo: 'they.SOME',
  cla: 'verb',
})

alt('awi', {
  alt: () => a,
  id: 'a-wi',
  noun: 'they-enby',
  glo: 'they.NB',
  cla: 'verb',
})

alt('anu', {
  alt: () => a,
  id: 'a-nu',
  noun: 'she',
  glo: 'they.FEM',
  cla: 'verb',
})

alt('ato', {
  alt: () => a,
  id: 'a-to',
  noun: 'he',
  glo: 'they.MASC',
  cla: 'verb',
})
