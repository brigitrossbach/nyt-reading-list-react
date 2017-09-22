import React from 'react';
import NYTLogo from '../times_logo.png'
import {BrowserRouter} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">NYT React</span>
      <div>
      <NavLink to="/readinglist" exact>Reading List</NavLink>
        <img src={NYTLogo} alt="times" />
      </div>
      <span className="normalText">A React App to Search the New York Times</span>
    </div>
  )
}

export default Nav
