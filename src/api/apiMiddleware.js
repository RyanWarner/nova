/* global fetch */
import { CALL_API } from '../api/createApiAction'

const fetchAsync = async (url, options) => {
  try {
    const response = await fetch(url, options)
    const json = await response.json()
    if (response.ok) return json
    else return { error: json.exception }
  } catch (error) {
    return { error }
  }
}

export default (store) => (next) => async (action) => {
  if (!action[CALL_API]) return next(action)
  const { url, options } = action[CALL_API]
  const requestBody = options.body
  const { key, data } = action
  next(action)
  const payload = await fetchAsync(url, options)
  if (payload && payload.error == null) {
    const type = `${action.prefix}_${action[CALL_API].options.method}_SUCCESS`
    store.dispatch({ type, payload, key, data, requestBody })
  } else {
    // if (payload.error === 'Unauthorized') Auth.logout()
    const type = `${action.prefix}_${action[CALL_API].options.method}_FAILURE`
    store.dispatch({ type, payload, key, data, requestBody })
  }

  return payload
}
