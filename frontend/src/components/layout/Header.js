import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./CustomHome.css";
         
class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/profile/createArtist" className="nav-link">
            <button className="btn btn-secondary btn-lg">
              Create Artist Profile
            </button>
          </Link>
        </li>
        <li className="nav-link">
          <button
            className="btn btn-secondary btn-lg"
            onClick={this.onLogoutClick.bind(this)}
          >
            Logout: {user.firstName} {user.lastName}
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            <button className="btn btn-secondary btn-lg">Sign Up</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <button className="btn btn-secondary btn-lg">Sign In</button>
          </Link>
        </li>
      </ul>
    );

    return (
      <div style={{ backgroundColor: "black" }}>
        <nav className="navbar sticky-top navbar-expand-sm mb-3 py-0">
          <div className="container-fluid">
            <div className="img-responsive">
              <img
                className="sPLogo rounded"
                src={require("../../assets/shutter_plug_logo.png")}
                alt="Shutter Plug Logo"
              />
            </div>
            <div>
              <h1 className="text-white">Shutter Plug</h1>
            </div>  
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <button className="btn btn-secondary btn-lg">Home</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Search" className="nav-link">
                    <button className="btn btn-secondary btn-lg">Search</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/exampleSearch" className="nav-link">
                    <button className="btn btn-secondary btn-lg">
                      Example Search Results
                    </button>
                  </Link>
                </li>
                {isAuthenticated ? authLinks : guestLinks}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
