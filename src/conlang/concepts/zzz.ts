import * as _ from '../lang'

export const zzz = _.card('zzz', {
  noun: 'Random little phrases',
  open: true,
  desc: () => `

### 2023-01-25

${_.phrase(
  'You crawled on me gently (like rain).',
  _.i.adja.em,
  _.fe.to.m,
  _.si.gai
)}

There is a more 'literate' or formal way to say this (see below).

${_.phrase(
  '(I) thank (you) for making my heart sing.',
  _.nomy,
  _.i.mahim.n,
  _.to.zu,
  _.a.lipa
)}

${_.phrase(
  'You draw with your fingertips on my skin.',
  _.i.my,
  _.ko.hama.kti,
  _.noa.to.m
)}

${_.phrase('You fingertip on my skin.', _.i.hama.kti, _.noa.to.m)}

${_.phrase('You fingertip-dance on my skin.', _.i.hama.kti.y, _.noa.to.m)}

${_.phrase('You draw on my skin with fire.', _.i.my, _.fe.noa, _.ko.aj)}

### 2023-02-10

${_.phrase(
  'My finger plays with your belly necklace.',
  _.hama.to,
  _.a.yulak,
  _.ko,
  _.bo.fulufi.ti.m
)}

${_.phrase('I have a peachy pajama.', _.o.su, _.yafe.m, _.le.palapon)}

### 2023-02-11

I needed to clarify dative and subordinate in this phrase. Note the double subordinate...

I feel (thank) [ you make [ my heart sing ] ].

${_.phrase(
  'I thank you for making my heart sing.',
  _.o.nomy,
  _.i.mahim.n,
  _.zu.to,
  _.a.lipa.n
)}

### 2023-02-11

${_.phrase('I love you too.', _.o.zu.meo, _.pa.i.m)}

${_.phrase('Good night witch sister.', _.yagi, _.ominu)}

${_.phrase('', _.ominu)}

`,
})
