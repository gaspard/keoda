import * as _ from '.'

export const oto$ = _.word('oto', {
  noun: '**wind** or **masculinity**',
  mod: 'masculine',
  see: () => [_.subj],
})

export const otoda = _.word('otoda', {
  noun: '**male** (wind) **person**',
  desc: () => `place of the wind-self`,
  etym: () => [_.oto, _.da],
})

// === alt

export const tahoton = _.alt('tahoton', {
  glo: '**they1**.wind~',
  alt: () => _.oto.$,
})

export const shohoto = _.alt('shohoto', {
  glo: '**we9**.wind',
  alt: () => _.oto.$,
})

export const tahoto = _.alt('tahoto', {
  glo: '**they1**.wind',
  alt: () => _.oto.$,
})

export const ahoto = _.alt('ahoto', {
  glo: '**they1**.wind',
  alt: () => _.oto.$,
})
