import * as _ from '.'

export const ota = _.word('ota', {
  noun: 'source, ouverture',
})

export const lamota = _.word('otalamon', {
  noun: `cercle de l'urètre`,
  desc: () => `zone autour de l'urètre (chez la femme)`,
  derived: () => [_.lam, _.ota],
})

export const hamunota = _.word('hamunon', {
  noun: 'auréole autour du mamelon',
  derived: () => [_.hamun, _.on],
})

export const kepalota = _.word('kepalota', {
  noun: `zone autour de l'anus`,
  derived: () => [_.kepal, _.ota],
})
_.see(_.genitals)
_.see(_.lamota)
