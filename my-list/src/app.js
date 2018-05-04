import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signup from './signup.js';
import Login from './login.js';

class App extends Component {
   render() {
      return (
         <Router>
  
               <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/Signup' component={Signup} />
               </Switch>
         </Router>
      );
   }
}
export default App;