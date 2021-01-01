import * as _ from '.'

export const dji = _.word('dji', {
  noun: '10 (memory)',
  etym: () => [_.pi, _.ipi],
  see: () => [_.counting],
})

export const djipa = _.word('djipa', {
  noun: 'remembering (being god.dess)',
  see: () => [_.ganes, _.djifi],
})

export const djifi = _.word('djifi', {
  adj: 'humble',
  see: () => [_.nanes, _.djipa],
})
