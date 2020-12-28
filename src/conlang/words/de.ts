import * as _ from '.'

export const de = _.word('de', {
  conj: 'us two (1PL.DU)',
  noun: '2',
  posit: 'on the back *two* legs wide open',
})
_.see(_.demaconj)
_.see(_.counting)

export const deda = _.word('deda', {
  pron: 'us two',
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
  noun: 'anguish',
  adj: 'fighting',
  desc: () => 'life with time (anxiety, few memories)',
  see: () => [_.gunes, _.nunes],
})
