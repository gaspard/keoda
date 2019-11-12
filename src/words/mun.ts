import * as _ from '.'

export const mun = _.word('moon', {
  noun: 'seins',
  position: 'à genoux, buste au sol',
})

export const munwe = _.word('munwe', {
  noun: 'sein droite',
  desc: () => `De ${_.mu} et ${_.we}.`,
})

_.see(_.demimunwe)

export const imimunmenu = _.example(
  [_.i, _.mi, _.mun, _.sinu],
  `Caresse-toi les seins en effleurant.`
)

export const hamun = _.word('hamun', { noun: 'téton' })

export const lahaumundom = _.example(
  [_.la, _.hamun, _.dom],
  `Embrasse-moi les tétons bien fort.`
)
