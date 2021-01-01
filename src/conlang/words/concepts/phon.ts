import * as _ from '..'

export const phon = _.card('phon', {
  lang: 'Phonology',
  desc: () => `
## Consonants

|                 | Labial     | Coronal         | Dorsal       | Glottal |
| :-------------  | :--------: | :-------------: | :----------: | :-----: |
| **Nasal**       | m          | n               |              |         |
| **Plosive**     | p / b      | t / d           | k / g        |         |
| **Fricative**   | f          | s / z  -  ʃ / ʒ |              | h       |
| **Approximant** | w          |                 | j            |         |
| **Trill**       |            | r               |              |         |
| **Lateral**     |            | l               |              |         |

## Vowels

|                 | Front      | Central         | Back         |
| :-------------  | :--------: | :-------------: | :----------: |
| **Close**       | i          |                 | u            |
| **Mid**         | ɛ          |                 | ɔ            |
| **Open**        | a          |                 |              |

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

## Evolution

There is an ongoing evolution transforming 'au' into 'zu'.
`,
})
