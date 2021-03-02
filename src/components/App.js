import React from "react";
import Nav from './Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from "./About";
import Facts from "./Facts";
import Home from './Home'


function App() {


  return (
    <Router>
       <div className="wrapper">
      <h1>Ace React App</h1>
      <Nav/>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/facts' component={Facts}/>
      </Switch>
      
    </div>
    </Router>
   
  );
}

export default App;
