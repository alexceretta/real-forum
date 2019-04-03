import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import Header from '../../Components/Header/Header';
import ForumList from '../../Components/ForumList';
import ViewForum from '../../Components/Board/ViewForum';
import UserDashboardContainer from '../../Containers/User/UserDashboardContainer';
import './App.css';

class App extends Component {

    componentDidMount() {
        const {
            renewSession
        } = this.props.auth;

        if (localStorage.getItem('isLoggedIn') === 'true') {
            renewSession();
        }
    }

    mapStyles = (styles) => {
        return {
            opacity: styles.opacity,
            transform: `scale(${styles.scale})`
        };
    }

    bounce = (val) => {
        return spring(val, {
            stiffness: 330,
            damping: 22,
        });
    }
    
    render() {

        const bounceTransition = {
            atEnter: {
                opacity: 0,
                scale: 1.2
            },
            atLeave: {
                opacity: this.bounce(0),
                scale: this.bounce(0.8),
            },
            atActive: {
                opacity: this.bounce(1),
                scale: this.bounce(1)
            }
        };

        return (             
            <div>
                <Header /> 
                <main role = "main">
                    <AnimatedSwitch 
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                        mapStyles={this.mapStyles}
                        className="route-wrapper"
                    >
                        <Route exact path = "/" component = { ForumList } />
                        <Route path = "/ViewForum/:id" render={(props) => <ViewForum key={props.match.params.id} {...props} /> }/>
                        <Route path = "/Dashboard" component = { UserDashboardContainer } />
                    </AnimatedSwitch>
                </main>
            </div>        
        )
    }
}

const mapStateToProps = (store) => ({
    auth: store.authState.auth
});

export default connect(mapStateToProps)(App);