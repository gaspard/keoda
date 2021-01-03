import * as _ from '.'

export const a = _.word('a', {
  prep: 'to (her, him)',
  conj: 'them (3SG)',
  see: () => [_.ta, _.verbs],
})

export const ahada = _.word('ahada', {
  noun: 'elle/lui poétique',
  etym: () => [_.a, _.yada],
})

export const ahe = _.alt('ahe', {
  glo: '3SG.**be**',
  see: () => [_.a, _.e],
})

export const akei = _.word('akei', {
  conj: 'They (3SG.HONOR)',
  glo: '3SG.HONOR',
  etym: () => [_.a, _.kei],
})
