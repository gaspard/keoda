import { CompiledEntriesByType } from '../conlang/types'

export function getEntry(
  ctx: { state: { keoda: { db: CompiledEntriesByType } } },
  ref: string
) {
  if (!ref) {
    return undefined
  }
  const [type] = ref.split('-')
  const entries = ctx.state.keoda.db[type as keyof CompiledEntriesByType]
  if (!entries) {
    throw new Error(`Invalid type '${type}' in id '${ref}'.`)
  }
  return entries[ref]
}
