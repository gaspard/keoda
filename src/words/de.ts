import * as _ from '.'

export const de = _.word('de', {
  noun: '2',
  pronoun: 'nous deux',
  position: 'sur le dos (2) jambes écartées',
})

export const ide = _.word('ide', {
  pronoun: 'à toi, nous deux',
})

export const idemimunwe = _.example(
  [_.ide, _.mi, _.munwe],
  `À toi, nous deux allons caresser le sein droite.`
)

export const hamade = _.word('hamade', {
  noun: 'index (2ème doigt)',
  position:
    'sur le dos les (2) jambes écartées (indiquée par un signe de main: pouce contre index)',
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
