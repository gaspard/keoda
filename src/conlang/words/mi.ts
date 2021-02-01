import * as _ from '.'

export const mi = _.word('mi', {
  verb: 'to caress',
  glo: '**hand**.CARE',
  etym: () => [_.ma, _.iC],
  see: () => [_.mo, _.mu],
  desc: () => `${_.phrase('Give me a hug.', _.mi, _.au)}`,
})
