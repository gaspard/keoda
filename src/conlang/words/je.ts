import * as _ from '.'

export const je = _.word('je', {
  adj: 'close',
  def: '8 (emotion)',
  see: () => [_.count],
})

export const jepa = _.word('jepa', {
  def: 'belonging',
  see: () => [_.ganes],
})

export const jefi = _.word('jefi', {
  adj: 'caring',
  see: () => [_.nanes, _.jepa],
})
