import { alt, prefix } from '../../zulapa'

export const i = prefix('i', {
  noun: 'you',
  glo: 'you',
  cla: 'verb',
  desc: () => 'you (singular)',
})

alt('ikei', {
  alt: () => i,
  id: 'i-kei',
  noun: 'you-master',
  glo: 'you.MASTER',
  cla: 'verb',
})

alt('iyi', {
  alt: () => i,
  id: 'i-yi',
  noun: 'you-tiny',
  glo: 'you.TINY',
  cla: 'verb',
})

alt('ilo', {
  alt: () => i,
  id: 'i-lo',
  noun: 'you-wet',
  glo: 'you.WET',
  cla: 'verb',
})

alt('iwi', {
  alt: () => i,
  id: 'i-wi',
  noun: 'you-enby',
  glo: 'you.NB',
  cla: 'verb',
})

alt('inu', {
  alt: () => i,
  id: 'i-nu',
  noun: 'you-girl',
  glo: 'you.FEM',
  cla: 'verb',
})

alt('ito', {
  alt: () => i,
  id: 'i-to',
  noun: 'you-boy',
  glo: 'you.MASC',
  cla: 'verb',
})
