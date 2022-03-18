import './navbar-component-styles.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='link-container'>
        <Link to='/login' className='link'>LOGIN</Link>
        <Link to='/services' className='link'>SERVICES</Link>
        <Link to='/publications' className='link'>PUBLICATIONS</Link>
        <Link to='/knowledgebase' className='link'>KNOWLEDGEBASE</Link>
        <Link to='/contact' className='link'>CONTACT US</Link>
    </nav>
  )
}

export default Navbar;

