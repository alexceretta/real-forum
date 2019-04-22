import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getElapsedTime } from '../../Helpers.js'
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PostList from '../Post/PostList';

import axios from 'axios';

import styles from './ViewThread.module.css';
import '../../transitions.css';

const serviceUrl = 'http://127.0.0.1:8000';

class ViewThread extends Component {

    constructor(props) {
        super(props);
        this.state = {
            thread: {},
            loading: true
        };
    }

    componentDidMount() {
        axios.get(`${serviceUrl}/threads/${this.props.match.params.id}`).then((response) => {
            this.setState({ thread: response.data, loading: false });
        });
    }

    render() {

        const { thread, loading } = this.state;

        return (
            <div className="container main">
                <nav aria-label="breadcrumb">
                    { !loading && (
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={`/`} >Home</Link></li>
                            <li className="breadcrumb-item active"><Link to={`/ViewForum/${thread.board_details.id}`} >{thread.board_details.name}</Link></li>
                        </ol>
                    )}
                </nav>
                <TransitionGroup>
                    { !loading && (
                        <CSSTransition timeout={500} classNames="item">
                            <div>
                                <div className="shadow p-3 bg-white rounded">
                                    <h3>{thread.title}</h3>
                                    <p className="d-flex">
                                        <span className={`d-flex ${styles.creatorDetails}`}><PersonIcon /> {thread.user.name}</span>
                                        <span className="d-flex"><AccessTimeIcon /> {getElapsedTime(thread.creationDate)}</span>
                                    </p>
                                </div>
                                <PostList threadId={thread.id} />
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>            
        )
    }
}

export default ViewThread;