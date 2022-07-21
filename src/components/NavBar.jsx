import logo from '../assets/eshop-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavLink to={'/'} className="navbar-brand mt-2 mt-lg-0">
              <img
                src={logo}
                height="45"
                alt="Logo"
                loading="lazy"
              />
             <span>Sport Shop</span>
            </NavLink>
            <div className="navbar-center-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to={'/'} className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/category/1'} className="nav-link">Shoes</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/category/2'} className="nav-link">Clothes</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <CartWidget/>
        </div>
    </nav>
);
  }
  
export default Navbar;