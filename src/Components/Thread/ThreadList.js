import React, { Component } from 'react';
import { getElapsedTime } from '../../Helpers.js'
import styles from './ThreadList.module.css';

class ThreadList extends Component {

    componentDidMount() {
        this.props.fetchThreads(this.props.boardId);
    }

    renderThreads(threads) {
        return threads.map((thread, i) => {
            return (
                <div key={`thread_${i}`} className={`row ${styles.thread}`}>                
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

        const { threads, loading } = this.props.threadData;

        if(loading) {
            return (
                <div>Loading</div>
            )
            
        } else {
            return (            
                <div className={`shadow-sm ${styles.threadList}`}>                
                    <div className={`row ${styles.threadsHeader}`}></div>
                    {this.renderThreads(threads)}
                </div>
            )
        }
    }
}

export default ThreadList;