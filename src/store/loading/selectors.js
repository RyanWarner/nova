import { some, get } from 'lodash'
export const createLoadingSelector = (actions) => (state) => {
  // returns true only when all actions are not loading
  return some((action) => get(state, `loading.${action}`))
}
