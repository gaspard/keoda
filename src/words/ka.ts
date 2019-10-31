import * as _ from '.'

export const ka = _.word('ka', {
  noun: '4',
  pronoun: 'tous',
  suffix: 'tous',
  position: 'à quatre pattes',
})

export const ika = _.word('ika', {
  pronoun: 'à toi, nous toutes et tous',
})

export const hamaka = _.word('hamaka', {
  noun: 'annulaire (4ème doigt)',
  position:
    'à quatre pattes (indiquée par un signe de main: pouce contre annulaire)',
})

// 1
_.see(_.pi)
// 2
_.see(_.de)
// 3
_.see(_.per)
// 4
_.see(_.ka)
// 5
_.see(_.lil)
