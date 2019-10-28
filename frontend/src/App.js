import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";
import CreateArtistProfile from "./components/profiles/CreateArtistProfile";
import SearchArtist from "./components/search/SearchArtist";
import ArtistCard from "./components/profiles/ArtistCard";
import Register from "./components/profiles/Register";
import Login from "./components/profiles/Login";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
<<<<<<< HEAD
import Dashboard from "./components/layout/Dashboard";
import PrivateRoute from "./components/common/PrivateRoute";
import ContactUs from "./components/layout/ContactUs";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token to get user information and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current profile
    // Redirect to login
    window.location.href = "/login";
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/search" component={SearchArtist} />
              <Route exact path="/exampleSearch" component={ArtistCard} />
              <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
              <Switch>
              <PrivateRoute
                exact
                path="/profile/createArtist"
                component={CreateArtistProfile}
              />
              </Switch>
              <Route exact path="/contactUs" component={ContactUs} />              
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
