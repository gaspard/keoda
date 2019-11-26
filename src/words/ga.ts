import * as _ from '.'

export const ga = _.word('ga', {
  noun: 'esprit',
  desc: () =>
    `Dans le sens de l'esprit des choses, l'esprit de la nature, etc.`,
})
_.see(_.gu)

export const gana = _.word('gana', {
  noun: 'la terre',
  derived: [_.ga, _.na],
})

// C'est l'eau qui devrait être la caresse 'gai', non ?
export const gai = _.word('gai', {
  noun: 'conscience, pluie',
  desc: () => `esprit caressé / qui caresse (la pluie sur la terre)`,
})
_.see(_.gugai)

// gai ma
export const gaima = _.example(
  [_.gai, _.ma],
  `Mets ta conscience dans ma main (laisse ton esprit être caressé par ma main).`
)

// gau ma
export const gauma = _.example(
  [_.gau, _.ma],
  `Mets ton attention dans ma main (tire ton esprit vers ma main).`
)

export const kegai = _.word('kegai', {
  noun: 'dieu',
  desc: () => `caché dans l'esprit caressé`,
})
_.see(_.ohenurlilajkegai)

export const gau = _.word('gau', {
  noun: 'attention',
  desc: () => `esprit tiré`,
})
_.see(_.gai)

export const kuga = _.word('kuga', {
  noun: "la pensée causale, l'esprit de victime",
  derived: [_.ku, _.ga],
})
