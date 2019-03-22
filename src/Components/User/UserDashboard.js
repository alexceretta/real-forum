import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tab, Nav, Row, Col } from 'react-bootstrap';

import AvatarUploader from '../Controls/AvatarUploader'

import styles from './UserDashboard.module.css';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';

class UserDashboard extends Component {

    state = {
        profile: []
    }

    render() {

        const userProfile = this.props.auth.userProfile();

        return (
            <div className="container main">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={`/`} >Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>                        
                    </ol>
                </nav>
                <div className="shadow p-3 bg-white rounded">
                    <h3>Dashboard</h3>
                    <p>Atualize suas informações pessoais e preferências de sistema do Fórum.</p>
                </div>
                <Tab.Container defaultActiveKey="first">
                    <Row className={styles.dashboardContainer}>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="d-flex"><PersonIcon />Perfil</Nav.Link>
                                    <Nav.Link eventKey="second" className="d-flex"><SettingsIcon />Sistema</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10} className={`shadow p-3 rounded ${styles.formContainer}`}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="row">
                                        <div className="col-3">
                                            <AvatarUploader defaultImage="http://127.0.0.1:8000/media/avatars/avatar_2782.jpg" />
                                        </div>
                                        <div className="col">
                                            
                                        </div>
                                    </div>                                    
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h2>Sistema</h2>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>                    
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    auth: store.authState.auth
});

export default connect(mapStateToProps)(UserDashboard);