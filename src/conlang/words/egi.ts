import * as _ from '.'

export const egi = _.word('egi', {
  prop: 'cold',
})

export const egina = _.word('egina', {
  noun: 'chicory, January',
  etym: () => [_.egi, _.ina],
  see: () => [_.plants, _.seasons],
})
