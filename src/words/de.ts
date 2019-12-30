import * as _ from '.'

export const de = _.word('de', {
  noun: '2',
  pronoun: 'nous deux',
  position: 'sur le dos (2) jambes écartées',
  conj: 'nous deux',
})
_.see(_.demaconj)
_.see(_.counting)

export const deda = _.word('deda', {
  noun: 'toi',
})
_.see(_.pida)

export const demimunwe = _.example(
  [_.de, _.mi, _.munwe],
  `Nous deux allons caresser le sein droite (à toi).`
)

export const hamade = _.word('hamade', {
  noun: 'index (2ème doigt)',
  position:
    'sur le dos les (2) jambes écartées (indiquée par un signe de main: pouce contre index)',
})

export const nede = _.word('nede', {
  noun: 'vie sans temps (stress, pas de mémoire)',
})
_.see(_.scale)
