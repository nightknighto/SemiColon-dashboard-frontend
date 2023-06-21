import { useState, useRef } from 'react'
import './Login.scss'
import ReactLogo from '../../assets/Landing_black.png'
import BarLoader from 'react-spinners/BarLoader'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Failed.module.css'
import axios from 'axios'

const Login = () => {
  const [clicked, setClicked] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const [phoneIsTouched, setPhoneIsTouched] = useState(false)
  const [passIsTouched, setPassIsTouched] = useState(false)

  const phoneInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const phoneIsValid = phoneInputRef.current?.value.trim().length === 11
  let phoneStyles = `phone-input`
  if (!phoneIsValid && phoneIsTouched) {
    phoneStyles = `phone-input ${classes['failed-input']}`
  }

  let passIsValid: boolean
  if (passwordInputRef.current?.value) {
    passIsValid = passwordInputRef.current?.value.trim().length > 0
  } else {
    passIsValid = false
  }

  let passStyles = `form-group ${clicked ? 'formClosure' : ''}`
  if (!passIsValid && passIsTouched) {
    passStyles = `form-group ${clicked ? 'formClosure' : ''} ${
      classes['failed-input']
    }`
  }

  const post_Req = () => {
    // 404 , 202
    const body = {
      phone: phoneInputRef.current?.value.trim(),
      password: passwordInputRef.current?.value.trim(),
    }
    // //https://semicolon-registration-backend.onrender.com/auth/login
    // fetch('https://semicolon-registration-backend.onrender.com/auth/login', {
    //   method: 'post',
    //   body: JSON.stringify(body),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => {
    //     if (response.status === 401) {
    //       throw new Error('Page not found')
    //     }
    //     if (response.status === 200) {
    //       // throw new Error('Accepted')
    //       navigate('/stats')
    //       // return redirect('/stats')
    //     }
    //     return response.json()
    //   })
    //   .catch((err) => console.log(err))
    axios
      .post(
        'https://semicolon-registration-backend.onrender.com/auth/login',
        body
      )
      .then((response) => {
        if (response.data.status == 'success') {
          localStorage.setItem('user', JSON.stringify(response.data.data))
          navigate('stats')
        }
        return response
      })
      .catch((err) => console.log(err))
  }

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!phoneIsValid) {
      setPhoneIsTouched(true)
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

  const onPhoneChangeHandler = () => {
    setPhoneIsTouched(false)
  }

  const onPhoneLoseFocus = () => {
    if (!phoneIsValid) {
      setPhoneIsTouched(true)
    }
  }

  const onPassChangeHandler = () => {
    setPassIsTouched(false)
  }

  const onPassLoseFocus = () => {
    if (!passIsValid) {
      setPassIsTouched(true)
    }
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
                ref={phoneInputRef}
                onChange={onPhoneChangeHandler}
                onBlur={onPhoneLoseFocus}
              />
            </div>
          </div>
          <div className={passStyles}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordInputRef}
              onChange={onPassChangeHandler}
              onBlur={onPassLoseFocus}
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

              <BarLoader color="#e4a539" height={3} width={500} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
