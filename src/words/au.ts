import * as _ from '.'

export const au = _.word('au', {
  noun: 'coeur',
  verb: 'aimer/recevoir',
})

export const aupa = _.example([_.au, _.pa], 'Gratitude (aimer tout).')
_.see(_.pahau)
_.see(_.kupa)

_.see(_.miau)

export const auau = _.example([_.au, _.au], `Fais-moi l'amour`)

export const ausifalamau = _.example(
  [_.au, _.si, _.falam, _.au],
  `Fais-moi l'amour comme si tu te lavais d'une grande tristesse.`
)
