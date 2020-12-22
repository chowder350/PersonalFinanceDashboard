
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AccountBalanceGraph from './Components/AccountBalanceGraph';
import Link from './Components/Link'
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
            <Switch>
              <Route exact path="/" component={Link}></Route>
              <Route exact path="/dashboard" component={Dashboard}></Route>
            </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
