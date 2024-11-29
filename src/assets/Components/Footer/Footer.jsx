import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className="copy-right">
            <p>All rights reserved &#xA9; 2024 MyCompany.</p>

      </div>
      <div className="register">
        <Link to='/signup'>
        <button >Register</button>
        </Link> 
      </div>
    </div>
  )
}
export default Footer