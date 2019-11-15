import * as _ from '.'

export const pi = _.word('pi', {
  adv: 'ici',
  noun: '1',
  position: 'debout',
  conj: 'je',
  desc: () => `Opposé de ${_.pa}.`,
})
_.see(_.counting)

export const aupi = _.example([_.au, _.pi], `S'aimer soi-même, ici.`)

export const pine = _.word('pine', {
  noun: 'division',
})
