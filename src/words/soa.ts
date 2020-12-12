import * as _ from '.'

export const soa = _.word('soa', {
  noun: 'la terre, le sol',
  suffix: 'au sol',
  prefix: 'proche du sol, des pieds',
})

export const lisoa = _.word('lisoa', {
  noun: 'table (petit sol)',
  derived: () => [_.lil, _.soa],
})

_.see(_.efenwensoa)
_.see(_.al)
