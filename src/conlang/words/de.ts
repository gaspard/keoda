import * as _ from '.'

export const de = _.word('de', {
  noun: 'us two',
  def: '2',
  pos: 'on the back *two* legs wide open',
  see: () => [_.count],
})

export const de2 = _.alt('de2', {
  glo: '2',
  alt: () => _.de,
})

export const hamade = _.word('hamade', {
  noun: '**index finger**',
  etym: () => [_.hama, _.de2],
  pos:
    'On the back two legs wide open (indicated by thumb touching index finger)',
})

export const nede = _.word('nede', {
  noun: 'anguish',
  adj: 'fighting',
  desc: () => 'life with time (anxiety, few memories)',
  see: () => [_.ganes, _.nanes],
})

export const dehipi = _.alt('dehipi', {
  glo: '**2**.*10*',
  alt: () => _.de2,
})

export const dehipu = _.alt('dehipu', {
  glo: '**2**.*1000*',
  alt: () => _.de2,
})
