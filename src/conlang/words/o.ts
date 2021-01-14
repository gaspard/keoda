import * as _ from '.'

export const o = _.word('o', {
  suffix: 'hit, hurt',
  conj: 'I/we (1SG.INDF = 1SI)',
  glo: 'PUSH (ABL)',
  see: () => [_.to, _.verbs],
})

export const hafo = _.word('hafo', {
  verb: 'to fall',
  etym: () => [_.ha, _.fo],
})

export const dironeoda = _.example(
  [_.dir, _.o, _.neoda],
  'Quand je serai mort.e...'
)

export const okei = _.word('okei', {
  conj: 'I (1SG.HONOR)',
  glo: '1SG.HONOR',
  etym: () => [_.o, _.kei],
})

// === alt

export const ahafo = _.alt('ahafo', {
  glo: '3SG.**fall**',
  alt: () => _.hafo,
})
