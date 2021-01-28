import * as _ from '.'

export const aga = _.word('aga', {
  def: '**music** or **narration**',
  desc: () => `
Melodies and stories unraveling through time.
`,
})

export const agana = _.word('agana', {
  def: '**sound**',
  etym: () => [_.aga, _.na],
})

export const agade = _.word('agade', {
  def: '**echo**',
  etym: () => [_.aga, _.de],
})

export const akida = _.word('agaukida', {
  def: '**temple**',
  etym: () => [_.aga, _.uki, _.da],
})

// === alt

export const agadeuki = _.alt('agadeuki', {
  glo: '**echo**.*long*',
  alt: () => _.agade,
})
