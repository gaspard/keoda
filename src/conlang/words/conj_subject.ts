// https://medium.com/keoda/du-plaisir-des-conjugaisons-df444756dfc0
import * as _ from '.'

// 1sp  on                    o   -ma
// 2s   tu (impératif)            -ma
// 2s   tu                    i   -ma
// 3s   iel                   a   -ma
// 1p   nous tous présents    sho -ma
// 2p   vous                  shi -ma
// 3p   iels                  sha -ma

// ====== Et les conjugaisons plus rares
// 2h   tu honorifique        kei -ma
// 2x   tu dépravé.e          yi  -ma
// 1s   je                    pi  -ma
// 5p   nous deux             de  -ma
// 6p   quelques              pe  -ma
// 7p   tout.e.s              ka  -ma

// =========== PRONOMS

export const pronouns = _.example(
  [
    // 1sp  moi/nous indéfinit
    _.oda,
    _.o,
    // 2s   toi
    _.ida,
    _.i,
    // 3s   elle/lui
    _.ada,
    _.a,
    // 1p   nous tous présents
    _.shoda,
    _.sho,
    // 2p   vous
    _.shida,
    _.shi,
    // 3p   iels
    _.shada,
    _.sha,
    // ====== Et les pronoms plus rares
    // 2h   toi honorifique
    _.keda,
    _.kei,
    // 2x   toi dépravé.e
    _.yida,
    _.yi,
    // 1s   moi
    _.pida,
    _.pi,
    // 5p   nous deux
    _.deda,
    _.de,
    // 6p   quelques
    _.peda,
    _.pe,
    // 7p   (nous) tout.e.s = humain.e.s
    _.kada,
    _.ka,
  ],
  `pronouns`
)

// ====== ON, très important
// 1sp   on                   o   -ma
export const omaconj = _.example([_.o, _.ma], 'on masse')

// 2s   tu                        -ma
export const maconj = _.example([_.ma], '(tu) masse')
export const imaconj = _.example([_.i, _.ma], '(tu) masse')

// 3s   iel                   a   -ma
export const amaconj = _.example([_.a, _.ma], 'iel masse')

// 1p   nous tous présents    sho -ma
export const shomaconj = _.example([_.sho, _.ma], 'nous massons')

// 2p   vous                  shi -ma
export const shimaconj = _.example([_.shi, _.ma], 'vous massez')

// 3p   iels                  sha -ma
export const shamaconj = _.example([_.sha, _.ma], 'iels massent')

// ====== Et les conjugaisons plus rares
// 2h   tu honorifique        kei -ma
export const keimaconj = _.example([_.kei, _.ma], 'je masse')

// 2x   tu dépravé.e          yi  -ma
export const yimaconj = _.example([_.yi, _.ma], 'je masse')

// 1s   je                    pi  -ma
export const pimaconj = _.example([_.pi, _.ma], 'je masse')

// 5p   nous deux             de  -ma
export const demaconj = _.example([_.de, _.ma], 'nous deux, nous massons')

// 6p   quelques              pe  -ma
export const pemaconj = _.example([_.pe, _.ma], 'quelques-un.e.s massent')

// 7p   tout.e.s              ka  -ma
export const kamaconj = _.example([_.ka, _.ma], 'tou.te.s massent')

// à xxx, wuo, wui, wua, etc
_.see(_.wu)
