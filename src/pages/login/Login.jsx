import React from 'react'
import './login.scss'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className='login'>
      <div className="card">

        {/* left side */}
        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quod id beatae excepturi ad, 
            eaque dignissimos repellat iure voluptate.</p>
            <span>Don't have an account ?</span>
            <Link to="/register">
              <button>Register</button>
            </Link>  
        </div>

        {/* right side */}
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='******' />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login