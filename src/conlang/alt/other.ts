import * as _ from '../lang'

export const loV = _.alt('lo', {
  glo: 'surrender',
  alt: () => _.lo,
})

export const unuT = _.word('unu', {
  noun: 'tree',
  see: () => [_.unu],
  pos: 'cowgirl',
  id: 'unuT',
  desc: () =>
    `The position means "tree-like" because the legs are like roots and the torso, arms and hair represent the trunk and branches.`,
})

export const $dot = _.word('.', {
  noun: '.',
  glo: '',
})

export const $comma = _.word(',', {
  noun: ',',
  glo: '',
})

export const $cap = _.prefix('', {
  id: '$cap',
  noun: '',
  glo: '',
  op: 'capitalize',
})

export const $ = $dot
export const __ = $cap
export const _c = $comma
