import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
// import Admin from './Pages/Admin/Admin'
import Add from './Pages/Add/Add'
import Orders from './Pages/Orders/Orders'
import List from './Pages/List/List'
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "https://animenia-backend.onrender.com";
  return (
    
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />}/>
          <Route path="/list" element={<List  url={url}/>}/>
          <Route path="/orders" element={<Orders url={url} />}/>

        </Routes>
      </div>


   
    </div>
  )
}

export default App
