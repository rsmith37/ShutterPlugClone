import React, { Component } from 'react';
import SearchArtist from './SearchArtist';
import Profiles from './Profiles';

class BrowseArtists extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center text-white">Artist Profiles</h1>
        <p className="lead text-center text-white">
          Browse and connect with local photographers and videographers
        </p>
        <SearchArtist />
        <Profiles />
      </div>
    )
  }
}

export default BrowseArtists;