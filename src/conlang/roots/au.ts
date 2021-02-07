import * as _ from '../lang'

export const au = _.word('au', {
  noun: 'heart',
  verb: 'to love',
  see: () => [_.zu],
})

export const auhu = _.word('auhu', {
  noun: 'to fall in love',
  desc: () => `
The pull of the heart.
`,
  etym: () => [_.au, _.u$],
})

export const aupa = _.word('aupa', {
  noun: 'gratitude',
  desc: () => `
To love everything.
`,
  etym: () => [_.au, _.pa],
})

export const auau = _.word('auau', {
  verb: 'to make love',
  see: () => [_.zuzu, _.kude],
  exam: () => [
    _.phrase(
      'Make love to me as if you washed yourself from a great sadness.',
      _.au.imp,
      _.si.falame,
      _.au
    ),
  ],
})
