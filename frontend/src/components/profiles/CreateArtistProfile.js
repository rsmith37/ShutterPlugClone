import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";

const name = "";
const location = "";
const radius = "";
const specialization = "";
const experience = "";
const certifications = "";
const bio = "";
const instagram = "";
const facebook = "";
const twitter = "";

const specializationArray = [
  {
    value: "studioPortraits",
    label: "Studio Portraits"
  },
  {
    value: "outsidePortraits",
    label: "Outside Portraits"
  },
  {
    value: "engagements",
    label: "Engagements"
  },
  {
    value: "weddings",
    label: "Weddings"
  },
  {
    value: "drones",
    label: "Drones"
  }
];

class CreateArtistProfile extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
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
                <select name="" id="" className="form-control">
                  <option value="" selected>
                    0 miles
                  </option>
                  <option value="">5 miles</option>
                  <option value="">10 miles</option>
                  <option value="">25 miles</option>
                  <option value="">50 miles</option>
                  <option value="">100 miles</option>
                </select>
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
                className="basic-multi-select"
                isMulti
                isSearchable
                value={selectedOption}
                onChange={this.handleChange}
                options={specializationArray}
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
