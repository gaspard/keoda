import * as _ from '.'

export const sho = _.word('sho', {
  noun: '**we\\***',
  pref: '**our\\***',
  suff: '**our\\***',
  see: () => [_.subj],
})
