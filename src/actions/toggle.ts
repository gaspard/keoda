import { Action } from '../app'

export const toggle: Action<{ key: 'writ' | 'nsfw' }> = (ctx, { key }) => {
  ctx.state.keoda[key] = !ctx.state.keoda[key]
  window.localStorage.setItem(
    `keoda.${key}`,
    JSON.stringify(ctx.state.keoda[key])
  )
}
