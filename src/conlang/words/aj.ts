import * as _ from '.'

export const aj = _.word('aj', {
  noun: '**fire** (dopamine, serotonine)',
  action: 'to burn',
})

export const ajapi = _.word('ajapi', {
  noun: '**self-burn** (initiation)',
  action: 'to burn the self',
  see: () => [_.iwigui],
})

// === alt

export const esohajapi = _.alt('esohajapi', {
  glo: 'PASS.wex.**burn**',
  alt: () => _.ajapi,
})
