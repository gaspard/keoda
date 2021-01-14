import * as _ from '..'

export const Jane = _.word('Jane', {
  noun: 'Jane',
  phon: '/dʒan/',
  writ: 'జాఁ',
})
export const Janeam = _.alt('Janeam', {
  glo: '**Jane**.ACC',
  phon: '/dʒanam/',
  writ: 'జానాం',
  alt: () => _.Jane,
})
export const fuJane = _.alt('fuJane', {
  glo: 'ERG.**Jane**',
  phon: '/fudʒan/',
  writ: 'చుజాఁ',
  alt: () => _.Jane,
})
export const niJane = _.alt('niJane', {
  glo: 'DAT.**Jane**',
  writ: 'నిజాఁ',
  phon: '/nidʒan/',
  alt: () => _.Jane,
})

export const John = _.word('John', {
  noun: 'John',
  phon: '/dʒɔn/',
  writ: 'జోఁ',
})
export const Johnam = _.alt('Johnam', {
  writ: 'జోనాం',
  phon: '/dʒɔnam/',
  glo: '**John**.ACC',
  alt: () => _.John,
})
export const niJohn = _.alt('niJohn', {
  writ: 'నిజోఁ',
  phon: '/nidʒɔn/',
  glo: 'DAT.**John**',
  alt: () => _.John,
})

export const order = _.card('order', {
  open: true,
  writ: 'order',
  desc: () => `
Word order evolved to be nearly free so that we can put emphasis and
expectation on any part of the phrase, helping identify the [theme](https://en.wikipedia.org/wiki/Topic_and_comment) and the
[rheme](https://en.wikipedia.org/wiki/Topic_and_comment), the topic and the comment, the known and the unknown, the old information and the new.

##### note 

Click on the "i" emoji on the top right corner of this card to hide/show gloss and
traductions for all phrases on this card.

In order to be able to move words and sub phrases around, we use three cases:

* ${_.fu} *Ergative*: the doer (who)
* ${_.am} *Accusative*: object / receiver (what)
* ${_.ni} *Dative*: incidental receiver (to whom)

For more information on accusative and dative, I found
[this](http://courses.washington.edu/furman2/dative%20&%20accusative/expl-ex.htm)
to be a good read.

Ergative case marking is rare. It is only used when we want to emphasize
who does the action or if the context is very confusing (for example when
using body parts as subjects):

${_.phrase('On your skin, my hand walks.', _.fenoati, _.fuma, _.afen)}

## Examples:

In these examples, the english traductions are not meant to be grammatically
correct because english is not a free word order language.

${_.phrase('Jane whips the butt of John', _.Jane, _.afo, _.palwu, _.Johnam)}

${_.phrase('John gives the ball to Jane', _.John, _.aguwu, _.tameham, _.niJane)}

${_.phrase(
  'John talks about Iris to Jane',
  _.John,
  _.alapa,
  _.Irisam,
  _.niJane
)}

${_.phrase(
  'To John, insults, yells Jane.',
  _.niJohn,
  _.lanaguam,
  _.ahaopa,
  _.Jane
)}

## Some more examples

${_.phrase('Iris shows her eyes to Jane.', _.Iris, _.aguwu, _.fatam, _.niJane)}

${_.phrase(
  'I always dream Iris and I make love to you.',
  _.oyafalau,
  _.eku,
  _.Iris,
  _.shu,
  _.oda,
  _.shozuzu,
  _.idam
)}

${_.phrase('They talk about John to me.', _.alapa, _.Johnam, _.nioda)}

And in this one, "Jane" is the object of a preposition (the place where the
all is thrown) and has no marking.

${_.phrase(
  'John throws the ball at Jane',
  _.John,
  _.arumo,
  _.tameham,
  _.dona,
  _.Jane
)}

## Accusative marking

Here are some examples to show when accusative marking on grouped and ungrouped words of a noun phrase.

${_.phrase("They whip John's butt.", _.afo, _.John, _.palam)}

${_.phrase('They whip the butt of John.', _.afo, _.palwu, _.Johnam)}

${_.phrase('The butt, they whip (of) John.', _.palam, _.afo, _.Johnam)}

---

In our imaginary context, Jane is the Domina and John's butt is the receiver
of the action. Talking to friends we want to tell that Jane will be whipping
John's butt putting emphasis on any part of this action by suspending
discourse and revealing the crux of the action last. So here are the
different parts:

1. Jane (Subject, optional ergative case ${_.fu})
2. will (Tense)
3. whip (Verb)
4. John's butt (Receiver, accusative ${_.am})

## 1. Emphasis on the subject

${_.phrase(
  'The butt of John will be whipped by ... Jane.',
  _.palwu,
  _.Johnam,
  _.afoliri,
  _.fuJane
)}

## 2. Emphasis on the tense

Note that here we do not say ${_.phrase(
    'The butt of John',
    _.palwu,
    _.Johnam
  )} because pal is seen
as part of the verb "to whip a butt". Body parts tend to stick to verbs and
actions. Don't ask me why.

${_.phrase(
  'There will be a whipping of butt of John by Jane... tonight.',
  _.fo,
  _.pal,
  _.Johnam,
  _.fuJane,
  _.eliri
)}

## 3. Emphasis on the verb

${_.phrase(
  "By Jane on John's butt, tonight, there will be a whipping.",
  _.fuJane,
  _.John,
  _.palam,
  _.foliri
)}

## 4. Emphasis on the receiver

${_.phrase(
  'Jane will whip tonight the butt of ... John.',
  _.Jane,
  _.afoliri,
  _.palwu,
  _.Johnam
)}

## 5. Emphasis on the body part

${_.phrase(
  "Jane will whip tonight John's butt.",
  _.Jane,
  _.afoliri,
  _.John,
  _.palam
)}

---

## One last word

The topic of the phrase can be further highlighted by ending the first part
of the phrase with ${_.wa}. This allows a kind of pause before saying
precisely what happens (the comment).

We all know Jane loves to whip but we are really interested in knowing
who's butt it will be: 

${_.phrase(
  "Jane will whip tonight - wa ! - John's butt.",
  _.Jane,
  _.afoliriwa,
  _.John,
  _.palam
)}

Your next read: ${_.genders} (genders)
`,
})
