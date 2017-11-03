import { Word, I, Ma, mi, o, oda, toda, haftar, yin, yon } from '.'

export const tar: Word =
{ body: 'pénis'
, verb: 'pénétrer avec le pénis'
}
export const Tar = tar

export const taro: Word =
{ verb: 'frapper du pénis'
, desc: `Basé sur ${tar} (pénis) et ${o} (frapper).`
}

export const Taro = taro

taro.examples =
[ { phrase: [ Taro, yon ]
  , meaning: `Frappe ma vulve avec ton pénis.`
  }
]

tar.desc = `
Avec le suffixe ${o}, ça devient ${taro} (frapper du pénis). Avec ${oda},
on a ${toda} (personne avec un pénis). Le gland se dit ${haftar}.
`
tar.examples =
[ { phrase: [ Tar, yin ]
  , meaning: `Pénètre avec ton pénis, mon vagin.`
  }
, ...taro.examples
, { phrase: [ Ma, tar ]
  , meaning: `Masturbe mon pénis avec ta main.`
  }
, { phrase: [ I, mi, tar ]
  , meaning: `Caresse-toi le pénis.`
  }
]
