import * as _ from '../lang'

export const ya = _.word('ya', {
  noun: 'night',
  see: () => [_.yo],
})

export const yagi = _.word('yagi', {
  noun: 'goodnight',
  etym: () => [_.ya, _.gi],
})

export const yaonagi = _.word('yaonagi', {
  noun: 'good evening',
  etym: () => [_.yaon, _.gi],
})

// À genoux, position de méditation le regard au loin
export const iwa = _.word('iwa', {
  noun: 'owl',
  etym: () => [_.iwi, _.ya],
})

export const yafa = _.word('yafa', {
  verb: 'to dream',
  etym: () => [_.ya, _.fa],
})

export const yalef = _.word('yalef', {
  noun: 'dream',
  etym: () => [_.ya, _.le, _.fa],
})

export const teya = _.word('teya', {
  noun: 'tonight',
  etym: () => [_.ten, _.ya],
})

export const peya = _.word('peya', {
  noun: 'some night',
  etym: () => [_.pe, _.ya],
})

export const liraya = _.word('liraya', {
  noun: 'tomorrow night',
  etym: () => [_.iri, _.ya],
})

export const lemaya = _.word('lemaya', {
  noun: 'night before',
  etym: () => [_.emi, _.ya],
})
