import * as _ from '..'

export const grammar = _.card('grammar', {
  desc: () => `
# Grammar

If you haven't, you should read the [origins of the language](${_.aaa.id}).

### Moods

There are many ways to express moods in this language from the "maybe tomorrow"
answers to "yes tonight" through tenses or "I LoVe YoU" (sarcasm) through flavor
marking or "caressing-look at me", "hit-look at me" through verb cases. Not to
mention honorific or diminutives and other ways to address people.

These moods are a very important part of the language because they enable subtlety without
requiring lots of vocabulary.

### Nouns

The language does not have the concept of verbs, pronouns or adjectives that
are different from nouns. In this language, everything is a noun and it
changes role with markers. This means that **every body part is a verb** !!!
Youhou ! Now we have a "vulving" verb and a glans-hitting one too ! Nice.

And this also means that we can be creative in how things become active
(verbs) or how they extend meaning (adjective, adverbs). If someone decides
that "cherry" feels like it should mean "provocative" as an adverb and this
becomes part of some love making blow my mind thing. That would be crazy
nice. And now cherries never ever look or taste the same...

### Active marker

The "active" marker creates a verb by prefixing a noun with a [subject
morpheme](${_.subj.id}):

* ${_.ma} (hand)
* ${_.ama} (they "do something with hand = massage")

### Semantic extensions

Nouns prefixed with ${_.si} become semantic extensions ("adverbs" or
"adjectives"). Example:

* ${_.phrase('They¹ massage delicately.', _.ama, _.sienu)}

Some morphemes behave well as suffix. For example ${_.uki}:

* ${_.agadeuki}

The transformation from independent word to suffix happens to frequently used
semantic extenders (long, short, left, up). In this case, the morphemes
behave a lot like a grammatical cases (INESS, SUPESS, etc).

## To be or not to be

In keoda, we prefer to not use a copula¹ and instead express properties in
terms of being possessed by something, going through something. This gives a
feeling of impermanence, and of the possibility of change as well as the
importance of gratitude for what is now and will be gone.

#### note

(¹) I could not resist to the pleasure of using this word... *Borrowed from
Latin copula ("connection, linking of words"), from co- ("together") +‎ apere
("fasten")*... See ${_.kude}.

This means that instead of saying "She is beautiful", we would say "She is
being beautified" (passive continuous tense):

* ${_.phrase('self-she-beautifying', _.esahanaluhawi)}

But if this can be divided into different words:

* ${_.phrase('She self-they-beautifying', _.tahana, _.esaluhawi)}

Expressing properties in this way highlights the fact that most things in
life happen to us without much knowledge on our agency on these matters.
We cannot say anything on the nature or cause of this property. It could be
from personal effort, happy birth, bad luck or anything. In the end, people
are mysteries and we have no way of knowing what they are, their ontology or
even the slightest thing about the causal nature of their being. This is why
we just say "beauty is happening" or "joy is happening" or "love is happening".

Actually using the verb to be (${_.e}) to express properties is seen as rude.

* ${_.phrase('I am loved.', _.esoluzu)}
`,
})
