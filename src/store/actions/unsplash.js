import { getUnsplash } from '../../lib/api'

export const CLEAR_UNSPLASH = 'CLEAR_UNSPLASH'
export function clearUnsplash() {
  return {
    type: CLEAR_UNSPLASH,
  }
}

export const STORE_UNSPLASH = 'STORE_UNSPLASH'
export function storeUnsplash(data) {
  return {
    type: STORE_UNSPLASH,
    data,
  }
}

export const UNSPLASH_ERROR = 'UNSPLASH_ERROR'
export function unsplashError(data) {
  return {
    type: UNSPLASH_ERROR,
    data,
  }
}

export function fetchUnsplash(query) {
  return function (dispatch, getState) {
console.log('ello?')
    dispatch(clearUnsplash())
    return getUnsplash(query)
      .then(
        (response) => {
          return dispatch(storeUnsplash(response.data))
        }
      )
      .catch(
        (err) => {
          console.log('ello?')

          return dispatch(unsplashError(null))
        }
      )
  }
}