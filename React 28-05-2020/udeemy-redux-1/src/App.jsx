import React from "react";
import Pokemones from "./components/Pokemones";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="container mt-3">
        <Navbar></Navbar>
        <Switch>
          <Route component={Pokemones} path="/" exact></Route>
          <Route component={Login} path="/login" exact></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
