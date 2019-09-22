import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchArtist extends Component {
  render() {
    return (
      <div className="card mb-3">
        <h1 className="card-header">
          Plug an Artist
        </h1>
        <div className="card-body text-left">
          <form>
            <h3>Search by Name</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="">First Name</label>
                <input type="text" className="form-control" placeholder="Enter first name..."/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Last Name</label>
                <input type="text" className="form-control" placeholder="Enter last name..."/>
              </div>
            </div>
            <h3>Search by Location</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="">Zip Code</label>
                <input type="text" className="form-control" placeholder="Enter zip code..."/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Radius</label>
                <select name="" id="" className="form-control">
                  <option value="" disabled selected>Select miles of radius</option>
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">30</option>
                  <option value="">40</option>
                  <option value="">50</option>
                </select>
              </div>
            </div>
            <h3>Search by Qualifications</h3>
            <div className="form-group">
              <select multiple className="form-control">
                <option value="" disabled selected>Choose</option>
                <option value="">Orange</option>
                <option value="">Red</option>
                <option value="">Green</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

SearchArtist.propTypes = {

}

export default SearchArtist
