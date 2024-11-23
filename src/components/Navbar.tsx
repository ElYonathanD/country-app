import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/countries-by-name'>Países por nombre</NavLink>
      <NavLink to='/countries-by-region'>Países por region</NavLink>
      <NavLink to='/countries-by-capital'>Países por Capital</NavLink>
    </nav>
  )
}

export default Navbar
