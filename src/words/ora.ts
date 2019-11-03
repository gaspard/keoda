import * as _ from '.'

export const ora = _.word('ora', {
  noun: 'excitation, envie',
  desc: () => `Utiliser pour les phrase interrogatives.`,
})

export const Anais = _.word('Anaïs', { person: 'Anaïs' })
export const Iris = _.word('Iris', { person: 'Iris' })
export const Gopi = _.word('Gopi', { person: 'Gopi' })
export const Paul = _.word('Paul', { person: 'Paul' })

export const ayonleAnaisodaoramimun = _.example(
  [_.a, _.yon, _.le, _.Anais, _.oda, _.ora, _.mi, _.mun],
  'À la personne avec une vulve nommée Anaïs, tu veux caresser les seins ?'
)

export const ayodaoramimum = _.example(
  [_.a, _.yoda, _.ora, _.mi, _.mun],
  'À elle, tu désires caresser les seins ?'
)

export const oraiolataj = _.example(
  [_.ora, _.io, _.la, _.taj],
  `Tu aimerais que je t'embrasse la verge ?`
)
