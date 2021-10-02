import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as R from 'ramda';

const imgWrap = {
display: "flex",
flexDirection: "column",
margin: "10px",
};

let imgStyle = {
  overflow: "hidden",
  display: "flex"
  };

function Image(props) {
  const dispatch = useDispatch()
  const [isActive, setActive] = useState("false");

  const play = useSelector(state => R.path('play', state))

  function makePlay (play) {
    // if play.length is less than 1:
     if (play.length < 2) {
       // add 'this' to play array
     }

     if (play.length == 2) {
       //compare items for a match, go from there...

       // if match, add items to matches
       // else, hide images again, clear play array
     }
  }

  function handleToggle ()  {
    setActive(!isActive);
  };

  !props.className && (props.className = "hidden");

  // state: array of matches
  const matches = useSelector(state => R.path(['matches',], state))

  
  R.map(match => {
    if (match.id === props.id) {
      props.className = "visible"
    } else {
      props.className = "hidden"
    }
  }, matches)

  return (
    <div style={imgWrap} className={`imgWrap`} 
      onClick={handleToggle.bind(this) }

    >
      <p>{ props.id }</p>
      <div className={props.className} style={props.style ? props.style : imgStyle}>
        {props.className == 'visible' || (!isActive) && 
          <img src={props.src}/>
        }
      </div>
      <p className="credit" >
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          via Unsplash
        </a>
        <br />
        <a href={props.user.links.html} target="_blank" rel="noopener noreferrer">
          {props.user.username}
        </a>
      </p>
      
    </div>
  );

}

export default Image;
