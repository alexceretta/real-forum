import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import './App.css';

class App extends Component {  
  
  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
    this.props.history.push("/");
  }

  async componentDidMount() {    
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();      
    }

    this.setState({ loading: false })
  }

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    return (      
      !this.state.loading && (
        <div>
          <Header auth={this.props.auth} />
          <Main auth={this.props.auth} />
        </div>
      )
    )
  }
}

export default App;
