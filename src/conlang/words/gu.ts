import * as _ from '.'

export const gu = _.word('gu', {
  noun: 'darkness',
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

export const lemegu = _.word('lemegu', {
  verb: 'to remember',
  etym: () => [_.leme, _.gu],
})

export const guna = _.word('guna', {
  noun: 'dissociation, robot',
  etym: () => [_.gu, _.na],
  see: () => [_.ganu],
})

export const gui = _.word('gui', {
  verb: 'to be born',
  see: () => [_.yuhim, _.nem],
  etym: () => [_.gu, _.i],
})

export const rugui = _.word('rugui', {
  verb: 'to bustle about',
  etym: () => [_.ru, _.gui],
})

export const guwu = _.word('guwu', {
  verb: 'to give',
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
  etym: () => [_.gu, _.pa],
})

export const aguwu = _.alt('aguwu', {
  glo: '3SG.**give**',
  alt: () => _.guwu,
})

export const irugui = _.alt('irugui', {
  glo: '2SG.**bustle about**',
  alt: () => _.rugui,
})

export const alemegu = _.alt('alemegu', {
  glo: '3SG.**remember**',
  alt: () => _.lemegu,
})
