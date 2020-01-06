import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor, ContentState } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { debounce } from "lodash";
import PropTypes from 'prop-types';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


class RichTextEditor extends Component {
    static propTypes = {
        detail: PropTypes.string
    }
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty()
        }
        const detail = this.props.detail
        if (detail) {
            const contenBlock = htmlToDraft(detail)
            const contenState = ContentState.createFromBlockArray(contenBlock.contentBlocks)
            const editorState = EditorState.createWithContent(contenState)
            this.setState({
                editorState
            })
        }
    }

    getDetail = () => draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));

    uploadImageCallBack = (file) => {
        return new Promise(
            (resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', '/admin/img/upload');
                xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
                const data = new FormData();
                data.append('image', file);
                xhr.send(data);
                xhr.addEventListener('load', () => {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                });
                xhr.addEventListener('error', () => {
                    const error = JSON.parse(xhr.responseText);
                    reject(error);
                });
            }
        );
    }

    onEditorStateChange = debounce((editorState) => {
        this.setState({
            editorState,
        });
    }, 500)


    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    editorStyle={{ height: 200, border: '1px solid black', paddingLeft: 10 }}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                        image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true } },
                    }}
                />
            </div>
        );
    }
}

export default RichTextEditor;