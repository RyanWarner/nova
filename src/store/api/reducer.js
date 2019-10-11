import { setIn } from 'app/utilities'

export const initialState = {}

export default (state = initialState, action) => {
  const { type, payload, storeKey } = action
  if (!type) return state

  if (type.endsWith('_SUCCESS')) {
    if (!storeKey) return state
    return setIn(state, storeKey, payload)
  }

  return state
}
