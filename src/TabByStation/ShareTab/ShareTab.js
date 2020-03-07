import React from 'react';
import { Link } from 'react-router-dom'
export default class ShareTab extends React.Component{
    render(){
        return (
            <div>
                <h4>Shared Tab</h4>
                <Link to="#"><buton></buton></Link>
                <input type="text"/>
            </div>
        )
    }
}