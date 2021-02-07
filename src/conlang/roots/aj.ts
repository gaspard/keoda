import * as _ from '../lang'

export const aj = _.word('aj', {
  noun: 'fire',
  verb: 'to burn',
  desc: () => `Dopamine, serotonine.`,
})

export const ajapi = _.word('ajapi', {
  noun: 'ego-burn',
  verb: 'to burn the ego',
  desc: () => `Initiation`,
  etym: () => [_.aj, _.pi],
  see: () => [_.iwigui],
})
