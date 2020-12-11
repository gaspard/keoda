import * as _ from '.'

export const nam = _.word('nam', {
  noun: 'bois',
})

export const kanam = _.word('kanam', {
  noun: 'chaise',
  derived: [_.ka, _.nam],
})

export const namel = _.word('namel', {
  noun: 'bâton (bois droit)',
  derived: [_.nam, _.el],
})
