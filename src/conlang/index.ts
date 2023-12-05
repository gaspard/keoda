import { writeFileSync } from 'fs'
import { join } from 'path'
import { exportJSON } from '../conlib/compile'
import { entries } from './lang'
// force compilation
// import './words' // words is already in 'lang' what does this do ??

writeFileSync(join(__dirname, '..', 'db.json'), exportJSON(entries), 'utf8')
console.log('Updated DB.')
export * from './roots'
