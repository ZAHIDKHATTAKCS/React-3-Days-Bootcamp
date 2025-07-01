import React from 'react';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-section">
      <div className="auth-container">
        <h2>Login <span style={{color:'hotpink'}}>Flower Shop</span></h2>
        <br />
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>Don’t have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
