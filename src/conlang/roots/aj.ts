import * as _ from '../lang'

export const aj = _.word('aj', {
  noun: 'fire',
  verb: 'to burn',
  desc: () => `Dopamine, serotonine.`,
})

export const gaj = _.word('gaj', {
  noun: 'divin love (Ishq)',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Tomb_of_Abdul_Qadir_Jilani%2C_Baghdad.jpg/640px-Tomb_of_Abdul_Qadir_Jilani%2C_Baghdad.jpg',
  desc: () =>
    `A deep and cosuming longing for [divine love](https://en.wikipedia.org/wiki/Ishq).`,
  etym: () => [_.gu, _.aj],
})

export const ajapi = _.word('ajapi', {
  noun: 'ego-burn',
  verb: 'to burn the ego',
  desc: () => `Initiation`,
  etym: () => [_.aj, _.pi],
  see: () => [_.iwigui],
})
