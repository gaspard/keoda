import * as _ from '.'

export const ya = _.word('ya', {
  noun: 'nuit',
})
_.see(_.yaon)
_.see(_.yo)

export const yagi = _.word('yagi', {
  noun: 'Bonne (douce) nuit',
  derived: [_.ya, _.gi],
})

export const yaonagi = _.word('yaonagi', {
  noun: 'Bonsoir (bon lever de nuit)',
  derived: [_.yaon, _.gi],
})

_.see(_.yogi)
