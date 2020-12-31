import * as _ from '.'

export const fe = _.word('fe', {
  noun: '7',
  prefix: 'on top',
  verb: 'to cover, to be on top',
})
_.see(_.counting)
_.see(_.faj)

export const fena = _.word('fena', {
  noun: 'choux (couches), février',
})

export const feo = _.word('feo', {
  adv: 'sur moi',
})

export const feoda = _.word('feoda', {
  noun: 'habits',
  desc: () => `Littéralement "sur le corps".`,
})

export const nefe = _.word('nefe', {
  adj: 'naked',
  verb: 'to uncover',
})

_.see(_.nefeoda)
_.see(_.nemafeyon)

export const fepa = _.word('fepa', {
  noun: 'pride',
  see: () => [_.gunes, _.fefi],
})

export const fefi = _.word('fefi', {
  adj: 'adapting',
  see: () => [_.nunes, _.fepa],
})

export const afe = _.alt('afe', {
  glo: '3SG.cover',
  alt: () => _.fe,
})

export const okeinefelir = _.alt('okeinefelir', {
  glo: 'I.HONOR.undress.FUT',
  alt: () => _.nefe,
})

export const oyinefelir = _.alt('oyinefelir', {
  glo: 'I/we.DPRV.undress.FUT',
  alt: () => _.nefe,
})
