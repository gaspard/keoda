import { Action } from '../app'

export interface SelectArg {
  id: string
}

export const select: Action<SelectArg> = (ctx, arg) => {
  if (ctx.state.keoda.selected === arg.id) {
    delete ctx.state.keoda.selected
  } else {
    ctx.state.keoda.selected = arg.id
  }
}
