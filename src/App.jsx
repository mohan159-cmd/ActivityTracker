import React from 'react'
import LandingPage from './components/home/LandingPage'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand px-4">BO Tracker</a>
        <form class="d-flex px-4">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </nav>
      <div className="container-fluid pt-3">
        <div className="row">
          <div className="col-1">
            
          </div>
          <div className="col-10">
            <LandingPage />
          </div>
          <div className="col-1">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App