import * as _ from '.'

export const de = _.word('de', {
  def: '**2**',
  subj: 'us two',
  posit: 'on the back *two* legs wide open',
  glo: '1PL.DU',
  see: () => [_.count],
})

export const ode = _.word('ode', {
  def: '**us two**',
  prefix: '**to us two**',
  suffix: '**to us two**',
  etym: () => [_.oS, _.de],
  see: () => [_.subj],
})

export const deda = _.word('deda', {
  def: '**two bodies**',
  glo: 'two.**body**',
  etym: () => [_.de, _.da],
  see: () => [_.subj],
})

export const hamade = _.word('hamade', {
  def: '**index finger**',
  etym: () => [_.hama, _.de],
  posit:
    'On the back two legs wide open (indicated by thumb touching index finger)',
})

export const nede = _.word('nede', {
  def: 'anguish',
  adj: 'fighting',
  desc: () => 'life with time (anxiety, few memories)',
  see: () => [_.ganes, _.nanes],
})

export const de2 = _.alt('de', {
  glo: '**2**',
  alt: () => _.de,
})

export const dehipi = _.alt('dehipi', {
  glo: '**2**.*10*',
  alt: () => _.de,
})

export const dehipu = _.alt('dehipu', {
  glo: '**2**.*1000*',
  alt: () => _.de,
})
