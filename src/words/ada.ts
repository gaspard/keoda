import * as _ from '.'

_.see(_.yada)
export const yada = _.word('yada', {
  noun: 'corps rêvé, poétique (corps de nuit)',
  desc: () =>
    `si le corps visible, c'est ${_.oda}, le corps profond, intime, poétique, identitaire, "subconscient" comme dirait Julia Serano, c'est ${_.yada}.`,
  derived: [_.ya, _.oda],
})

export const piha = _.word('piha', {
  noun: 'moi poétique (mythique, profond)',
  derived: [_.pi, _.yada],
})
_.see(_.pida)

export const yadaguitoda = _.word('yadaguitoda', {
  noun: 'corps poétique féminin né dans un corps masculin (femme trans)',
})

export const yaguto = _.word('yaguito', {
  noun: 'version courte pour femme trans (femme née dans un corps homme)',
})

export const tadaguiyoda = _.word('tadaguiyoda', {
  noun: 'corps poétique masculin né dans un corps féminin (homme trans)',
})

export const taguyo = _.word('taguiyo', {
  noun: 'version courte pour homme trans (homme né dans un corps femme)',
})
