import React from 'react';
import './index.css'
export default class Heading extends React.Component{
    handleSelection = (e) => {
        this.props.getHeading(e.target.value)
    }
    render(){
        return (
            <div>
                <select className="mySelect" onChange={this.handleSelection} >
                    <option value='H1'>H1</option>
                    <option value='H2'>H2</option>
                    <option value='H3'>H3</option>
                    <option value='H4'>H4</option>
                    <option value='H5'>H5</option>
                    <option value='H6'>H6</option>
                </select>
            </div>

        )
    }
}