import * as _ from '.'

export const il = _.word('il', {
  noun: '**summer**',
  mod: 'warm',
})

export const odil = _.word('odil', {
  noun: '**lion**',
  etym: () => [_.oda, _.il],
})
