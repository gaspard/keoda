import * as _ from '.'

export const a = _.word('a', {
  lang: 'à (elle, lui)',
  conj: 'iel',
})
_.see(_.amaconj)

export const ahada = _.word('ahada', {
  noun: 'elle/lui poétique',
  derived: [_.a, _.yada],
})

export const amimoon = _.example(
  [_.a, _.yoda, _.mi, _.mun],
  `À elle, caresse les seins.`
)
