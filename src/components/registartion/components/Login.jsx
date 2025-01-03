import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  //#region variables
  const navigate = useNavigate();

  //#region click events
  const onSignUpClick = () => {
    navigate('/signup-page')
  }

  return (
    <div className="login-container">
        <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <b className="d-flex justify-content-center mb-4">
                    LOGIN
                </b>
                <form>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="loginName" className="form-control" placeholder='Email or username' />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="loginPassword" className="form-control" placeholder='Password' />
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6 d-flex justify-content-center">
                            <div className="form-check mb-3 mb-md-0">
                                <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">SIGN IN</button>
                    </div>
                    <div className="text-center">
                        <p>Not a member? <a href="/signup-page">Register</a></p>
                        <p> <a href="/">Back to home page</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login