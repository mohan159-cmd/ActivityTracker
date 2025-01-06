import React from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  //#region variables
  const navigate = useNavigate();

  //#region click events
  const onLoginClick = () => {
    navigate("/login-page");
  }

  //#region return
  return (
    <div className="login-container">
        <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <b className="d-flex justify-content-center mb-4">
                    SIGN UP
                </b>
                <form>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="loginName" className="form-control" placeholder='Email' />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="loginPassword" className="form-control" placeholder='Mobile Number' />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="loginPassword" className="form-control" placeholder='Password' />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="loginPassword" className="form-control" placeholder='Confirm Password' />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                            Sign Up
                        </button>
                    </div>
                    <div className="text-center">
                        <p>Already have an account? <a href="#" onClick={onLoginClick}>Sign In</a></p>
                        <p> <a href="/">Back to home page</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup