import * as _ from '.'

export const peu = _.word('peu', { noun: 'peur' })
export const agupeu = _.word('agupeu', {
  noun: 'courage',
  etym: () => [_.agu, _.peu],
  desc: () => `Écouter la peur`,
})

export const peulil = _.example([_.peu, _.lil], `J'ai un peu peur.`)
