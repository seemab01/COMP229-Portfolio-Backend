// Navigation bar shown at the top of every page
import { Link } from 'react-router-dom'
import Logo from './Logo'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <Logo />
        <span>Seemab Qureshi</span>
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
