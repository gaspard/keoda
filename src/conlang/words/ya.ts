import * as _ from '.'

export const ya = _.word('ya', {
  noun: 'nuit',
})
_.see(_.yaon)
_.see(_.yo)

export const yagi = _.word('yagi', {
  noun: 'Bonne (douce) nuit',
  etym: () => [_.ya, _.gi],
})

export const yaonagi = _.word('yaonagi', {
  noun: 'Bonsoir (bon lever de nuit)',
  etym: () => [_.yaon, _.gi],
})

_.see(_.yogi)

export const iwa = _.word('iwa', {
  noun: 'hibou',
  etym: () => [_.iwi, _.ya],
})

export const yafa = _.word('yafa', {
  verb: 'rêver (la nuit voit)',
  etym: () => [_.ya, _.fa],
})

export const yadifa = _.word('yadifa', {
  noun: 'rêve (la nuit qui voit)',
  etym: () => [_.ya, _.di, _.fa],
})
