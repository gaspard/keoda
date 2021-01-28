import * as _ from '.'

export const lu = _.word('lu', {
  prep: 'while',
  pref: 'continuous (CONT)',
  glo: 'while',
  desc: () => `
This prefix comes after accord to the subject (unlike ${_.es}):

* ${_.phrase('I am dreaming.', _.oluyafa)}
`,
})

export const lulei = _.word('lulei', {
  noun: 'until',
  etym: () => [_.lu, _.lei],
})
