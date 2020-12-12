import * as _ from '.'

export const su = _.word('su', { verb: 'avoir' })
_.see(_.wu)
export const nesu = _.word('nesu', {
  verb: 'manquer',
  etym: () => [_.ne, _.su],
})

// Iris ata mun
export const Irisatamun = _.example(
  [_.Iris, _.a, _.su, _.mun],
  `Iris a des seins.`
)
_.see(_.Irisdiwumun)

// Mun eku Iris ata
export const munekuIrisata = _.example(
  [_.mun, _.eku, _.Iris, _.a, _.su],
  `Les seins qu'Iris a.`
)
_.see(_.munwuIris)
