import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { unsplashImages } from './reducers/unsplash';

const initialState = {
  // Unsplash
  unsplashImages: {
    data: null,
    error: null
  }
}

export default function configureStore() {
  console.log('configure store function')
  return createStore(
    combineReducers({
      unsplashImages,
    }),
    initialState,
    applyMiddleware(thunk)
  );
}
