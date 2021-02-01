import * as _ from '.'

export const wi = _.word('wi', {
  mod: 'prun (color)',
  see: () => [_.colors],
})

export const wiyon = _.word('wiyon', {
  noun: 'prune, September',
  etym: () => [_.wi, _.yin],
  see: () => [_.fruits, _.seasons],
})

_.see(_.seasons)
