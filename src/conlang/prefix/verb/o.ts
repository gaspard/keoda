import { alt, prefix } from '../../zulapa'

export const o = prefix('o', {
  noun: 'indefinite me/us',
  glo: 'I/we',
  cla: 'verb',
})

alt('opi', {
  alt: () => o,
  id: 'o-pi',
  noun: 'I',
  glo: 'I',
  cla: 'verb',
})

alt('okei', {
  alt: () => o,
  id: 'o-kei',
  noun: 'us-master',
  glo: 'I.MASTER',
  cla: 'verb',
})

alt('oyi', {
  alt: () => o,
  id: 'o-yi',
  noun: 'I-tiny',
  glo: 'I.TINY',
  cla: 'verb',
})

alt('olo', {
  alt: () => o,
  id: 'o-lo',
  noun: 'I-wet',
  glo: 'I.WET',
  cla: 'verb',
})

alt('ode', {
  alt: () => o,
  id: 'o-de',
  noun: 'us two',
  adj: 'us two',
  glo: 'us.TWO',
  cla: 'verb',
})

alt('oka', {
  alt: () => o,
  id: 'o-ka',
  noun: 'us all',
  adj: 'us all',
  glo: 'we.EVERY',
  cla: 'verb',
})

alt('owi', {
  alt: () => o,
  id: 'o-wi',
  noun: 'I/we-enby',
  glo: 'I/we.NB',
  cla: 'verb',
})

alt('onu', {
  alt: () => o,
  id: 'o-nu',
  noun: 'I/we-girl',
  glo: 'I/we.FEM',
  cla: 'verb',
})

alt('oto', {
  alt: () => o,
  id: 'o-to',
  noun: 'I/we-boy',
  glo: 'I/we.MASC',
  cla: 'verb',
})
