import * as _ from '.'

export const on = _.word('on', {
  noun: 'source',
  verb: 'faire naître (apparaître)',
})

_.see(_.yon)

export const lamon = _.word('lamon', {
  noun: `urètre (source de l'eau)`,
  derived: [_.lam, _.on],
})

export const yaon = _.word('yaon', {
  noun: 'lever de la nuit (coucher de soleil)',
  derived: [_.ya, _.on],
})

export const yohon = _.word('yohon', {
  noun: 'lever du jour',
  derived: [_.yo, _.on],
})
