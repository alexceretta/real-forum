import React, { Component } from 'react';
import axios from 'axios';
import { getElapsedTime } from '../../Helpers.js'
import styles from './ViewForum.module.css';
import { Link } from 'react-router-dom';

class ViewForum extends Component {

    state = {
        board: {},
        threads: []
    }

    componentDidMount() {

        axios.get(`http://127.0.0.1:8000/boards/${this.props.match.params.id}`)
        .then(res => {
            const { threads, ...board } = res.data;
            this.setState({ board, threads });
        }).catch(function(error) {
            console.log(error);
        });
    }

    threadRow() {
        return this.state.threads.map((thread, i) =>
            <div className={`row ${styles.thread}`}>                
                <div className="col-1 text-center">
                    <img src={thread.user.avatar} className={styles.avatarPreview} alt="User Avatar" />
                </div>
                <div className="col">
                    <div class="row align-items-start">
                        {thread.title}
                    </div>
                    <div class="row align-items-end">
                        <small>
                            {thread.user.name} - {getElapsedTime(thread.creationDate)}
                        </small>
                    </div>
                </div>
                <div className="col-1 col-md-2">
                    Posts: {thread.postCount}
                </div>
                <div className="col-2 col-md-3">
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
            <div className="container main">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={`/`} >Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{this.state.board.name}</li>
                    </ol>
                </nav>
                <div class="shadow p-3 bg-white rounded">
                    <h3>{this.state.board.name}</h3>
                    <p>{this.state.board.description}</p>
                </div>
                <div className={`shadow-sm ${styles.threadList}`}>                
                    <div className={`row ${styles.threadsHeader}`}></div>
                    {this.threadRow()}
                </div>
            </div>            
        )
    }
}

export default ViewForum;