import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="container navbar">
      <Link to='/'>Hem</Link>
      <nav className="nav-links">
        <Link to='/about-bread'>Om bröd</Link>
        <Link to='/about'>Kontakt</Link>
      </nav>
    </div>
  )
}