import React from 'react';
import ForumList from './ForumList';
import ViewForum from './Board/ViewForum';
import { Switch, Route } from 'react-router-dom';

const Main = () =>  {
    return (
        <main role="main">
            <Switch>
                <Route exact path="/" component={ForumList} />
                <Route path="/ViewForum/:id" component={ViewForum} />
            </Switch>
        </main>
    );
}

export default Main;