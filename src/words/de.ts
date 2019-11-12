import * as _ from '.'

export const de = _.word('de', {
  noun: '2',
  pronoun: 'nous deux',
  position: 'sur le dos (2) jambes écartées',
  conj: 'nous deux',
})
_.see(_.demaconj)

export const demimunwe = _.example(
  [_.de, _.mi, _.munwe],
  `Nous deux allons caresser le sein droite (à toi).`
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
_.see(_.pe)
// 4
_.see(_.ka)
// 5
_.see(_.lil)
