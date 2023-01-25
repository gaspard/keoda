import * as _ from '../lang'

export const old_lady = _.card('Old Lady', {
  desc: () => `

## TMP

* ${_.phrase(
    'You crawled on me gently (like rain).',
    _.i.adja.em,
    _.fe.to.m,
    _.si.gai
  )}

* ${_.phrase(
    'Thank you for making my heart sing.',
    _.nomy,
    _.u.mahim,
    _.to.zu.m,
    _.a.lipa
  )}

* ${_.phrase(
    'You draw with your fingertips on my skin.',
    _.i.my,
    _.ko.hama.kti,
    _.noa.to.m
  )}

* ${_.phrase('You fingertip on my skin.', _.i.hama.kti, _.noa.to.m)}

* ${_.phrase('You fingertip-dance on my skin.', _.i.hama.kti.y, _.noa.to.m)}

# Old Lady

* ${_.phrase(
    '"What have you loved ?" will ask the Old Lady',
    _.don,
    _.shi.zu.em,
    _.q,
    _.a.lapu.ir,
    _.ukilei.unu
  )}
* ${_.phrase(
    'We will say: "the sound of the rain on leafs" and "the laughs of children".',
    _.sho.lapa.ir,
    _.agana.wu,
    _.gai,
    _.fe,
    _.unuma,
    _.shu,
    _.duhasha.wu,
    _.joda
  )}
* ${_.phrase(
    '"The singings of our men and their tired arms entangled in our hair".'
  )}
* ${_.phrase(
    '"The blue sky dreaming itself on the grass and the whispering of the wind".'
  )}
* ${_.phrase(
    'And finally, moved beyond repair, "the sound of a familiar voice, yes, the unique tone of a loved voice".'
  )}
`,
})
