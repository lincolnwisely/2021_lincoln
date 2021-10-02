export const CLEAR_PLAY = 'CLEAR_PLAY'
export function clearPlay() {
  return {
    type: CLEAR_PLAY,
  }
}

export const STORE_PLAY = 'STORE_PLAY'
export function storePlay(data) {
  return {
    type: STORE_PLAY,
    data,
  }
}

export const PLAY_ERROR = 'PLAY_ERROR'
export function playError(data) {
  return {
    type: PLAY_ERROR,
    data,
  }
}


