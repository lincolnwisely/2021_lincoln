import React from "react";
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
// import Root from 'routes'
import configureStore from './store';


const store = configureStore()

ReactDom.render(<Provider store={store}>
  <App />
</Provider>,
document.getElementById('app'));
// ReactDom.render(
//   <App />,
// document.getElementById('app'));