import * as _ from '.'

export const taj = _.word('taj', {
  noun: 'penis',
  verb: 'penis action',
  etym: () => [_.te, _.aj],
})

export const tajin = _.word('tajin', {
  noun: 'pénis chaud, en érection',
  etym: () => [_.taj, _.in],
})

export const tajegi = _.word('tajegi', {
  noun: 'pénis froid, au repos',
  etym: () => [_.taj, _.egi],
})
_.see(_.genitals)

export const toda = _.word('toda', { noun: 'personne avec un pénis' })

export const tajo = _.word('tajo', {
  noun: 'frapper du pénis',
  desc: () => `Basé sur ${_.taj} (pénis) et ${_.o} (frapper).`,
})

export const hataj = _.word('hataj', {
  noun: 'gland',
  desc: () => `De ${_.ha} (tête, partie supérieure) et ${_.taj} (pénis).`,
})

export const lihataj = _.example([_.li, _.ha, _.taj], 'Suce mon gland.')

export const tajmahal = _.example([_.taj, _.mahal], 'Pénis miraculeux')

_.see(_.tajuki)
