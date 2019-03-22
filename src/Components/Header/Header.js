import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { loginRequest, logoutRequest } from '../../Actions';
import { bindActionCreators } from 'redux';
import { NavDropdown } from 'react-bootstrap';

import styles from './Header.module.css';

class Header extends Component {
    
    logoutClick = () => {
        this.props.logoutRequest();
        this.props.history.push('/');
    };

    render() {

        const { loginRequest } = this.props;
        const isAuthenticated = this.props.auth.isAuthenticated();
        const userProfile = this.props.auth.userProfile();

        return (        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={`/`} className="navbar-brand">PRANK</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavDropdown title="Fóruns" id="forunsDropdown">
                            <Link className="dropdown-item" to="/ViewForum/1" role="button">Games</Link>
                            <Link className="dropdown-item" to="/ViewForum/2" role="button">Geral</Link>
                        </NavDropdown>                                            
                    </ul>                    
                    { !isAuthenticated && (
                        <ul className="navbar-nav">
                            <li>
                                <button type="button" onClick={() => loginRequest()} className="btn btn-outline-primary my-2 my-sm-0" >Login</button>
                            </li>
                        </ul> )
                    }
                    { isAuthenticated && (
                        <ul className="navbar-nav">
                            <li class="nav-item">
                                <Link to={"/Dashboard"} className="nav-link">{userProfile.name}</Link>
                            </li>                            
                            <li>
                                <button type="button" onClick={this.logoutClick} className="btn btn-outline-danger my-2 my-sm-0" >Logout</button>
                            </li>
                        </ul> )
                    }
                </div>
            </nav>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginRequest, logoutRequest }, dispatch);
}

const mapStateToProps = (store) => ({
    auth: store.authState.auth
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));