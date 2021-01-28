import * as _ from '.'

export const je = _.word('je', {
  prop: 'close',
  noun: '8 (emotion)',
  see: () => [_.count],
})

export const jepa = _.word('jepa', {
  noun: 'belonging',
  see: () => [_.ganes],
})

export const jefi = _.word('jefi', {
  prop: 'caring',
  see: () => [_.nanes, _.jepa],
})
