import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router, routerMiddleware } from 'connected-react-router'
import { configureStore } from './store'
import createHistory from './store/history'
import { renderRoutes } from 'react-router-config'
import * as Sentry from '@sentry/browser'

import routes from './routes/routes'
import analytics from './analytics'
import { loadState, saveState } from 'app/store/localStorage'
import { ScrollToTop } from 'app/ui-kit'
import Redux from 'app/api/redux'

const dsn = process.env.SENTRY_DSN
const environment = process.env.DEPLOY_ENV
Sentry.init({ dsn, environment })

const browserHistory = createHistory()

const persistedState = loadState()
const initialState = persistedState

export const store = configureStore({
  initialState,
  middleware: [routerMiddleware(browserHistory)]
})

store.subscribe(() => {
  const currentState = store.getState()

  const state = {
    api: {
      currentUser: currentState.api?.currentUser
    }
  }
  saveState(state)
})

Redux.store = store

analytics.initialize().then(() => {
  const { pathname } = browserHistory.location
  analytics.pageView({ pathname })
})

const unlisten = browserHistory.listen((location, action) => { // eslint-disable-line no-unused-vars
  const { pathname } = location
  analytics.pageView({ pathname })
})

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <ScrollToTop>
        {renderRoutes(routes)}
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById('app')
)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }

  if (!window.store) {
    window.store = store
  }
}
