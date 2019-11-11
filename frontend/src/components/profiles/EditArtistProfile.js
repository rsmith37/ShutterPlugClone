import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import classnames from "classnames";
import isEmpty from '../../validation/is-empty';

class EditArtistProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSpecializations: null,
      selectedDistance: null,
      selectedCertifications: null,
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      zip: "",
      phoneNumber: "",
      radius: "",
      specialization: "",
      experience: "",
      certifications: "",
      bio: "",
      instagram: "",
      facebook: "",
      twitter: "",
      website: "",
      certificationArray: [
        {
          value: "Color Photography Certification",
          label: "Color Photography Certification"
        },
        {
          value: "Commercial Photography Certification",
          label: "Commercial Photography Certification"
        },
        {
          value: "Digital Editing Certification",
          label: "Digital Editing Certification"
        },
        {
          value: "Digital Imaging Certification",
          label: "Digital Imaging Certification"
        },
        {
          value: "Master Artist",
          label: "Master Artist"
        },
        {
          value: "Master of Photography",
          label: "Master of Photography"
        },
        {
          value: "Master of Wedding Photography",
          label: "Master of Wedding Photography"
        },
        {
          value: "Photographic Craftsman",
          label: "Photographic Craftsman"
        },
        {
          value: "Portraiture",
          label: "Portraiture"
        },
        {
          value: "Studio Lighting",
          label: "Studio Lighting"
        }
      ],
      specializationArray: [
        {
          value: "Architecture",
          label: "Architecture"
        },
        {
          value: "Automotive",
          label: "Automotive"
        },
        {
          value: "Baby Portraits",
          label: "Baby Portraits"
        },
        {
          value: "Bachelor Parties",
          label: "Bachelor Parties"
        },
        {
          value: "Drone",
          label: "Drone"
        },
        {
          value: "Engagement",
          label: "Engagement"
        },
        {
          value: "Family",
          label: "Family"
        },
        {
          value: "Fashion",
          label: "Fashion"
        },
        {
          value: "Food",
          label: "Food"
        },
        {
          value: "Nature / Outside",
          label: "Nature / Outside"
        },
        {
          value: "Parties",
          label: "Parties"
        },
        {
          value: "Pet",
          label: "Pet"
        },
        {
          value: "Photo Editing",
          label: "Photo Editing"
        },
        {
          value: "Photo Restoration",
          label: "Photo Restoration"
        },
        {
          value: "Product Photography",
          label: "Product Photography"
        },
        {
          value: "Prom",
          label: "Prom"
        },
        {
          value: "Red Carpet",
          label: "Red Carpet"
        },
        {
          value: "Reunions",
          label: "Reunions"
        },
        {
          value: "Sports",
          label: "Sports"
        },
        {
          value: "Stock",
          label: "Stock"
        },
        {
          value: "Studio",
          label: "Studio"
        },
        {
          value: "Video Blogging",
          label: "Video Blogging"
        },
        {
          value: "Video Editing",
          label: "Video Editing"
        },
        {
          value: "Videography",
          label: "Videography"
        },
        {
          value: "Web Content",
          label: "Web Content"
        },
        {
          value: "Wedding",
          label: "Wedding"
        }
      ],
      distanceArray: [
        {
          value: "0 miles",
          label: "0 miles"
        },
        {
          value: "5 miles",
          label: "5 miles"
        },
        {
          value: "10 miles",
          label: "10 miles"
        },
        {
          value: "25 miles",
          label: "25 miles"
        },
        {
          value: "50 miles",
          label: "50 miles"
        },
        {
          value: "100 miles",
          label: "100 miles"
        }
      ],
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;
      profile.firstName = !isEmpty(profile.firstName) ? profile.firstName : "";
      profile.lastName = !isEmpty(profile.lastName) ? profile.lastName : "";
      profile.city = !isEmpty(profile.city) ? profile.city : "";
      profile.state = !isEmpty(profile.state) ? profile.state : "";
      profile.zip = !isEmpty(profile.zip) ? profile.zip : "";
      profile.phoneNumber = !isEmpty(profile.phoneNumber) ? profile.phoneNumber : "";
      profile.radius = !isEmpty(profile.radius) ? profile.radius : "";
      profile.experience = !isEmpty(profile.experience) ? profile.experience : "";
      profile.selectedCertifications = (!isEmpty(profile.selectedCertifications) || profile.selectedCertifications[0] == null) ? profile.selectedCertifications : [];
      profile.selectedSpecializations = (!isEmpty(profile.selectedSpecializations) || profile.selectedSpecializations[0] == null) ? profile.selectedSpecializations : [];
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.website = !isEmpty(profile.website) ? profile.website : "";
      profile.socialMedia = !isEmpty(profile.socialMedia) ? profile.socialMedia : {};
      profile.facebook = !isEmpty(profile.socialMedia.facebook)
        ? profile.socialMedia.facebook
        : "";
        profile.instagram = !isEmpty(profile.socialMedia.instagram)
        ? profile.socialMedia.instagram
        : "";
        profile.twitter = !isEmpty(profile.socialMedia.twitter)
        ? profile.socialMedia.twitter
        : "";

        this.setState({
          firstName: profile.firstName,
          lastName: profile.lastName,
          city: profile.city,
          state: profile.state,
          zip: profile.zip,
          phoneNumber: profile.phoneNumber,
          // radius: profile.radius,
          // experience: profile.experience,
          selectedCertifications: !isEmpty(profile.selectedCertifications) ? profile.selectedCertifications : [],
          selectedSpecializations: !isEmpty(profile.selectedSpecializations) ? profile.selectedSpecializations : [],
          bio: profile.bio,
          website: profile.website,
          facebook: profile.socialMedia.facebook,
          instagram: profile.socialMedia.instagram,
          twitter: profile.socialMedia.twitter
        });

    };
  };

  onChange(e) {
    // This sets the state for whatever input field the user is currently typing in
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelectChange = name => selectedOption =>
    this.setState({ [name]: selectedOption });

  onSubmit(e) {
    e.preventDefault();
    const profileData = {
      selectedSpecializations: this.state.selectedSpecializations,
      selectedDistance: this.state.selectedDistance,
      selectedCertifications: this.state.selectedCertifications,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phoneNumber: this.state.phoneNumber,
      radius: this.state.radius,
      specialization: this.state.specialization,
      experience: this.state.experience,
      certifications: this.state.certifications,
      bio: this.state.bio,
      instagram: this.state.instagram,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      website: this.state.website
    };
    this.props.createProfile(profileData, this.props.history);
  }

  render() {
    const { selectedSpecializations } = this.state;
    const { selectedDistance } = this.state;
    const { selectedCertifications } = this.state;
    const { errors } = this.state;
    return (
      <div className="card mb-3">
        <h1 className="card-header">Edit Artist Profile</h1>
        <div className="card-body text-left">
          <form onSubmit={this.onSubmit}>
            <h3>Artist Info:</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">First Name</label>
                </div>
                <input
                  type="text"
                  className={classnames("form-control", {
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
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Last Name</label>
                </div>
                <input
                  name="lastName"
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.lastName
                  })}
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
              <div className="form-group col-md-4">
                <div className="form-row">
                  <i className="fas fa-map-marked px-2"></i>
                  <label htmlFor="">City</label>
                </div>
                <input
                  type="text"
                  name="city"
                  className={classnames("form-control", {
                    "is-invalid": errors.city
                  })}
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.onChange}
                />
                {errors.city && (
                  <div className="invalid-feedback">{errors.city}</div>
                )}
              </div>
              <div className="form-group col-md-4">
                <div className="form-row">
                  <i className="fas fa-map-marked px-2"></i>
                  <label htmlFor="">State</label>
                </div>
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.state
                  })}
                  name="state"
                  placeholder="State"
                  value={this.state.state}
                  onChange={this.onChange}
                />
                {errors.state && (
                  <div className="invalid-feedback">{errors.state}</div>
                )}
              </div>
              <div className="form-group col-md-4">
                <div className="form-row">
                  <i className="fas fa-map-marked px-2"></i>
                  <label htmlFor="">Zip Code</label>
                </div>
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.zip
                  })}
                  name="zip"
                  placeholder="Enter zip code"
                  value={this.state.zip}
                  onChange={this.onChange}
                />
                {errors.zip && (
                  <div className="invalid-feedback">{errors.zip}</div>
                )}
              </div>
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="fas fa-map-marked px-2"></i>
                  <label htmlFor="">Phone Number</label>
                </div>
                <input
                  type="text"
                  name="phoneNumber"
                  className={classnames("form-control", {
                    "is-invalid": errors.phoneNumber
                  })}
                  placeholder="Phone number"
                  value={this.state.phoneNumber}
                  onChange={this.onChange}
                />
                {errors.phoneNumber && (
                  <div className="invalid-feedback">{errors.phoneNumber}</div>
                )}
              </div>
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="fas fa-car px-2"></i>
                  <label htmlFor="">Distance willing to travel</label>
                </div>
                <Select
                  placeholder="Distance (Miles)"
                  className="basic-select"
                  isSearchable
                  name="selectedDistance"
                  value={this.state.selectedDistance}
                  onChange={this.handleSelectChange("selectedDistance")}
                  options={this.state.distanceArray}
                />
                {errors.distance && (
                  <div className="invalid-feedback">{errors.distance}</div>
                )}
              </div>
            </div>

            <br />
            <h3>Certifications, Specializations, Biography:</h3>
            <div className="form-group">
              <div className="form-row">
                <i className="fas fa-camera px-2"></i>
                <label htmlFor="">Certification(s)</label>
              </div>
              <Select
                placeholder="Select one or more..."
                name="selectedCertifications"
                className="basic-multi-select"
                isMulti
                isSearchable
                value={this.state.selectedCertifications}
                onChange={this.handleSelectChange("selectedCertifications")}
                options={this.state.certificationArray}
              />
              <br />
              <div className="form-row">
                <i className="fas fa-camera px-2"></i>
                <label htmlFor="">Specialization(s)</label>
              </div>
              <Select
                placeholder="Select one or more..."
                name="selectedSpecializations"
                className="basic-multi-select"
                isMulti
                isSearchable
                value={this.state.selectedSpecializations}
                onChange={this.handleSelectChange("selectedSpecializations")}
                options={this.state.specializationArray}
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-12">
                <div className="form-row">
                  <i className="fas fa-pencil-alt px-2"></i>
                  <label htmlFor="">Short biography:</label>
                  <input
                    type="textarea"
                    name="bio"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.bio})}
                    placeholder="Tell us about yourself"
                    value={this.state.bio}
                  onChange={this.onChange}
                  />
                  {errors.bio && (
                  <div className="invalid-feedback">{errors.bio}</div>
                )}
                </div>
              </div>
            </div>
            <br />
            <h3>Social Media:</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="fab fa-instagram px-2"></i>
                  <label htmlFor="">Instagram:</label>
                </div>
                <input type="text" 
                name="instagram"
                className="form-control" 
                value={this.state.instagram}
                onChange={this.onChange} 
                />
              </div>

              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="fab fa-facebook-square px-2"></i>
                  <label htmlFor="">Facebook:</label>
                </div>
                <input type="text" 
                className="form-control" 
                placeholder="" 
                name="facebook"
                value={this.state.facebook}
                onChange={this.onChange} 
                />
              </div>
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="fab fa-twitter px-2"></i>
                  <label htmlFor="">Twitter:</label>
                </div>
                <input type="text" 
                className="form-control" 
                placeholder="" 
                name="twitter"
                value={this.state.twitter}
                onChange={this.onChange} 
                />
              </div>

              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="fas fa-link px-2"></i>
                  <label htmlFor="">Personal Website:</label>
                </div>
                <input type="text" 
                className="form-control" 
                placeholder="" 
                name="website"
                value={this.state.website}
                onChange={this.onChange} 
                />
              </div>
            </div>
            <br />
            <input
              type="submit"
              value="Update Profile"
              className="btn btn-secondary text-uppercase font-weight-bold"
            />
          </form>
          <br />
        </div>
      </div>
    );
  }
}

EditArtistProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditArtistProfile));
