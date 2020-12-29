import * as _ from '.'

_.see(_.ofalirmun)

export const lir = _.word('lir', {
  tens: 'future',
  see: () => [_.lei, _.lem],
})
_.see(_.lemir)
_.see(_.liri)
_.see(_.lira)
_.see(_.liru)
_.see(_.liro)
_.see(_.lire)

export const lirana = _.word('lirana', {
  noun: 'promise',
  etym: () => [_.lira, _.na],
})

export const ilir = _.word('ilir', {
  noun: 'future you (you will...)',
  etym: () => [_.i, _.lir],
})

export const elir = _.word('elir', {
  noun: 'in the future',
  glo: 'future.BE',
  etym: () => [_.e, _.lir],
})

export const ofolir = _.alt('ofolir', {
  glo: 'I.INDF.whip',
  alt: () => _.fo,
})

export const omilirpal = _.example(
  [_.o, _.mi, _.lir, _.pal],
  'On va te masser les fesses.'
)

export const ofolirpal = _.example(
  [_.o, _.fo, _.lir, _.pal],
  'On va te fouetter les fesses.'
)

export const lirmunfa = _.example(
  [_.lir, _.mun, _.fa],
  'Tu vas montrer tes seins.'
)

export const lirlipa = _.example([_.lir, _.li, _.pa], 'Tu vas chanter.')

// Ofalir mun.
export const ofalirmun = _.example(
  [_.o, _.fa, _.lir, _.mun],
  'On va regarder tes seins.'
)

// Omalir tajwu pi.
export const olirimataj = _.example(
  [_.o, _.ma, _.lir, _.taj, _.topi],
  `On va se masturber (chacun pour soi).`
)
_.see(_.lau)
