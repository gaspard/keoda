export {}

import { Action } from '../app'

export interface SelectArg {
  name: string
}

export const select: Action<SelectArg> = (ctx, arg) => {
  const { state } = ctx
  const { name } = arg
  ctx.state.keoda.selected = name
}
