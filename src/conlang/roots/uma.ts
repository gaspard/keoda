import * as _ from '../lang'

export const uma = _.word('uma', {
  def: 'or',
  see: () => [_.prep],
  exam: () => [
    _.phraseX(
      'Look at me or close your eyes.',
      _.fa.imp,
      _.to.m,
      _.uma,
      _.ne.fa.imp
    ),
  ],
})
