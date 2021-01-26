import * as _ from '.'

export const ji = _.word('ji', {
  noun: 'hair',
  posit: 'standing, body leaning forward, hair offered ready to be taken',
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

export const jihuki = _.alt('jihuki', {
  glo: '**hair**.*long*',
  alt: () => _.ji,
})

export const jihukin = _.alt('jihukin', {
  glo: '**hair**.*long*.ACC',
  alt: () => _.ji,
})

export const tojihuki = _.alt('tojihuki', {
  glo: 'POSS.1SI.**hair**.*long*',
  alt: () => _.ji,
})
