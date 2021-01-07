import React, { Component } from 'react';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return(
      <div>
        <h1>We're making an app! We're making an app! We're making an app!</h1>
        <h2>I never really know what to do. I need to figure out what to do. Maybe use Ant Design web components. </h2>
        {/* <Welcome name="Lincoln"></Welcome> */}
      </div>
    )
  }
}

export default App;