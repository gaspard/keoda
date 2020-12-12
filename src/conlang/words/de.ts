import * as _ from '.'

export const de = _.word('de', {
  noun: '2',
  pron: 'nous deux',
  posit: 'sur le dos (2) jambes écartées',
  conj: 'nous deux (5p)',
})
_.see(_.demaconj)
_.see(_.counting)

export const deda = _.word('deda', {
  pron: 'nous deux',
})
_.see(_.pronouns)
_.see(_.peda)

export const demimunwe = _.example(
  [_.de, _.mi, _.munwe],
  `Nous deux allons caresser le sein droite (à toi).`
)

export const hamade = _.word('hamade', {
  noun: 'index (2ème doigt)',
  posit:
    'sur le dos les (2) jambes écartées (indiquée par un signe de main: pouce contre index)',
})

export const nede = _.word('nede', {
  noun: 'vie sans temps (stress, pas de mémoire)',
})
_.see(_.scale)
