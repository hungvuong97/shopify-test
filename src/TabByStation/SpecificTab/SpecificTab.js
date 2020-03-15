import React from 'react';
import './specifictab.css'
import Selection from './Selection'
import { connect } from "react-redux";
import {actionSaveProductDescription} from '../../Action/tabByStation'
class SpecificTab extends React.Component {
    constructor(){
        super();
        this.state = {
            desTabTitle:'',
            headingTypeSeparation:'',
            headingTypeStopping:'',
            showHeading:'',
            contentFormat:''
        }
    }
    heading = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
    contentFormat = ['Off', 'Low', 'Medium', 'High'];

    handleDesTab = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleHeadingTypeSeparation = (data) => {
        this.setState({
            headingTypeSeparation: data
        })
    }
    handleHeadingTypeStopping = (data) => {
        this.setState({
            headingTypeStopping: data
        })
    }

    handleContenteFormat = (data) => {
        this.setState({
            contentFormat: data
        })
    }

    saveSpecificTab = () => {
        const data = {
            desTabTitle: this.state.desTabTitle,
            headingTypeSeparation: this.state.headingTypeSeparation,
            headingTypeStopping: this.state.headingTypeStopping,
            contentFormat: this.state.contentFormat
        }
        // console.log(data, this.props)
        this.props.actionSaveProductDescription(data)
    }
     render() {
        return (
            <div>
                <p>Create a tab for the description</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider" />
                </label>
                <p>Description tab tile</p>
                <input type="text"
                name='desTabTitle'
                value={this.state.desTabTitle}
                onChange={this.handleDesTab}
                />
                <p>Use headings to separate content into tabs</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider" />
                </label>
                <p>Heading type</p>
                <Selection data={this.heading} handleValue={this.handleHeadingTypeSeparation}></Selection>
                <p>Use a heading to stop making tabs and continue the description</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider" />
                </label>
                <p>Heading type</p>
                <Selection data={this.heading} handleValue={this.handleHeadingTypeStopping}></Selection>
                <p>All content after the last occurrance of this heading type will be shown below the tabs</p>
                <input type="checkbox"
                 className="heading" 
                 name="heading"
                 />
                <label>Show the heading</label><br />
                <p>Content formating level</p>
                <Selection data= {this.contentFormat} handleValue={this.handleContenteFormat}></Selection>

                <button onClick={this.saveSpecificTab}><span>Save</span></button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    productTab : state.productTab
});

export default connect(mapStateToProps, {actionSaveProductDescription})(SpecificTab)