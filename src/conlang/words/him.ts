import * as _ from '.'

export const him = _.word('him', {
  noun: 'growth',
  action: 'to grow',
})

export const yuhim = _.word('yuhim', {
  noun: 'growing joy',
  action: 'to be born',
  etym: () => [_.yu, _.him],
  see: () => [_.gui],
})

export const mahim = _.word('mahim', {
  action: 'to build',
  desc: () => 'the hands make grow',
  etym: () => [_.ma, _.him],
})

export const gahi = _.word('gahi', {
  noun: 'thought',
  action: 'to think',
  etym: () => [_.ga, _.him],
})

export const gama = _.word('gama', {
  noun: 'knowledge',
  action: 'to know',
  etym: () => [_.ga, _.ma],
})

export const gamahim = _.word('gamahim', {
  action: 'to learn',
  etym: () => [_.gama, _.him],
})

// === alt

export const ogahilem = _.alt('ogahilem', {
  glo: 'wex.**think**.PST',
  alt: () => _.gahi,
})

export const gahinuram = _.alt('gahinuram', {
  glo: '**thought**.*only*+',
  alt: () => _.gahi,
})

export const gamalan = _.alt('gamalan', {
  glo: '**knowledge**~',
  alt: () => _.gama,
})

export const lugahi = _.alt('lugahi', {
  glo: 'CONT.**think**',
  alt: () => _.gahi,
})

export const alugahi = _.alt('alugahi', {
  glo: 'CONT.**think**',
  alt: () => _.gahi,
})
