import { api } from '../../config/api'
import { updateIsLoading, setUser } from '../ducks/user'

export default (dispatch, userId, token) => {
  dispatch(updateIsLoading(true))

  return fetch(api + '/v1/users/' + userId, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token.value
    }
  })
    .then(response => {
      // Some error
      if (response.status !== 200) {
        return dispatch(updateIsLoading(false))
      }

      // Success
      return response.json()
        .then(json => {
          console.log(json)

          dispatch(setUser({ id: json.id, email: json.email }))

          dispatch(updateIsLoading(false))
        })
    })
    .catch(_ => {
      return dispatch(updateIsLoading(false))
    })
}
