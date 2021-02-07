import * as _ from '../lang'

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
    _.si.enu
  )}
* ${_.phrase('Caress your breasts lightly.', _.mi, _.munatinamHIST, _.si.enu)}
* ${_.phrase('Caress your lovely breasts lightly.', _.mi, _.mun.ti.m, _.si.enu)}
* ${_.phrase(
    'For us, tonight, you will be caressing your lovely breasts lightly.',
    _.fu.to,
    _.i.lu.mi.iro,
    _.mun.ti.m,
    _.si.enu
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

* ${_.phrase('She is beautiful.', _.ta.ana, _.es.a.lu.awi)}

### Full blown "dot" writing code *(Jan 2021)*

Added code in TypeScript (using JS Proxy) to automatically agglutinate
morphemes in order to ensure consistency and stable rules for word
aglutination and glossing. These 'code' based rules had an interesting
effect as they forced me to clarify the functional meaning of some of the hacks
I was writting and this led to the notion that most prefix (${_.ne} is an
exception) change the function of the word whereas most suffix (accusative ones
are the exceptions here) are semantic modifiers.

In short, most "prefixes" alter function and most "suffix" alter meaning.

~~~ts
// This is how the next phrase is written
_.phrase('We are being loved.', _.es.o.lu.zu)
~~~

${_.phrase('We are being loved.', _.es.o.lu.zu)}

### Adding modifier markers *(Feb 2021)*

After creating the most used prefixes and suffixes, I realized that I did not want
any word to agglutinate to act as a modifier because it would make words incredibly
hard to understand (and long). So I needed a way to mark a word as acting like an
adjective or adverb (and thus showing this definition in the gloss instead of the
noun).

Listening to William Croft on the Conlangery podcast, I really liked the way
Mandarin Chinese uses a prefix to change a noun into a property modifier:
something in the way of saying "very fish" to mean "beautiful". I opted for this
strategy, using (${_.le}) for adjectives which means "very" and using
(${_.si}) for adverbs which means "as, like".

* ${_.phrase(
    'The beautiful cat walks gently.',
    _.gilil,
    _.le.awi,
    _.a.fen,
    _.si.gai
  )}

### Adding infinitive

As the title implies, this allows saying things like:

#### nsfw

* ${_.phrase('I like licking pussy.', _.o.ora, _.u.lu.li, _.yin.m)}
`,
})
