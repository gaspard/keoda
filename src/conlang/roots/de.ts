import * as _ from '../lang'

export const de = _.word('de', {
  noun: 'us two',
  def: '2',
  pos: 'on the back *two* legs wide open',
  see: () => [_.count],
})

export const hamade = _.word('hamade', {
  noun: '**index finger**',
  etym: () => [_.hama, _.de1],
  pos:
    'On the back two legs wide open (indicated by thumb touching index finger)',
})

export const nede = _.word('nede', {
  noun: 'anguish',
  adj: 'fighting',
  desc: () => 'life with time (anxiety, few memories)',
  see: () => [_.ganes, _.nanes],
})
