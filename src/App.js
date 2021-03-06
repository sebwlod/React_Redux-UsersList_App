import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainUsersPage from './pages/MainUsersPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainUsersPage}/>
      </Switch>
    </Router>
  );
}

export default App;
