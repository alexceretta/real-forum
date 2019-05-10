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

        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });

        this.props.onChange(this.editorValue());
    }

    editorValue() {
        return this.state.editorState.getCurrentContent();
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