import { Word, feyon, i, mi, mo, ne, o, tar, yun } from '.'

export const ma: Word =
{ body: 'main'
, verb: [ 'prendre dans la main', 'branler', 'tenir' ]
}

export const Ma = ma

export const nema: Word =
{ body: 'sans main'
, verb: 'lâcher'
, desc: `De ${ne} (négation) et ${ma} (main).`
}

export const Nema = nema

ma.desc = `
Voir aussi les exceptions liées au suffixes ${i} et ${o}, ${mi} (masser) et ${mo} (frapper, faire mal). On peut aussi utiliser la négation ${nema} (lâcher).
`

ma.examples =
[ { phrase: [ Ma, tar ]
  , meaning: `Prends mon pénis dans ta main.`
  }
, { phrase: [ Ma, yun, melo ]
  , meaning: `Branle ma vulve doucement.`
  }
, { phrase: [ Nema, feyon ]
  , meaning: `Lâche ta culotte.`
  }
]