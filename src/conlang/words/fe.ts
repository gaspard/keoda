import * as _ from '.'

export const fe = _.word('fe', {
  noun: '7',
  prefix: 'on top',
  verb: 'to cover, to be on top',
  desc: () => `
${_.phrase('I like your nakedness.', _.ozu, _.nefenesti)}
  `,
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
  verb: 'to uncover/undress',
})

_.see(_.nefeoda)
_.see(_.nemafeyon)

export const fepa = _.word('fepa', {
  noun: 'pride',
  see: () => [_.ganes, _.fefi],
})

export const fefi = _.word('fefi', {
  adj: 'adapting',
  see: () => [_.nanes, _.fepa],
})

export const afe = _.alt('afe', {
  glo: '3SG.cover',
  alt: () => _.fe,
})

export const okeinefelir = _.alt('okeinefelir', {
  glo: '1SG.HONOR.undress.FUT',
  alt: () => _.nefe,
})

export const piyinefelir = _.alt('piyinefelir', {
  glo: '1SG.DPRV.undress.FUT',
  alt: () => _.nefe,
})

export const esyinefe = _.alt('esyinefe', {
  glo: 'INTR.2SG.DPRV.undress',
  alt: () => _.nefe,
})

export const nefenesti = _.alt('nefenesti', {
  glo: 'naked.BE.2SG.POSS',
  alt: () => _.nefe,
})
