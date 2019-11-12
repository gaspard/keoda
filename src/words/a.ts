import * as _ from '.'

export const a = _.word('a', {
  lang: 'à (elle, lui)',
  conj: 'iel',
})
_.see(_.amaconj)

export const amimoon = _.example(
  [_.a, _.yoda, _.mi, _.mun],
  `À elle, caresse les seins.`
)
