import * as _ from '.'

export const oto = _.word('oto', {
  noun: 'wind',
  adj: 'masculine',
  see: () => [_.she, _.pron],
})

export const loto = _.word('loto', {
  noun: 'he',
  glo: '3SG.MASC',
  see: () => [_.pron],
})

export const lotam = _.alt('lotam', {
  glo: '**him**.ACC',
  alt: () => _.loto,
})

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
