import * as _ from '.'

export const bu = _.word('bu', {
  def: '**sponge**',
  prefix: 'erectile body',
})

export const buyon = _.word('buyon', {
  def: '**erectile part of the vulva**',
  etym: () => [_.bu, _.yon],
  see: () => [_.butaj, _.yoneri],
  desc: () => `
This is the cavernous body of the "big clitoris" (you know, this 3D printed shape).

It grows during arousal, like a sponge filled with love.
`,
})

export const butaj = _.word('butaj', {
  def: '**erectile part of the penis**',
  etym: () => [_.bu, _.taj],
  see: () => [_.buyon, _.tajeri],
  desc: () => `Cavernous body.`,
})
_.see(_.genitals)
