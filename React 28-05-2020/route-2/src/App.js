import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import User from './components/User';


function App() {
  return (
    <Router>
        <div className="container">
          <div className="btn-group">
             <Link to="/" className="btn btn-dark mt-5">
               Inicio
             </Link>
             <Link to="/nosotros" className="btn btn-dark mt-5">
               Nosotros
             </Link>
             {/* Ayuda a darle una pista al usuario resaltando el color de link donde esta posicionado */}
             <NavLink to="/contacto" className="btn btn-dark mt-5" activeClassName="active">
               Contacto
             </NavLink>
            </div>    
          <hr />
          <Switch>
            {/*  ir desde lo mas especifico a lo más general. De lo contrario usar exact*/}
            <Route path="/nosotros/:id">
               <User />             
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/nosotros">
              <Nosotros />
            </Route>
            <Route path="/" exact>
              <Inicio />
            </Route>
          </Switch>
        </div>
    </Router>
  
  );
}

export default App;
