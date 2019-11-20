import React, { Component } from "react";
import "./ArtistCard.css";

export default class ArtistCard extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-12 col-md-pull-6">
            <section className="search-result-item">
              <a className="image-link" href="#">
                <img
                  className="image"
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                />
              </a>
              <div className="search-result-item-body">
                <div className="row">
                  <div className="col-sm-9">
                    <h4 className="artistName">Photographer #1</h4>
                    <p className="locationInfo">Lawrenceville, GA 30043</p>
                    <p className="specializations">
                      Drone Photography, Wedding Photography, Engagement
                      Photography
                    </p>
                    <p className="biography">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div className="col-sm-3 text-align-center">
                    <a className="btn btn-primary btn-info btn-lg" href="#">
                      View Profile
                    </a>
                    <div class="social-btns text-center align-self-end ml-auto">
                      <a
                        className="btn-floating btn-lg btn-tw"
                        type="button"
                        role="button"
                      >
                        <i className="fab fa-facebook-square px-2"></i>
                      </a>
                      <a
                        className="btn-floating btn-lg btn-tw"
                        type="button"
                        role="button"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        className="btn-floating btn-lg btn-tw"
                        type="button"
                        role="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="search-result-item">
              <a className="image-link" href="#">
                <img
                  className="image"
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                />
              </a>
              <div className="search-result-item-body">
                <div className="row">
                  <div className="col-sm-9">
                    <h4 className="artistName">Videographer #1</h4>
                    <p className="locationInfo">Norcross, GA 30093</p>
                    <p className="specializations">
                      Drone Photography, Wedding Photography, Engagement
                      Photography
                    </p>
                    <p className="biography">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                  </div>
                  <div className="col-sm-3 text-align-center">
                    <a className="btn btn-primary btn-info btn-lg" href="#">
                      View Profile
                    </a>
                    <div class="social-btns text-center">
                      <a
                        className="btn-floating btn-lg btn-tw"
                        type="button"
                        role="button"
                      >
                        <i className="fab fa-facebook-square px-2"></i>
                      </a>
                      <a
                        className="btn-floating btn-lg btn-tw"
                        type="button"
                        role="button"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        className="btn-floating btn-lg btn-tw"
                        type="button"
                        role="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
    );
  }
}