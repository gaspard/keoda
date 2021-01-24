import * as _ from '.'

export const es = _.word('es', {
  noun: 'is-ness',
  prefix: 'self (PASS)',
  suffix: 'state (BE)',
  glo: 'PASS',
  desc: () => `
## Passive voice

This is something like saying 'there is' before the accord on subject
thus making "There is an I massaged in the future" is said as:

* ${_.phrase('I will be caressed.', _.esomilir)}

It is applied before the conjugation: ${_.eseshanele}.

When the conjugation starts with a consonant, we fix with an 'e'.

With the verb ${_.e}, it means 'there is a fact of':

* ${_.phrase('There is a me crazy.', _.esohe, _.negu)}
* ${_.phrase('I am crazy.', _.ohe, _.negu)}

## State, thing

When used as suffix on a word ending with a vowel, we add an 'n':

* ${_.nanes}
* ${_.nefenesti}
`,
})
