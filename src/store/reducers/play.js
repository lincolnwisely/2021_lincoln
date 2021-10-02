// Reducer
import playMiddleware from '../../middleware/play'


export const play = (state = {}, action) => {

  //Clears play array 
  if (action.type === 'CLEAR_PLAY') {
    return {
      data: null,
      error: false,
    }
  }

  // Adds pair to matches array
  if (action.type === 'STORE_PLAY') {
    return {
      data: playMiddleware(action.data),
      error: false,
    }
  }

  // Handles Error
  if (action.type === 'PLAY_ERROR') {
    return {
      data: playMiddleware(action.data),
      error: true
    }
  }

  return state
}
