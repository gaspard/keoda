import * as _ from '.'

export const ru = _.word('ru', {
  suffix: 'to become',
  verb: 'to become',
  see: () => [_.prep],
})

export const runa = _.word('runa', {
  noun: 'emergence',
  etym: () => [_.ru, _.na],
})

export const leiru = _.word('leiru', {
  noun: 'destiny',
  etym: () => [_.lei, _.ru],
})

export const leirui = _.word('leirui', {
  noun: 'fortune',
  etym: () => [_.leiru, _.i],
})

export const leiruo = _.word('leiruo', {
  noun: 'misfortune',
  adv: 'alas',
  etym: () => [_.leiru, _.o],
})
