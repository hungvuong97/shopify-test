import React from 'react';
import Selection from './Selection'
import { Editor } from 'react-draft-wysiwyg';
import { connect } from "react-redux";
import {actionSaveCreateTab} from '../../Action/productPageTab'
// import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
 class EditShareTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: {},
            nameShareTab:'',
            tabType: '',
            applice:'',
              visibility:''

        }
    }

    onContentStateChange = (contentState) => {
        this.setState({
          contentState,
         
        });
      };
      chooseSelection = (data) => {
          this.setState({tabType: data});
      }
      handleNameTab = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
      handleApplice = (e) => {
          this.setState({applice: e.target.value})
      }
      handleVisibility = (e) => {
        this.setState({visibility: e.target.value})
      }
      saveAll = () => {
            let paragraph = ''
          const {nameShareTab,tabType,applice,visibility, contentState} = this.state;
          if(contentState === undefined){
              paragraph = ''
          }else {
             paragraph = contentState.blocks[0].text;
          }
          const data = {
            nameShareTab: nameShareTab,
            tabType: tabType,
            paragraph: paragraph,
            applice:applice,
            visibility:visibility
          }
          this.props.actionSaveCreateTab(data)

      }
    render() {
        const { contentState, applice, visibility } = this.state;
        if(contentState !== undefined){
            console.log(contentState.blocks[0].text)
        }
        return (
            <div>
                <p>Name your new shared tab</p>
                <input type="text"
                name="nameShareTab"
                value={this.state.nameShareTab}
                onchange={this.handleNameTab}
                ></input>
                <p>Choose tab type</p>
                <Selection chooseSelection={this.chooseSelection}></Selection>
                <br/>
                <Editor
                    initialContentState={contentState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onContentStateChange={this.onContentStateChange}
                />
                <br/>
                <p>Applices to</p>
                <input type="radio"  
                name="applice"
                value="allProduct"
                checked={applice === "allProduct"}
                onChange={this.handleApplice}  
                />
                <label>All products</label><br />
                <input type="radio"
                  name="applice"
                  value="someProduct"
                  checked={applice === "someProduct"}
                  onChange={this.handleApplice}  />
                <label>Some products</label><br />
                <p>Visibility</p>
                <input type="radio"  
                name="visibility"  
                value="published"
                checked={visibility === "someProduct"}
                onChange={this.handleVisibility}  />
                <label >Published</label><br />
                <input type="radio"  
                name="visibility"
                value="draft"
                checked={visibility === "someProduct"}
                onChange={this.handleVisibility}    />
                <label >Draft</label><br />

                <button onClick={this.saveAll}><span>Save</span></button>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    productTab : state.productTab
});

export default connect(mapStateToProps, {actionSaveCreateTab})(EditShareTab)