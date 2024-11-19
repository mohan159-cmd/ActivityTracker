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
    <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand px-4 cursor-pointer" onClick={onHomeClick}>Activity Tracker</a>
        <form class="d-flex px-4">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </nav>
  )
}

export default NavBar