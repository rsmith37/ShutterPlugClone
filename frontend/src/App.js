import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import CreateProfile from './components/profiles/CreateProfile';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/search" />
            <Route exact path="/profile/create" component={CreateProfile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
