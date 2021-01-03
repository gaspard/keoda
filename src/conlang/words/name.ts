import * as _ from '.'

export const name = _.word('name', {
  noun: 'wood',
})

export const kaname = _.word('kaname', {
  noun: 'chair',
  etym: () => [_.ka, _.name],
})

export const namel = _.word('namel', {
  noun: 'stick',
  etym: () => [_.name, _.el],
})
