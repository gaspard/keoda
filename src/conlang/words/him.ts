import * as _ from '.'

export const him = _.word('him', {
  def: 'growth',
  verb: 'to grow',
})

export const yuhim = _.word('yuhim', {
  def: 'growing joy',
  verb: 'to be born',
  etym: () => [_.yu, _.him],
  see: () => [_.gui],
})

export const mahim = _.word('mahim', {
  verb: 'to build',
  desc: () => 'the hands make grow',
  etym: () => [_.ma, _.him],
})

export const gahi = _.word('gahi', {
  def: 'thought',
  verb: 'to think',
  etym: () => [_.ga, _.him],
})

export const gama = _.word('gama', {
  def: 'knowledge',
  verb: 'to know',
  etym: () => [_.ga, _.ma],
})

export const gamahim = _.word('gamahim', {
  verb: 'to learn',
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
