import * as _ from '.'

export const au = _.word('au', {
  noun: 'coeur',
  verb: 'aimer/recevoir',
})
_.see(_.zu)

export const auhu = _.word('auhu', {
  noun: 'tomber amoureux.se, attraction du cœur',
})

export const aupa = _.word('aupa', {
  noun: 'gratitude (aimer tout)',
  etym: () => [_.au, _.pa],
})
_.see(_.pahau)
_.see(_.kupa)

_.see(_.miau)

export const auau = _.example([_.au, _.au], `Fais-moi l'amour`)

export const ausifalamau = _.example(
  [_.au, _.si, _.falam, _.au],
  `Fais-moi l'amour comme si tu te lavais d'une grande tristesse.`
)
