import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import CreateProfile from './components/profiles/CreateProfile';
import SearchArtist from './components/search/SearchArtist'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/search" component={SearchArtist}/>
            <Route exact path="/profile/create" component={CreateProfile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
