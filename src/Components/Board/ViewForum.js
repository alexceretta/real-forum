import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CreateIcon from '@material-ui/icons/Create';

import axios from 'axios';

import '../../transitions.css';
import ThreadList from '../Thread/ThreadList';

const serviceUrl = 'http://127.0.0.1:8000';

class ViewForum extends Component {

    constructor(props) {
        super(props);
        this.state = {
            board: {},
            loading: true
        };
    }

    componentDidMount() {
        axios.get(`${serviceUrl}/boards/${this.props.match.params.id}`).then((response) => {
            this.setState({ board: response.data, loading: false });
        });        
    }

    render() {

        const { board, loading } = this.state;

        return (            
            <div className="container main">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={`/`} >Home</Link></li>
                        { !loading && (
                            <li className="breadcrumb-item active" aria-current="page">{board.name}</li>
                        )}                        
                    </ol>
                </nav>
                <TransitionGroup>
                    { !loading && (
                        <CSSTransition timeout={500} classNames="item">
                            <div>
                                <div className="shadow p-3 bg-white rounded">
                                    <h3>{board.name}</h3>
                                    <p>{board.description}</p>
                                </div>
                                <div className="row mt-3">
                                    <div className="col d-flex justify-content-start">
                                        <nav>
                                            <ul className="pagination mb-0">
                                                <li className="page-item active"><a className="page-link">1</a></li>
                                                <li className="page-item"><a className="page-link">2</a></li>
                                                <li className="page-item"><a className="page-link">3</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col d-flex justify-content-end">                                        
                                        <Link to={`/NewThread/${board.id}`} className="btn btn-success d-flex"><CreateIcon className="mr-1" /> Novo Tópico</Link>
                                    </div>
                                </div>
                                <ThreadList boardId={board.id} />
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        );
    }
}

export default ViewForum;