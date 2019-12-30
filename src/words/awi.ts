import * as _ from '.'

export const awi = _.word('awi', {
  noun: 'poisson',
  verb: 'briller',
  adj: 'belle/beau',
})
_.see(_.fawulama)
_.see(_.munawi)

export const mawi = _.word('mawi', {
  noun: 'dauphin',
  derived: [_.mun, _.awi],
})
