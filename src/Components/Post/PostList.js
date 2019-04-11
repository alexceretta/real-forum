import React, { Component } from 'react';
import axios from 'axios';
import { css } from '@emotion/core';
import { GridLoader } from 'react-spinners';
// import { getElapsedTime } from '../../Helpers.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { Link } from 'react-router-dom';
import styles from './PostList.module.css';

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
            return (
                <div key={`post_${i}`} className={`row shadow ${styles.post}`}>
                    <div class="col-2">
                        <div>
                            <img src={post.user.avatar} alt="User Avatar" className={`rounded ${styles.userAvatar}`} />
                        </div>                        
                    </div>
                    <div class="col">
                        {post.message}
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