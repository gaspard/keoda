import * as _ from '.'

export const baj = _.word('baj', { noun: 'membre inférieur' })

export const djobaj = _.word('djobaj', {
  noun: 'cuisse',
  desc: () => `De ${_.djo} et ${_.baj}`,
})

export const habaj = _.word('habaj', {
  noun: 'jambe',
})

export const djobajimfa = _.example(
  [_.djobaj, _.im, _.fa],
  `Montre tes cuisses fermées.`
)

export const djobajioda = _.example(
  [_.djobaji, _.oda],
  `Caresse mon corps avec ta cuisse.`
)

export const djobaji = _.example([_.djobaj, _.i], 'caresser avec la cuisse')

export const kebaj = _.word('kebaj', {
  noun: 'testicules',
  desc: () => `Caché ${_.ke} entre les jambes ${_.baj}.`,
})

_.see(_.odufeodaokelilirkebaj)
_.see(_.enopisamdjobajom)
