import * as _ from '.'

export const oto = _.word('oto', {
  noun: 'wind',
  adj: 'masculine',
})
_.see(_.she)
_.see(_.ana)
_.see(_.iwi)

export const otoda = _.word('otoda', {
  noun: 'man',
  desc: () => `place of the wind-self`,
  etym: () => [_.oto, _.oda],
})
_.see(_.duto)

export const otana = _.word('otana', {
  adj: 'treeish wind (fem masc)',
  etym: () => [_.oto, _.ana],
})

export const otiwi = _.word('otiwi', {
  adj: 'birdly wind (enby masc)',
  etym: () => [_.oto, _.iwi],
})
