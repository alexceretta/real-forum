import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Store } from './Store';
import App from './Containers/App/App';
import Callback from './Callback/Callback';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
        <div>
          <Route path="/" component={App} />
          <Route exact path="/callback" component={Callback} />
        </div>
      </Router>
  </Provider>,  
  document.getElementById('root')
);