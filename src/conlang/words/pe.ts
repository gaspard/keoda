import * as _ from '.'

export const pe = _.word('pe', {
  conj: 'some (3PL.INDF)',
  noun: '3',
  suffix: 'some',
  see: () => [_.mun],
  posit: 'two legs and a buttock (doggy style)',
})
_.see(_.pemaconj)
_.see(_.counting)

export const peda = _.word('peda', {
  pron: 'some (3PL.INDF)',
  etym: () => [_.pe, _.oda],
})
_.see(_.pronouns)

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
