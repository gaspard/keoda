import * as _ from '../lang'

export const loV = _.alt('lo', {
  glo: 'surrender',
  alt: () => _.lo,
})

// Sur le dos, les jambes pliées
export const anaT = _.alt('ana', {
  id: 'anaT',
  noun: 'tree',
  alt: () => _.ana,
})
