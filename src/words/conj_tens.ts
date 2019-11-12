import * as _ from '.'

//medium.com/keoda/du-plaisir-des-conjugaisons-df444756dfc0

export const lire = _.word('lire', {
  tens: 'futur éventuel, improbable mais pas impossible',
})
export const liro = _.word('liro', { tens: 'futur lointain' })
export const liru = _.word('liru', { tens: 'futur proche' })
export const lira = _.word('lira', { tens: 'demain' })
export const liri = _.word('liri', { tens: 'ce soir' })

export const lemi = _.word('lemi', { tens: 'hier soir' })
export const lema = _.word('lema', { tens: 'hier' })
export const lemu = _.word('lemu', { tens: 'passé proche' })
export const lemo = _.word('lemo', { tens: 'passé lointain' })
export const leme = _.word('leme', {
  tens: 'passé éventuel, improbable mais pas impossible',
})
_.see(_.lei) // toujours

// Otajliri kepal.
export const otajlirikepal = _.example(
  [_.o, _.taj, _.liri, _.kepal],
  `Je vais te sodomiser ce soir (au plus tard ce soir).`
)

// Otiolemi dutodawui.
export const otiolemidutodawui = _.example(
  [_.o, _.tio, _.lemi, _.du, _.toda, _.wu, _.i],
  `Hier soir, j'ai baisé ton grand frère.`
)
