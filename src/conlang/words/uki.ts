import * as _ from '.'

export const uki = _.word('uki', {
  adj: 'long',
  suffix: 'long',
  see: () => [_.iki],
})

export const tajuki = _.example([_.taj, _.uki], `Long penis.`)

export const djiluki = _.example([_.jil, _.uki], `Longs cheveux.`)
