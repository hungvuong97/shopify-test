import React from 'react';
import './selection.css'
export default class Selection extends React.Component {
    render() {
        return (
            <div>
                <select id="mySelect">
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