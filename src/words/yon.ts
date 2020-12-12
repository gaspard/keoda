import * as _ from '.'

export const yon = _.word('yon', {
  noun: 'vulve',
  desc: () =>
    `De ${_.yu} et ${_.on} (joie-apparaître = donner la joie = accoucher)`,
})

export const riyon = _.word('riyon', {
  noun: 'lèvres périphériques',
  derived: () => [_.ri, _.yon],
})

export const royon = _.word('royon', {
  noun: 'lèvres centrales',
  derived: () => [_.ro, _.yon],
})
export const yonin = _.word('yonin', {
  noun: 'vulve chaude, en érection',
  derived: () => [_.yon, _.in],
})
export const yonegi = _.word('yonegi', {
  noun: 'vulve froide, au repos',
  derived: () => [_.yon, _.egi],
})

_.see(_.genitals)

export const keyon = _.word('keyon', { noun: 'clitoris' })

export const mukeyon = _.example([_.mu, _.keyon], `Pince-moi le clitoris.`)

export const feyon = _.word('feyon', { noun: 'culotte' })

_.see(_.nemafeyon)

_.see(_.yaj)
_.see(_.keyon)
