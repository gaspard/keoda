import * as _ from '.'

export const i = _.word('i', {
  suffix: 'caress',
  conj: 'you (2SG)',
  glo: 'CARE',
  see: () => [_.ti, _.verbs],
})

export const imiyon = _.example([_.i, _.mi, _.yon], `Masse-toi la vulve.`)
export const imimoon = _.example([_.i, _.mi, _.mun], 'Masse-toi les seins.')

export const ikei = _.word('ikei', {
  conj: 'You (2SG.HONOR)',
  glo: '1SG.HONOR',
  desc: () => `Less used than ${_.kei}.`,
  etym: () => [_.i, _.kei],
})
