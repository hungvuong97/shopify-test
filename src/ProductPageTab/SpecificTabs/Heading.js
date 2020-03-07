import React from 'react';
import './index.css'
export default class Heading extends React.Component{
    render(){
        return (
            <div>
                <select id="mySelect">
                    <option>H1</option>
                    <option>H2</option>
                    <option>H3</option>
                    <option>H4</option>
                    <option>H5</option>
                    <option>H6</option>
                </select>
            </div>

        )
    }
}