import * as _ from '../lang'

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
