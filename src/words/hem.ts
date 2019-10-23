import * as _ from '.'

export const hem = _.word('hem', {
  adj: 'offert',
  suffix: 'offert',
  desc: () =>
    `Compliment important qui signifie "je vois que tu m'offres ceci". Par example ${_.odahem} ou ${_.tahem}.`,
})

export const odahem = _.example([_.oda, _.hem], 'Corps offert (compliment).')

export const tahem = _.example([_.taj, _.hem], 'Pénis offert (compliment).')
