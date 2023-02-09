import * as _ from '../lang'

export const shu = _.word('shu', {
  def: 'and',
  see: () => [_.prep],
})

export const neshu = _.word('neshu', {
  def: 'but',
  see: () => [_.prep],
  etym: () => [_.ne, _.shu],
})
