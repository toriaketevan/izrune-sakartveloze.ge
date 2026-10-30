import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'ჩვენ შესახებ', end: true },
  { to: '/projects', label: 'პროექტები' },
  { to: '/friends', label: 'მეგობრები და სპონსორები' },
]

function Nav() {
  return (
    <nav className="tabs">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav
