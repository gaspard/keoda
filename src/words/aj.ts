import * as _ from '.'

export const aj = _.word('aj', {
  noun: 'feu',
  verb: 'brûler',
})

export const ajapi = _.word('ajapi', {
  noun: 'calcination de soi, transformation totale',
  derived: () => [_.aj, _.pi],
})

_.see(_.naj)
_.see(_.lilaj)
