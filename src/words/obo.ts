import * as _ from '.'

export const obo = _.word('obo', {
  noun: 'pubis (bas du ventre)',
  desc: () => `version familière de ${_.djobo}`,
  derived: [_.djo, _.bo],
})

export const habo = _.word('habo', {
  noun: 'plexus',
})

export const djobo = _.word('djobo', {
  noun: 'pubis',
  desc: () => `version longue de ${_.obo}`,
})
