import React from 'react';
import Heading from './Heading'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { actionSaveActiveTab, actionSaveDefaultTab, actionSaveAllTab } from '../../Action/productPageTab';
// import {productPageTab} from '../../Action'
class SpecificTabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab: '',
            heading:'',
            defaultActiveTab:'',
            nameDefaultTab:'',
            showContent:''
        }
    }
    activeTab = {
        activeTab: 'active tab',
        deactiveTab: 'deactive tab',
        defaultActive: 'active',
        Inactive: 'Inactive'
    }

    changeActive = (e) => {
       this.setState({activeTab: e.target.value})
    }

    getHeading = (val) => {
        this.setState({heading: val})
    }
    handleDefaultActive = (e) => {
        this.setState({defaultActiveTab: e.target.value})
    }
    changeShowContent = (e) => {
        this.setState({showContent: e.target.value})
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveActiveTab = () => {
        // e.preventDefault();
        const data = {
            activeTab: this.state.activeTab,
            heading: this.state.heading
        }
        // console.log(data);
        // console.log(this.props.actionSaveActiveTab(data))
        this.props.actionSaveActiveTab(data);
        
    }
    saveDefaultTab = () => {
        const data = {
            defaultActiveTab: this.state.defaultActiveTab,
            nameDefaultTab: this.state.nameDefaultTab
        }
        this.props.actionSaveDefaultTab(data)
        
    }

    saveSpecificTab = () => {
        const data = {
            activeTab: this.state.activeTab,
            heading: this.state.heading,
            defaultActiveTab: this.state.defaultActiveTab,
            nameDefaultTab: this.state.nameDefaultTab,
            showContent: this.state.showContent
        }
        this.props.actionSaveAllTab(data)
    }
    render(){
        const {activeTab, defaultActiveTab, nameDefaultTab, showContent} = this.state
        return (
            <div>
                <p>Active tabs(single products and product groupd)</p>
                <input type="radio"  
                name="active" 
                value={this.activeTab.activeTab}
                onChange={this.changeActive}
                checked={activeTab === this.activeTab.activeTab}/>
                <label htmlFor="active tab">Activate tabs</label><br />
                <input type="radio"
                 name="active" 
                 value={this.activeTab.deactiveTab}
                 onChange={this.changeActive}
                 checked={activeTab === this.activeTab.deactiveTab}/>
                <label htmlFor="active tab">Deactivate tabs</label><br />
                <p>Choose headings to separate content into tabs.</p>

               <Heading getHeading={this.getHeading}></Heading>

               <button onClick={this.saveActiveTab}><span>Save changes</span></button>

               <p>Manage default tab description</p>
               <input type="radio" 
               name="defaultTab"
               value={this.activeTab.defaultActive}
               checked={defaultActiveTab === this.activeTab.defaultActive}
               onChange={this.handleDefaultActive}
               />
                <label >Active</label>
                <br />
                <input type="radio" 
                name="defaultTab"
                value={this.activeTab.Inactive}
                checked={defaultActiveTab === this.activeTab.Inactive}
                onChange={this.handleDefaultActive}/>
                <label >Inactive</label>
                <br />
                <p>Enter the name of your default tab</p>
                <input type="text" name="nameDefaultTab" value={this.state.nameDefaultTab} onChange={this.handleInput}></input>
                <br/>

                <button onClick={this.saveDefaultTab}><span>Save changes</span></button>

                <p>Use a heading to show content below the tabs</p>
                <input type="radio" 
                name="show content"
                value="turn_on_heading"
                onChange={this.changeShowContent}
                checked={showContent === "turn_on_heading"}/>/>
                <label >Turn on (with heading)</label><br />
                <input type="radio" 
                name="show content"
                value="turn_on_no_heading"
                onChange={this.changeShowContent}
                checked={showContent === "turn_on_no_heading"}/>
                <label >Turn on (no heading)</label><br />
                <input type="radio" 
                name="show content"
                value="turn_off"
                onChange={this.changeShowContent}
                checked={showContent === "turn_off"}/>
                <label >Turn off</label><br />

                <button onClick={this.saveSpecificTab}><span>Save</span></button>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    productTab : state.productTab
});

// const mapDispatchToProps = dispatch => bindActionCreators({
//     actionSaveActiveTab: productPageTab.actionSaveActiveTab
// }, dispatch)

export default connect(
    mapStateToProps,
    {actionSaveActiveTab, actionSaveDefaultTab, actionSaveAllTab}
  )(SpecificTabs);