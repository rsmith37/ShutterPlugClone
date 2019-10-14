import React, { Component } from "react";
import { Link } from "react-router-dom";
import createArtistProfile from "./CreateArtistProfile";
import "bootstrap/dist/css/bootstrap.min.css";

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

class CreateClientProfile extends Component {
  render() {
    return (
      <div className="card mb-3">
        <h1 className="card-header">Create Client Profile</h1>
        <div className="card-body text-left">
          <form>
            <h3>Client Info:</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Email Address</label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter your email address"
                />
              </div>
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Username</label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please choose a username"
                />
              </div>
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Password</label>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-user px-2"></i>
                  <label htmlFor="">Confirm password:</label>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                />
              </div>
            </div>
            <br />
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
              <br />
              <div className="form-row"></div>
              <br />
              <div className="form-row">
                <div className="form-group col-md-12">
                  <input
                    type="submit"
                    value="Create Profile"
                    className="btn btn-secondary text-uppercase font-weight-bold"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateClientProfile;
