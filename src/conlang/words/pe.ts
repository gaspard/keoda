import * as _ from '.'

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

export const ape = _.word('ape', {
  noun: '**someˣ**',
  pref: '**to someone**',
  suff: '**to someone**',
  etym: () => [_.a, _.pe],
  see: () => [_.subj],
})

export const peda = _.word('peda', {
  noun: '**some person**',
  glo: '**someone**',
  etym: () => [_.pe, _.da],
  see: () => [_.subj],
})

export const pesen = _.word('pesen', {
  noun: '**some place**',
  etym: () => [_.pe, _.sen],
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

export const pe3 = _.alt('pe', {
  glo: '3',
  alt: () => _.pe,
})

export const pehipa = _.alt('pehipa', {
  glo: '**3**.*100*',
  alt: () => _.pe,
})

export const pedam = _.alt('pedam', {
  glo: '**someone**+',
  alt: () => _.peda,
})
