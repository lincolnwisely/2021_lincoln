import { getUnsplash } from '../../lib/api'
import { shuffle } from '../../lib/helpers'

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
    dispatch(clearUnsplash())
    return getUnsplash(query)
      .then(
        (response) => {

          let originalResponse = response.data.results
          let omfg = shuffle(originalResponse.concat(originalResponse))
    
          return dispatch(storeUnsplash(omfg))
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
