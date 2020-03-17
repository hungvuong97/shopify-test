import React from 'react';
import Selecttion from '../SpecificTab/Selection';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './createsharetab.css'
import {actionSaveCreateTabStation} from '../../Action/tabByStation'
import {connect} from 'react-redux'
class CreateShareTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: {},
            title:'',
            typeText:'Text',
            content:'',
            applice:'',
            visibility:'',
            organization:'',
            position:'',
            isChecked: false
        }
    }

    onContentStateChange = (contentState) => {
        this.setState({
          contentState,
        });
      };
    type = ['Text', 'Page content', 'App intergration', 'HTML'];
    page = ['select']
    handleType = (data) => {
        this.setState({
            typeText: data
        })
    }
    handleTitle = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handlePage = (data) =>{
        this.setState({
            content: data
        })
    }
    handleHtml = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleApplice = (e) => {
        this.setState({
            applice: e.target.value
        })
    }

    handleVisibility = (e) => {
        if(!this.state.isChecked){
        this.setState({
            visibility: true,
            isChecked: true
        })
    }else{
        this.setState({
            visibility: false,
            isChecked: false
        })
    }
    }

    handleOrganization = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handlePosition = (e) => {
        this.setState({
            position: e.target.value
        })
    }
    saveAll = () => {
        let content = '';
        if(this.state.contentState !== undefined){
          content = this.state.contentState.blocks[0].text
        }else {
            content = this.state.content
        }
        const data = {
            title: this.state.title,
            typeText: this.state.typeText,
            content: content,
            applice: this.state.applice,
            visibility: this.state.visibility,
            organization: this.state.organization,
            position: this.state.position

        }
        console.log(data)
        this.props.actionSaveCreateTabStation(data)
    }
    render() {
        const { contentState, typeText,title, content} = this.state;
        return (
            <div>
                <p>Title</p>
                <input type="text" name='title' value={title} onChange={this.handleTitle}/>
                <br />
                <p>Type</p>
                <Selecttion data={this.type} handleValue={this.handleType}></Selecttion>
                {typeText === "Text"?  
                <Editor
                    initialContentState={contentState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onContentStateChange={this.onContentStateChange}
                />:''}
                
                {typeText === "Page content"?
                <div>
                  <p>Page</p>
                  <Selecttion data={this.page} handleValue={this.handlePage}></Selecttion>
                  </div>
                 :''}
              
                <br />
                {typeText === "App intergration"?<div>
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
                    </div>
                :''}
                
                    
                {typeText === "HTML"? 
                <div>
                    <p>Content</p>
                    <input type="text" name="content" value={content} onChange={this.handleHtml} />
                    </div>:''
                }
                    

                    <p>Applies to</p>
                    <input type="radio" 
                    name="Apply"
                    value="allProduct"
                    onChange={this.handleApplice}
                    checked={this.state.applice === 'allProduct'}
                    />
                    <label>All products</label>
                    <input type="radio" 
                    name="Apply"
                    value="someProduct"
                    onChange={this.handleApplice}
                    checked={this.state.applice === 'someProduct'} />
                    <label>Some products</label>
                    <br />
                    <p>Visibility</p>
                    <label>
                        <input type="checkbox" 
                        value= {this.state.visibility}
                        onChange={this.handleVisibility}
                        checked={this.state.isChecked}
                         />
                    </label>
                    <br />

                    <p>Organization</p>
                    <p>label</p>
                    <input type="text" name="organization" value={this.state.organization} onChange={this.handleOrganization} />

                    <p>Position</p>
                    <input type="number" name="quantity" min="1" max="99" value={this.state.position}  onChange={this.handlePosition}></input>
                    <br/>
                    <button onClick={this.saveAll}><span>Save</span></button>


            </div>
        )
    }
}

const mapStateToProps = state => ({
    productTab : state.productTab
})

export default connect(mapStateToProps, {actionSaveCreateTabStation})(CreateShareTab)