import React from 'react'
import Home from './components/home/Home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { routeConfig } from './RouteConfig';
import NavBar from './components/common/NavBar';
import NoFoundPage from './components/common/NoPageFound';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container-fluid pt-3">
        <div className="row">
          <div className="col-1">
            
          </div>
          <div className="col-10">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route>
                    {routeConfig.map(route=><Route path={route.path} element={route.component} />)}
                  </Route>
                  <Route path="*" element={<NoFoundPage />} />
                </Routes>
          </div>
          <div className="col-1">
            
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App