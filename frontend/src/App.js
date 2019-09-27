import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import CreateArtistProfile from "./components/profiles/CreateArtistProfile";
import SearchArtist from "./components/search/SearchArtist";
import CreateClientProfile from "./components/profiles/CreateClientProfile";
import ArtistCard from "./components/profiles/ArtistCard";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/search" component={SearchArtist} />
            <Route exact path="/exampleSearch" component={ArtistCard} />
            <Route
              exact
              path="/profile/createClient"
              component={CreateClientProfile}
            />
            <Route
              exact
              path="/profile/createArtist"
              component={CreateArtistProfile}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
