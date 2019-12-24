import * as _ from '.'

export const faj = _.word('faj', {
  noun: 'prépuce, protection',
  desc: () => `version courte de ${_.feyaj}`,
  derived: [_.fe, _.yaj],
})

export const feyaj = _.word('feyaj', {
  noun: 'prépuce',
  desc: () => `version longue de ${_.faj}`,
  derived: [_.fe, _.yaj],
})

export const nefaj = _.word('nefaj', {
  verb: 'découvrir le gland, retrousser la peau du prépuce',
})
