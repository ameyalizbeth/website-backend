import logo from './logo.svg';
import './App.css';
import React from'react' ;
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect} from "react-router-dom";
import Error from './components/error';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';


function App() {
  return (
    <div >
      <Router>
          <Switch>
          
          <Route path="/" exact component={() => <Login />} />
          <Route path="/signup" exact component={() => <Signup />} />
          <Route path="/:username/page" exact component={() => <Dashboard />} />
         





          <Route   component={ Error } />
          
          </Switch>
            
        </Router>
      
    </div>
  );
}

export default App;
