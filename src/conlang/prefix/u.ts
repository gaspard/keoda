import { prefix } from '../mprefix'
import * as _ from '../words'

export const u = prefix('u', {
  noun: 'emptiness',
  glo: 'INF',
  cla: 'noun', // we read the 'verb' value
  desc: () => `
This means exactly the same as ${_.wu} (emptiness, to be filled). Whereas the
morpheme ${_.wu} means "possessed by" ${_.u} means "done by", leaving the
subject to either be clarified later or to come from a previous part of the
sentence.

The infinitive of a verb is thus the accord with "somebody".
`,
  see: () => [_.wu, _.verbs],
})
