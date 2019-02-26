import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {    
    return (
      <div>
        <Header auth={this.props.auth} />
        <Main auth={this.props.auth} />
      </div>
    );
  }
}

export default App;
