import * as _ from '.'

export const je = _.word('je', {
  adj: 'close',
  noun: '8 (emotion)',
  see: () => [_.counting],
})

export const jepa = _.word('jepa', {
  noun: 'belonging',
  see: () => [_.ganes],
})

export const jefi = _.word('jefi', {
  adj: 'caring',
  see: () => [_.nanes, _.jepa],
})
