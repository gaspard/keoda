import * as _ from '.'

export const sho = _.word('sho', {
  conj: 'us present (1PL.PRS)',
  noun: 'saliva',
  verb: 'salivate',
  glo: '1PL.PRS',
})

export const shoda = _.word('shoda', {
  pron: 'we',
  glo: '1PL',
  etym: () => [_.sho, _.oda],
  see: () => [_.tosho, _.shoya, _.pron],
})

export const shoya = _.word('shoya', {
  pron: 'us (poetic)',
  glo: '1PL.POET',
  etym: () => [_.sho, _.yada],
  see: () => [_.shoda, _.pron],
})

// dem ofa noa osho
export const eliofanoaosho = _.example(
  [_.dem, _.o, _.fa, _.noa, _.o, _.sho],
  'Quand je vois ta peau, je salive.'
)

export const shoV = _.alt('sho', {
  glo: '**salivate**',
  alt: () => _.sho,
})

export const onsho = _.word('onsho', {
  noun: 'sugar',
  etym: () => [_.on, _.shoV],
})

export const shoyi = _.alt('shoyi', {
  glo: '**1PL.PRS**.DIM',
  alt: () => _.sho,
})

export const shokei = _.alt('shokei', {
  glo: '**1PL.PRS**.HONOR',
  alt: () => _.sho,
})
