import * as _ from '.'

export const iwi = _.word('iwi', {
  noun: 'oiseau',
})

export const iwigui = _.word('iwigui', {
  noun: 'oiseau qui naît (phénix)',
  derived: [_.iwi, _.gui],
})
