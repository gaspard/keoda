import * as _ from '.'

export const no = _.word('no', {
  prefix: 'derrière',
  desc: () => 'Inspiré de nord (on regarde le sud)',
})
_.see(_.noha)
_.see(_.noyin)

// devant
_.see(_.du)
// droite
_.see(_.we)
// gauche
_.see(_.se)
// derrière
_.see(_.no)

export const noda = _.word('noda', {
  noun: 'grand.e soeur/frère',
  derived: [_.no, _.oda],
})
_.see(_.doda)
export const notoda = _.word('notoda', {
  noun: 'grand frère',
})
_.see(_.dutoda)

export const noyoda = _.word('noyoda', {
  noun: 'grande soeur',
})
_.see(_.duyoda)

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

export const noyin = _.word('noyin', {
  noun: `fond du vagin (col de l'utérus)`,
  derived: [_.no, _.yin],
})
