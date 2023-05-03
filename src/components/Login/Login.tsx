import React, { useState } from 'react'
import './Login.scss'
import ReactLogo from '../../assets/Landing_black.png'
import BarLoader from 'react-spinners/BarLoader'

const Login = () => {
  const [clicked, setClicked] = useState(false)
  const [showLoader, setShowLoader] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setClicked(true)
    setTimeout(() => {
      setShowLoader(true)
    }, 700) // set delay time in milliseconds
  }

  return (
    <div className="login" style={{ overflow: 'hidden' }}>
      <div className={`login-left ${clicked ? 'disappear' : ''}`}>
        <h2 className={`header ${clicked ? 'headerAction' : ''}`}>
          Hi, welcome back!
        </h2>
        <form>
          <div className={`form-group ${clicked ? 'formClosure' : ''}`}>
            <label htmlFor="phone">Phone Number</label>
            <div className="phone-input">
              <select name="country-code">
                <option value="+1">+20 (EG)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
              </select>
              <input type="tel" id="phone" name="phone" />
            </div>
          </div>
          <div className={`form-group ${clicked ? 'formClosure' : ''}`}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div style={{ justifyContent: 'space-between' }}>
            <div className={`form-group ${clicked ? 'formClosure' : ''}`}>
              <div className="remember-me">
                <input type="checkbox" id="remember-me" name="remember-me" />
                <label htmlFor="remember-me">Remember Me</label>
                <div className="forgot-password">
                  <a href="/">Forgot Your Password?</a>
                </div>
              </div>
            </div>
          </div>

          <button
            className={`btn btn-primary ${clicked ? 'formClosure' : ''}`}
            onClick={(e) => handleClick(e)}
          >
            Sign In
          </button>
          <div className={`form-group ${clicked ? 'formClosure' : ''}`}>
            <div className="or-divider">
              <div className="or-divider-line"></div>
              <div className="or-divider-text">Debug your soul</div>
              <div className="or-divider-line"></div>
            </div>
          </div>
        </form>
      </div>
      <div
        className={`login-right ${clicked ? 'zoomIn' : ''}`}
        style={
          clicked
            ? {
                flex: '0.3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                height: '100%',
                minWidth: '60%',
                backgroundColor: '#0f0f14',
                marginLeft: '12px',
                padding: '0',
                textAlign: 'center',
                animation: 'centerImg 1s ease-in-out forwards',
              }
            : {
                flex: '0.3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                height: '100%',
                backgroundColor: '#0f0f14',
                marginLeft: '12px',
                padding: '0',
                textAlign: 'center',
              }
        }
      >
        <div className="test-shine">
          <img src={ReactLogo} alt="Login" />
          {showLoader && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
                marginLeft: '150px',
              }}
            >
              <BarLoader color="#e4a539" height={3} width={500} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
