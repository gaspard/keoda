import * as _ from '../lang'

export const pref = _.card('prefix', {
  open: true,
  desc: () => `
# List of all prefix and suffix

## Verb

The full list of subjects to transform nouns into verbs is on another page:
${_.subj}

## Meaning

* ${_.ne} (negation, opposition)
* ${_.suk} (comitative case: with)
* ${_.sau} (privative case: without)

* ${_.phrase('Negation (bold)', _.neji)}

## Adjective ${_.le}

TODO

## Adverb ${_.si}

TODO
`,
})
