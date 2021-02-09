import { prefix } from '../../keoda'
import * as _ from '../../lang'

export const u = prefix('u', {
  noun: 'emptiness',
  glo: 'INF',
  // We read the 'verb' value because we have a hack in getGlo for now.
  cla: 'noun',
  desc: () => `
This means exactly the same as ${_.wu} (emptiness, to be filled). Whereas the
morpheme ${_.wu} means "possessed by" ${_.u} means "done by", leaving the
subject to either be clarified later or to come from a previous part of the
sentence.

The infinitive of a verb is thus the accord with "somebody".
`,
  see: () => [_.wu, _.verbs],
})
