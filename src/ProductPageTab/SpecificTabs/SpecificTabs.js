import React from 'react';
import Heading from './Heading'
export default class SpecificTabs extends React.Component{
    render(){
        return (
            <div>
                <p>Active tabs(single products and product groupd)</p>
                <input type="radio" id="male" name="gender" defaultValue="male" />
                <label htmlFor="male">Activate tabs</label><br />
                <input type="radio" id="female" name="gender" defaultValue="female" />
                <label htmlFor="female">Deactivate tabs</label><br />
                <p>Choose headings to separate content into tabs.</p>
               <Heading></Heading>
               <a href="#"><span>Save changes</span></a>
               <p>Manage default tab description</p>
               <input type="radio" id="male" name="gender" defaultValue="male" />
                <label htmlFor="male">Active</label><br />
                <input type="radio" id="female" name="gender" defaultValue="female" />
                <label htmlFor="female">Inactive</label><br />
                <p>Enter the name of your default tab</p>
                <input type="text" id="fname" name="fname"></input>
                <a href="#"><span>Save changes</span></a>
                <p>Use a heading to show content below the tabs</p>
                <input type="radio" id="male" name="gender" defaultValue="male" />
                <label htmlFor="male">Turn on (with heading)</label><br />
                <input type="radio" id="female" name="gender" defaultValue="female" />
                <label htmlFor="female">Turn on (no heading)</label><br />
                <input type="radio" id="female" name="gender" defaultValue="female" />
                <label htmlFor="female">Turn off</label><br />
            </div>
        )
    }
}