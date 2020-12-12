import { Action, Filter } from '../app'

export interface PopupArg {
  name: string
}

export const hover: Action<PopupArg> = (ctx, { name }) => {
  ctx.state.keoda.hover = name
}
