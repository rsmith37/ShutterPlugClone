import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Select from 'react-select';

const specializationArray = [
  {
    value: 'studioPortraits',
    label: 'Studio Portraits'
  },
  {
    value: 'outsidePortraits',
    label: 'Outside Portraits'
  },
  {
    value: 'engagements',
    label: 'Engagements'
  },
  {
    value: 'weddings',
    label: 'Weddings'
  },
  {
    value: 'drones',
    label: 'Drones'
  }
];

const certificationsArray = [
  {
    value: '',
    label: ''
  }
];

class SearchArtist extends Component {
  state = {
    selectedOption: null
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  }

  render() {
    const { selectedOption } = this.state;
    console.log(selectedOption)

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
                <input type="text" className="form-control" placeholder="Enter first name..." />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Last Name</label>
                <input type="text" className="form-control" placeholder="Enter last name..." />
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
                <input type="text" className="form-control" placeholder="Enter zip code..." />
              </div>
              <div className="form-group col-md-6">
                <div className="form-row">
                  <i className="far fa-compass px-2"></i>
                  <label htmlFor="">Distance</label>
                </div>
                <select name="" id="" className="form-control">
                  <option value="" selected>5 miles</option>
                  <option value="">10 miles</option>
                  <option value="">25 miles</option>
                  <option value="">50 miles</option>
                  <option value="">100 miles</option>
                </select>
              </div>
            </div>
            <br />
            <h3>Search by Qualifications</h3>
            <div className="form-group">
              <label htmlFor="">Specialization(s)</label>
              <Select
                placeholder="Select one or multiple"
                className="basic-multi-select"
                isMulti
                isSearchable
                value={selectedOption}
                onChange={this.handleChange}
                options={specializationArray}
              />
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
