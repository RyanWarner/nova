import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './rootReducer'
import apiMiddleware from 'app/api/apiMiddleware'

export const configureStore = ({ initialState, middleware = [] } = {}) => {
  const devtools =
        typeof window !== 'undefined' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] })

  const composeEnhancers = devtools || compose

  let finalMiddleware
  const isProd = process.env.NODE_ENV === 'production'
  if (isProd) {
    finalMiddleware = applyMiddleware(...[thunk].concat(...middleware).concat(apiMiddleware))
  } else {
    const createLogger = require('redux-logger').createLogger
    const logger = createLogger({
      collapsed: true,
      diff: true
    })
    finalMiddleware = applyMiddleware(...[thunk].concat(...middleware).concat(apiMiddleware).concat(logger))
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(finalMiddleware)
  )

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./rootReducer', () =>
        store.replaceReducer(require('./rootReducer').default)
      )
    }
  }

  return store
}

export default configureStore
