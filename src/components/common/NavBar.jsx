import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  //#region variables
  const navigate = useNavigate();
  
  //#region click events
  const onHomeClick = () => {
      navigate("/");
  }

  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand px-4 cursor-pointer" onClick={onHomeClick}>Activity Tracker</a>
        <form className="d-flex px-4">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </nav>
  )
}

export default NavBar