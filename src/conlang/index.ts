import { writeFileSync } from 'fs'
import { join } from 'path'
import { exportJSON } from '../conlib/compile'
import { entries } from './lang'
// force compilation
import './words'

writeFileSync(join(__dirname, '..', 'db.json'), exportJSON(entries), 'utf8')
console.log('Updated DB.')
export * from './roots'