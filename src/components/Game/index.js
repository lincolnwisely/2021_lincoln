import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as R from 'ramda';
import { fetchUnsplash } from '../../store/actions/unsplash';


function Game() {
  // Utilities
  const dispatch = useDispatch()

  const images = useSelector(state => R.path(['unsplashImages', 'data'], state))

  useEffect(() => {

 
  dispatch(fetchUnsplash("pie"))

  //   milestones ?
  //     setLoadingTimeline(false) :
  //     dispatch(fetchTimelineContent()).then(() => { setLoadingTimeline(false) })
  }, [])

  
  if (images) {
    console.log('hiiii', images)
  }

  return (
    <h1>Hiiiii</h1>
  );  
}

export default Game;
