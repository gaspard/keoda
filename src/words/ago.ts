import * as _ from '.'

export const ago = _.word('ago', {
  noun: 'rythme',
  derived: () => [_.aga, _.o],
  desc: () => `Musique frappée.`,
})
