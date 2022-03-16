import * as _ from '../lang'

export const hao = _.word('hao', {
  noun: 'buste',
  etym: () => [_.ha, _.oda],
  exam: () => [
    _.phraseX('Remove the clothes on your chest.', _.nefe.imp, _.hao.ti.m),
  ],
})

export const haopa = _.word('haopa', {
  verb: 'to yell',
  etym: () => [_.hao, _.pa],
})

// ==== alt
