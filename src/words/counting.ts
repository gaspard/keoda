import * as _ from '.'

export const counting = _.example(
  [
    // 1
    _.pi,
    // 2
    _.de,
    // 3
    _.pe,
    // 4
    _.ka,
    // 5
    _.lil,
    // 6
    _.shi,
    // 7
    _.fe,
    // 8
    _.je,
    // 9
    _.da,
    // 10, 1x
    _.dji,
    // x 10
    _.ipi,
    // 100
    _.ipa,
    // 1000
    _.ipu,
  ],
  '1,2,3,4,5,6,7,8,9,10, x 10,100,1000'
)
export const djipi = _.example([_.ipi, _.pi], `11`)
export const deipika = _.example([_.de, _.ipi, _.ka], `24`)
export const peipalilipida = _.example([_.pe, _.ipa, _.lil, _.ipi, _.da], `359`)
export const deipudjida = _.example([_.de, _.ipu, _.dji, _.da], '2019')
export const echelleDuNeant = _.example(
  [
    _.djipa,
    _.dapa,
    _.jepa,
    _.fepa,
    _.shipa,
    _.lile,
    _.kane,
    _.pene,
    _.dene,
    _.pine,
  ],
  'échelle du néant (nepa)'
)
