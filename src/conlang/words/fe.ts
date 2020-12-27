import * as _ from '.'

export const fe = _.word('fe', {
  noun: '7 (sur)',
  prefix: 'sur',
  verb: 'être sur',
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
  noun: 'nu',
  adj: 'découvert',
  verb: 'déshabiller, découvrir',
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
