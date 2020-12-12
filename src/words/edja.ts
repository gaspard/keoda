import * as _ from '.'

export const edja = _.word('edja', {
  preposition: 'interrogation (ou affirmative)',
  derived: () => [_.e, _.dja],
})

export const nedja = _.word('nedja', {
  preposition: 'pas possible (ou affirmative)',
})

// Edja shaora liu ?
export const edjashaoraliu = _.example(
  [_.edja, _.sha, _.ora, _.liu],
  `Est-qu-iels veulent manger ?`
)
