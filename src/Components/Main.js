import React from 'react';
import ForumList from './ForumList';



const Main = (props) =>  {
    return (
        <main role="main">
            <ForumList auth={props.auth} />
        </main>
    );
}

export default Main;