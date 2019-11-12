import * as _ from '.'

export const du = _.word('du', {
  adj: 'devant',
  desc: () => 'Inspiré de sud (on regarde le sud).',
})
_.see(_.hadu)

// devant
_.see(_.du)
// droite
_.see(_.we)
// gauche
_.see(_.se)
// derrière
_.see(_.no)

export const doda = _.word('doda', {
  noun: 'grand.e frère/soeur',
  derived: [_.du, _.oda],
})
export const dutoda = _.word('dutoda', {
  noun: 'grand frère',
})
export const duyoda = _.word('duyoda', {
  noun: 'grande soeur',
})
