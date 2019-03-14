import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Components/Header';
import ForumList from '../Components/ForumList';
import ViewForum from '../Components/Board/ViewForum';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {

    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired,
        loginError: PropTypes.func.isRequired,
        loginSucces: PropTypes.func.isRequired
    };

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
        this.props.history.push("/");
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
                <main role="main">
                    <Switch>
                        <Route exact path="/" component={ForumList} />
                        <Route path="/ViewForum/:id" component={ViewForum} />
                    </Switch>
                </main>
            </div>        
        )
    }
}

export default App;