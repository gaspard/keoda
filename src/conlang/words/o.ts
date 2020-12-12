import * as _ from '.'

export const o = _.word('o', {
  noun: 'on',
  suffix: 'frapper, faire mal',
  prefix: 'en bas ?? me ??',
  conj: 'on (1sp)',
  desc: () =>
    `Le "on" est important: on est pas séparés. Ça indique à la fois "moi et les autres" (même imaginés) et "toutes les versions et différents âges de moi-même, l'enfant qui a rêvé, l'adolescent en manque de tendresse et de cul, le fou, etc". Quand on dit ${_.o}, on implique tout ça. Si "on" te fait l'amour, c'est un monde entier qui vient à ta rencontre.`,
})
_.see(_.omaconj)

export const hafo = _.word('hafo', {
  verb: 'tomber (tête fouettée)',
})

export const demoneoda = _.example(
  [_.dahem, _.o, _.neoda],
  'Quand je serai mort.e...'
)

_.see(_.omopal)
_.see(_.inedjilobo)
