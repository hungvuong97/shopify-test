import React from 'react';
import { BrowserRouter as Route, Router, Link, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux'
// import SpecificTabs from './SpecificTabs/SpecificTabs'
import EditShareTab from './ProductPageTab/SharedTabs/EditShareTab'
import SpecificTabs from './ProductPageTab/SpecificTabs/SpecificTabs'
import CreatProduct from './ProductPageTab/SharedTabs/EditShareTab'
import configureStore from "./store";
const store = configureStore();
// import Admin from './Admin/Admin'
const history = createBrowserHistory();
function App() {
  return ( 
    <Provider store={store}>       
    <Router history={history}>
      <div>
        <h2>Apps</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/createProduct">create ProductPageTab</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about" exact>
            <EditShareTab />
          </Route>
          <Route path="/topics">
            <SpecificTabs />
          </Route>
          <Route path="/createProduct">
            <CreatProduct />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
