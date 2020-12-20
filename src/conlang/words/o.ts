import * as _ from '.'

export const o = _.word('o', {
  suffix: 'hit, hurt',
  conj: 'I/we (1SG.INDF)',
})
_.see(_.omaconj)

export const hafo = _.word('hafo', {
  verb: 'tomber (tête fouettée)',
})

export const demoneoda = _.example(
  [_.dahem, _.o, _.neoda],
  'Quand je serai mort.e...'
)

_.see(_.omopal)
_.see(_.inedjilobo)
