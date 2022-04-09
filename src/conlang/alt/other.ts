import * as _ from '../lang'

export const loV = _.alt('lo', {
  glo: 'surrender',
  alt: () => _.lo,
})

export const unuT = _.word('unu', {
  id: 'anaT',
  noun: 'tree',
  see: () => [_.unu],
  pos: 'cowgirl',
  desc: () =>
    `The position means "tree-like" because the legs are like roots and the torso, arms and hair represent the trunk and branches.`,
})
