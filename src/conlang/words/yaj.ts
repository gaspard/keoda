import * as _ from '.'

export const yaj = _.word('yaj', {
  noun: '**glans**',
  etym: () => [_.yu, _.aj],
  desc: () => `This is the ungendered term for clitoridial or penial glans.`,
})

// === alt

export const yajil = _.alt('yajil', {
  glo: '**glans**.*erect*',
  alt: () => _.yaj,
})

export const yajegi = _.alt('yajegi', {
  glo: '**glans**.*cold*',
  alt: () => _.yaj,
})
