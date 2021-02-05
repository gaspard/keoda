import * as _ from '.'

export const baka = _.word('baka', {
  noun: 'devotion',
  def: 'please',
  verb: 'to surrender',
  see: () => [_.lo],
  desc: () => `
Bhakti...

The difference with ${_.lo} is that this surrendering is much more profound and
goes all the way to make it not only an act of ego-death but also an act of
incredible love.

The ultimate surrendering is not giving but receiving, ${_.phrase(
    'Receive life',
    _.es.baka,
    _.gui
  )}.
`,
})
