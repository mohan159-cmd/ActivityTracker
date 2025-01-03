import React from 'react'
import { useNavigate } from 'react-router-dom'

const SitePage = () => {

  //#region variables
  const navigate = useNavigate();

  //#region click events
  const onHomeClick = () => {
        navigate("/");
  }

  const onLoginClick = () => {
    navigate("/login-page")
  }

  const onSignUpClick = () => {
    navigate("/signup-page")
  }

  return (
    <>
        <nav className="navbar site-nav-bar-bg justify-content-between">
            <a className="navbar-brand px-4 cursor-pointer" onClick={onHomeClick}>Activity Tracker</a>
            <div className='d-flex px-4 child-row-margin-5'>
                <button type="button" className="btn btn-primary" onClick={onLoginClick}>LOG IN</button>
                <button type="button" className="btn btn-secondary" onClick={onSignUpClick}>SIGN UP</button>
            </div>
        </nav>
        <div className="site-bg-container">
            <img 
                src='/img/siteimages/AT5.jpg' 
                alt='No'
                className='site-bg-image' />
        </div>
    </>
  )
}

export default SitePage