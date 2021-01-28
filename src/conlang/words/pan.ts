import * as _ from '.'

export const pan = _.word('pan', {
  prop: 'red',
  see: () => [_.colors],
})

export const dupan = _.word('dudapan', {
  noun: 'fox',
  etym: () => [_.doda, _.pan],
})
