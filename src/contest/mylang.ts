import { makeLang } from '../conlib'
import * as words from './words'

export const { prefix, word, entry } = makeLang<typeof words>()
