import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { loginUser, logoutUser } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const loginUser = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(loginUser);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="card mb-3">
        <h1 className="card-header">Sign In</h1>
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
              <div className="form-group col-md-12 m-auto">
                <input
                  type="submit"
                  value="Sign In"
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
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
  { loginUser }
)(Login);
// Second argument is an object where we map the actions (loginUser)
