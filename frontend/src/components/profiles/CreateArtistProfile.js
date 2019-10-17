import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";

const specializationArray = [];

class CreateArtistProfile extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: null,
      selectedDistance: null,
      name: "",
      location: "",
      radius: "",
      specialization: "",
      experience: "",
      certifications: "",
      bio: "",
      instagram: "",
      facebook: "",
      twitter: "",
      specializationArray: [
        {
          value: "architecture",
          label: "Architecture"
        },
        {
          value: "auto",
          label: "Automotive"
        },
        {
          value: "baby",
          label: "Baby Portraits"
        },
        {
          value: "bachParty",
          label: "Bachelor Parties"
        },
        {
          value: "drone",
          label: "Drone"
        },
        {
          value: "engagement",
          label: "Engagement"
        },
        {
          value: "family",
          label: "Family"
        },
        {
          value: "fashion",
          label: "Fashion"
        },
        {
          value: "food",
          label: "Food"
        },
        {
          value: "outside",
          label: "Nature / Outside"
        },
        {
          value: "parties",
          label: "Parties"
        },
        {
          value: "pet",
          label: "Pet"
        },
        {
          value: "photoEdit",
          label: "Photo Editing"
        },
        {
          value: "photoRestore",
          label: "Photo Restoration"
        },
        {
          value: "product",
          label: "Product Photography"
        },
        {
          value: "prom",
          label: "Prom"
        },
        {
          value: "redCarpet",
          label: "Red Carpet"
        },
        {
          value: "reunions",
          label: "Reunions"
        },
        {
          value: "sports",
          label: "Sports"
        },
        {
          value: "stock",
          label: "Stock"
        },
        {
          value: "studio",
          label: "Studio"
        },
        {
          value: "blogV",
          label: "Video Blogging"
        },
        {
          value: "videoEdit",
          label: "Video Editing"
        },
        {
          value: "videography",
          label: "Videography"
        },
        {
          value: "webContent",
          label: "Web Content"
        },
        {
          value: "wedding",
          label: "Wedding"
        }
      ],
      distanceArray: [
        {
          value: "0mi",
          label: "0 miles"
        },
        {
          value: "5mi",
          label: "5 miles"
        },
        {
          value: "10mi",
          label: "10 miles"
        },
        {
          value: "25mi",
          label: "25 miles"
        },
        {
          value: "50mi",
          label: "50 miles"
        },
        {
          value: "100mi",
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
    // const newUser = {
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
    //   email: this.state.email,
    //   username: this.state.username,
    //   usertype: this.state.usertype,
    //   password: this.state.password,
    //   password2: this.state.password2
  }

  render() {
    const { selectedOption } = this.state;
    const { selectedDistance } = this.state;
    return (
      <div className="card mb-3">
        <h1 className="card-header">Create Artist Profile</h1>
        <div className="card-body text-left">
          <form>
            <h3>Artist Info:</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">First Name</label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter your first name"
                />
              </div>
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Last Name</label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter your last name"
                />
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
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <div className="form-group col-md-4">
                <div className="form-row">
                  <i className="fas fa-map-marked px-2"></i>
                  <label htmlFor="">State</label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                />
              </div>
              <div className="form-group col-md-4">
                <div className="form-row">
                  <i className="fas fa-map-marked px-2"></i>
                  <label htmlFor="">Zip Code</label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter zip code"
                />
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
                  value={selectedDistance}
                  onChange={this.handleSelectChange("selectedDistance")}
                  options={this.state.distanceArray}
                />
              </div>
            </div>

            <br />
            <h3>Specializations and Biography:</h3>
            <div className="form-group">
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
                value={selectedOption}
                onChange={this.handleSelectChange("selectedOption")}
                options={this.state.specializationArray}
              />
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-12">
                <div className="form-row">
                  <i className="fas fa-pencil-alt px-2"></i>
                  <label htmlFor="">Short biography:</label>
                  <input
                    type="textarea"
                    className="form-control"
                    placeholder="Tell us about yourself"
                    rows="10"
                  />
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
                <input type="text" className="form-control" placeholder="" />
              </div>

              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="fab fa-facebook-square px-2"></i>
                  <label htmlFor="">Facebook:</label>
                </div>
                <input type="text" className="form-control" placeholder="" />
              </div>
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="fab fa-twitter px-2"></i>
                  <label htmlFor="">Twitter:</label>
                </div>
                <input type="text" className="form-control" placeholder="" />
              </div>

              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="fab fa-linkedin px-2"></i>
                  <label htmlFor="">LinkedIn:</label>
                </div>
                <input type="text" className="form-control" placeholder="" />
              </div>
            </div>
            <br />
            <input
              type="submit"
              value="Create Profile"
              className="btn btn-secondary text-uppercase font-weight-bold"
            />
          </form>
          <br />
        </div>
      </div>
    );
  }
}

export default CreateArtistProfile;
