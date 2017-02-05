import { api } from '../config/api'
import { setToken } from './ducks/token'

export default (dispatch, token) => {
  return fetch(api + '/v1/tokens', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token.value
    }
  })
    .then(response => {
      // Some error
      if (response.status !== 200) {
        return
      }

      // Success
      return response.json()
        .then(json => {
          dispatch(setToken({ value: json.token, exp: json.exp }))
        })
    })
    .catch(_ => {
      return
    })
}
