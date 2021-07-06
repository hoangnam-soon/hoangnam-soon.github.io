

import React from "react";
import Home from './screens/Home'
import Store from './screens/Store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

return (
  <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path ="/store">
          <Store/>
        </Route>

      </Switch>
  </Router>
);
}

export default App;


