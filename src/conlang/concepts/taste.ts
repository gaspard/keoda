import * as _ from '../lang'

export const taste = _.card('taste', {
  desc: () => `
## Accusative marking

The suffix is added to the last part of the a group with the accusative case.
So if the noun phrase is John's face, depending on word order, the ${_.m}
goes on ${_.duha} or ${_.John}:
  
* ${_.phrase('They look at the face of John.', _.sha.fa, _.duha.wu, _.John.m)}
* ${_.phrase("They look at John's hand.", _.sha.fa, _.John, _.duha.m)}

On words with other suffix, ${_.m} suffix always comes last.

On words ending with a vowel, we just add \`m\`, \`n\` or \`h\` and when the
words ends with a consonant, we add a vowel to fix. To do this, we repeat the
last vowel:

* ${_.phrase('John', _.John.m)}
* ${_.phrase('A sign', _.tan.m)}
* ${_.phrase('A thread', _.fi.m)}

The important aspect here is how the mouth ends expressing the "direct
object" of the action. Lip sound \`/m/\` means "miam", "I'll it all". The
coronal sound \`/n/\` expresses ambiguity "let me taste some of this" and the
uvular /χ/ is for rejection or disdain "I'd prefer not take any of that". The
more it sounds like choking (uvular \`/χ/\`), the more the rejection and the
lighter plosive \`/h/\` expresses disdain.

When the word ends with a vowel, we can also use the "old way" of adding
/nam/ as this highlights the marking.

## Summary:

* ${_.m} glossed \`${_.m.definition.glo}\` means "${_.m.definition.adj}"
* ${_.n} glossed \`${_.n.definition.glo}\` means "${_.n.definition.adj}"
* ${_.h} glossed \`${_.h.definition.glo}\` means "${_.h.definition.adj}"

## Example

* ${_.phrase('I love you !', _.o.zu, _.ti.m)} (I love all of you)
* ${_.phrase('I like you.', _.o.zu, _.ti.n)} (I like some of you)
* ${_.phrase(
    'I love you (cynical)...',
    _.o.zu,
    _.ti.h
  )} (I don't really love you)
* ${_.phrase(
    'I love you so much !',
    _.o.zu,
    _.pa.ti.m
  )} (I love every bit of you)

Next reading: ${_.verbs}
`,
})
