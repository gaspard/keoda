import * as _ from '.'

export const yi = _.word('yi', {
  conj: 'you tiny (2SG.TINY)',
  adj: 'tiny',
  suffix: 'tiny',
  see: () => [_.toyi],
})

export const yida = _.word('yida', {
  pron: 'tiny you',
  glo: '2SG.TINY',
  etym: () => [_.yi, _.oda],
  see: () => [_.keda, _.loda, _.pron],
})

export const yiya = _.word('yiya', {
  pron: 'tiny you (poetic)',
  glo: '2SG.TINY.POET',
  etym: () => [_.yi, _.yada],
  see: () => [_.yida, _.pron],
})

export const ayi = _.word('ayi', {
  conj: 'they (tiny)',
  glo: '3SG.TINY',
  etym: () => [_.a, _.yi],
})

export const tayi = _.word('tayi', {
  conj: 'their (tiny)',
  glo: 'POSS.3SG.TINY',
  etym: () => [_.ta, _.yi],
  see: () => [_.poss],
})

export const ayida = _.word('ayida', {
  pron: 'them',
  glo: '32g.TINY',
  etym: () => [_.ayi, _.oda],
})

export const ayiya = _.word('ayiya', {
  pron: 'them (poetic)',
  glo: '32g.TINY.POET',
  etym: () => [_.ayi, _.yada],
})
