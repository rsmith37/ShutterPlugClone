import React, { Component } from "react";
import Select from "react-select";
import { connect } from 'react-redux';
import { searchProfiles } from '../../actions/profileActions';
import PropTypes from 'prop-types';

class SearchArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      selectedDistance: null,
      selectedCertification: null,
      firstName: "",
      lastName: "",
      zipcode: "",
      selectedSpecializations: null,
      certifications: "",
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
  }

  onChange(e) {
    // This sets the state for whatever input field the user is currently typing in
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelectChange = name => selectedOption =>
    this.setState({ [name]: selectedOption });

  onSubmit(e) {
    e.preventDefault();
    
    const selectedSpecializations = [];
    if(this.state.selectedSpecializations !== null) {
      this.state.selectedSpecializations.map(elem => {
        selectedSpecializations.push(elem.value);
      })
    } else {
      this.state.specializationArray.map(elem => {
        selectedSpecializations.push(elem.value)
      })
    }

    const selectedCertification = [];
    if(this.state.selectedCertification !== null) {
      this.state.selectedCertification.map(elem => {
        selectedCertification.push(elem.value);
      })
    } else {
      this.state.certificationArray.map(elem => {
        selectedCertification.push(elem.value)
      })
    }

    const searchData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      selectedSpecializations,
      selectedCertification
    }

    console.log(searchData)
    this.props.searchProfiles(searchData);
  }

  render() {
    return (
      <div className="card mb-3" style={{width: '100%'}}>
        {/* <h1 className="card-header">Plug an Artist</h1> */}
        <div className="card-body text-left">
          <form onSubmit={this.onSubmit}>
            <h3>Search by Name</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">First Name</label>
                </div>
                <input
                  name="firstName"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Enter first name..."
                />
              </div>
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Last Name</label>
                </div>
                <input
                  name="lastName"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Enter last name..."
                />
              </div>
            </div>
            {/* <br /> */}
            {/* <h3>Search by Location</h3> */}
            {/* <div className="form-row"> */}
              {/* <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="fas fa-map-marker px-2"></i>
                  <label htmlFor="">Zip Code</label>
                </div>
                <input
                  name="zipcode"
                  type="text"
                  value={this.state.zipcode}
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Enter zip code..."
                />
              </div> */}
              {/* <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-compass px-2"></i>
                  <label htmlFor="">Distance</label>
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
              </div> */}
            {/* </div> */}
            <br />
            <h3>Search by Qualifications</h3>
            <div className="form-group">
              <div className="form-row">
                <i className="fas fa-camera px-2"></i>
                <label htmlFor="">Certification(s)</label>
              </div>
              <Select
                placeholder="Select one or more..."
                name="selectedCertification"
                className="basic-multi-select"
                isMulti
                isSearchable
                value={this.state.selectedCertification}
                onChange={this.handleSelectChange("selectedCertification")}
                options={this.state.certificationArray}
              />
              <br />
              <div className="form-row">
                <i className="fas fa-camera px-2"></i>
                <label htmlFor="">Specialization(s)</label>
              </div>
              <Select
                placeholder="Select one or more..."
                name="selectedOption"
                className="basic-multi-select"
                isMulti
                isSearchable
                value={this.state.selectedSpecializations}
                onChange={this.handleSelectChange("selectedSpecializations")}
                options={this.state.specializationArray}
              />
            </div>
            <br />
            <input
              type="submit"
              value="Plug an Artist"
              className="btn btn-secondary text-uppercase font-weight-bold"
            />
          </form>
        </div>
      </div>
    );
  }
}

SearchArtist.propTypes = {
  // profile: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired,
  searchProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
})

export default connect(null, { searchProfiles })(SearchArtist);
