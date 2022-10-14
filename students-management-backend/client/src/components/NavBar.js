import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar'>
      STUDENTS MANAGEMENT APP
      <NavLink exact to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>SignUp</NavLink>
    </nav>
  )
}

export default NavBar