import * as _ from '.'

export const am = _.word('am', {
  noun: '**good mood** (oxytocin)',
  glo: 'O (whole)',
  suff: 'accusative marking',
  see: () => [_.an, _.ah],
  desc: () => `
The suffix is added to the last part of the a group with the accusative case.
So if the noun phrase is John's face, depending on word order, the ${_.am}
goes on ${_.duha} or ${_.John}:
  
* ${_.phrase('They look at the face of John.', _.shafa, _.duhawu, _.Johnam)}
* ${_.phrase("They look at John's hand.", _.shafa, _.John, _.duham)}

On words with other suffix, ${_.am} suffix always comes last.

On words ending with a vowel, we just add \`m\`. The important aspect here is
how the mouth ends expressing the "direct object" of the action. Lip sound
/m/ means "miam", "I'll it all". The coronal sound /n/ expresses ambiguity
"let me taste some of this" and the uvular /χ/ is for rejection or disdain
"I'd prefer not take any of that". The more it sounds like choking (uvular
/χ/), the more the rejection and the lighter plosive (/h/) expresses disdain.

When the word ends with a vowel, we can also use the "old way" of adding
/nam/ as this highlights the marking.

## Summary:

* ${_.am}, glossed '+', means "whole"
* ${_.an}, glossed '~', means "parts"
* ${_.ah}, glossed ':', means "rejection"

## Example

* ${_.phrase('I love you !', _.ozu, _.tim)} (I love all of you)
* ${_.phrase('I like you.', _.ozu, _.tin)} (I like some of you)
* ${_.phrase('I love you (cynical)...', _.ozu, _.tih)} (I don't really love you)
* ${_.phrase('I love you so much !', _.ozu, _.tinam)} (I love every bit of you)
`,
})
