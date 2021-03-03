import React from "react";
import Nav from './Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './About';
import Facts from "./Facts";
import Home from './Home'
import Example from './Example';

function App() {


  return (
    <Router>
       <div className="wrapper">
      <h1>Ace React App</h1>
      <Nav/>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about'>
          <About/>
      </Route>
      <Route path='/examples' component={Example}/>
      <Route path='/facts' component={Facts}/>
      </Switch>
      

    </div>
    </Router>
   
  );
}

export default App;
