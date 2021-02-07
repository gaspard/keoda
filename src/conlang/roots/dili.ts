import * as _ from '../lang'

export const dili = _.word('dili', {
  noun: 'claw',
})

export const pedili = _.word('pedili', {
  noun: 'fork',
  etym: () => [_.pe1, _.dili],
})
