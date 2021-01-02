import { Action } from '../app'

export const writToggle: Action = ctx => {
  ctx.state.keoda.writ = !ctx.state.keoda.writ
  window.localStorage.setItem(
    'keoda.writ',
    JSON.stringify(ctx.state.keoda.writ)
  )
}
