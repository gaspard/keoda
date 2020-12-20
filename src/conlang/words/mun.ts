import * as _ from '.'

export const mun = _.word('moon', {
  noun: 'breast',
  posit: 'kneeling, breast touching the ground',
})

export const munwe = _.word('munwe', {
  noun: 'right breast',
  etym: () => [_.mun, _.we],
})

_.see(_.demimunwe)

export const imimunmenu = _.example(
  [_.i, _.mi, _.mun, _.sinu],
  `Caresse-toi les seins en effleurant.`
)

export const hamun = _.word('hamun', {
  noun: 'nipple',
  etym: () => [_.ha, _.mun],
})

export const munawi = _.word('munawi', {
  noun: 'moon',
  etym: () => [_.mun, _.awi],
})

export const muna = _.word('muna', {
  noun: 'baby bottle',
  etym: () => [_.mun, _.na],
})
