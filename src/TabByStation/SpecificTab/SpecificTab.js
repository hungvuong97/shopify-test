import React from 'react';
import './specifictab.css'
import Selection from './Selection'
export default class SpecificTab extends React.Component {
    heading = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
    contentFormat = ['Off', 'Low', 'Medium', 'High'];
    render() {
        return (
            <div>
                <p>Create a tab for the description</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider" />
                </label>
                <p>Description tab tile</p>
                <input type="text" />
                <p>Use headings to separate content into tabs</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider" />
                </label>
                <p>Heading type</p>
                <Selection data={this.heading}></Selection>
                <p>Use a heading to stop making tabs and continue the description</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider" />
                </label>
                <p>Heading type</p>
                <Selection data={this.heading}></Selection>
                <p>All content after the last occurrance of this heading type will be shown below the tabs</p>
                <input type="checkbox" className="heading" name="heading"/>
                <label>Show the heading</label><br />
                <p>Content formating level</p>
                <Selection data= {this.contentFormat}></Selection>
            </div>
        )
    }
}