import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <nav className="navbar">
          <Link to="/" className="links">HOME</Link>
          <Link to="/about" className="links">ABOUT US</Link>
          <Link to="/images" className="links">PROJECTS</Link>
        </nav>
        <Link to="/"><img src="media/home-improvement-image-removebg-preview.png" alt="" className="logo img-responsive"/></Link>
        <nav>
          <Link to="/services" className="links">SERVICES</Link>
          <Link to="/blog" className="links">BLOG</Link>
          <Link to="/contact" className="links">CONTACT US</Link>
        </nav>
    </header>
  );
};

export default Header;