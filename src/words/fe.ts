import * as _ from '.'

export const fe = _.word('fe', { prefix: 'sur' })
export const feo = _.word('feo', { adv: 'sur moi' })

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
