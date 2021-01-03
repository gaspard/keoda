import * as _ from '.'

export const ya = _.word('ya', {
  noun: 'night',
  see: () => [_.yo],
})
_.see(_.yaon)
_.see(_.yo)

export const yagi = _.word('yagi', {
  noun: 'goodnight',
  etym: () => [_.ya, _.gi],
})

export const yaonagi = _.word('yaonagi', {
  noun: 'good evening',
  etym: () => [_.yaon, _.gi],
})

_.see(_.yogi)

export const iwa = _.word('iwa', {
  noun: 'owl',
  etym: () => [_.iwi, _.ya],
})

export const yafa = _.word('yafa', {
  verb: 'to dream',
  etym: () => [_.ya, _.fa],
})

export const yadifa = _.word('yadifa', {
  noun: 'dream',
  etym: () => [_.ya, _.di, _.fa],
})

// ==== alt

export const oyafalau = _.alt('oyafalau', {
  glo: '1SG.INDF.**dream**.ETERN',
  alt: () => _.yafa,
})
