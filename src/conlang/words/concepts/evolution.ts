import * as _ from '..'

export const evolution = _.card('evolution', {
  desc: () => `
# Evolution

This is some historical notes on the language as it has evolved and how
expressing the same thing has changed over time.

The current state of affaires is here: ${_.grammar}

#### note

This whole card is nsfw because this is what guides this language.

## An example

### Caress your breasts delicately

In this example, we see how the first version used a kind of dative and no
verb marking. This then evolved to use a very regular accusative, and finaly
we added the dative back but with more power and made the accusative nicer.

* ${_.phrase(
    'To you, (you) caress breasts lightly.',
    _.iHIST,
    _.mi,
    _.mun,
    _.sienu
  )}
* ${_.phrase('Caress your breasts lightly.', _.mi, _.munatinamHIST, _.sienu)}
* ${_.phrase('Caress your lovely breasts lightly.', _.mi, _.munatim, _.sienu)}
* ${_.phrase(
    'For us, tonight, you will be caressing your lovely breasts lightly.',
    _.futo,
    _.ilumiliro,
    _.munatim,
    _.sienu
  )}

## Chronology

TODO: go through commit log

### Subject consitency *(Jan 2021)*

* All **plurals** (more than two) have an extra prefix of \`/ʃ/\` (**sh**),
  except for ${_.ka} (every).
* Subjects of which the **speaker** belongs to start with \`/ɔ/\` (**o**)
* Subjects of which the **listener** belongs to start with \`/i/\` (**i**)
* Subjects **not present** start with \`/a/\` (**a**)

### Removed copula *(Jan 2021)*

After adding passive and continuous tenses, it made sense to express properties without
saying "is" but instead using the "active" nature of nouns and this tense:

* ${_.phrase('She is beautiful.', _.tahana, _.esaluhawi)}
`,
})
