import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <nav className="navbar sticky-top navbar-expand-sm mb-3 py-0">
      <div className="logo" style={{ height: '50vh' }}>

      </div>
      <div className="container-fluid bg-danger">
        <h1>Welcome!</h1>
        <div>
           <ul className="navbar-nav mr-auto">
             <li>
               <Link to="/" className="nav-link">
                 <button className="btn">Home</button>
               </Link>
             </li>
             <li>
               <Link to="/Search" className="nav-link">
                <button className="btn">Search</button>
               </Link>
             </li>
           </ul>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {

}

export default Header
