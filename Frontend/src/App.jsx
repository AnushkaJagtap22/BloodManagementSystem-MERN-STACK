import React, { useEffect, useContext } from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Home from './pages/Home'
import About from './pages/About'
import Request from './pages/Request'
import Login from './pages/Login'
import Register from './pages/Register'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'

// ⚠️ Make sure this exists
import { Context } from './context'  

const App = () => {

  // eslint-disable-next-line no-unused-vars
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);

  console.log("App rendering, isAuthenticated:", isAuthenticated);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );

        setIsAuthenticated(true);
        setUser(response.data.user);

      } catch {
        setIsAuthenticated(false);
        setUser({});
      }
    };

    fetchUser();
  }, [setIsAuthenticated, setUser]); 

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/request' element={<Request />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>

      <ToastContainer position='top-center' />
    </>
  )
}

export default App