import * as _ from '.'

export const oto = _.word('oto', {
  noun: 'vent',
  adj: 'masculin',
})
_.see(_.she)

export const otoda = _.word('otoda', {
  noun: 'homme',
  derived: [_.oto, _.oda],
})
