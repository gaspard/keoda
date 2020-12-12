import * as _ from '.'

export const ka = _.word('ka', {
  noun: '4 (singularité, qui ne peut pas être pensé)',
  pronoun: 'tous',
  suffix: 'tous',
  position: 'à quatre pattes',
  conj: 'tou.te.s',
})
_.see(_.kamaconj)
_.see(_.counting)

export const kada = _.word('kada', {
  noun: 'tou.te.s',
  derived: () => [_.ka, _.oda],
})
_.see(_.pronouns)

export const ika = _.word('ika', {
  pronoun: 'à toi, nous toutes et tous',
})

export const hamaka = _.word('hamaka', {
  noun: 'annulaire (4ème doigt)',
  position:
    'à quatre pattes (indiquée par un signe de main: pouce contre annulaire)',
})

export const neka = _.word('neka', {
  noun: 'honte',
  derived: () => [_.ne, _.ka],
})
_.see(_.scale)

export const karu = _.word('karu', {
  verb: 'choisir (la réalisation du singulier en soi)',
  derived: () => [_.ka, _.ru],
})
_.see(_.ligau)

export const koda = _.word('koda', {
  noun: 'cow',
  derived: () => [_.ka, _.oda],
})
