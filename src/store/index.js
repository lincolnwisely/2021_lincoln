import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { unsplashImages } from './reducers/unsplash';
import { play } from './reducers/play';
import { matches } from './reducers/matches';

const initialState = {
  // Unsplash
  unsplashImages: {
    data: null,
    error: null
  }, 
  play: [],
  matches: [ 
    {
      id: 'QTn9hEacX4E', created_at: '2019-12-02T05:20:36-05:00', updated_at: '2021-10-01T08:13:02-04:00', promoted_at: null, width: 5104,
    }, 
    {
      id: 'B_sK_xgzwVA', created_at: '2021-08-25T13:43:55-04:00', updated_at: '2021-09-30T22:29:32-04:00', promoted_at: null, width: 5178
    }
  ]
}


export default function configureStore() {
  console.log('configure store function')
  return createStore(
    combineReducers({
      unsplashImages, 
      play, 
      matches
    }),
    initialState,
    applyMiddleware(thunk)
  );
}
