import * as _ from '.'

export const pe = _.word('pe', {
  subj: 'some',
  glo: 'they9.INDF',
  def: '3',
  suffix: 'some',
  see: () => [_.mun, _.count],
  posit: 'two legs and a buttock (doggy style)',
})

export const ape = _.word('ape', {
  def: '**someˣ**',
  prefix: '**to someone**',
  suffix: '**to someone**',
  etym: () => [_.aS, _.pe],
  see: () => [_.subj],
})

export const peda = _.word('peda', {
  def: '**some person**',
  glo: '**someone**',
  etym: () => [_.pe, _.da],
  see: () => [_.subj],
})

export const pesen = _.word('pesen', {
  def: '**some place**',
  etym: () => [_.pe, _.sen],
  see: () => [_.subj],
})

export const hamape = _.word('hamape', {
  def: 'middle finger',
  etym: () => [_.hama, _.pe],
  posit: '(mun) indicated by thumb against middle finger',
})

export const nepe = _.word('nepe', {
  def: 'limbo (forgetting "pa")',
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
