import React, { Component } from 'react';
import axios from 'axios';
import { getElapsedTime } from '../../Helpers.js'
import styles from './ViewForum.module.css';

class ViewForum extends Component {

    state = {
        threads: []
    }

    componentDidMount() {

        axios.get(`http://127.0.0.1:8000/boards/${this.props.match.params.id}`)
        .then(res => {
            const threads = res.data.threads;
            this.setState({ threads });
        }).catch(function(error) {
            console.log(error);
        });
    }

    threadRow() {
        return this.state.threads.map((thread, i) =>
            <div className="row">
                <div className="col">
                    <div>
                        {thread.title}
                    </div>
                    <div>
                        <small>
                            {thread.user.name} - {getElapsedTime(thread.creationDate)}
                        </small>
                    </div>
                </div>
                <div className="col">
                    Posts: {thread.postCount}
                </div>
                <div className="col">
                    <div>
                        {getElapsedTime(thread.updateDate)}
                    </div>
                    <div>
                        <small>
                            {thread.lastUser.name}
                        </small>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.threadRow()}
            </div>            
        )
    }
}

export default ViewForum;