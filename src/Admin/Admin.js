import React from 'react';
import { BrowserRouter as Route, Router, Link, BrowserRouter, Switch } from 'react-router-dom'
import TabByStation from '../TabByStation/SpecificTab/SpecificTab'
export default class Admin extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Router >
                    <h3>Apps</h3>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <div>
                        <h5>Installed Apps</h5>
                        
                        {/* <Route path="#">Tab - Product page tabs</Route>
                        <Route path="#">Tabs by Station</Route> */}
                    </div>
                    <Switch>
                        <Route path="/" exact/>
                        <TabByStation></TabByStation>
                    </Switch>
                </Router>
            </BrowserRouter>
        )
    }
}