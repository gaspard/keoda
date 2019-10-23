import * as _ from '.'

export const baj = _.word('baj', { noun: 'membre inférieur' })

export const habaj = _.word('habaj', {
  noun: 'cuisse',
  desc: () => `De ${_.ha} et ${_.baj}`,
})

export const habajimfa = _.example(
  [_.habaj, _.im, _.fa],
  `Montre tes cuisses fermées.`
)

export const habajioda = _.example(
  [_.habaji, _.oda],
  `Caresse mon corps avec ta cuisse.`
)

export const habaji = _.word('habaji', { verb: 'caresser avec la cuisse' })

export const kebaj = _.word('kebaj', {
  noun: 'testicules',
  desc: () => `Caché ${_.ke} entre les jambes ${_.baj}.`,
})

_.see(_.odufeodaolirkelikebaj)
_.see(_.eodosamhabajom)
