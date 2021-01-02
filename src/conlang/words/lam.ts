import * as _ from '.'

// TODO: Could this be a huge source of confusion with 'am' suffix ?
export const lam = _.word('lam', {
  verb: 'to wash',
  noun: 'water',
})
_.see(_.lamon)

export const ilamoda = _.example([_.i, _.lam, _.oda], `Lave-toi le corps.`)

export const falam = _.word('falam', {
  noun: 'tears',
})
_.see(_.ausifalamau)
_.see(_.falo)

export const lama = _.word('lama', {
  noun: 'mer',
  etym: () => [_.lam, _.da],
})

export const lamagoa = _.word('lamagoa', {
  noun: 'océan',
  etym: () => [_.lama, _.goa],
})

export const lami = _.word('lami', {
  noun: 'vague',
})

export const lamioda = _.word('lamioda', {
  noun: 'serpent',
  etym: () => [_.lami, _.oda],
})

export const lamoa = _.word('lamoa', {
  noun: 'source (lieu)',
  etym: () => [_.lam, _.on, _.da],
})

export const lamu = _.word('lamu', {
  verb: 'boire',
})
