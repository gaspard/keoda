import * as _ from '.'

// i case
export const iC = _.word('i', {
  id: 'iC',
  noun: '**caress**',
  suff: 'caress',
  def: 'you (2SG)',
  glo: 'CARE',
  see: () => [_.i$, _.verbs],
})

export const imiyon = _.example([_.iC, _.mi, _.yin], `Masse-toi la vulve.`)
export const imimoon = _.example([_.iC, _.mi, _.mun], 'Masse-toi les seins.')

// === alt

export const iHIST = _.alt('i', {
  id: 'iHIST',
  glo: 'to you',
  alt: () => _.i$,
})
