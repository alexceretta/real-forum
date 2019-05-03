import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

import PostEditor from '../Controls/PostEditor/PostEditor'

import axios from 'axios';
const serviceUrl = 'http://127.0.0.1:8000';

class NewThread extends Component {    

    constructor(props) {
        super(props);

        this.state = {
            board: {},
            loading: true
        };
    }

    componentDidMount() {
        axios.get(`${serviceUrl}/boards/${this.props.match.params.boardId}`).then((response) => {
            this.setState({ board: response.data, loading: false });
        });        
    }

    renderForm = (props) => {

        return (
            <Form>
                <div className="form-group">
                    <Field className="form-control" id="txtTitle" type="text" name="title" placeholder="Insira o título do tópico." />                    
                </div>
                <div className="form-group">
                    <PostEditor />
                </div>
            </Form>
        )

    }

    render() {

        const { board, loading } = this.state;

        const post = {
            title: '',
            message: ''
        };

        return (
            <div className="container main">
                <nav aria-label="breadcrumb">
                    { !loading && (
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={`/`} >Home</Link></li>
                            <li className="breadcrumb-item"><Link to={`/ViewForum/${board.id}`} >{board.name}</Link></li>
                            <li className="breadcrumb-item active">Novo Tópico</li>
                        </ol>
                    )}
                </nav>
                <div className="bg-white rounded border p-3">
                    <Formik initialValues={post} render={this.renderForm} />
                </div>
            </div>
        )
    }

}

export default NewThread;