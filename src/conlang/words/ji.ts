import * as _ from '.'

export const jiM = _.word('ji', {
  id: 'jiM',
  noun: 'memory',
  verb: 'to remember',
})

export const ji10 = _.word('ji', {
  id: 'ji10',
  noun: '10',
})

export const ji = _.word('ji', {
  noun: 'hair',
  pos: 'standing, body leaning forward, hair offered ready to be taken',
})

export const jipa = _.word('jipa', {
  noun: 'remembering',
  desc: () => `Remembering being a god.dess...`,
  etym: () => [_.ji, _.pa],
  see: () => [_.ganes, _.jifi],
})

export const jifi = _.word('jifi', {
  adj: 'humble',
  etym: () => [_.ji, _.fi],
  see: () => [_.nanes, _.jipa],
})

export const gojida = _.word('gojida', {
  noun: 'bear',
  etym: () => [_.go, _.ji, _.oda],
})

export const neji = _.word('neji', {
  noun: 'without hair',
  verb: 'to shave',
})

// ==== alt

export const tojihuki = _.alt('tojihuki', {
  glo: 'wex.**hair**.*long*',
  alt: () => _.ji,
})

export const tojihukipan = _.alt('tojihukipan', {
  glo: 'wex.**hair**.*long*.*everywhere*+',
  alt: () => _.ji,
})
