import * as _ from '.'

export const egi = _.word('egi', {
  adj: 'froid',
})

export const egina = _.word('egina', {
  noun: 'endive, janvier',
  etym: () => [_.egi, _.ina],
})
_.see(_.seasons)
