import * as _ from '.'

export const iwi = _.word('iwi', {
  noun: 'oiseau',
})

export const iwiu = _.word('iwiu', {
  noun: 'voler',
  derived: [_.iwi, _.u],
})
_.see(_.awiu)

export const iwigui = _.word('iwigui', {
  noun: 'oiseau qui naît (phénix)',
  derived: [_.iwi, _.gui],
})
