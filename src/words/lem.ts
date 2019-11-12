import * as _ from '.'

export const lem = _.word('lem', {
  suffix: 'passé',
})
_.see(_.lir)
_.see(_.lei)

export const lemir = _.word('lemir', {
  suffix: 'toujours',
  desc: () => `De ${_.lem} et ${_.lir}.`,
})

export const elem = _.word('elem', {
  noun: 'le passé existe (dans le passé)',
})

export const elemir = _.word('elemir', {
  noun: 'de toute éternité',
})
