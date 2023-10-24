/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Add from './pages/Add';
import Login from './pages/Login/Login';
// import LoginPage from './pages/Login/Login'; // เปลี่ยนจาก Login เป็น LoginPage
import Update from './pages/Update';
import Profile from './pages/Profile';
import Signup from './pages/Signup/Signup'
import Test from './pages/test';

function App() {
  return (
    <Router>
      <div className="App">ห
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
