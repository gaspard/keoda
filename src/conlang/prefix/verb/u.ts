import { prefix } from '../../zulapa'
import * as _ from '../../lang'

export const u = prefix('u', {
  noun: 'emptiness',
  glo: 'INF',
  // We do not set 'verb' because we have a hack in getGlo for now.
  cla: 'verb',
  desc: () => `
This is a different aspect of ${_.wu} (emptiness, to be filled) or ${_.gu}
(life). Whereas the morpheme ${_.wu} means "possessed by" ${_.u} means "done
by", leaving the subject to either be clarified later or to come from a previous
part of the sentence.

This "infinitive" of a verb is thus the accord with "life" ${_.gu}, the infinite
subject.
`,
  see: () => [_.gu, _.wu, _.verbs],
})
