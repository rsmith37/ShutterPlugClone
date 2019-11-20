import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import ProfileActions from '../layout/ProfileActions';
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    

    // const profilePicString = profile.profilePic.split('\\');
    // const profilePicPath = profilePicString[1];

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = (<div>
        <h2 className="lead text-white">Loading dashboard...</h2>
        </div>);
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        // Something is in this object aka they have a current profile
        dashboardContent = (
          <div>
            <p className="lead text-white">Welcome <Link to={`/profile/${profile.user._id}`}>{user.firstName} {user.lastName}</Link></p>
            {isEmpty(profile.profilePic) ? null : (
            <div className="img">
              <img className="mb-4" width="150px" src={`../../../../${profile.profilePic.replace(/\/\//g,'/')}`} alt="FILE NOT FOUND" srcset=""/>
              
            </div>)};
            <ProfileActions />
            <div style={{ marginBottom: '20px' }}></div>
            <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete Account</button>
          </div>
        )
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-white">Welcome {user.firstName}</p>
            <p className="lead text-white">You have not yet set up a profile, please add some info</p>
            <Link to="/profile/createArtist" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }}
    
    
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-white">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );}}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
