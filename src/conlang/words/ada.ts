import * as _ from '.'

export const ada = _.word('ada', {
  pron: 'them (3SG)',
  etym: () => [_.a, _.oda],
})

_.see(_.ta)

export const yada = _.word('yada', {
  noun: 'corps rêvé, poétique (corps de nuit)',
  desc: () =>
    `si le corps visible, c'est ${_.oda}, le corps profond, intime, poétique, identitaire, "subconscient" comme dirait Julia Serano, c'est ${_.yada}.`,
  etym: () => [_.ya, _.oda],
})

export const piha = _.word('piha', {
  noun: 'moi poétique (mythique, profond)',
  etym: () => [_.pi, _.yada],
})
_.see(_.pida)
