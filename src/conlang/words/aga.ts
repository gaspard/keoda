import * as _ from '.'

export const aga = _.word('aga', { noun: 'musique' })
_.see(_.agu)

export const agana = _.word('agana', {
  noun: 'son (la chose musique incarnée)',
  etym: () => [_.aga, _.na],
})

export const agade = _.word('agade', {
  noun: 'écho (deux sons)',
  etym: () => [_.aga, _.de],
})

export const agauki = _.word('agauki', {
  verb: 'résonner (le son long)',
  etym: () => [_.agana, _.uki],
})

export const akida = _.word('agaukida', {
  noun: 'temple (le lieu qui résonne)',
})

_.see(_.ago)
