import { createBrowserHistory } from 'history'

export const createUniversalHistory = () => {
  const history = window.browserHistory || createBrowserHistory()
  if (process.env.NODE_ENV === 'development' && !window.browserHistory) {
    window.browserHistory = history
  }
  return history
}

export default createUniversalHistory
