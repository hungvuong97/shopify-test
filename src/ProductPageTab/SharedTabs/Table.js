import React from 'react';
import './table.css'
export default class Table extends React.Component {
    render() {
        return (
            <div>
                <table className="tab">
                    <tbody><tr>
                        <th>tab</th>
                        <th>Edit</th>
                    </tr>
                    </tbody></table>
            </div>
        )
    }
}