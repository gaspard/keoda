import * as _ from '.'

export const fodi = _.word('fodi', {
  noun: '**sleep**',
  verb: 'to sleep',
})

export const fodiru = _.word('fodiru', {
  noun: '**sleep**.become',
  etym: () => [_.fodi, _.ru],
})
