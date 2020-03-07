import React from 'react';
import Link from 'react-router-dom'
export default class Admin extends React.Component{
    render(){
        return (
            <div>
                <h3>Apps</h3>
                <div>
                    <h5>Installed Apps</h5>
                    <Link to="#">Easy Tabs - Products Tabs</Link>
                    <Link to="#">Tab - Product page tabs</Link>
                    <Link to="#">Tabs by Station</Link>
                </div>
            </div>
        )
    }
}