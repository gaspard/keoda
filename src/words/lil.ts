import * as _ from '.'

export const lil = _.word('lil', {
  adj: 'petit.e',
  noun: '5',
  suffix: 'petit.e',
  position: '(fen) sur moi: 4 membres et 1 sexe',
})
_.see(_.peulil)

export const hamalil = _.word('hamalil', {
  noun: 'auriculaire (petit doigt, 5ème doigt)',
})

// 1
_.see(_.pi)
// 2
_.see(_.de)
// 3
_.see(_.pe)
// 4
_.see(_.ka)
// 5
_.see(_.lil)

export const lilaj = _.word('lilaj', {
  noun: 'étincelle',
  position:
    'sur moi: 4 membres et 1 sexe (indiquée par un signe de main: pouce contre auriculaire)',
  desc: () => `De ${_.lil} petit et ${_.aj} feu.`,
})
