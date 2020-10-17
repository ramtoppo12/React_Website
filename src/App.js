import React from 'react';
import './App.css';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Contact from "./Contact"

import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Home 
      img="assets/img/navbar-logo.svg"/> 
      <Switch>
        <Route path="/about">
      <About />
        </Route>  
        <Route path="/services">
      <Service />
        </Route>  
        <Route path="/portfolio">
      <Portfolio />
        </Route> 
        <Route path="/team">
      <Team />
        </Route>   
        <Route path="/contact">
      <Contact />
        </Route> 
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
