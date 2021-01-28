import * as _ from '.'

export const on = _.word('on', {
  def: 'source',
  verb: 'to reveal',
})

_.see(_.yon)

export const lamon = _.word('lamon', {
  def: 'urethra',
  etym: () => [_.lame, _.on],
})

export const yaon = _.word('yaon', {
  def: 'dusk',
  etym: () => [_.ya, _.on],
})

export const yohon = _.word('yohon', {
  def: 'dawn',
  etym: () => [_.yo, _.on],
})
