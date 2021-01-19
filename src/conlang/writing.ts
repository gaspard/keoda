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
  fi: 'చి',
  simx: 'సిం',
  si: 'సి',
  zimx: 'ఠిం',
  zi: 'ఠి',
  shimx: 'శిం',
  shi: 'శి',
  jimx: 'జిం',
  ji: 'జి',
  himx: 'హిం',
  hi: 'హి',
  wiu: 'విు',
  wimx: 'విం',
  wi: 'వి',
  yiamx: 'యిాం',
  yimx: 'యిం',
  yi: 'యి',
  rimx: 'రిం',
  ri: 'రి',
  limx: 'లిం',
  liu: 'లిు',
  li: 'లి',

  // e
  me: 'మే',
  ne: 'నే',
  pe: 'పే',
  be: 'బే',
  te: 'తే',
  demx: 'దేం',
  de: 'దే',
  ke: 'కే',
  ge: 'గే',
  fenx: 'చేఁ',
  fe: 'చే',
  senx: 'సేఁ',
  se: 'సే',
  ze: 'ఠే',
  she: 'శే',
  je: 'జే',
  he: 'ఠే',
  we: 'వే',
  ye: 'యే',
  re: 'రే',
  lemx: 'లేం',
  le: 'లే',

  // a
  ma: 'మా',
  namx: 'నాం',
  nau: 'నౌ',
  na: 'నా',
  pamx: 'పాం',
  panx: 'పాఁ',
  pau: 'పౌ',
  pa: 'పా',
  bamx: 'బాం',
  bau: 'బౌ',
  ba: 'బా',
  tamx: 'తాం',
  tanx: 'తాఁ',
  tau: 'తౌ',
  ta: 'తా',
  damx: 'దాం',
  dau: 'దౌ',
  da: 'దా',
  kamx: 'కాం',
  kanx: 'కాఁ',
  kau: 'కౌ',
  ka: 'కా',
  gamx: 'గాం',
  gau: 'గౌ',
  ga: 'గా',
  famx: 'చాం',
  fau: 'చౌ',
  fa: 'చా',
  samx: 'సాం',
  sau: 'సౌ',
  sa: 'సా',
  zamx: 'ఠాం',
  zau: 'ఠౌ',
  za: 'ఠా',
  shamx: 'శాం',
  shau: 'శౌ',
  sha: 'శా',
  jamx: 'జాం',
  jau: 'జౌ',
  ja: 'జా',
  hamx: 'హాం',
  hau: 'హౌ',
  ha: 'హా',
  wamx: 'వాం',
  wau: 'వౌ',
  wa: 'వా',
  yamx: 'యాం',
  yau: 'యౌ',
  ya: 'యా',
  ramx: 'రాం',
  rau: 'రౌ',
  ra: 'రా',
  lamx: 'లాం',
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
  rumx: 'రుం',
  ru: 'రు',
  lu: 'లు',

  // o
  mo: 'మో',
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
  sho: 'శో',
  jo: 'జో',
  honx: 'హోఁ',
  ho: 'హో',
  wo: 'వో',
  yonx: 'యోఁ',
  yo: 'యో',
  ro: 'రో',
  lom: 'లోం',
  lo: 'లో',

  iu: 'ఇు',
  ai: 'ఐ', // alt+shift+e
  i: 'ఇ', // Telugu would use యి (yi = /ji/ )
  em: 'ఎం',
  e: 'ఎ',
  ah: 'అః',
  amx: 'అం',
  a: 'అ',
  // Telugu uses: వు (vu = /ʋu/) but then there would be a
  // confusion between
  // awi = అవి = /aʋi/
  // ai  = అవి = /ai/
  // instead of
  // ai  = అఇ = /ai/

  u: 'ఉ',
  o: 'ఓ',
  g: 'గ్‌',
  rx: 'ర్‌',
  r: 'ర్‌',

  // leftover letters due to double consonants
  s: 'స్‌',
  m: 'మ్‌',
  l: 'ల్‌',
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
  S: 'ʃ', // 'ʂ' in reality but less people know the IPA sign
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
  return `/${w}/`
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
