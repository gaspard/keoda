export { }
import * as _ from '.'

export const yin = _.word('yin', {
  noun: '**vulva**',
  see: () => [_.yuru],
  etym: () => [_.yu, _.ina],
})
_.see(_.genitals)

export const riyin = _.word('riyin', {
  noun: 'peripheral lips',
  etym: () => [_.ri, _.yin],
})

export const royin = _.word('royin', {
  noun: 'central lips of the vulva',
  etym: () => [_.ro, _.yin],
})

export const keyin = _.word('keyin', {
  noun: '**clitoris**',
  see: () => [_.yineri],
  etym: () => [_.ke, _.yin],
  desc: () => `Yes, the whole thing mostly hidden. Not just the tip.`,
})

export const feyin = _.word('feyin', {
  noun: '**panties**',
  etym: () => [_.fe, _.yin],
})

// === alt

export const yinil = _.alt('yinil', {
  noun: '**vulva**.*erect*',
  alt: () => _.yin,
})

export const yinegi = _.alt('yinegi', {
  noun: '**vulva**.*cold*',
  alt: () => _.yin,
})
