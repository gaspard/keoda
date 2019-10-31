import * as _ from '.'

// J'ai oublié le préfix/suffixe pour "en bas"
export const obo = _.word('obo', {
  noun: 'pubis (bas du ventre)',
  desc: () => `Aussi appelé ${_.djobo}`,
})

export const habo = _.word('habo', {
  noun: 'plexus',
})

export const djobo = _.word('djobo', {
  noun: 'pubis',
  desc: () => `Aussi appelé ${_.obo}`,
})
