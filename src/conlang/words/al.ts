import * as _ from '.'

export const al = _.word('al', {
  noun: 'sky',
  adj: 'up',
  pref: 'up',
  see: () => [_.so],
})

export const alayuru = _.word('alayuru', {
  noun: 'top of vagina',
  adj: 'happy',
  glo: '*top*.**vagina**',
  etym: () => [_.al, _.yuru],
  desc: () => `
This should definitely have a name in english... Maybe not the 7th but a sky
nonetheless.
`,
})
