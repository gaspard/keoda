// @ts-ignore
import * as whois from 'whois'
import * as fs from 'fs'
export const MIPAN = ['mipan']
export const CONSONANT = ['m', 'p', 'z']
export const VOWEL = ['a', 'i', 'o', 'u']
export const END = []

const OR_NOTHING = ''
const GROUPS = [
  [MIPAN, VOWEL],
  [VOWEL, MIPAN],
  [CONSONANT, VOWEL, MIPAN],
]
const TEST = /No match for domain "/

function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

function shuffleArray(array: any[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

const FREE_TXT = 'free.txt'
const TAKEN_TXT = 'taken.txt'

function getData(path: string) {
  if (fs.existsSync(path)) {
    return fs.readFileSync(path, { encoding: 'utf8' }).split('\n')
  } else {
    return []
  }
}
const FREE = getData(FREE_TXT)
const TAKEN = getData(TAKEN_TXT)

function taken(domain: string) {
  return new Promise<boolean>((resolve, reject) => {
    whois.lookup(domain, (err: string, data: any) => {
      if (err) {
        reject(err)
      } else if (TEST.test(data)) {
        fs.appendFileSync(FREE_TXT, domain + '\n', { encoding: 'utf8' })
        resolve(false)
      } else {
        fs.appendFileSync(TAKEN_TXT, domain + '\n', { encoding: 'utf8' })
        resolve(true)
      }
    })
  })
}

function findNext(prev: string[], choices: string[]) {
  const all: string[] = []
  prev.forEach(p => {
    choices.forEach(c => {
      all.push(p + c)
    })
  })
  return all
}

export function generate() {
  const seen: { [key: string]: boolean } = { '': true }
  FREE.forEach(d => {
    seen[d] = true
  })
  TAKEN.forEach(d => {
    seen[d] = true
  })
  const all: string[] = []

  GROUPS.forEach(g => {
    let list: string[] = ['']
    g.forEach(choices => {
      list = findNext(list, choices)
    })
    list.forEach(syl => {
      if (!seen[syl + '.com']) {
        all.push(syl + '.com')
        seen[syl + '.com'] = true
      }
    })
  })
  shuffleArray(all)
  return all
}

const TEST_DOMAINS = generate()

console.log('COUNT: ', TEST_DOMAINS.length)

async function test() {
  for (const domain of TEST_DOMAINS) {
    await sleep(100)
    if (!(await taken(domain))) {
      console.log(domain)
    }
  }
}

test()

<div class="download-bar">
  <div class="inner">
    <div class="idea">
      <div class="question">{{ site.idea.question }}</div>
      <div class="answer">{{ site.idea.answer }}</div>
      <div class="link"><a href="{{ site.idea.link }}">{{ site.idea.image }}</a></div>
    </div>
    
    <div class="help">
      <div class="question">{{ site.help.question }}</div>
      <div class="answer">{{ site.help.answer }}</div>
      <div class="link"><a href="{{ site.help.link }}">{{ site.help.image }}</a></div>
    </div>
  </div>
  <span class="blc"></span><span class="trc"></span>
</div>