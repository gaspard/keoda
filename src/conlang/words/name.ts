import * as _ from '.'

export const name = _.word('name', {
  def: 'wood',
})

export const ajaname = _.word('ajaname', {
  def: 'ash',
  etym: () => [_.aj, _.name],
})

export const kaname = _.word('kaname', {
  def: 'chair',
  etym: () => [_.ka, _.name],
})

export const namel = _.word('namel', {
  def: 'stick',
  etym: () => [_.name, _.el],
})
