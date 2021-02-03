import * as _ from '.'

export const hafo = _.word('hafo', {
  verb: 'to fall',
  etym: () => [_.ha, _.fo],
})

export const dironeoda = _.example(
  [_.dir, _.o$, _.neoda],
  'Quand je serai mort.e...'
)

// === alt

export const ahafo = _.alt('ahafo', {
  glo: 'they1.**fall**',
  alt: () => _.hafo,
})
