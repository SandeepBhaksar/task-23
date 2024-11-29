import React from 'react';
import logo from '../../../assets/upskillMafiaLogo.jpg';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className="logo">
        <Link to='/dashboard'>
            <img src={logo} alt="logo" />
            </Link>
      </div>
      <div className="li-head">
            <ul>
              <NavLink to='/'>
                <li className="home-setup">Home</li>
                </NavLink>
            </ul>
      </div>
      <div className="login-signup">
        <Link to='/login'>
        <button>Login</button>
        </Link>

        <Link to='/signup'>
        <button>SignUp</button>
        </Link>
      </div>
      </div>
  )
}

export default Header
