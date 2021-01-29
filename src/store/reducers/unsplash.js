// Reducer
import unsplashMiddleware from '../../middleware/unsplash'


export const unsplashImages = (state = {}, action) => {

  //Clears Unsplash Data
  if (action.type === 'CLEAR_UNSPLASH') {
    return {
      data: null,
      error: false,
    }
  }

  // Sets Unsplash Data
  if (action.type === 'STORE_UNSPLASH') {
    return {
      data: unsplashMiddleware(action.data),
      error: false,
    }
  }

  // Handles Error
  if (action.type === 'UNSPLASH_ERROR') {
    return {
      data: unsplashMiddleware(action.data),
      error: true
    }
  }

  return state
}
