import * as _ from '../words'

export const prefix = _.card('prefix', {
  open: true,
  desc: () => `
# List of all prefix

## Verb

The full list of subjects to transform nouns into verbs is on another page:
${_.subj}

## Meaning

* ${_.ne} (negation)

* ${_.phrase('Negation (bold)', _.ne.ji)}

## Adjective ${_.le}

## Adverb ${_.si}

`,
})
