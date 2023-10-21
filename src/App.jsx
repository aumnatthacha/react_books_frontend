/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Add from './pages/Add';
import LoginPage from './pages/Login/Login'; // เปลี่ยนจาก Login เป็น LoginPage
import Update from './pages/Update';
import Profile from './pages/Profile';
import Signup from './pages/Signup/Signup'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/login" element={<LoginPage />} /> {/* เปลี่ยนจาก Login เป็น LoginPage */}
          <Route path="/update/:id" element={<Update />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
