import React, { Component } from "react";
import Select from "react-select";

class SearchArtist extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      selectedOption: null,
      selectedDistance: null,
      selectedCertification: null,
      firstName: "",
      lastName: "",
      zipcode: "",
      specialization: "",
      experience: "",
      certifications: "",
      bio: "",
      instagram: "",
      facebook: "",
      twitter: "",
      certificationArray: [
        {
          value: "color",
          label: "Color Photography Certification"
        },
        {
          value: "commericial",
          label: "Commercial Photography Certification"
        },
        {
          value: "digitalEdit",
          label: "Digital Editing Certification"
        },
        {
          value: "digitalImage",
          label: "Digital Imaging Certification"
        },
        {
          value: "masterArtist",
          label: "Master Artist"
        },
        {
          value: "masterPhoto",
          label: "Master of Photography"
        },
        {
          value: "masterWedding",
          label: "Master of Wedding Photography"
        },
        {
          value: "photoCraft",
          label: "Photographic Craftsman"
        },
        {
          value: "portraiture",
          label: "Portraiture"
        },
        {
          value: "studioLight",
          label: "Studio Lighting"
        }
      ],
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
    // const { selectedOption } = this.state;
    // const { selectedDistance } = this.state;
    // const { selectedCertification } = this.state;

    return (
      <div className="card mb-3">
        <h1 className="card-header">Plug an Artist</h1>
        <div className="card-body text-left">
          <form>
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
            <div className="form-row">
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Username</label>
                </div>
                <input
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Search by username"
                />
              </div>
            </div>
            <br />
            <h3>Search by Location</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
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
              </div>
              <div className="form-group col-md-6">
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
              </div>
            </div>
            <br />
            <h3>Search by Certifications / Specializations</h3>
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
                value={this.state.selectedSpecialization}
                onChange={this.handleSelectChange("selectedSpecialization")}
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

SearchArtist.propTypes = {};

export default SearchArtist;
