import * as _ from '.'

export const su = _.word('su', {
  verb: 'to have',
  see: () => [_.wu],
})

export const nesu = _.word('nesu', {
  verb: 'to miss',
  etym: () => [_.ne, _.su],
})
