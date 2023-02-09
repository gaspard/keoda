import * as _ from '../lang'

export const phon = _.card('phon', {
  open: true,
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
| **Fricative**   | f చ       | s స / z ఠ  •  ʃ శ / ʒ జ |      | h హ |
| **Approximant** | ʋ  వ      |                 | j య         |         |
| **Trill**       |            | r ర             |              |         |
| **Lateral**     |            | l ల             |              |         |

All sounds correspond to [Telugu](https://en.wikipedia.org/wiki/Telugu_script) except for:

| Symbol | Telugu     | Zulapa     | Example             |
| :----: | :--------: | :-------: | :--------:          |
| **చ**  | /tʃ/       | /f/       | ${_.falame}        |
| **ఠ**  | /tʰ/       | /z/       | ${_.zuzu}          |
| **జ్‌**  | /dʒ/       | /ʒ/       | ${_.joda}, ${_.baj} |
| **ఇ‌**  | /aj/       | /j/       | ${_.my} |
 

## Vowels

|                 | Front      | Central         | Back         |
| :-------------  | :--------: | :-------------: | :----------: |
| **Close**       | i  ి  ఇ   |                 | u   ు  ఉ   |
| **Mid**         | ɛ  ే  ఎ   |                 | ɔ   ో  ఓ    |
| **Open**        | a  ా  అ  |                 |              |
 

## Semivowel

|                 | As vowel   | As consonant    |
| :-------------  | :--------: | :-------------: |
| **Palatal**     | j  ై ఇ    |  య             |

## Stress

Stress on penultimate syllable before suffix.

keOda, lamigOa, agUwu, afOliri

## Phonotactics

### Consonant cluster

Two consonants in a row are only allowed if:

* previous consonant is \`/s/\`, \`/ʃ/\`, \`/k/\` or \`/n/\`
* and next consonant is \`/k/\` or \`/t/\`
* and they are not the same and not \`/nk/\`

| cluster | sound | example |
| :--: | :--: | :-- |
| sk   | /sk/ | ${_.phrase('Open to everything.', _.hos.ka)} |
| st  | /st/ | ${_.phrase('Their trust.', _.hos.ta)} |
| shk  | /ʃk/ | ${_.phrase('Welcoming everything.', _.ish.ka)} |
| sht  | /ʃt/ | ${_.phrase('Their acceptance.', _.ish.ta)} |
| kt  | /kt/ | ${_.phrase('Your shell (secrets).', _.dak.ti)} |
| nt  | /nt/ | ${_.phrase('Their elbow.', _.wen.ta)} |

For other cases, we duplicate the previous vowel. Example: ${
    _.alayuru
  } instead of \`alyuru\`, or ${_.fik.na} instead of \`fikna\`.
  
### Vowel cluster

Vowel clusters are not allowed. An \`h\` (when joining a prefix) or \`l\` (when
joining a suffix) are added in such cases: ${_.phrase(
    'I love my body.',
    _.o.au,
    _.to.oda.m
  )}.

Words sometimes drop the last vowel when adding a suffix that starts with a
vowel instead of adding \`h\` or \`l\`.

Few words end in ${_.m} because this marker is used for accusative. 

## Script

Diphthongs are avoided and should not comme too often in scripts. If they
are present, they are written as two separate letters: ${_.noa}.

## Current evolutions

* There is a tendency to use \`/zu/\` instead of \`/au/\`.
* There might be a trend to change \`/dʒ/\` into \`/ʒ/\`. 

Your next read: ${_.kedana} (geography)
`,
})
