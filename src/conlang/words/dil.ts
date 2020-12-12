import * as _ from '.'

export const dil = _.word('dil', {
  noun: 'ongle, griffe',
})

export const pedil = _.word('pedil', {
  noun: 'fourche',
  etym: () => [_.pe, _.dil],
})

export const lipedil = _.word('lipedil', {
  noun: 'fourchette',
  etym: () => [_.lil, _.pedil],
})
