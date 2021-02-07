import * as _ from '.'

export const lau = _.word('lau', {
  def: 'always',
  noun: 'eternity',
  glo: 'ETERN',
  etym: () => [_.lei, _.au],
  desc: () => `The time loves.`,
  see: () => [_.tu, _.verbs],
})

export const elau = _.word('elau', {
  noun: 'in all eternity',
  etym: () => [_.e, _.lau],
})

// === alt

export const laum = _.alt('laum', {
  glo: '**eternity**+',
  alt: () => _.lau,
})

export const golau = _.alt('golau', {
  glo: '*intense*.**eternity**',
  alt: () => _.go,
})
