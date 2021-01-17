import * as _ from '.'

export const yada = _.word('yada', {
  noun: 'dream body',
  etym: () => [_.ya, _.oda],
  desc: () => `
If the visible body is ${_.oda}, this is the the identity body, deep,
intimate, poetic, "subconscious" like Julia Serano would say.
`,
})

export const piyada = _.word('piyada', {
  noun: 'me (poetic)',
  glo: '1SG.POET',
  etym: () => [_.pi, _.yada],
  see: () => [_.pida, _.pron],
})
