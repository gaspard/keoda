import * as _ from '.'

export const ru = _.word('ru', {
  noun: 'creation (Sristi)',
  suffix: 'to become',
  verb: 'to emerge',
  see: () => [_.prep],
})

export const runa = _.word('runa', {
  noun: 'emergence (Krtya कृत्य)',
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
