import * as _ from '.'

export const le = _.word('le', {
  adj: 'small',
  def: '5',
  suffix: 'small',
  see: () => [_.count],
})

export const hamale = _.word('hamale', {
  def: 'little finger',
})

export const ajale = _.word('ajale', {
  def: 'spark',
  posit: 'on top of me: 4 limbs and 1 genital (little finger)',
  etym: () => [_.aj],
})

export const nele = _.word('nele', {
  def: 'confusion',
  adj: 'insecure',
  verb: 'to confound',
  see: () => [_.ganes, _.nanes],
})

export const eseshanele = _.alt('eseshanele', {
  glo: 'PASS.they9.**confound**',
  alt: () => _.nele,
})

export const le5 = _.alt('le', {
  glo: '**5**',
  alt: () => _.le,
})

export const lehipi = _.alt('lehipi', {
  glo: '**5**.*10*',
  alt: () => _.le,
})
