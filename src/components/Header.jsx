import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Nav from './Nav'

function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <div className="top-row">
          <Link to="/" className="brand">
            <img src={logo} alt="იზრუნე საქართველოზე" />
            <div>
              იზრუნე
              <small>საქართველოზე</small>
            </div>
          </Link>
          <div className="spacer" />
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header
