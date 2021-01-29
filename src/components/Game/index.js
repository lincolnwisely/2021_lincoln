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
  }, [])
  

console.log('images!!!', images)
if (!images) return null; 

  return (
    <div>
      <h2>Helloooo</h2>
        {images && R.map(img => {
          return <div className={`imgWrap active-`}
      >
        <p>{ img.id }</p>
        <img
          src={img.urls.small}
        />
        <p className="credit" 
        >
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            via Unsplash
          </a>
          <br />
          <a href={img.links.self} target="_blank" rel="noopener noreferrer">
            {img.user.username}
          </a>
        </p>
      </div>

      }, images)}
    </div>
  );  
}

export default Game;
