import React from 'react'
import './Login.css'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img alt="login" src="/img/foto.jpg" className="image" />
      </div>
      <LoginForm />
    </div>
  )
}

export default Login