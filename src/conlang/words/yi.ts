import * as _ from '.'

export const yi = _.word('yi', {
  conj: 'you tiny (2SG.DIM)',
  adj: 'tiny',
  suffix: 'tiny',
  glo: 'DIM',
  see: () => [_.toyi],
})

export const yile = _.word('yile', {
  noun: 'young',
  etym: () => [_.yi, _.lei],
})

export const yida = _.word('yida', {
  pron: 'tiny you',
  glo: '2SG.DIM',
  etym: () => [_.yi, _.oda],
  see: () => [_.keda, _.loda, _.pron],
})

export const yiya = _.word('yiya', {
  pron: 'tiny you (poetic)',
  glo: '2SG.DIM.POET',
  etym: () => [_.yi, _.yada],
  see: () => [_.yida, _.pron],
})

export const ayi = _.word('ayi', {
  conj: 'they (tiny)',
  glo: '3SG.DIM',
  etym: () => [_.a, _.yi],
})

export const tayi = _.word('tayi', {
  conj: 'their (tiny)',
  glo: 'POSS.3SG.DIM',
  etym: () => [_.ta, _.yi],
  see: () => [_.poss],
})

export const ayida = _.word('ayida', {
  pron: 'them',
  glo: '32g.DIM',
  etym: () => [_.ayi, _.oda],
})

export const ayiya = _.word('ayiya', {
  pron: 'them (poetic)',
  glo: '32g.DIM.POET',
  etym: () => [_.ayi, _.yada],
})

// === alt
