import { loadState } from 'app/store/localStorage'

export const CALL_API = Symbol('Call API')
export default ({ method, url, payload, prefix, storeKey, authorized, data }) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  if (authorized) {
    headers.Authorization = `${loadState().api.auth.token}`
  }

  const action = {
    type: `${prefix}_${method}_REQUEST`,
    payload,
    prefix,
    key: storeKey,
    [CALL_API]: {
      url,
      options: {
        method,
        headers,
        body: JSON.stringify(payload)
      }
    },
    data
  }
  return action
}
