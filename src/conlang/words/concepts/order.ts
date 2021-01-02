import * as _ from '..'

export const Jane = _.word('Jane', {
  noun: 'Jane',
  writ: 'జాఁ',
})
export const Janeam = _.alt('Janeam', {
  glo: 'Jane.ACC',
  writ: 'జానాం',
  alt: () => _.Jane,
})
export const fuJane = _.alt('fuJane', {
  glo: 'SBJ.Jane',
  writ: 'చుజాఁ',
  alt: () => _.Jane,
})
export const niJane = _.alt('niJane', {
  glo: 'DAT.Jane',
  writ: 'నిజాఁ',
  alt: () => _.Jane,
})

export const John = _.word('John', {
  noun: 'John',
  writ: 'జోఁ',
})
export const Johnam = _.alt('Johnam', {
  writ: 'జోనాం',
  glo: 'John.ACC',
  alt: () => _.John,
})

export const order = _.card('order', {
  lang: 'Word order',
  desc: () => `
Word order evolved to not matter so that we can put emphasis and
expectation on any part of the phrase.

In our imaginary context, Jane is the Domina and John's butt is the
receiver of the action. Talking to friends we want to tell that Jane
will be whipping John's butt putting emphasis (i.e revealing last) on
any part of this action. So here are the different parts:

1. Jane (Subject)
2. will (Tense)
3. whip (Verb)
4. John's (Receiver)
5. butt (Body part)

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
as part of the verb "to whip a butt". Body parts tend to stick to verbs and actions. Don't ask me
why.

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

# Accusative and dative

${_.phrase('Iris shows her eyes to Jane.', _.Iris, _.aguwu, _.fatam, _.niJane)}

${_.phrase(
  'I always dream Iris and I make love to you.',
  _.oyafalau,
  _.eku,
  _.Iris,
  _.shu,
  _.oda_sbj,
  _.shozuzu,
  _.tim
)}
`,
})
