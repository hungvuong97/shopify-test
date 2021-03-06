import React from 'react';
import './selection.css'
export default class Selection extends React.Component {

    Option = () => {
        const { data } = this.props
        let option = [];
        let select = [];
        for (let val of data) {
            option.push(<option>{val}</option>)
        }
        select.push(<select className="mySelect" onChange={this.onChange}>{option}</select>)
        return select
    }

    onChange = (e) => {
        this.props.handleValue(e.target.value)
    }
    render() {
        return (
            <div>
                {this.Option()}
            </div>
        )
    }
}