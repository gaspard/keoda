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

export const noda = _.word('noda', {
  noun: 'petit.e soeur/frère',
  derived: [_.no, _.oda],
})
_.see(_.doda)

export const nopi = _.word('nopi', {
  noun: 'dos',
  position: 'allongé sur le dos',
  derived: [_.no, _.pi],
})

export const djonopi = _.word('djonopi', {
  noun: 'bas du dos',
  derived: [_.djo, _.nopi],
})

_.see(_.enopisamdjobajom)
