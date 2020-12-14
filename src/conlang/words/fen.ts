import * as _ from '.'

export const fen = _.word('fen', {
  noun: 'genoux',
  posit: 'à genoux',
  verb: 'marcher',
})

export const afen = _.alt('afen', {
  glo: 'marcher.3SG',
  alt: () => _.fen,
  see: () => [_.a, _.fen],
})

export const efenom = _.example(
  [_.e, _.fen, _.om],
  `Soit à genoux les jambes écartées.`
)
