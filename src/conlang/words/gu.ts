import * as _ from '.'

export const gu = _.word('gu', {
  adj: 'darkness, gestation, deep',
  desc: () => `${_.gu} is the terror of ${_.ga}.`,
  etym: () => [_.ga, _.u],
  see: () => [_.nu, _.ganes, _.gufi],
})

export const gunu = _.word('gunu', {
  noun: 'tremendum',
  see: () => [_.gana],
  etym: () => [_.gu, _.nu],
})

export const gulir = _.word('gulir', {
  verb: 'to wish',
  etym: () => [_.gu, _.lir],
})

export const gulem = _.word('gulem', {
  verb: 'to remember',
  etym: () => [_.gu, _.lem],
})

export const guna = _.word('guna', {
  noun: 'dissociation, robot',
  etym: () => [_.gu, _.na],
  see: () => [_.ganu],
})

export const guo = _.word('guo', {
  verb: 'to die',
  etym: () => [_.gu, _.o],
})

export const gui = _.word('gui', {
  verb: 'to be born',
  see: () => [_.yuhim],
  etym: () => [_.gu, _.i],
})

export const guwu = _.word('guwu', {
  verb: 'to give/to show',
  etym: () => [_.gu, _.wu],
})

export const guwuna = _.word('guwuna', {
  noun: 'gift',
  etym: () => [_.guwu, _.na],
})

export const guru = _.word('guru', {
  noun: 'realization of the spirit',
  etym: () => [_.gu, _.ru],
})

export const gugai = _.word('gugai', {
  noun: 'fertility',
  adj: 'fertile',
  etym: () => [_.gu, _.gai],
})

export const augu = _.word('augu', {
  noun: 'trust',
  verb: 'to trust',
  etym: () => [_.au, _.gu],
})

export const negu = _.word('negu', {
  noun: 'agitation/dissociation',
  desc: () => `Searching for perfection to feel less. Opposite of ${_.augu}`,
  see: () => [_.shipa],
})

export const guyuina = _.word('guyuina', {
  noun: 'apple',
  etym: () => [_.gu, _.yuina],
  see: () => [_.fruits],
})

export const gupa = _.word('gupa', {
  noun: 'nature',
  glo: 'nature',
  etym: () => [_.gu, _.pa],
})

export const aguwu = _.alt('aguwu', {
  glo: '3SG.give',
  alt: () => _.guwu,
})
