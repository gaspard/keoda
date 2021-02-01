import * as _ from '.'

export const mi = _.word('mi', {
  noun: 'gentle hand',
  verb: 'to caress',
  etym: () => [_.ma, _.iC],
  see: () => [_.mo, _.mu],
  desc: () => `${_.phrase('Give me a hug.', _.mi, _.au)}`,
})
