import './NavBar.css'
import { useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <div className="navbar-container">
      <a href="/" className="Name">EaseNest</a>

      <label htmlFor="menu-checkbox" className="menu-toggle">☰</label>
      <input type="checkbox" id="menu-checkbox" style={{ display: "none" }} />

      <nav className="NavBar">
        <a href="/" className={location.pathname === '/' ? 'active' : ''} >Home </a>
        <a href="/about" className={location.pathname === '/about' ? 'active' : ''} >About</a>
        <a href="/services" className={location.pathname === '/services' ? 'active' : ''} >Services</a>
        <a href="/contact" className={location.pathname === '/contact' ? 'active' : ''} >Contact</a>
      </nav>
    </div>
  )
}

export default NavBar;
