import React from 'react';
import Selection from './Selection'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export default class EditShareTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <p>Name your new shared tab</p>
                <input type="text"></input>
                <p>Choose tab type</p>
                <Selection></Selection>
                <br/>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}  
                />
                <br/>
                <p>Applices to</p>
                <input type="radio" id="female" name="gender" defaultValue="female" />
                <label htmlFor="female">All products</label><br />
                <input type="radio" id="female" name="gender" defaultValue="female" />
                <label htmlFor="female">Some products</label><br />
                <p>Visibility</p>
                <input type="radio" id="female" name="gender1"  />
                <label htmlFor="female">Published</label><br />
                <input type="radio" id="female" name="gender1"  />
                <label htmlFor="female">Draft</label><br />
            </div>
        )
    }
}