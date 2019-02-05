import React from 'react';

const Header = (props) => {

    const { isAuthenticated } = props.auth;

    const login = () => {
        props.auth.login();
    }

    const logout = () => {
        props.auth.logout();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="index.html">PRANK</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="joguinhos.html">Joguinhos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="geral.html">Geral</a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li>
                        {
                            !isAuthenticated() && (
                                <button type="button" onClick={login.bind(this)} className="btn btn-outline-primary my-2 my-sm-0" >Login</button>
                            )
                        }
                        {
                            isAuthenticated() && (
                                <button type="button" onClick={logout.bind(this)} className="btn btn-outline-danger my-2 my-sm-0" >Logout</button>
                            )
                        }                    
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;