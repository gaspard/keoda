import * as _ from '.'

export const ka = _.word('ka', {
  noun: '4 (singularité)',
  pronoun: 'tous',
  suffix: 'tous',
  position: 'à quatre pattes',
  conj: 'tou.te.s',
})
_.see(_.kamaconj)
_.see(_.counting)

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
  derived: [_.ne, _.ka],
})
_.see(_.scale)
