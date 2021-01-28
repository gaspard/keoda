import * as _ from '.'

export const pu = _.word('pu', {
  def: 'couleur tomate',
  see: () => [_.colors],
})

export const pantame = _.word('pantame', {
  def: 'tomato, August',
  etym: () => [_.pan, _.tame],
  see: () => [_.fruits, _.food, _.seasons],
})
_.see(_.seasons)
