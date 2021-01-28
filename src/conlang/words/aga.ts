import * as _ from '.'

export const aga = _.word('aga', {
  noun: '**music** or **narration**',
  desc: () => `
Melodies and stories unraveling through time.
`,
})

export const agana = _.word('agana', {
  noun: '**sound**',
  etym: () => [_.aga, _.na],
})

export const agade = _.word('agade', {
  noun: '**echo**',
  etym: () => [_.aga, _.de],
})

export const akida = _.word('agaukida', {
  noun: '**temple**',
  etym: () => [_.aga, _.uki, _.da],
})

// === alt

export const agadeuki = _.alt('agadeuki', {
  glo: '**echo**.*long*',
  alt: () => _.agade,
})
