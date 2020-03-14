import React from 'react';
import './selection.css'
export default class Selection extends React.Component {
    handleSelection =(e) => {
        this.props.chooseSelection(e.target.value)
    }
    render() {
        return (
            <div>
                <select classNae="mySelect" onChange={this.handleSelection}>
                    <option>Custom</option>
                    <option>Shopify reviews</option>
                    <option>YotPo reviews</option>
                    <option>Judge.me reviews</option>
                    <option>Loox reviews</option>
                    <option>Stamped.io reviews</option>
                    <option>Ali reviews</option>
                    <option>Tobi Facebook messenger discount box</option>
                </select>
            </div>
        )
    }
}