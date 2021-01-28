import * as _ from '.'

export const su = _.word('su', {
  action: 'to have',
  see: () => [_.wu],
})

export const nesu = _.word('nesu', {
  action: 'to miss',
  etym: () => [_.ne, _.su],
})
