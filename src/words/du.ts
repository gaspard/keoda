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

export const duda = _.word('doda', {
  noun: 'petit.e frère/soeur',
  derived: [_.du, _.oda],
})
_.see(_.noda)

export const duto = _.word('duto', {
  noun: 'petit frère/vent',
  derived: [_.du, _.oto],
})
_.see(_.noto)

export const duna = _.word('duna', {
  noun: 'petite soeur/arbre',
  derived: [_.du, _.ana],
})
_.see(_.nona)

export const duwi = _.word('duwi', {
  noun: 'petit.e enby/oiseau',
  derived: [_.du, _.iwi],
})
_.see(_.nowi)

export const duyin = _.word('duyin', {
  noun: 'avant du vagin',
  derived: [_.du, _.yin],
})
