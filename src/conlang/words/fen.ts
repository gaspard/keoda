import * as _ from '.'

export const fen = _.word('fen', {
  def: 'knee',
  posit: 'kneeling',
  verb: 'to walk',
})

export const afen = _.alt('afen', {
  glo: '**walk**.they1',
  alt: () => _.fen,
  see: () => [_.aC, _.fen],
})

export const efenom = _.example(
  [_.e, _.fen, _.om],
  `Soit à genoux les jambes écartées.`
)
