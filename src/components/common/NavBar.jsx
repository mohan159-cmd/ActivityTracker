import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {

  //#region variables
  const navigate = useNavigate();
  
  //#region click events
  const onHomeClick = () => {
      navigate("/");
  }

  return (
    <>
      <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand px-4 cursor-pointer" onClick={onHomeClick}>Activity Tracker</a>
          <div class="btn-group">
            <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
              <AccountCircleIcon />
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">Profile</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default NavBar