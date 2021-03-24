import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav id="nav">
      <div>
        <h4>Welcome</h4>
      </div>
      <div>
        <Link to="/#">Home</Link>
        <Link to="/campuses">Campuses</Link>
        <Link to="/students">Students</Link>
      </div>
    </nav>
  );
};

export default NavBar;
