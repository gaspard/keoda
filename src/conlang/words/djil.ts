import * as _ from '.'

export const djil = _.word('djil', {
  noun: 'cheveux',
  posit:
    'debout, le corps penché en avant, les cheveux offerts, prêts à être pris.',
})

export const djoda = _.word('djoda', {
  noun: 'ours',
  etym: () => [_.djil, _.oda],
})

export const edjil = _.example(
  [_.e, _.djil],
  `Tiens-toi en position djil, les cheveux offerts.`
)

export const nedjil = _.word('nedjil', {
  noun: 'sans poils',
  verb: 'raser',
})

export const inedjilobo = _.example(
  [_.i, _.nedjil, _.obo],
  `Va te raser le pubis.`
)

_.see(_.djiluki)
