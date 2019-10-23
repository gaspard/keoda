import * as _ from '.'

export const yoda = _.word('yoda', { noun: 'corps avec une vulve' })

export const oda = _.word('oda', {
  noun: 'corps, énergie',
  suffix: 'qui a',
  lang: 'interrogation, potentiel',
})

oda.desc = () => `
De là vient ${_.keoda} (**la langue cachée du corps**).

Comparé à ${_.ora} l'interrogation avec ${_.oda} est plus de l'ordre de **tu pourrais ?** (potentiel) que **tu veux ?**.

Au niveau du suffixe, utilisé pour *yonoda* ou *taroda*, on indique une personne **qui a une vulve**, **qui a un pénis**, etc. On peut utiliser n’importe quelle partie du corps avec ce suffixe pour mettre l’accent sur un élément marquant d’une personne (*maoda* aux grandes mains, *djiloda* aux beaux cheveux, *nedjiloda* qui n’a pas de cheveux ). Si le contexte est sans ambiguïté, on peut simplifier *..o* (*nedjilo*, *taro* ou même *to* et *yo*).
`

export const ayodaodamimum = _.example(
  [_.a, _.yoda, _.ora, _.mi, _.mun],
  'À elle, tu pourrais caresser les seins ? (à elle, il y a le potentiel pour que tu...)'
)

export const keoda = _.word('keoda', {
  noun: 'énergie cachée, langue cachée du corps',
})
