import * as _ from '.'

export const soa = _.word('soa', {
  noun: 'floor',
  see: () => [_.al],
})

export const lisoa = _.word('lisoa', {
  noun: 'table',
  etym: () => [_.lil, _.soa],
})

_.see(_.efenwensoa)
_.see(_.al)
