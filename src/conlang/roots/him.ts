import * as _ from '../lang'

export const him = _.word('him', {
  noun: 'growth',
  verb: 'to grow',
})

export const yuhim = _.word('yuhim', {
  noun: 'growing joy',
  verb: 'to be born',
  etym: () => [_.yu, _.him],
  see: () => [_.gui],
})

export const mahim = _.word('mahim', {
  verb: 'to make', // to build
  desc: () => 'the hands make grow',
  see: () => [_.magi],
  etym: () => [_.ma, _.him],
})

export const gahi = _.word('gahi', {
  noun: 'thought',
  verb: 'to think',
  etym: () => [_.ga, _.him],
})

export const gama = _.word('gama', {
  noun: 'knowledge',
  verb: 'to know',
  etym: () => [_.ga, _.ma],
})

export const gamahim = _.word('gamahim', {
  verb: 'to learn',
  etym: () => [_.gama, _.him],
})

export const yulak = _.word('yulak', {
  verb: 'to play',
  noun: 'player',
  etym: () => [_.yu, _.lak],
})

export const gahimus = _.word('gahimus', {
  noun: 'intuition',
  verb: 'to dream',
  etym: () => [_.gahi.verb, _.us.adv],
  see: () => [_.fenus, _.palus],
})

// === alt
