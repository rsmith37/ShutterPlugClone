import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm mb-3 py-0">
      <div className="logo">

      </div>
      <div className="container">
        <h1>Welcome!</h1>
        <div>
           <ul className="navbar-nav mr-auto">
             <li>
               <Link to="/" className="nav-link">
                 Home
               </Link>
             </li>
             <li>
               <Link to="/Search" className="nav-link">
                 Search
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
