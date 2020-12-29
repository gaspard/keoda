import * as _ from '.'

export const a = _.word('a', {
  prep: 'to (her, him)',
  conj: 'them (3SG)',
})
_.see(_.amaconj)

export const ahada = _.word('ahada', {
  noun: 'elle/lui poétique',
  etym: () => [_.a, _.yada],
})

export const amimoon = _.example(
  [_.a, _.yoda, _.mi, _.mun],
  `À elle, caresse les seins.`
)

export const ahe = _.alt('ahe', {
  glo: '3SG.être',
  see: () => [_.a, _.e],
})

export const akei = _.word('akei', {
  conj: 'They (3SG.HONOR)',
  glo: '3SG.HONOR',
  etym: () => [_.a, _.kei],
})
