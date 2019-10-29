import * as _ from '.'

export const o = _.word('o', {
  noun: 'on',
  suffix: 'frapper, faire mal',
  prefix: 'en bas ?? me ??',
  desc: () =>
    `Le "on" est important: on est pas séparés. Ça indique à la fois "moi et les autres" (même imaginés) et "toutes les versions et différents âges de moi-même, l'enfant qui a rêvé, l'adolescent en manque de tendresse et de cul, le fou, etc". Quand on dit ${_.o}, on implique tout ça. Si "on" te fait l'amour, c'est un monde entier qui vient à ta rencontre.`,
})

export const oo = _.word('oo', {
  noun: 'à moi/nous (pour moi/nous), je/nous...',
})

// J'ai oublié le préfix/suffixe pour "en bas"
export const obo = _.word('obo', {
  noun: 'pubis (bas du ventre)',
})

export const hafo = _.word('hafo', {
  verb: 'tomber (tête en bas)',
})

export const palironeoda = _.example(
  [_.palir, _.o, _.neoda],
  'Quand je serai mort.e...'
)

_.see(_.omopal)
_.see(_.inedjilobo)
