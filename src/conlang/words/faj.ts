import * as _ from '.'

export const faj = _.word('faj', {
  def: 'prépuce, protection',
  desc: () => `version courte de ${_.feyaj}`,
  etym: () => [_.fe, _.yaj],
})

export const feyaj = _.word('feyaj', {
  def: 'prépuce',
  desc: () => `version longue de ${_.faj}`,
  etym: () => [_.fe, _.yaj],
})

export const nefaj = _.word('nefaj', {
  verb: 'découvrir le gland, retrousser la peau du prépuce',
})
