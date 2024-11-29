import React from 'react';
import './login.css'

function login() {
  return (
    <div className='login-page'>
        <div className="content">
      <h2>Login</h2>

      <form>
      <label htmlFor="email">Email ID:</label><input type="email" />
      <label htmlFor="password">Password :</label><input type="password" />
      </form>
      <button>Login</button>
      </div>
    </div>
  )
}

export default login 
