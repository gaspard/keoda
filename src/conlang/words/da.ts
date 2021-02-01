import * as _ from '.'

_.see(_.lama)
_.see(_.lamagoa)
_.see(_.goa)

export const dapa = _.word('dapa', {
  noun: '**joy**',
  etym: () => [_.da, _.pa],
  see: () => [_.ganes, _.dafi],
})

export const dafi = _.word('dafi', {
  noun: '**service**',
  mod: 'serving',
  etym: () => [_.da, _.fi],
  see: () => [_.nanes, _.dapa],
})

export const guda = _.word('guda', {
  noun: '**the place of the experience**',
  etym: () => [_.gu, _.da],
  see: () => [_.gulei],
})

export const dana = _.word('dana', {
  noun: '**geography**',
  etym: () => [_.da, _.na],
})

// === alt

export const da9 = _.alt('da', {
  id: 'da9',
  glo: '**9**',
  alt: () => _.da,
})

export const dahipi = _.alt('dahipi', {
  glo: '**9**.*10*',
  alt: () => _.da,
})

export const dahipa = _.alt('dahipa', {
  glo: '**9**.*100*',
  alt: () => _.da,
})
