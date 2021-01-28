import * as _ from '.'

export const yon = _.word('yon', {
  def: 'vulva',
  etym: () => [_.yu, _.on],
})

export const riyon = _.word('riyon', {
  def: 'peripheral lips',
  etym: () => [_.ri, _.yon],
})

export const royon = _.word('royon', {
  def: 'central lips of the vulva',
  etym: () => [_.ro, _.yon],
})
export const yonin = _.word('yonin', {
  def: 'hot vulva, erect',
  etym: () => [_.yon, _.in],
})
export const yonegi = _.word('yonegi', {
  def: 'cold vulva, sleeping',
  etym: () => [_.yon, _.egi],
})

_.see(_.genitals)

export const keyon = _.word('keyon', {
  def: 'clitoris',
  see: () => [_.yoneri],
  etym: () => [_.ke, _.yon],
})

export const mukeyon = _.example([_.mu, _.keyon], `Pince-moi le clitoris.`)

export const feyon = _.word('feyon', {
  def: 'panties',
  etym: () => [_.fe, _.yon],
})

// === alt

export const yonam = _.alt('yonam', {
  glo: '**vulva**+',
  alt: () => _.yon,
})

export const feyonam = _.alt('feyonam', {
  glo: '**panties**+',
  alt: () => _.feyon,
})

export const yonato = _.alt('yonato', {
  glo: '**vulva**.wex',
  alt: () => _.yon,
})
