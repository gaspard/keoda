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
    _.ni.to,
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

* ${_.phrase('She is beautiful.', _.ta.unu, _.es.a.lu.awi)}

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

### Adding infinitive *(Feb 2021)*

As the title implies, this allows saying all kinds of complicated things regarding what
we enjoy doing, who we have seen doing what and so on.

#### nsfw

* ${_.phrase('I like licking pussy.', _.o.ora, _.u.lu.li, _.yin.m)}

### Engine rewrite and testing *(Feb 2021)*

This rewrite and cleanup had the side effect of pushing all non-written phonotactics into
code, making things much more consistent on how morphemes assemble. Now prefix all "fix"
join with \`/h/\` and suffix use \`/l/\` unless there is an exception. This made numbers
funny:

* ${_.phrase(
    "999'999'999",
    _.da1.ipa1,
    _.da1.ipi1,
    _.da1,
    _.ipu1.de1.uki,
    _.da1.ipa1,
    _.da1.ipi1,
    _.da1,
    _.ipu1,
    _.da1.ipa1,
    _.da1.ipi1,
    _.da1
  )}

Having tests to ensure things do not break is a very good step forward.

### Indefinite subject *(August 2021)*

Transformed the ${_.u} conjugation from an infinitive into the notion of "life
itself" doing something: the infinite subject. This is a first step in
the direction of removing some of the body/mind dichotomy, trying to blur the
notion of "subject" so as to remove some of the separation with the direct
object.

David Bohm's idea on the rheomode (putting word priority on the verb) made me
try different ideas and I think the best solution is to simply use the existing
passive voice with the infinite subject: ${_.phrase('It rains', _.es.u.gai)}.

I would like to change some meanings related to "spirit". I want this languge to
be about the body, so "mind" has to be something that is a lived experience, not
some "spirit" or "soul". This means that ${_.ga} needs to change from "spirit"
to something else ? I have to do some introspection to see if I find concepts
that better describe "inner experience", something that would only exist in
relation with the body, a painting, matter. I want spirit to be a property of
matter, of ${_.gu}, not some "other thing".

### Loved *(January 2022)*

Haha ! This is why the ${_.a$} suffix was free. It was reserved, a late coming
beauty to the party. It means "loved" in the sense of being taken inside, to the
heart, to the self.

So now ${_.ga} (spirit) comes from ${_.gu.a$} (life loved, life taken to the
self). Isn't this beautiful ?

And ${_.gu} still derives from ${_.ga} as ${_.ga.u$} (pulled spirit) because
every language is a digraph and loops are fun.

No more matter/mind dichotomy since they now both define each other in a
beautiful dance.

### Zulapa *(March 2022)*

Renamed the language to Zulapa because I wanted a ".com" domain for it and I
also think that it has evolved to being something more about kindness than just
"the body". So now this language is "the heart speaks" or "heart speak".

I love it !

### Unu *(April 2022)*

Replaced "ana" to "unu" and "oto" to "ofo" because these roots sounded too much
like names. This made me change "fo" (to whip) to "fik" because father (hafo)
would be the same word as to fall.

I also felt that it was time to allow some double consonnants to add a little
bit of spice to the language because singing felt boring without any stops. So
now words can end in "k" or "sh" and the consonnant pairs "kt", "nt", "st",
"sht" and "shk" are allowed.
`,
})
