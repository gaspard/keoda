import * as _ from '../lang'

export const aj = _.word('aj', {
  noun: 'spark',
  adj: 'alive',
  verb: 'to ignite',
  desc: () => `Dopamine.`,
  see: () => [_.ju],
})

export const nehaj = _.word('nehaj', {
  adj: 'lifeless',
  verb: 'to extinguish',
  etym: () => [_.ne, _.aj],
})

export const tionehaj = _.word('tionehaj', {
  noun: 'rape',
  adj: 'raped',
  verb: 'to rape',
  etym: () => [_.tio, _.nehaj],
})
