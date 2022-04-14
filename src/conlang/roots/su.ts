import * as _ from '../lang'

export const su = _.word('su', {
  verb: 'to have',
  see: () => [_.wu],
})

export const sausu = _.word('sausu', {
  verb: 'to miss',
  etym: () => [_.sau, _.su],
})
