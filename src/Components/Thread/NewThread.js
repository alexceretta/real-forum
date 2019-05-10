import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { stateToHTML } from 'draft-js-export-html';

import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';

import PostEditor from '../Controls/PostEditor/PostEditor'

import axios from 'axios';
const serviceUrl = 'http://127.0.0.1:8000';

class NewThread extends Component {

    constructor(props) {
        super(props);

        this.state = {
            board: {},
            loading: true,
            post: {
                title: '',
                message: ''
            },
        };

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`${serviceUrl}/boards/${this.props.match.params.boardId}`).then((response) => {
            this.setState({ board: response.data, loading: false });
        });
    }

    onTestClick() {
        alert(JSON.stringify(this.state.post));
    }

    handleMessageChange(message) {
        let changedPost = {...this.state.post};
        changedPost.message = message;
        this.setState({post: changedPost});
    }

    handleSubmit = (values) => {

        // Data needs to be manipulated before submitted for this entity also
        // When creating a new Thread, a new Post will also be created
        let data = new FormData();
        data.append('title', values.title);
        data.append('message', stateToHTML(this.state.post.message));        
    }

    renderForm = (props) => {

        return (
            <Form>
                <div className="form-group">
                    <Field className="form-control" id="txtTitle" type="text" name="title" placeholder="Insira o título do tópico." />
                </div>
                <div className="form-group">
                    <PostEditor onChange={this.handleMessageChange} />
                </div>
                <div className="form-group">
                    <div class="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary mr-2"><CreateIcon className="mr-1" /> Criar Tópico</button>
                        <button className="btn btn-secondary"><VisibilityIcon className="mr-1" /> Visualizar</button>
                    </div>                    
                </div>
            </Form>
        )

    }

    render() {

        const { board, loading, post } = this.state;

        return (
            <div className="container main">
                <nav aria-label="breadcrumb">
                    {!loading && (
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={`/`} >Home</Link></li>
                            <li className="breadcrumb-item"><Link to={`/ViewForum/${board.id}`} >{board.name}</Link></li>
                            <li className="breadcrumb-item active">Novo Tópico</li>
                        </ol>
                    )}
                </nav>
                <div className="bg-white rounded border p-3">
                    <Formik 
                        initialValues={post} 
                        onSubmit={this.handleSubmit}
                        render={this.renderForm} />
                </div>
            </div>
        )
    }

}

export default NewThread;