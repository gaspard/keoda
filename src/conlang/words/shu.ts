import * as _ from '.'

export const shu = _.word('shu', {
  def: 'and',
  see: () => [_.prep],
})

export const shune = _.word('shune', {
  def: 'but',
  etym: () => [_.shu, _.neW],
  see: () => [_.prep],
})
