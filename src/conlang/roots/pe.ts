import * as _ from '../lang'

export const pe = _.word('pe', {
  def: 'some',
  glo: 'they9.INDF',
  noun: '3',
  suff: 'some',
  see: () => [_.mun, _.count],
  pos: 'two legs and a buttock (doggy style)',
})

export const pena = _.word('pena', {
  noun: 'something',
  etym: () => [_.pe, _.na],
})

// FIXME: ALL THIS IS ALL WRONG NOW

export const peda = _.word('peda', {
  noun: 'someone',
  etym: () => [_.pe, _.da],
  see: () => [_.subj],
})

export const pesen = _.word('pesen', {
  noun: 'some place',
  etym: () => [_.pe, _.asen],
  see: () => [_.subj],
})

export const hamape = _.word('hamape', {
  noun: 'middle finger',
  etym: () => [_.hama, _.pe],
  pos: '(mun) indicated by thumb against middle finger',
})

export const nepe = _.word('nepe', {
  noun: 'limbo (forgetting "pa")',
  adj: 'offensive',
  see: () => [_.ganes, _.nanes],
})
