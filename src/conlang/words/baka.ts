import * as _ from '.'

export const baka = _.word('baka', {
  noun: '**devotion**',
  verb: 'to surrender',
})

// === alt

// Bhakti
export const bakati = _.alt('bakati', {
  glo: '**devotion**.you1',
  alt: () => _.baka,
})
