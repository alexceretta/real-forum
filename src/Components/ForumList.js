import React from 'react';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'

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

const ForumList = () => {
    return (
        <div>
            <div class="jumbotron">
                <div class="container">
                    <h1 class="display-4">O Fórum da Roomie</h1>
                    <p class="lead">Bem-vindos ao pior lugar da internet.</p>
                    <a class="btn btn-primary" href="#">Cadastre-se!</a>
                </div>		
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-header text-white bg-success d-flex">
                                <VideogameAssetIcon style={styles.largeIcon} />
                                <h4 class="card-title mb-0">Joguinhos</h4>
                            </div>
                            <div class="card-body">
                                <p class="card-text lead">O lugar correto para discutir sobre seus joguinhos preferidos e brigar pra saber qual o melhor console.</p>							
                                <p class="card-text text-muted">
                                    <ScheduleIcon style={styles.commonIcon} />
                                    Último Tópico: <a href="#">[Oficial] The Messenger</a>, por <a href="#">Bluw</a>
                                </p>
                            </div>						
                            <div class="card-footer">
                                    <a class="btn btn-primary" href="joguinhos.html">Acessar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header text-white bg-info d-flex">
                                <ChatBubbleOutlineIcon style={styles.largeIcon} />
                                <h4 class="card-title mb-0">Geral</h4>
                            </div>
                            <div class="card-body">
                                <p class="card-text lead">Para discutir tudo que não é relacionado a joguinhos, desde política a anime.</p>
                                <p class="card-text text-muted">
                                    <ScheduleIcon style={styles.commonIcon} />
                                    Último Tópico: <a href="#">Levante do Maduro</a>, por <a href="#">Granja</a>
                                </p>
                            </div>
                            <div class="card-footer">
                                    <a class="btn btn-primary" href="geral.html">Acessar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForumList;