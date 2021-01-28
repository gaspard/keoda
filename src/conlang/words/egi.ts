import * as _ from '.'

export const egi = _.word('egi', {
  adj: 'cold',
})

export const egina = _.word('egina', {
  def: 'chicory, January',
  etym: () => [_.egi, _.ina],
  see: () => [_.plants, _.seasons],
})
