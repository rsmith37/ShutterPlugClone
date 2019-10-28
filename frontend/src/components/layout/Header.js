import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

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
          <Link to="/dashboard" className="nav-link">
            <button className="btn btn-secondary btn-lg">
              My Account
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
        <nav className="navbar navbar-expand-lg navbar-dark mb-3 py-0">
          <div className="container-fluid">
            <div className="img-responsive">
              <img
                className="sPLogo rounded "
                src={require("../../assets/shutter_plug_logo.png")}
                alt="Shutter Plug Logo"
              />
            </div>
            <Link to="/" className="navbar-brand">
              <h1 className="text-white">Shutter Plug</h1>
            </Link>
            {/* Button for toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
              aria-controls="mobile-nav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon" />
            </button>

            {/* Below div will be included in toggled menu */}
            <div className="collapse navbar-collapse" id="mobile-nav">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      // </div>
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
