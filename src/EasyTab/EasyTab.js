import React from 'react';
import Selection from '../TabByStation/SpecificTab/Selection'
import Link from 'react-router-dom'
export default class EasyTab extends React.Component{
    data = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5', 'Heading 6']
    render(){
        return(
            <div>
                <h4>Tag for Tab header</h4>
                <Selection data={this.heading}></Selection>
                <p>This heading  level will be considered as a content separator and tabs title</p>
                <input type="checkbox" name="Wrap"/>
                <label for="Wrap">Wrap text before the first heading tag into the tab</label>
                <br/>
                <h4>You have no Static tabs yet</h4>
                <Link to="#"><button>Add Static Tab</button></Link>
            </div>
        )
    }
}