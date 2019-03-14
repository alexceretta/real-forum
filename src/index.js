import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';

import { makeMainRoutes } from './routes';
import configureStore from './Redux/configureStore';

const store = configureStore();
const routes = makeMainRoutes();

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,  
  document.getElementById('root')
);