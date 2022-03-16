import * as _ from '../lang'

export const zu = _.word('zu', {
  verb: 'to love',
  noun: 'heart',
  see: () => [_.au],
})

export const zuzu = _.word('zuzu', {
  verb: 'to make love',
  see: () => [_.auau, _.kude],
  etym: () => [_.zu, _.zu],
})

export const zulapa = _.word('zulapa', {
  noun: 'the voice from the heart',
  etym: () => [_.zu, _.lapa],
})
