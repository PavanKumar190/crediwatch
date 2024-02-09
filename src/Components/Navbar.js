// Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  // State to manage the visibility of links
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the visibility of links
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/* Button with Font Awesome icon */}
      <button onClick={toggleMenu}>
        {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
      {/* Links */}
      {isOpen && (
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
