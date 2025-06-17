import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li className={location.pathname === '/portfolio' ? 'active' : ''}><Link to="/portfolio">Portfolio</Link></li>
        <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">About Me</Link></li>
        <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
        <li className={location.pathname === '/resume' ? 'active' : ''}><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;