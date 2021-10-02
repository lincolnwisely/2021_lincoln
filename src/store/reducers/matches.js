// Reducer
import matchesMiddleware from '../../middleware/matches'


export const matches = (state = {}, action) => {

  //Clears matches array 
  if (action.type === 'CLEAR_MATCHES') {
    return {
      data: null,
      error: false,
    }
  }

  // Adds pair to matches array
  if (action.type === 'STORE_MATCHES') {
    return {
      data: matchesMiddleware(action.data),
      error: false,
    }
  }

  // Handles Error
  if (action.type === 'MATCHES_ERROR') {
    return {
      data: matchesMiddleware(action.data),
      error: true
    }
  }

  return state
}
