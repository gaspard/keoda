import * as _ from '.'

export const noa = _.word('noa', {
  noun: 'peau',
})

export const noam = _.word('noam', {
  verb: 'toucher',
})

export const noati = _.alt('noati', {
  glo: '**skin**.2SG.POSS',
  alt: () => _.noa,
})
