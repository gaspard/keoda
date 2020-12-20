import * as _ from '.'

//medium.com/keoda/du-plaisir-des-conjugaisons-df444756dfc0

export const lire = _.word('lire', { tens: 'eventual future (FUT.EVNT)' })
export const liro = _.word('liro', { tens: 'distant future (FUT.DIST)' })
export const liru = _.word('liru', { tens: 'close future (FUT.PROX)' })
export const lira = _.word('lira', { tens: 'tomorrow (FUT.CRAS)' })
export const liri = _.word('liri', { tens: 'later today (FUT.HOD)' })

export const lemi = _.word('lemi', { tens: 'earlir today (PST.HOD)' })
export const lema = _.word('lema', { tens: 'yesterday (PST.HEST)' })
export const lemu = _.word('lemu', { tens: 'recent past (PST.PROX)' })
export const lemo = _.word('lemo', { tens: 'distant past (PST.DIST)' })
export const leme = _.word('leme', { tens: 'eventual past (PST.EVNT)' })
_.see(_.lei) // always
_.see(_.nei) // never

// Otajliri kepal.
export const otajlirikepal = _.example(
  [_.o, _.taj, _.liri, _.kepal],
  `Je vais te sodomiser ce soir (au plus tard ce soir).`
)

// Otiolemi dutodawui.
export const otiolemidutodawui = _.example(
  [_.o, _.tio, _.lemi, _.duto, _.ti],
  `Hier soir, j'ai baisé ton grand frère.`
)
