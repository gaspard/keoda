import * as _ from '.'

export const o = _.word('o', {
  suffix: 'hit, hurt',
  conj: 'I/we (1SG.INDF)',
  see: () => [_.to, _.verbs],
})

export const hafo = _.word('hafo', {
  verb: 'tomber (tête fouettée)',
})

export const demoneoda = _.example(
  [_.dem, _.o, _.neoda],
  'Quand je serai mort.e...'
)

_.see(_.omopal)

export const okei = _.word('okei', {
  conj: 'I (1SG.HONOR)',
  glo: '1SG.HONOR',
  etym: () => [_.o, _.kei],
})

export const onam = _.alt('onam', {
  glo: 'I/we.DAT',
  alt: () => _.o,
})
