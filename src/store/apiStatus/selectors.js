import { some, get } from 'lodash'

export const apiStatusSelector = (actions) => (state) => {
  return {
    loading: some(actions, (action) => get(state, `loading.${action}`)),
    success: some(actions, (action) => get(state, `success.${action}`)),
    failure: some(actions, (action) => get(state, `failure.${action}`))
  }
}
