import * as _ from '.'

export const pe = _.word('pe', {
  conj: 'some',
  glo: '3PL.INDF',
  noun: '3',
  suffix: 'some',
  see: () => [_.mun, _.counting],
  posit: 'two legs and a buttock (doggy style)',
})

export const tope = _.word('tope', {
  det: 'to some',
  glo: 'POSS.3PL.INDF',
  etym: () => [_.to, _.de],
  see: () => [_.poss],
})

export const peda = _.word('peda', {
  pron: 'some',
  glo: '3PL.INDF',
  etym: () => [_.pe, _.oda],
  see: () => [_.peya, _.pron],
})

export const peya = _.word('peya', {
  pron: 'some (poetic)',
  glo: '3PL.INDF.POET',
  etym: () => [_.pe, _.yada],
  see: () => [_.peda, _.pron],
})

export const hamape = _.word('hamape', {
  noun: 'middle finger',
  etym: () => [_.hama, _.pe],
  posit: '(mun) indicated by thumb against middle finger',
})

export const nepe = _.word('nepe', {
  noun: 'limbo (forgetting "pa")',
  adj: 'offensive',
  see: () => [_.gunes, _.nunes],
})

export const pe3 = _.alt('pe', {
  glo: '3',
  alt: () => _.pe,
})
