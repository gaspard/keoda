import * as _ from '.'

export const baj = _.word('baj', {
  def: '**lower limb**',
  see: () => [_.rum],
})

export const djobaj = _.word('djobaj', {
  def: '**thigh**',
  etym: () => [_.jo, _.baj],
})

export const habaj = _.word('habaj', {
  def: '**leg**',
  etym: () => [_.ha, _.baj],
})

export const kebaj = _.word('kebaj', {
  def: '**testicles**',
  etym: () => [_.ke, _.baj],
})

// ==== alt

export const bajuki = _.alt('bajuki', {
  glo: '**lower limb**.*long*',
  alt: () => _.baj,
})
