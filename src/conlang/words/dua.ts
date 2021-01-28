import * as _ from '.'

export const dua = _.word('dua', {
  def: 'reflection',
})

export const duana = _.word('duana', {
  def: 'mirror',
  etym: () => [_.dua, _.na],
})
