import * as _ from '.'

export const no = _.word('no', {
  adj: 'derrière',
  desc: () => 'Inspiré de nord (on regarde le sud)',
})
_.see(_.hano)

// devant
_.see(_.du)
// droite
_.see(_.we)
// gauche
_.see(_.se)
// derrière
_.see(_.no)

export const nopi = _.word('nopi', {
  noun: 'dos',
  position: 'allongé sur le dos',
  desc: () => `Ne ${_.no} et ${_.pi}`,
})

export const djonopi = _.word('djonopi', {
  noun: 'bas du dos',
})

_.see(_.enopisamdjobajom)
