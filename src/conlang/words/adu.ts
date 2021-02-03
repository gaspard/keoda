import * as _ from '.'

export const adu = _.word('adu', {
  noun: 'friend',
  adj: 'close',
})

export const kadu = _.word('doda', {
  noun: 'dog',
  adj: 'follower',
  etym: () => [_.ka, _.adu],
  desc: () => `The friend on four legs.`,
})
