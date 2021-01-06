import * as _ from '.'

export const aj = _.word('aj', {
  noun: 'fire',
  verb: 'to burn',
})

export const ajapi = _.word('ajapi', {
  verb: 'to burn the self',
  see: () => [_.iwigui],
})

// === alt

export const esohajapi = _.alt('esohajapi', {
  glo: 'INTR.1SI.**self-burn**',
  alt: () => _.ajapi,
})
