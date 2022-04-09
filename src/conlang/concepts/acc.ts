import * as _ from '../lang'

export const acc = _.card('taste', {
  desc: () => `
## Accusative marking

* ${_.m} glossed \`${_.m.definition.glo}\`

This marks the direct object of a phrase (the thing acted upon).

If there is a noun phrase, the suffix is added to the last word.  So if the noun
phrase is John's face, depending on word order, the ${_.m} goes on ${_.duha} or
${_.John}:
  
* ${_.phrase('They look at the face of John.', _.sha.fa, _.duha.wu, _.John.m)}
* ${_.phrase("They look at John's hand.", _.sha.fa, _.John, _.duha.m)}

On words with other suffix, ${_.m} suffix always comes last.

On words ending with a vowel, we just add ${_.m} and when the words ends with a
consonant, we add a vowel to fix. To do this, we repeat the last vowel:

* ${_.phrase('John', _.John.m)}
* ${_.phrase('A sign', _.tan.m)}
* ${_.phrase('A thread', _.fi.m)}

When the word ends with a vowel, we can also use the "old way" of adding
/nam/ as this highlights the marking.

## Example

* ${_.phrase('I love you !', _.o.zu, _.ti.m)} (I love all of you)
* ${_.phrase(
    'I love you so much !',
    _.o.zu,
    _.pa.ti.m
  )} (I love every bit of you)

Next reading: ${_.verbs}
`,
})
