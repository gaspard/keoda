import * as _ from '.'

export const ada = _.word('ada', {
  pron: 'them',
  glo: '3SG',
  etym: () => [_.a, _.oda],
  see: () => [_.ta, _.aya, _.pron],
})

export const aya = _.word('aya', {
  pron: 'them (poetic)',
  glo: '3SG.POET',
  etym: () => [_.a, _.yada],
  see: () => [_.ada, _.pron],
})
