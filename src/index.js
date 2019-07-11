import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router, routerMiddleware } from 'connected-react-router'
import { configureStore } from './store'
import createHistory from './store/history'
import { renderRoutes } from 'react-router-config'

import routes from './routes/routes'
import analytics from './analytics'
import { loadState, saveState } from 'app/store/localStorage'
import { ScrollToTop } from 'app/ui-kit'

analytics.initialize()

const browserHistory = createHistory()

const persistedState = loadState()
const initialState = persistedState

const store = configureStore({
  initialState,
  middleware: [routerMiddleware(browserHistory)]
})

store.subscribe(() => {
  const state = {

  }
  saveState(state)
})

analytics.pageview({ pathname: browserHistory.location.pathname })

const unlisten = browserHistory.listen((location, action) => { // eslint-disable-line no-unused-vars
  const { pathname } = location
  analytics.pageview({ pathname })
})

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <ScrollToTop>
        { renderRoutes(routes) }
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
