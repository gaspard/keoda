import * as _ from '.'

export const oto = _.word('oto', {
  noun: 'vent',
  adj: 'masculin',
})
_.see(_.she)
_.see(_.ana)
_.see(_.iwi)

export const otoda = _.word('otoda', {
  noun: 'homme',
  etym: () => [_.oto, _.oda],
})
_.see(_.duto)

export const otana = _.word('otana', {
  noun: 'homme-femme',
})

export const otiwi = _.word('otiwi', {
  noun: 'homme-enby',
})
