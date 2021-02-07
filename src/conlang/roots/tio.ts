import * as _ from '../lang'

export const tio = _.word('tio', {
  noun: `genitals`,
  verb: `faire l'amour`,
})

export const fatio = _.word('fatio', {
  noun: "iris (fleur de l'oeil",
  etym: () => [_.fa, _.tio],
})

export const tiona = _.word('tiona', {
  noun: 'flower (genital thing)',
  etym: () => [_.tio, _.na],
  exam: () => [
    _.phraseX(
      'Kiss my vulva as if you were picking flowers',
      _.la.imp,
      _.si.muhajo,
      _.tiona,
      _.yin.m
    ),
  ],
})
