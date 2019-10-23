import * as _ from '.'

export const lam = _.word('lam', {
  verb: 'laver',
  noun: 'eau',
})

export const ilamoda = _.example([_.i, _.lam, _.oda], `Lave-toi le corps.`)
