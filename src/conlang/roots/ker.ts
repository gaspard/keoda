import * as _ from '../lang'

export const ker = _.word('ker', {
  noun: 'nail',
  verb: 'to scratch',
  adj: 'fierce',
  adv: 'fiercely',
})

export const kerebaj = _.word('kerebaj', {
  noun: 'hoof',
  desc: () => `Nail of the leg.`,
  etym: () => [_.ker, _.baj],
  see: () => [_.ker, _.baj],
})
