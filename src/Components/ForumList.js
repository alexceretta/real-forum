import React from 'react';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const styles = {

    commonIcon: {
        marginRight: 5
    },

    largeIcon: {
        width: 36,
        height: 36,
        marginRight: 5
    }

}

const ForumList = (props) => {

    const { isAuthenticated } = props.auth;

    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">O Fórum da Roomie</h1>
                    <p className="lead">Bem-vindos ao pior lugar da internet.</p>
                    {
                        !isAuthenticated() && (
                            <a className="btn btn-primary" href="#">Cadastre-se!</a>
                        )
                    }                    
                </div>		
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-white bg-success d-flex">
                                <VideogameAssetIcon style={styles.largeIcon} />
                                <h4 className="card-title mb-0">Joguinhos</h4>
                            </div>
                            <div className="card-body">
                                <p className="card-text lead">O lugar correto para discutir sobre seus joguinhos preferidos e brigar pra saber qual o melhor console.</p>							
                                <p className="card-text text-muted">
                                    <ScheduleIcon style={styles.commonIcon} />
                                    Último Tópico: <a href="#">[Oficial] The Messenger</a>, por <a href="#">Bluw</a>
                                </p>
                            </div>						
                            <div className="card-footer">
                                    <Link to={`/ViewForum/1`} className="btn btn-primary">Acessar</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-white bg-info d-flex">
                                <ChatBubbleOutlineIcon style={styles.largeIcon} />
                                <h4 className="card-title mb-0">Geral</h4>
                            </div>
                            <div className="card-body">
                                <p className="card-text lead">Para discutir tudo que não é relacionado a joguinhos, desde política a anime.</p>
                                <p className="card-text text-muted">
                                    <ScheduleIcon style={styles.commonIcon} />
                                    Último Tópico: <a href="#">Levante do Maduro</a>, por <a href="#">Granja</a>
                                </p>
                            </div>
                            <div className="card-footer">
                                    <a className="btn btn-primary" href="geral.html">Acessar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForumList;