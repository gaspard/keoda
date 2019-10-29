import * as _ from '.'

export const olir = _.word('olir', {
  noun: 'future nous (on va...)',
  desc: () => `Version abrégée: ${_.lir}`,
})
_.see(_.olirfamun)

export const lir = _.word('lir', {
  noun: 'future nous (on va...)',
  desc: () => `Abréviation pour ${_.olir}`,
})
_.see(_.lem)
_.see(_.lemir)

export const ilir = _.word('ilir', {
  noun: 'future toi (tu vas...)',
})

export const elir = _.word('elir', {
  noun: 'le future exist (dans le future)',
})

export const olirmipal = _.example(
  [_.olir, _.mi, _.pal],
  'On va te masser les fesses.'
)

export const olirfopal = _.example(
  [_.olir, _.fo, _.pal],
  'On va te fouetter les fesses.'
)

export const lirmunfa = _.example(
  [_.lir, _.mun, _.fa],
  'Tu vas montrer tes seins.'
)

export const lirlipa = _.example([_.lir, _.li, _.pa], 'Tu vas chanter.')

export const olirfamun = _.example(
  [_.olir, _.fa, _.mun],
  'On va regarder tes seins.'
)

export const olirimataj = _.example(
  [_.olir, _.i, _.ma, _.taj],
  `On va se masturber (chacun pour soi).`
)
_.see(_.palir)
