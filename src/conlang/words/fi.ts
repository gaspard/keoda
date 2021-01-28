import * as _ from '.'

export const fi = _.word('fi', {
  noun: 'thread',
  action: 'to connect',
  see: () => [_.pa],
})

export const fishasha = _.word('fishasha', {
  action: 'to sew',
  etym: () => [_.fi, _.shasha],
})

export const gufishasha = _.word('gufishasha', {
  action: 'to sew life, connect things out of causal time',
  etym: () => [_.gufi, _.shasha],
})

export const gufi = _.word('gufi', {
  noun: 'thread of life',
  etym: () => [_.gu, _.fi],
})

// === alt

export const gufitinam = _.alt('gufitinam', {
  glo: '**thread of life**.you1',
  alt: () => _.gufi,
})
