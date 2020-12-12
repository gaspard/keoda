import * as _ from '.'

export const him = _.word('him', {
  verb: 'grandir',
})

export const yuhim = _.word('yuhim', {
  noun: 'naître',
})

export const mahim = _.word('mahim', {
  noun: 'construire (les mains qui font grandir)',
  derived: () => [_.ma, _.him],
})
