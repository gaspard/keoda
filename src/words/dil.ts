import * as _ from '.'

export const dil = _.word('dil', {
  noun: 'ongle, griffe',
})

export const pedil = _.word('pedil', {
  noun: 'fourche',
  derived: () => [_.pe, _.dil],
})

export const lipedil = _.word('lipedil', {
  noun: 'fourchette',
  derived: () => [_.lil, _.pedil],
})
