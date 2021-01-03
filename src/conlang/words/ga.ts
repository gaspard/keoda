import * as _ from '.'

export const ga = _.word('ga', {
  noun: 'spirit',
  see: () => [_.gu],
})

export const gana = _.word('gana', {
  noun: 'earth',
  etym: () => [_.ga, _.na],
  see: () => [_.gunu],
})

export const ganaroa = _.alt('ganaroa', {
  glo: '**earth**.INESS',
  alt: () => _.gana,
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
  noun: 'attention (esprit tiré)',
  etym: () => [_.gau, _.u],
})
_.see(_.gai)

export const gao = _.word('gao', {
  noun: 'attention (esprit projeté)',
  etym: () => [_.ga, _.o],
})

export const kuga = _.word('kuga', {
  noun: "la pensée causale, l'esprit de victime",
  etym: () => [_.ku, _.ga],
})

export const nega = _.word('nega', {
  noun: 'fou (sans esprit)',
  glo: 'fou',
  adv: 'de manière folle',
  etym: () => [_.ne, _.ga],
})

export const nega_adv = _.alt('nega', {
  glo: '*fou*.ADV',
  alt: () => _.nega,
})
