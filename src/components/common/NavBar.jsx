import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import secureLocalStorage from 'react-secure-storage';

const NavBar = () => {

  //#region variables
  const navigate = useNavigate();
  
  //#region click events
  const onHomeClick = () => {
     if(secureLocalStorage.getItem('userId')){
        navigate('/home-page');
     }else{
      navigate("/");
     }
  }

  const onLogoutClick = () => {
      navigate("/");
      secureLocalStorage.clear();
  }

  return (
    <>
      <nav className="navbar navbar-light justify-content-between nav-bar-height">
          <a className="navbar-brand px-4 cursor-pointer" onClick={onHomeClick}>
            <img src="/img/lg2.png" className='app-logo-container' alt='Activity Tracker'/>
          </a>
          <div className="btn-group">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <AccountCircleIcon />
            </button>
            <ul className="dropdown-menu dropdown-menu-end mt-2 me-1" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li className="dropdown-item cursor-pointer" onClick={onLogoutClick}>
                  Logout
              </li>
            </ul>
          </div>
      </nav>
      <div className='background-color-alicent-blue' style={{ height: `calc(100vh - 76px)` }}>
  <Outlet />
</div>

    </>
  )
}

export default NavBar