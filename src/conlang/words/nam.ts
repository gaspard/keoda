import * as _ from '.'

export const nam = _.word('nam', {
  noun: 'bois',
})

export const kanam = _.word('kanam', {
  noun: 'chaise',
  etym: () => [_.ka, _.nam],
})

export const namel = _.word('namel', {
  noun: 'bâton (bois droit)',
  glo: 'bâton',
  etym: () => [_.nam, _.el],
})
