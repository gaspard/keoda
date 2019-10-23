import * as _ from '.'

export const pi = _.word('pi', {
  noun: 'ici',
  desc: () => `Opposé de ${_.pa}.`,
})

export const aupi = _.example([_.au, _.pi], `S'aimer soi-même, ici.`)
