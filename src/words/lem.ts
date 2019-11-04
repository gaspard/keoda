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

export const olem = _.word('olem', {
  noun: 'je/nous du passé',
})
_.see(_.oulem)

export const leme = _.word('leme', {
  preposition: 'annonce une question sur le passé',
})
_.see(_.lire)

export const xxx = _.word('x', {
  noun: `jusque`,
  desc: () => ``,
})

export const x = _.word('x', {
  noun: `jusqu'au moment où`,
})
