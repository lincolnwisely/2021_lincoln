import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as R from 'ramda';
import Image from '../Image';

import { fetchUnsplash } from '../../store/actions/unsplash';

function Game() {
  // Utilities

  const dispatch = useDispatch()

  const images = useSelector(state => R.path(['unsplashImages', 'data'], state))


  let query = "dogs"

  const flexStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };



  useEffect(() => {
  dispatch(fetchUnsplash(query))
  }, [])
  

if (!images) return null; 

  return (
    <div>
      <h2>Helloooo</h2>
      <div style={flexStyle} className="image-container">
        {images && R.map(img => {
          return  <Image 
          id={img.id}
          src={img.urls.small}
          href={img.user.links.self}
          user={img.user}
          />
        }, images)}
        </div>
    </div>
  );  
}

export default Game;
