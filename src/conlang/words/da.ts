import * as _ from '.'

export const da = _.word('da', {
  def: '**self** or **9**',
  suffix: '**self**',
  glo: '**self**',
  see: () => [_.kedana, _.count, _.sen],
})

_.see(_.lama)
_.see(_.lamagoa)
_.see(_.goa)

export const dapa = _.word('dapa', {
  def: '**joy**',
  etym: () => [_.da, _.pa],
  see: () => [_.ganes, _.dafi],
})

export const dafi = _.word('dafi', {
  def: '**service**',
  adj: 'serving',
  etym: () => [_.da, _.fi],
  see: () => [_.nanes, _.dapa],
})

export const guda = _.word('guda', {
  def: '**the place of the experience**',
  etym: () => [_.gu, _.da],
  see: () => [_.gulei],
})

export const dana = _.word('dana', {
  def: '**geography**',
  etym: () => [_.da, _.na],
})

// === alt

export const da9 = _.alt('da', {
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
