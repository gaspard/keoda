import * as _ from '.'

export const yin = _.word('yin', {
  noun: 'vagina',
  etym: () => [_.yu, _.in],
})

export const yinu = _.word('yinu', {
  verb: 'grasp with the vagina',
  glo: 'vagina.pull',
  etym: () => [_.yin, _.u],
})

_.see(_.alayin)
_.see(_.dualayin)
