import * as _ from '.'

export const soa = _.word('soa', {
  def: 'floor',
  see: () => [_.al],
})

export const lisoa = _.word('lisoa', {
  def: 'table',
  etym: () => [_.le, _.soa],
})

export const soaji = _.word('soaji', {
  def: 'grass',
  etym: () => [_.soa, _.ji],
  see: () => [_.plants],
})

export const gosoa = _.word('gosoa', {
  def: 'mountain',
  etym: () => [_.go, _.soa],
  see: () => [_.nature],
})
