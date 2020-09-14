import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (

    <Router>
      <div className="container">
        <Navbar></Navbar>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin">
            admin...
          </Route>
          <Route path="/">
            inicio...
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
