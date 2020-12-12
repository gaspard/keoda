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
  etym: () => [_.no, _.oda],
})
_.see(_.duda)

export const noto = _.word('noto', {
  noun: 'grand frère/vent',
})
_.see(_.duto)

export const nona = _.word('nona', {
  noun: 'grande soeur/arbre',
  etym: () => [_.no, _.ana],
})
_.see(_.duna)

export const nowi = _.word('nowi', {
  noun: 'grand.e frère/soeur enby/oiseau',
  etym: () => [_.no, _.iwi],
})
_.see(_.duwi)

export const nopi = _.word('nopi', {
  noun: 'dos',
  position: 'allongé sur le dos',
  etym: () => [_.no, _.pi],
})

export const djonopi = _.word('djonopi', {
  noun: 'bas du dos',
  etym: () => [_.djo, _.nopi],
})

_.see(_.enopisamdjobajom)

export const noyin = _.word('noyin', {
  noun: `fond du vagin (col de l'utérus)`,
  etym: () => [_.no, _.yin],
})
