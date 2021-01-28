import * as _ from '.'

export const se = _.word('se', {
  suff: 'left',
  see: () => [_.du, _.we, _.no],
})

export const sen = _.word('sen', {
  noun: 'here',
  see: () => [_.da],
})

// === alt

export const fuse = _.alt('fusen', {
  glo: 'ERG.**here**',
  alt: () => _.sen,
})
