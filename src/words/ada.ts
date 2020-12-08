import * as _ from '.'

export const ada = _.word('ada', {
  noun: 'corps rêvé, poétique',
  desc: () =>
    `si le corps visible, c'est ${_.oda}, le corps profond, intime, poétique, identitaire, "subconscient" comme dirait Julia Serano, c'est ${_.ada}.`,
})
export const piha = _.word('piha', {
  noun: 'moi poétique (mythique, profond)',
  derived: [_.pi, _.ada],
})
_.see(_.piho)

export const yada = _.word('yada', {
  noun: 'corps poétique féminin, femme',
})

export const tada = _.word('tada', {
  noun: 'corps poétique masculin, homme',
})

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
