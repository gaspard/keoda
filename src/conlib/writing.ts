const TELU: { [key: string]: string } = {
  // Some letters that are not where expected:
  // /ʋ/ sound = made with v       = వ
  // /ʃ/ sound = made with shift+s = శ
  // /au/ sound = alt+shift+o = ఔ
  // /ai/ sound = alt+shift+e = ఐ

  // Phonetic change from Telugu
  // /z/ sound = made with alt+shift+T = ఠ = /ʈʰ/
  // /f/ sound = made with c     = చ  = /tʃ/

  // lone 'e'  = made with > (bottom left of kbd)

  // i
  mi: 'మి',
  ni: 'ని',
  pi: 'పి',
  bi: 'బి',
  ti: 'తి',
  di: 'ది',
  ki: 'కి',
  gi: 'గి',
  fi: 'చి',
  si: 'సి',
  zi: 'ఠి',
  shi: 'శి',
  ji: 'జి',
  hi: 'హి',
  wiu: 'విు',
  wi: 'వి',
  yi: 'యి',
  ri: 'రి',
  liu: 'లిు',
  li: 'లి',

  // e
  me: 'మే',
  ne: 'నే',
  pe: 'పే',
  be: 'బే',
  te: 'తే',
  de: 'దే',
  ke: 'కే',
  ge: 'గే',
  fe: 'చే',
  se: 'సే',
  ze: 'ఠే',
  she: 'శే',
  je: 'జే',
  he: 'ఠే',
  we: 'వే',
  ye: 'యే',
  re: 'రే',
  le: 'లే',

  // a
  ma: 'మా',
  nau: 'నౌ',
  na: 'నా',
  pau: 'పౌ',
  pa: 'పా',
  bau: 'బౌ',
  ba: 'బా',
  tau: 'తౌ',
  ta: 'తా',
  dau: 'దౌ',
  da: 'దా',
  kau: 'కౌ',
  ka: 'కా',
  gau: 'గౌ',
  ga: 'గా',
  fau: 'చౌ',
  fa: 'చా',
  sau: 'సౌ',
  sa: 'సా',
  zau: 'ఠౌ',
  za: 'ఠా',
  shau: 'శౌ',
  sha: 'శా',
  jau: 'జౌ',
  ja: 'జా',
  hau: 'హౌ',
  ha: 'హా',
  wau: 'వౌ',
  wa: 'వా',
  yau: 'యౌ',
  ya: 'యా',
  ram$: 'రాం',
  rau: 'రౌ',
  ra: 'రా',
  lau: 'లౌ',
  la: 'లా',

  // u
  // au: 'అు',
  au: 'ఔ', // alt+shift+o (this is what Telugu uses for this sound)
  mu: 'ము',
  nu: 'ను',
  pu: 'పు',
  bu: 'బు',
  tu: 'తు',
  du: 'దు',
  ku: 'కు',
  gu: 'గు',
  fu: 'చు',
  su: 'సు',
  zu: 'ఠు',
  shu: 'శు',
  ju: 'జు',
  hu: 'హు',
  wu: 'వు',
  yu: 'యు',
  ru: 'రు',
  lu: 'లు',

  // o
  mo: 'మో',
  no: 'నో',
  pon$: 'పోఁ',
  po: 'పో',
  bo: 'బో',
  to: 'తో',
  do: 'దో',
  ko: 'కో',
  go: 'గో',
  fo: 'చో',
  so: 'సో',
  zo: 'ఠో',
  sho: 'శో',
  jo: 'జో',
  ho: 'హో',
  wo: 'వో',
  yo: 'యో',
  ro: 'రో',
  lo: 'లో',

  iu: 'ఇు',
  ai: 'ఐ', // alt+shift+e
  i: 'ఇ', // Telugu would use యి (yi = /ji/ )
  em: 'ఎం',
  e: 'ఎ',
  a: 'అ',
  // Telugu uses: వు (vu = /ʋu/) but then there would be a
  // confusion between
  // awi = అవి = /aʋi/
  // ai  = అవి = /ai/
  // instead of
  // ai  = అఇ = /ai/

  m$: 'ం',
  n$: 'ఁ',
  h$: 'ః',

  u: 'ఉ',
  o: 'ఓ',
  g: 'గ్‌',

  // leftover letters due to double consonants
  s: 'స్‌',
  m: 'మ్‌',
  l: 'ల్‌',
  r: 'ర్‌',
  j: 'జ్‌', //   /ʒ/ (end) or /dʒ/ (in-word)
  //
  ['1']: '౧',
  ['2']: '౨',
  ['3']: '౩',
  ['4']: '౪',
  ['5']: '౫',
  ['6']: '౬',
  ['7']: '౭',
  ['8']: '౮',
  ['9']: '౯',
  ['0']: '౦',
}

const PHON: { [key: string]: string } = {
  i: 'i',
  e: 'ɛ',
  a: 'a',
  A: 'am',
  u: 'u',
  o: 'ɔ',
  m: 'm',
  n: 'n',
  p: 'p',
  b: 'b',
  t: 't',
  d: 'd',
  k: 'k',
  g: 'g',
  f: 'f',
  s: 's',
  z: 'z',
  S: 'ʃ', // 'ʂ' in reality but less people know the IPA sign
  J: 'ʒ',
  j: 'ʒ',
  H: 'x',
  h: 'h',
  w: 'w',
  y: 'j',
  r: 'r',
  l: 'l',
}

function tran(word: string) {
  return word
    .replace(/sh/g, 'S')
    .replace(/j$/, 'J')
    .replace(/h$/, 'H')
    .split('')
    .map(k => PHON[k] || k)
}

export function phon(word: string) {
  const w = tran(word.toLowerCase()).join('')
  return `/${w}/`
}

const ENDRE = /[jrmn]$/
function fixEnd(word: string) {
  if (ENDRE.test(word)) {
    return word
  }
  return word
}

export function write(word: string) {
  let w = fixEnd(word.toLowerCase())
  for (const k in TELU) {
    w = w.replace(new RegExp(k, 'g'), TELU[k])
  }
  return w
}
