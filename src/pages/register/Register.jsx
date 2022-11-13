import React from 'react';
import './register.scss';
import { Link } from 'react-router-dom';
import * as Sentry from '@sentry/react';

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        {/* left side */}
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="******" />
            <button>Register</button>
          </form>
        </div>

        {/* right side */}
        <div className="right">
          <h1>Gama Media.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta
            quod id beatae excepturi ad, eaque dignissimos repellat iure
            voluptate.
          </p>
          <span>Have an account already ?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sentry.withProfiler(Register, { name: 'Register' });
