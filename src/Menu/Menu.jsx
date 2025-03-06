import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu
import styles from "./Menu.module.css";

export const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  return (
    <nav className={styles.menu}>
      {/* Mobile Menu Button */}
      <button 
        className={styles.menuButton} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul className={`${styles.navList} ${isMenuOpen ? styles.show : ""}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/business" onClick={() => setIsMenuOpen(false)}>Our Business</Link></li>
        
        {/* Dropdown for Products */}
        <li 
          className={styles.dropdown}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link to="/products">Products</Link>
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li><Link to="/products/rice" onClick={() => setIsMenuOpen(false)}>Rice</Link></li>
              <li><Link to="/products/bittergourd" onClick={() => setIsMenuOpen(false)}> Bitter Gourd</Link></li>
              <li><Link to="/products/coconut" onClick={() => setIsMenuOpen(false)}>Coconuts</Link></li>
              <li><Link to="/products/drumstics" onClick={() => setIsMenuOpen(false)}>Drumstics</Link></li>   
                <li><Link to="/products/eggs" onClick={() => setIsMenuOpen(false)}>Eggs</Link></li>
                <li><Link to="/products/greenchilli" onClick={() => setIsMenuOpen(false)}>Green Chilli</Link></li>
                <li><Link to="/products/garlic" onClick={() => setIsMenuOpen(false)}>Garlic</Link></li>
                <li><Link to="/products/ginger" onClick={() => setIsMenuOpen(false)}>Ginger</Link></li>
                <li><Link to="/products/mirchi" onClick={() => setIsMenuOpen(false)}>Mirchi</Link></li>
                <li><Link to="/products/onion" onClick={() => setIsMenuOpen(false)}>Onion</Link></li>
                <li><Link to="/products/pumpkin" onClick={() => setIsMenuOpen(false)}>Pumpkin</Link></li>
                <li><Link to="/products/spices" onClick={() => setIsMenuOpen(false)}>Spices</Link></li>

            </ul>
          )}
        </li>

        <li><Link to="/certifications" onClick={() => setIsMenuOpen(false)}>Certifications</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};
