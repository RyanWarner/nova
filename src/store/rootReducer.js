import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import createHistory from './history'
import app from './app/reducer'
import api from './api/reducer'
import apiStatus from './apiStatus/reducer'
import { saveState } from 'app/store/localStorage'

const history = createHistory()

const appReducer = combineReducers({
  app,
  api,
  apiStatus,
  router: connectRouter(history)
})

const rootReducer = (state = {}, action) => {
  const stateCopy = JSON.parse(JSON.stringify(state))

  if (action.type === 'LOGOUT') {
    delete stateCopy.api.currentUser
    saveState(stateCopy)
  }
  return appReducer(stateCopy, action)
}

export default rootReducer
