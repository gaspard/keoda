import * as _ from '.'

export const yi = _.word('yi', {
  def: '**innoncence**',
  adj: 'tiny',
  suffix: 'tiny',
})

export const oyi = _.word('oyi', {
  def: '**weˣ tiny**',
  prefix: 'ourˣ tiny',
  suffix: 'ourˣ tiny',
  glo: '**weˣ**.DIM',
  etym: () => [_.iS, _.yi],
  see: () => [_.subj],
})

export const iyi = _.word('iyi', {
  def: '**you¹ tiny**',
  prefix: 'your¹ tiny',
  suffix: 'your¹ tiny',
  glo: '**you1**.DIM',
  etym: () => [_.iS, _.yi],
  see: () => [_.subj],
})

export const ayi = _.word('ayi', {
  def: '**they¹ tiny**',
  prefix: 'their¹ tiny',
  suffix: 'their¹ tiny',
  glo: '**they1**.DIM',
  etym: () => [_.aS, _.yi],
  see: () => [_.subj],
})

export const shoyi = _.word('shoyi', {
  def: '**we\\* tiny**',
  prefix: 'our* tiny',
  suffix: 'our* tiny',
  glo: '**we\\***.DIM',
  etym: () => [_.sho, _.yi],
  see: () => [_.subj],
})

export const shiyi = _.word('shiyi', {
  def: '**you\\* tiny**',
  prefix: 'your tiny*',
  suffix: 'your tiny*',
  glo: '**you\\***.DIM',
  etym: () => [_.sho, _.yi],
  see: () => [_.subj],
})

export const shayi = _.word('shayi', {
  def: '**they\\* tiny**',
  prefix: 'their tiny*',
  suffix: 'their tiny*',
  glo: '**they\\***.DIM',
  etym: () => [_.sho, _.yi],
  see: () => [_.subj],
})

export const yile = _.word('yile', {
  def: 'young',
  etym: () => [_.yi, _.lei],
})

export const yida = _.word('yida', {
  def: '**tiny person**',
  etym: () => [_.yi, _.da],
})

// === alt
