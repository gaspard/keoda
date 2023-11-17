import * as _ from '../../lang'
import { alt, prefix } from '../../zulapa'

export const u = prefix('u', {
  noun: 'Infinite',
  glo: 'INF',
  // We do not set 'verb' because we have a hack in getGlo for now.
  cla: 'verb',
  desc: () => `
This is a different aspect of ${_.wu} (emptiness, to be filled) or ${_.gu}
(life). Whereas the morpheme ${_.wu} means "possessed by" ${_.u} means "done
by", leaving the subject to either be clarified later or to come from a previous
part of the sentence.

This "indefinition" of the subject is thus the accord with "life" itself
${_.gu}, the infinite subject.

So the emptiness of ${_.u} is expanded or realised in ${_.gu}.
`,
  see: () => [_.gu, _.wu, _.verbs],
})

alt('uwi', {
  alt: () => u,
  id: 'u-wi',
  noun: 'Infinite',
  glo: 'Infinite.NB',
  cla: 'verb',
})

alt('unu', {
  alt: () => u,
  id: 'u-nu',
  noun: 'Her',
  glo: 'Infinite.FEM',
  cla: 'verb',
})

alt('uto', {
  alt: () => u,
  id: 'u-to',
  noun: 'Him',
  glo: 'Infinite.MASC',
  cla: 'verb',
})
