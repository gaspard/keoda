import * as _ from '.'

export const yo = _.word('yo', {
  noun: 'jour',
})
_.see(_.ya)

export const yogi = _.word('yogi', {
  noun: `Douce journée (salutation)`,
  etym: () => [_.yo, _.gi],
})
_.see(_.yagi)

_.see(_.yohon)
export const yohonagi = _.word('yohonagi', {
  noun: 'Bon lever de jour',
  etym: () => [_.yohon, _.gi],
})
