import React, { Component } from 'react';
import axios from 'axios';

class ViewForum extends Component {
    state = {
        threads: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/boards/1')
        .then(res => {
            const threads = res.data;
            this.setState({ threads });
        })
    }

    render() {
        return (
            <span>Test</span>
        )
    }
}

export default ViewForum;