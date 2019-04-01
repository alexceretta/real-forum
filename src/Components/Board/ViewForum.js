import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ThreadListContainer from '../../Containers/Thread/ThreadListContainer';

class ViewForum extends Component {

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.id);
    }

    render() {

        const { board, loading } = this.props.boardData;
        console.log(loading);

        if(loading) {
            return (
                <div>Loading</div>
            );
        }

        return (            
            <div className="container main">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={`/`} >Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{board.name}</li>
                    </ol>
                </nav>
                <div className="shadow p-3 bg-white rounded">
                    <h3>{board.name}</h3>
                    <p>{board.description}</p>
                </div>
                <ThreadListContainer boardId={board.id} />
            </div>            
        );
    }
}

export default ViewForum;