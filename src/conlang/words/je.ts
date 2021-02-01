import * as _ from '.'

export const je = _.word('je', {
  mod: 'close',
  noun: '8 (emotion)',
  see: () => [_.count],
})

export const jepa = _.word('jepa', {
  noun: 'belonging',
  see: () => [_.ganes],
})

export const jefi = _.word('jefi', {
  mod: 'caring',
  see: () => [_.nanes, _.jepa],
})
