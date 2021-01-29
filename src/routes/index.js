import React from 'react';

// React Routing
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'

// Views imports
import About from '../../views/About';

const Root = () => {
  return <Router>
    <PageLayout>
      {/* <Route exact path="/" component={Dashboard} /> */}
      <Route path="/about" component={About} />

    </PageLayout>
  </Router>
}

export default Root
