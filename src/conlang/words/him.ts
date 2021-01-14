import * as _ from '.'

export const him = _.word('him', {
  verb: 'to grow',
})

export const yuhim = _.word('yuhim', {
  verb: 'to be born',
  see: () => [_.gui],
})

export const mahim = _.word('mahim', {
  verb: 'to build',
  desc: () => 'the hands make grow',
  etym: () => [_.ma, _.him],
})

export const gahi = _.word('gahi', {
  verb: 'to think',
  noun: 'thought',
  etym: () => [_.ga, _.him],
})

// === alt

export const ogahilem = _.alt('ogahilem', {
  glo: '1SI.**think**.PST',
  alt: () => _.gahi,
})

export const gahinuram = _.alt('gahinuram', {
  glo: '**thought**.*only*.ACC',
  alt: () => _.gahi,
})
