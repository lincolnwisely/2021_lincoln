import React, { Component } from 'react';
import Welcome from './components/Welcome';
// import Link from './components/Link';
 import About from './views/About';
 import './scss/styles.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    function Home() {
      return <h2>Home</h2>;
    }
    
    function Aboot() {
      // About
      return <h2>It works! Hello, world.</h2>;
    }
    
    function Game() {
      return <h2>game</h2>;
    }
    
    return(
      // <div>
      //   <Welcome name="Lincoln"></Welcome>
      //   <Link href="https://google.com" text="goooooogle"></Link>
      // </div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
            <Aboot />
            <Welcome name="Vince"/>
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App;