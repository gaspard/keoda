import * as _ from '.'

export const ji = _.word('ji', {
  noun: 'hair',
  pos: 'standing, body leaning forward, hair offered ready to be taken',
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
