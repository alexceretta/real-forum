import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './Containers/App';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';

const auth = new Auth();

export const makeMainRoutes = () => {
  return (
      <Router>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route exact path="/callback" render={() => (<Callback auth={auth} />)} />
        </div>
      </Router>
  );
}
