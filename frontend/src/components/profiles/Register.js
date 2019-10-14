import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      usertype: "client",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    // This sets the state for whatever input field the user is currently typing in
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      usertype: this.state.usertype,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="card mb-3">
        <h1 className="card-header">Create User</h1>
        <div className="card-body text-center">
          <form noValidate onSubmit={this.onSubmit}>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6 m-auto">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Email Address</label>
                </div>
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email
                  })}
                  name="email"
                  placeholder="Please enter your email address"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6 m-auto">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Username</label>
                </div>
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.username
                  })}
                  name="username"
                  placeholder="Please choose a username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6 m-auto">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Password</label>
                </div>
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password
                  })}
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6 m-auto">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Confirm password:</label>
                </div>
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password2
                  })}
                  name="password2"
                  placeholder="Confirm password"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
                {errors.password2 && (
                  <div className="invalid-feedback">{errors.password2}</div>
                )}
              </div>
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6 m-auto">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">First Name</label>
                </div>
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.firstName
                  })}
                  name="firstName"
                  placeholder="Please enter your first name"
                  value={this.state.firstName}
                  onChange={this.onChange}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6 m-auto">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Last Name</label>
                </div>
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.lastName
                  })}
                  name="lastName"
                  placeholder="Please enter your last name"
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6 m-auto">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">User type: Client or Artist?</label>
                </div>
                <select
                  className="form-control"
                  name="usertype"
                  // value={this.state.usertype}
                  onChange={this.onChange}
                  placeholder="Are you a Client or Artist?"
                >
                  <option value="client">Client</option>
                  <option value="artist">Artist</option>
                </select>
              </div>
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-12 m-auto">
                <input
                  type="submit"
                  value="Create New User"
                  className="btn btn-secondary text-uppercase font-weight-bold"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
  // Putting auth state into a property called auth, so it can be accessed from "this.props.auth"
  // "auth" comes from the rootReducer's 'auth' - index.js
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
// Second argument is an object where we map the actions (registerUser)
