import * as _ from '.'

export const yon = _.word('yon', { noun: 'vulve' })

yon.desc = () =>
  `De ${_.yu} et ${_.on} (joie-apparaître = donner la joie = accoucher)`

export const keyon = _.word('keyon', { noun: 'clitoris' })

export const mukeyon = _.example([_.mu, _.keyon], `Pince-moi le clitoris.`)

export const feyon = _.word('feyon', { noun: 'culotte' })

_.see(_.nemafeyon)

_.see(_.yaj)
_.see(_.keyon)
