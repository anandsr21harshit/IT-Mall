import React from 'react'
import "../css/signup.css"
import {Link} from "react-router-dom"

function SignUp() {
  return (
    <section className="login-container">
        <div className="login-card">
            <h1 className="login-title">SignUp</h1>
            <div className="input-container">
                <label for="userName">Name*</label>
                <input className="input input-primary" type="text" placeholder="Type Username" id="Name"/>

                <label for="userName">Email*</label>
                <input className="input input-primary" type="text" placeholder="Type Email" id="Email"/>

                <label for="Password">Password*</label>
                <input className="input input-primary" type="password" placeholder="Type Password" id="password"/>

                <label for="Password">Confirm Password</label>
                <input className="input input-primary" type="password" placeholder="Type Password" id="password"/>
                
                <div id="conditions"><input type="checkbox"/>I agree to all terms and conditions.</div>
            </div>
            <button className="btn btn-secondary">SIGNUP</button>
            <p className="have-account">Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
    </section>
  )
}

export {SignUp}