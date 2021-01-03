const TELU: { [key: string]: string } = {
  // TODO: change ending 'j' to 'n' ?
  // baj => ban ?
  // taj => tan ?
  // aj => an ?
  // Doesn't this look to close to DAT case ?
  bajx: 'బాజ్‌',
  tajx: 'తాజ్‌',
  ajx: 'అజ్‌',
  lirx: 'లిర్‌',
  munx: 'ముఁ',
  yinx: 'యిఁ',
  tohamx: 'తోఃఅం',
  dahemx: 'దాఃఎం',

  // In word
  dah: 'దాః',
  // Conjugations / POSS
  ['^oh']: 'ఓః',
  ['^toh']: 'తోః',
  ['^yih']: 'యిః',
  ['^pih']: 'పిః',

  // /z/ sound = made with alt+T = ఠ /ʈʰ/
  // /ʋ/ sound = made with v     = వ
  // /ʃ/ sound = made with x     = ష
  // /f/ sound = made with c     = చ /tʃ/
  // lone 'e'  = made with > (bottom left of kbd)

  // i
  mimx: 'మిం',
  mi: 'మి',
  nimx: 'నిం',
  ni: 'ని',
  pimx: 'పిం',
  pi: 'పి',
  bimx: 'బిం',
  bi: 'బి',
  timx: 'తిం',
  ti: 'తి',
  dimx: 'దిం',
  di: 'ది',
  kimx: 'కిం',
  ki: 'కి',
  gimx: 'గిం',
  gi: 'గి',
  fimx: 'చిం',
  fi: 'వి',
  simx: 'సిం',
  si: 'సి',
  zimx: 'ఠిం',
  zi: 'ఠి',
  shimx: 'షిం',
  shi: 'షి',
  jimx: 'జిం',
  ji: 'జి',
  himx: 'హిం',
  hi: 'ఠి',
  wiu: 'విు',
  wimx: 'విం',
  wi: 'వి',
  yimx: 'యిం',
  yi: 'యి',
  rimx: 'రిం',
  ri: 'రి',
  limx: 'లిం',
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
  fenx: 'చేఁ',
  fe: 'వే',
  senx: 'సేఁ',
  se: 'సే',
  ze: 'ఠే',
  sheu: 'షేు',
  she: 'షే',
  je: 'జే',
  he: 'ఠే',
  we: 'వే',
  ye: 'యే',
  re: 'రే',
  le: 'లే',

  // a
  ma: 'మా',
  namx: 'నాం',
  na: 'నా',
  pamx: 'పాం',
  panx: 'పాఁ',
  pa: 'పా',
  bamx: 'బాం',
  ba: 'బా',
  tamx: 'తాం',
  ta: 'తా',
  damx: 'దాం',
  da: 'దా',
  kamx: 'కాం',
  ka: 'కా',
  gamx: 'గాం',
  ga: 'గా',
  famx: 'చాం',
  fah: 'చాః',
  fa: 'చా',
  samx: 'సాం',
  sa: 'సా',
  zamx: 'థాం',
  za: 'ఠా',
  shamx: 'షాం',
  sha: 'షా',
  jamx: 'జాం',
  ja: 'జా',
  hamx: 'హాం',
  ha: 'హా',
  wamx: 'వాం',
  wa: 'వా',
  yamx: 'యాం',
  ya: 'యా',
  ramx: 'రాం',
  ra: 'రా',
  lamx: 'లాం',
  lau: 'లాు',
  la: 'లా',

  // u
  auh: 'అుః',
  au: 'అు',
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
  shu: 'షు',
  ju: 'జు',
  hu: 'హు',
  wu: 'వు',
  yu: 'యు',
  ru: 'రు',
  lu: 'లు',

  // o
  mo: 'మో',
  noa: 'నోా',
  no: 'నో',
  ponx: 'పోఁ',
  po: 'పో',
  bo: 'బో',
  to: 'తో',
  donx: 'దోఁ',
  do: 'దో',
  ko: 'కో',
  go: 'గో',
  fo: 'చో',
  so: 'సో',
  zo: 'ఠో',
  sho: 'షో',
  jo: 'జో',
  honx: 'హోఁ',
  ho: 'హో',
  wo: 'వో',
  yonx: 'యోఁ',
  yo: 'యో',
  roa: 'రోా',
  ro: 'రో',
  lom: 'లోం',
  lo: 'లో',

  i: 'ఇ',
  em: 'ఎం',
  e: 'ఎ',
  ah: 'అః',
  amx: 'లాం',
  am: 'లాం',
  a: 'అ',
  u: 'ఉ',
  o: 'ఓ',

  // leftover letters due to double consonants
  s: 'స్‌',
  //
  l: 'ల్‌',
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
const TKEYS = Object.keys(TELU)

const PHON: { [key: string]: string } = {
  J: 'ʒ',
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
  S: 'ʃ',
  j: 'dʒ',
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
    .split('')
    .map(k => PHON[k] || k)
}

export function phon(word: string) {
  const w = tran(word.toLowerCase()).join('')
  return w === '?' ? '?' : `/${w}/`
}

const ENDRE = /[jrmn]$/
function fixEnd(word: string) {
  if (ENDRE.test(word)) {
    return word + 'x'
  }
  return word
}

export function write(word: string) {
  let w = fixEnd(word.toLowerCase())
  for (const k of TKEYS) {
    w = w.replace(new RegExp(k, 'g'), TELU[k])
  }
  return w
}
