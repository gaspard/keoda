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
  pron: 'some (3PL.INDEF)',
  etym: () => [_.pe, _.oda],
})
_.see(_.pronouns)

export const hamape = _.word('hamape', {
  noun: 'middle finger',
  etym: () => [_.hama, _.pe],
  posit: '(mun) indicated by thumb against middle finger',
})

export const nepe = _.word('nepe', {
  adj: 'isolation (forgetting "pa")',
  see: () => [_.gunes, _.fipe],
})

export const fipe = _.word('fipe', {
  adj: 'offensive',
  see: () => [_.nunes, _.nepe],
})
