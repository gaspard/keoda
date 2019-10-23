import * as _ from '.'

export const o = _.word('o', {
  suffix: 'frapper, faire mal',
  prefix: 'en bas ?? me ??',
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
