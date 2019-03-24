import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';
import ForumList from '../Components/ForumList';
import ViewForum from '../Components/Board/ViewForum';
import UserDashboard from '../Components/User/UserDashboard';
import './App.css';

class App extends Component {

    componentDidMount() {
        const {
            renewSession
        } = this.props.auth;

        if (localStorage.getItem('isLoggedIn') === 'true') {
            renewSession();
        }
    }

    render() {        
        return (             
            <div>
                <Header /> 
                <main role = "main">
                    <Switch>
                        <Route exact path = "/" component = { ForumList } />
                        <Route path = "/ViewForum/:id" component = { ViewForum } />
                        <Route path = "/Dashboard" component = { UserDashboard } />
                    </Switch>
                </main>
            </div>        
        )
    }
}

const mapStateToProps = (store) => ({
    auth: store.authState.auth
});

export default connect(mapStateToProps)(App);