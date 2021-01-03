import * as _ from '.'

export const ipi = _.word('ipi', {
  noun: 'memory (10)',
  see: () => [_.count],
})

export const jipa = _.word('jipa', {
  noun: 'remembering (being god.dess)',
  see: () => [_.ganes, _.jifi],
})

export const jifi = _.word('jifi', {
  adj: 'humble',
  see: () => [_.nanes, _.jipa],
})

// ==== alt
export const i10 = _.alt('ipi', {
  glo: '10',
  alt: () => _.ipi,
})
