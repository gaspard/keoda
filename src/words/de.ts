import * as _ from '.'

export const de = _.word('de', {
  noun: '2',
  pronoun: 'nous deux',
})

export const ide = _.word('ide', {
  pronoun: 'à toi, nous deux',
})

export const idemimunwe = _.example(
  [_.ide, _.mi, _.munwe],
  `À toi, nous deux allons caresser le sein droite.`
)

// 1
_.see(_.pi)
// 2
_.see(_.de)
// 3
_.see(_.per)
// 4
_.see(_.ka)
