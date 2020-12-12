import { Action, Filter } from '../app'

export type FilterArg = Filter

export const filter: Action<FilterArg> = (ctx, arg) => {
  const { filter } = ctx.state.keoda
  if (filter && filter.type === arg.type && filter.key === arg.key) {
    delete ctx.state.keoda.filter
  } else {
    ctx.state.keoda.filter = arg
  }
}
