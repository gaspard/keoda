import * as _ from '.'

export const kei = _.word('kei', {
  def: '**Master**',
  adj: 'fantastic',
  see: () => [_.subj],
})

export const okei = _.word('okei', {
  def: '**I** Fantastic',
  glo: '**I**.HONOR',
  etym: () => [_.oS, _.kei],
  see: () => [_.subj],
})

export const ikei = _.word('ikei', {
  def: '**you¹** Fantastic',
  prefix: 'your¹ Fantastic',
  suffix: 'your¹ Fantastic',
  glo: '**you1**.HONOR',
  etym: () => [_.iS, _.kei],
  see: () => [_.subj],
})

export const akei = _.word('akei', {
  def: '**they¹** Fantastic',
  prefix: 'their¹ Fantastic',
  suffix: 'their¹ Fantastic',
  glo: '**they1**.HONOR',
  etym: () => [_.aS, _.kei],
  see: () => [_.subj],
})

export const shokei = _.word('shokei', {
  def: '**we\\*** Fantastic',
  prefix: 'our* Fantastic',
  suffix: 'our* Fantastic',
  glo: '**we\\***.HONOR',
  etym: () => [_.sho, _.kei],
  see: () => [_.subj],
})

export const shikei = _.word('shikei', {
  def: '**you\\*** Fantastic',
  prefix: 'your* Fantastic',
  suffix: 'your* Fantastic',
  glo: '**you\\***.HONOR',
  etym: () => [_.sho, _.kei],
  see: () => [_.subj],
})

export const shakei = _.word('shakei', {
  def: '**they\\*** Fantastic',
  prefix: 'their* Fantastic',
  suffix: 'their* Fantastic',
  glo: '**they\\***.HONOR',
  etym: () => [_.sho, _.kei],
  see: () => [_.subj],
})

export const keda = _.word('keda', {
  def: '**Master-person**',
  etym: () => [_.kei, _.da],
  see: () => [_.subj],
})
