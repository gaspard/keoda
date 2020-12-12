import * as _ from '.'

export const a = _.word('a', {
  prep: 'à (elle, lui)',
  conj: 'iel (3s)',
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
