import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';

import './PostEditor.css';

export default class PostEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    }

    render() {

        const { editorState } = this.state;

        return (
            <Editor
                editorState={editorState}
                onEditorStateChange={this.onEditorStateChange}
            />
        )
    }
}