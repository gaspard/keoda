import * as _ from '.'

export const lam = _.word('lam', {
  verb: 'laver',
  noun: 'eau',
})

export const ilamoda = _.example([_.i, _.lam, _.oda], `Lave-toi le corps.`)

export const falam = _.word('falam', {
  noun: 'larmes profondes',
  verb: 'pleurs qui lavent',
})
_.see(_.ausifalamau)
_.see(_.falo)

export const lama = _.word('lama', {
  noun: 'mer',
  derived: [_.lam, _.da],
})

export const lamagoa = _.word('lamagoa', {
  noun: 'océean',
  derived: [_.lama, _.goa],
})

export const lami = _.word('lami', {
  noun: 'vague',
})

export const lamioda = _.word('snake', {
  noun: 'snake',
  derived: [_.lami, _.oda],
})
