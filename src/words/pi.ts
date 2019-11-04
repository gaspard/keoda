import * as _ from '.'

export const pi = _.word('pi', {
  adv: 'ici',
  noun: '1',
  position: 'debout',
  conj: 'je',
  desc: () => `Opposé de ${_.pa}.`,
})

export const ipi = _.word('ipi', {
  pronoun: 'à toi, je',
  position: 'debout (indiquée par un signe de main: pouce dressé)',
})

// 1
_.see(_.pi)
// 2
_.see(_.de)
// 3
_.see(_.pe)
// 4
_.see(_.ka)
// 5
_.see(_.lil)

export const aupi = _.example([_.au, _.pi], `S'aimer soi-même, ici.`)
