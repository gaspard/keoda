import * as _ from '.'

// o case
export const oC = _.word('o', {
  id: 'oC',
  def: '**shock**',
  suffix: '**shock**',
  glo: 'PUSH (ABL)',
  see: () => [_.oS, _.verbs],
})

export const hafo = _.word('hafo', {
  verb: 'to fall',
  etym: () => [_.ha, _.fo],
})

export const dironeoda = _.example(
  [_.dir, _.oC, _.neoda],
  'Quand je serai mort.e...'
)

// === alt

export const ahafo = _.alt('ahafo', {
  glo: 'they1.**fall**',
  alt: () => _.hafo,
})
