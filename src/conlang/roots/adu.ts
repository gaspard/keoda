import * as _ from '../lang'

export const adu = _.word('adu', {
  noun: 'friend',
  adj: 'close',
})

// Downward facing dog
export const kadu = _.word('kadu', {
  noun: 'dog',
  adj: 'follower',
  etym: () => [_.ka, _.adu],
  desc: () => `The friend on four legs.`,
})
