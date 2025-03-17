import './NavBar.css'
import { useLocation, Link } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <div className="navbar-container">
      <Link to="/" className="Name">EaseNest</Link>

      <label htmlFor="menu-checkbox" className="menu-toggle">☰</label>
      <input type="checkbox" id="menu-checkbox" style={{ display: "none" }} />

      <nav className="NavBar">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>
    </div>
  )
}

export default NavBar;
