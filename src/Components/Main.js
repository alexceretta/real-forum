import React from 'react';
import ForumList from './ForumList';
import ViewForum from './ViewForum';
import { Router, Switch, Route } from 'react-router-dom';

const Main = (props) =>  {
    return (
        <main role="main">
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => <ForumList auth={props.auth} />} />
                    <Route path="/ViewForum/:id" Component={ViewForum} />
                </Switch>
            </Router>
        </main>
    );
}

export default Main;