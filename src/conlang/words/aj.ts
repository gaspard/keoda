import * as _ from '.'

export const aj = _.word('aj', {
  def: '**fire** (dopamine, serotonine)',
  verb: 'to burn',
})

export const ajapi = _.word('ajapi', {
  def: '**self-burn** (initiation)',
  verb: 'to burn the self',
  see: () => [_.iwigui],
})

// === alt

export const esohajapi = _.alt('esohajapi', {
  glo: 'PASS.wex.**burn**',
  alt: () => _.ajapi,
})
