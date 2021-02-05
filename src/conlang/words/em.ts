import * as _ from '.'

export const em = _.word('em', {
  noun: 'life',
  verb: 'to live',
  adj: 'alive',
  suff: 'lived',
  see: () => [_.gu],
})

export const nem = _.word('nem', {
  noun: 'death',
  verb: 'to die',
  adj: 'dead',
  see: () => [_.ru],
  etym: () => [_.ne, _.em],
})
