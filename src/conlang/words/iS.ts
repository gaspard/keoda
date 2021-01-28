import * as _ from '.'

export const iS = _.word('ti', {
  noun: '**you¹**',
  pref: '**your¹**',
  suff: '**your¹**',
  see: () => [_.subj],
})

export const ida = _.word('ida', {
  noun: '**you¹ self**',
  glo: '**you1**.self',
  etym: () => [_.iS, _.da],
  see: () => [_.subj],
})

// === alt

export const tim = _.alt('tim', {
  glo: '**you¹**+',
  alt: () => _.iS,
})

export const tin = _.alt('tin', {
  glo: '**you1**~',
  alt: () => _.iS,
})

export const tih = _.alt('tih', {
  glo: '**you1**:',
  alt: () => _.iS,
})

export const tinam = _.alt('tinam', {
  glo: '**you1**+!',
  alt: () => _.iS,
})

export const futim = _.alt('futim', {
  glo: 'to.**you1**+',
  alt: () => _.iS,
})

export const ihana = _.alt('ihana', {
  glo: '**you1**.tree',
  alt: () => _.ana,
})

export const futi = _.alt('futi', {
  glo: 'to.**you1**',
  alt: () => _.iS,
})

export const idam = _.alt('idam', {
  glo: '**you1**+',
  alt: () => _.ida,
})
