import * as _ from '../lang'

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
| **Fricative**   | f చ       | s స / z ఠ -  ʃ శ / dʒ జ | x ః * | h హ |
| **Approximant** | ʋ  వ      |                 | j య         |         |
| **Trill**       |            | r ర             |              |         |
| **Lateral**     |            | l ల             |              |         |

\\* The \`/x/\` sound is only used at the end of a word to mark "bad taste/mood"
or accusative with a rejection feeling ("good taste" is /m/ ending and
"neutral taste" is /n/). The more the sound becomes uvular (feeling of
choking), the worst the taste/mood. A near silent expletive /h/ sound can
express (subtle) disdain.

All sounds correspond to [Telugu](https://en.wikipedia.org/wiki/Telugu_script) except for:

| Symbol | Telugu     | Keoda     | Example             |
| :----: | :--------: | :-------: | :--------:          |
| **చ**  | /tʃ/       | /f/       | ${_.falame}        |
| **ఠ**  | /tʰ/       | /z/       | ${_.zuzu}          |
| **జ్‌**  | /dʒ/       | /dʒ/ or /ʒ/ (end of word) | ${_.joda}, ${_.baj} |
 

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
case, we add an 'a' between them. Example: ${_.alayuru} instead of alyin.
But ${_.najlo}, or  ${_.phrase(
    'I love your beauty.',
    _.o.au,
    _.awi.es.ti
  )} works.

Two vowels in a row are not allowed between conjugation and verb or counting
and power ${_.da1.ipa1}. An 'h' or 'l' ('h' when joining a prefix and an 'l'
when joining a suffix) is added in such cases: ${_.phrase(
    'I love my body.',
    _.o.au,
    _.to.oda.m
  )}.

Two consecutive identical vowels are reduced to a single one: ${_.phrase(
    'Carress my body !',
    _.mi,
    _.oda
  )}

Words cannot end in ${
    _.m
  } (used for accusative). Words often drop the last vowel when adding a suffix that starts with a vowel instead of adding 'h'.

Example: ${_.same} (foot) becomes ${_.same.we} (right foot).

## Script

Diphthongs are written on the same consonant when possible if the second vowel is /u/ as in ${
    _.peu
  } or ${_.agade.uki}. For other vowels, we write the second one separately: ${
    _.noa
  }.

## Current evolutions

* There is a tendency to use \`/zu/\` instead of \`/au/\`.
* There might be a trend to change \`/dʒ/\` into \`/ʒ/\`. 

Your next read: ${_.kedana} (geography)
`,
})
