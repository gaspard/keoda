import * as _ from '.'

export const de = _.word('de', {
  conj: 'us two (1PL.DU)',
  noun: '2',
  posit: 'on the back *two* legs wide open',
  glo: '1PL.DU',
  see: () => [_.count],
})

export const tode = _.word('tode', {
  det: 'to us two',
  glo: 'POSS.1PL.DU',
  etym: () => [_.to, _.de],
  see: () => [_.poss],
})

export const deda = _.word('deda', {
  pron: 'us two',
  glo: '1PL.DU',
  etym: () => [_.de, _.oda],
  see: () => [_.deyada, _.pron],
})

export const deyada = _.word('deyada', {
  pron: 'us two',
  glo: '1PL.DU.POET',
  etym: () => [_.de, _.yada],
  see: () => [_.deda, _.pron],
})

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
  see: () => [_.ganes, _.nanes],
})

export const de2 = _.alt('de', {
  glo: '**2**',
  alt: () => _.de,
})

export const dehipi = _.alt('dehipi', {
  glo: '**2**.*10*',
  alt: () => _.de,
})

export const dehipu = _.alt('dehipu', {
  glo: '**2**.*1000*',
  alt: () => _.de,
})
