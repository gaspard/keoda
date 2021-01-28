import * as _ from '.'

export const tu = _.word('tu', {
  def: 'lae',
  glo: 'lae.DET',
  desc: () => `Express a reference to a previously mentioned noun.`,
  see: () => [_.ten],
})
