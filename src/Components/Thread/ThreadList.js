import React, { Component } from 'react';
import axios from 'axios';
import { css } from '@emotion/core';
import { GridLoader } from 'react-spinners';
import { getElapsedTime } from '../../Helpers.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './ThreadList.module.css';

const serviceUrl = 'http://127.0.0.1:8000';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class ThreadList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            threads: [],
            loading: true
        };
    }

    componentDidMount() {
        axios.get(`${serviceUrl}/threads?board=${this.props.boardId}`).then(response => {
            this.setState({ threads: response.data.results, loading: false });
        });
    }

    renderThreads(threads) {

        if(threads.length === 0) {
            return (
                <div className={`row ${styles.thread}`}>
                    <div className="col text-center">
                        Não há Tópicos neste fórum.
                    </div>
                </div>
            )
        }

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

        const { threads, loading } = this.state;

        return (            
            <div className={`shadow-sm ${styles.threadContainer}`}>                
                <div className={`row ${styles.threadsHeader}`}></div>
                <TransitionGroup>
                    { !loading ? 
                    (
                        <CSSTransition timeout={500} classNames="item">
                            <div class={styles.threadList}>
                                {this.renderThreads(threads)}
                            </div>
                        </CSSTransition>
                    ) :
                    (
                        <div className={`row ${styles.thread}`}>
                            <CSSTransition timeout={500} classNames="item">
                                <div className="col text-center">                                
                                    <GridLoader css={override} color={'#4A90E2'} loading={loading} />
                                </div>                        
                            </CSSTransition>
                        </div>                                    
                    )}
                </TransitionGroup>
            </div>
        )
    }
}

export default ThreadList;