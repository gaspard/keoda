import * as _ from '.'

export const wi = _.word('wi', {
  noun: 'pruneau (couleur)',
})
_.see(_.colors)

export const wiyon = _.word('wiyon', {
  noun: 'pruneau (fruit)',
  derived: () => [_.wi, _.yon],
})

_.see(_.seasons)
_.see(_.fruits)
