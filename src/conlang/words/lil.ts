import * as _ from '.'

export const hamalil = _.word('hamalil', {
  noun: 'little finger',
})

export const ajalil = _.word('ajalil', {
  noun: 'spark',
  pos: 'on top of me: 4 limbs and 1 genital (little finger)',
  etym: () => [_.aj],
})

export const nelil = _.word('nelil', {
  noun: 'confusion',
  adj: 'insecure',
  verb: 'to confound',
  see: () => [_.ganes, _.nanes],
})

export const lil5 = _.alt('lil', {
  glo: '**5**',
  alt: () => _.lil,
})

export const lilipi = _.alt('lilipi', {
  glo: '**5**.*10*',
  alt: () => _.lil,
})
