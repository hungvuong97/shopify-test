import React from 'react';
import Selecttion from '../SpecificTab/Selection';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './createsharetab.css'
export default class CreateShareTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: {},
            typeText:''
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    type = ['Text', 'Page content', 'App intergration', 'HTML'];
    page = ['select']
    handleType = (e) => {
        this.setState({

        })
    }
    render() {
        const { contentState} = this.state;
        return (
            <div>
                <p>Title</p>
                <input type="text" />
                <br />
                <p>Type</p>
                <Selecttion data={this.type} handleValue={this.handleType}></Selecttion>
                <Editor
                    initialContentState={contentState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onContentStateChange={this.onContentStateChange}
                />
                <br />
                <p>Page</p>
                <Selecttion data={this.page}></Selecttion>
                <br />
                <div>
                    <p>Product Reviews</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider" />
                    </label>
                    <br />

                    <p>Stamped.io Reviews</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider" />
                    </label>
                    <br />

                    <p>Kiwi Size Chart</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider" />
                    </label>
                    <br />

                    <p>Product Reviews</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider" />
                    </label>
                    <br />

                    <p>Ultimate Size Chart</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider" />
                    </label>
                    <br />

                    <p>Loox Reviews</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider" />
                    </label>
                    <br />

                    <p>Judge.me Reviews</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider" />
                    </label>
                    <br />

                    <p>Recommendify</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider" />
                    </label>
                    <br />

                    <p>Yotpo Reviews</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider" />
                    </label>
                    <br />

                    <p>Yotpo Q&A</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider" />
                    </label>
                    <br />

                    <p>Use any app</p>
                    <p>Use an app that isn't listed above by pasting its code snippet into the box below</p>
                    <input type='text' />

                    <p>Content</p>
                    <input type="text" />

                    <p>Applies to</p>
                    <input type="radio" name="Apply" />
                    <label>All products</label>
                    <input type="radio" name="Apply" />
                    <label>Some products</label>
                    <br />
                    <p>Visibility</p>
                    <label>
                        <input type="checkbox" />
                    </label>
                    <br />

                    <p>Organization</p>
                    <p>label</p>
                    <input type="text" />

                    <p>Position</p>
                    <input type="number" id="quantity" name="quantity" min="1" max="99"></input>

                </div>

            </div>
        )
    }
}