import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import { getProfileByUserId } from "../../actions/profileActions";
import isEmpty from '../../validation/is-empty';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.userId) {
      this.props.getProfileByUserId(this.props.match.params.userId);
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-light mb-3 float-left">
                Back To Profiles
              </Link>
            </div>
            <div className="col-md-6"></div>
          <div className="card card-body bg-light mb-3">
          <h1 className="text-center text-info">{profile.firstName} {profile.lastName}</h1>
            <hr />
            <h3 className="text-center text-info">Location:</h3>
            <p className="lead">
                <span>{profile.city}, {profile.state}, {profile.zip}</span>
            </p>
            <hr />
            <h3 className="text-center text-info">About Me:</h3>
            <p className="lead">
              {isEmpty(profile.bio) ? (
                <span>{profile.firstName} does not have a bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <hr />
            {(isEmpty(profile.selectedCertifications) || !isEmpty(profile.selectedSpecializations)) ? null : (<h3 className="text-center text-info">Certifications and Specializations</h3>)}
              {isEmpty(profile.selectedCertifications) ? null : (<h4 className="text-center text-info">Certifications</h4>)}
              <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
              {isEmpty(profile.selectedCertifications) ? null : (profile.selectedCertifications.map((certification, index) => (
                <span key={index} className="badge badge-pill badge-warning mr-1 mb-2">{certification}</span>)))}
              </div>
            </div>
              {isEmpty(profile.selectedCertifications) ? null : (<h4 className="text-center text-info">Specializations</h4>)}
              <div className="row">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              {isEmpty(profile.selectedCertifications) ? null : (profile.selectedCertifications.map((certification, index) => (
                <span key={index} className="badge badge-pill badge-warning mr-1 mb-2">{certification}</span>)))}
              </div>
            </div>
            <h3 className="text-center text-info">Social Media:</h3>
            <div className="social-btns text-center align-self-center">
                          {isEmpty(profile.website) ? null : (
                  <a
                    className="text-black p-2"
                    href={profile.website}
                    target="_blank"
                  >
                    <i className="fas fa-globe fa-2x mt-4"></i>
                  </a>
                )}
                      {isEmpty(profile.socialMedia && profile.socialMedia.instagram) ? null : (
                  <a
                    className="text-black p-2"
                    href={profile.socialMedia.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                )}
                      {isEmpty(profile.socialMedia && profile.socialMedia.facebook) ? null : (
                  <a
                    className="text-black p-2"
                    href={profile.socialMedia.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                )}
                      {isEmpty(profile.socialMedia && profile.socialMedia.twitter) ? null : (
                  <a
                    className="text-black p-2"
                    href={profile.socialMedia.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                )}
                    </div>
          </div>
          </div>
          </div>
      );
    }
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByUserId: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByUserId }
)(Profile);
