import * as _ from '.'

export const pi = _.word('pi', {
  adv: 'ici',
  noun: '1',
  desc: () => `Opposé de ${_.pa}.`,
})

export const ipi = _.word('ipi', {
  pronoun: 'à toi, je',
})

// 1
_.see(_.pi)
// 2
_.see(_.de)
// 3
_.see(_.per)
// 4
_.see(_.ka)

export const aupi = _.example([_.au, _.pi], `S'aimer soi-même, ici.`)
