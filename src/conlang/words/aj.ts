import * as _ from '.'

export const aj = _.word('aj', {
  noun: 'fire',
  verb: 'to burn',
})

export const ajapi = _.word('ajapi', {
  noun: 'calcination de soi, transformation totale',
  etym: () => [_.aj, _.pi],
})

_.see(_.naj)
_.see(_.ajale)
