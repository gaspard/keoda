import * as _ from '.'

export const sen = _.word('sen', {
  noun: 'here',
  see: () => [_.da],
})

// == alt

export const fusen = _.alt('fusen', {
  glo: 'ERG.**here**',
  alt: () => _.sen,
})
