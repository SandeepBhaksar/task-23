import React from 'react'

function Signup() {
    return (
        <div className='login-page'>
            <div className="content">
          <h2>SignUp</h2>
    
          <form>
          <label>Name :</label><input type="text" />
          <label htmlFor="email">Email ID:</label><input type="email" />
          <label htmlFor="password">Password :</label><input type="password" />
          </form>
          <button>Login</button>
          </div>
        </div>
      )
}

export default Signup
