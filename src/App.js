import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainUsersPage from './pages/MainUsersPage'
import HeaderAppBar from './components/HeaderAppBar'
import UserDetails from './components/UserDetails.jsx'

function App() {
  return (
    <Router>
      <HeaderAppBar/>
      <Switch>
        <Route exact path="/" component={MainUsersPage}/>
        <Route path="/user-details/:id" component={UserDetails}/>
      </Switch>
    </Router>
  );
}

export default App;
