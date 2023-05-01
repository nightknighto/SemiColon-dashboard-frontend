import React from 'react';
import './Login.scss';
import ReactLogo from '../../assets/Landing_black.png';

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="login-left">
        <h2>Hi, welcome back!</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div style={{justifyContent: "space-between" }}>

          <div className="form-group">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
              <div className="forgot-password">
    <a href="#">Forgot Your Password?</a>
  </div>
            </div>
          </div>
          
</div>
          <button className="btn btn-primary">Sign In</button>
          <div className="form-group">
            <div className="or-divider">
              <div className="or-divider-line"></div>
              <div className="or-divider-text">Or, login with your gmail</div>
              <div className="or-divider-line"></div>
            </div>
          </div>
          <button className="btn btn-google">Sign In with Google</button>
        </form>
      </div>
      <div className="login-right">
        <div className="test-shine">
          <img src={ReactLogo} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;