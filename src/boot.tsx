import { Overmind } from 'overmind'
import { Provider } from 'overmind-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as actions from './actions'
import { KeodaConfig, Lexicons } from './app'
import { App } from './components'
import { CompiledEntriesByType, TYPES } from './conlang/types'
import * as db from './db.json'
import './style.css'

const config: KeodaConfig = {
  onInitialize(ctx) {
    window.addEventListener('hashchange', function (e) {
      const name = window.location.hash.replace('#', '')
      ctx.actions.keoda.select({ name })
    })
  },
  state: {
    keoda: {
      db: db as CompiledEntriesByType,
      lexicon: Object.assign(
        {},
        ...TYPES.map(type => ({ [type]: Object.keys(db[type]).sort() }))
      ),
    },
  },
  actions: {
    keoda: actions,
  },
}

export function renderApp() {
  try {
    ReactDOM.render(
      <Provider value={new Overmind(config, { devtools: false })}>
        <App />
      </Provider>,
      document.querySelector('#root')
    )
  } catch (err) {
    console.error(err)
    const root = document.querySelector('#root .loader')
    if (root) {
      root.innerHTML = `Could not load app`
    }
  }
}

renderApp()
