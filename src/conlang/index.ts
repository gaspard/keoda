import { writeFileSync } from 'fs'
import { join } from 'path'
import { exportJSON } from './compile'
import { entries } from './words/0_helpers'
export * from './compile'

writeFileSync(join(__dirname, '..', 'db.json'), exportJSON(entries), 'utf8')
console.log('Updated DB.')
