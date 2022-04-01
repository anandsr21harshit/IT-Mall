import React from 'react'
import "../css/login.css"
import {Link} from "react-router-dom"

function Login() {
  return (
    <form action="submit" className="login-container">
        <div className="login-card">
            <h1 className="login-title">Login</h1>
            <div className="input-container">
                <label for="userName">UserName*</label>
                <input className="input input-primary" type="text" placeholder="Type Username" id="userName"/>
                <label for="Password">Password*</label>
                <input className="input input-primary" type="password" placeholder="Type Password" id="password"/>
                <a href='../'>Forgot password?</a>  
            </div>
            <button className="btn btn-secondary">Login</button>
            <p className="no-account">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    </form>
  )
}

export {Login}