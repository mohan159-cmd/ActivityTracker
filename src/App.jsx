import React from 'react'
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
import SitePage from './components/registartion/components/SitePage';
import Login from './components/registartion/components/Login';
import Signup from './components/registartion/components/Signup';
import { ToastContainer } from 'react-toastify';

const App = () => { 
  return (
    <Router>
        <Routes>
          <Route path="/" element={<SitePage />} />
          <Route path="/login-page" element={<Login />} />
          <Route path="/signup-page" element={<Signup />} />
          <Route element={<NavBar />}>
            {routeConfig.map(route=><Route path={route.path} element={route.component} />)}
          </Route>
          <Route path="*" element={<NoFoundPage />} />
        </Routes>
        <ToastContainer />
    </Router>
  )
}

export default App