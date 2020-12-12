import { Action } from '../app'

export interface SelectArg {
  name: string
}

export const select: Action<SelectArg> = (ctx, arg) => {
  ctx.state.keoda.selected = arg.name
}
