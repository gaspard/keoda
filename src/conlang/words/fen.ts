import * as _ from '.'

export const fen = _.word('fen', {
  noun: 'knee',
  pos: 'kneeling',
  verb: 'to walk',
})

export const feno = _.word('feno', {
  verb: 'to run',
  etym: () => [_.fen, _.o],
})

// export const efenom = _.example(
//   [_.e, _.fen, _.om],
//   `Soit à genoux les jambes écartées.`
// )
