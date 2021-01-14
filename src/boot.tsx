import { Overmind } from 'overmind'
import { Provider } from 'overmind-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as actions from './actions'
import { KeodaConfig, Lexicons } from './app'
import { App } from './components'
import { CompiledEntriesByType, TYPES } from './conlang/types'
import * as xdb from './db.json'
import './style.css'

const db = xdb as CompiledEntriesByType

function phraseSort(a: string, b: string) {
  return db.phrase[a].phrase! < db.phrase[b].phrase! ? -1 : 1
}

const config: KeodaConfig = {
  onInitialize(ctx) {
    window.addEventListener('hashchange', function (e) {
      const id = window.location.hash.replace('#', '')
      ctx.actions.keoda.select({ id })
    })
    ctx.state.keoda.writ = JSON.parse(
      window.localStorage.getItem('keoda.writ') || 'false'
    )
    ctx.state.keoda.nsfw = JSON.parse(
      window.localStorage.getItem('keoda.nsfw') || 'false'
    )
  },
  state: {
    keoda: {
      db,
      lexicon: Object.assign(
        {},
        ...TYPES.map(type => ({ [type]: Object.keys(db[type]).sort() })),
        { phrase: Object.keys(db.phrase).sort(phraseSort) }
      ),
      float: {
        id: 'card-zu',
        hidden: true,
        position: {
          top: 5000,
          left: 5000,
        },
      },
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
