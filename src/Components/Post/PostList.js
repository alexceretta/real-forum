import React, { Component } from 'react';
import axios from 'axios';
import { css } from '@emotion/core';
import { GridLoader } from 'react-spinners';
import { getElapsedTime } from '../../Helpers.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

import styles from './PostList.module.css';
import avatarPlaceholder from '../../Content/images/avatar-placeholder.png';

const serviceUrl = 'http://127.0.0.1:8000';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true
        };
    }

    componentDidMount() {
        axios.get(`${serviceUrl}/posts?thread=${this.props.threadId}`).then(response => {
            this.setState({ posts: response.data.results, loading: false });
        });
    }

    renderPosts(posts) {

        if(posts.length === 0) {
            return (
                <div className={`row shadow ${styles.post}`}>
                    <div className="col text-center">
                        Não há Posts neste tópico.
                    </div>
                </div>
            )
        }

        return posts.map((post, i) => {

            const userAvatar = post.user_details.avatar || avatarPlaceholder;

            return (
                <div key={`post_${i}`} className={`row border ${styles.post}`}>
                    <div className={`col-2 ${styles.userInformation}`}>
                        <div className="d-flex justify-content-center">
                            <img src={userAvatar} alt="User Avatar" className={`rounded ${styles.userAvatar}`} />
                        </div>
                        <div className={`d-flex justify-content-center ${styles.userName}`}>
                            <Link to="/">{post.user_details.name}</Link>
                        </div>
                        <div className="d-flex justify-content-center text-muted">
                            {post.user_details.title}
                        </div>
                    </div>
                    <div className={`col ${styles.postArrow}`}>
                        <div className="row">
                            <div className={`col ${styles.postTime}`}>
                                <span class="small font-weight-light text-muted">{getElapsedTime(post.creationDate)}</span>
                            </div>
                        </div>
                        {/* <hr className={styles.postSeparator} /> */}
                        <div className="row">
                            <div className="col">
                                {post.message}
                            </div>
                        </div>                        
                    </div>                    
                </div>
            );
        });
    }

    render() {

        const { posts, loading } = this.state;

        return (            
            <div>
                <TransitionGroup>
                    { !loading ? 
                    (
                        <CSSTransition timeout={500} classNames="item">
                            <div>
                                {this.renderPosts(posts)}
                            </div>
                        </CSSTransition>
                    ) :
                    (
                        <div className={`row ${styles.post}`}>
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

export default PostList;