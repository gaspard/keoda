import * as _ from '.'

export const gili = _.word('gili', {
  def: 'tiger',
})

export const gilile = _.word('gilile', {
  def: 'cat',
  etym: () => [_.gili, _.le],
})
