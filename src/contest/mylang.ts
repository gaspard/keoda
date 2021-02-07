import * as words from './words'
import { cases } from './cases'
import { makeLang } from '../conlib'

export const { prefix, word, entry } = makeLang<typeof words>(cases)
