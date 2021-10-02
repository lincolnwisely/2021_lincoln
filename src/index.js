import React from "react";
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
// import Root from 'routes'
import configureStore from './store';
import registerServiceWorker from "./registerServiceWorker";


const store = configureStore()

ReactDom.render(<Provider store={store}>
  <App />
</Provider>,
document.getElementById('app'));
registerServiceWorker();

// ReactDom.render(
//   <App />,
// document.getElementById('app'));