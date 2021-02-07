import * as _ from '../lang'

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

export const zuxnes = _.word('zuxnes', {
  noun: 'love',
  etym: () => [_.zu, _.nes],
  exam: () => [_.phrase('what ?', _.zu.es)],
})
