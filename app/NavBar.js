import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let navBarClasses = ['nav'];
  if (scrolled) {
    navBarClasses.push('stick');
  }

  return (
    <nav className={navBarClasses.join(' ')}>
      <Link to="/#">Home</Link>
      <Link to="/campuses">Campuses</Link>
      <Link to="/students">Students</Link>
    </nav>
  );
};

export default NavBar;
