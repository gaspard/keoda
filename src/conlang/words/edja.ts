import * as _ from '.'

export const edja = _.word('edja', {
  prep: 'interrogation (ou affirmative)',
  etym: () => [_.e, _.dja],
})

export const nedja = _.word('nedja', {
  prep: 'pas possible (ou affirmative)',
})

// Edja shaora liu ?
export const edjashaoraliu = _.example(
  [_.edja, _.sha, _.ora, _.liu],
  `Est-qu-iels veulent manger ?`
)
