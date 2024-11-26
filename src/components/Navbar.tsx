import { NavLink } from 'react-router'
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink className='item' to='/countries-by-name'>
        Países por nombre
      </NavLink>
      <NavLink className='item' to='/countries-by-region'>
        Países por region
      </NavLink>
      <NavLink className='item' to='/countries-by-capital'>
        Países por Capital
      </NavLink>
    </nav>
  )
}

export default Navbar
