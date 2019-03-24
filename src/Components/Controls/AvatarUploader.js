import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';

import styles from './AvatarUploader.module.css';

class AvatarUploader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: props.defaultImage
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            image: URL.createObjectURL(event.target.files[0])
        });
    }

    render() {
        return (
            <div class={styles.avatarContainer}>
                <div className={styles.avatarUpload}>
                    <div className={styles.avatarEdit}>
                        <input type="file" onChange={this.handleChange} accept=".png, .jpeg, .jpg" id="uploadButton" />
                        <label for="uploadButton"><EditIcon className={styles.editIcon} /></label>
                    </div>
                    <div className={styles.avatarPreview}>                    
                        <img src={this.state.image} alt="Avatar do Usuário" />
                    </div>                
                </div>
            </div>
        );
    }
}

export default AvatarUploader;