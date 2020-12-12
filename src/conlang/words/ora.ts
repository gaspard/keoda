import * as _ from '.'

export const ora = _.word('ora', {
  noun: 'excitation, envie',
  desc: () => `Utiliser pour les phrase interrogatives.`,
})

export const Anais = _.example([], 'Anaïs')
export const Iris = _.example([], 'Iris')
export const Gopi = _.example([], 'Gopi')
export const Paul = _.example([], 'Paul')

export const ayonleAnaisodaoramimun = _.example(
  [_.a, _.yon, _.le, _.Anais, _.oda, _.ora, _.mi, _.mun],
  'À la personne avec une vulve nommée Anaïs, tu veux caresser les seins ?'
)

export const ayodaoramimum = _.example(
  [_.a, _.yoda, _.ora, _.mi, _.mun],
  'À elle, tu désires caresser les seins ?'
)

// Ora ola taj ?
// Ora eku ola taj ?
export const oraolataj = _.example(
  [_.ora, _.eku, _.o, _.la, _.taj],
  `Tu aimerais que je t'embrasse la verge ?`
)
