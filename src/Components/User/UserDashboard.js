import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';

import AvatarUploader from '../Controls/AvatarUploader'

import styles from './UserDashboard.module.css';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';

class UserDashboard extends Component {    

    handleSubmit = (values) => {

        // Fill only the updateable fields (and ID)
        // Usign Form Data to handle image upload
        let data = new FormData();
        data.append('id', values.id);
        data.append('title', values.title);
        data.append('birthDate', values.birthDate);

        if(values.avatar.name) {
            console.log(values.avatar.name);
            data.append('avatar', values.avatar);
        }

        this.props.userUpdate(data, this.props.auth.authProfile());
    };

    renderForm = (props) => {

        const { isLoading } = this.props;

        return (
            <Form>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <div className="row">
                            <div className="col-3 align-self-center">
                                <AvatarUploader defaultImage="http://127.0.0.1:8000/media/avatars/avatar-placeholder_ZM3ZAzr.png" 
                                    name="avatar" setFieldValue={props.setFieldValue} value={props.values.avatar} />
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="txtName">Nome do Usuário</label>
                                    <Field id="txtName" type="text" className="form-control" name="name" disabled={props.values.name} />
                                    {
                                        !props.values.name && (
                                            <small id="userNameHelp" className="form-text text-muted">O Nome não poderá ser alterado após o cadastro!</small>
                                        )
                                    }
                                    
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtEmail">E-mail</label>
                                    <Field id="txtEmail" type="email" className="form-control" name="email" readOnly />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="txtBirthDate">Data de Nascimento</label>
                                    <Field id="txtBirthDate" type="text" className="form-control" name="birthDate" />
                                </div>
                            </div>                                            
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="txtTitle">Título</label>
                                    <Field id="txtTitle" type="text" className="form-control" name="title" />
                                </div>
                            </div>
                        </div>                                 
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <h2>Sistema</h2>
                    </Tab.Pane>
                </Tab.Content>
                <button type="submit" disabled={isLoading}>
                    Submit
                </button>                                   
            </Form>
        );
    }

    render() {

        const profile = { 
            email: this.props.auth.authProfile().name, 
            ...this.props.auth.userProfile() 
        };

        console.log(profile);

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
                            <Formik 
                                initialValues={profile}
                                onSubmit={this.handleSubmit}                        
                                render={this.renderForm}
                            />
                        </Col>
                    </Row>
                </Tab.Container>                    
            </div>
        )
    }
}

export default UserDashboard;