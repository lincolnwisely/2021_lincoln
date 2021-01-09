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
      return <h2>What the hell!</h2>;
    }
    
    function Users() {
      return <h2>Users</h2>;
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
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
            <Aboot />
          </Route>
          <Route path="/users">
            <Users />
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