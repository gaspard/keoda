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
