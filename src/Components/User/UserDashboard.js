import React, { Component } from 'react';
//import axios from 'axios';

class UserDashboard extends Component {

    state = {
        profile: []
    }

    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if(!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }
    }

    render() {
        const { profile } = this.state;
        return (
            <h1>{profile}</h1>
        )
    }
}

export default UserDashboard;