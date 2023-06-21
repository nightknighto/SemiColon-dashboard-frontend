import { useState } from 'react'
import './Login.scss'
import ReactLogo from '../../assets/Landing_black.png'
import BarLoader from 'react-spinners/BarLoader'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Failed.module.css'
import axios from 'axios'
import { authLogin } from '../../helpers/auth'
import useInput from '../../hooks/use-input'

const Login = () => {
  const [clicked, setClicked] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const navigate = useNavigate()

  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    returnWrong: phoneReturned,
  } = useInput((value) => value.trim().length === 11)

  const {
    value: enteredPass,
    isValid: passIsValid,
    hasError: passHasError,
    valueChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
    returnWrong: passReturned,
  } = useInput((value) => value.trim().length > 0)

  let phoneStyles = `phone-input`
  if (phoneHasError) {
    phoneStyles = `phone-input ${classes['failed-input']}`
  }

  let passStyles = `form-group ${clicked ? 'formClosure' : ''}`
  if (passHasError) {
    passStyles = `form-group ${clicked ? 'formClosure' : ''} ${
      classes['failed-input']
    }`
  }

  const post_Req = () => {
    // 404 , 202
    const body = {
      phone: enteredPhone.trim(),
      password: enteredPass.trim(),
    }
    axios
      .post(
        'https://semicolon-registration-backend.onrender.com/auth/login',
        body
      )
      .then((response) => authLogin(response, navigate))
      .catch((err) => {
        const res = err.response.data.data
        setShowLoader(false)
        setTimeout(() => {
          setClicked(false)
        }, 100)
        if (res === 'Incorrect password') {
          passReturned()
        }

        if (res === 'Incorrect phone number') {
          phoneReturned()
        }
      })
  }

  const formIsValid = phoneIsValid && passIsValid

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!formIsValid) {
      return
    }

    setClicked(true)
    setTimeout(() => {
      setShowLoader(true)
    }, 700)
    setTimeout(() => {
      post_Req()
    }, 100)
  }

  return (
    <div className="login" style={{ overflow: 'hidden' }}>
      <div className={`login-left ${clicked ? 'disappear' : ''}`}>
        <h2 className={`header ${clicked ? 'headerAction' : ''}`}>
          Hi, welcome back!
        </h2>
        <form onSubmit={handleClick}>
          <div className={`form-group ${clicked ? 'formClosure' : ''}`}>
            <label htmlFor="phone">Phone Number</label>
            <div className={phoneStyles}>
              <select name="country-code">
                <option value="+1">+20 (EG)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={enteredPhone}
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
              />
            </div>
          </div>
          <div className={passStyles}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={enteredPass}
              onChange={passChangeHandler}
              onBlur={passBlurHandler}
            />
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
            style={{
              marginTop: '10px',
            }}
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
              className="showLoader"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
                marginLeft: '150px',
              }}
            >
              <BarLoader color="#e4a539" height={3} width={300} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
