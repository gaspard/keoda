import * as _ from '.'

// i case
export const iC = _.word('i', {
  id: 'iC',
  def: '**caress**',
  suffix: 'caress',
  subj: 'you (2SG)',
  glo: 'CARE',
  see: () => [_.iS, _.verbs],
})

export const imiyon = _.example([_.iC, _.mi, _.yon], `Masse-toi la vulve.`)
export const imimoon = _.example([_.iC, _.mi, _.mun], 'Masse-toi les seins.')

// === alt

export const iHIST = _.alt('i', {
  id: 'iHIST',
  glo: 'to you',
  alt: () => _.iS,
})
