import * as _ from '.'

export const name = _.word('name', {
  noun: 'wood',
})

export const ajaname = _.word('ajaname', {
  noun: 'ash',
  etym: () => [_.aj, _.name],
})

export const kaname = _.word('kaname', {
  noun: 'chair',
  etym: () => [_.ka, _.name],
})

export const namel = _.word('namel', {
  noun: 'stick',
  etym: () => [_.name, _.el],
})
