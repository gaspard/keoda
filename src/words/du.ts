import * as _ from '.'

export const du = _.word('du', {
  prefix: 'devant',
  desc: () => 'Inspiré de sud (on regarde le sud).',
})
_.see(_.duha)

// devant
_.see(_.du)
// droite
_.see(_.we)
// gauche
_.see(_.se)
// derrière
_.see(_.no)

export const doda = _.word('doda', {
  noun: 'petit.e frère/soeur',
  derived: [_.du, _.oda],
})
_.see(_.noda)
export const dutoda = _.word('dutoda', {
  noun: 'petit frère',
})
_.see(_.notoda)
export const duyoda = _.word('duyoda', {
  noun: 'petite soeur',
})
_.see(_.noyoda)

export const duyin = _.word('duyin', {
  noun: 'avant du vagin',
  derived: [_.du, _.yin],
})
