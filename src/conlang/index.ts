import { writeFileSync } from 'fs'
import { join } from 'path'
import { exportJSON } from './compile'
import { entries } from './make'
export * from './cases'
export * from './compile'
export * from './concepts'
export * from './helpers'
export * from './make'
export * as $ from './suffix'

writeFileSync(join(__dirname, '..', 'db.json'), exportJSON(entries), 'utf8')
console.log('Updated DB.')
