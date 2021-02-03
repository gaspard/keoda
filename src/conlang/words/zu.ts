import * as _ from '.'

export const zu = _.word('zu', {
  noun: 'heart',
  verb: 'to love',
  see: () => [_.au],
})

export const zuzu = _.word('zuzu', {
  verb: 'to make love',
  see: () => [_.auau, _.kude],
  etym: () => [_.zu, _.zu],
})

export const zunes = _.word('zunes', {
  noun: 'love',
  etym: () => [_.zu, _.nes],
})
