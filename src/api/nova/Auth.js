import Redux from '../redux'
import createApiAction from '../createApiAction'

const baseUrl = process.env.API_URL
const apiPath = '/auth'
const prefix = 'AUTH'
const storeKey = 'auth'

export default class Auth {
  static signUp = async ({ email, password }) => {
    const url = `${baseUrl}${apiPath}`
    const options = {
      method: 'POST',
      url,
      prefix,
      storeKey,
      payload: {
        email,
        password
      }
    }

    const action = await createApiAction(options)
    return Redux.dispatch(action)
  }
}
