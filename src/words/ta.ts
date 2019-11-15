import * as _ from '.'

export const ta = _.word('ta', { verb: 'avoir' })
_.see(_.wu)

// Iris ata mun
export const Irisatamun = _.example(
  [_.Iris, _.a, _.ta, _.mun],
  `Iris a des seins.`
)
_.see(_.Irisdiwumun)

// Mun eku Iris ata
export const munekuIrisata = _.example(
  [_.mun, _.eku, _.Iris, _.a, _.ta],
  `Les seins qu'Iris a.`
)
_.see(_.munwuIris)
