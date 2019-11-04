import * as _ from '.'

export const gu = _.word('gu', { noun: 'vie', adj: 'croissance' })

export const guru = _.word('guru', {
  noun: 'chemin de vie',
  derived: [_.gu, _.ru],
})
