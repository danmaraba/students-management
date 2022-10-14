import {NavLink} from 'react-router-dom';

function Error() {
  return (
   <section className='section'>
    <h2>404</h2>
    <p>page not found</p>
    <NavLink to='/'>back home</NavLink>
   </section>
  )
}

export default Error