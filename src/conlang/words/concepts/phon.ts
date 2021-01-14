import * as _ from '..'

export const phon = _.card('phon', {
  writ: 'phon',
  phon: '/fɔn/',
  desc: () => `
## Phonology and script

![lepakshi](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lepakshi...jpg/330px-Lepakshi...jpg)

Using [telugu script](https://en.wikipedia.org/wiki/Telugu_script) because it
is an *abugida*, the sounds match nearly perfectly and... it looks so good
and curvy.

## Consonants

|                 | Labial     | Coronal         | Dorsal       | Glottal |
| :-------------  | :--------: | :-------------: | :----------: | :-----: |
| **Nasal**       | m మ       | n న             |              |         |
| **Plosive**     | p ప / b బ | t త / d ద  | k క / g గ        |         |
| **Fricative**   | f చ       | s స / z ఠ -  ʃ ష / dʒ జ |   | h  ః హ * |
| **Approximant** | ʋ  వ      |                 | j య         |         |
| **Trill**       |            | r ర             |              |         |
| **Lateral**     |            | l ల             |              |         |

\\* The \`/h/\` sound is a kind of stop in the middle of a word and is written with 'ః' (stop).
At the start of a word, it is written హ.

All sounds correspond to [Telugu](https://en.wikipedia.org/wiki/Telugu_script) except for:

| Symbol          | Telugu     | Keoda     | Example |
| :-------------: | :--------: | :-------: | :--------: |
| **చ**           | /tʃ/       | /f/      | ${_.falame} |
| **ఠ**           | /tʰ/       | /z/      | ${_.zuzu}    |
 

## Vowels

|                 | Front      | Central         | Back         |
| :-------------  | :--------: | :-------------: | :----------: |
| **Close**       | i  ి  ఇ   |                 | u   ు  ఉ   |
| **Mid**         | ɛ  ే  ఎ   |                 | ɔ   ో  ఓ    |
| **Open**        | a  ా  అ  |                 |              |

## Stress

Stress on penultimate syllable before suffix.

keOda, lamigOa, agUwu, afOliri

## Phonotactics

Two consonnants in a row are not allowed if they produce a stop. In this
case, we add an 'a' between them. Example: ${_.alayin} instead of alyin.
But ${_.najlo}, or  ${_.phrase(
    'I love your beauty.',
    _.ohau,
    _.awinesti
  )} works.

Two vowels in a row are not allowed between conjugation and verb. An 'h' is
added in such cases: ${_.phrase('I love my body.', _.ohau, _.tohodam)}.

Two consecutive identical vowels are reduced to a single one: ${_.phrase(
    'Carress my body !',
    _.mi,
    _.oda
  )}

Words cannot end in ${
    _.am
  } (used for accusative). Words often drop the last vowel when adding a suffix that starts with a vowel instead of adding 'h'.

Example: ${_.same} (foot) becomes ${_.samwe} (right foot).

## Current evolutions

* Some dialects seem to be using \`/zu/\` instead of \`/au/\`.
* There might be a trend to change \`/dʒ/\` into \`/ʒ/\`. 

Your next read: ${_.kedana} (geography)
`,
})
