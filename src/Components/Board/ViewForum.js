import React, { Component } from 'react';
import { getElapsedTime } from '../../Helpers.js'
import styles from './ViewForum.module.css';
import { Link } from 'react-router-dom';

class ViewForum extends Component {

    componentWillMount() {
        this.props.fetchThreads(this.props.match.params.id);
    }

    renderThreads(threads) {
        return threads.map((thread, i) => {
            return (
                <div className={`row ${styles.thread}`}>                
                    <div className="col-1 text-center">
                        <img src={thread.user.avatar} className={styles.avatarPreview} alt="User Avatar" />
                    </div>
                    <div className="col">
                        <div className="row align-items-start">
                            {thread.title}
                        </div>
                        <div className="row align-items-end">
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
        });
    }

    render() {
        if(this.props.boardData && !this.props.boardData.loading) {
            return (            
                <div className="container main">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={`/`} >Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{this.props.board.name}</li>
                        </ol>
                    </nav>
                    <div className="shadow p-3 bg-white rounded">
                        <h3>{this.props.board.name}</h3>
                        <p>{this.props.board.description}</p>
                    </div>
                    <div className={`shadow-sm ${styles.threadList}`}>                
                        <div className={`row ${styles.threadsHeader}`}></div>
                        {/* {this.threadRow()} */}
                    </div>
                </div>            
            )
        } else {
            return (
                <div>Loading</div>
            )
        }
    }
}

export default ViewForum;