import * as _ from '.'

export const pan = _.word('pan', {
  adj: 'red',
  see: () => [_.colors],
})

export const dupan = _.word('dudapan', {
  def: 'fox',
  etym: () => [_.doda, _.pan],
})
