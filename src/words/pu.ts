import * as _ from '.'

export const pu = _.word('pu', {
  noun: 'couleur tomate',
})

export const putam = _.word('putam', {
  noun: 'tomate (fruit), août',
  derived: [_.pu, _.tam],
})
_.see(_.seasons)
_.see(_.fruits)
