import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">Maggie</Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li className={location.pathname === '/portfolio' ? 'active' : ''}>
            <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about" onClick={() => setIsOpen(false)}>About Me</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li className={location.pathname === '/resume' ? 'active' : ''}>
            <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
