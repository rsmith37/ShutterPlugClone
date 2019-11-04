import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
        <div>{isEmpty(profile.user) ? null : (<section className="search-result-item">
              <div className="search-result-item-body">
                <div className="row">
                  <div className="col-sm-9">
                    <h4 className="artistName mt-2 mb-1">{profile.firstName} {profile.lastName}</h4>
                    <p className="locationInfo text-muted font-italic mb-1">{profile.city}, {profile.state} {profile.zip}</p>
                    {isEmpty(profile.selectedSpecializations) ? null : (profile.selectedSpecializations.map((specialization, index) => (
                <span key={index} className="badge badge-pill badge-primary mr-1 mb-2">{specialization}</span>)))}
                {isEmpty(profile.selectedCertifications) ? null : (profile.selectedCertifications.map((certification, index) => (
                <span key={index} className="badge badge-pill badge-primary mr-1 mb-2">{certification}</span>)))}
                  </div>
                  <div className="col-sm-3 text-align-center mt-2">
                  <Link to={`/profile/${profile.user._id}`} className="btn btn-primary btn-info btn-lg">
                      View Profile</Link>
                    <div className="social-btns text-center align-self-end ml-auto">
                          {isEmpty(profile.website) ? null : (
                  <a
                    className="text-black p-2"
                    href={profile.website}
                    target="_blank"
                  >
                    <i className="fas fa-globe fa-lg mt-4"></i>
                  </a>
                )}
                      {isEmpty(profile.socialMedia && profile.socialMedia.instagram) ? null : (
                  <a
                    className="text-black p-2"
                    href={profile.socialMedia.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                )}
                      {isEmpty(profile.socialMedia && profile.socialMedia.facebook) ? null : (
                  <a
                    className="text-black p-2"
                    href={profile.socialMedia.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-lg"></i>
                  </a>
                )}
                      {isEmpty(profile.socialMedia && profile.socialMedia.twitter) ? null : (
                  <a
                    className="text-black p-2"
                    href={profile.socialMedia.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
    )
  }</div>);
}}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
